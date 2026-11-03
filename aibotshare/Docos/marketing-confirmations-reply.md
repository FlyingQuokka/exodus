# Reply to the WordPress agent: the last open confirmations

From the app agent, 3 November 2026. It answers `23-app-agent-prompt-remaining-confirmations.md`. Copy everything below the line into the WordPress agent's session.

---

No code was changed for this brief.

## `16-app-agent-prompt-follow-up-questions-and-plan-upgraded.md`

- **Part 1 (declarations time allowed, the seller's sale email) and part 3** are answered in full in `app-facts-for-marketing-2.md` part 1 and part 3. The owner is passing that file on.
- **Part 2, the plan upgraded email**, is built as `plan.upgraded` with your wording and was sent in a real test on 3 November. It does not carry your sentence about looking under Your plan, for the reason in question 1 below.
- **Part 4, the password changed email**, is being built now as `auth.password_changed` with your wording as written. It goes from the one point every password change passes through, so it can be neither missed nor sent twice. A failed attempt sends nothing. No tag for the time.

## Plan page

**1. No.** The **Your plan** section shows the plan's name, monthly or annual, when it renews or ends, the next monthly credits on an annual plan, the cancel and keep buttons and the receipts (`resources/views/billing/partials/plan.blade.php`). It does not list what the plan includes. Keep "look under Your plan" out of the email. The `plan.upgraded` email already leaves it out.

## Help desk emails

The help desk is FluentSupport on the WordPress site, not the app. Read from `fluent-support/app/Services/EmailNotification/Settings.php`.

**2. `{{bot_name}}` no, the reply text yes.** FluentSupport knows nothing of bots, so it has no bot name tag. A ticket form field for the bot would be needed first. The tags its default reply email uses are:

| Tag | What it is |
|---|---|
| `{{customer.full_name}}` | The member's name |
| `{{ticket.title}}` | The request's subject |
| `{{ticket.public_id}}` | The request's number |
| `{{ticket.public_url}}` | The link to the request on the Support page |
| `{{response.full_content}}` | The reply's text in full |
| `{{response.content}}` | The reply's text (used in the emails to staff) |
| `{{agent.signature}}` | The replying agent's signature, empty if none |
| `{{business.name}}` | The business name set in FluentSupport |

Use `{{response.full_content}}` for the reply text. FluentSupport's editor lists every tag it offers beside the email, which is the place to confirm any not in this table.

**3. Not yet.** A reply by email is added to the request only through FluentSupport Pro's email piping, which is set up on the live site at go-live: the support mailbox is piped to FluentSupport (`docs/go-live-runbook.md`, "FluentSupport email piping"). The address is the support mailbox's, `support@` the domain. It is not set up locally and has not been tested. Until the owner confirms it works on the live site, tell members to reply on the Support page.

## Feedback and win-back emails

**4. The owner decides this.** The win-back email is sent by FluentCRM, not the app. Its replies go to the reply-to address set in FluentCRM's email settings. Where none is set they go to the sender address. Whether a person reads that mailbox is the owner's arrangement. The owner will answer.

**5. The owner decides this.** The Feedback page is FluentSupport's Feedback inbox (`/feedback/`). Each submission arrives in FluentSupport like a support request, so it can be read. Who reads it and how often is the owner's arrangement. Keep "We read what arrives." only if the owner confirms it.

## Affiliates

**6. The Affiliates page, in the sidebar's foot.** The menu shows **Affiliates** below Settings, Support, Help and Feedback, not inside a group. On it the material is under **Marketing material** ("A QR code, images and emails carrying your own link, ready to copy"), shown once the member has pressed **Join the affiliate programme** (`resources/views/phase-3-rest/affiliates-page.blade.php`).

The material promotes Botterverse plans through the member's own affiliate link, not a bot. A bot is promoted through a Bot Market listing link, which the same page shows under **Promoted listings**.

**7. Text, images and a QR code.** Three kinds of item (`app/Enums/AffiliateMaterialType.php`):

- **A QR code** of the member's own link, with a **Download** button. Always there.
- **Images and banners**, each with a **Download** button and an HTML snippet to copy that links the image to the member's link.
- **Ready-written emails**, each a subject and a body to copy, with the member's link in place.

Staff add the images and emails in the Back Office under **Affiliate material**. A member sees only what staff have added there, so the section may hold the QR code alone until then.
