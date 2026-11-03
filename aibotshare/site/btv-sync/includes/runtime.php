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
