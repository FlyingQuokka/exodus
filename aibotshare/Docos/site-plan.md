# Botterverse site plan

Written 31 October 2026. Working plan for the redesign. Nothing here has been built on WordPress.

## 1. Decisions so far

| Topic | Decision |
|---|---|
| Build method | Pages as code. Design in HTML first then translate to blocks. No Site Editor page building. |
| Theme | Bespoke block theme with full control. Not a child of Twenty Twenty-Five. |
| Order of work | Copy first as text for review. HTML designs only after the copy is final. |
| Source of truth for the product | `Docos\member-guide.docx` (digest in `Docos\member-guide-digest.md`). It overrides the older brief. |
| Emails | Written to `aibotshare\emails\`. |
| Logos and images | Blue-sky exercise. 10 logo concepts and 10 image concepts first. Not tied to the smiling-face placeholder. |
| Home page colours | 5 comparison options that may leave the main theme. Made only after the copy is final. |
| Credits for Genesis bots | Use first. Tell the owner when a top-up is needed. |
| Brand and domain | The brand is renamed Botterverse and no mention of Botterverse remains in the plan documents. The base domain is botterverse.com. The token {{domain}} holds the base domain only. The owner is renaming the local domain to match. |
| Site access | Chrome is signed in as Agent User. Read-only until designs are approved. The password file is not needed and not read. |

## 2. What the read-only inspection found (31 October 2026)

- Active theme: Twenty Twenty-Five 1.5. It is the only theme.
- The front page shows the blog post list. There is no Home page.
- Header menu (navigation post 7): Pricing, Shop, Cart, Checkout, Account.
- Footer menu (navigation post 208, edited 30 October): Feedback, Support, Terms of Use, Privacy Policy, Legal (with a submenu).
- The footer template part does not use that menu yet. It still shows placeholder links (Blog, About, FAQs, Authors, Events, Shop, Patterns, Themes) and a bottom row reading "Twenty Twenty-Five", "How long we keep your data" and "Designed with WordPress".
- Menus are block navigation posts. The classic Menus screen is unavailable.
- 17 published pages: Cart, CCPA, Checkout, DMCA, Feedback, Legal, My Account, Order Review, Pricing, Privacy Policy, CRM Consent, Receipt, Shop, Support, Terms And Conditions, Auto Top-Up Consent and Terms of Use.
- Terms And Conditions and Terms of Use both exist. One may be a duplicate.
- The Support page shows staff a "Customer Portal is only accessible by Customers" message. The portal can only be judged from a customer account.

## 3. Bespoke theme: what it holds

| Part | Purpose |
|---|---|
| `theme.json` | Colour palette fed from the tokens. Fonts. Spacing. Block defaults. |
| `assets/css/botterverse.css` | One tokens and components stylesheet. No inline styles. |
| `templates/` | Front page template for Home. Default page template. Single post. 404. Search. |
| `parts/header.html` | Logo. Menu. Cart and account icons. |
| `parts/footer.html` | Footer menu from navigation post 208. No credit row. |
| `patterns/` | Hero. Cards. Accordion. Pricing table. CTA band. Step list. Email-capture. |
| `styles/` | Nightshift as an optional style variation. |
| Integrations CSS | Fluent Support portal. Fluent Forms. Better Docs. WordPress login. FluentCRM email template. |

The theme sits in the build repo under `site/`. It never ships from `design/`.

## 4. Page inventory

| Page | Status | Notes |
|---|---|---|
| Home | New | Action-led. May use colours outside the main theme. |
| Pricing | Exists | Keep working buy links. Remove the sixth-tier line. |
| Affiliates | New | |
| FAQ | New | Includes the EU question. |
| How it works | New | Replaces About. No founder story. |
| Bot Market | New | Optional. Confirm. |
| Founders offer | New | Optional. Confirm. |
| Support | Exists | Shortcode content styled by CSS. |
| Feedback | Exists | May become a menu link to Fluent Support with a feedback tag. To verify. |
| Fluent Support login | Integration | |
| WordPress login and forgotten password | Integration | |
| Help centre | Better Docs | Brand the existing template. |
| Legal pages | Exist | Take the wrapper only. Copy is not ours. |
| Cart and checkout | System | Never change content. Style through theme CSS only. |
| Home and Articles templates | New | Home is the front page. Articles is the posts page. It stays unlinked and set to noindex until after launch. |
| Affiliate swipe material | New | Material for affiliates to swipe from. Loaded into the affiliate platform. Swipe emails and social posts and short pitches and banner images. Drafted after the Affiliates page copy. |
| Welcome sequence | New | 30 emails. Plan in `emails\01-welcome-sequence-plan-v4.md` (loop table in `emails\09-welcome-loop-map-v4.md`). |
| Event emails | New | One per member-area event in the guide digest. Plans follow the welcome sequence. |
| Other sequences | New | Pre-purchase lead nurture and abandoned cart and win-back and affiliate onboarding. Plans follow the welcome sequence. |
| FluentCRM email template | New | Branded wrapper for every sequence email. |
| Fluent Forms | New | Brand theme for every form the site needs. |

## 5. Lists and tags

Recommendation: one main list plus tags. Reasons are in the email strategy. Lists, if any, only separate people who are not yet members.

## 6. Decisions on 31 October (second round)

| Topic | Decision |
|---|---|
| Home and Articles | Pages created by the owner. Home is the static front page. Articles is the posts page. Both need templates in the bespoke theme. |
| Terms of Use | Deleted by the owner. Terms And Conditions stays. |
| Customer list | Pro and above can download customers who ticked the consent box. Always state the consent condition. Never say "all your customers". |
| Payouts | Do not say "daily". Withdrawals are requested in the Botter's Lab. |
| Fixed figures | The $50 minimum withdrawal and the 14-day refund and 21-day holdback figures are correct. Keep them off the sales pages. They can sit in the FAQ and the legal pages. |
| Founder | The Founders coupon works on every plan. A founder stays a founder for life. The badge shows only in the members area. Never show the badge on the WordPress site. |
| Listing affiliate share | Setting a share needs Pro because listing needs Pro. Promoting a listing needs Novice. |
| Data export and account closing | Both are built and working. Copy treats both as live. |
| Affiliate commission | Payments are built and working. Copy may describe the programme as paying. |
| Priority support | Starts at Pro. |
| The 22 open questions | Left out of copy. Some may suit the tier comparison table. |
| Affiliate marketing material | Added to the list of things a bot can create. |

## 7. Menus and the signed-in header

- Classic menus are hidden because the current theme is a block theme. A bespoke block theme can bring the Menus screen back by registering menu locations. The block navigation block cannot display a classic menu directly. It can only convert one. So classic menus add a step and no benefit.
- Decision: use block navigation. The header lives in the theme code so it is versioned and can differ for signed-in members. The footer uses the owner's Footer navigation post so the owner can still edit it.
- Signed-in members reach Pricing, Shop, Cart and Checkout only through the FluentCart upgrade and downgrade flow. The signed-in header therefore shows Account plus a link to the Botter's Lab and Support. Cart and Checkout are never typed into the menu.
- The My Account page in the screenshot shows the heading offset from the panel and the placeholder footer. The bespoke theme gives account pages a full-width wrapper with the heading aligned to the panel.

### Proposed menu contents

You said I may change the menus. The Shop link goes.

| Menu | Visitor | Items |
|---|---|---|
| Header | Signed out | Pricing. How it works. Affiliates. FAQ. Cart icon (shown only when the cart has items). Log in (Botter's Lab sign-in) |
| Header | Signed in to WordPress | Botter's Lab (button). Support. Account icon. Cart icon only when the cart has items |
| Footer, column Product | Everyone | Pricing. How it works. Affiliates. FAQ. Articles (added after launch) |
| Footer, column Help | Everyone | Support. Help centre. Feedback. Billing and invoices |
| Footer, column Legal | Everyone | Terms And Conditions. Privacy Policy. Legal with a submenu holding CCPA and DMCA and CRM Consent and Auto Top-Up Consent |

Cart and Checkout and Order Review and Receipt are never in a menu. FluentCart reaches them. The bottom credit row is removed.

The Log in link goes to the Botter's Lab sign-in. Its address is `lab.` plus the site's own domain plus `/login`. It is never typed in full. See section 9.

## 8. Open questions

- Which optional pages to build (Bot Market and Founders).
- Resolved: the Shop link is dropped. Articles stays hidden until after launch.
- Resolved: Fluent Support cannot preselect a topic from a link. The Feedback page already fixes its inbox with the shortcode attribute `business_box_id`. Menu links go to that page.
- Resolved: Yoast meta cannot be written to pages through the REST API. The theme registers the three fields for pages with `show_in_rest` so the sync can write them.
- Resolved: Subscription Activated is the plan purchase trigger. See `emails\00-strategy-one-list-and-tags.md` section 5.
- Open: whether the affiliate plugin's triggers fire when the app records a join. The app agent is asked to report.
- Resolved: new FluentCRM automation emails start from the default email template (`Helper::getDefaultEmailTemplate`). Each email can be switched to another template. So set the branded template as the default before building automations.
- Rule from the owner: use relative links wherever possible. Only links to unrelated external sites are typed in full unless they can come from data. The Botter's Lab is the one same-brand exception because it sits on a subdomain and cannot be relative.
- Not tested live: everything in the plugin check came from reading source.

## 9. Links and the domain

Decision: no link anywhere carries a typed domain. The site works on whichever domain it sits on.

| Where | Technique |
|---|---|
| Links to other pages on the same site | Root-relative paths such as `/pricing/` |
| Links to the Botter's Lab | Written `https://lab.{{domain}}/login` in the source. The token `{{domain}}` holds the base domain only. A small filter in the theme replaces it at render time with the site's own host from `home_url()` with any `www.` removed. Works in templates and page content and navigation links |
| Theme PHP | One helper function builds the Lab address. The header Log in link uses it |
| FluentCRM emails | The same token `{{domain}}` with absolute links such as `https://{{domain}}/pricing/`. Relative links do not work in an email. FluentCRM only parses codes written as group.key but it passes any other code through the `fluentcrm_smartcode_fallback` filter. The theme answers that filter for `{{domain}}` |
| Fluent Support and Fluent Forms and Better Docs | Audit for typed domains during the build and replace with the token or a shortcode |
| Prose that names the domain | Use the token. The brand name itself is Botterverse and is plain text |

Build tasks:
- Audit every page and menu and template and form and email template for the typed domain.
- Add the replacement filter and the helper to the theme.
- Add a check to the build that fails if a typed domain appears in the source.

Also decided: the FluentCRM template is branded but restrained. Plain background and one accent colour and one button.

### Typed domain audit (31 October, read-only)

The local site address is `https://botterverse.debbie`. The Botter's Lab host is `lab.` plus the base domain. The token rule gives the right result on any domain.

| Where | Typed text | Action |
|---|---|---|
| Pricing page | Three `lab.` buy links and a retention link | Replace with the Lab token |
| Privacy Policy App Version page | A `lab.` retention link | Replace with the Lab token |
| Footer template part | The same retention link | Replace with the Lab token. The footer is rebuilt anyway |
| Receipt page | A `lab.` register link | Replace with the Lab token |
| Header and Footer menus | Absolute links to the old local domain | Rebuild with root-relative paths |
| CCPA and DMCA pages | The old domain and a support address as legal text | Decided: tokenise. Links become root-relative. The email address is built from the token or a shortcode that reads the support address from a setting |
| FluentCRM From email and both Fluent Support inbox emails | A local test address on the old domain | Set per environment on the new domain. These are settings and cannot use the token |
| Three FluentCRM test contacts | On the old domain | Delete or recreate on the new domain |
| Fluent Forms and CRM templates and automations | None. There are none yet | Build with the tokens from the start |

Further facts from the plugin check:
- Fluent Forms has no forms yet. Set the global default style first so every new form takes the brand look.
- FluentCart pages are all shortcodes. Wrapper class names are in the verification report.
- The block theme can override Better Docs with same-named templates.
- Fluent Support is styled with CSS variables and `.fs_*` classes inside `#fluent_support_client_app`. Its login text is editable HTML in its settings.
