<?php
// Writes what WordPress holds for each page into a folder so it can be compared with the files in pages/. Read only.
//   php bin/dump-pages.php --wp=PATH --out=DIR
$o = getopt('', ['wp:', 'out:']);
$_SERVER['HTTP_HOST'] = 'localhost';
$_SERVER['HTTPS'] = 'on';
define('WP_USE_THEMES', false);
require rtrim($o['wp'], "/\\") . '/wp-load.php';
foreach (['home', 'pricing', 'how-it-works', 'affiliates', 'faq', 'support', 'feedback', 'founders', 'bot-market'] as $slug) {
    $p = get_page_by_path($slug, OBJECT, 'page');
    if (!$p) {
        echo "none $slug\n";
        continue;
    }
    file_put_contents($o['out'] . "/$slug.html", $p->post_content);
    echo "$slug id={$p->ID} status={$p->post_status} modified={$p->post_modified} template=" . get_post_meta($p->ID, '_wp_page_template', true) . "\n";
}
