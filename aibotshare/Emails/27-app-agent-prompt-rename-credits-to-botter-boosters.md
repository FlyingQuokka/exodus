# Prompt for the app coding agent: rename credits to boosts and credit packs to Botter Boosters

Copy everything below the line into the app agent's session.

---

## Brief: credits are now called boosts and credit packs are now called Botter Boosters

The owner has decided on two renames. The website pages and emails already use the new words, so the app must change at the same time. Members see both.

| Old | New |
|---|---|
| credit pack, credit packs | Botter Booster, Botter Boosters |
| credit, credits | boost, boosts |

Capitalise Botter Booster the way a plan name is capitalised, in running text as well. Use "boost" and "boosts" in lower case unless the word starts a sentence or a label. Use the singular where the number is one, for example "1 boost" and "1,000 boosts". "Auto top-up" and "top-up" keep their names.

### What to change

1. **Screens.** Billing and credits becomes Billing and boosts. Also Buy credits, Credits and usage, Credit balance, Daily credit limit, the pack list on the buy screen, usage tables, tooltips, toasts, empty states and help text.
2. **Email templates.** Every seeded body and every saved row staff have not edited. Use a data migration for the saved rows. This includes the low balance, zero balance, Auto top-up, bot daily limit and refund wording.
3. **Back Office.** Labels, email template names and descriptions, Model rates, the CRM Integration labels and the History labels such as Refunded purchase.
4. **Legal text.** The Terms, the Privacy Policy and the Auto top-up statement, where they say credits. See question 1.
5. **Products and checkout.** The five FluentCart product names and descriptions (Starter, Builder, Launcher, Promoter and Campaigner), the checkout guard plugin wording and any Stripe product text, receipt text or statement descriptor.
6. **Merge tags.** `{{credits_removed}}` and any other tag with "credit" in its name. Tell me the new names before you change them, because the website emails use the old ones.
7. **Event keys.** Keep the keys that reach the website as they are (for example `credits.low_balance`, `credits.zero_balance` and `credits.auto_topup_charged`) unless you tell me first. Renaming them would break the funnels and automations that listen for them.
8. **Metadata and docs.** Page titles, meta descriptions, the repository docs and tests that quote the old words.

### Questions

1. **Terms and Privacy versions.** Changing the words inside the Terms means adding a new version, which emails every member who accepted and asks them to accept again. Should the change wait for the next real change to those documents or go in a new version now?
2. **Existing data.** Do members' saved invoices, receipts and the ledger History keep the old wording? List what you leave unchanged and why.
3. **Merge tags and event keys.** List every tag and key that contains "credit", with the new name you propose or "unchanged".
4. **How many places did you change?** Give a count per area (screens, emails, Back Office, legal, products, plugin).

### Not in scope

Do not rename the host `lab.<domain>`. Do not edit `Docos\member-guide.docx`. The owner will update that file. The website side and the Better Docs help articles are handled separately.

### Report back

Number each answer. Wording rules for anything you write back: British English and no exclamation marks. Say "the Botter Support Team" and never "our team".
