<?php
/**
 * The WordPress login and forgotten password screens. Copy is from Docos\pages-copy-v1.md section 7.
 * The look is in assets/css/integrations/btv-login.css.
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('login_enqueue_scripts', function () {
    wp_enqueue_style('btv-login', btv_asset('css/integrations/btv-login.css'), [], btv_asset_version('css/integrations/btv-login.css'));
    wp_enqueue_script('btv-password-toggle', btv_asset('js/btv-password-toggle.js'), [], btv_asset_version('js/btv-password-toggle.js'), ['in_footer' => false, 'strategy' => 'defer']);
});

add_filter('login_headerurl', function () {
    return home_url('/');
});

add_filter('login_headertext', function () {
    return 'Botterverse';
});

/**
 * Wording changes apply on the login screens only.
 */
add_action('login_init', function () {
    add_filter('gettext', function ($translated, $text) {
        static $map = null;
        if ($map === null) {
            $map = [
                'Remember Me'                  => 'Keep me signed in',
                'Log In'                       => 'Sign in',
                'Lost your password?'          => 'Forgotten your password?',
                'Get New Password'             => 'Send me a link',
                'Username or Email Address'    => 'Username or email address',
            ];
        }
        return $map[$text] ?? $translated;
    }, 10, 2);

    add_filter('gettext', function ($translated, $text) {
        if (strpos($text, 'Check your email for the confirmation link') === 0) {
            return 'Check your email. The link works once and expires after 24 hours.';
        }
        if (strpos($text, 'Please enter your username or email address') === 0) {
            return 'Enter your username or email address. We will send you a link to choose a new one.';
        }
        return $translated;
    }, 10, 2);
});

/**
 * The heading and first paragraph sit in the top half of the card, above the form.
 */
add_filter('login_message', function ($message) {
    $action = isset($_REQUEST['action']) ? sanitize_key(wp_unslash($_REQUEST['action'])) : 'login';
    if ($action === 'login' || $action === '') {
        $head = '<h2>Billing login</h2>'
            . '<p>Use this to see your invoices and receipts. Use it also to change your card or cancel your plan. To build bots use the Botter&#8217;s Lab sign-in instead.</p>'
            . '<p><a href="' . esc_url(btv_lab_url('/login')) . '" target="_blank" rel="noopener">Go to the Botter&#8217;s Lab sign-in</a></p>';
    } elseif ($action === 'lostpassword') {
        $head = '<h2>Forgotten your password?</h2>';
    } else {
        return $message;
    }
    return '<div class="btv-login-head">' . $head . '</div>' . $message;
});

add_filter('login_site_html_link', '__return_empty_string');

/**
 * No "You are now logged out" message. Being on the sign-in page says it.
 */
add_filter('wp_login_errors', function ($errors) {
    $errors->remove('loggedout');
    return $errors;
});

/**
 * One language only, so the language dropdown is not shown.
 */
add_filter('login_display_language_dropdown', '__return_false');
