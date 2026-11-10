# BetterDocs update for the WordPress agent, 9 November 2026

From the coordinator of the Botterverse app build. The local site's BetterDocs articles were last changed on 1 November 2026. Since then the app's help source in `docs/help` has changed in almost every article. Bring the local site up to date. The owner does the same on the live site.

## The rule

`docs/help` in the app repository is the only source. Each published BetterDocs article must match its Markdown file: the title, the headings, the body and the links. Read each file's front matter for its `title`, `slug` and `category`. Work through every article rather than only the ones named below, since almost every help file changed after 1 November.

## What changed and why

1. **Title case** (merged 8 November). Headings, button names, link text and article titles are in title case. The full list of changed titles is the table "Help articles for the WordPress agent" in `docs/handoffs/title-case-wording.md`.
2. **Booster Packs** (merged 8 November). A credit pack is now a Booster Pack. Credits stay credits. In sentences "Bot Market" becomes "the Bot Market", while titles and headings that name it alone stay "Bot Market". The full list is the table "Help articles for the WordPress agent" in `docs/handoffs/booster-packs-rename.md`.
3. **Refunds.** No article may say or suggest that a booster pack or an auto top-up can be refunded. Credits have no cash value and are not refundable. The history label "Refunded purchase" is no longer listed in What Are Credits.
4. **Two-factor sign-in** (merged 9 November). A new article.

## Articles to add, rename or redirect

| Source file | Slug | What to do |
|---|---|---|
| `docs/help/credits-billing/booster-packs.md` | `booster-packs` | Replaces the article `credit-packs` ("Buy a credit pack"). Publish it as Buy a Booster Pack, move the old article to the bin and add a 301 redirect from `/docs/credit-packs/` to `/docs/booster-packs/` |
| `docs/help/account-data/two-factor-sign-in.md` | `two-factor-sign-in` | New article, Two-Factor Sign-In, in Account and Data |

The app links to help articles by slug through `config/help.php`, so every slug must match its file's front matter exactly.

## Categories to retitle

The `category:` values in the files stay as they are, since WordPress keys the categories on them. Change only the name each category shows:

| Category now | Name to show |
|---|---|
| First steps | First Steps |
| Building bots | Building Bots |
| Publishing and sharing | Publishing and Sharing |
| Paywall and selling access | Paywall and Selling Access |
| Earnings and payouts | Earnings and Payouts |
| Credits and billing | Credits and Billing |
| Analytics and testing | Analytics and Testing |
| Account and data | Account and Data |
| Help and support | Help and Support |
| Step-by-step guides | Step-by-step Guides |

Bot Market, Affiliates and Integrations and CRM are already in title case.

## Elsewhere on the site

- Pricing page, any FAQ and any page that names a credit pack: say Booster Pack. Say "the Bot Market" in sentences.
- FluentCart: the owner renames the product "Credit packs" to "Booster Packs" and changes its slug to `booster-packs` with a redirect from `/item/credit-packs/`. Point any link on the site at the new address once that is done.
- The Terms are not on WordPress: the owner saves the new version in the app's Back Office.

## When it is done

Report to the owner in chat:
- every article changed or added
- the redirect and the category names
- any article whose text you could not match to its source file, with the reason

Never change a file in the app repository.
