<?php
/**
 * Writes the page markup in pages/ into WordPress. Safe to run again: pages are found by slug.
 *
 *   php bin/install-pages.php --wp=D:/path/to/public --host=the-site-host [--dry-run]
 *
 * Existing pages keep their ID, slug and publish state. Their content and page template are replaced.
 * New pages are created and published. FluentCart system pages and the buy links on Pricing are never touched here:
 * Pricing's links come from the pages/pricing.html file and were copied unchanged from the live page.
 * Nothing here runs on a live server unless you point --wp at it.
 */

$options = getopt('', ['wp:', 'host:', 'dry-run']);
$wp_path = $options['wp'] ?? getenv('BTV_WP_PATH');
if (!$wp_path || !is_readable(rtrim($wp_path, '/\\') . '/wp-load.php')) {
    fwrite(STDERR, "Give the WordPress folder with --wp=PATH (it must contain wp-load.php).\n");
    exit(1);
}
$dry = array_key_exists('dry-run', $options);
$_SERVER['HTTP_HOST'] = $options['host'] ?? 'localhost';
$_SERVER['HTTPS'] = 'on';
define('WP_USE_THEMES', false);
require rtrim($wp_path, '/\\') . '/wp-load.php';

$admins = get_users(['role' => 'administrator', 'number' => 1, 'orderby' => 'ID']);
if (!$admins) {
    fwrite(STDERR, "No administrator found.\n");
    exit(1);
}
wp_set_current_user($admins[0]->ID); // so the Custom HTML blocks are saved unfiltered

// slug => [title, template]. An empty template means the theme chooses (Home uses front-page).
$pages = [
    'home'          => ['Home', ''],
    'pricing'       => ['Pricing', 'page-landing'],
    'how-it-works'  => ['How it works', 'page-landing'],
    'affiliates'    => ['Affiliates', 'page-landing'],
    'faq'           => ['FAQ', 'page-landing'],
    'support'       => ['Support', 'page-landing'],
    'feedback'      => ['Feedback', 'page-landing'],
    'founders'      => ['Founders offer', 'page-landing'],
    'bot-market'    => ['Bot Market', 'page-landing'],
];

foreach ($pages as $slug => [$title, $template]) {
    $file = dirname(__DIR__) . '/pages/' . $slug . '.html';
    $content = is_readable($file) ? file_get_contents($file) : false;
    if ($content === false) {
        echo "skip  $slug (no file)\n";
        continue;
    }
    $existing = get_page_by_path($slug, OBJECT, 'page');

    // A draft page that holds the slug without being the marketing page (the affiliate portal) steps aside.
    if ($slug === 'affiliates' && $existing && strpos($existing->post_content, 'fluent_affiliate_portal') !== false) {
        echo "move  page {$existing->ID} (affiliate portal draft) slug affiliates -> affiliates-lab\n";
        if (!$dry) {
            wp_update_post(['ID' => $existing->ID, 'post_name' => 'affiliates-lab']);
        }
        $existing = null;
    }
    if (!$existing) {
        $drafts = get_posts(['name' => $slug, 'post_type' => 'page', 'post_status' => ['draft', 'pending', 'private'], 'numberposts' => 1]);
        if ($drafts && $slug !== 'affiliates') {
            $existing = $drafts[0];
        }
    }

    if ($existing) {
        echo "update $slug (page {$existing->ID})\n";
        if (!$dry) {
            wp_update_post(['ID' => $existing->ID, 'post_content' => wp_slash($content), 'post_title' => $title]);
            update_post_meta($existing->ID, '_wp_page_template', $template ?: 'default');
        }
    } else {
        echo "create $slug\n";
        if (!$dry) {
            $id = wp_insert_post([
                'post_type'    => 'page',
                'post_status'  => 'publish',
                'post_title'   => $title,
                'post_name'    => $slug,
                'post_content' => wp_slash($content),
                'meta_input'   => ['_wp_page_template' => $template ?: 'default'],
            ], true);
            if (is_wp_error($id)) {
                fwrite(STDERR, "failed $slug: " . $id->get_error_message() . "\n");
            } else {
                echo "      -> page $id\n";
            }
        }
    }
}

// ---- Footer navigation post (the Legal column): legal pages only. Feedback and Support are in the Help column. ----
$legal = [
    ['Terms And Conditions', 'terms-and-conditions-app-version'],
    ['Privacy Policy', 'privacy-policy'],
    ['Legal', 'legal', [
        ['CCPA', 'ccpa-california-consumer-privacy-act'],
        ['DMCA', 'dmca'],
    ]],
];
$nav_item = function ($label, $path) {
    $page = get_page_by_path($path, OBJECT, 'page');
    if (!$page) {
        fwrite(STDERR, "footer menu: page not found for $path\n");
        return null;
    }
    return ['page' => $page, 'label' => $label];
};
$nav_attrs = function ($i) {
    return wp_json_encode([
        'label'    => $i['label'],
        'type'     => 'page',
        'id'       => $i['page']->ID,
        'url'      => wp_make_link_relative(get_permalink($i['page']->ID)),
        'kind'     => 'post-type',
        'metadata' => ['bindings' => ['url' => ['source' => 'core/post-data', 'args' => ['field' => 'link']]]],
    ], JSON_UNESCAPED_SLASHES);
};
$markup = '';
foreach ($legal as $entry) {
    $item = $nav_item($entry[0], $entry[1]);
    if (!$item) {
        continue;
    }
    if (!empty($entry[2])) {
        $markup .= '<!-- wp:navigation-submenu ' . $nav_attrs($item) . " -->\n";
        foreach ($entry[2] as $child) {
            $c = $nav_item($child[0], $child[1]);
            if ($c) {
                $markup .= '<!-- wp:navigation-link ' . $nav_attrs($c) . " /-->\n";
            }
        }
        $markup .= "<!-- /wp:navigation-submenu -->\n\n";
    } else {
        $markup .= '<!-- wp:navigation-link ' . $nav_attrs($item) . " /-->\n\n";
    }
}
$footer_nav = get_posts(['post_type' => 'wp_navigation', 'post_status' => 'publish', 'title' => 'Footer', 'numberposts' => 1]);
if ($footer_nav && $markup) {
    echo "update footer navigation post {$footer_nav[0]->ID}\n";
    if (!$dry) {
        wp_update_post(['ID' => $footer_nav[0]->ID, 'post_content' => wp_slash(trim($markup))]);
    }
}

echo $dry ? "Dry run. Nothing was written.\n" : "Done.\n";
