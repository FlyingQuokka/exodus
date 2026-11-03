<?php
/**
 * Search engine rules and the Yoast fields the sync tool writes.
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * The Articles page (the posts page) stays out of search engines until the owner decides otherwise.
 * The page is not in any menu. Remove this filter after launch to publish it.
 */
function btv_is_articles_page()
{
    return is_home() && !is_front_page();
}

add_filter('wp_robots', function ($robots) {
    if (btv_is_articles_page()) {
        $robots['noindex'] = true;
        $robots['follow'] = true;
        unset($robots['index']);
    }
    return $robots;
}, 20);

add_filter('wpseo_robots', function ($robots) {
    return btv_is_articles_page() ? 'noindex, follow' : $robots;
}, 20);

/**
 * Yoast keeps the title and description and focus keyword in post meta. Register them for pages so
 * the sync tool can write them through the REST API.
 */
add_action('init', function () {
    foreach (['_yoast_wpseo_title', '_yoast_wpseo_metadesc', '_yoast_wpseo_focuskw'] as $key) {
        register_post_meta('page', $key, [
            'type'          => 'string',
            'single'        => true,
            'show_in_rest'  => true,
            'auth_callback' => function () {
                return current_user_can('edit_pages');
            },
        ]);
    }
});
