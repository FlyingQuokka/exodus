# Handover: Botterverse site, session 6 (written 15 November 2026)

Read this first. Then read `Handover-session-5.md`: it is still the reference for the facts that must stay right in copy (section 5) and the writing rules (section 6) and the working notes (section 7) and the routes to the live site (section 8). Its status table (section 1) lists every change made so far with dates. This file only says where things stand now.

## 1. Where things stand

The site is built and most of it is live on botterverse.com. Local is `https://botterverse.debbie`. Everything is changed locally first and then copied to live by the route for that content type, with a database backup before any database route.

Done and live this session:
- Pricing cart route, Monthly and Annual switches, redirects, branded error pages, branded FluentCart emails.
- Founders wording ("your subscription stays at 50% off for life") and the founders page, Affiliates and FAQ wording ("based on the listed monthly prices", "a worked example").
- Header and page-title changes, Better Docs heading `#` switched off.
- Cart and checkout layout: narrower cart, one-column checkout with the order summary first and always open, title-case heading.
- The Cart page slug is now `cart` (the owner changed it on both sites). The header link and the Header navigation menu use it. `/cart-2/` answers 404 and nothing links to it.
- E42a (the FluentCart cancellation email) is switched off on live. The app sends the cancellation email instead.
- All 76 help articles match their source in `lab/docs/help`, including full title case headings, the password rules and `ab-tests`. Legal wording is approved by the owner, who also told me to check off the solicitor review and the DMCA agent registration (15 November 2026).

Done and live on 17 November 2026: the third help republish list (`Docos\wp-agent-help-republish-17-november.md`, 10 articles: `affiliate-programme` and `promote-a-listing` and `browse-and-buy` and `list-a-bot` and `listing-blocked` and `earnings-and-holds` and `set-up-payouts` and `withdraw` and `signing-up` and `paywall`). Built from `lab/docs/help` on `dev`, applied locally and then live (dry runs showed only those 10 changed). The app agent marked the list complete later on 17 November. A fresh build and dry run afterwards showed no changes (no help file changed after commit `cde27392`), so nothing is pending on it. If the app agent sends another list, run `build-docs.py` and a dry run first. Live backup `/home/btrvers/backups/pre-docs-17nov-20261117.sql` and snapshot `docs-snapshot-17nov-20261117.json`.

## 2. Waiting on others

| Item | Who | What I do after |
|---|---|---|
| Cancellation email built and merged on dev (075abbda), not released. "Released" means live on the app's production server, which needs the Lab | App agent | Nothing. E42a is already off, so no member receives a cancellation email until it is released |
| Live bot ids for the two home page embeds and the FAQ embed | App agent, after the lab is deployed (Back Office House Bots, Copy Embed Code) | Edit the page files, publish to the repo, run `deploy.sh --pages=home,faq` |
| Lab deployed at `lab.botterverse.com` (the owner confirmed on 15 November it is not live yet. The host answered 403 on its home page and 404 on `/buy`) | App agent and owner | Until then every Join and buy button on live ends in a 404 (the route is `/buy?checkout=...`) and nothing that relies on the app works. Check the buttons once it is up |
| `btv_checkout_guard` on live | Owner at deployment (version 2.0.20, matching secrets) | Nothing. It is not mine |
| E-code event emails built in the app | App agent | Nothing |

## 3. Open on my side

- The owner will set the end date on the FOUNDER50 coupon in FluentCart (live admin only). The banner and the Founders page read it through `{{cpn_dateend_founder50}}` and say "a date to be confirmed" until it is set.
- After editing any legal page on live remove the entry WP Legal Pages adds to the option `banner_cookie_options`.
- When the Lab is live and the bot ids are in: check the Join and buy buttons then run one real test order on live to prove the whole process (this replaces the old "check the FluentCart system pages" item, which the owner dropped on 15 November 2026 because the pages run the same third-party code on both sites).

Closed on 15 November 2026 (checked on live, read only):
- The sync is not needed for the help page templates or the lead form feed. The three live templates (`archive-docs` and `single-docs` and `taxonomy-doc_category`) match the repository files by checksum. Form 3 (Botterverse lead capture) feeds Main List with the tags Lead and Src Founders Page. FND2 exists on live and is published. The owner reports every automation on live is published.
- `favicon.ico` works on live (the owner sees it in the browser tab).
- Advanced Ads is installed. It is the free version. Ad blocker disguise is off and not wanted (it only helps with third-party ad networks), so the dashboard notice "Some assets were changed. Please rebuild the asset folder" can be ignored or dismissed.

## 4. Things to know

- Never change files in the app repository (`lab/docs/help`, `lab/docs/handoffs`). They belong to the app and coordinator agents. Help articles are published from `lab/docs/help` with `tools/build-docs.py` and `tools/apply-docs.php`. Run a dry run first. For a single article use `BTV_NO_ORDER=1` and a JSON file holding only that article, or the folder order is overwritten.
- Never change the FluentCart system pages' content. The Cart page slug change was the owner's own.
- Email copy sources are `Emails/build/*.md`. `tools/build-email-data.py` rebuilds `site/btv-sync/data/emails.json`, so never edit `emails.json` directly. E-numbered event emails are copy for the app agent and are not in FluentCRM. The sequences (O..., FND..., FB...) are in FluentCRM and need a sync.
- The live server connection details are in `Docos/Server-Info.txt` in the Botterverse repository folder. Never print that file or the passphrase. Use `tools/live-ssh.sh`.
- The built-in browser pane cannot load the local site's styles. Check layout through the owner's screenshots or a test page with inline CSS.
- Backslashes in text sent through tools can be halved or turned into control characters. Build Windows paths with `chr(92)` in scripts.
- Live backups of the database are in `/home/btrvers/backups/`. Today's: `pre-docs-anchor-20261114-1742.sql`, `pre-arithmetic-20261114.sql` , `pre-e42a-20261115.sql`, `pre-cancelplan-20261115.sql`, `pre-docs-titlecase-20261115.sql`, `pre-cartslug-20261115.sql`, `pre-abtests-20261115.sql`.

## 5. Writing rules

British English. No comma before "and" or "or". Hyphens only (no em or en dashes). Avoid the word "get" in prose. No opening platitudes. Be succinct. Put questions inline in the reply and never in a popup. Push back where warranted and ask when unsure.
