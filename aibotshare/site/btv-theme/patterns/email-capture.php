<?php
/**
 * Title: Email capture
 * Slug: btv/email-capture
 * Description: A bar with one line of text and a Fluent Forms form. Build the form in Fluent Forms first then set its id below.
 * Categories: btv
 */
$form_id = (int) apply_filters('btv_email_capture_form_id', 0);
?>
<!-- wp:html -->
<section class="section-tight"><div class="container"><div class="inline-bar"><p class="txt">Short line that says why to join the list.</p><div class="form">
<!-- /wp:html -->
<?php if ($form_id) : ?>
<!-- wp:shortcode -->
[fluentform id="<?php echo $form_id; ?>"]
<!-- /wp:shortcode -->
<?php endif; ?>
<!-- wp:html -->
</div></div></div></section>
<!-- /wp:html -->
