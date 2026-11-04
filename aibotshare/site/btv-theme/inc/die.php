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
body { max-width: 440px; margin: 6vh auto 2rem; padding: 1.8rem; box-sizing: border-box; background: #ffffff; border: 1px solid #dcdbe6; border-radius: 22px; box-shadow: 0 10px 30px rgba(40, 38, 55, .08); color: #4f4d5f; font-family: 'Nunito Sans', system-ui, sans-serif; font-size: 17px; line-height: 1.6; text-align: center; }
body::before { content: ''; display: block; height: 56px; margin: 0 0 1.2rem; background: url('{$logo}') center / contain no-repeat; }
h1 { margin: 0 0 .6rem; padding: 0; border: 0; font-family: 'Baloo 2', system-ui, sans-serif; font-weight: 800; font-size: 1.7rem; line-height: 1.12; color: #282637; }
#error-page { margin-top: 0; }
#error-page p, #error-page .wp-die-message, body > p, body > .wp-die-message { margin: 0 0 1em; font-size: 1rem; line-height: 1.6; }
ul { text-align: left; }
ul li { font-size: 1rem; }
a { color: #984f92; }
a:hover, a:active, a:focus { color: #7a3c75; box-shadow: none; }
code { font-size: .9em; word-break: break-word; }
.button { display: inline-block; padding: .7rem 1.7rem; border: 2px solid transparent; border-radius: 999px; background: #dc8fd5; color: #391d37; font-family: 'Baloo 2', system-ui, sans-serif; font-weight: 800; text-decoration: none; }
.button:hover, .button:focus { background: #c876c1; color: #391d37; }
</style>
CSS;
    return preg_replace('#</head>#i', $css . '</head>', $html, 1);
}
