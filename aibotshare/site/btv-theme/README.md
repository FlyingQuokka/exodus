# Botterverse theme

Bespoke block theme for the Botterverse marketing site. It is not a child theme. Spec: `Docos\theme-spec-v1.md`.

## Install (local)

1. Link the folder into the site's themes folder with a junction (PowerShell):
   `New-Item -ItemType Junction -Path <site>\wp-content\themes\btv-theme -Target <repo>\aibotshare\site\btv-theme`
2. Take a database snapshot first.
3. Activate the theme (Appearance, Themes).
4. Write the pages into WordPress:
   `php bin/install-pages.php --wp=<site>\public --host=<site host> [--dry-run]`
   It is safe to run again. Pages are found by slug. It never touches FluentCart system pages.
5. Check the source: `php bin/check-domains.php` (exit code 1 when a typed domain is found).

Do not install on a live server until the owner approves. Page IDs differ per environment so nothing here uses an ID.

## What is in it

- `theme.json`: palette, fonts, layout widths.
- `assets/css/btv-theme.css`: all tokens and components. No inline styles anywhere.
- `assets/css/btv-home.css`: the home page only (every rule starts with `.hm`). It also loads Nunito Black and M PLUS Rounded 1c, which are used on that page and nowhere else. Enqueued by `inc/assets.php` on the front page. To update the home page without touching other pages' database edits, write `pages/home.html` into the Home page alone. Do not run the full page installer, which replaces every page.
- `assets/css/integrations/`: FluentCart, Fluent Forms, Fluent Support, Better Docs and the WordPress login. CSS only.
- `templates/`: front-page, page, page-landing, page-wide, single, index, home, archive, search, 404.
- `parts/`: header and footer. Both are dynamic blocks (`inc/header-footer.php`). The header changes when signed in. The footer's Legal column shows the Footer navigation post (found by title). No credit row.
- `patterns/`: hero, cards, accordion, pricing table, CTA band, step list, email capture and the Founders band. To end the Founders offer remove the one pattern line in `parts/header.html`.
- `pages/`: Home, Pricing, How it works, Affiliates, FAQ, Support, Feedback, Founders offer and Bot Market as block markup. Each design section is a Custom HTML block, so edit the files and run the installer, not the Site Editor.
- `inc/domain.php`: the `{{domain}}` and `{{theme}}` token filter and `btv_lab_url()`.
- `inc/seo.php`: the Articles page is noindex and the three Yoast fields are registered for pages.

## Choices to know about

- One content width site-wide: 1120px (24px gutters on a phone). `.container` and `.narrow` are the same width. The WordPress login card and the help desk and account sign-in cards stay as centred cards inside it.
- Header (signed out): How it works, Pricing, Bot Market, Affiliates, FAQ, Support, then the Botters Lab button. It collapses to a menu button at 1000px and below. Signed in: Support, the Account icon and the Botters Lab button. The cart icon shows only when the cart has items.
- Every Botters Lab link opens in a new tab (`target="_blank" rel="noopener"`), as does the footer Documentation link.
- `bin/install-pages.php` also rebuilds the Footer navigation post (legal pages only).
- Pricing keeps the live buy links unchanged except the host, which is now `lab.{{domain}}` and renders to the same address as before. The design had no buy links so each plan button is the monthly link with an "Or pay annually" link below it. The credit pack table has an added Buy column.
- The Affiliates page needs the slug `affiliates`. The draft portal page (ID 231, Fluent Affiliate shortcode) held it, so the installer renamed that draft's slug to `affiliates-lab`.
- The Lab host is `lab.` plus the domain, as in the existing buy links. The site plan said `members.`, so update the plan.
- The footer Legal column shows the Footer navigation post as it is. That post still lists Feedback and Support and Terms of Use, so trim it to the legal pages.
- Fonts (Baloo 2 and Nunito Sans) are copied from the site's existing `btv-fonts` upload.

## Not tested

- FluentCart on a filled cart or a signed-in customer (Cart, Checkout, Order Review, Receipt, Profile, Shop). The CSS comes from the plugin source and the cart design.
- Fluent Support when signed in (ticket list and new ticket). Only the signed-out login screen was seen.
- Fluent Forms (no forms exist yet), the email capture pattern and Better Docs layouts.
- The signed-in header and the cart count icon.
- The WordPress lost-password screen and the login wording changes beyond the first screen.
- A real phone. Pages were checked at 390 pixels wide in a desktop browser only.
- Nightshift (optional style, off).
