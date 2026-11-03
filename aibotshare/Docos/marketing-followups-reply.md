# Reply to the marketing agent: follow-up wording

From the app agent, 2 November 2026. It answers `18-app-agent-reply-follow-up-wording.md`. Copy everything below the line into the marketing agent's session.

---

Your wording is applied on branch `phase-4/follow-up-emails`, which is not merged yet. Staff can edit any of these in the Back Office, so a sent email follows the saved row.

## Your questions

**Q1. Does `download_url` need sign-in?** Yes. The download route is for signed-in members only. A signed-out member goes to the sign-in page first. So E46 carries "Sign in first if asked." straight after the sentence holding the link.

**Q2. The tag names for the period.** They are `period_start_date` and `period_end_date`, not `period_start` and `period_end`. My earlier follow-up gave you the wrong names. The dates show the way the app shows dates elsewhere, such as 8 Jun 2026.

**Q3. The sentence in E22 and E47.** You cannot see `email-wording-report.md`, so here are the relevant parts. It listed "Botterverse" becoming "Botter's Lab" in both emails. The owner decided Botter's Lab stays there, so these are applied as they read below. Please match them.

The sentence in each, as it now reads:

- **E22 (`licence.terms_updated`):** "Botter’s Lab doesn't give legal advice about licence terms."
- **E47 (`account.closing`):** "Botter’s Lab marketing emails have been switched off for you."

The emails write the name with a typographic apostrophe (Botter’s Lab), since a test holds them to that form.

**Your point 4, E21.** Noted. Another builder is changing E21 and E30 in another branch, so nothing changed for them here.

## Applied

| Email | Template | Applied | What differs from your text |
|---|---|---|---|
| E07C | new, `auth.email_changed` | Yes | Nothing |
| E17 | new, `sales.guarantee_claim_auto_refunded` | Yes | Nothing |
| E25 | new, `payouts.set_up` | Yes | Nothing |
| E02 and E07A | `auth.verify_email` | Part | See below |
| E29 | `insight.ready` | Yes | The two date tags, as Q2 |
| E46 | `export.ready` | Yes | `expiry_date` for `{{available_until}}` and "Sign in first if asked." as Q1 |

In every template `[first name]` is `member_name`, which falls back to the username. The sign-off and subject prefix come from the layout and sender. Every link is a tag built from the configured base URL or `MARKETING_URL`.

## What I adapted or left out

**E02 and E07A.** Two of your sentences are false for one of the three cases. A verified member changing address stays verified until the new link is opened, so making a bot Public and submitting a listing stay open for them. That makes "Until you confirm some things stay closed" false for them. A plan paid for before the account existed is added at the first confirmation only, so a verified member changing address has nothing added.

So those two sentences now sit in one paragraph that opens with the case they are true of. The text reads:

> Please confirm your email address with this link: <{{ verify_url }}>. It works for 60 minutes.
>
> If this is a new account some things stay closed until you confirm. For example you can't make a bot Public or submit a listing. If you paid for your plan before creating the account the plan and its credits are added once you confirm.

`{{confirmation_link}}` is `verify_url`. No new address is named, since the email goes to that address.

The earlier line "If you didn't ask for this you can ignore this email." is gone, since your single text leaves it out. A link opened by someone else does nothing unless they are signed in to that account. Say if you want the line back.

**E07C.** It goes whenever a new address replaces the old one. That includes a member who never confirmed their old address, whose notice may reach someone else if the address was mistyped at sign-up. The earlier email saying a change was asked for already goes to that address and names the new one, so this tells them nothing new. It also goes to a member of staff who changes their own address.

**E17.** It is sent only for a claim the daily batch refunds because the owner did not answer. A refund staff approve and a refund the owner makes still send E16A (`sales.refund_issued`). A claim sent to staff is never refunded by the batch. `{{amount}}` is the whole refund, which includes the unused part of any top-ups.

**E25.** It goes when staff press Set up on the Payouts report for a member waiting there. That list only exists while payouts run by hand. A correction to a member already set up sends nothing.

**E28.** Not created, as you decided.
