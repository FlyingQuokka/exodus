# Handover 2: Botterverse emails and designs

SUPERSEDED by `Handover-session-3.md`. Do not use this file.

Written 1 November 2026 for the next session. Read this first. It replaces `Handover-email-session.md`, which is out of date. Everything is in `E:\Projects\Genesis\Exodus\aibotshare\`. The folder keeps its old name. Everything inside it uses the Botterverse name. Read the memory index (`E:\AppData\Claude\Config\projects\E--Projects-Genesis-Exodus\memory\MEMORY.md`) at the start.

## 1. The owner's rules (they apply to every reply and every file)

- British English. Never a comma before "and" or "or". Hyphens only and never an en or em dash. Never use the banned verb listed in the global rules. Plain and short. Questions go inline in the reply and never in a popup.
- Never a serial "and". Lists read "a, b and c". Fixed names stay as they are (Billing and credits).
- Say "annual" and never "yearly". The tagline is "Build a bot. Share it. Sell access." The main button reads "Take Me To The Botterverse".
- Link every page you send a member to at first mention. Use "In" for fields and sections ("In Instructions"). Make Public is spelled as the guide spells it.
- Do not agree by default. Push back where warranted. Do not assume. Ask if unsure.
- The global rules are in `E:\AppData\Claude\Config\CLAUDE.md` and the `writing-style` skill. Check every file with a mechanical grep before reporting. Agent reports can say "clean" while files are not.
- Do not read `Docos\Botterverse Details.txt`. Do not edit `Docos\member-guide.docx` or `.exodus-brand.json` or the other project folder `E:\Projects\AIBotShare`.
- Never mention a sixth tier (Empire is not on sale) or the Founder badge on the website or testimonials or income claims or a named competitor.

## 2. State of the site and the cutover

- The WordPress site is still served at `aibotshare.debbie`. `botterverse.debbie` is in the hosts file but answers 403 until the coding agent switches the database and files.
- At the cutover the plugin folder `abs_checkout_guard` becomes `btv_checkout_guard` and the shortcode becomes `[btv_create_account]`. The WordPress tables move to the `btv_` prefix. No WordPress changes may be made around the cutover. Wait for the owner to say it is done.
- The only WordPress change made so far is on 1 November 2026: the old brand name was replaced in 26 help articles (BetterDocs) through the REST API as Agent User and `what-is-aibotshare` became `what-is-botterverse` (the old address redirects).
- The coding agent has finished `Emails\04-app-agent-prompt-tier-events.md`. The Upgraded From tags work. The Downgraded tags almost never fire (a move down is a cancel then a new purchase). Use Cancelled and Plan Ended.
- Nothing is built in FluentCRM. Plugin facts were read from source and not tested live.

## 3. What exists

| Area | Where | Notes |
|---|---|---|
| Email index and decisions | `Emails\build\00-index-and-decisions.md` | Current. 211 versions. Lists open decisions and the open [CONFIRM] notes |
| Welcome sequence (plan v4) | `Emails\01-welcome-sequence-plan-v4.md` and `Emails\09-welcome-loop-map-v4.md` | The loop map is read from the written emails |
| Written emails | `Emails\build\` | v4 welcome files and upgrade and jump recaps and sequences O01 to O15 and events and the Founders broadcasts. The upgrade IDs carry a U prefix |
| Writing brief | `Emails\08-writing-brief.md` | Sections 10 to 13 are the newest rules and win over earlier sections |
| Help article slugs | `Emails\12-help-article-slugs.md` | Real BetterDocs slugs. Never invent one |
| App agent prompts | `Emails\04-...` (done) and `Emails\13-app-agent-prompt-paused-and-withdrawal-emails.md` (sent to the app agent, waiting for its report) | |
| Retired files | `Emails\retired\` and `Emails\retired\build\` | Not for use. Plan v3 stays in `Emails\` because v4 relies on its A0 and STOP definitions |
| Copy | `Docos\home-copy-v3.md` and `pages-copy-v1.md` and `pages-copy-v2-additions.md` and `affiliate-swipe-material-v1.md` | All current |
| Approved designs | `Docos\approved-designs.md` | Lists the logo and seals and pictures and page designs and Home choice |
| Page designs | `Designs-WP\Pages\` | Shared CSS and skeleton in `assets\`. Brief in `00-design-brief.md` |
| Logos and seals and pictures | `Designs-WP\Logos\purple-ring\` and `Designs-WP\Images\` | The transparent lockup goes in the header |
| Email template and banners | `Designs-WP\Email\` and `Designs-WP\Banners\` | |
| Site plan and theme spec | `Docos\site-plan.md` and `Docos\theme-spec-v1.md` | Bespoke block theme. Pages as code. Site Editor not used |

## 4. Key decisions (the full lists are in the index and `approved-designs.md`)

- Home design is option 1, Pleasant Pink. Seals: the centred double ring is main and the header bar shield is the alternative. Use the wordless small seal at 64 pixels and under.
- Founders: coupon FOUNDER50 works on every plan and on monthly and annual billing. The offer closes 30 November. A Founder who leaves can use it again while it is active. No Founders text sits in the sequences. Leads receive two broadcasts and the Founder tag triggers one separate email.
- F4 goes to every tier. S30 is the last welcome email with no P.S. and exists in five tier versions.
- E41b is dropped. E13 and E27 are to be sent by the app.

## 5. Outstanding

1. The owner answers section 3 of the index (events 13 and 27 are decided but the app agent must report) and the placeholder question for the six Cart-sent event emails.
2. App agent: its report on `13-app-agent-prompt-paused-and-withdrawal-emails.md` (E13 and E27) and its reply to `14-app-email-wording-plan-ended-and-fewer-bots.md` (new plan.ended and fewer-bots emails E14b and E14c ). The app agent answered the Cancel question on 1 November 2026: `plan.ended` is sent only to members who did not press Cancel, so O15-4 stays and carries the same facts. Template names are `plan.ended` and `plan.fewer_bots`. Never write "our team" in a member email (owner rule of 21 October): E13 now says "the Botter Support Team". Waiting for the app agent's final report.
3. About 80 open [CONFIRM] notes in the emails (the index lists them).
4. After the cutover and with the owner's approval: build the theme and pages from `Designs-WP\Pages`. Build FluentCRM: register the custom design template and the `{{domain}}` filter (answer `fluentcrm_smartcode_fallback`) then create the tags and the automations.
5. End-to-end tests with the app agent. A real phone check of every page once the site is live.
6. Cleanup: test pages `check-seals.html` (in `Designs-WP\Images`) and `check-purple-ring.html` (in `Designs-WP\Logos\transparent`) and the old `Logos\transparent` folder can be deleted when the owner agrees.

## 6. Things learned

- FluentCRM only parses smart codes written group.key. It has no conditional blocks inside an email and no pasted-HTML template with a body marker. A custom design template is registered with the filters `fluent_crm/email_design_templates` and `fluent_crm/email-design-template-<key>` and made the default with `fluent_crm/default_email_design_template`. Footer links use `##crm.unsubscribe_url##` and `##crm.manage_subscription_url##`.
- Per-tier wording therefore needs separate emails chosen by tag (as S30 does). Event emails sent by the app use the app's placeholders. Cart-sent events cannot fill custom placeholders.
- Removing a tag does not stop pending automation steps. Use Cancel Automations on a stop automation. FluentCart triggers filter by product or category only.
- Subagents work well for writing and design batches. Give each a brief file and one assigned output file. Run the mechanical check yourself afterwards.
- Screenshots: render pages with Chrome headless (`chrome.exe --headless=new --screenshot=...`) and view them with the Read tool. The browser pane cannot open pages larger than about 500 KB and may not load relative files. Headless Chrome will not render below about 500 pixels wide.
- Windows quirks: Python run from Bash needs Windows paths (`D:/...`). `sed` mangles backslashes in replacements so use Python. Write long scripts to a file with the Write tool instead of a heredoc when they contain many quotes.
- Fonts in images: SVG text does not load web fonts when the file is used as an image. Convert lettering to outlines (fontTools worked from a downloaded Baloo 2).

## 7. Memory

Saved in the memory folder: the Botterverse rebrand note and brand assets and Founders offer and downgrade tags and the WordPress site note (cutover facts). The older AI Bot Share notes use the old name in their titles and their content still applies.
