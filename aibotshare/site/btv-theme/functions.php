<?php
/**
 * Botterverse theme setup. Small on purpose: each job lives in its own file under inc/.
 */

if (!defined('ABSPATH')) {
    exit;
}

define('BTV_THEME_VERSION', '0.1.0');

require_once __DIR__ . '/inc/domain.php';
require_once __DIR__ . '/inc/header-footer.php';
require_once __DIR__ . '/inc/assets.php';
require_once __DIR__ . '/inc/login.php';
require_once __DIR__ . '/inc/die.php';
require_once __DIR__ . '/inc/seo.php';
require_once __DIR__ . '/inc/forms.php';
require_once __DIR__ . '/inc/banners.php';

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('responsive-embeds');
    add_theme_support('html5', ['search-form', 'gallery', 'caption', 'style', 'script']);
});

/**
 * One block pattern category for the section patterns in patterns/.
 */
add_action('init', function () {
    register_block_pattern_category('btv', ['label' => 'Botterverse']);
});
