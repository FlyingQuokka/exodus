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
 * FluentCRM only parses codes written group.key. It hands any other code to this filter.
 */
add_filter('fluentcrm_smartcode_fallback', function ($code, $subscriber = null) {
    if ($code === '{{domain}}') {
        return btv_base_domain();
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
    $html = str_replace('{{logo_url}}', $logo ? $logo : 'https://' . btv_base_domain() . '/wp-content/uploads/btv-email-logo.png', $html);
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
    $html = str_replace('{{logo_url}}', $logo ? $logo : 'https://' . btv_base_domain() . '/wp-content/uploads/btv-email-logo.png', $html);
    $args['message'] = $html;
    $type = 'Content-Type: text/html; charset=UTF-8';
    $args['headers'] = is_array($headers) ? array_merge($headers, [$type]) : trim($joined . "\n" . $type);
    return $args;
});
