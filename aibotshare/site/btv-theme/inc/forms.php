<?php
/**
 * The lead capture form. The btv-sync plugin creates the form in Fluent Forms and keeps its id in an option.
 * The email capture pattern asks for the id through this filter.
 */

if (!defined('ABSPATH')) {
    exit;
}

add_filter('btv_email_capture_form_id', function ($id) {
    return $id ? $id : (int) get_option('btv_lead_form_id', 0);
});

/**
 * [btv_lead_form] shows the lead capture form. Page files use this and never a form id,
 * because the id is different on every copy of the site.
 */
add_shortcode('btv_lead_form', function () {
    $id = (int) apply_filters('btv_email_capture_form_id', 0);
    return $id ? do_shortcode('[fluentform id="' . $id . '"]') : '';
});
