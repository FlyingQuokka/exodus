<?php
/**
 * Apply the help articles built by tools/build-docs.py to a WordPress site (Better Docs "docs" posts).
 *
 * Run on the site's own server or on the local machine. It loads WordPress and changes nothing unless BTV_APPLY=1.
 *
 *   BTV_WP=/path/to/wordpress BTV_HOST=botterverse.com BTV_JSON=/path/docs-articles.json php apply-docs.php
 *   BTV_APPLY=1 ... php apply-docs.php          writes the changes
 *
 * For each article it finds the post by slug and sets the title and the HTML and the category. A new slug creates a
 * post. A slug listed in $renames takes over the post with the old slug, so the old address stops being used. It
 * also sets the category names and the order of the articles in each category. Posts that are not in the JSON are
 * listed and never deleted or changed. It prints one line per article.
 */

$btvWp = getenv('BTV_WP');
$json = getenv('BTV_JSON');
$live = getenv('BTV_APPLY') === '1';
if (!$btvWp || !$json || !is_readable($json)) {
    fwrite(STDERR, "Set BTV_WP and BTV_JSON.\n");
    exit(1);
}
define('WP_USE_THEMES', false);
$_SERVER['HTTP_HOST'] = getenv('BTV_HOST') ?: 'localhost';
$_SERVER['HTTPS']     = 'on';
require rtrim($btvWp, '/\\') . '/wp-load.php';

/** The new slug and the old slug it replaces. */
$renames = ['booster-packs' => 'credit-packs'];

/** The name each category shows. The slug of a category never changes. */
$names = [
    'first-steps' => 'First Steps', 'building-bots' => 'Building Bots', 'publishing-sharing' => 'Publishing and Sharing',
    'paywall' => 'Paywall and Selling Access', 'earnings' => 'Earnings and Payouts', 'credits-billing' => 'Credits and Billing',
    'analytics-testing' => 'Analytics and Testing', 'account-data' => 'Account and Data', 'help-and-support' => 'Help and Support',
    'guides' => 'Step-by-step Guides',
];

$articles = json_decode(file_get_contents($json), true);
if (!is_array($articles) || !$articles) {
    fwrite(STDERR, "The JSON holds no articles.\n");
    exit(1);
}
global $wpdb;
$author = get_user_by('login', 'agentuser');
$author = $author ? (int) $author->ID : 1;

function btv_doc_id($slug)
{
    global $wpdb;
    $id = $wpdb->get_var($wpdb->prepare("SELECT ID FROM {$wpdb->posts} WHERE post_type='docs' AND post_name=%s AND post_status<>'trash' LIMIT 1", $slug));
    return $id ? (int) $id : 0;
}

// A way back: with BTV_SNAPSHOT=/path/file.json the current articles and category names are saved before anything is written.
if ($live && getenv('BTV_SNAPSHOT')) {
    $snap = ['posts' => [], 'terms' => [], 'order' => []];
    foreach ($wpdb->get_results("SELECT ID, post_name, post_title, post_content, post_status FROM {$wpdb->posts} WHERE post_type='docs'", ARRAY_A) as $row) {
        $row['terms'] = wp_get_object_terms($row['ID'], 'doc_category', ['fields' => 'ids']);
        $snap['posts'][] = $row;
    }
    foreach (get_terms(['taxonomy' => 'doc_category', 'hide_empty' => false]) as $t) {
        $snap['terms'][] = ['id' => $t->term_id, 'slug' => $t->slug, 'name' => $t->name];
        $snap['order'][$t->term_id] = (string) get_term_meta($t->term_id, '_docs_order', true);
    }
    file_put_contents(getenv('BTV_SNAPSHOT'), json_encode($snap, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    echo 'Snapshot of ' . count($snap['posts']) . " articles saved to " . getenv('BTV_SNAPSHOT') . "\n";
}

$count = ['same' => 0, 'changed' => 0, 'new' => 0, 'renamed' => 0];
$ids   = [];   // folder => [order => id]
$seen  = [];
foreach ($articles as $a) {
    $slug = $a['slug'];
    $seen[$slug] = true;
    $id   = btv_doc_id($slug);
    $what = 'changed';
    if (!$id && isset($renames[$slug]) && btv_doc_id($renames[$slug])) {
        $id = btv_doc_id($renames[$slug]);
        $what = 'renamed';
    }
    $term = get_term_by('slug', $a['folder'], 'doc_category');
    if (!$term) {
        echo "ERROR no category with the slug {$a['folder']} for $slug\n";
        continue;
    }
    if (!$id) {
        $what = 'new';
        if ($live) {
            $id = wp_insert_post(wp_slash([
                'post_type' => 'docs', 'post_status' => 'publish', 'post_author' => $author, 'comment_status' => 'closed',
                'post_title' => $a['title'], 'post_name' => $slug, 'post_content' => $a['html'],
            ]), true);
            if (is_wp_error($id)) {
                echo "ERROR creating $slug: " . $id->get_error_message() . "\n";
                continue;
            }
        }
    } else {
        $p = get_post($id);
        $cats = wp_get_object_terms($id, 'doc_category', ['fields' => 'ids']);
        $same = $what === 'changed' && $p->post_title === $a['title'] && $p->post_content === $a['html'] && $p->post_name === $slug
            && $cats === [(int) $term->term_id];
        if ($same) {
            $what = 'same';
        } elseif ($live) {
            $r = wp_update_post(wp_slash(['ID' => $id, 'post_title' => $a['title'], 'post_name' => $slug, 'post_content' => $a['html']]), true);
            if (is_wp_error($r)) {
                echo "ERROR updating $slug: " . $r->get_error_message() . "\n";
                continue;
            }
        }
    }
    if ($live && $id && $what !== 'same') {
        wp_set_object_terms($id, [(int) $term->term_id], 'doc_category');
    }
    $count[$what]++;
    $ids[$a['folder']][(int) $a['order']] = (int) $id;
    echo str_pad($what, 8) . $slug . ($what === 'renamed' ? '  (was ' . $renames[$slug] . ')' : '') . "\n";
}

foreach ($names as $folder => $name) {
    $term = get_term_by('slug', $folder, 'doc_category');
    if ($term && $term->name !== $name) {
        echo "category  $folder: {$term->name} -> $name\n";
        if ($live) {
            wp_update_term($term->term_id, 'doc_category', ['name' => $name]);
        }
    }
}

foreach ($ids as $folder => $byOrder) {
    ksort($byOrder);
    $term = get_term_by('slug', $folder, 'doc_category');
    $want = implode(',', array_values(array_filter($byOrder)));
    $have = (string) get_term_meta($term->term_id, '_docs_order', true);
    if ($have !== $want && $want !== '') {
        echo "order     $folder: was $have, becomes $want\n";
        if ($live) {
            update_term_meta($term->term_id, '_docs_order', $want);
        }
    }
}

$others = $wpdb->get_col("SELECT post_name FROM {$wpdb->posts} WHERE post_type='docs' AND post_status<>'trash'");
$only   = array_values(array_diff($others, array_keys($seen), array_values($renames)));
echo "\n" . ($live ? 'APPLIED' : 'DRY RUN (nothing written)') . ': ' . json_encode($count) . "\n";
echo 'In WordPress but not in the source (left alone): ' . ($only ? implode(', ', $only) : 'none') . "\n";
