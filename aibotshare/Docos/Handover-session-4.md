# Handover 4: Botterverse WordPress build

Written 4 November 2026 for the next session. Read this first. It replaces `Handover-session-3.md` for everything about the site build. Session 3 still holds the history of the email design. Work is in `E:\Projects\Genesis\Exodus\aibotshare\`.

## 1. The owner's rules (they apply to every reply and every file)

- British English. Never a comma before "and" or "or". Hyphens only and never an en or em dash. Do not use the verb "get" in prose. Plain and short. Questions go inline in the reply and never in a popup. The global rules are in `E:\AppData\Claude\Config\CLAUDE.md` and the `writing-style` skill.
- Check every file you write with a mechanical check before reporting: the pattern `, and`, `, or`, dashes, the verb "get", "our team" and the old brand name. Agent reports can say "clean" while files are not.
- Do not agree by default. Push back where warranted. Do not assume. Ask if unsure.
- Do not read `Docos\Botterverse Details.txt` (it is in the other project folder). `Docos\Botterverse Details For Agents.txt` holds test login details. It is ignored by Git and must never be committed or quoted.
- Do not edit `Docos\member-guide.docx` or `.exodus-brand.json` or the other project folder `E:\Projects\AIBotShare`. Never read or edit `wp-config.php` or the app's `.env`.
- Do not push to the remote until the owner says so. Do not change security settings. The owner unblocks IPs in the firewall plugin themself.
- Never use WP-CLI. The sync is a bespoke PHP script.
- Snapshot the database before any change to WordPress. Never delete user data. Only delete your own test data and use exact paths when you delete files.
- Names: the brand and website are **Botterverse**. The members area is **Botters Lab** (renamed on 4 November 2026, no apostrophe). The Lab host is `lab.<domain>`. The signature on every email is "Your Botter Support Team". Inside the text write "the Botter Support Team" and never "our team". Say "annual" and never "yearly". Tagline "Build a bot. Share it. Sell access." Main button "Take Me To The Botterverse".
- Never mention a sixth tier or the Founder badge on the website or testimonials or income claims or a named competitor. Never use the word "beta". The coupon is FOUNDER50 and it closes on 30 November. Bot limits are Apprentice 1 and Novice 20 and Expert 50 with Pro and Master unlimited.
- Files inside the web root use the `btv-` prefix. Files outside it keep their names.

## 2. State at the end of session 4

- **Git.** Branch `main` in `E:\Projects\Genesis\Exodus`. Many commits are ahead of `origin/main` (check with `git rev-list --count origin/main..main`). Nothing from this build has been pushed. The remote is `git@github-exodus:FlyingQuokka/exodus.git`.
- **Local site.** `https://botterverse.debbie`. Files at `D:\Users\Quokka\Desktop\Websites\botterverse\public`. Database `botterversewp` with prefix `btv_`. WordPress 7.1.4. PHP at `D:\Programs\Web\Wamp\bin\php\active\php.exe`. MariaDB at `D:\Programs\Web\Wamp\bin\mariadb\mariadb11.4.9\bin\` (user root and no password). The admin user for builds is `agentuser`. Mail goes to Mailpit.
- **Snapshots.** `D:\Users\Quokka\Desktop\Websites\botterverse\backups\` (the newest are `pre-botters-lab-rename-2026-11-04.sql` and `pre-privacy-slug-2026-11-04.sql`).
- **The built-in browser cannot load the site's styles** (it blocks them). Test with `curl -sk` and ask the owner to look at anything visual. The owner checks pages in their own browser.

## 3. What exists

| Area | Where | Notes |
|---|---|---|
| Sync plugin | `site\btv-sync\` | Creates tags and FluentCart emails and 40 FluentCRM automations and the lead form and two draft broadcasts. Idempotent. README explains everything. A Windows junction links it into `wp-content\plugins` |
| Theme | `site\btv-theme\` | Bespoke block theme. Pages are code in `pages\`. Another junction links it. Files `inc\login.php` and `inc\die.php` style the sign-in screens and the WordPress error screens |
| Email sources | `Emails\build\` | 201 emails. `tools\build-email-data.py` turns them into `site\btv-sync\data\emails.json`. Do not edit `emails.json` by hand |
| Generators | `tools\make-*-funnels.py` | Write the automation files in `site\btv-sync\data\funnels\` |
| App agent briefs | `Emails\15` to `Emails\25` | Brief 24 (bought credits wording and two other changes) and brief 25 (rename) are waiting for the app agent |
| App agent replies | `Docos\app-facts-for-marketing*.md` and `marketing-*reply*.md` and `wp-agent-affiliate-emails.md` | Read these before asking the app agent anything again |

**Run the sync** (safe to repeat):

```
php site\btv-sync\bin\run-sync.php --wp=D:\Users\Quokka\Desktop\Websites\botterverse\public --user=agentuser --publish
```

After a wording change in `Emails\build`, run `python tools\build-email-data.py` first.

## 4. Done in session 4 (short list)

- Sync built and rehearsed on a copy of the database. 39 automations published, then O04 cart abandonment too (all 40 are now published locally). Abandoned cart tracking is on.
- Theme built and corrected from the owner's feedback: header and footer, pricing, checkout (summary card and order button), receipt page width, sign-in screens (one card with the logo inside and no Register link and no language dropdown), admin sign-in with its own heading, billing account pages with a show and hide password button, error screens and the log-out screen styled.
- Branded layout for WordPress's own plain-text emails. A fixed reply-to of `support@botterverse.com` on FluentCRM emails. FluentAffiliate's own commission and payout and staff sale emails switched off.
- Comma pass over all 201 emails. Wording changes for bought credits and E34 and E41a and E51 and E52. Rename to Botters Lab on the website side (files and database). Privacy Policy slug is now `privacy-policy`.
- The error screen builds on core's `_default_wp_die_handler`. If it is ever missing the theme emails the support address once a day and shows a plain screen.

## 5. Outstanding

**For the owner to decide**
1. The Terms page slug still ends in `-app-version` (`terms-and-conditions-app-version`). The Privacy Policy was fixed on request. Ask whether to fix this one too. It is used by the footer menu and `bin\install-pages.php`.
2. Whether the comma changes should go to the app agent for the app-sent emails. Those are `events-01-27.md` and the app-sent emails in `events-28-54.md`. The app still holds the old text.
3. Send dates for the two Founders broadcasts (FB1 and FB2). The owner will decide after the live site is proven.
4. Whether the Terms and Privacy Policy name change waits or goes in as its own version. Asked in brief 25. The app agent will change its own and **the WordPress Terms and Privacy Policy pages have no mention of the old name, so nothing is needed there**.

**Waiting on the app agent**
- Brief 24: bought credits wording in four emails, the `plan.downgraded` sentence (approved: "Your included credits change to your new plan's at your next renewal.") and the E34 daily cap email (delete the restart sentence and add a comma after "now").
- Brief 25: rename. Also asks for a count and for the `btv_checkout_guard` plugin (which lives in the app's folder) and its stored option to be changed.
- `auth.password_changed` (E08) is being built. `plan.upgraded` is built.
- E23A: the app's sale email wording differs from my draft. The app's wording is final.

**Not yet seen with real events.** The owner will run an order test with the app agent. It should cover the real FluentCart Subscription Activated event starting the welcome sequence and the cart abandoned trigger and O04 and the FluentCart emails with a real order and a cancelled subscription (E42a date) and an email actually leaving the server. Fluent Support Pro email piping (so members can reply to help desk emails) is set up at go-live and is untested.

**Visual checks still open.** Narrow phone views (390px) of six pages and the other FluentCart pages and the Better Docs and Support and Forms styling.

**Remaining email notes.** Search `Emails\build\*.md` for `[CONFIRM` and `[DECISION`. Several are now settled (see section 4 of `00-index-and-decisions.md`).

## 6. Go-live plan (the order the owner agreed)

1. **Remove the error screen preview.** Delete the block marked "REMOVE THIS BLOCK BEFORE GO LIVE" in `site\btv-theme\inc\die.php` (the `btv_preview_die` hook). The owner asked for this. A memory note also records it.
2. **New repository `botterversewp`.** The owner wants it separate so it can be passed to a future buyer. Agreed design:
   - Move `aibotshare\site` out of the Exodus folder into its own folder (the owner chooses where) and recreate the two junctions in `wp-content`.
   - Copy the email sources (`Emails\build`) and `tools\build-email-data.py` into it so a buyer can rebuild the emails.
   - Scrub comments that refer to planning notes (for example `inc\login.php` says "Copy is from Docos\pages-copy-v1.md section 7").
   - **Fresh history** with one neutral first commit. That commit is the live baseline. Do this before the first live deploy so the server pulls from it.
   - The owner creates the GitHub repository. It needs its own deploy key and SSH alias because a deploy key serves one repository only.
   - Stop tracking `aibotshare\site` in the Exodus repository.
3. **Live server.** The owner has created an SSH key but gave no details yet. Check PHP on the command line. Pull the repository then run the sync with `--publish`. Set the live values. Turn off the setting that discourages search engines. Re-apply the page edits that live only in the database (section 7). Check delivery (SPF and DKIM are already set up). Test the Fluent Support email piping. Check the CRM Integration words on the live app.
4. After the live server is proven, the owner decides the Founders broadcast dates.

## 7. Edits that live only in the database (not in files)

The sync does not carry page content. Repeat these on the live site or add them to the sync first:
- Terms page (ID 80): the safety scan paragraph (longer wording without the time zone phrase) and the CRM consent box wording in section 4. The auto top-up wording matches the app's own text.
- Privacy Policy page (ID 81): the "If you start to buy and do not finish." paragraph about abandoned carts. Slug is `privacy-policy`.
- Pricing page (ID 78): the id `compare` on the comparison table (E41a links to it).
- The footer menu (post 208) uses the new Privacy Policy slug.
- Pages 82 and 83 (Auto Top-Up Consent and CRM Consent) are in the trash.
- The Botters Lab rename was applied to 15 pages and docs by a script. On a fresh live site the pages are built from `bin\install-pages.php` and the theme files, which already carry the new name.

## 8. Things learned

- **Shared scratchpad.** Agents running in parallel share one scratchpad folder and overwrote each other's `c.py`. Give every agent unique file names.
- **Python escapes.** `\a`, `\b` and `\f` in a normal Python string become control characters. Use raw strings or `chr(92)` for backslashes in paths. This corrupted a README once.
- **The firewall plugin.** The All In One Security firewall permanently blocked the owner's IP (88.98.87.250) for a POST with no user agent. Every page redirected to `127.0.0.1`. The owner removed it under WP Security, Dashboard, Permanent block list. It may recur if the app server posts with no user agent.
- **FluentCRM triggers.** Published automations start nothing until FluentCRM's active trigger list is rebuilt. The sync does this. A tag that is already on a contact starts nothing.
- **Error screens.** `wp_die` pages use one core handler. The theme wraps its output. Screens inside the admin area are left as WordPress makes them.
- **WordPress registration.** The setting is off only while `wp-login.php` loads (a `pre_option_users_can_register` filter) so Fluent Support's own sign-up form still works.
- **WordPress updates.** Everything uses documented hooks except the error screen. After each major update check the sign-in page, the forgotten password page, a log-out link and one WordPress email.

## 9. Memory

Memory files are in `E:\AppData\Claude\Config\projects\E--Projects-Genesis-Exodus\memory\`. The index is `MEMORY.md`. Useful ones: the sync tool note, the file prefix note, the Botters Lab naming note, the Lab host note and the go-live to-do.
