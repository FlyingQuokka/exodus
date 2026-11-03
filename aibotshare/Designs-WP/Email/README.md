# Botterverse FluentCRM email template

Files:
- `botterverse-email-template.html` is the template to paste into FluentCRM.
- `botterverse-email-template-preview.html` is the same template filled with the S01 welcome email and sample values. Open it in a browser to see the result.

## Set it as the default template

1. Upload the logo to the WordPress media library with the file name `btv-email-logo.png`. Use `Designs-WP\Logos\purple-ring\botterverse-logo-transparent.png`. The template points to `https://{{domain}}/wp-content/uploads/btv-email-logo.png`. Replace `{{domain}}` with the real domain when pasting (it is not a FluentCRM smart code).
2. In FluentCRM go to Settings, then Email Settings and set the template style to Raw HTML. Alternatively open Email Templates, create a new template and choose the Raw HTML editor.
3. Paste the whole of `botterverse-email-template.html`. Save the template.
4. Set it as the default template (Email Settings, default template) so every campaign and automation email uses it.
5. Send a test to a Gmail and an Outlook address and check the body marker below.

## Smart codes used

| Code | Use |
|---|---|
| `{{crm.email_body}}` | Where the email body is inserted. This is the one to verify: FluentCRM versions differ, so compare with the marker in the plugin's own Raw HTML default template and swap it if it differs. |
| `{{crm.unsubscribe_url}}` | Unsubscribe link |
| `{{crm.manage_subscription_url}}` | Manage preferences link |
| `{{crm.business_name}}` | Business name from FluentCRM settings |
| `{{crm.business_address}}` | Business address from FluentCRM settings |

Some FluentCRM versions write the unsubscribe and preference links as `##crm.unsubscribe_url##` and `##crm.manage_subscription_url##`. Use whichever form your default template uses. The body of the sample emails also uses `{{contact.first_name}}` and `{{domain}}`.

## Writing inside the body

Headings (H1 to H3) and paragraphs and lists and links and block quotes take their style from the template. Use a block quote for the copy-and-paste block. For the single button paste this and change the link and text:

```
<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" bgcolor="#dc8fd5" style="background-color:#dc8fd5;border-radius:12px;"><a href="URL" target="_blank" style="display:inline-block;padding:14px 28px;font-family:'Baloo 2','Trebuchet MS',Arial,sans-serif;font-size:17px;font-weight:700;color:#391d37;text-decoration:none;border-radius:12px;">Take Me To The Botterverse</a></td></tr></table>
```

## Dark mode

The page and card go dark and the text and links lighten. The logo sits on a white strip so the dark logo stays readable. If you prefer a dark logo strip, upload `botterverse-logo-transparent-light-text.png` and swap it in a dark-mode block. Many clients ignore that so the white strip is the safe choice.

## Known email client limits

- Outlook desktop (Windows) ignores rounded corners. The card and button are square there. Everything else holds.
- Baloo 2 and Nunito Sans only show where installed (Apple Mail and some phones). Other clients use Trebuchet MS or Segoe UI or Arial.
- Heading and list styles sit in a style block. Clients that remove style blocks show browser defaults for those. Gmail with a non-Google account is one.
- Gmail and Outlook apps change colours in dark mode in their own way. The prefers-color-scheme block helps Apple Mail and Outlook.com only. Gmail inverts automatically.
- Images are off by default in some clients. The logo has alt text.
- The template has no preheader and no banners and no social icons by design.

## Checked against the FluentCRM source (1 November 2026)

- FluentCRM has no pasted HTML template with a body marker. The marker `{{crm.email_body}}` in this design file only shows where the email body goes. In the real build the template is registered in the theme code as a custom design template:
  1. Add a key such as `botterverse` to the list with the filter `fluent_crm/email_design_templates`.
  2. Return the full HTML (this design with the body inserted) from the filter `fluent_crm/email-design-template-botterverse`. The filter receives the email body then the template data then the campaign.
  3. Make it the default with the filter `fluent_crm/default_email_design_template` returning `botterverse`.
- The unsubscribe and manage-preferences links in the source use the form `##crm.unsubscribe_url##` and `##crm.manage_subscription_url##`. This template now uses that form. The business name and address codes are `{{crm.business_name}}` and `{{crm.business_address}}`.
- Not tested live. This comes from reading the plugin source.
