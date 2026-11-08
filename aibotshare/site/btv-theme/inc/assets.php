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

/** The legal pages hold text from the WP Legal Pages plugin. They take the home page fonts and a reading column. */
function btv_legal_slugs()
{
    return ['privacy-policy', 'terms-and-conditions', 'terms-of-use', 'ccpa', 'dmca', 'legal'];
}

add_filter('body_class', function ($classes) {
    if (is_page(btv_legal_slugs())) {
        $classes[] = 'btv-legal';
    }
    return $classes;
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('btv-theme', btv_asset('css/btv-theme.css'), [], btv_asset_version('css/btv-theme.css'));

    $integrations = ['fluentcart', 'fluent-forms', 'fluent-support', 'better-docs'];
    foreach ($integrations as $name) {
        $rel = 'css/integrations/btv-' . $name . '.css';
        wp_enqueue_style('btv-' . $name, btv_asset($rel), ['btv-theme'], btv_asset_version($rel));
    }

    // The home page and the pages redone in its style share the fonts and tokens in btv-base.css.
    // The home page has its own stylesheet. The other pages share btv-pages.css.
    $restyled = ['pricing', 'faq', 'how-it-works', 'affiliates', 'support', 'feedback', 'bot-market', 'founders'];
    $docs = is_post_type_archive('docs') || is_singular('docs') || is_tax(['doc_category', 'doc_tag', 'knowledge_base']);
    $legal = btv_legal_slugs();
    if (is_front_page() || is_page($restyled) || $docs || is_page($legal)) {
        wp_enqueue_style('btv-base', btv_asset('css/btv-base.css'), ['btv-theme'], btv_asset_version('css/btv-base.css'));
    }
    if (is_front_page()) {
        wp_enqueue_style('btv-home', btv_asset('css/btv-home.css'), ['btv-base'], btv_asset_version('css/btv-home.css'));
    }
    if (is_page($restyled) || is_page($legal)) {
        wp_enqueue_style('btv-pages', btv_asset('css/btv-pages.css'), ['btv-base'], btv_asset_version('css/btv-pages.css'));
    }

    wp_enqueue_script('btv-site',btv_asset('js/btv-site.js'), [], btv_asset_version('js/btv-site.js'), ['in_footer' => true, 'strategy' => 'defer']);

    // The picture set draws the ten illustrations. Load it only on pages that use one.
    $post = get_post();
    if ($post && strpos((string) $post->post_content, 'data-pic=') !== false) {
        wp_enqueue_script('btv-pictures', btv_asset('js/btv-pictures.js'), [], btv_asset_version('js/btv-pictures.js'), ['in_footer' => true, 'strategy' => 'defer']);
    }
}, 100);

add_action('wp_head', function () {
    echo '<link rel="icon" href="' . esc_url(btv_asset('img/btv-favicon-64.svg')) . '" type="image/svg+xml">' . "\n";
    echo '<link rel="icon" href="' . esc_url(btv_asset('img/btv-favicon.ico')) . '" sizes="48x48">' . "\n";
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
