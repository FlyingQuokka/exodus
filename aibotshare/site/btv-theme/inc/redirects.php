<?php
/**
 * Old addresses that still reach the new ones. WordPress does not redirect a renamed page by itself.
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('template_redirect', function () {
    if (!is_404()) {
        return;
    }
    $path = trim((string) wp_parse_url(isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '', PHP_URL_PATH), '/');
    $moved = [
        'privacy-policy-app-version' => '/privacy-policy/',
    ];
    if (isset($moved[$path])) {
        wp_safe_redirect(home_url($moved[$path]), 301);
        exit;
    }
});
