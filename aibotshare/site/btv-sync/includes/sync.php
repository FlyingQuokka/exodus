<?php
/**
 * The sync. It reads the files in data/ and makes FluentCRM match them.
 * Everything is looked up by name or by a step key and never by an ID, so the same files work on any copy of the site.
 * Running it again changes nothing that is already right. It never deletes a tag and never deletes a contact.
 */

use FluentCrm\App\Models\Tag;
use FluentCrm\App\Models\Funnel;
use FluentCrm\App\Models\FunnelSequence;
use FluentCrm\App\Models\FunnelCampaign;
use FluentCrm\App\Services\Funnel\FunnelHelper;

class BTV_Sync
{
    public $log = [];
    public $publish = false;

    private $emails = null;
    private $tagIds = [];

    public function __construct($options = [])
    {
        $this->publish = !empty($options['publish']);
    }

    private function say($message)
    {
        $this->log[] = $message;
        if (php_sapi_name() === 'cli') {
            echo $message . "\n";
        }
    }

    private function readJson($path)
    {
        $raw = file_get_contents($path);
        $data = json_decode($raw, true);
        if (!is_array($data)) {
            throw new RuntimeException('Cannot read ' . $path . ': ' . json_last_error_msg());
        }
        return $data;
    }

    public function run()
    {
        if (!class_exists('FluentCrm\App\Models\Tag')) {
            throw new RuntimeException('FluentCRM is not active.');
        }

        $this->assets();
        $this->tags();
        $this->cartEmails();
        $this->funnels();
        $this->retired();
        $this->forms();
        $this->campaigns();
        $this->settings();
        $this->affiliateEmails();
        $this->docsTemplates();
        $this->banners();
    }

    /**
     * Draft broadcast campaigns. They are never scheduled or sent by the sync. A person presses send.
     * The audience is everyone with one tag minus everyone with any of the excluded tags.
     */
    private function campaigns()
    {
        $path = BTV_SYNC_DIR . '/data/campaigns.json';
        if (!file_exists($path)) {
            return;
        }
        foreach ($this->readJson($path) as $def) {
            $mail = $this->email($def['email']);
            $campaign = \FluentCrm\App\Models\Campaign::where('title', $def['title'])->first();
            $audience = [['list' => 'all', 'tag' => $this->tagId($def['include'])]];
            $excluded = [];
            foreach ($def['exclude'] as $tag) {
                $excluded[] = ['list' => 'all', 'tag' => $this->tagId($tag)];
            }
            if (!$campaign) {
                $campaign = new \FluentCrm\App\Models\Campaign();
                $campaign->title = $def['title'];
                $campaign->status = 'draft';
            }
            if ($campaign->status !== 'draft') {
                $this->say('campaign: ' . $def['title'] . ' is ' . $campaign->status . ', left alone');
                continue;
            }
            $campaign->email_subject = $mail['subject'];
            $campaign->email_body = str_replace('{{domain}}', btv_base_domain(), $mail['body_html']);
            $campaign->design_template = 'botterverse';
            $settings = is_array($campaign->settings) ? $campaign->settings : [];
            $settings['subscribers'] = $audience;
            $settings['excludedSubscribers'] = $excluded;
            $settings['sending_filter'] = 'list_tag';
            $settings['sending_type'] = 'instant';
            $campaign->settings = $settings;
            $campaign->save();
            $this->say('campaign: ' . $def['title'] . ' saved as a draft');
        }
    }

    /**
     * FluentCRM experimental features. A value of "no" is the default and is written only when the feature
     * was on. Nothing here switches a feature on unless the file says so.
     */
    private function settings()
    {
        $path = BTV_SYNC_DIR . '/data/settings.json';
        if (!file_exists($path)) {
            return;
        }
        $def = $this->readJson($path);
        $current = get_option('_fluentcrm_experimental_settings', []);
        $current = is_array($current) ? $current : [];
        $changed = [];
        foreach ($def['fluentcrm_experimental'] as $key => $value) {
            $was = isset($current[$key]) ? $current[$key] : 'no';
            if ($was !== $value) {
                $current[$key] = $value;
                $changed[] = $key . '=' . $value;
            }
        }
        if ($changed) {
            update_option('_fluentcrm_experimental_settings', $current);
        }

        // The reply-to address on every FluentCRM email. Replies reach the support desk.
        if (!empty($def['fluentcrm_reply_to'])) {
            $global = get_option('fluentcrm-global-settings', []);
            $global = is_array($global) ? $global : [];
            $email = isset($global['email_settings']) && is_array($global['email_settings']) ? $global['email_settings'] : [];
            $want = str_replace('{{domain}}', btv_base_domain(), $def['fluentcrm_reply_to']);
            $name = isset($def['fluentcrm_reply_to_name']) ? $def['fluentcrm_reply_to_name'] : '';
            if ((isset($email['reply_to_email']) ? $email['reply_to_email'] : '') !== $want || (isset($email['reply_to_name']) ? $email['reply_to_name'] : '') !== $name) {
                $email['reply_to_email'] = $want;
                $email['reply_to_name'] = $name;
                $global['email_settings'] = $email;
                update_option('fluentcrm-global-settings', $global);
                $changed[] = 'reply_to=' . $want;
            }
        }
        $this->say('settings: ' . ($changed ? implode(', ', $changed) : 'no change'));
    }

    /**
     * Banners and the slots they sit in, kept in Advanced Ads. The file is the single source of truth for
     * everything it lists: a later run puts back any change made in the admin to a listed banner or slot.
     * Banners and slots made by hand are never touched. Nothing is deleted. To switch a banner off set "active": false.
     * Found again by the key kept in post meta `_btv_key`, never by ID.
     * A new banner starts as a draft. A banner whose file says active is published only on a run with --publish.
     */
    private function banners()
    {
        $path = BTV_SYNC_DIR . '/data/banners.json';
        if (!file_exists($path)) {
            return;
        }
        if (!function_exists('wp_advads_create_new_ad') || !function_exists('wp_advads_create_new_placement')) {
            $this->say('banners: Advanced Ads 2.x is not active, skipped');
            return;
        }
        $def = $this->readJson($path);
        $zone = wp_timezone();

        $find = function ($postType, $key) {
            $found = get_posts([
                'post_type' => $postType, 'post_status' => 'any', 'numberposts' => 1, 'fields' => 'ids',
                'meta_key' => '_btv_key', 'meta_value' => $key,
            ]);
            return $found ? (int) $found[0] : 0;
        };

        $adIds = [];
        foreach ($def['banners'] as $b) {
            $ad = null;
            $id = $find('advanced_ads', $b['key']);
            if ($id) {
                $ad = wp_advads_get_ad($id);
            }
            $isNew = !$ad;
            if ($isNew) {
                $ad = wp_advads_create_new_ad('plain');
            }

            // The page choice: "all" or a list of page slugs, turned into this site's page IDs.
            $conditions = [];
            if (isset($b['pages']) && is_array($b['pages'])) {
                $ids = [];
                foreach ($b['pages'] as $slug) {
                    $page = get_page_by_path($slug, OBJECT, 'page');
                    if ($page) {
                        $ids[] = (int) $page->ID;
                    } else {
                        $this->say('banner ' . $b['key'] . ': no page with the slug ' . $slug);
                    }
                }
                $conditions = [['type' => 'postids', 'operator' => 'is', 'value' => $ids]];
            }

            $ends = 0;
            if (!empty($b['ends'])) {
                $date = date_create($b['ends'], $zone);
                $ends = $date ? $date->getTimestamp() : 0;
            }

            $status = $isNew ? 'draft' : $ad->get_status();
            if (empty($b['active'])) {
                $status = 'draft';
            } elseif ($this->publish) {
                $status = 'publish';
            }
            $status = in_array($status, ['draft', 'publish'], true) ? $status : 'draft';

            $changed = [];
            if ($isNew || $ad->get_title() !== $b['title']) { $ad->set_prop('title', $b['title']); $changed[] = 'title'; }
            if ($isNew || $ad->get_content() !== $b['html']) { $ad->set_prop('content', $b['html']); $changed[] = 'html'; }
            if ($isNew || $ad->get_status() !== $status) { $ad->set_prop('status', $status); $changed[] = 'status ' . $status; }
            if ($isNew || (int) $ad->get_expiry_date() !== $ends) { $ad->set_prop('expiry_date', $ends ?: false); $changed[] = 'end date'; }
            if ($isNew || wp_json_encode($ad->get_display_conditions()) !== wp_json_encode($conditions)) { $ad->set_display_conditions($conditions); $changed[] = 'pages'; }

            if ($changed) {
                $id = $ad->save();
            }
            update_post_meta($id, '_btv_key', $b['key']);
            $adIds[$b['key']] = $id;
            $this->say('banner ' . $b['key'] . ': ' . ($isNew ? 'created (' . implode(', ', $changed) . ')' : ($changed ? 'updated ' . implode(', ', $changed) : 'no change')));
        }

        foreach ($def['slots'] as $s) {
            $placement = null;
            $id = $find('advanced_ads_plcmnt', $s['key']);
            if ($id) {
                $placement = wp_advads_get_placement($id);
            }
            $isNew = !$placement;
            if ($isNew) {
                $placement = wp_advads_create_new_placement('default');
            }
            $item = (!empty($s['banner']) && isset($adIds[$s['banner']])) ? 'ad_' . $adIds[$s['banner']] : '';
            if (!empty($s['banner']) && !isset($adIds[$s['banner']])) {
                $this->say('slot ' . $s['key'] . ': the banner ' . $s['banner'] . ' is not in the file, slot left empty');
            }
            $status = $item ? 'publish' : 'draft';

            $changed = [];
            if ($isNew || $placement->get_title() !== $s['title']) { $placement->set_prop('title', $s['title']); $changed[] = 'title'; }
            if ($isNew || $placement->get_slug() !== $s['key']) { $placement->set_prop('slug', $s['key']); $changed[] = 'id'; }
            if ($isNew || $placement->get_item() !== $item) { $placement->set_item($item); $changed[] = 'banner'; }
            if ($isNew || $placement->get_status() !== $status) { $placement->set_prop('status', $status); $changed[] = 'status ' . $status; }
            if ($changed) {
                $id = $placement->save();
            }
            update_post_meta($id, '_btv_key', $s['key']);
            $this->say('slot ' . $s['key'] . ': ' . ($isNew ? 'created (' . implode(', ', $changed) . ')' : ($changed ? 'updated ' . implode(', ', $changed) : 'no change')));
        }
    }

    /**
     * Switch off FluentAffiliate's own emails that say things the app does not do.
     * The app works out and pays every commission and sends its own emails for it.
     */
    private function docsTemplates()
    {
        global $wpdb;
        $theme = get_stylesheet();

        // The help pages use our copies of the Better Docs templates (data/templates): the same width as every other page and no plugin background.
        // Better Docs keeps its saved templates in the database under its own name, so they are found there by name.
        $written = 0;
        foreach (glob(BTV_SYNC_DIR . '/data/templates/*.html') as $file) {
            $name = basename($file, '.html');
            $id = (int) $wpdb->get_var($wpdb->prepare(
                "SELECT p.ID FROM {$wpdb->posts} p JOIN {$wpdb->term_relationships} r ON r.object_id = p.ID JOIN {$wpdb->term_taxonomy} x ON x.term_taxonomy_id = r.term_taxonomy_id JOIN {$wpdb->terms} t ON t.term_id = x.term_id
                 WHERE p.post_type = 'wp_template' AND p.post_name = %s AND x.taxonomy = 'wp_theme' AND t.name = 'betterdocs/betterdocs' LIMIT 1",
                $name
            ));
            $content = file_get_contents($file);
            if ($id && $content !== false && $wpdb->get_var($wpdb->prepare("SELECT post_content FROM {$wpdb->posts} WHERE ID = %d", $id)) !== $content) {
                $wpdb->update($wpdb->posts, ['post_content' => $content], ['ID' => $id]);
                clean_post_cache($id);
                $written++;
            }
        }
        $this->say('saved templates: ' . $written . ' help page template(s) written from data/templates');

        // Better Docs saves its own templates, and they name another theme's header and footer.
        $rows = $wpdb->get_results("SELECT ID, post_content FROM {$wpdb->posts} WHERE post_type = 'wp_template' AND post_content LIKE '%wp:template-part%'");
        $fixed = 0;
        foreach ($rows as $row) {
            $new = preg_replace('/(wp:template-part \{"slug":"(?:header|footer)"[^}]*?"theme":")(?!' . preg_quote($theme, '/') . '")[^"]+"/', '${1}' . $theme . '"', $row->post_content);
            if ($new !== null && $new !== $row->post_content) {
                $wpdb->update($wpdb->posts, ['post_content' => $new], ['ID' => $row->ID]);
                clean_post_cache($row->ID);
                $fixed++;
            }
        }
        $this->say('saved templates: header and footer repointed in ' . $fixed);
    }

    private function affiliateEmails()
    {
        $path = BTV_SYNC_DIR . '/data/affiliate-emails.json';
        if (!file_exists($path)) {
            return;
        }
        if (!class_exists('FluentAffiliate\App\Helper\Utility')) {
            $this->say('affiliate emails: FluentAffiliate is not active, skipped');
            return;
        }
        $def = $this->readJson($path);
        $utility = 'FluentAffiliate\App\Helper\Utility';
        $saved = $utility::getOption('email_notifications', []);
        $saved = is_array($saved) ? $saved : [];
        $changed = [];
        foreach ($def['off'] as $key) {
            $row = isset($saved[$key]) && is_array($saved[$key]) ? $saved[$key] : [];
            if ((isset($row['active']) ? $row['active'] : 'yes') !== 'no') {
                $row['active'] = 'no';
                $saved[$key] = $row;
                $changed[] = $key;
            }
        }
        if ($changed) {
            $utility::updateOption('email_notifications', $saved);
        }
        $this->say('affiliate emails: ' . ($changed ? 'switched off ' . implode(', ', $changed) : 'no change'));
    }

    /**
     * Set the wording of the FluentCart emails we use and switch off the stock ones we do not.
     * Notifications are found by name. FluentCart keeps the settings in its own meta table.
     */
    private function cartEmails()
    {
        if (!class_exists('FluentCart\App\Services\Email\EmailNotifications')) {
            $this->say('cart emails: FluentCart is not active, skipped');
            return;
        }
        $path = BTV_SYNC_DIR . '/data/fluentcart.json';
        if (!file_exists($path)) {
            return;
        }
        $def = $this->readJson($path);
        $class = 'FluentCart\App\Services\Email\EmailNotifications';
        $known = $class::getNotifications();
        foreach ($def['send'] as $name => $emailId) {
            if (!isset($known[$name])) {
                throw new RuntimeException('FluentCart has no notification called ' . $name);
            }
            $mail = $this->email($emailId);
            $class::updateNotification($name, [
                'active'          => 'yes',
                'subject'         => $mail['subject'],
                'email_body'      => str_replace('{{domain}}', btv_base_domain(), $mail['body_html']),
                'is_default_body' => 'no',
            ]);
        }
        foreach ($def['off'] as $name) {
            if (!isset($known[$name])) {
                throw new RuntimeException('FluentCart has no notification called ' . $name);
            }
            $class::updateNotification($name, ['active' => 'no']);
        }
        $this->say('cart emails: ' . count($def['send']) . ' set and ' . count($def['off']) . ' switched off');
    }

    /**
     * Upload the email logo to the media library once. The email template points at it.
     */
    private function assets()
    {
        $dir = BTV_SYNC_DIR . '/data/assets';
        $file = $dir . '/btv-logo-transparent.png';
        if (!file_exists($file)) {
            return;
        }
        // Found by the id kept from the first upload. A slug search alone is not enough, because WordPress adds
        // a number to the name when a file with the same name already exists.
        $kept = (int) get_option('btv_email_logo_id');
        if ($kept && get_post($kept) && get_post_type($kept) === 'attachment'
            && basename((string) get_attached_file($kept)) !== 'btv-logo-transparent.png' && strpos(basename((string) get_attached_file($kept)), 'btv-email-logo') === 0) {
            // The earlier logo upload. It is replaced by the current logo and its files are removed.
            wp_delete_attachment($kept, true);
            delete_option('btv_email_logo_id');
            $this->say('asset: earlier email logo removed');
            $kept = 0;
        }
        if ($kept && get_post($kept) && get_post_type($kept) === 'attachment') {
            $this->say('asset: logo already in the media library');
            return;
        }
        global $wpdb;
        $found = (int) $wpdb->get_var("SELECT ID FROM {$wpdb->posts} WHERE post_type = 'attachment' AND post_name LIKE 'btv-logo-transparent%' ORDER BY ID LIMIT 1");
        if ($found) {
            update_option('btv_email_logo_id', $found);
            $this->say('asset: logo already in the media library');
            return;
        }
        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/media.php';
        require_once ABSPATH . 'wp-admin/includes/image.php';
        $tmp = wp_tempnam('btv-logo-transparent.png');
        copy($file, $tmp);
        $id = media_handle_sideload(['name' => 'btv-logo-transparent.png', 'tmp_name' => $tmp], 0);
        if (is_wp_error($id)) {
            throw new RuntimeException('Logo upload failed: ' . $id->get_error_message());
        }
        update_option('btv_email_logo_id', (int) $id);
        $this->say('asset: logo uploaded as attachment ' . $id);
    }

    private function tags()
    {
        $tags = $this->readJson(BTV_SYNC_DIR . '/data/tags.json');
        foreach ($tags as $title) {
            $slug = sanitize_title($title);
            $tag = Tag::where('slug', $slug)->first();
            if (!$tag) {
                $tag = Tag::create(['title' => $title, 'slug' => $slug]);
                $this->say('tag: created ' . $title);
            }
            $this->tagIds[$title] = (int) $tag->id;
        }
        $this->say('tag: ' . count($tags) . ' checked');
    }

    private function tagId($title)
    {
        if (isset($this->tagIds[$title])) {
            return $this->tagIds[$title];
        }
        $tag = Tag::where('slug', sanitize_title($title))->first();
        if (!$tag) {
            throw new RuntimeException('Tag not found: ' . $title . '. Add it to data/tags.json.');
        }
        return $this->tagIds[$title] = (int) $tag->id;
    }

    /** The id of a FluentCRM list found by its title. The list is created if it is missing. */
    private function listId($title)
    {
        global $wpdb;
        $table = $wpdb->prefix . 'fc_lists';
        $id = (int) $wpdb->get_var($wpdb->prepare("SELECT id FROM $table WHERE title = %s", $title));
        if (!$id) {
            $now = current_time('mysql');
            $wpdb->insert($table, ['title' => $title, 'slug' => sanitize_title($title), 'is_public' => 0, 'created_at' => $now, 'updated_at' => $now]);
            $id = (int) $wpdb->insert_id;
            $this->say('lists: created ' . $title . ' as list ' . $id);
        }
        return $id;
    }

    private function email($id)
    {
        if ($this->emails === null) {
            $this->emails = $this->readJson(BTV_SYNC_DIR . '/data/emails.json');
        }
        if (!isset($this->emails[$id])) {
            throw new RuntimeException('Email not found in data/emails.json: ' . $id);
        }
        return $this->emails[$id];
    }

    private function funnels()
    {
        $defs = [];
        foreach (glob(BTV_SYNC_DIR . '/data/funnels/*.json') as $path) {
            $defs[] = $this->readJson($path);
        }
        // Pass 1: every automation exists, so steps can refer to each other by title.
        foreach ($defs as $def) {
            $this->ensureFunnel($def);
        }
        // Pass 2: write the steps.
        foreach ($defs as $def) {
            $this->saveFunnel($def);
        }
        // FluentCRM keeps a list of the triggers of published automations and attaches only those at start-up.
        // A status changed straight in the database leaves that list stale, so rebuild it the way FluentCRM does.
        (new \FluentCrm\App\Hooks\Handlers\FunnelHandler())->resetFunnelIndexes();
    }

    /**
     * The FluentCRM trigger name, trigger settings and conditions for a definition.
     */
    private function triggerFor($def)
    {
        $trigger = $def['trigger'];
        $conditions = ['run_multiple' => !empty($def['run_multiple']) ? 'yes' : 'no'];
        switch ($trigger['type']) {
            case 'tag_applied':
            case 'tag_removed':
                return [
                    $trigger['type'] === 'tag_applied' ? 'fluentcrm_contact_added_to_tags' : 'fluentcrm_contact_removed_from_tags',
                    ['tags' => array_map([$this, 'tagId'], $trigger['tags']), 'select_type' => 'any'],
                    $conditions,
                ];
            case 'order_refunded':
                return [
                    'fluent_cart/order_fully_refunded',
                    ['subscription_status' => 'subscribed'],
                    $conditions + ['product_ids' => [], 'product_categories' => []],
                ];
            case 'cart_abandoned':
                return [
                    'fc_ab_cart_simulation_fluent_cart',
                    ['priority' => 10],
                    ['cart_conditions' => [[]], 'active_once' => 'no', 'require_subscribed' => 'no'],
                ];
            case 'subscription_activated':
                return [
                    'fluent_cart/subscription_activated',
                    ['subscription_status' => 'subscribed'],
                    $conditions + ['product_ids' => []],
                ];
        }
        throw new RuntimeException('Unknown trigger type: ' . $trigger['type']);
    }

    private function ensureFunnel($def)
    {
        list($name, $settings, $conditions) = $this->triggerFor($def);
        $funnel = Funnel::where('title', $def['title'])->first();
        if (!$funnel) {
            Funnel::create([
                'title'        => $def['title'],
                'trigger_name' => $name,
                'status'       => 'draft',
                'conditions'   => $conditions,
                'settings'     => $settings,
                'created_by'   => get_current_user_id(),
            ]);
            $this->say('automation: created ' . $def['title']);
            return;
        }
        if ($funnel->trigger_name !== $name) {
            $funnel->trigger_name = $name;
            $funnel->save();
            $this->say('automation: trigger changed on ' . $def['title']);
        }
    }

    private function funnelId($title)
    {
        $funnel = Funnel::where('title', $title)->first();
        if (!$funnel) {
            throw new RuntimeException('Automation not found: ' . $title . '. Add its file to data/funnels.');
        }
        return (int) $funnel->id;
    }

    private function saveFunnel($def)
    {
        list($name, $settings, $conditions) = $this->triggerFor($def);
        $funnel = Funnel::where('title', $def['title'])->first();

        $existing = [];
        foreach (FunnelSequence::where('funnel_id', $funnel->id)->get() as $row) {
            $existing[$row->title] = $row;
        }

        $sequences = [];
        foreach ($def['steps'] as $step) {
            $sequences[] = $this->buildStep($step, $existing);
        }

        $status = ($this->publish && !empty($def['publish'])) ? 'published' : $funnel->status;
        FunnelHelper::saveFunnelSequence($funnel->id, [
            'sequences'       => $sequences,
            'funnel_settings' => json_encode($settings),
            'conditions'      => $conditions,
            'funnel_title'    => $def['title'],
            'status'          => in_array($status, ['draft', 'published'], true) ? $status : 'draft',
        ]);
        $this->say('automation: ' . $def['title'] . ' saved with ' . count($sequences) . ' top-level steps (' . $status . ')');
    }

    /**
     * One step as FluentCRM stores it. A step is found again by its key, which is kept in the title.
     */
    private function buildStep($step, $existing)
    {
        $key = $step['key'];
        $row = [
            'id'          => isset($existing[$key]) ? $existing[$key]->id : null,
            'title'       => $key,
            'description' => isset($step['note']) ? $step['note'] : '',
            'type'        => 'action',
        ];
        switch ($step['do']) {
            case 'email':
                $mail = $this->email($step['email']);
                $campaign = FunnelCampaign::getMock();
                $campaign['settings'] = (array) $campaign['settings'];
                $refId = 0;
                if (isset($existing[$key])) {
                    $refId = (int) (isset($existing[$key]->settings['reference_campaign']) ? $existing[$key]->settings['reference_campaign'] : 0);
                }
                $campaign['id'] = $refId ?: '';
                $campaign['email_subject'] = $mail['subject'];
                $campaign['email_body'] = $mail['body_html'];
                $campaign['design_template'] = 'botterverse';
                $row['action_name'] = 'send_custom_email';
                $row['settings'] = [
                    'reference_campaign' => $refId ?: '',
                    'send_email_to_type' => 'contact',
                    'send_email_custom'  => '',
                    'campaign'           => $campaign,
                    'is_scheduled'       => 'no',
                    'scheduled_at'       => '',
                    'skip_if_overdue'    => 'no',
                    'mailer_settings'    => $campaign['settings']['mailer_settings'],
                ];
                break;
            case 'wait':
                $row['action_name'] = 'fluentcrm_wait_times';
                if (isset($step['until'])) {
                    // Wait until the next chosen day at a fixed time of day, so the daily rhythm holds.
                    $row['settings'] = [
                        'wait_type'        => 'to_day',
                        'to_day'           => $step['until']['days'],
                        'to_day_time'      => $step['until']['time'],
                        'wait_time_amount' => '',
                        'wait_time_unit'   => 'days',
                    ];
                } else {
                    $row['settings'] = [
                        'wait_type'        => 'unit_wait',
                        'wait_time_amount' => (string) $step['amount'],
                        'wait_time_unit'   => $step['unit'],
                    ];
                }
                break;
            case 'add_tag':
            case 'remove_tag':
                $row['action_name'] = $step['do'] === 'add_tag' ? 'add_contact_to_tag' : 'detach_contact_from_tag';
                $row['settings'] = ['tags' => array_map([$this, 'tagId'], $step['tags'])];
                break;
            case 'cancel':
                $row['action_name'] = 'remove_from_funnel';
                $row['settings'] = ['automation_ids' => array_map([$this, 'funnelId'], $step['automations'])];
                break;
            case 'end':
                $row['action_name'] = 'end_this_funnel';
                $row['settings'] = [];
                break;
            case 'condition':
                $row['type'] = 'conditional';
                $row['action_name'] = 'funnel_condition';
                $row['settings'] = [
                    'conditions' => [[[
                        'source'   => ['segment', 'tags'],
                        'operator' => (isset($step['if']['match']) && $step['if']['match'] === 'all') ? 'in_all' : 'in',
                        'value'    => array_map([$this, 'tagId'], $step['if']['tags']),
                    ]]],
                ];
                $row['children'] = ['yes' => [], 'no' => []];
                foreach (['yes', 'no'] as $branch) {
                    foreach (isset($step[$branch]) ? $step[$branch] : [] as $child) {
                        if ($child['do'] === 'condition') {
                            throw new RuntimeException('FluentCRM allows one level of conditions only (' . $child['key'] . ').');
                        }
                        $row['children'][$branch][] = $this->buildStep($child, $existing);
                    }
                }
                break;
            default:
                throw new RuntimeException('Unknown step type: ' . $step['do']);
        }
        return $row;
    }

    /**
     * Remove automations that were dropped. Only an automation that no contact has entered is deleted,
     * and only if it is listed in data/retired.json. Anything with contacts in it is left alone.
     */
    private function retired()
    {
        $path = BTV_SYNC_DIR . '/data/retired.json';
        if (!file_exists($path)) {
            return;
        }
        foreach ($this->readJson($path) as $title) {
            $funnel = Funnel::where('title', $title)->first();
            if (!$funnel) {
                continue;
            }
            $inUse = \FluentCrm\App\Models\FunnelSubscriber::where('funnel_id', $funnel->id)->count();
            if ($inUse) {
                $this->say('retired: ' . $title . ' has ' . $inUse . ' contacts, left alone');
                continue;
            }
            foreach (FunnelSequence::where('funnel_id', $funnel->id)->get() as $row) {
                do_action('fluentcrm_funnel_sequence_deleting_' . $row->action_name, $row, $funnel);
                $row->delete();
            }
            $funnel->delete();
            $this->say('retired: deleted the unused automation ' . $title);
        }
    }

    /**
     * Fluent Forms: create or update the forms in data/forms.json and their FluentCRM feeds.
     * A form is found again by its title. The form id is kept in an option so the theme can find it.
     */
    private function forms()
    {
        $path = BTV_SYNC_DIR . '/data/forms.json';
        if (!file_exists($path) || !function_exists('wpFluent') && !class_exists('FluentForm\\App\\Helpers\\Helper')) {
            return;
        }
        global $wpdb;
        $forms = $wpdb->prefix . 'fluentform_forms';
        $metas = $wpdb->prefix . 'fluentform_form_meta';
        if ($wpdb->get_var("SHOW TABLES LIKE '" . esc_sql($forms) . "'") !== $forms) {
            $this->say('forms: Fluent Forms tables not found, skipped');
            return;
        }

        foreach ($this->readJson($path) as $def) {
            $now = current_time('mysql');
            $fieldsJson = wp_json_encode($this->leadFormFields($def));
            $id = (int) $wpdb->get_var($wpdb->prepare("SELECT id FROM $forms WHERE title = %s", $def['title']));
            if (!$id) {
                $wpdb->insert($forms, [
                    'title' => $def['title'], 'status' => 'published', 'appearance_settings' => '', 'form_fields' => $fieldsJson,
                    'has_payment' => 0, 'type' => 'form', 'conditions' => '', 'created_by' => get_current_user_id(),
                    'created_at' => $now, 'updated_at' => $now,
                ]);
                $id = (int) $wpdb->insert_id;
                $this->say('forms: created ' . $def['title'] . ' as form ' . $id);
            } else {
                $wpdb->update($forms, ['form_fields' => $fieldsJson, 'status' => 'published', 'updated_at' => $now], ['id' => $id]);
            }

            $settings = [
                'confirmation' => [
                    'redirectTo' => 'samePage', 'messageToShow' => $def['success'], 'customPage' => null,
                    'samePageFormBehavior' => 'hide_form', 'customUrl' => null,
                ],
                'restrictions' => [
                    'limitNumberOfEntries' => ['enabled' => false, 'numberOfEntries' => null, 'period' => 'total', 'limitReachedMsg' => 'Maximum number of entries exceeded.'],
                    'scheduleForm' => ['enabled' => false, 'start' => null, 'end' => null, 'pendingMsg' => 'Form submission is not started yet.', 'expiredMsg' => 'Form submission is now closed.'],
                    'requireLogin' => ['enabled' => false, 'requireLoginMsg' => 'You must be logged in to submit the form.'],
                    'denyEmptySubmission' => ['enabled' => false, 'message' => 'Please fill in the form.'],
                ],
                'layout' => ['labelPlacement' => 'top', 'helpMessagePlacement' => 'with_label', 'errorMessagePlacement' => 'inline', 'asteriskPlacement' => 'asterisk-right'],
            ];
            // Everyone joins the one main list. Tags do the segmenting: the status tag and a source tag for where the form sits.
            $listId = $this->listId(isset($def['list']) ? $def['list'] : 'Main List');
            $tagIds = array_map([$this, 'tagId'], isset($def['tags']) ? $def['tags'] : [$def['tag']]);
            $feed = [
                'name' => 'Lead capture to FluentCRM',
                'first_name' => '{inputs.first_name}', 'last_name' => '', 'full_name' => '', 'email' => '{inputs.email}',
                'other_fields' => [['item_value' => '', 'label' => '']], 'company_fields' => [['item_value' => '', 'label' => '']],
                'list_id' => (string) $listId, 'tag_ids' => $tagIds, 'tag_ids_selection_type' => 'simple', 'tag_routers' => [],
                'skip_if_exists' => false, 'double_opt_in' => false, 'force_subscribe' => false, 'skip_primary_data' => false,
                'conditionals' => ['conditions' => [], 'status' => false, 'type' => 'all'],
                'run_events_only' => [], 'remove_tags' => [], 'enabled' => true,
            ];
            $this->setFormMeta($metas, $id, 'formSettings', wp_json_encode($settings));
            $this->setFormMeta($metas, $id, '_primary_email_field', 'email');
            $this->setFormMeta($metas, $id, 'fluentcrm_feeds', wp_json_encode($feed));
            update_option('btv_lead_form_id', $id);
            $this->say('forms: ' . $def['title'] . ' (form ' . $id . ') saved with a feed that adds contacts to the list ' . (isset($def['list']) ? $def['list'] : 'Main List') . ' and applies the tags ' . implode(', ', isset($def['tags']) ? $def['tags'] : [$def['tag']]));
        }
    }

    private function setFormMeta($table, $formId, $key, $value)
    {
        global $wpdb;
        $row = $wpdb->get_var($wpdb->prepare("SELECT id FROM $table WHERE form_id = %d AND meta_key = %s ORDER BY id LIMIT 1", $formId, $key));
        if ($row) {
            $wpdb->update($table, ['value' => $value], ['id' => (int) $row]);
        } else {
            $wpdb->insert($table, ['form_id' => $formId, 'meta_key' => $key, 'value' => $value]);
        }
    }

    /** The field definition Fluent Forms stores for a first name, an email address and a consent tick. */
    private function leadFormFields($def)
    {
        $uid = function ($n) { return 'el_btv_lead_' . $n; };
        return [
            'fields' => [
                [
                    'index' => 1, 'element' => 'input_text',
                    'attributes' => ['type' => 'text', 'name' => 'first_name', 'value' => '', 'id' => '', 'class' => '', 'placeholder' => $def['first_name_placeholder']],
                    'settings' => ['container_class' => '', 'label' => '', 'label_placement' => '', 'admin_field_label' => 'First name', 'help_message' => '',
                        'validation_rules' => ['required' => ['value' => true, 'message' => 'Please enter your first name']], 'conditional_logics' => []],
                    'editor_options' => ['title' => 'Simple Text', 'icon_class' => 'ff-edit-text', 'template' => 'inputText'],
                    'uniqElKey' => $uid(1),
                ],
                [
                    'index' => 2, 'element' => 'input_email',
                    'attributes' => ['type' => 'email', 'name' => 'email', 'value' => '', 'id' => '', 'class' => '', 'placeholder' => $def['email_placeholder']],
                    'settings' => ['container_class' => '', 'label' => '', 'label_placement' => '', 'admin_field_label' => 'Email', 'help_message' => '',
                        'validation_rules' => [
                            'required' => ['value' => true, 'message' => 'Please enter your email address'],
                            'email' => ['value' => true, 'message' => 'Please enter a valid email address'],
                        ], 'conditional_logics' => [], 'is_unique' => 'no', 'unique_validation_message' => 'Email address need to be unique.'],
                    'editor_options' => ['title' => 'Email Address', 'icon_class' => 'ff-edit-email', 'template' => 'inputText'],
                    'uniqElKey' => $uid(2),
                ],
                [
                    'index' => 3, 'element' => 'input_checkbox',
                    'attributes' => ['type' => 'checkbox', 'name' => 'consent', 'value' => [], 'id' => '', 'class' => ''],
                    'settings' => ['container_class' => '', 'label' => '', 'admin_field_label' => 'Consent', 'label_placement' => '', 'display_type' => '', 'help_message' => '',
                        'validation_rules' => ['required' => ['value' => true, 'message' => 'Please tick the box to join']],
                        'conditional_logics' => [], 'calc_value_status' => false,
                        'advanced_options' => [['label' => $def['consent'], 'value' => 'yes', 'calc_value' => '', 'image' => '']]],
                    'editor_options' => ['title' => 'Check Box', 'icon_class' => 'ff-edit-checkbox', 'template' => 'inputCheckable'],
                    'uniqElKey' => $uid(3),
                ],
            ],
            'submitButton' => [
                'uniqElKey' => $uid(4), 'element' => 'button',
                'attributes' => ['type' => 'submit', 'class' => ''],
                'settings' => ['align' => 'left', 'button_style' => 'no_style', 'container_class' => '', 'help_message' => '', 'background_color' => '', 'button_size' => 'md', 'color' => '',
                    'button_ui' => ['type' => 'default', 'text' => $def['button'], 'img_url' => '']],
                'editor_options' => ['title' => 'Submit Button'],
            ],
        ];
    }
}
