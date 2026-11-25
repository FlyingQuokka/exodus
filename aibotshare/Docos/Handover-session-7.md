# Handover: Botterverse site, session 7 (written 25 November 2026)

Read this first. Then read `Handover-session-6.md`: it holds the full record of what was done and when (section 1) and the backup names and working notes (section 4). Then read `Handover-session-5.md`: the facts that must stay right in copy (section 5) and the writing rules (section 6) and the routes to the live site (section 8). This file only says where things stand at the end of session 6 and what is open.

## 1. Where things stand

The site is live on botterverse.com and the Lab is live. The go-live runbook is complete and the live audit of 25 November found no open problems (all 137 URLs and all 15 buy buttons work). Search engine visibility is still blocked on purpose until launch.

Work method (unchanged): change everything on local first (`https://botterverse.debbie`) and then copy it to live by the route for that content type with a database backup before any database route. Run a dry run first. Never change files in the app repository (`lab/docs/help`, `lab/docs/handoffs`) and never change the FluentCart system pages' content. Never print `Docos/Server-Info.txt` or the passphrase. Use `tools/live-ssh.sh` for the live server.

Last things done (25 November 2026):
- Menu order wording in the welcome email and the writing notes: "Settings, Support, Feedback, Help and Affiliates sit at the foot." Committed and pushed (`3b85524`).
- Banners in `Designs-WP/Banners/New`: the text in the 300x250 cell of `set-1-dated.html` and `set-2-evergreen.html` is centred. The PNGs `png/set-1-dated_02_300x250.png` and `png/set-2-evergreen_02_300x250.png` were re-exported over the old files (same names). There are 28 PNGs in total named `<html-file-name>_<nn>_<W>x<H>.png`. The folder `png/Chosen` is the owner's own and must be left alone. Committed locally as `4cf42c9` and **not pushed**.
- Evergreen affiliate swipe emails: `Docos/affiliate-swipe-emails-v2.md` (six emails replacing the six in `affiliate-swipe-material-v1.md`).
- Help articles of 25 November are live (`signing-up` and `member-menu` and `change-plan`).

## 2. Uncommitted files in the working tree

Check `git status` first. At the end of session 6 these were not committed:
- `Docos/affiliate-swipe-emails-v2.md` and `Docos/affiliate-swipe-material-v1.md`: both changed on disk after my last commit of them (`8b4ec3c`). Read the current content and ask the owner before assuming either change was wanted or unwanted.
- `Docos/wp-agent-help-articles-25-nov.md`: the app agent's list for 25 November (already applied on live).
- `output/docs-articles.json` and `output/docs-snapshot-local-17nov.json`, `-19nov.json` and `-25nov.json`: generated files. Do not commit them unless the owner asks.
- `Designs-WP/Banners/New/png/Chosen/`: the owner's folder.

## 3. Waiting on others

| Item | Who | What I do after |
|---|---|---|
| Review of the Black Friday and festive copy in `Docos/bfcm-festive-copy-v1.md` (brief in `bfcm-festive-brief.md`) | Owner | Build the approved material (see section 4) |
| Cancellation email released on the app's production server. E42a is already off on the site | App agent | Nothing |
| Rename the app button "Buy Credits" to "Buy a Botter Booster Pack" | App agent | Nothing on the site. The app agent still needs telling |
| FND1 fires only when the Founder tag is newly added, so the app must remove the tag on cancel or at rejoin before it adds it again | App agent | Nothing on the site. The app agent still needs telling |
| Change the go-live runbook line that says buyers stay double opt-in (the owner switched it off) | Coordinator | Nothing |

## 4. Open on my side

- After the owner approves `bfcm-festive-copy-v1.md`:
  - Put the Black Friday and festive sign-up sequences into the sync data. The festive one goes on its own tag such as Src Festive and the Black Friday one stops on 2nd December. The sign-up emails use scheduled content so the sequences must not keep sending stale dates.
  - Create `site/btv-sync/data/deal-blocks.json` (texts for `{{deal_block_NAME}}`) and swap the affiliate emails into the follow-up sequence only while a deal is active.
  - Make the banners and landing pages for the app: title and image and alt text and landing path and coupon for each item.
  - Prepare the closed state for the gap days (2nd and 3rd December).
- Deals for reference: FOUNDER50 is 50% off for life until the close of 1st December EST (coupon end 2026-12-02 04:59:59 UTC). FOUNDER40 is 40% off for life from 4th December to the close of 1st January 2027 EST. The owner supplies the Lab launch date.
- After editing any legal page on live remove the entry WP Legal Pages adds to the option `banner_cookie_options`.
- Owner before real prospects arrive: cancel the active $2.50 test subscription (subscription 27) and remove the test member data (testbotter01 and FluentCRM contact 10 and the test orders). Check the Brevo plan limit. Send a test email to Gmail and Outlook and check inbox placement. Switch search engine visibility on at launch.
- After a week: raise HSTS `max-age` in the `.htaccess` block to 31536000. After a few weeks of clean Brevo reports consider DMARC `p=quarantine` (it is `p=none` now). Update the nine pending Fluent plugins after launch week and test one plan upgrade afterwards.
- Optional: delete the stale `E:/Projects/AIBotShare/Docos/emails.json` (old Founders wording and "boosts"; never load it). The old plan `Emails/01-welcome-sequence-plan-v3.md` (S30) still says "Support and Help and Feedback" and was left unchanged.

## 5. Things to know

- Credits stay credits. Only the packs are "Botter Booster Pack(s)". Buttons that mean a pack say "Buy a Botter Booster Pack". The menu label is "Billing And Credits".
- Email copy sources are `Emails/build/*.md`. `tools/build-email-data.py` rebuilds `site/btv-sync/data/emails.json`, so never edit that file directly.
- Local PHP quirks: use `D:/...` paths and run scripts that load WordPress with `-d auto_prepend_file=<file defining WP_HTTP_BLOCK_EXTERNAL true and DISABLE_WP_CRON true>` because outbound requests stall.
- Backslashes in text sent through tools can be halved or turned into control characters. Build Windows paths with `chr(92)` in scripts.
- Banner PNGs are exported with headless Edge screenshots cropped with PIL. The helper scripts were in a temporary scratchpad and are gone. Write new ones if the banners change again.
- Never print secrets or key values. One Lab feed secret was partly printed in session 6 and the owner was told.
- Genesis bots (`.claude/skills/genesis-bots/scripts/genesis-stream.mjs`, bot `mario-bot-`) are used for first drafts of copy. Remove any claim an affiliate or the product facts cannot support.

## 6. Writing rules

British English. No comma before "and" or "or". Hyphens only (no em or en dashes). Avoid the word "get" in prose. No opening platitudes. Be succinct. Put questions inline in the reply and never in a popup. Push back where warranted and ask when unsure. Use "per" for rates.
