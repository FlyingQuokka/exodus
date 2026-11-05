<?php
/**
 * Stylesheets and scripts. One main stylesheet then one file per integration.
 * Integration files load late (priority 100) and again after the plugin styles they override.
 */

if (!defined('ABSPATH')) {
    exit;
}

function btv_asset($path)
{
    return get_template_directory_uri() . '/assets/' . ltrim($path, '/');
}

function btv_asset_version($path)
{
    $file = get_template_directory() . '/assets/' . ltrim($path, '/');
    return is_readable($file) ? (string) filemtime($file) : BTV_THEME_VERSION;
}

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('btv-theme', btv_asset('css/btv-theme.css'), [], btv_asset_version('css/btv-theme.css'));

    $integrations = ['fluentcart', 'fluent-forms', 'fluent-support', 'better-docs'];
    foreach ($integrations as $name) {
        $rel = 'css/integrations/btv-' . $name . '.css';
        wp_enqueue_style('btv-' . $name, btv_asset($rel), ['btv-theme'], btv_asset_version($rel));
    }

    wp_enqueue_script('btv-site', btv_asset('js/btv-site.js'), [], btv_asset_version('js/btv-site.js'), ['in_footer' => true, 'strategy' => 'defer']);

    // The picture set draws the ten illustrations. Load it only on pages that use one.
    $post = get_post();
    if ($post && strpos((string) $post->post_content, 'data-pic=') !== false) {
        wp_enqueue_script('btv-pictures', btv_asset('js/btv-pictures.js'), [], btv_asset_version('js/btv-pictures.js'), ['in_footer' => true, 'strategy' => 'defer']);
    }
}, 100);

add_action('wp_head', function () {
    echo '<link rel="icon" href="' . esc_url(btv_asset('img/btv-favicon-64.svg')) . '" type="image/svg+xml">' . "\n";
    echo '<link rel="icon" href="' . esc_url(btv_asset('img/btv-favicon-32.png')) . '" sizes="32x32" type="image/png">' . "\n";
}, 2);

/**
 * Plugin stylesheets that print in the footer come after the theme file. Print the integration
 * files once more at the end so they win at equal strength. Only on pages that need them.
 */
add_action('wp_footer', function () {
    if (!is_singular() && !is_page()) {
        return;
    }
    $post = get_post();
    $content = $post ? (string) $post->post_content : '';
    if (!preg_match('/\[(fluent_cart|fluentform|fluent_support|fluent_affiliate)|wp:fluent-cart/', $content)) {
        return;
    }
    foreach (['fluentcart', 'fluent-forms', 'fluent-support'] as $name) {
        $rel = 'css/integrations/btv-' . $name . '.css';
        echo '<link rel="stylesheet" id="btv-' . esc_attr($name) . '-late-css" href="' . esc_url(btv_asset($rel) . '?ver=' . btv_asset_version($rel)) . '" media="all">' . "\n";
    }
}, 1000);
