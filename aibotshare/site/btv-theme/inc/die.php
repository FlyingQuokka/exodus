<?php
/**
 * The plain WordPress message screens: the log-out confirmation and the error pages wp_die() shows.
 * WordPress's own handler still builds the page. This adds the Botterverse look on top of it.
 * The screens inside the admin area are left as they are.
 */

if (!defined('ABSPATH')) {
    exit;
}

add_filter('wp_die_handler', function () {
    return 'btv_die_handler';
});

function btv_die_handler($message, $title = '', $args = [])
{
    if (PHP_SAPI !== 'cli') {
        ob_start('btv_die_skin');
    }
    _default_wp_die_handler($message, $title, $args);
}

/**
 * Output callback. It receives the finished page and adds the styles before the closing head tag.
 */
function btv_die_skin($html)
{
    if (stripos($html, '</head>') === false) {
        return $html;
    }
    $logo = esc_url(btv_asset('img/btv-logo.svg'));
    $baloo = esc_url(btv_asset('fonts/btv-baloo-2.woff2'));
    $nunito = esc_url(btv_asset('fonts/btv-nunito-sans.woff2'));
    $css = <<<CSS
<style id="btv-die">
@font-face { font-family: 'Baloo 2'; font-style: normal; font-weight: 400 800; font-display: swap; src: url('{$baloo}') format('woff2'); }
@font-face { font-family: 'Nunito Sans'; font-style: normal; font-weight: 200 1000; font-display: swap; src: url('{$nunito}') format('woff2'); }
html { background: #ebedfc; }
body { width: fit-content; min-width: min(440px, calc(100% - 32px)); max-width: min(680px, calc(100% - 32px)); margin: 6vh auto 2rem; padding: 1.8rem; box-sizing: border-box; background: #ffffff; border: 1px solid #dcdbe6; border-radius: 22px; box-shadow: 0 10px 30px rgba(40, 38, 55, .08); color: #4f4d5f; font-family: 'Nunito Sans', system-ui, sans-serif; font-size: 17px; line-height: 1.6; text-align: center; }
body::before { content: ''; display: block; height: 56px; margin: 0 0 1.2rem; background: url('{$logo}') center / contain no-repeat; }
h1 { margin: 0 0 .6rem; padding: 0; border: 0; font-family: 'Baloo 2', system-ui, sans-serif; font-weight: 800; font-size: 1.7rem; line-height: 1.12; color: #282637; }
#error-page { margin-top: 2rem; }
#error-page p, #error-page .wp-die-message, body > p, body > .wp-die-message { margin: 0 0 1em; font-size: 1rem; line-height: 1.6; }
ul { text-align: left; }
ul li { font-size: 1rem; }
a { color: #984f92; }
a:hover, a:active, a:focus { color: #7a3c75; box-shadow: none; }
body, p, li { overflow-wrap: anywhere; }
code { font-size: .9em; }
pre { display: block; max-width: 100%; overflow: auto; margin: 0 0 1em; padding: .8rem 1rem; box-sizing: border-box; background: #f3eefb; border-radius: 12px; text-align: left; white-space: pre-wrap; font-size: .85rem; line-height: 1.5; }
.button { display: inline-block; padding: .7rem 1.7rem; border: 2px solid transparent; border-radius: 999px; background: #dc8fd5; color: #391d37; font-family: 'Baloo 2', system-ui, sans-serif; font-weight: 800; text-decoration: none; }
.button:hover, .button:focus { background: #c876c1; color: #391d37; }
</style>
CSS;
    return preg_replace('#</head>#i', $css . '</head>', $html, 1);
}

/**
 * REMOVE THIS BLOCK BEFORE GO LIVE. The preview is only for checking the look on the local site.
 *
 * A way for a signed-in administrator to see the screen. /?btv_preview_die=1 shows one message and
 * /?btv_preview_die=2 shows a list. Nobody else sees anything.
 */
add_action('init', function () {
    if (!isset($_GET['btv_preview_die']) || !current_user_can('manage_options')) {
        return;
    }
    if ($_GET['btv_preview_die'] === '2') {
        $errors = new WP_Error('first', 'The first thing that went wrong.');
        $errors->add('second', 'The second thing that went wrong.');
        wp_die($errors, 'Example error list', ['response' => 403, 'back_link' => true]);
    }
    wp_die('This is an example of an error message. It is shown when something fails and WordPress has nothing better to say.', 'Example error', ['response' => 403, 'back_link' => true, 'link_url' => home_url('/'), 'link_text' => 'Go to the home page']);
}, 20);
