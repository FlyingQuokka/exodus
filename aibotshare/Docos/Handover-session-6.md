# Handover: Botterverse site, session 6 (written 15 November 2026 and updated 18 November 2026)

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

Done on 18 November 2026 (Black Friday and Cyber Monday and festive campaign):
- Two deals. **FOUNDER50**: 50% off for life from the Lab launch until the close of 1st December EST (coupon end 2026-12-02 04:59:59 UTC, set by me on live and local). **FOUNDER40**: 40% off for life from 4th December to the close of 1st January 2027 EST (created on live and local with the same plan products and `is_recurring` yes. Start 2026-12-04 05:00:00 UTC and end 2027-01-02 04:59:59 UTC). Both have a description in the coupon Notes field (internal). Gap days 2nd and 3rd December: banners and offer pages hidden. Backups `pre-founder40-20261118.sql` and `pre-founder50-end-20261118.sql`.
- Copy is drafted for review in `Docos/bfcm-festive-copy-v1.md` from `Docos/bfcm-festive-brief.md` (hooks and banner pairs and social posts and bar lines and sign-up sequences and affiliate swipe emails and member emails for both deals). The Genesis bot `mario-bot-` wrote the first drafts and I corrected them. **The owner is reviewing it. Banners and landing pages wait for that review.** Nothing is in FluentCRM or the site yet.
- The owner's wording rules for this copy: no hedging or neutral framing. The festive deal assumes Black Friday was a success. Affiliate swipe emails carry no disclosure line and no [CONFIRM] notes and no commission arithmetic. Member emails about affiliate commission use the arithmetic (50% of the first payment and 20% of every later payment on the price paid). Deadlines read "at the close of 1st December EST" and on the final day "tonight at midnight Eastern". Dates use ordinals (1st and 4th).
- `runtime.php` (live): `{{cpn_dateend_CODE}}` now gives "1st December". New `{{deal_block_NAME}}` shows the Black Friday text while FOUNDER50 is in its dates and the festive text while FOUNDER40 is in its dates and the normal text otherwise. The texts go in `data/deal-blocks.json` (not created yet: it waits for the approved copy). The coupon-on-a-link code (`?cpn=`) was built then removed: the app applies `cpn` in `btv_checkout_guard`. Rollback copies on the server: `runtime-pre-cpn-20261118.php` and `runtime-pre-cpnoff-20261118.php` and `runtime-pre-ordinal-20261118.php`.
- FND1 (Founders coupon) now runs more than once per contact (live and local, backup `pre-fnd1-multiple-20261118.sql`). It still fires only when the Founder tag is newly added, so the app must remove the tag on cancel or at rejoin before adding it again. The app agent needs to be told.
- Affiliate landing links (`Docos/wp-agent-affiliate-landing-links.md`, complete): checked on live. The query string is kept through the `/pricing` to `/pricing/` redirect. There is no page cache. There is no consent banner. FluentAffiliate's referral variable is `r` (the app agent assumed `ref` and the owner will tell it `r`). `utm_campaign` is stored on the visit and the referral. The report is `Docos/wp-agent-report-affiliate-landing-links-18-november.md`. If a page cache is added later `cpn` and `r` and `utm_campaign` links and the cart and checkout and `/?btv_add=` must bypass it. FluentAffiliate credits the last referrer for 30 days (the cookie expiry resets when a different affiliate's link arrives).

## 2. Waiting on others

| Item | Who | What I do after |
|---|---|---|
| Cancellation email built and merged on dev (075abbda), not released. "Released" means live on the app's production server, which needs the Lab | App agent | Nothing. E42a is already off, so no member receives a cancellation email until it is released |
| Live bot ids for the two home page embeds and the FAQ embed | App agent, after the lab is deployed (Back Office House Bots, Copy Embed Code) | Edit the page files, publish to the repo, run `deploy.sh --pages=home,faq` |
| Lab deployed at `lab.botterverse.com` (the owner confirmed on 15 November it is not live yet. The host answered 403 on its home page and 404 on `/buy`) | App agent and owner | Until then every Join and buy button on live ends in a 404 (the route is `/buy?checkout=...`) and nothing that relies on the app works. Check the buttons once it is up |
| `btv_checkout_guard` on live | Owner at deployment (version 2.0.20, matching secrets) | Nothing. It is not mine |
| E-code event emails built in the app | App agent | Nothing |
| `btv_checkout_guard` 2.0.22 (applies the `cpn` coupon) and FOUNDER40 recognised as a Founder coupon, Founder tag removed on cancel | App agent | Nothing on the site. The app agent needs the FND1 note above |

## 3. Open on my side

- Wait for the owner's review of `bfcm-festive-copy-v1.md`. Then: put the approved sequences into the sync data (the Black Friday and festive sign-up sequences with the festive one on its own tag such as Src Festive and the Black Friday sequence stopped on 2nd December) and the deal blocks into `data/deal-blocks.json` and the swapped affiliate emails into the follow-up sequence. Make the banners and landing pages for the app (title and image and alt text and landing path and coupon for each item). Prepare the closed state for the gap days. The sign-up emails use scheduled content so the sequences must not keep sending stale dates.
- Tell the app agent about the FND1 tag point (see above).
- After editing any legal page on live remove the entry WP Legal Pages adds to the option `banner_cookie_options`.
- When the Lab is live and the bot ids are in: check the Join and buy buttons then run one real test order on live to prove the whole process (this replaces the old "check the FluentCart system pages" item, which the owner dropped on 15 November 2026 because the pages run the same third-party code on both sites).

Closed on 15 November 2026 (checked on live, read only):
- The sync is not needed for the help page templates or the lead form feed. The three live templates (`archive-docs` and `single-docs` and `taxonomy-doc_category`) match the repository files by checksum. Form 3 (Botterverse lead capture) feeds Main List with the tags Lead and Src Founders Page. FND2 exists on live and is published. The owner reports every automation on live is published.
- The FOUNDER50 end date is set (18 November 2026) and `favicon.ico` works on live (the owner sees it in the browser tab).
- Advanced Ads is installed. It is the free version. Ad blocker disguise is off and not wanted (it only helps with third-party ad networks), so the dashboard notice "Some assets were changed. Please rebuild the asset folder" can be ignored or dismissed.

## 4. Things to know

- Never change files in the app repository (`lab/docs/help`, `lab/docs/handoffs`). They belong to the app and coordinator agents. Help articles are published from `lab/docs/help` with `tools/build-docs.py` and `tools/apply-docs.php`. Run a dry run first. For a single article use `BTV_NO_ORDER=1` and a JSON file holding only that article or the folder order is overwritten.
- Never change the FluentCart system pages' content. The Cart page slug change was the owner's own.
- Email copy sources are `Emails/build/*.md`. `tools/build-email-data.py` rebuilds `site/btv-sync/data/emails.json`, so never edit `emails.json` directly. E-numbered event emails are copy for the app agent and are not in FluentCRM. The sequences (O..., FND..., FB...) are in FluentCRM and need a sync.
- The live server connection details are in `Docos/Server-Info.txt` in the Botterverse repository folder. Never print that file or the passphrase. Use `tools/live-ssh.sh`.
- The built-in browser pane cannot load the local site's styles. Check layout through the owner's screenshots or a test page with inline CSS.
- Backslashes in text sent through tools can be halved or turned into control characters. Build Windows paths with `chr(92)` in scripts.
- Live backups of the database are in `/home/btrvers/backups/`. Today's: `pre-docs-anchor-20261114-1742.sql`, `pre-arithmetic-20261114.sql` , `pre-e42a-20261115.sql`, `pre-cancelplan-20261115.sql`, `pre-docs-titlecase-20261115.sql`, `pre-cartslug-20261115.sql`, `pre-abtests-20261115.sql`. 17 and 18 November: `pre-docs-17nov-20261117.sql`, `pre-founder40-20261118.sql`, `pre-founder50-end-20261118.sql`, `pre-fnd1-multiple-20261118.sql`.
- The `botterversewp` repository's `core.sshCommand` now points at `btvwp_rsa_github` (it pointed at a missing key). Plain `git push` works from that folder. The app repository uses `btvapp_rsa_github` (not tested).

## 5. Writing rules

British English. No comma before "and" or "or". Hyphens only (no em or en dashes). Avoid the word "get" in prose. No opening platitudes. Be succinct. Put questions inline in the reply and never in a popup. Push back where warranted and ask when unsure.
