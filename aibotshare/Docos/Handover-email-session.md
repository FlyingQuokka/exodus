> Superseded on 1 November 2026 by `Handover-session-2.md`. Read that file first.

# Handover: Botterverse website and email work

Written 31 October 2026 for the next session. Read this file first. Everything is in `E:\Projects\Genesis\Exodus\aibotshare\`. The folder keeps its old name. Everything inside it uses the Botterverse name.

## 1. The owner's rules (they apply to every reply and every file)

- British English. Never a comma before "and" or "or". Hyphens only and never an en or em dash. Never use the banned verb listed in the global rules. Contractions by preference in emails. Plain and short. Questions go inline in the reply and never in a popup.
- The global rules are in `E:\AppData\Claude\Config\CLAUDE.md` and the `writing-style` skill. Check every file for them before writing it.
- Do not agree by default. Push back where warranted. Do not assume. Ask if unsure.
- Nothing is built in WordPress or FluentCRM until the owner approves. A coding agent is updating the database and the domain at the same time. Do not read or write the site until the owner says it is done.
- The owner's Chrome is signed in to the local site as Agent User. Do not type its password. `Docos\Botterverse Details.txt` holds that disposable account. Do not read it again.
- Do not edit `Docos\member-guide.docx`, `.exodus-brand.json` or the other project folder `E:\Projects\AIBotShare`.

## 2. What the project is

Botterverse (formerly AI Bot Share) is a platform where members build AI bots and share or sell access to them. The WordPress site is the marketing and sales site. The Botter's Lab is the members' app. The base domain is botterverse.com and the local domain is botterverse.debbie. The token `{{domain}}` holds the base domain. The Lab sign-in is `https://lab.{{domain}}/login`. Same-site links are relative on the site and absolute with the token in emails. See `Docos\botterverse-rebrand-changes.md`.

## 3. Decisions made

- Design phase order: copy first as text then colour options for Home then HTML designs then the WordPress build. The owner approves each step.
- Pleasant Pink colours stand. Button text on pink is `#391d37`. Tokens are in `Docos\pleasant-pink-colours.md` and `Docos\nightshift-colours.md` and `Docos\theme-spec-v1.md`.
- Bespoke block theme. Pages as code. Site Editor not used.
- Menus: block navigation. Articles is the blog and stays hidden until after launch.
- FAQ is ten questions. The member guide is the source of truth for the product.
- Founders: the coupon works on all tiers. A founder is a founder for life. The badge shows only in the Lab. Founders and annual plans are not mentioned in copy except where noted.
- Email format: soap opera. Recap then new topic then content then a "Task for today" heading then a closing line then the signature on its own line then a P.S. starting "Next up:". No preheader or avatars or stories. Paragraphs of one or two sentences.
- Signature: Your Botter Support Team (changed on 2 November 2026).
- Subject prefix: `[Botterverse]` for general emails and `[Botter's Lab]` for Lab emails.
- Say "reset" for included credits. Credits the member buys never expire.
- Write "Make Public" as the guide spells it.
- Tags and lists: one list plus tags (see `Emails\00-strategy-one-list-and-tags.md`).
- The jump recap uses the middle route. Upgrades end the welcome track and start the upgrade sequence.
- Lower tiers see preview versions of gated emails: look but don't touch yet.

## 4. Files and their status

| Area | File | Status |
|---|---|---|
| Site | `Docos\site-plan.md` and `Docos\theme-spec-v1.md` | Current |
| Copy | `Docos\home-copy-v3.md` and `home-headlines-v1.md` and `pages-copy-v1.md` | Home v3 current. Pages copy current with a ten-question FAQ |
| Emails: plans | `Emails\00-strategy...` and `01-welcome-sequence-plan-v4.md` and `02-upgrade-sequences-plan.md` and `05-other-sequences-plan.md` and `06-event-emails-plan.md` and `07-soap-opera-format-and-loop-map.md` | v4 is the current welcome plan. `07` loop table is superseded by v4's P.S. column |
| Emails: brief | `Emails\08-writing-brief.md` | Current. Add the v4 changes before using it again |
| Emails: written | `Emails\build\` (205 emails) and `build\00-index-and-decisions.md` | Written to the v3 order. Needs rework to v4 |
| Samples | `Emails\10-sample-emails-v2.md` | Approved |
| App prompt | `Emails\04-app-agent-prompt-tier-events.md` | Sent to the app coding agent. Founder part updated |
| From another agent | `Emails\plan-ending-emails.md` | Four plan-ending emails written by the app agent. Rewritten as O15 in `build\seq-O05-O15.md` |
| Retired | `03-storyselling-plan.md` and `10-sample-emails-v1.md` and `01-welcome-sequence-plan-v2.md` and `v3` | Kept for reference |
| Safety copy | Scratchpad `aibotshare-backup` | Folder as it was before the rename |

## 5. Next tasks, in order

1. **Rework the welcome sequence to plan v4.** About 12 existing emails can be reused and trimmed. About 14 are new: T1 tour and T2 import and B1 build and B2 test and go live and B3 make it yours and C1 credits and W1 embed and W2 sales-page bots and W3 niche bots and N1 to N6 example bots and TIP1 and TIP2. The rest need new recaps and P.S. lines. Add the v4 changes to `08-writing-brief.md` first (Make Public and previews and day 1 timing). Then use writing agents in parallel as before. Give each a clear slice and the brief.
2. **Previews.** Turn U1 to U13 into the preview versions for lower tiers. Reuse them where they fit.
3. **Loop map.** Write the single final loop table from v4. Update the upgrade sequences and jump recaps so they refer to the new IDs.
4. **Check every file** with the mechanical check (comma before and or or and dashes and the banned verb and American spellings and old brand name and typed domains and runs of short sentences). Fix breaches.
5. **Walk through `build\00-index-and-decisions.md`** with the owner. Section 2 has 19 decisions. The branch loop conflict (item 1) is replaced by v4. Items 6 to 19 still need answers.
6. **The remaining design-phase work:** affiliate swipe material (emails and social posts and short pitches and banner text) after the Affiliates page copy is agreed. Cart page text. The five Home colour options (only after the copy is final). The HTML designs. Refining the logos and images after the owner chooses. Forms: the owner wants a sign-up form and a contact form. Create `Docos\approved-designs.md` only when designs are approved.
7. **Build in WordPress and FluentCRM** only after the owner approves and the coding agent finishes: set the branded default email template, register the `{{domain}}` filter (answer `fluentcrm_smartcode_fallback`), create the tags, build the automations A0 and STOP and the others, create pages and menus and forms.

## 6. Waiting on others

- **The app coding agent:** Parts A to E of `04-app-agent-prompt-tier-events.md` (upgrade and downgrade and Founder and First Commission tags and a report on affiliate joins). End-to-end tests wait for it. FluentCRM can be built before it by tag name.
- **The owner:** the logo and image concept review (`Designs-WP\Logos` and `Designs-WP\Images`). The real Better Docs address for the help-article links (emails use a placeholder). The hosts file entry for `botterverse.debbie` if it is not there.

## 7. Known open points

- How the Founders coupon reaches people.
- Where affiliates find the swipe material.
- Whether Change plan is live at launch (emails say members use Change plan under Billing and credits).
- Whether FluentCart's trigger can filter by plan variation. The plugin check found product or category only.
- About 90 `[CONFIRM]` items in the written emails' Notes, grouped in `build\00-index-and-decisions.md`.
- The CCPA and DMCA pages are tokenised during the build.
- The Yoast fields for pages are registered in theme code.

## 8. Things I learned the hard way

- Subagents work well for writing batches. Give each a brief file and one assigned output file. Run the mechanical check yourself afterwards. Agent reports can say "clean" while files still carry a comma before "or".
- FluentCRM only parses smart codes written group.key. A bare `{{domain}}` goes through the `fluentcrm_smartcode_fallback` filter.
- FluentCRM automation emails start from the default email template. Set the branded one first.
- Removing a tag does not stop pending automation steps. Use Cancel Automations on a stop automation.
- FluentCart triggers filter by product or category only. Plan changes have no trigger. Tier tags come from the app.
- Fluent Support has no link that preselects a topic. The Feedback page fixes its inbox by shortcode.
- Plugin facts were read from source and were not tested live.

## 9. Memory

Saved in `E:\AppData\Claude\Config\projects\E--Projects-Genesis-Exodus\memory\`: the Botterverse rebrand note and the existing Exodus and AI Bot Share notes. The AI Bot Share notes use the old name in their titles. Their content still applies. Read `MEMORY.md` at the start.
