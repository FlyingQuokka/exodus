# Handover: Botterverse WordPress redesign

Written 30 October 2026 from the Exodus marketing session. This is the single briefing for the new session. Read it fully before touching anything.

## 1. Purpose and scope

Redesign the Botterverse marketing site (WordPress, local only for now) using approved copy and a design agreed in HTML first. There is **no live site yet**. It will be created after this exercise by moving cleared-down copies of the databases and files to the live server.

Two phases:
1. **Design phase (this session):** build and tweak HTML designs in `Designs-WP` inside the Exodus `botterverse` folder. Nothing is written to WordPress.
2. **Build phase (later):** build agents translate the final designs into WordPress pages under the site build root.

## 2. Folders

| Purpose | Path |
|---|---|
| Design work (writable by the design session only) | `E:\Projects\Genesis\Exodus\aibotshare\Designs-WP\` with `Pages`, `Logos`, `Images` |
| This handover and other design docs | `E:\Projects\Genesis\Exodus\aibotshare\Docos\` |
| Project documentation (other project) | `E:\Projects\AIBotShare\Docos\` |
| Local WordPress site | `D:\Users\Quokka\Desktop\Websites\aibotshare\public` |
| Laravel member app inside the site | `...\public\members` (never touch) |
| Marketing work from the Exodus session | `E:\Projects\Genesis\Exodus\aibotshare\` (read these, do not edit without asking) |

The design folder sits in the Exodus workspace, outside the website folder, so nothing in it can reach the live site. The Exodus workspace is a git repo (remote FlyingQuokka/exodus) but the marketing work is not yet committed. `E:\Projects\AIBotShare` is not a git repo and is read-only reference for this phase. The empty `E:\Projects\AIBotShare\wp-design` folders are unused.

## 3. Method decisions (agreed)

- **Block theme plus pages-as-code.** The site uses Twenty Twenty-Five (a block theme). Pages are built from native blocks and patterns, with `theme.json` carrying colours and fonts. Thrive Architect is installed but was judged poor for git and automation, so it is not used.
- **Git repo as source of truth** for the built site, with a `design/` versus `site/` split. `design/` never ships. `site/` holds `pages/`, patterns and theme files.
- **Manifest of page slugs**, a sync script that pushes through the WordPress REST API, an **IDs file per environment** (local and live have separate IDs), a **drift guard** that stops a push when the page was edited in the WordPress editor and a **pull-back command** to bring editor changes into the repo.
- **Design lab cleanup:** remove throwaway test pages before the database copy.
- **Database clear-down:** clear test content locally before the two databases (WordPress and app) are copied to the live server. IDs then stay the same on go live. Files are pushed at the same time.
- **Manual push first.** Decide on a pipeline or a pull on the server only after the first deployment.
- **Design files are HTML per page** in `aibotshare/Designs-WP/Pages` (and `Logos`, `Images`). Tweak them until they look right. Once the final designs are approved the build agents create them in the build root.
- **Version history:** no tool beyond file suffixes is needed.
  - Name files `botterverse-{page}-v{n}.html` (for example `botterverse-home-v1.html`).
  - Edit the current version in place while tweaking. Create a new `-vN` file only at a milestone, such as before a major change or when the user wants to compare options.
  - Never overwrite or delete an earlier version without asking.
  - When a design is approved, record the approved file name for each page in a short `aibotshare/Docos/approved-designs.md`. The build agents work only from files listed there.
  - The Exodus repo already gives history. Commit `Designs-WP` at each approval if the user asks.
- **Build the HTML from components that map to blocks** (hero, cards, accordion, pricing table, CTA band) and one shared tokens stylesheet, so the translation to blocks needs no rework.

## 4. Brand design tokens

Use the **Pleasant Pink** theme exactly as in the brief:

| Token | Hex |
|---|---|
| Page background | #f8f7ff |
| Sidebar and soft panels | #ebedfc |
| Cards | #ffffff |
| Brand pink | #dc8fd5 |
| Pink hover | #c876c1 |
| Pink tint | #ffe0fb |
| Heading text | #282637 |
| Small coloured text | #984f92 |

Fonts: Baloo 2 (headings) and Nunito Sans (body). Nightshift is the dark theme (background #080d16 and cyan accent #00d1da with Sora and IBM Plex Sans). Pink on bright cyan has only 1.25 to 1 contrast, so keep pink objects on white cards or use navy text. Real app screenshots will replace staged images later.

## 5. Copy rules (also held in the Exodus memory, repeated here in full so this document stands alone)

**Writing**
- British English. No comma before "and" or "or". Hyphens only (no em or en dashes). Avoid the word "get" in prose. No opening platitudes. Plain and succinct.

**Naming**
- "Botterverse" is the brand name everywhere. The base domain is botterverse.com and is written as the token `{{domain}}` wherever it is used.
- Vocabulary: Botters, Botterverse, Bot Market, Botting, Botter's Lab (the member area). Never "Bot Cave". Button text such as "Take Me To The Lab".
- Do not name competitors. OpenAI and the GPT Store are the shared enemy. Never state a date for OpenAI retiring custom GPTs. Say they are being switched off.
- Never mention Fluent Affiliate in copy.

**People and proof**
- Anonymous founder. No founder story. The site must stand on its own merit (the user plans to sell it later).
- No testimonials exist. Never fabricate any. Never name Dennis. Render no testimonials section while there are none.

**Plans (five public tiers)**

| Tier | Price | Bots | Credits |
|---|---|---|---|
| Apprentice | $5 | 1 | 300 |
| Novice | $47 | 5 | 2,000 |
| Expert | $97 | 20 | 5,000 |
| Pro | $197 | Unlimited | 12,000 |
| Master | $297 | Unlimited | 20,000 |

- **A sixth tier exists and must never be mentioned** (also never its CRM tag).
- Annual is 10 times monthly, sold as "2 months free". No free trial or free plan.
- Founders offer: 50% off for life on all plans, charged for real. The window runs through the beta and two weeks after public launch. Permanent Founders badge. No seat cap.
- Credit packs: Starter $10 / 1,000, Builder $25 / 2,600 (100 bonus), Launcher $50 / 5,500 (500 bonus), Promoter $100 / 11,500 (1,500 bonus), Campaigner $250 / 30,000 (5,000 bonus). Describe the bonus in credits only, never as a percentage, a saving or "free credits". Bought credits never expire. Included credits expire at renewal. Auto top-up is off until switched on.

**Money**
- No separate credit fee and no flat 95% share. Every sale pays 5% (Apprentice to Expert) or 3% (Pro and Master) of the post-tax price, plus 30 cents, capped at the price.
- Bot Market selling (Multi-sell and Transfer) starts at Pro.
- Refund period is 14 days. Earnings become withdrawable 21 days after a sale. Payouts run daily. Do not promise speed. Minimum withdrawal is to be confirmed (the brief says $50).
- Cancelling keeps access to the end of the period. No refunds on monthly plans. Annual refunds the unused whole months.
- Usual earnings disclaimer is needed.

**EU**
- Paid features are not sold in the EU. Say so in one FAQ (reason: the complexity of EU tax rules) and on the cart page only. Never in headlines, body copy or emails.

**Product claims**
- Botters choose the model for each bot. Nothing is auto-routed.
- Data export will be built. Frame it as never being tied to one platform and taking your bots, knowledge and conversations with you. The export has **no buyer names and no emails** (data protection: Botterverse is the seller of record). Never promise a customer list or email addresses. Never say "everything" or "all your customers". What a seller can see about members who sign up on their bot is unconfirmed.
- Pain copy stays on what GPT sellers genuinely lost: sight of who used their bot, any way to message those users, the link their customers used and their actions and model choice on migration. Do not claim they "never had buyers' emails".
- Affiliates: 50% of a referred member's first payment and 20% of every payment after, at launch. Credit packs earn nothing. Sellers can set an affiliate share per Bot Market listing (Novice and up).

**Emails** (FluentCRM): sender "Botterverse". Subject prefix: [Botterverse] for general emails and [Botter's Lab] for emails about the Botter's Lab. No footers or addresses.

**CRM tags the app sends:** Apprentice Botter, Novice Botter, Expert Botter, Pro Botter, Master Botter, Downgraded, Cancelled, Dormant, Built First Bot, Published First Bot, First Sale, Migrated From GPT, Bot Market Seller, Bot Market Buyer and Power User (first auto top-up succeeds).

## 6. Finished work (in `E:\Projects\Genesis\Exodus\aibotshare\`)

| File | What it is |
|---|---|
| `Docos\botterverse-brief.md` | Authoritative marketing brief: plans, packs, export contents, theme values, claims to avoid, open questions |
| `output\page-copy-draft-1.md` | Plain-text copy for the sales page, cart page, affiliate page and FAQ (20 questions). Contains [CONFIRM] items |
| `output\hooks\hook-shortlist-1.md` | Vetted hook picks and the reasons others were rejected |
| `output\product-image-concepts.md` | Ten image concepts with prompts |
| `output\logo-concepts-brand.html` | Ten logo concepts in the brand colours (`logo-concepts.html` is the original) |
| `output\fluentcrm-email-playbook.md` | Sequences S1 to S16 with triggers and subject lines. Email bodies not yet written |
| `inputs\gpt-withdrawal-pain-research.md` | Public-source research on GPT builder pain. Nothing specific to internet marketers yet |
| `Designs-WP\` | Earlier flat page mockups (see below). New design work goes in its `Pages`, `Logos` and `Images` subfolders |
| `Designs-App\` | Member and Back Office mockups. Design reference for the product |

### Mockup status

The user chose **home v1** as the layout. `Designs-WP\build-marketing-pages.mjs` generates the mockups. Other pages exist as v1: about, affiliate, support, faq, beta-landing and checkout-{tier}.
- **Home v3** (named-competitor table, 95% claim) and **v4** (founder story) conflict with the rules above. Do not use them. They are still on disk and should be deleted.
- The v1 testimonials block was changed to "Here's what other Botters are saying..." and renders nothing while there are no testimonials. Do not add placeholder quotes.

## 7. WordPress facts and off-limits list

Inspected 30 October 2026: WordPress 7.1.4. Only theme is Twenty Twenty-Five. No page builder in use (Thrive Suite is installed but not chosen). Plugins: FluentCart and Pro, FluentCRM and Pro, Fluent Affiliate and Pro, Fluent Support and Pro, Fluent Forms, FluentSMTP, `abs_checkout_guard`, Yoast SEO, UpdraftPlus, BetterDocs, All-in-One WP Security, WP Legal Pages and Better Search Replace. FluentCart is in Test Mode.

Existing pages: Feedback, Support, Pricing, Checkout, Order Review, Receipt, Cart, Profile, Shop, Terms of Use, Privacy Policy, DMCA and CCPA. There is no Home, About, Affiliates or FAQ page. The front page shows the post list. The header menu auto-lists every page (including Checkout, Order Review, Receipt, Profile and Shop) and the footer has placeholder links. Both need replacing.

**Never do**
- Read or edit `wp-config.php` (holds FluentCart's Stripe keys) or `members\.env`.
- Change the FluentCart system pages (Checkout, Cart, Order Review, Receipt, Profile, Shop) or the buy links on Pricing, which route through the app.
- Edit the mu-plugin `abs-local-feed-host.php` or the `abs_checkout_guard` plugin (linked by a directory junction).
- Write to anything under `members`.

**Pricing page:** the placeholder text lists the sixth tier. Remove that line and keep the working buy links exactly as they are.

Wiring is described in `E:\Projects\AIBotShare\Docos\WordPress-Setup.md` and `Build-Plan.md` section 8e. The CRM hook point register is in `Data-Model.md`.

## 8. Access

- **Site:** `https://botterverse.debbie` resolves only in the user's browser (hosts file or DNS proxy). Inside the Claude shell use `curl -k --resolve botterverse.debbie:443:127.0.0.1 https://botterverse.debbie/...`. The REST API is at `/wp-json/`.
- **Claude in Chrome:** the extension must be connected to this account. Call `list_connected_browsers`, then `tabs_context_mcp`. The user's Chrome is signed in as **Agent User**, the account provided for build work. Open your own tab and close it afterwards.
- **Credentials:** the Agent User password will be provided after the design phase. It belongs in a gitignored env file, never in chat or documents. Per-agent Application Passwords come from throwaway WordPress accounts that the user deletes after development. The user backs up the database and files before the build phase.

## 9. Open items to confirm with the user

1. Minimum withdrawal (brief says $50).
2. Whether the Founders 50% discount applies to annual plans.
3. Refund wording for credit packs.
4. Whether the data export is live at launch.
5. What a seller can see about members who sign up on their bot.
6. OpenAI retirement date (reported as 11 December 2026 but unverified, so do not print it).
7. Support hours.
8. Trademark clearance for "Botterverse" and the vocabulary.
9. Legal review of the terms and the earnings disclaimer.
10. Whether Yoast SEO meta can be written through the REST API (a small helper plugin may be needed).
11. Whether FluentCart fires Order Paid or Subscription Activated for a new plan (affects the email triggers).

## 10. Not yet done

- Ad Forge runs for body variants on the chosen hooks.
- Email bodies for the FluentCRM sequences.
- Skool verbatim material from the user. It decides which ownership premise leads.
- The user's redesign instructions (to come in the new session).
- Deleting unchosen mockup variants.
- Real app screenshots to replace staged images.

## 11. Tool gotchas

- The Exodus CLI is `npx @aicopycoders/exodus ...`. Running it directly is expected. The CLI cannot delete hook-bank entries (the dashboard can).
- Genesis bots run on the user's OpenRouter key and fail with "insufficient credits" when empty. Balance was about $12.89 after the last runs. Each Hook Forge run costs about $1.80.
- Scratchpad folders are volatile. Keep real artifacts in the project.
- Memory files are tied to the workspace path, so they only load for sessions opened in the Exodus folder. This document stands alone in case the session is opened elsewhere.
- JavaScript generator strings that contain apostrophes ("Botter's Lab") must use double quotes.
