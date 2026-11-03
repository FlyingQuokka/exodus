# Admin verification report

Date: 2026-10-31. Read-only check of the local site (botterverse.debbie). Plugin source read under `D:\Users\Quokka\Desktop\Websites\aibotshare\public\wp-content\plugins` (written PLUGINS below). Admin screens were read in Chrome. Nothing was saved or created. The Chrome tab was closed at the end.

## Summary

| Q | One-line answer | Confidence |
|---|---|---|
| A | Triggers exist for order paid and subscription activated/renewed/canceled/expired/end of term. Tag applied/removed and list added/removed are Pro triggers. No FluentCRM trigger for a plan change. FluentCart does fire `fluent_cart/order/upgraded` (Pro) on an upgrade. | High |
| B | "Check Condition" block (Pro) tests tags and lists and custom fields. Wait has four modes. "Cancel Automations" and "End This Automation" blocks exist. No automatic exit when a tag is removed. | High |
| C | `FluentCrmApi('extender')->addSmartCode($key, $title, $shortcodes, $callback, $args = [])`. Works in subjects and automation emails and campaign emails. | High |
| D | Unsubscribe sets the whole contact to `unsubscribed`. List-level opt-out exists only on the Manage Subscription page for public lists. | High |
| E | Template types: simple, plain, classic, raw_classic, raw_html and Pro visual_builder. One global style plus one global footer apply to all. No global header. | High (footer and style) / Medium (default template for automation emails) |
| F | No URL parameter preselects a product or category in the portal. The Feedback page does it with a shortcode attribute `business_box_id`. Styling is by CSS plus block attributes. | Medium-High |
| G | A "default style template" option applies preset and custom CSS to NEW forms only. Theme CSS works for the rest. There are no forms on the site yet. | High |
| H | Theme-independent plugin. Ships PHP templates for classic themes and `.html` block templates for block themes. | High |
| I | `title` and `metadesc` and `focuskw` are REST-writable for posts only - not pages. A separate Yoast bulk editor route can write them. | High for the meta / Medium for the route |
| J | Pages are built from shortcodes. Main wrapper classes listed below. | High |
| K | Hits found: see section K. No form or template or automation holds the typed domain. | Medium-High |

## A. FluentCRM triggers

Source: `fluent-crm/app/Services/ExternalIntegrations/FluentCart/Triggers/*.php`, `fluent-crm/app/Services/Funnel/Triggers/*.php`, `fluentcampaign-pro/app/Services/Funnel/Triggers/*.php`, `fluentcampaign-pro/app/Services/Integrations/CRM/*Trigger.php`, `fluent-affiliate/app/Modules/FluentCRM/*Trigger.php`. Each trigger sets `$this->triggerName` to the hook.

| Trigger label | Hook |
|---|---|
| Order Paid (Payment/Subscription) | `fluent_cart/order_paid_done` |
| Order Status Changed | `fluent_cart/order_status_changed` |
| Order Canceled | `fluent_cart/order_status_changed_to_canceled` |
| Order Refunded (Full) | `fluent_cart/order_fully_refunded` |
| Order Shipped | `fluent_cart/shipping_status_changed_to_shipped` |
| Order Delivered | `fluent_cart/shipping_status_changed_to_delivered` |
| Subscription Activated | `fluent_cart/subscription_activated` |
| Subscription Renewed | `fluent_cart/subscription_renewed` |
| Subscription Canceled | `fluent_cart/subscription_canceled` |
| Subscription Expired / End of Access Validity | `fluent_cart/subscription_expired_validity` |
| Subscription End of Term (Completed) | `fluent_cart/subscription_eot` |
| Cart Abandoned - FluentCart | `fc_ab_cart_simulation_fluent_cart` |
| New Fluent Forms Submission | `fluentform_submission_inserted` |
| Subscription Payment Received (Fluent Forms) | `fluentform/subscription_payment_active` |
| Subscription Canceled (Fluent Forms) | `fluentform/subscription_payment_canceled` |
| New User Sign Up | `user_register` |
| User Login (Pro) | `wp_login` |
| Contact Created (Pro) | `fluent_crm/contact_created` |
| Contact Status Changed (Pro) | `fluent_crm/subscriber_status_changed` |
| Contact's Birthday (Pro) | `fluentcrm_contact_birthday` |
| Tracking Event Recorded (Pro) | `fluent_crm/event_tracked` |
| Tag Applied (Pro) | `fluentcrm_contact_added_to_tags` |
| Tag Removed (Pro) | `fluentcrm_contact_removed_from_tags` |
| Contact Added to List (Pro) | `fluentcrm_contact_added_to_lists` |
| List Removed (Pro) | `fluentcrm_contact_removed_from_lists` |
| Contact Added to / Removed from Company (Pro) | `fluentcrm_contact_added_to_companies` / `fluentcrm_contact_removed_from_companies` |
| Affiliate Account Approved | `fluent_affiliate/affiliate_status_to_active` |
| Affiliate Registered as Pending | `fluent_affiliate/affiliate_created` |
| Successful Referral Created | `fluent_affiliate/referral_marked_unpaid` |
| Affiliate Payout Sent | `fluent_affiliate/payout/transaction/transaction_updated_to_paid` |

Other Pro triggers exist for WooCommerce and EDD and LearnDash and others. They are not relevant here.

Fluent Support: no automation trigger exists. Fluent Support adds only an action block (create a ticket) at `fluent-support/app/Services/Integrations/FluentCrm/CreateTicketAction.php`.

### A1 FluentCart
- Buying a plan: Subscription Activated (`fluent_cart/subscription_activated`). It is dispatched from `fluent-cart/app/Helpers/StatusHelper.php:401` and the gateway classes (Stripe `SubscriptionsManager.php:212` and PayPal and others).
- Order paid: Order Paid (`fluent_cart/order_paid_done`). It is async via Action Scheduler (`fluent-cart/app/Hooks/actions.php:150-195`). It fires for initial orders only. Renewal invoices do NOT fire it (`StatusHelper.php:119-130`). Renewals fire Subscription Renewed.
- Renewed: Subscription Renewed. Cancelled: Subscription Canceled. Expired: Subscription Expired / End of Access Validity (fired when status becomes `expired`, `SubscriptionService.php:~500`). End of term: Subscription End of Term (`SubscriptionService.php:459`).
- Plan change: there is NO FluentCRM trigger. Findings:
  - Pro handler `fluent-cart-pro/app/Hooks/Handlers/UpgradeHandler.php:402` fires `do_action('fluent_cart/order/upgraded', [order, from_order, cart, from_variant_id, transaction])`. An upgrade creates a NEW order (and a new subscription) and cancels the old subscription with `fire_hooks => false` (line 366-370). So the old plan does NOT fire Subscription Canceled. The new order fires Order Paid and Subscription Activated as normal.
  - A class `fluent-cart/app/Events/PlanChanged.php` declares hook `fluent_cart/plan_changed`. Grep found nothing that dispatches it. Treat it as unused.
  - Nothing found for a downgrade path.
  - The FluentCart triggers filter by PRODUCT or category only (`OrderPaidTrigger::checkConditions`). They cannot filter by variation (plan tier). A plan-specific automation needs a Check Condition or a tag set by the app.
  - Each trigger skips a contact already in the same automation unless "Allow this event to restart the automation" is ticked (`isProcessable`).
- Confidence: High from source. Not tested live.

### A2 Tags and lists
- Tag applied: yes (Pro, `TagAppliedTrigger`). Any or all of the chosen tags.
- Tag removed: yes (Pro, `RemoveFromTagTrigger`).
- List applied: yes (Pro, `ListAppliedTrigger`). List removed: yes (Pro, `RemoveFromListTrigger`).
- Hooks are raised from `fluent-crm/app/Functions/helpers.php:1055-1143`. Tags added by an automation action also fire them. One automation can therefore start another through a tag.
- Benchmark blocks (goals) exist for tag applied/removed and list applied/removed in `fluent-crm/app/Services/Funnel/Benchmarks`.

### A3 Fluent Affiliate
- Affiliate Account Approved: `fluent_affiliate/affiliate_status_to_active`. Fires when an admin sets the status to active (`AffiliateController.php:352,393`) or when a new affiliate is created already active (`Models/User.php:162`).
- Affiliate Registered as Pending: hook `fluent_affiliate/affiliate_created` (`Models/User.php:159`). It fires for every new affiliate. The handler returns unless `status === 'pending'` and the affiliate has a WordPress user.
- Successful Referral Created: hook `fluent_affiliate/referral_marked_unpaid`. Fires when a referral is saved with status `unpaid` (`BaseConnector.php:117`) or when a pending referral is marked unpaid (line 157). It does not fire for a `pending` referral (that fires `referral_created`).
- Affiliate Payout Sent: `fluent_affiliate/payout/transaction/transaction_updated_to_paid` (`Models/Transaction.php:265`). Fires once when the transaction flips to paid.
- Confidence: High.

## B. Automation blocks

Source: `fluent-crm/app/Services/Funnel/Actions`, `fluentcampaign-pro/app/Services/Funnel/Actions`, `fluentcampaign-pro/app/Services/Funnel/Conditions`.
- Core actions: Apply/Remove Tag and List and Company, Send Email, Wait.
- Pro actions: Check Condition (if/else), A/B testing, Cancel Automations, End This Automation Here, Add/Remove from Email Sequence, Change Contact Status, Update Contact Property, Add Event Tracker, HTTP Send Data, Send Campaign Email, Change User Role and others.
- Check Condition (`FunnelCondition.php`): yes/no branches. Testable data: contact fields (name and email and address and country and phone and others), Tags, Lists, WP user role, Status, Last Email Sent/Clicked/Opened, Created At, Last Activity, Date of Birth, custom fields (all your custom fields) and event tracking. Match all or any.
- Wait (`WaitTimeAction.php`): four types - wait by period (months and days and hours and minutes), wait until date and time, wait until the next selected weekday(s) at a time of day (10 minute steps) and wait by a contact date custom field (or next birthday).
- Cancel Automations (`RemoveFromFunnelAction.php`): cancels chosen other automations for the contact.
- One automation can start another only indirectly, for example by applying a tag or list that a second automation listens to. No direct "start automation" block was found.
- Tag removed mid-run: nothing happens by default. The pending steps carry on. Built-in exit behaviour found:
  - A contact whose status is not `subscribed` or `transactional` has the next step cancelled (`FunnelProcessor::processFunnelAction`, line 505) unless the automation has the "force run" setting.
  - Benchmarks (goals): when a contact meets an optional goal such as "Tag Removed" they jump to that point in the automation. A required goal makes them wait. This is a jump rather than an exit. An End block placed after the goal ends the run.
  - For a real exit use a Check Condition before each email or a "Tag Removed" benchmark that leads to Cancel Automations or End.
- Confidence: High.

## C. Smart codes

- Yes. `fluent-crm/app/Api/Classes/Extender.php:99`:
  `public function addSmartCode($key, $title, $shortcodes, $callback, $args = [])`
  Call it as `FluentCrmApi('extender')->addSmartCode(...)` (class mapped in `fluent-crm/app/Api/config.php:11`; `FluentCrmApi()` is in `fluent-crm/app/Functions`). Hook the call on `fluentcrm_loaded` (fired at `fluent-crm/boot/app.php:41`).
  - `$shortcodes` is `['code' => 'Label']`. The smart code is `{{key.code}}`.
  - Callback signature: `function ($code, $valueKey, $defaultValue, $subscriber, $level): string`.
  - `$args['level']` and `$args['levels']` set sensitivity (basic or private or credential). Anything that grants access (login link and tokens) must be `credential`.
  - Reserved keys cannot be used: crm and other and contact and wp and fluentcrm and user and wp_user and cart_order and cart_customer and others (list at lines 101-125).
- Where it works: the subject is filtered through `fluent_crm/parse_campaign_email_text` at `Campaign.php:652` (campaigns) and `FunnelCampaign.php:223` (automation and sequence emails). The same filter parses the body and footer and preheader. So yes for subject and automation emails and campaign emails.
- Lower level alternative: filter `fluent_crm/smartcode_group_callback_{key}` plus `fluent_crm/extended_smart_codes`.
- Confidence: High from source. Not run live.

## D. Unsubscribe

- The unsubscribe link sets the whole contact to `unsubscribed` (`ExternalPages.php:714-760` `updateStatus('unsubscribed')`).
- A contact cannot be unsubscribed from one list through that link.
- List-level opt-out: the Manage Subscription page (`ExternalPages.php:1348-1410`) shows public lists as tick boxes. Unticking detaches the contact from that list. Which lists show depends on the setting "pref_list_type" (none or all or filtered_only). The admin screen currently stores `filtered_only` (Settings > Email Settings).
- Other details: contacts who are not subscribed have automation steps cancelled (see B).
- Confidence: High.

## E. Email templates

- Design templates (`fluent-crm/app/Services/Helper.php:870-960`): `simple` (Simple Boxed) and `plain` (Plain Centered) and `classic` (Plain Left) and `raw_classic` (Classic Editor) and `raw_html` (Raw HTML). Pro adds `visual_builder`.
- Raw HTML sends your HTML untouched. The footer is still injected unless disabled (raw_classic note says the default footer is injected after content).
- Global style: Email Templates > global style (`global_email_style_config`, `TemplateController::setGlobalStyle`). It sets width and colours and fonts. Applies to the non-raw templates.
- Global footer: Settings > Email Settings holds one footer for all (seen live: it already contains the business name and address and the unsubscribe and manage subscription links). Header: there is no global header setting.
- Default template: filter `fluent_crm/default_email_design_template` (default `simple`). A saved email template can be made the default for campaigns (`TemplateController.php:394`). Whether automation emails use it was not verified.
- Email Templates screen shows 0 templates today.
- Confidence: High for the types and style and footer. Medium for default template reach.

## F. Fluent Support

- URL parameter that preselects a product or category: not found. The compiled portal (`fluent-support/assets/portal/js/app.js`) has routes `/` and `/ticket/create` and `/ticket/:ticket_id/view` and never reads route query values. The new-ticket form starts with `product_id: ""`. Fluent Support has no ticket categories. "Products" act as categories on this site (nine exist, for example "Account and sign-in" and "Feedback").
- What does work: the shortcode attribute `business_box_id` fixes the inbox (mailbox). The live Feedback page (id 88) uses `[fluent_support_portal business_box_id="2"]`. The Support page (id 79) uses `[fluent_support_portal]`. Source: `ShortcodeHandler.php`. Pre-filling the product by link would need custom JS or a plugin filter. Not found in core.
- Styling:
  - Block `fluent-support/customer-portal` stores style attributes: container radius and input radius and avatar radius and primary/secondary button colours (`BlockHelper::processAttributesAndPrepareStyle`, prints a `<style>` scoped to `#fluent_support_client_app`).
  - Mount id `#fluent_support_client_app`. Classes include `.fs_client_portal` and `.fs_tickets_container` and `.fs_ticket_form_container` and `.fs_create_ticket_btn` and `.fs_reply_btn` and `.fs_create_ticket_container` and `.fs_customer_conversation`.
  - CSS variables `--fs-*` in the portal stylesheet (for example `--fs-btn-primary-bg` and `--fs-border-focus`) can be overridden from a theme stylesheet.
  - No template override mechanism found for the portal (it is a Vue app).
- Login: the portal page shows the "Message for non logged in" text from Fluent Support > Settings > Global Settings. Currently `<p>Please login or create an account...</p> [fluent_support_auth]`. The login form is `wp_login_form` output inside `.fst_login_form_auth_wrapper` (live on /support/). Form args can be changed with filter `fluent_support/login_form_args`. The text is HTML and editable, so it can carry branding.
- Confidence: Medium-High.

## G. Fluent Forms

- Preset applied from one place: yes, but only to NEW forms. Option `_fluentform_default_style_template` (enabled and custom_css and styler_enabled and styler_theme and styler_styles). Source `fluentform/app/Modules/Form/DefaultStyleApplicator.php` runs on `fluentform/inserted_new_form`. It sets `_ff_selected_style` and custom CSS per form. The `{form_id}` and `FF_ID` placeholders are replaced. Existing forms are not changed.
- Pro form styler presets: `FormStyler::getPresets()`. The free fallback has `ffs_default` and `ffs_inherit_theme` (inherit the theme style).
- Global custom CSS for existing forms: no setting found. A theme stylesheet can target the form classes.
- Forms on the site: 0 (screen shows "Total 0").
- Confidence: High.

## H. Better Docs

- Plugin folder `betterdocs` is a normal plugin, so it is theme-independent.
- It ships classic PHP templates under `views/templates` (single layouts and archive layouts and category/tag taxonomy templates and search/header parts). `TemplateLoader::init` uses `archive_template` and `single_template` filters for classic themes. A classic theme can override with `archive-doc_category.php` in the theme.
- For block themes it ships `.html` block templates in `views/templates/fse`: `archive-docs.html` and `single-docs.html` and `taxonomy-doc_category.html` and `taxonomy-doc_tag.html` and `taxonomy-glossaries.html` and `taxonomy-knowledge_base.html`. `includes/Editors/BlockEditor/TemplatesController.php` registers them (hooks `get_block_templates` and `pre_get_block_file_template`).
- Override on a block theme: edit them in the Site Editor (saved copy wins) or add a same-named `.html` file to the theme `templates` folder. `add_block_templates` skips a plugin template when the theme already has that slug (lines ~239-247).
- There is no dedicated search template in the fse folder. Search results use the theme `search.html` unless Better Docs search shortcodes are used (not verified).
- Active theme here is Twenty Twenty-Five (a block theme).
- Confidence: High for structure. Medium for the exact override order.

## I. Yoast SEO

- `wordpress-seo/inc/class-wpseo-meta.php` (version 28.8). Fields `_yoast_wpseo_title` and `_yoast_wpseo_metadesc` and `_yoast_wpseo_focuskw` have `show_in_rest => true` and `single => true` (lines 101-120).
- They are registered for `object_subtype => 'post'` ONLY (lines 296-312). That means blog posts. Pages and other post types are not exposed for writing through `meta`. Reads are also hidden from users without `edit_post` (line 333).
- Since the site's content is pages, `meta` on `/wp/v2/pages` will not work.
- Yoast route found: `POST /wp-json/yoast/v1/bulk_editor/update_search` (`src/bulk-editor/user-interface/search-bulk-update-route.php`). Body: `items: [{id (integer), seo_title, meta_description, focus_keyphrase}]`. Needs capability `wpseo_manage_options`. Batch size is limited by `Batch_Limit`. I did not call it or confirm that it handles pages. It is an internal route and not documented in what I read.
- Confidence: High for the meta registration. Medium for the bulk route.

## J. FluentCart pages

Page content read from the admin edit screens (GET only):

| Page (id) | Content |
|---|---|
| Checkout (72) | `[fluent_cart_checkout]` |
| Cart (66) | `[fluent_cart_cart]` |
| Order Review (70) | `[fluent_cart_order_review]` |
| Receipt (68) | `[fluent_cart_receipt]` |
| Profile/Account (63) | `[fluent_cart_customer_profile]` (slug is `account`) |
| Shop (61) | `[fluent_cart_products]` |

So all are shortcodes. Blocks with the same features also exist (`fluent-cart/*`).

Classes found in source and rendered pages (for a theme stylesheet):
- Body: `.fluent-cart-theme` (default colours) or `.fluent-cart-custom` or `.fluent-cart-no-colors` (`Services/Theme/FrontendTheme.php`).
- Colour variables `--fct-*` (for example `--fct-primary-bg-color` and `--fct-primary-text-color`) printed late on `:root`. FluentCart has a setting that inherits colours from the theme.
- Checkout: `.fct_checkout_form` and `.fct_checkout_inner` and `.fct_checkout_form_section` and `.fct_checkout_summary` and `.fct_checkout_payment_methods` and `.fct_checkout_input_group` and `.fct_checkout_agree_terms`.
- Cart: `.fct-cart-page` and `.fluent-cart-cart-empty-content`.
- Order review: `.fct-order-review-page`.
- Receipt: `.fluent_cart_order_confirmation` and `.fct-receipt-page-*` and `.fct-thank-you-page-*`.
- Account: `.fct_auth_wrap` and `.fct_auth_message` and `.fct-customer-login-btn` (logged out). Logged in: `.fct-customer-dashboard-navs-wrap` and `.fct-customer-dashboard-main-content`. The sign-in page is at `/billing-account/sign-in/`.
- Shop: `.fct-products-wrapper` and `.fct-product-card` and `.fct-shop-view-switcher`.
- Not tested with a filled cart or a logged-in customer view.
- Confidence: High for the shortcodes. Medium for completeness of classes.

## K. Typed domain audit

Site address (Settings > General): WordPress Address and Site Address are both `https://botterverse.debbie`. Administration Email Address is `custsupp@botterverse.debbie`.

Hits where the text contains "botterverse" (excluding normal links to the site itself):

| Where | Exact text |
|---|---|
| Page "CCPA - California Consumer Privacy Act" (id 59) | `https://botterverse.com` and `custsupp@botterverse.com` |
| Page "DMCA" (id 57) | `https://botterverse.com` and `custsupp@botterverse.com` |
| Page "Privacy Policy App Version" (id 81) | link `https://members.botterverse.debbie/legal/retention` (text "How long we keep your data") |
| Page "Pricing" (id 78) | links `https://members.botterverse.debbie/buy` (three: buy monthly and buy annual and buy) and the retention link above in the footer area |
| Home page footer (all pages) | the same retention link `https://members.botterverse.debbie/legal/retention` |
| Receipt page (id 68) | link `https://members.botterverse.debbie/register` ("Create your Botter's Lab account") |
| Navigation menus "Header" and "Footer" (wp_navigation) | absolute links to `https://botterverse.debbie/...` (pricing and shop and cart-2 and checkout and account). The admin search for "botterverse" matched both menus. |
| Fluent Support > Business Inboxes | two inboxes with email `mailpit@botterverse.com` |
| FluentCRM > Settings > Email Settings | From Email `mailpit@botterverse.com` |
| FluentCRM contacts | `testfounder01@botterverse.com` and `testfounder02@botterverse.com` and `testfounder03@botterverse.com` (3 test contacts) |
| Also searched | Fluent Forms: 0 forms. FluentCRM email templates: 0. FluentCRM automations: 0 active. Fluent Support Global Settings: no hit. Posts: no hit. |

Notes: the mix of `.com` and `.debbie` shows the typed domain is not consistent. `botterverse.com` appears in legal text and mail addresses. `botterverse.debbie` appears in the WordPress addresses and menu links and the `members` links. I did not judge which is correct. The Support and Feedback pages show a link to `/wp-admin/admin.php` only when the viewer is staff.

## Could not verify

- No live test of any trigger or smart code or upgrade event. Everything is from source.
- Whether `fluent_cart/plan_changed` is dispatched anywhere (grep found no dispatcher).
- Whether FluentCRM automation emails use the default campaign template.
- Whether Fluent Support Pro adds any URL-driven preselection (only the free portal bundle was searched in depth).
- Whether the Yoast bulk editor route accepts pages or is enabled by default.
- BetterDocs search results template and exact override precedence on a live Site Editor.
- FluentCart logged-in customer dashboard classes and a populated checkout (cart was empty).
- The Fluent Support settings screens "Ticket Form Config" and "Remote Portal" were not opened.
- Navigation menu link text was inferred from rendered pages. The raw block content of the menus was not opened.
