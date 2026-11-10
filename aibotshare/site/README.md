# Botterverse website

The WordPress marketing site for Botterverse, a service where people build AI chat bots from their own instructions and files and share or sell access to them. The app itself is the Botters Lab. It runs separately at `lab.<domain>` and is not in this repository.

This repository holds only what runs on the live server. Design and development work is kept elsewhere and published here.

## Contents

| Folder | What it is |
|---|---|
| `wp-content/themes/btv-theme` | The block theme: styles and templates and the page files |
| `wp-content/plugins/btv-sync` | Creates and updates tags and email automations and forms and banners from files. Safe to run again |

## Requirements

- WordPress 6.5 or later (built on 7.1) and PHP 8.0 or later on the command line. WP-CLI is not used.
- Plugins: FluentCart and FluentCRM and Fluent Forms and Fluent Support and FluentAffiliate (Pro versions where the site uses them) and Better Docs and Advanced Ads 2.x and WP Legal Pages and Yoast SEO. The sync skips a step when its plugin is missing and says so.
- The Botters Lab app at `lab.<domain>`.
- Mail addresses: `support@<domain>` is customer-facing and goes to Fluent Support. Admin alerts from the theme go to `btvadmin@<domain>`. Both are built from the site domain, never typed.

## Set up or update

Clone this repository outside the web root on the server then run `bash deploy.sh --wp=<WordPress folder> --host=<site host> --user=<admin login> --pages=<slugs or all> --sync --backed-up`. It pulls then copies the two folders into `wp-content` then writes the named pages then runs the sync. Add `--dry-run` to preview and `--publish` to publish new automations. The manual steps below do the same by hand.

1. Place the two folders under `wp-content` and activate the theme and the plugin.
2. Write pages: `php wp-content/themes/btv-theme/bin/install-pages.php --wp=<WordPress folder> --host=<site host> --only=<slug>`. Slugs: `home` `pricing` `how-it-works` `affiliates` `faq` `support` `feedback` `founders` `bot-market`. Always use `--only`. Without it every page is replaced, which also wipes edits made in the admin. The installer never touches FluentCart system pages.
3. Run the sync: `php wp-content/plugins/btv-sync/bin/run-sync.php --wp=<WordPress folder> --user=<admin login> [--publish]`. Without `--publish` new automations stay as drafts.
4. Take a database backup first. Nothing here uses a page or post ID, so it works on any copy of the site.

## Changing the live site

Everything in this repository deploys with `deploy.sh` (see Set up or update). Content that is stored in the database is not in this repository: the legal pages and the Better Docs articles and the shop settings. Edit those in the WordPress admin. In development every change is made on a local copy first and then copied to live.

## How it works

- **Pages are files.** Each design section is a Custom HTML block in `pages/<slug>.html`. Edit the file and run the installer. Do not edit these pages in the Site Editor.
- **Styles.** `btv-theme.css` holds tokens and the older components. `btv-base.css` holds fonts and colours shared by the home page and the redone pages. `btv-home.css` styles the home page only. `btv-pages.css` styles every other redone page. `integrations/` restyles the plugins. The redone pages use the prefixes `.hm` and `.pg`.
- **Tokens in copy.** `{{domain}}` is the site domain. `{{theme}}` is the theme folder address. `{{cpn_dateend_<code>}}` is the end date of a FluentCart coupon, for example `{{cpn_dateend_founder50}}`. The coupon end date is stored as UTC for the end of a US Eastern day, so the plugin takes five hours off before showing the date. With no date it shows "a date to be confirmed". The tokens work in pages and the banner and emails. Never type a domain or a closing date.
- **Email.** One main list called Main List. Tags do the segmenting. A source tag starting `Src` records where a sign-up came from, for example `Src Founders Page`. The lead form gives every sign-up the tag `Lead` and a source tag and puts them on Main List. Email text lives in `data/emails.json` and automations in `data/funnels/*.json`.
- **Banner.** Advanced Ads shows the top banner. Edit `data/banners.json` and run the sync. To end the Founders offer set `"active": false`.
- **Help centre.** Better Docs articles live in the database and are edited in WordPress. The sync writes its three page templates from `data/templates` so help pages match the site.
- **Forms.** The lead form is created by the sync. Pages show it with the shortcode `[btv_lead_form]`.

## Going live checklist

1. Remove the admin-only error preview block in `inc/die.php` (marked REMOVE THIS BLOCK BEFORE GO LIVE).
2. Install Advanced Ads. Add `favicon.ico` at the site root.
3. Replace the bot ids in the embed scripts on the home page and FAQ page with the live bot ids.
4. Set the end date on the FOUNDER50 coupon in FluentCart.
5. Run the sync with `--publish`. Review the automations first.
6. After editing a legal page (CCPA or DMCA or Privacy or Terms), open the option `banner_cookie_options` and remove the entry added for that page. WP Legal Pages adds one and its cookie code prints header warnings when `display_errors` is on.
7. Have a solicitor review the legal pages. The DMCA page needs a registered DMCA agent for the US safe harbour.

## Facts the copy must keep right

- Brand: Botterverse. The members area and its pages: Botters Lab. Plans: Apprentice $5 and Novice $47 and Expert $97 and Pro $197 and Master $297 a month. The app has a sixth tier that the site never mentions.
- Credits power bot messages. Plans include credits each month and they expire at renewal. Credits bought in a booster pack never expire. Booster packs earn nothing for affiliates.
- Selling fee is 5 percent (Apprentice to Expert) or 3 percent (Pro and Master) of the price after tax plus 30 cents. Selling on the Bot Market starts at Pro.
- 30-day money-back guarantee on every plan. Bot Market refunds are 14 days. Earnings can be withdrawn 21 days after a sale. No free plan and no trial.
- Paid features are not sold in the EU. Say so in one FAQ answer and on the cart page only.
- Never name a competitor. Say custom GPTs are being switched off. Never state earnings. There are no testimonials and none may be invented.
- Style: British English. No em or en dashes. No comma before "and" or "or".

## Known gaps

- Not tested: FluentCart with a filled cart or a signed-in customer. Fluent Support when signed in. Better Docs article layouts on a real phone. A real phone for any page.
- FluentCart system pages (Cart and Checkout and Order Review and Receipt and Account and Shop) still use the earlier look.
- The Founders end date is read from the coupon, so it is only as right as the coupon.
