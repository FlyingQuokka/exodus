<?php
/**
 * The domain rule. No link in the source carries a typed domain.
 *
 * {{domain}} holds the base domain only, for example https://lab.{{domain}}/login.
 * {{theme}} holds the address of this theme folder, so images in page content need no typed path.
 * {{founders_close}} holds "on 30 November" read from the end date of the Founders coupon (see the Botterverse Sync plugin), or "soon".
 * Both are replaced when a block renders and when classic content renders.
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * The base domain of this site with any www. removed. It is the value of the {{domain}} token.
 * The Botterverse Sync plugin defines the same function, so this one steps aside if it is loaded first.
 */
if (!function_exists('btv_base_domain')) {
    function btv_base_domain()
    {
        $host = wp_parse_url(home_url(), PHP_URL_HOST);
        return preg_replace('/^www\./', '', (string) $host);
    }
}

/**
 * The address of a page in the Botters Lab, for example btv_lab_url('/login').
 * The host is lab. plus the base domain and the scheme follows the site.
 */
function btv_lab_url($path = '/login')
{
    return 'https://lab.' . btv_base_domain() . '/' . ltrim($path, '/');
}

/**
 * Replace the tokens in a string.
 */
function btv_replace_tokens($html)
{
    if (!is_string($html) || strpos($html, '{{') === false) {
        return $html;
    }
    return str_replace(
        ['{{domain}}', '{{theme}}', '{{founders_close}}'],
        [btv_base_domain(), untrailingslashit(get_template_directory_uri()), function_exists('btv_founders_close') ? btv_founders_close() : 'soon'],
        $html
    );
}

add_filter('render_block', 'btv_replace_tokens', 20);
add_filter('the_content', 'btv_replace_tokens', 20);
add_filter('widget_text', 'btv_replace_tokens', 20);
add_filter('wp_nav_menu_items', 'btv_replace_tokens', 20);
add_filter('the_excerpt', 'btv_replace_tokens', 20);

/**
 * FluentCRM passes codes it cannot parse to this filter. Answer for {{domain}}.
 * The Botterverse Sync plugin answers the same filter, so this is a safe second answer.
 */
add_filter('fluentcrm_smartcode_fallback', function ($code) {
    return $code === '{{domain}}' ? btv_base_domain() : $code;
}, 20, 1);
