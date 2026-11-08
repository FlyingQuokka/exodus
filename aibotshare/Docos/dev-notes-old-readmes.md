# Development notes from the old theme and sync READMEs

Kept on 8 November 2026 when the READMEs were replaced by the short `site/README.md` for the live repository. Some details are out of date.

## Theme README

#### Botterverse theme

Bespoke block theme for the Botterverse marketing site. It is not a child theme. Spec: `Docos\theme-spec-v1.md`.

### Install (local)

1. Link the folder into the site's themes folder with a junction (PowerShell):
   `New-Item -ItemType Junction -Path <site>\wp-content\themes\btv-theme -Target <repo>\aibotshare\site\btv-theme`
2. Take a database snapshot first.
3. Activate the theme (Appearance, Themes).
4. Write the pages into WordPress:
   `php bin/install-pages.php --wp=<site>\public --host=<site host> [--dry-run]`
   It is safe to run again. Pages are found by slug. It never touches FluentCart system pages.
5. Check the source: `php bin/check-domains.php` (exit code 1 when a typed domain is found).

Do not install on a live server until the owner approves. Page IDs differ per environment so nothing here uses an ID.

### What is in it

- `theme.json`: palette, fonts, layout widths.
- `assets/css/btv-theme.css`: all tokens and components. No inline styles anywhere.
- `assets/css/btv-home.css`: the home page only (every rule starts with `.hm`). It also loads Nunito Black and M PLUS Rounded 1c, which are used on that page and nowhere else. Enqueued by `inc/assets.php` on the front page. To update the home page without touching other pages' database edits, write `pages/home.html` into the Home page alone. Do not run the full page installer, which replaces every page.
- `assets/css/integrations/`: FluentCart, Fluent Forms, Fluent Support, Better Docs and the WordPress login. CSS only.
- `templates/`: front-page, page, page-landing, page-wide, single, index, home, archive, search, 404.
- `parts/`: header and footer. Both are dynamic blocks (`inc/header-footer.php`). The header changes when signed in. The footer's Legal column shows the Footer navigation post (found by title). No boost row.
- `patterns/`: hero, cards, accordion, pricing table, CTA band, step list and email capture. The header holds a banner slot (see `inc/banners.php`). Banners are managed in Advanced Ads and set up by the sync from `btv-sync/data/banners.json`. To end the Founders offer set `"active": false` on its banner in that file.
- `pages/`: Home, Pricing, How it works, Affiliates, FAQ, Support, Feedback, Founders offer and Bot Market as block markup. Each design section is a Custom HTML block, so edit the files and run the installer, not the Site Editor.
- `inc/domain.php`: the `{{domain}}` and `{{theme}}` token filter and `btv_lab_url()`.
- `inc/seo.php`: the Articles page is noindex and the three Yoast fields are registered for pages.

### Choices to know about

- One content width site-wide: 1120px (24px gutters on a phone). `.container` and `.narrow` are the same width. The WordPress login card and the help desk and account sign-in cards stay as centred cards inside it.
- Header (signed out): How it works, Pricing, Bot Market, Affiliates, FAQ, Support, then the Botters Lab button. It collapses to a menu button at 1000px and below. Signed in: Support, the Account icon and the Botters Lab button. The cart icon shows only when the cart has items.
- Every Botters Lab link opens in a new tab (`target="_blank" rel="noopener"`), as does the footer Documentation link.
- `bin/install-pages.php` also rebuilds the Footer navigation post (legal pages only).
- Pricing keeps the live buy links unchanged except the host, which is now `lab.{{domain}}` and renders to the same address as before. The design had no buy links so each plan button is the monthly link with an "Or pay annually" link below it. The Botter Booster table has an added Buy column.
- The Affiliates page needs the slug `affiliates`. The draft portal page (ID 231, Fluent Affiliate shortcode) held it, so the installer renamed that draft's slug to `affiliates-lab`.
- The Lab host is `lab.` plus the domain, as in the existing buy links. The site plan said `members.`, so update the plan.
- The footer Legal column shows the Footer navigation post as it is. That post still lists Feedback and Support and Terms of Use, so trim it to the legal pages.
- Fonts (Baloo 2 and Nunito Sans) are copied from the site's existing `btv-fonts` upload.

### Not tested

- FluentCart on a filled cart or a signed-in customer (Cart, Checkout, Order Review, Receipt, Profile, Shop). The CSS comes from the plugin source and the cart design.
- Fluent Support when signed in (ticket list and new ticket). Only the signed-out login screen was seen.
- Fluent Forms (no forms exist yet), the email capture pattern and Better Docs layouts.
- The signed-in header and the cart count icon.
- The WordPress lost-password screen and the login wording changes beyond the first screen.
- A real phone. Pages were checked at 390 pixels wide in a desktop browser only.
- Nightshift (optional style, off).

## Sync README

#### btv-sync

Creates and updates the Botterverse tags, FluentCart emails and FluentCRM automations from the files in `data\`. It is safe to run again. It finds everything by name or key and never by ID. It never deletes a tag or a contact.

### Run it

```
php bin\run-sync.php --wp=<path to the WordPress folder> --user=<login of a WordPress admin>
```

Add `--publish` to publish the automations whose file says `"publish": true`. Without it every automation stays in draft. On the local site the WordPress folder is `D:\Users\Quokka\Desktop\Websites\botterverse\public` and the user is `agentuser`. It needs PHP on the command line. WP-CLI is not used.

### Install

Link or copy this folder to `wp-content\plugins\btv-sync` and activate it. The plugin registers the Botterverse email design (the default for new emails) and the `{{domain}}` smart code. Locally the folder is a Windows folder junction to this one.

### Files

| File | What it holds |
|---|---|
| `data\tags.json` | Tags to create when missing |
| `data\emails.json` | Email subjects and HTML. Built by `tools\build-email-data.py` from `Emails\build`. Do not edit by hand |
| `data\fluentcart.json` | Which FluentCart emails carry our wording and which stock ones are switched off |
| `data\funnels\*.json` | One automation per file |
| `data\forms.json` | The Fluent Forms lead capture form and its FluentCRM feed. The form id is kept in the option `btv_lead_form_id` |
| `dataanners.json` | Banner slots and banners for the Advanced Ads plugin. See "Banners" below |
| `data\banners.json` | Banner slots and banners for the Advanced Ads plugin. See "Banners" below |
| `data\campaigns.json` | Draft broadcast campaigns. Never sent by the sync |
| `data\settings.json` | FluentCRM experimental features (`abandoned_cart` is `yes`) and the reply-to address for every FluentCRM email (`support@botterverse.com`) |
| `data\affiliate-emails.json` | FluentAffiliate emails to switch off, because the app sends its own commission and payout emails |
| (no data file) | Saved templates: Better Docs keeps its own copies of the Help centre templates. The sync points their header and footer at the active theme |
| `templates\wp-email.html` | The branded layout for WordPress's own plain-text emails (new user and password notices). Applied by a `wp_mail` filter in `includes
untime.php` |
| `data\assets\btv-logo-transparent.png` | Uploaded to the media library once. An earlier `btv-email-logo` upload is removed |
| `templates\email.html` | The branded email wrapper |

### Banners

Needs the Advanced Ads plugin (2.x) installed and active on the site. The plugin is not in this repository. If it is not active the sync says so and skips this step.

`dataanners.json` lists slots and banners. Each has a fixed `key`. The sync finds them by that key (kept in post meta `_btv_key`) and never by ID, so local and live can differ.

- A **slot** is a place on the page. The header holds the slot `top-of-page` (`[the_ad_placement id="top-of-page"]` in `parts/header.html`). A slot's `banner` names the banner it shows. Change that name to change which banner shows there.
- A **banner** has a `title`, `html` (use the theme's classes, for example `band`), `active`, `pages` and `ends`. `pages` is `"all"` or a list of page slugs such as `["home", "pricing"]`. `ends` is a date and time in the site's time zone. Leave it out for no end date.
- The file is the single source of truth. Each run puts back any change made in the admin to a listed banner or slot. Banners made by hand in the admin are never touched. Nothing is deleted. To switch a banner off set `"active": false`.
- A new banner starts as a draft. A banner whose file says `active` is published only on a run with `--publish`. `"active": false` makes it a draft on any run.
- To add another slot, put a shortcode `[the_ad_placement id="<key>"]` where it should appear (a Shortcode block in a template part or page) and add the slot to the file.

Tested locally on 7 November 2026: first run creates the slot and banner as a draft. A run with `--publish` publishes it. A repeat run changes nothing. A change made in the admin is put back. Setting `pages` to `["home"]` limits the banner to the home page and setting it back to `"all"` clears the limit. `"active": false` hides it everywhere.

### An automation file

```
{"title": "...", "trigger": {"type": "tag_applied|tag_removed|subscription_activated", "tags": [...]},
 "run_multiple": false, "publish": false, "steps": [ ... ]}
```

Steps need a unique `key` within the automation. The key is how the step is found again, so renaming a key makes a new step. Step types:

- `email` with `"email": "<id in emails.json>"`
- `wait` with `amount` and `unit` (minutes, hours, days)
- `add_tag` and `remove_tag` with `tags`
- `cancel` with `automations` (titles of other automations, which must have files)
- `end`
- `condition` with `if` (`tags` and `match` of `any` or `all`) and `yes` and `no` lists of steps. One level only, as FluentCRM allows

### Tested and not tested

Tested on the local site on 3 November 2026 with temporary contacts (removed afterwards, mail captured and never sent):

- Lead tag starts O01 and Customer stops it. A purchase start of A0 sends S01, adds and removes the right tags and reaches the day 2 wait. Removing Welcome Active cancels A0.
- Plan Ended starts the win-back and a new plan tag clears Cancelled and Plan Ended.
- An upgrade from Novice to Pro is detected, routed to the Pro sequence and starts with the recap email.
- Each of these tags starts its automation and queues the right email: Refunded, Dormant, Auto Top Up, Bot Market Seller, Bot Market Buyer, First Sale, Migrated From GPT, Founder, Plan Ending Soon, Plan Ended, Affiliate Joined (ends for an Apprentice) and First Commission.

Not tested yet:

- The real FluentCart Subscription Activated event. A0 was started directly in the test.
- The cart-abandoned trigger. O04 stays a draft until a real abandoned cart has been seen.
- The FluentCart emails with a real order and a real cancelled subscription.
- Any email actually leaving the server.
- A publish on the live server. `--publish` publishes only the automations whose file says `"publish": true` and then rebuilds FluentCRM's list of active triggers. Without that rebuild a published automation never starts.

### Rehearse on a copy

`--db=NAME` runs the sync against another database on the same server. It stops with "Cannot switch" unless the switch took, so it can never write to the site's own database by mistake.

1. Create an empty database and import a snapshot taken before any build, for example `backups\pre-build-2026-11-02.sql`.
2. Give the WordPress database user access to the copy only: `GRANT ALL PRIVILEGES ON copy.* TO user@localhost`. Without it the switch silently fails.
3. Run the sync twice with `--db=copy`. The second run must change nothing.
4. Compare tags, automations, steps, emails and forms with the real database, then revoke the access and drop the copy.

Done on 3 November 2026: a run from nothing produced exactly the local result (40 automations, 506 steps, 171 emails, 2 draft broadcasts, 1 form with its feed) and a repeat run changed nothing. The media library file for the logo is shared between the copy and the site, so delete the copy's extra upload afterwards.
