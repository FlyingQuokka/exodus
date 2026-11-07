<?php
/**
 * Banner slots. The header holds a slot written as the Advanced Ads shortcode [the_ad_placement id="top-of-page"].
 * Banners and slots are managed by the sync from btv-sync/data/banners.json.
 *
 * If Advanced Ads is not active the shortcode would show as plain text on every page.
 * This stand-in answers with nothing instead.
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('init', function () {
    if (!shortcode_exists('the_ad_placement')) {
        add_shortcode('the_ad_placement', '__return_empty_string');
    }
}, 99);
