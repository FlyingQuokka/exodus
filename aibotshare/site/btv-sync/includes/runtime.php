<?php
/**
 * Runs on every request. Keeps to the three FluentCRM hooks the emails need.
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * The base domain of this site with any www. removed. It is the value of the {{domain}} token.
 */
function btv_base_domain()
{
    $host = wp_parse_url(home_url(), PHP_URL_HOST);
    return preg_replace('/^www\./', '', (string) $host);
}

/**
 * The end date of a FluentCart coupon, read from the coupon so nobody types it into an email or a page.
 * Copy writes {{cpn_dateend_COUPONCODE}}, for example {{cpn_dateend_founder50}}, and any coupon can be used the same way.
 * The coupon end date is saved as a UTC time that stands for the end of a day in US Eastern time, so five hours come off before the date is read.
 * Returns the date as "30 November". When the coupon is missing or has no end date it returns "a date to be confirmed", so a sentence such as "closes on {{cpn_dateend_founder50}}" still reads well.
 */
if (!function_exists('btv_coupon_date_end')) {
    function btv_coupon_date_end($code)
    {
        static $cache = [];
        $key = strtolower((string) $code);
        if (isset($cache[$key])) {
            return $cache[$key];
        }
        global $wpdb;
        $cache[$key] = 'a date to be confirmed';
        $end = $wpdb->get_var($wpdb->prepare("SELECT end_date FROM {$wpdb->prefix}fct_coupons WHERE LOWER(code) = %s AND status = 'active' LIMIT 1", $key));
        if ($end && strpos((string) $end, '0000') !== 0) {
            $time = strtotime($end . ' UTC');
            if ($time) {
                $cache[$key] = gmdate('j F', $time - 5 * HOUR_IN_SECONDS);
            }
        }
        return $cache[$key];
    }
}

/** Replace every {{cpn_dateend_CODE}} in a string. */
if (!function_exists('btv_replace_coupon_dates')) {
    function btv_replace_coupon_dates($text)
    {
        if (!is_string($text) || strpos($text, '{{cpn_dateend_') === false) {
            return $text;
        }
        return preg_replace_callback('/\{\{cpn_dateend_([A-Za-z0-9_-]+)\}\}/', function ($m) {
            return btv_coupon_date_end($m[1]);
        }, $text);
    }
}

/**
 * FluentCRM only parses codes written group.key. It hands any other code to this filter.
 */
add_filter('fluentcrm_smartcode_fallback', function ($code, $subscriber = null) {
    if ($code === '{{domain}}') {
        return btv_base_domain();
    }
    if (strpos($code, '{{cpn_dateend_') === 0) {
        return btv_replace_coupon_dates($code);
    }
    return $code;
}, 10, 2);

/**
 * Add the Botterverse design template to the list FluentCRM offers.
 */
add_filter('fluent_crm/email_design_templates', function ($templates) {
    $templates['botterverse'] = [
        'id'            => 'botterverse',
        'label'         => 'Botterverse',
        'image'         => '',
        'config'        => [],
        'use_gutenberg' => false,
        'template_type' => 'raw_text_box',
        'template_info' => '<h3>Botterverse</h3><p>The branded wrapper. Write the body only. The logo and footer are added.</p>',
    ];
    return $templates;
});

/**
 * Wrap the email body in the branded HTML. The filter name ends with the template key.
 */
add_filter('fluent_crm/email-design-template-botterverse', function ($emailBody, $templateData = [], $campaign = null, $subscriber = null) {
    $file = BTV_SYNC_DIR . '/templates/email.html';
    $html = is_readable($file) ? file_get_contents($file) : '{{crm.email_body}}';
    $html = str_replace('{{crm.email_body}}', $emailBody, $html);
    $html = str_replace('{{domain}}', btv_base_domain(), $html);
    $logo = wp_get_attachment_url((int) get_option('btv_email_logo_id'));
    $html = str_replace('{{logo_url}}', $logo ? $logo : 'https://' . btv_base_domain() . '/wp-content/uploads/btv-logo-transparent.png', $html);
    return $html;
}, 10, 4);

/**
 * Make it the default for every new campaign and automation email.
 */
add_filter('fluent_crm/default_email_design_template', function () {
    return 'botterverse';
});

/**
 * WordPress's own emails (new user and password and admin notices) arrive as plain text. Put them in
 * the Botterverse layout. An email that is already HTML is left alone.
 */
add_filter('wp_mail', function ($args) {
    $headers = isset($args['headers']) ? $args['headers'] : [];
    $joined = is_array($headers) ? implode("\n", $headers) : (string) $headers;
    $message = isset($args['message']) ? (string) $args['message'] : '';
    if (preg_match('/content-type\s*:/i', $joined) || preg_match('/<(html|body|p|div|table|br|a|h[1-6]|ul|ol)\b/i', $message)) {
        return $args;
    }
    if (stripos((string) apply_filters('wp_mail_content_type', 'text/plain'), 'text/plain') === false) {
        return $args;
    }
    $file = BTV_SYNC_DIR . '/templates/wp-email.html';
    if (!is_readable($file)) {
        return $args;
    }
    $text = preg_replace('~<(https?://[^>\s]+)>~', '$1', $message);
    $text = esc_html(str_replace(["\r\n", "\r"], "\n", $text));
    $text = preg_replace_callback('~https?://[^\s<]+~', function ($m) {
        $url = rtrim($m[0], '.,;:)');
        $tail = substr($m[0], strlen($url));
        return '<a href="' . $url . '" style="color:#8a3f84;text-decoration:underline;">' . $url . '</a>' . $tail;
    }, $text);
    $paragraphs = [];
    foreach (preg_split('/\n{2,}/', trim($text)) as $block) {
        $paragraphs[] = '<p style="margin:0 0 16px;">' . nl2br(trim($block), false) . '</p>';
    }
    $html = file_get_contents($file);
    $html = str_replace('{{body}}', implode("\n", $paragraphs), $html);
    $html = str_replace('{{domain}}', btv_base_domain(), $html);
    $logo = wp_get_attachment_url((int) get_option('btv_email_logo_id'));
    $html = str_replace('{{logo_url}}', $logo ? $logo : 'https://' . btv_base_domain() . '/wp-content/uploads/btv-logo-transparent.png', $html);
    $args['message'] = $html;
    $type = 'Content-Type: text/html; charset=UTF-8';
    $args['headers'] = is_array($headers) ? array_merge($headers, [$type]) : trim($joined . "\n" . $type);
    return $args;
});

/**
 * FluentCart emails (the receipt and the notices to the shop and the plain emails to customers) come in FluentCart's own grey layout.
 * Put the body in the Botterverse layout with the logo and swap FluentCart's blue and grey inline colours for the
 * brand colours. Only mail that holds FluentCart's email_wrap table is touched. Everything else is left alone.
 */
add_filter('wp_mail', function ($args) {
    $message = isset($args['message']) ? (string) $args['message'] : '';
    if (strpos($message, 'class="email_wrap"') === false || strpos($message, 'bv-cart') !== false) {
        return $args;
    }
    $file = BTV_SYNC_DIR . '/templates/cart-email.html';
    if (!is_readable($file) || !preg_match('~<body[^>]*>(.*)</body>~is', $message, $m)) {
        return $args;
    }
    $body = $m[1];
    // FluentCart's hidden preview line names FluentCart, so it goes.
    $body = preg_replace('~<div[^>]*data-skip-in-text="true"[^>]*>.*?</div>~is', '', $body);
    // The card FluentCart draws around the sale notice is replaced by the Botterverse card.
    $body = preg_replace_callback('~<table[^>]*class="email_wrap"[^>]*>~i', function ($t) {
        return preg_replace('~border:[^;"]*;|border-radius:[^;"]*;|background-color:[^;"]*;~i', '', $t[0]);
    }, $body);
    $body = str_replace('class="email_wrap_inner" style="padding:32px;"', 'class="email_wrap_inner" style="padding:0;"', $body);
    $map = [
        '17,24,39' => '#391d37', '75,85,99' => '#6b5469', '55,65,81' => '#2b1a2a',
        '243,244,246' => '#f3eefb', '238,240,243' => '#e6dff2', '229,231,235' => '#e6dff2',
        '209,213,219' => '#d9cfe8', '241,243,246' => '#f8f7ff', '248,249,250' => '#f8f7ff',
        '248,250,252' => '#faf8ff', '238,242,255' => '#f3eefb', '224,231,255' => '#ffe0fb',
        '67,56,202' => '#984f92', '30,58,138' => '#391d37',
    ];
    $body = preg_replace_callback('~rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)~', function ($c) use ($map) {
        $key = $c[1] . ',' . $c[2] . ',' . $c[3];
        return isset($map[$key]) ? $map[$key] : $c[0];
    }, $body);
    $body = str_replace('#64748b', '#6b5469', $body);
    $html = file_get_contents($file);
    $html = str_replace('{{body}}', $body, $html);
    $html = str_replace('{{domain}}', btv_base_domain(), $html);
    $logo = wp_get_attachment_url((int) get_option('btv_email_logo_id'));
    $html = str_replace('{{logo_url}}', $logo ? $logo : 'https://' . btv_base_domain() . '/wp-content/uploads/btv-logo-transparent.png', $html);
    $args['message'] = $html;
    return $args;
}, 20);
