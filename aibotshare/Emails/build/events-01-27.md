# Event emails 1 to 27

Transactional emails for events 1 to 27 of the event plan (`06-event-emails-plan.md`): purchase and sign-in and account and bots and Bot Market and earnings and withdrawals. Where the plan says the app sends the email the wording here is the template the owner can use.

**Events not written (covered or not needed):** none. Every event from 1 to 27 is marked Yes or Optional in the plan. Optional events are written and marked Optional in the heading: 3 and 17 and 19.

**Variants:** event 1 has two (1A and 1B). Event 2 has two (2A and 2B). Event 7 has four (7A to 7D). Event 16 has two. Event 20 has two. Event 23 has three (23A to 23C). Every variant is a separate email below.

**Placeholders used**

| Placeholder | Meaning |
|---|---|
| `{{contact.first_name}}` | Member's first name |
| `{{domain}}` | Base domain |
| `{{billing_password_link}}` | Link that sets the billing login password (event 1) |
| `{{create_account_link}}` | Link that creates the Botters Lab account (event 1) |
| `{{confirmation_link}}` | Email confirmation link (event 2 and 7A) |
| `{{reset_link}}` | Password reset link (events 4 and 6) |
| `{{username}}` | The member's username (event 5) |
| `{{new_email}}` | The new email address in an email change (events 7B and 7C) |
| `{{bot_name}}` | Name of the bot or listing concerned |
| `{{blocked_categories}}` | Categories named by the publish check (event 10) |
| `{{plan_name}}` | Name of the member's plan after a change (event 14) |
| `{{refund_date}}` | Date a claim is refunded automatically (event 15) |
| `{{amount}}` | A money amount stated by the app for that event |
| `{{licence_terms_link}}` | Link to the licence terms page (event 22) |
| `{{seller_username}}` | The seller's username (event 22) |
| `{{buyer_username}}` | The buyer's username (event 23A) |
| `{{your_share}}` | The seller's share of a sale (event 23A) |
| `{{rating}}` | Star rating of a review (event 23B) |
| `{{commission_amount}}` | Commission amount (event 23C) |

---

## E01A - Purchase email with two links (day 0, new buyer without a help desk sign-in)

**Subject:** [Botterverse] Your plan is ready - two links to use

**Body:**

Hi {{contact.first_name}},

Thank you for your purchase. This email holds the two links you need to start.

1. Set the password for your billing login: {{billing_password_link}}. The billing login is where you find invoices, change your card and cancel your plan. The link works once and expires after 24 hours.
2. Create your Botters Lab account: {{create_account_link}}. Use the same email address you bought with so your plan reaches your account.

If you already have a Botters Lab account under this email address, you only need to sign in and verify your email address. Your plan is added automatically.

Your Botter Support Team

**Notes**
- Facts: one email with two links. The password link works once and expires after 24 hours (digest 1.4 and 10.8). The billing login is separate from the Botters Lab sign-in.
- Automation: none. Sender is Cart [verify with the app agent]. Review that it holds both links and that they are never repeated in the welcome sequence.
- Never duplicated elsewhere. The welcome email S01 refers to this email and must not contradict it.

---

## E01B - Purchase email without the billing link (day 0, buyer with an existing help desk sign-in)

**Subject:** [Botterverse] Your plan is ready - create your account

**Body:**

Hi {{contact.first_name}},

Thank you for your purchase. You already have a help desk sign-in under this email address, so we haven't created a separate billing login.

Use your help desk sign-in for invoices and card changes. To start building, create your Botters Lab account here: {{create_account_link}}. Use the same email address you bought with so your plan reaches your account.

If you already have a Botters Lab account under this email address, you only need to sign in and verify your email address. Your plan is added automatically.

Your Botter Support Team

**Notes**
- Facts: a member with an existing help desk sign-in under that email has no billing login created and uses the help desk sign-in (digest 10.8 and event 1).
- Automation: none. Sender is Cart [verify with the app agent].
- Confirmed by the app agent (answer 29): the billing login and the help desk sign-in are the same WordPress account. What the customer area then shows is for FluentCart to decide and was not tested.

---

## E02A - Email confirmation link (day 0, new account)

**Subject:** [Botterverse] Confirm your email address

**Body:**

Hi {{contact.first_name}},

Your Botters Lab account has been created. Confirm your email address with this link: {{confirmation_link}}. It works for 60 minutes.

Some things stay closed until you do. For example, you can't make a bot Public or submit a listing. If you paid for your plan before creating your account, the plan and its credits are added once you confirm.

Your Botter Support Team

**Notes**
- Facts: the page **Please confirm your email address** says some things stay closed until the link is opened (digest 2.2 and 2.3).
- Automation: none. Sender is App [verify with the app agent]. Template wording for the owner.

---

## E02B - Email confirmation link sent again (on request)

**The app sends one text for E02A, E02B and E07A (app agent, 2 November 2026). The final text is in `../../Docos/marketing-followups-reply.md`. This draft is kept for the record.**

**Subject:** [Botterverse] Your new confirmation link

**Body:**

Hi {{contact.first_name}},

You asked us to send the link again. Here is a fresh one: {{confirmation_link}}. It works for 60 minutes.

Once you confirm your email address, making a bot Public and submitting a listing open up.

Your Botter Support Team

**Notes**
- Facts: **Send it again** sends a fresh link. The banner variant is **Send the link again** (digest 2.2 and 2.3).
- Confirmed by the app agent (answers 30 and 31): each confirmation link is signed with its own 60 minute expiry and an earlier link keeps working until it expires. The body does not say the earlier link stops.
- Automation: none. Sender is App [verify with the app agent].

---

## E03 - Plan activated after confirmation - Optional (day 0, buyer who paid before creating an account)

**Subject:** [Botterverse] Your plan is active

**Body:**

Hi {{contact.first_name}},

You've confirmed your email address, so your plan and its credits have been added to your Botters Lab account.

[Sign in](https://lab.{{domain}}/login) with your username and your password. Your [Dashboard](https://lab.{{domain}}/) shows your credit balance and how many bots your plan allows.

Your Botter Support Team

**Notes**
- Facts: "the plan and its credits are then added" once the email is confirmed (digest 2.3). Sign-in takes the username and never the email address.
- Automation: none. Sender is None because the guide shows a notice only. The welcome sequence covers this moment so this email is optional.

---

## E04 - Forgotten password (any time, on request)

**Subject:** [Botterverse] Choose a new password

**Body:**

Hi {{contact.first_name}},

We received a request to choose a new password for your Botters Lab account. Use this link to choose one: {{reset_link}}. The link works for the next hour. If you ask for another link, the earlier one stops working.

If you didn't ask for this, you can ignore this email and your password stays as it is.

Your Botter Support Team

**Notes**
- Facts: **Send me a link** sends a link to choose a new password to the email on the account (digest 2.4). The request is made by entering the username.
- Confirmed by the app agent (answers 30 and 31): the reset link works for 60 minutes (fixed in config) and a new request deletes the earlier token. A repeat request within 60 seconds is throttled so no fresh link goes and the earlier one still works.
- Automation: none. Sender is App [verify with the app agent].

---

## E05 - Forgotten username (any time, on request)

**Subject:** [Botterverse] Your username

**Body:**

Hi {{contact.first_name}},

You asked us to send your username. It is {{username}}.

Use it with your password on the [Sign in](https://lab.{{domain}}/login) page of the Botters Lab. The Sign in page takes your username and never your email address.

Your Botter Support Team

**Notes**
- Facts: **Send me my username** emails the username. The Sign in page takes **Username** and **Password** (digest 2.4).
- Automation: none. Sender is App [verify with the app agent].

---

## E06 - Billing login password reset (any time, on request)

**Subject:** [Botterverse] Reset your billing login password

**Body:**

Hi {{contact.first_name}},

You asked to reset the password for your billing login. Use this link: {{reset_link}}.

The link works once and expires after 24 hours. Your billing login is separate from your Botters Lab sign-in, so this doesn't change your Botters Lab password.

If you didn't ask for this, you can ignore this email.

Your Botter Support Team

**Notes**
- Facts: **Forgotten password?** on the billing sign-in page then **Send me a link**. The link works once and expires after 24 hours (digest 10.8).
- Automation: none. Sender is Cart [verify with the app agent].

---

## E07A - Email change: link to the new address (on request)

**Subject:** [Botterverse] Confirm your new email address

**Body:**

Hi {{contact.first_name}},

You asked to change the email address on your Botters Lab account to this one. Confirm the change with this link: {{confirmation_link}}.

Your change also carries to your billing account. If you didn't ask for this, you can ignore this email.

Your Botter Support Team

**Notes**
- Facts: **New email** and **Current password** then **Change email**. A link goes to the new address and the change carries to the billing account (digest 12.2).
- Automation: none. Sender is App and sent to the new address [verify with the app agent].

---

## E07B - Email change: notice to the old address (on request)

**Subject:** [Botterverse] A change of email address was asked for

**Body:**

Hi {{contact.first_name}},

Someone asked to change the email address on your Botters Lab account to {{new_email}}. The change only happens once the link we sent to that address is used.

If this was you, there is nothing to do. If it wasn't you, please contact the Botter Support Team at https://{{domain}}/support/ and change your password in [Settings](https://lab.{{domain}}/settings).

Your Botter Support Team

**Notes**
- Facts: the current address is told a change was asked for (digest 7 in the event list). Password change is in **Settings** under **Account**.
- Advice approved by the owner on 2 November 2026. An unwanted change needs the current password, so changing the password is the right step.
- Automation: none. Sender is App and sent to the old address [verify with the app agent].

---

## E07C - Email change: confirmation to the old address (once done)

**Subject:** [Botterverse] Your email address has been changed

**Body:**

Hi {{contact.first_name}},

The email address on your Botters Lab account is now {{new_email}}. Emails for your account will go to the new address from now on.

If you didn't make this change, please contact the Botter Support Team at https://{{domain}}/support/ straight away.

Your Botter Support Team

**Notes**
- Facts: the old address receives a confirming email once the change is done (event list row 7).
- Automation: none. Sender is App and sent to the old address [verify with the app agent].

---

## E07D - Email change: billing email updated (once done)

**Subject:** [Botterverse] Your billing email has been successfully updated

**Body:**

Hi {{contact.first_name}},

Your billing email has been successfully updated. Your billing account now holds {{new_email}} and your receipts will be sent there.

Nothing else is needed from you.

Your Botter Support Team

**Notes**
- Facts: page text **Your billing email has been successfully updated** (later than **Your billing email will follow shortly.**). Also sent after a delayed or manual finish (digest 12.2).
- Confirmed by the app agent (answer 28): the Billing page says the cart software and payment processor send receipts and invoices to the email on the account. An email change carries through to Stripe and the billing login. The app sends no receipt of its own.
- Automation: none. Sender is App [verify with the app agent].

---

## E08 - Password change (when the password is changed)

**Subject:** [Botterverse] Your password has been changed

**Body:**

Hi {{contact.first_name}},

The password for your Botters Lab account has just been changed.

If this was you, there is nothing to do. If it wasn't you, use Forgotten password? on the [Sign in](https://lab.{{domain}}/login) page to choose a new one and contact the Botter Support Team at https://{{domain}}/support/.

Your Botter Support Team

**Notes**
- Facts: security emails are always sent (digest 12.1). The guide gives no specifics for this email.
- [DECISION: the app agent says (answer 32) the app sends no password change email. Settings shows "Your password is changed." and signs out other devices. Ask the app agent to add this email or drop E08. The billing login does send WordPress's own Password Changed notice.]
- Automation: none. Sender is App [verify with the app agent].

---

## E09 - Bot blocked by the model provider (when it happens)

**Subject:** [Botters Lab] Your bot has been switched to Personal

**Body:**

Hi {{contact.first_name}},

The model provider refused the text of {{bot_name}}, so the bot is now Personal. A Personal bot can't be shared or embedded and has no customers.

Open the bot from [Bot list](https://lab.{{domain}}/bots) to see the reason shown there. Change what the provider objected to and press Save. Then press Make Public again.

Your Botter Support Team

**Notes**
- Facts: "The model provider refused this bot's text, so the bot is Personal" and the reason is shown (digest 4.3). Every saved change to a Public bot runs the safety check again (3.3).
- Automation: none. Sender is App [verify with the app agent].

---

## E10 - Public bot switched to Personal after a blocked category (when it happens)

**Subject:** [Botters Lab] Your bot has been switched to Personal

**Body:**

Hi {{contact.first_name}},

The check found that {{bot_name}} falls into a category that isn't allowed: {{blocked_categories}}. The bot is now Personal, so its link and embed have stopped and it has no customers.

Open the bot from [Bot list](https://lab.{{domain}}/bots) and review its name, description, instructions and knowledge files. Press Save then Make Public once the text is changed. The full list of banned categories is in the terms.

If you think the check was wrong, contact the Botter Support Team at https://{{domain}}/support/.

Your Botter Support Team

**Notes**
- Facts: "A blocked category switches the bot to Personal with an email". The check looks at name and description and instructions and knowledge files. Disputes go through Support (digest 4.3).
- Automation: none. Sender is App [verify with the app agent].

---

## E11 - Declarations not re-confirmed in time (when it happens)

**Subject:** [Botters Lab] Please confirm your declarations again

**Body:**

Hi {{contact.first_name}},

The declarations for {{bot_name}} weren't confirmed again in the time allowed, so the bot has been switched to Personal. Its link and embed have stopped and it has no customers.

Declarations need confirming again after a model change, an integration change, a knowledge change or a new finding by the check. Open the bot from [Bot list](https://lab.{{domain}}/bots) and go to Mode. Tick the declarations that apply and press Confirm declarations. Then press Make Public.

Your Botter Support Team

**Notes**
- Facts: re-confirmation is needed after a model change and integration change and knowledge change or a new finding. If not confirmed in time the bot switches to Personal and the member is emailed (digest 4.2 and 4.1).
- Confirmed 3 November 2026: "in the time allowed" is the wording to keep. No length of time is stated.
- Automation: none. Sender is App [verify with the app agent].

---

## E12 - Daily credit limit reached (once per day per bot)

**Subject:** [Botters Lab] A bot has reached its daily credit limit

**Body:**

Hi {{contact.first_name}},

{{bot_name}} has reached its Daily credit limit for today. Free visitors are told the bot has reached its limit for the day. Paid buyers and you can carry on.

The limit resets at midnight UTC. To change it, open the bot from [Bot list](https://lab.{{domain}}/bots) and go to Sharing and embed. Enter a new Daily credit limit and press Save. You'll receive this email once per day.

Your Botter Support Team

**Notes**
- Facts: **Daily credit limit** is in **Sharing and embed**, a section of the bot's page. At the limit free visitors are told and paid buyers and the owner carry on. Resets at midnight UTC and the owner is emailed once that day (digest 4.4).
- Automation: none. Sender is App [verify with the app agent].

---

## E13 - Bot paused by staff (when it happens)

**Sent by the app. Not built in FluentCRM.** The wording is in `../13-app-agent-prompt-paused-and-withdrawal-emails.md` (part A).

**Subject:** [Botters Lab] Your bot has been paused by the Botter Support Team

**Body:**

Hi [first name],

[bot name] has been paused by the Botter Support Team. Its status in your Bot list now reads Paused by the Botter Support Team. Only the Botter Support Team can unpause it.

To find out more or to ask for a review, contact the Botter Support Team through the Support link in the menu. Please include your username and the name of the bot.

Your Botter Support Team

**Notes**
- Facts: status **Paused by the Botter Support Team**, only staff can unpause (digest 3.10 and 3.11). Ticket advice: username and bot and what was done (13.1).
- The reason for the pause is not given because the guide lists none.
- The merge fields are the app's own placeholders ([first name] and [bot name]) because the app sends this email. FluentCRM smart codes are not used.
- Owner decision 1 November 2026: build it. Waiting for the app agent's report.

---

## E14 - Plan changed to a lower tier (app template plan.downgraded)

**Sent by the app. Not built in FluentCRM.** The app agent confirmed on 1 November 2026 that the app already sends this email from `MemberTier::afterChange` using the template `plan.downgraded`. Staff can edit the wording under Email templates in the Back Office. The wording below is what the app sends today. It now covers only a real move to a lower tier (the rare case) because a plan that ends has its own email (E14b).

**Subject:** Your plan has changed

**Body:**

Hello {{ member_name }},

Your plan has changed, so some of what your account can do has changed with it.
   * Bots paused by the plan: {{ paused_bot_count }}

Bots over your new plan's limit are paused, the most recently created first. You can choose which to keep running from your Bot list. Upgrading again starts them all.

Paywalls, listings and bot styles follow the features of your plan. Remaining credits from any credit packs you bought are untouched. Your included credits change to your new plan's at your next renewal.

[Open your Bot list]
[Open Billing and credits]

**Notes**
- Facts: when the plan drops bots over the limit are paused newest first and **Keep this bot** chooses which run (digest 3.10 and 3.11 and 10.6).
- A member now moves down by cancelling and buying again so this email normally does not fire on a move to a lower plan.

---

## E14b - Plan ended (app template plan.ended, new)

**Sent by the app. Not built in FluentCRM.** Wording in `../14-app-email-wording-plan-ended-and-fewer-bots.md` (part A). Replaces `plan.downgraded` when the tier goes to none.

**Subject:** Your plan has ended

**Body:**

Hello {{ member_name }},

Your plan has ended. Your account is still open and your data is kept.

Your bots are paused until you buy a plan again.
   * Bots paused: {{ paused_bot_count }}

When your new plan starts, your bots come back, oldest first, up to the new plan's bot limit. Remaining credits from any credit packs you bought are untouched. Included credits you had not used have been reset.

[See the plans]
[Open Billing and credits]

**Notes**
- No overlap with O15-4. The app agent confirmed on 1 November 2026 that it sends `plan.ended` only where the member did not press Cancel (failed payment or FluentCart's own Cancel button). A member who pressed Cancel receives O15-4 only. A banned member receives the ban email only.
- Template names are `plan.ended` and `plan.fewer_bots`. The sign-off comes from the app's email layout and the subject receives the [Botters Lab] prefix automatically.

---

## E14c - New plan allows fewer bots (app template, new)

**Sent by the app. Not built in FluentCRM.** Wording in `../14-app-email-wording-plan-ended-and-fewer-bots.md` (part B). Sent when a member with no plan buys a plan whose bot limit is below the number of bots they own.

**Subject:** Your new plan allows fewer bots

**Body:**

Hello {{ member_name }},

Welcome back. Your new plan allows fewer bots than you have.
   * Bots allowed by your plan: {{ bot_limit }}
   * Bots paused: {{ paused_bot_count }}

Your oldest bots are running up to the limit. The rest stay paused. To choose which bots run, open your Bot list and press Keep this bot on each one you want to run. Moving up to a larger plan starts the rest again.

[Open your Bot list]
[Open Billing and credits]

**Notes**
- Not sent when no bots are paused.

---

## E15 - Guarantee claim received (seller)

**Subject:** [Botters Lab] A buyer has sent a claim on {{bot_name}}

**Body:**

Hi {{contact.first_name}},

A buyer has sent a Money-back guarantee claim on {{bot_name}}. Open [Sales](https://lab.{{domain}}/sales) to see the claim and the reason given.

You can press Refund or press Ask the Botter Support Team to review. If you do nothing, the claim is refunded automatically on {{refund_date}}. A guarantee refund takes the full price from your earnings even if that takes them below zero.

Your Botter Support Team

**Notes**
- Facts: the owner is emailed. **Sales** shows the claim and reason and automatic refund date. Actions **Refund** or **Ask the Botter Support Team to review**. A guarantee refund takes the full price from earnings even below zero (digest 5.6).
- Automation: none. Sender is App [verify with the app agent].

---

## E16A - Guarantee claim decided: refunded (buyer)

**Subject:** [Botters Lab] Your claim on {{bot_name}} has been refunded

**Body:**

Hi {{contact.first_name}},

Your claim on {{bot_name}} has been decided and the amount of {{amount}} is being refunded to you. Your bank may take a few days to show it.

Your access to the bot ends once the refund has settled. If you have a question about the refund, contact the Botter Support Team at https://{{domain}}/support/.

Your Botter Support Team

**Notes**
- Facts: the buyer is emailed when the claim is decided (digest 5.5). **Request a refund** on **Bots I bought** asks **Why are you asking for a refund?**.
- Confirmed by the app agent (answer 39): after a paywall refund the access is revoked once the refund has settled. A refunded Bot Market Transfer returns the bot to the seller and a refunded Multi-sell deletes the buyer's copy. This email covers the paywall guarantee only.
- Automation: none. Sender is App [verify with the app agent].

---

## E16B - Guarantee claim decided: not refunded (buyer)

**Subject:** [Botters Lab] Your claim on {{bot_name}} has been decided

**Body:**

Hi {{contact.first_name}},

Your claim on {{bot_name}} has been decided and it wasn't approved for a refund.

If you'd like this looked at again, contact the Botter Support Team at https://{{domain}}/support/. Please say which bot it was and what happened.

Your Botter Support Team

**Notes**
- Facts: the buyer is emailed when the claim is decided (digest 5.5).
- Confirmed by the app agent (answer 40): only the Botter Support Team can decline a guarantee claim. The buyer is emailed either way ("Your guarantee claim was not approved" in the app). The refusal email gives no reason.
- Automation: none. Sender is App [verify with the app agent].

---

## E17 - Guarantee claim refunded automatically - Optional (buyer)

**Subject:** [Botters Lab] Your claim on {{bot_name}} has been refunded

**Body:**

Hi {{contact.first_name}},

The owner of {{bot_name}} didn't answer your Money-back guarantee claim in time, so it has been refunded automatically.

The refund is {{amount}}. Your bank may take a few days to show it. If you have a question about it, contact the Botter Support Team at https://{{domain}}/support/.

Your Botter Support Team

**Notes**
- Facts: a claim not answered by the owner is refunded automatically on the date shown on **Sales** (digest 5.6). The guide shows a notice on **Sales** and no email beyond the decision email.
- Automation: none. Sender is App [verify with the app agent]. Optional because event 16A may already cover this.

---

## E18 - Bot Market purchase (buyer)

**Subject:** [Botters Lab] Your new bot is ready

**Body:**

Hi {{contact.first_name}},

Your payment for {{bot_name}} is confirmed. The bot is in your [Bot list](https://lab.{{domain}}/bots) and is marked Purchased.

Before you use it with customers, enter the credentials for any integrations and switch each one on. Then confirm the declarations. The bot runs on your own credits. You can read the terms any time under Licence terms on the bot.

Your Botter Support Team

**Notes**
- Facts: once payment is confirmed the bot is in **Bot list** marked **Purchased** and the buyer is emailed. A bought bot arrives with integrations switched off and declarations cleared. Bought bots run on the buyer's credits (digest 6.3 and 6.4 and 6.2 and 4.2).
- Automation: sender is App [verify with the app agent]. Behaviour email O12 follows seven days later. This email does not mention refunds because O12 covers them.
- The receipt is a separate email from the cart (event 39).

---

## E19 - Bot Market purchase refunded as undeliverable - Optional (buyer)

**Subject:** [Botters Lab] Your payment has been refunded

**Body:**

Hi {{contact.first_name}},

Your payment for {{bot_name}} has been refunded in full because the bot could no longer be delivered.

Nothing more is needed from you. You can look at other bots under [Browse](https://lab.{{domain}}/market).

Your Botter Support Team

**Notes**
- Facts: a payment that can no longer be delivered is refunded in full. The page text is **Your payment has been refunded** (digest 6.3).
- Automation: none. Sender is None because the guide shows a notice only. Optional.

---

## E20A - Bot Market refund decision: approved (buyer)

**Subject:** [Botters Lab] Your refund request has been approved

**Body:**

Hi {{contact.first_name}},

The Botter Support Team has approved your refund request for {{bot_name}}. The refund is {{amount}}, which is the price you paid less a processing fee.

Nothing more is needed from you.

Your Botter Support Team

**Notes**
- Facts: Bot Market refunds are decided by the Botter Support Team only when the bot does not work or is not as described. An approved refund is the price paid less a processing fee. The buyer is emailed with the decision (digest 6.4).
- Automation: none. Sender is App [verify with the app agent].

---

## E20B - Bot Market refund decision: not approved (buyer)

**Subject:** [Botters Lab] Your refund request has been decided

**Body:**

Hi {{contact.first_name}},

The Botter Support Team has looked at your refund request for {{bot_name}} and it wasn't approved. A refund is only approved when the bot does not work or isn't as described.

If you have more to add, contact the Botter Support Team at https://{{domain}}/support/ and include the exact wording of any messages you saw.

Your Botter Support Team

**Notes**
- Facts: refunds are decided only when the bot does not work or is not as described (digest 6.4). Ticket advice includes the exact wording of messages (13.1).
- Automation: none. Sender is App [verify with the app agent].

---

## E21 - Listing goes live (seller)

**Subject:** [Botters Lab] Your listing is live

**Body:**

Hi {{contact.first_name}},

Your listing for {{bot_name}} is now live on Bot Market. Members can find it under [Browse](https://lab.{{domain}}/market).

Open [My listings](https://lab.{{domain}}/listings) to view it or to edit it or to unlist it.

Your Botter Support Team

**Notes**
- Facts: the seller is emailed when a listing goes live. Statuses include **Live**. **My listings** offers edit and **Unlist** and **View**. Bot Market is for members only (digest 6.5 and 1.2).
- Selling needs Pro Botter and above so this email only reaches those tiers.
- Automation: none. Sender is App [verify with the app agent].

---

## E22 - Licence terms changed (each current holder)

**Subject:** [Botters Lab] {{seller_username}} has updated the licence terms for {{bot_name}}

**Body:**

Hi {{contact.first_name}},

The seller of {{bot_name}} has updated the licence terms for the bot. You can read them here: {{licence_terms_link}}.

You'll also find the terms under Licence terms on the bot in [Bots I bought](https://lab.{{domain}}/my-bots). If you have questions about the terms, contact the Botter Support Team at https://{{domain}}/support/. Botterverse doesn't give legal advice about licence terms.

Your Botter Support Team

**Notes**
- Facts: **Notify my buyers** emails each current licence holder a link to the terms page. Saving alone sends no email. Botterverse gives no legal advice about seller terms (digest 6.7).
- Automation: none. Sender is App and the seller triggers it with Notify my buyers [verify with the app agent].
- Confirmed by the app agent (answer 41): no page lets a buyer message a seller, so the email names the Botter Support Team.

---

## E23A - Sale notification (seller, opt-in)

**Subject:** [Botters Lab] You have a new sale on {{bot_name}}

**Body:**

Hi {{contact.first_name}},

{{buyer_username}} has bought access to {{bot_name}}. Your share of the sale is {{your_share}}.

Open [Sales](https://lab.{{domain}}/sales) to see the full line with the platform fee and the status. You receive this email because Sales is switched on under Email notifications in [Settings](https://lab.{{domain}}/settings).

Your Botter Support Team

**Notes**
- Facts: optional **Sales** switch under **Email notifications** in **Settings** covers each sale and review and commission. **Sales** shows **Price** and **Platform fee** and **Your share** and **Status**. The seller sees the buyer's username (digest 7.1 and 12.1).
- Automation: none. Sender is App [verify with the app agent].
- The same template can serve Bot Market sales and message top-ups. [CONFIRM: whether the app sends the same wording for all three.]

---

## E23B - Review notification (seller, opt-in)

**Subject:** [Botters Lab] {{bot_name}} has a new review

**Body:**

Hi {{contact.first_name}},

A buyer has left a {{rating}} star review on {{bot_name}}.

Open [Sales](https://lab.{{domain}}/sales) to read it. You can use Reply and Post the reply to answer it. You receive this email because Sales is switched on under Email notifications in [Settings](https://lab.{{domain}}/settings).

Your Botter Support Team

**Notes**
- Facts: sellers reply to reviews from **Sales** with **Reply** and **Post the reply** and **Edit the reply**. Ratings are 1 to 5 stars (digest 6.8 and 5.5).
- Automation: none. Sender is App [verify with the app agent].

---

## E23C - Commission notification (affiliate, opt-in)

**Subject:** [Botters Lab] A commission has been added

**Body:**

Hi {{contact.first_name}},

A commission of {{commission_amount}} has been recorded for you. Open [Affiliates](https://lab.{{domain}}/affiliates) to see its status.

A commission waits for the refund period before it is paid into your earnings. Once it is paid, you can withdraw it. You receive this email because Sales is switched on under Email notifications in [Settings](https://lab.{{domain}}/settings).

Your Botter Support Team

**Notes**
- Facts: statuses in **Subscription commissions** are **Pending** and **Paid** and **Skipped** and **Under review** and **Not paid: self-referral**. A commission waits for the refund period and Botterverse reviews and pays it into earnings (digest 11.4). The optional **Sales** email covers commission (12.1).
- Affiliates is for Novice Botter and above.
- Confirmed by the app agent (answer 43): the import, review and payment steps are built and commission is paid at launch once staff press Pay commissions after the refund period. The wording still promises no payment date.
- Automation: none. Sender is App [verify with the app agent].

---

## E24 - Dispute opened on a sale (seller)

**Subject:** [Botters Lab] A sale of {{bot_name}} is disputed

**Body:**

Hi {{contact.first_name}},

A buyer has disputed a payment for {{bot_name}} with their bank. The sale now shows Disputed in [Sales](https://lab.{{domain}}/sales) and your share of it is held until the bank decides.

The sale can't be refunded in Sales while the bank decides. A dispute that is lost counts as a refund and any dispute fees come out of your earnings.

Your Botter Support Team

**Notes**
- Facts: **Disputed**. The share is held until the bank decides and the seller is emailed. A lost dispute counts as a refund and dispute fees come from earnings. **Comment** and **Save the comment** exist (digest 7.3).
- Automation: none. Sender is App [verify with the app agent].
- Confirmed by the app agent (answer 44): Comment belongs to an open Bot Market refund request and a paywall or top-up sale never offers it. A disputed sale shows only "The buyer's bank is deciding a dispute on this sale, so it cannot be refunded here." so the email no longer mentions Comment.

---

## E25 - Payout set-up done by hand (member)

**Subject:** [Botters Lab] Your payouts are set up

**Body:**

Hi {{contact.first_name}},

The Botter Support Team has finished setting up your payouts. Payouts are set up on your account now.

Open [Payouts](https://lab.{{domain}}/payouts) to see your earnings. When you want to withdraw, use the Withdraw card there.

Your Botter Support Team

**Notes**
- Facts: "The Botter Support Team is setting up your payouts and will email you once it is done." Some are set up by hand. **Payouts are set up** is the confirmed message. Botterverse never sees bank details (digest 7.4).
- Automation: none. Sender is App [verify with the app agent].

---

## E26 - Withdrawal sent (member)

**Subject:** [Botters Lab] Your withdrawal is on its way

**Body:**

Hi {{contact.first_name}},

Your withdrawal has been sent and is on its way to your bank. The amount sent is {{sent_amount}} after a payout fee of {{fee_amount}}. Its status in [Payouts](https://lab.{{domain}}/payouts) reads Sent. It changes to Paid into your bank account once it arrives.

Open Payouts and look at Withdrawals to follow it. The fees for your withdrawal were shown before you confirmed it. If the actual fee is lower, the difference returns to your earnings.

Your Botter Support Team

**Notes**
- Facts: status **Sent** means on its way to the bank and the member is emailed. Later **Paid into your bank account**. Fees are shown under **Show the fees** before **Confirm the withdrawal** (digest 7.5).
- Confirmed by the app agent (answer 45): the app's payouts.withdrawal_sent carries sent_amount (the sum withdrawn less the fee) and fee_amount, labelled "Amount sent" and "Payout fee". The failed email carries the whole sum withdrawn.
- Automation: none. Sender is App [verify with the app agent]. No minimum or timing is stated.

---

## E27 - Withdrawal failed or returned (member)

**Sent by the app. Not built in FluentCRM.** The wording is in `../13-app-agent-prompt-paused-and-withdrawal-emails.md` (part B).

**Subject:** [Botters Lab] Your withdrawal didn't reach your bank

**Body:**

Hi [first name],

Your withdrawal of [amount] didn't reach your bank. Its status on the Payouts page reads [status]. The amount has returned to your earnings.

Open Payouts and update your bank details on Stripe's form. Then request the withdrawal again.

Your Botter Support Team

**Notes**
- Facts: statuses **Failed. Check your bank details** and **Returned by your bank. Check your bank details**. The amount returns to earnings. Bank details are entered on Stripe's own form (digest 7.4 and 7.5).
- [status] is the exact status text the member sees. [amount] is shown the way the Payouts page shows it.
- The status **Stripe can no longer pay your bank account** is a different case. It needs a variant if it follows the same event.
- Owner decision 1 November 2026: build it. Waiting for the app agent's report.

