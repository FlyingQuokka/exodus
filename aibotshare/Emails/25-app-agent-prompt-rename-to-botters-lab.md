# Prompt for the app coding agent: rename "Botter's Lab" to "Botters Lab"

Copy everything below the line into the app agent's session.

---

## Brief: the members area is now called Botters Lab

The owner has decided the name should have no apostrophe, because the Lab belongs to all botters. The new name is **Botters Lab** (capital B and capital L, no apostrophe, no other punctuation). "Botterverse" stays the brand and the website name. The Lab host stays `lab.<domain>`.

The website side is already changed: every page and every email I send now says Botters Lab so the subject prefix on my emails is `[Botters Lab]`. The app must change at the same time, because members see both.

### What to change

Replace every form of the old name (straight apostrophe, curly apostrophe `’`, `&#8217;` and `&#039;`) with **Botters Lab**. Please check at least these places:

1. **Email subject prefix.** `[Botter’s Lab]` becomes `[Botters Lab]` on every app email.
2. **Email templates.** Every body that names the Lab, including the seeded templates and any saved row staff have not edited. Use a data migration for the saved rows, as before.
3. **Screens.** Page titles, headings, menu labels, buttons, toasts, empty states and help text.
4. **Back Office.** Settings labels, email template names and descriptions plus the CRM Integration labels.
5. **Legal text.** The Terms, the Privacy Policy and the Auto top-up statement, where they use the name. See the question below before you publish a new version.
6. **The checkout guard plugin** (`public/lab/wordpress/plugins/btv_checkout_guard`). Its default email wording (the buyer account email, the file header text and the comments that appear in member-facing strings) and its tests. Also the saved option `btv_checkout_guard_buyer_email_body` on the local site, which holds the old wording. Tell me when this is done so I can re-test the billing pages.
7. **Config and metadata.** The app name, page `<title>` tags, meta descriptions, Open Graph text and any Stripe statement descriptor or product text that names the Lab.
8. **Repository docs and tests** that quote the old name.

### Questions

1. **Terms and Privacy versions.** Changing the name inside the Terms means adding a new version, which emails every member who accepted and asks them to accept again. Should the name change wait for the next real change to those documents or go in as its own version? Say what you recommend. I will ask the owner.
2. **Anything that must keep the old name.** For example a legal document that members already accepted. List each place you leave unchanged and why.
3. **How many places did you change?** Give a count per area (emails, screens, Back Office, legal, plugin).

### Not in scope

Do not rename the host `lab.<domain>`. Do not edit `Docos\member-guide.docx`. The owner will update that file.

### Report back

Number each answer. Wording rules for anything you write back: British English and no exclamation marks. Say "the Botter Support Team" and never "our team".
