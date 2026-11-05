<?php
/**
 * Header and footer. Both are dynamic blocks so the header can differ for signed-in members
 * and the footer can use the Footer navigation post without a post ID in the source.
 * Menus follow Docos\site-plan.md section 7.
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * A same-site path such as /pricing/, built from the site address so it also works in a subfolder.
 */
function btv_path($slug)
{
    return wp_make_link_relative(home_url('/' . trim($slug, '/') . '/'));
}

/**
 * Number of items in the visitor's FluentCart cart. Zero when FluentCart is missing or the cart is empty.
 */
function btv_cart_count()
{
    if (!class_exists('\FluentCart\App\Helpers\CartHelper')) {
        return 0;
    }
    try {
        $cart = \FluentCart\App\Helpers\CartHelper::getCart(null, false);
        $items = (is_object($cart) && !empty($cart->cart_data)) ? (array) $cart->cart_data : [];
        $count = 0;
        foreach ($items as $item) {
            $count += max(1, (int) (is_array($item) ? ($item['quantity'] ?? 1) : 1));
        }
        return $count;
    } catch (\Throwable $e) {
        return 0;
    }
}

/**
 * The address of the visitor's FluentCart account page.
 */
function btv_account_url()
{
    if (class_exists('\FluentCart\App\Services\TemplateService')) {
        try {
            $url = \FluentCart\App\Services\TemplateService::getCustomerProfileUrl();
            if ($url) {
                return wp_make_link_relative($url);
            }
        } catch (\Throwable $e) {
            // Fall through to the page slug.
        }
    }
    return btv_path('account');
}

function btv_icon($name)
{
    $icons = [
        'cart'    => '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 4h2.2l2.1 10.2a1.5 1.5 0 0 0 1.5 1.2h8.4a1.5 1.5 0 0 0 1.5-1.1L20.5 8H6.1"/><circle cx="9.5" cy="19.5" r="1.2"/><circle cx="17" cy="19.5" r="1.2"/></svg>',
        'account' => '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c.9-3.6 3.9-5.5 7.5-5.5s6.6 1.9 7.5 5.5"/></svg>',
    ];
    return $icons[$name] ?? '';
}

function btv_render_header()
{
    $logo = esc_url(get_template_directory_uri() . '/assets/img/btv-logo-transparent.svg');
    // The same links for everyone. A signed-in visitor also sees the Account icon below.
    $items = [['How it works', 'how-it-works'], ['Pricing', 'pricing'], ['Bot Market', 'bot-market'], ['Affiliates', 'affiliates'], ['FAQ', 'faq'], ['Support', 'support']];

    $nav = '';
    foreach ($items as [$label, $slug]) {
        $current = is_page($slug) ? ' aria-current="page"' : '';
        $nav .= '<a href="' . esc_url(btv_path($slug)) . '"' . $current . '>' . esc_html($label) . '</a>';
    }

    $actions = '';
    $count = btv_cart_count();
    if ($count > 0) {
        $actions .= '<a class="icon-link" href="' . esc_url(btv_path('cart-2')) . '"><span class="visually-hidden">Cart</span>' . btv_icon('cart')
            . '<span class="count" aria-hidden="true">' . (int) $count . '</span></a>';
    }
    if (is_user_logged_in()) {
        $actions .= '<a class="icon-link" href="' . esc_url(btv_account_url()) . '"><span class="visually-hidden">Account</span>' . btv_icon('account') . '</a>';
        $actions .= '<a class="btn btn-primary btn-small" href="' . esc_url(btv_lab_url('/login')) . '" target="_blank" rel="noopener">' . esc_html__("Botters Lab", 'btv-theme') . '</a>';
    } else {
        $actions .= '<a class="btn btn-primary btn-small" href="' . esc_url(btv_lab_url('/login')) . '" target="_blank" rel="noopener">' . esc_html__("Botters Lab", 'btv-theme') . '</a>';
    }

    return '<header class="site-header"><div class="container">'
        . '<a class="logo" href="' . esc_url(home_url('/')) . '" aria-label="Botterverse home"><img src="' . $logo . '" alt="Botterverse"></a>'
        . '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="btv-nav"><span class="visually-hidden">Menu</span><span class="bars" aria-hidden="true"></span></button>'
        . '<nav class="nav" id="btv-nav" aria-label="Main">' . $nav . '</nav>'
        . '<div class="header-actions">' . $actions . '</div>'
        . '</div></header>';
}

/**
 * The owner's Footer navigation post, found by its title so no post ID is typed anywhere.
 */
function btv_footer_navigation_id()
{
    $found = get_posts([
        'post_type'      => 'wp_navigation',
        'post_status'    => 'publish',
        'title'          => 'Footer',
        'posts_per_page' => 1,
        'fields'         => 'ids',
    ]);
    return $found ? (int) $found[0] : 0;
}

function btv_render_footer()
{
    $logo = esc_url(get_template_directory_uri() . '/assets/img/btv-logo-transparent.svg');
    $link = function ($label, $slug) {
        return '<li><a href="' . esc_url(btv_path($slug)) . '">' . esc_html($label) . '</a></li>';
    };

    $legal = '';
    $nav_id = btv_footer_navigation_id();
    if ($nav_id) {
        $legal = do_blocks('<!-- wp:navigation {"ref":' . $nav_id . ',"overlayMenu":"never","layout":{"type":"flex","orientation":"vertical"}} /-->');
    }
    if (trim(wp_strip_all_tags($legal)) === '') {
        $legal = '<ul>' . $link('Terms And Conditions', 'terms-and-conditions') . $link('Privacy Policy', 'privacy-policy') . $link('Legal', 'legal') . '</ul>';
    }

    return '<footer class="site-footer"><div class="container"><div class="footer-grid">'
        . '<div class="footer-brand"><img src="' . $logo . '" alt="Botterverse"><p class="small">Build a bot. Share it. Sell access.</p></div>'
        . '<div><h2 class="footer-title">Product</h2><ul>' . $link('Pricing', 'pricing') . $link('How it works', 'how-it-works') . $link('Affiliates', 'affiliates') . $link('FAQ', 'faq') . '</ul></div>'
        . '<div><h2 class="footer-title">Help</h2><ul>' . $link('Support', 'support') . '<li><a href="' . esc_url(btv_path('docs')) . '" target="_blank" rel="noopener">Documentation</a></li>' . $link('Feedback', 'feedback') . $link('Billing and invoices', 'account') . '</ul></div>'
        . '<div><h2 class="footer-title">Legal</h2>' . $legal . '</div>'
        . '</div><div class="footer-note">Botterverse does not promise or guarantee any income. Results depend on your bot, your audience and your effort.</div></div></footer>';
}

add_action('init', function () {
    register_block_type('btv/site-header', ['render_callback' => 'btv_render_header']);
    register_block_type('btv/site-footer', ['render_callback' => 'btv_render_footer']);
});
