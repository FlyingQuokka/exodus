# Handover: Botterverse site, session 5

Written 7 November 2026. It replaces `Handover-WP-Design.md` (30 October) where the two differ. Read it fully before touching anything. The wording to paste into the new session is in `next-session-prompt-redo-pages.md`.

## 1. Where things stand

| Area | State |
|---|---|
| Theme `btv-theme` | Built. The home page uses the new look. Every other page still uses the earlier look (Baloo 2 headings and the shared card styles) |
| Sync plugin `btv-sync` | Built. Tags and email design and automations and banners and settings are all applied from files by `php site\btv-sync\bin\run-sync.php --wp=<path> --user=agentuser`. Safe to repeat. Automations are saved as drafts |
| Emails | Sources in `Emails\build`. `site\btv-sync\data\emails.json` is built from them by `tools\build-email-data.py` |
| Banners | Concepts and two sets (with and without the 11 December date) in `Designs-WP\Banners\New`. Not chosen yet |
| Rename to Botter Boosters | Done in the repository and in the app (app agent confirmed 9 November). Live |
| Pricing page cart and billing switch (11 November) | Live. Every buy button on Pricing and Home goes through the Lab `/buy` page to `/?btv_add=VARIATION_ID`, handled at the end of `btv-sync\includes\runtime.php`. It puts the item in one shared FluentCart cart and lands on the cart page. A plan replaces a plan. Packs stack (a repeat click adds one). FluentCart refuses a plan and a pack in one cart, so the cart is left alone and the visitor returns to Pricing with `?btv_msg=plan-in-cart` or `pack-in-cart` (a hidden notice in the page, shown by `btv-theme\assets\js\btv-pricing.js`). The same script drives the Monthly and Annual switches above the cards and the table (kept in sync). Anchors on Pricing: `#plans` and `#comparison` and `#packs`. The live Lab `/buy` page answers 404 until the app goes live, so the buttons cannot be followed end to end yet. The add route was tested directly on live |
| Branded error pages (11 November) | Live. The theme 404 page is a template (centred). Static pages `btv-error-403.html` and `500` and `503` and `db` are built by `tools\make-error-pages.py` into `btv-sync\error-pages` and copied to the WordPress folder by `deploy.sh` (the drop-ins `db-error.php` and `maintenance.php` and `php-error.php` go to `wp-content`). The drop-ins send their own 503 and 500 status because WordPress does not. A block `# BEGIN Botterverse error pages` in the live and local `.htaccess` sends server 403 and 500 and 503 to the static pages (live backup `/home/btrvers/backups/htaccess-pre-errorpages-20261111`). Not branded: the Lab app errors (app agent) |
| Shop and product page redirects (11 November) | A live file edit and not part of the repository. A block `# BEGIN Botterverse redirects` is in `/home/btrvers/public_html/.htaccess` above the WordPress block (and in the local `.htaccess`). It sends `/shop/` and `/item/` and `/item/botterverse-membership/` to `/pricing/` and `/item/booster-packs/` to `/pricing/#packs` with a 301. Backup `/home/btrvers/backups/htaccess-pre-redirects-20261111`. FluentCart Shop Page is set to Pricing (page 78) on local and live so Continue shopping points at Pricing. The Members Guide product exists on the local site only (order bump test) |
| FluentCart receipt and new sale emails (10 November) | Branded by a `wp_mail` filter at the end of `btv-sync\includes\runtime.php` with the layout `btv-sync\templates\cart-email.html` (logo, light only, FluentCart blue and grey inline colours swapped for brand colours). It covers every FluentCart email (anything holding the `email_wrap` table, the weekly digest included) and the Fluent Forms weekly Email Summary (the `summary_table` table). Other mail is left alone. The app emails from the Lab (Botters Lab logo) and the two from `btv_checkout_guard` are the app agent's |
| Public name Botter Booster Packs (10 November) | Pricing page and affiliates page and emails and README done and live. FluentCart product title changed locally and by the owner on live. Email wording comes from `Emails\build\*.md` (the build overwrites `emails.json`). Help articles done (app agent note `Docos\wp-agent-betterdocs-10-november.md`): 13 articles rebuilt with `tools\build-docs.py` and applied locally and live by `tools\apply-docs.php`. Live backup `/home/btrvers/backups/pre-docs-booster-20261110-1445.sql` and snapshot `/home/btrvers/backups/docs-snapshot-booster-20261110.json`. Slugs such as `booster-packs` stay |
| Live site | Live at botterverse.com since 9 November 2026. Theme and plugin and the nine pages and the sync and the automations are deployed. How to change it: section 8 |

Local site: `https://botterverse.debbie` (hosts file). The Botters Lab is at `lab.` plus the domain. In the Claude shell use `curl -k --resolve botterverse.debbie:443:127.0.0.1 https://botterverse.debbie/...`. WordPress files are at `D:\Users\Quokka\Desktop\Websites\botterverse\public`. Backup from before the build: `D:\Users\Quokka\Desktop\Websites\botterverse\backups\pre-build-2026-11-02.sql`.

Repository: `E:\Projects\Genesis\Exodus`, remote `git@github-exodus:FlyingQuokka/exodus.git`, branch `main`. Pushed through `a0738e5`.

## 2. The next job: redo the other pages in the home page style

Home is done. These pages are still in the earlier look and need redoing to match it:

| Page | Source file in `site\btv-theme\pages\` |
|---|---|
| Pricing | `pricing.html` |
| How it works | `how-it-works.html` |
| Affiliates | `affiliates.html` |
| FAQ | `faq.html` |
| Support | `support.html` |
| Feedback | `feedback.html` |
| Founders offer | `founders.html` |
| Bot Market | `bot-market.html` |

The style is written down in `Docos\home-page-style-guide.md` (fonts and sizes and colours and shapes and components). The working example is `pages\home.html` with `assets\css\btv-home.css`.

How the home page is built:
- Each design section is a Custom HTML block. Edit the file and write it to WordPress. Do not edit in the Site Editor.
- `btv-home.css` holds every rule for the home page under the prefix `.hm`, so nothing there can touch another page. It also loads Nunito Black and M PLUS Rounded 1c.
- `inc/assets.php` enqueues it on the front page only.
- For the other pages choose between one shared new stylesheet (for example `btv-pages.css` with its own prefix) or a rule set per page. The first is easier to keep consistent. Decide it with the owner.
- Move the fonts and tokens that every page needs out of `btv-home.css` so they load once.
- Keep the header and footer (`inc/header-footer.php`) and check they sit well with the new look.

Rules for the work:
- **Do not run `bin\install-pages.php` as it stands.** It rewrites every page and would replace edits made in the database. Write one page at a time. The script has no single-page option, so adding `--only=slug` is a sensible first step.
- Before rewriting a page, read what WordPress holds now (REST API `/wp-json/wp/v2/pages?slug=...&context=edit`) and compare it with the file. Some pages were edited in the database after the last install and those edits are not all in the files. Bring anything worth keeping into the file first.
- Never change the FluentCart system pages (Checkout and Cart and Order Review and Receipt and Profile and Shop). Keep the buy links on Pricing exactly as they are.
- The theme's own pictures are in `assets\js\btv-pictures.js`. The logo and seals and mascot are listed in `Docos\approved-designs.md`. The final logo files are in `Designs-WP\Logos\purple-ring` and `Designs-WP\Logos\final`.
- Name every new file inside the web root with the prefix `btv-`.
- Check each page at 390px wide as well as on a desktop. A real phone has not been tried.
- Run `php bin\check-domains.php` before finishing. It fails when a typed domain is found. Use the token `{{domain}}`.
- Design in HTML first if the owner wants to compare options. Otherwise edit the page file and look at the result locally.

## 3. Rename to boosts and Botter Boosters

The owner agreed on 7 November 2026:
- "Credit pack" becomes **Botter Booster** and "credit packs" becomes **Botter Boosters**. Capitalise it like a plan name in running text.
- "Credit" and "credits" become **boost** and **boosts**. "1,000 credits" becomes "1,000 boosts" and the singular where the number is one.
- "Auto top-up" and "top-up" keep their names.

Done in the repository: the theme pages and `emails.json` and the email sources and the main documents and the current page designs. Left as they were on purpose: event keys such as `credits.low_balance` and the merge tag `{{credits_removed}}` and code file names and the app-derived digests (`app-facts-for-marketing*.md` and `member-guide-digest.md`) and the handover notes and old page versions.

Still to do:
1. **Wait for the owner to say the app agent has finished.** Do not push the live site or run the live sync before then. The website and emails say "boosts" and the app still says "credits".
2. The prompt for the app agent is `Emails\27-app-agent-prompt-rename-credits-to-botter-boosters.md`. Its answers decide whether merge tags and event keys change. If a merge tag changes, update `emails.json` and the sources to match.
3. **Better Docs help articles.** The articles live in the database and the app agent has already changed some of them, including a switch to title case. **Read the latest version of every article from the site before editing any of them** so its changes are kept. Fetch with `/wp-json/wp/v2/docs?per_page=100&context=edit` or from the Better Docs screen. Change "credit" and "credits" and "credit pack" in the article text and titles and keep the title case.
4. **Slugs.** Change `credit-packs` to `botter-boosters`. The list in `Emails\12-help-article-slugs.md` also proposes `top-up-boosts` and `what-are-boosts` and `whole-boosts` for the other three. Confirm those with the owner. Keep a redirect from each old slug. No email links to any of the four, so the emails do not change. Update the slug table after the change.
5. Regenerate `app-facts-for-marketing*.md` and `member-guide-digest.md` from the app agent's new answers. Update `Docos\member-guide.docx` (the owner does that one).
6. Check the live pages for "credit" once more after the app ships. Search both the files and the database.

## 4. Other open items

| Item | Detail |
|---|---|
| Banners | Choose a supporting line for the two sets (the page `Banners\New\lines-options.html` shows four). "Your bot can make you more money in the Botterverse" reads as an earnings claim and the affiliate swipe rules ban "make money". Check it before use. The button-under-bots layout is only on 970x250. No PNG exports yet. The founders offer end date is not fixed |
| Logo gap | Apply the 28px bot-to-text gap to the definitive `Logos` folder and the email upload |
| Header button | Make the "Botters Lab" button purple sitewide |
| Logos | Commit `Designs-WP\Logos\final` |
| New repository | Decide where to create the `botterversewp` repository |
| Go-live | Remove the `btv_preview_die` block in `site\btv-theme\inc\die.php` first. Install Advanced Ads on live. Supply the live bot scripts for the home page slots. Add `favicon.ico` on live. Set the end date on the FOUNDER50 coupon in FluentCart: the banner and the Founders page and FB2 and FND2-01 read it through `{{cpn_dateend_founder50}}` (UTC time of the end of the US Eastern day, minus five hours) and say "a date to be confirmed" until it is set. Replace the two home page bot ids and the FAQ page bot id in the embed scripts with the live ids. Run the sync so the help page templates and the FND2 sequence and the lead form feed (Main List and the tag Src Founders Page) reach live, then publish FND2. After editing a legal page (CCPA or DMCA or Privacy or Terms) on live, open the option `banner_cookie_options` and remove the entry added for that page ID: WP Legal Pages adds one, and its `setcookie` call prints PHP header warnings on every page for a day when `display_errors` is on |
| Duplicate icons | Stale copies of the chosen icons remain in `Designs-WP\Icons`. New designs go there and chosen ones move to `aibotshare\Icons` |
| Tests | Order tests in the app. The Known gaps list in `site\README.md` still stands. The old theme and sync READMEs are kept in `Docos\dev-notes-old-readmes.md`. `python tools\publish-to-repo.py` copies the live-server files into the botterversewp repository |

## 5. Facts that must stay right in all copy

- Brand: **Botterverse**. The members area and its pages and actions: **Botters Lab**. Never "Bot Cave". The brand never mentions its old name. Base domain token `{{domain}}`. The Lab host is `lab.{{domain}}`.
- Plans: Apprentice $5 and 1 bot and 300 boosts. Novice $47 and 20 bots and 2,000. Expert $97 and 50 bots and 5,000. Pro $197 and unlimited bots and 12,000. Master $297 and unlimited bots and 20,000. A sixth tier exists and is never mentioned.
- Botter Boosters: Starter $10 for 1,000. Builder $25 for 2,600 (100 bonus). Launcher $50 for 5,500 (500 bonus). Promoter $100 for 11,500 (1,500 bonus). Campaigner $250 for 30,000 (5,000 bonus). Describe the bonus in boosts only. Never call it free or a percentage or a saving. Bought boosts never expire and included boosts expire at renewal. Botter Boosters earn nothing for affiliates.
- Sales fee: 5% (Apprentice to Expert) or 3% (Pro and Master) of the post-tax price plus 30 cents. Bot Market selling starts at Pro.
- Money-back guarantee on every plan: 30 days. A refund on a Bot Market sale: 14 days. Earnings become withdrawable 21 days after a sale. Annual is ten times monthly and sold as 2 months free. No free plan or trial.
- Never name competitors. Say custom GPTs are being switched off. The 11 December date is public but banners that carry it must come down after it.
- No testimonials exist and none may be invented. The founder is anonymous.
- EU: paid features are not sold there. Say so in one FAQ and on the cart page only.
- Founders offer: 50% off for life. Its end date is not fixed.
- Pages never state earnings. Copy avoids "free" and "earn" and "make money" and "guaranteed" and "instant" and "unlimited" (except the unlimited bots plan wording that is already approved).
- Data export has no buyer names or emails. Never promise a customer list.

## 6. Writing rules

British English. No comma before "and" or "or". Hyphens only and never an em or en dash. Avoid the word "get" in prose. No platitudes at the start of answers. Plain and short. Put questions inline in the reply and never in a popup. Use "per" for rates. Re-read every reply and check each "and" and "or" for a stray comma before sending.

## 7. Working notes and gotchas

- Tags and automations: `site\btv-sync`. Do not suggest WP-CLI. Every run must be safe to repeat and find things by name or key and never by ID.
- Genesis bots (not Exodus pipelines) were used for banner copy: `set -a && . ./.env` then `node .claude/skills/genesis-bots/scripts/genesis-stream.mjs <bot> <prompt> <out>`. Run one at a time and verify every word of output against the rules above.
- Edge headless screenshots: `msedge --headless=new --screenshot=...`. It writes after the command returns so wait a few seconds. Use a taller `--window-size` for a long page.
- Python on Windows needs `D:/...` or Windows paths and never `/d/...`.
- Never delete uploads with a broad glob. It once removed the real logo thumbnail.
- Scratchpad folders are volatile. Keep real files in the project.
- Git warns that LF will become CRLF on many files. That is harmless.

## 8. Changing the live site

The live site is `botterverse.com`. WordPress is in `/home/btrvers/public_html` on a Krystal cPanel server. SSH is on port 722 and needs shell access switched on by Krystal. The login is `btrvers`. The keys are in `E:\Projects\AIBotShare\Repos\Botterverse\.ssh` and the key passphrases are in `E:\Projects\AIBotShare\Repos\Botterverse\Docos\Server-Info.txt`. Never print that file in chat or in logs. `tools\live-ssh.sh` runs a command on the server and supplies the passphrase itself. The server's host key is pinned in `btv_known_hosts` in the same folder (ed25519, `SHA256:o8cvxBXfnagxjc8IYWn2DSGRQIAIuPgfVN/ZJWT51Zo`, matched against WinSCP on 10 November 2026). `live-ssh.sh` refuses any other key. If Krystal change the server key, confirm the new fingerprint in WinSCP before replacing the file.

**Rule: every change is made and checked on the local site first. Then it is copied to live by the route in the table.** Nothing is typed straight into live unless the table says "live only". Before any route that changes the database take a backup (UpdraftPlus or cPanel, or a dump over SSH). The dump of 10 November 2026 is `/home/btrvers/backups/pre-docs-template-20261110-0342.sql` on the server (8.3 MB, outside the web root). Older dumps there can be deleted once the site has run well for a while. After it check the live page with `curl` and report what changed.

| Content | Where it lives | Route to live |
|---|---|---|
| Theme code and styles and templates and the page files (`pages\*.html`) | The repository | **Repo route.** Edit in `aibotshare\site`. Run `python tools\publish-to-repo.py` (it rebuilds the emails and runs the domain check). Commit and push in `E:\Projects\AIBotShare\Repos\Botterverse\botterversewp`. On the server run `bash ~/botterversewp/deploy.sh --wp=/home/btrvers/public_html --host=botterverse.com --pages=<slugs> --backed-up`. Use `--dry-run` first. The script pulls and copies the two folders and writes the named pages |
| Sync data: tags and email text and automations and forms and banners and settings and the help page templates | The repository (`site\btv-sync\data`) | **Repo route** with `--user=agentuser --sync --backed-up`. Add `--publish` to publish automations. The sync is safe to repeat. It writes the help page templates to the database from `data\templates`, so a template change needs it |
| Legal pages (WP Legal Pages) and the Better Docs articles | The database only | **Database script route.** Change the local site first. Then copy the finished content to live with a one-off PHP script run over SSH (`tools\live-ssh.sh`). The script loads WordPress and updates each post matched by slug. Check the result with `curl`. The help articles come from `docs/help` in the app repository, which this project only reads. Build them with `python tools\build-docs.py` (it checks every article's words and links) then apply with `tools\apply-docs.php`, which only reports until `BTV_APPLY=1` is set and saves the current articles first when `BTV_SNAPSHOT=<file>` is set. Run it on local first and then on live (send the JSON and the script with `tools\live-ssh.sh`). Snapshots from 10 November 2026 are in `output\docs-snapshots`. For legal pages also check the WP Legal Pages credit setting and the `banner_cookie_options` entries |
| Better Docs plugin settings (such as `enable_ai_actions` for the Copy page menu) | The database option `betterdocs_settings` | **Database script route.** Set it on local first. Then send a one-off PHP script over `tools\live-ssh.sh` that loads WordPress and updates the option. Switched off on 10 November 2026 |
| FluentCart products and coupons and prices and shop settings and other plugin settings | The database | **Live admin.** Change them in the WordPress admin on live and mirror them on local when it matters. The sync does not cover them. Live only |
| The Checkout Guard plugin (`btv_checkout_guard`) | The app repository | The app agent installs it on live at go-live. This project does not copy it |
| Bot ids in the embed scripts | The page files `home.html` and `faq.html` | **Repo route** once the app agent has made the live bots |

When a route is used for the first time on a content type test it with one item and check it before doing the rest.

Gotchas for the live server: `sftp -b` turns on batch mode and blocks the passphrase prompt so use the helper script. The host line in the info file once held an invisible character so the helper strips anything but letters and digits and dots. The installer replaces a page's whole content so any edit made to it in the admin is lost. Never run the installer without `--only` (`deploy.sh` always passes it).

**Help article pages (10 November 2026).** The article template (`data\templates\single-docs.html`) no longer holds the updated date, reactions, share links and print blocks. Better Docs has settings for these but the block template ignores them, so the blocks were removed from the template. The Copy page menu is the exception: it reads `enable_ai_actions`, which is off. Both help templates set the sidebar block to `"postsOrderBy":"betterdocs_order"` so the sidebar follows the saved article order and matches the previous and next links (the block's own default is alphabetical by title). Layout fixes are at the end of `btv-better-docs.css`: the contents column is fixed at 240px so the article takes the rest, the article column has no top padding, and the page title is the largest heading. When editing the template by script, change whole lines only: a greedy regex once removed the navigation block and the column closers.
