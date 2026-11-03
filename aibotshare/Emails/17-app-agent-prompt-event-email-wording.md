# Prompt for the app coding agent: wording for the other member emails

Copy everything below the line into the app agent's session.

---

## Brief: apply final wording to the app's other member emails

### Context

Thank you for the answers in `app-facts-for-marketing.md`. For briefs 13 and 14 I sent final wording for four emails and you applied it. This brief does the same for the other emails the app sends to members. Many of these already exist in the app with their own default text. The wording below is the owner's wording, corrected with your answers.

I wrote this from outside the code. Adapt anything that does not fit.

### How to use this brief

- Match each email below to a template in `resources/mail/templates/`. I have named a likely template for each. A question mark means I am not sure. If there is no such template say so and do not create one without asking me.
- Compare my wording with the template's current text. Apply my wording. Keep the words as written.
- Change only the placeholders to your tag names (for example `{{bot_name}}` becomes the bot name tag). I use these placeholders: `{{bot_name}}`, `{{amount}}`, `{{new_email}}`, `{{confirmation_link}}`, `{{reset_link}}`, `{{username}}`, `{{buyer_username}}`, `{{seller_username}}`, `{{your_share}}`, `{{rating}}`, `{{commission_amount}}`, `{{sent_amount}}`, `{{fee_amount}}`, `{{available_until}}`, `{{grace_end_date}}` and `{{licence_terms_link}}`. `[first name]` is the member name. Page names in links such as Sales, Payouts, Settings and Billing and credits link to the matching page in the app. A link written with `{{domain}}` is the base address.
- Leave out the sign-off and the subject prefix. The layout adds "Your Botter Support Team" and `[Botter's Lab]`.
- If my wording says something the code does not do, do not apply that sentence. Tell me which sentence and why.
- If the template carries a tag my wording does not use tell me. Do the same if my wording needs a tag the template does not have.
- Staff can edit the templates in the Back Office. A template already edited there may differ from the defaults. Tell me if you find that.

Outcomes I need:
1. Each email below uses my wording or I know why it does not.
2. I know every email with no matching template.
3. I know every sentence you left out and why.

### Not in this brief

E08 (password change), E23A (sale notification), E38 (credit pack refunded) and the plan upgraded email are covered elsewhere. E13, E14, E14b, E14c and E27 are done.

### Wording rules

British English. No exclamation marks. "the Botter Support Team" and never "our team".

### The emails

### E02A - Email confirmation link

Likely template: `auth.verify_email`

**Subject:** Confirm your email address

**Body:**

Hi [first name],

Your Botter's Lab account has been created. Confirm your email address with this link: {{confirmation_link}}. It works for 60 minutes.

Some things stay closed until you do. For example you can't make a bot Public or submit a listing. If you paid for your plan before creating your account the plan and its credits are added once you confirm.

### E02B - Email confirmation link sent again

Likely template: `auth.verify_email`

**Subject:** Your new confirmation link

**Body:**

Hi [first name],

You asked us to send the link again. Here is a fresh one: {{confirmation_link}}. It works for 60 minutes.

Once you confirm your email address making a bot Public and submitting a listing open up.

### E04 - Forgotten password

Likely template: `auth.password_reset`

**Subject:** Choose a new password

**Body:**

Hi [first name],

We received a request to choose a new password for your Botter's Lab account. Use this link to choose one: {{reset_link}}. The link works for the next hour. If you ask for another link the earlier one stops working.

If you didn't ask for this you can ignore this email and your password stays as it is.

### E05 - Forgotten username

Likely template: `auth.forgot_username`

**Subject:** Your username

**Body:**

Hi [first name],

You asked us to send your username. It is {{username}}.

Use it with your password on the [Sign in](https://lab.{{domain}}/login) page of the Botter's Lab. The Sign in page takes your username and never your email address.

### E07A - Email change: link to the new address

Likely template: `auth.verify_email (to the new address)?`

**Subject:** Confirm your new email address

**Body:**

Hi [first name],

You asked to change the email address on your Botter's Lab account to this one. Confirm the change with this link: {{confirmation_link}}.

Your change also carries to your billing account. If you didn't ask for this you can ignore this email.

### E07B - Email change: notice to the old address

Likely template: `auth.email_change_requested`

**Subject:** A change of email address was asked for

**Body:**

Hi [first name],

Someone asked to change the email address on your Botter's Lab account to {{new_email}}. The change only happens once the link we sent to that address is used.

If this was you there is nothing to do. If it wasn't you please contact the Botter Support Team at https://{{domain}}/support/ and change your password in [Settings](https://lab.{{domain}}/settings).

### E07C - Email change: confirmation to the old address

Likely template: `none seen`

**Subject:** Your email address has been changed

**Body:**

Hi [first name],

The email address on your Botter's Lab account is now {{new_email}}. Emails for your account will go to the new address from now on.

If you didn't make this change please contact the Botter Support Team at https://{{domain}}/support/ straight away.

### E07D - Email change: billing email updated

Likely template: `account.billing_email_updated`

**Subject:** Your billing email has been successfully updated

**Body:**

Hi [first name],

Your billing email has been successfully updated. Your billing account now holds {{new_email}} and your receipts will be sent there.

Nothing else is needed from you.

### E09 - Bot blocked by the model provider

Likely template: `moderation.scan_refused?`

**Subject:** Your bot has been switched to Personal

**Body:**

Hi [first name],

The model provider refused the text of {{bot_name}} so the bot is now Personal. A Personal bot can't be shared or embedded and has no customers.

Open the bot from [Bot list](https://lab.{{domain}}/bots) to see the reason shown there. Change what the provider objected to and press Save. Then press Make Public again.

### E10 - Public bot switched to Personal after a blocked category

Likely template: `moderation.bot_unpublished?`

**Subject:** Your bot has been switched to Personal

**Body:**

Hi [first name],

The check found that {{bot_name}} falls into a category that isn't allowed: {{blocked_categories}}. The bot is now Personal so its link and embed have stopped and it has no customers.

Open the bot from [Bot list](https://lab.{{domain}}/bots) and review its name, description, instructions and knowledge files. Press Save then Make Public once the text is changed. The full list of banned categories is in the terms.

If you think the check was wrong contact the Botter Support Team at https://{{domain}}/support/.

### E11 - Declarations not re-confirmed in time

Likely template: `moderation.declarations_overdue`

**Subject:** Please confirm your declarations again

**Body:**

Hi [first name],

The declarations for {{bot_name}} weren't confirmed again in the time allowed so the bot has been switched to Personal. Its link and embed have stopped and it has no customers.

Declarations need confirming again after a model change, an integration change, a knowledge change or a new finding by the check. Open the bot from [Bot list](https://lab.{{domain}}/bots) and go to Mode. Tick the declarations that apply and press Confirm declarations. Then press Make Public.

### E12 - Daily credit limit reached

Likely template: `credits.bot_daily_limit_reached`

**Subject:** A bot has reached its daily credit limit

**Body:**

Hi [first name],

{{bot_name}} has reached its Daily credit limit for today. Free visitors are told the bot has reached its limit for the day. Paid buyers and you can carry on.

The limit resets at midnight UTC. To change it open the bot from [Bot list](https://lab.{{domain}}/bots) and go to Sharing and embed. Enter a new Daily credit limit and press Save. You'll receive this email once per day.

### E15 - Guarantee claim received

Likely template: `sales.guarantee_claim_made`

**Subject:** A buyer has sent a claim on {{bot_name}}

**Body:**

Hi [first name],

A buyer has sent a Money-back guarantee claim on {{bot_name}}. Open [Sales](https://lab.{{domain}}/sales) to see the claim and the reason given.

You can press Refund or press Ask the Botter Support Team to review. If you do nothing the claim is refunded automatically on {{refund_date}}. A guarantee refund takes the full price from your earnings even if that takes them below zero.

### E16A - Guarantee claim decided: refunded

Likely template: `sales.refund_issued`

**Subject:** Your claim on {{bot_name}} has been refunded

**Body:**

Hi [first name],

Your claim on {{bot_name}} has been decided and the amount of {{amount}} is being refunded to you. Your bank may take a few days to show it.

Your access to the bot ends once the refund has settled. If you have a question about the refund contact the Botter Support Team at https://{{domain}}/support/.

### E16B - Guarantee claim decided: not refunded

Likely template: `sales.guarantee_claim_rejected`

**Subject:** Your claim on {{bot_name}} has been decided

**Body:**

Hi [first name],

Your claim on {{bot_name}} has been decided and it wasn't approved for a refund.

If you'd like this looked at again contact the Botter Support Team at https://{{domain}}/support/. Please say which bot it was and what happened.

### E17 - Guarantee claim refunded automatically - Optional

Likely template: `sales.refund_issued?`

**Subject:** Your claim on {{bot_name}} has been refunded

**Body:**

Hi [first name],

The owner of {{bot_name}} didn't answer your Money-back guarantee claim in time so it has been refunded automatically.

The refund is {{amount}}. If you have a question about it contact the Botter Support Team at https://{{domain}}/support/.

### E18 - Bot Market purchase

Likely template: `market.bot_purchased`

**Subject:** Your new bot is ready

**Body:**

Hi [first name],

Your payment for {{bot_name}} is confirmed. The bot is in your [Bot list](https://lab.{{domain}}/bots) and is marked Purchased.

Before you use it with customers enter the credentials for any integrations and switch each one on. Then confirm the declarations. The bot runs on your own credits. You can read the terms any time under Licence terms on the bot.

### E20A - Bot Market refund decision: approved

Likely template: `market.refund_approved_buyer`

**Subject:** Your refund request has been approved

**Body:**

Hi [first name],

The Botter Support Team has approved your refund request for {{bot_name}}. The refund is {{amount}} which is the price you paid less a processing fee.

Nothing more is needed from you.

### E20B - Bot Market refund decision: not approved

Likely template: `market.refund_rejected_buyer`

**Subject:** Your refund request has been decided

**Body:**

Hi [first name],

The Botter Support Team has looked at your refund request for {{bot_name}} and it wasn't approved. A refund is only approved when the bot does not work or isn't as described.

If you have more to add contact the Botter Support Team at https://{{domain}}/support/ and include the exact wording of any messages you saw.

### E21 - Listing goes live

Likely template: `market.listing_live`

**Subject:** Your listing is live

**Body:**

Hi [first name],

Your listing for {{bot_name}} is now live on Bot Market. Members can find it under [Browse](https://lab.{{domain}}/market).

Open [My listings](https://lab.{{domain}}/listings) to view it or to edit it or to unlist it.

### E22 - Licence terms changed

Likely template: `licence.terms_updated`

**Subject:** {{seller_username}} has updated the licence terms for {{bot_name}}

**Body:**

Hi [first name],

The seller of {{bot_name}} has updated the licence terms for the bot. You can read them here: {{licence_terms_link}}.

You'll also find the terms under Licence terms on the bot in [Bots I bought](https://lab.{{domain}}/my-bots). If you have questions about the terms contact the Botter Support Team at https://{{domain}}/support/. Botterverse doesn't give legal advice about licence terms.

### E23B - Review notification

Likely template: `market.review_received`

**Subject:** {{bot_name}} has a new review

**Body:**

Hi [first name],

A buyer has left a {{rating}} star review on {{bot_name}}.

Open [Sales](https://lab.{{domain}}/sales) to read it. You can use Reply and Post the reply to answer it. You receive this email because Sales is switched on under Email notifications in [Settings](https://lab.{{domain}}/settings).

### E23C - Commission notification (affiliate, opt-in)

Likely template: `affiliate.commission_credited`

**Subject:** A commission has been added

**Body:**

Hi [first name],

A commission of {{commission_amount}} has been recorded for you. Open [Affiliates](https://lab.{{domain}}/affiliates) to see its status.

A commission waits for the refund period before it is paid into your earnings. Once it is paid you can withdraw it. You receive this email because Sales is switched on under Email notifications in [Settings](https://lab.{{domain}}/settings).

### E24 - Dispute opened on a sale

Likely template: `sales.chargeback_opened`

**Subject:** A sale of {{bot_name}} is disputed

**Body:**

Hi [first name],

A buyer has disputed a payment for {{bot_name}} with their bank. The sale now shows Disputed in [Sales](https://lab.{{domain}}/sales) and your share of it is held until the bank decides.

The sale can't be refunded in Sales while the bank decides. A dispute that is lost counts as a refund and any dispute fees come out of your earnings.

### E25 - Payout set-up done by hand

Likely template: `none seen`

**Subject:** Your payouts are set up

**Body:**

Hi [first name],

The Botter Support Team has finished setting up your payouts. Payouts are set up on your account now.

Open [Payouts](https://lab.{{domain}}/payouts) to see your earnings. When you want to withdraw use the Withdraw card there.

### E26 - Withdrawal sent

Likely template: `payouts.withdrawal_sent`

**Subject:** Your withdrawal is on its way

**Body:**

Hi [first name],

Your withdrawal has been sent and is on its way to your bank. The amount sent is {{sent_amount}} after a payout fee of {{fee_amount}}. Its status in [Payouts](https://lab.{{domain}}/payouts) reads Sent. It changes to Paid into your bank account once it arrives.

Open Payouts and look at Withdrawals to follow it. The fees for your withdrawal were shown before you confirmed it. If the actual fee is lower the difference returns to your earnings.

### E28 - Withdrawal held on suspension (Optional)

Likely template: `none seen (optional)`

**Subject:** Your withdrawal is on hold

**Body:**

Hi [first name],

Your account is suspended and a withdrawal you asked for earlier is on hold. It hasn't been cancelled.

While the account is suspended you can't withdraw or build or publish or buy. You can still chat with bots you bought access to.

To find out more or to ask for a review, use the link in the Account suspended banner in the Botter's Lab to message the Botter Support Team.

### E29 - Insights report ready

Likely template: `insight.ready`

**Subject:** Your conversation insights are ready

**Body:**

Hi [first name],

A conversation insights report is ready for one of your bots.

It shows Unanswered questions, Common topics and Suggested additions. For each suggestion you can press Add to knowledge or Add to instructions.

Open [Analytics](https://lab.{{domain}}/bots/analytics) in the menu and choose the bot. The report is in the Conversation insights panel. Each run uses credits from your balance.

You receive this email because the Insights switch is on under Email notifications in [Settings](https://lab.{{domain}}/settings). Switch it off there if you'd rather not receive it.

### E30 - CRM connection switched off by failures

Likely template: `crm.connection_disabled`

**Subject:** Your CRM connection has switched off

**Body:**

Hi [first name],

Your CRM connection has switched itself off after repeated failures. Nothing is sent to your CRM while it's off.

Open [Settings](https://lab.{{domain}}/settings) and then CRM. Check the Webhook address and press Send test event. When the test works press Switch on.

If you need help finding the cause use Support in the menu.

### E31 - Credits low

Likely template: `credits.low_balance`

**Subject:** Your credits are running low

**Body:**

Hi [first name],

Your credits have fallen below the level set under Top up when my credits fall below.

When credits run out all of your bots stop answering everyone. That includes buyers.

Open [Billing and credits](https://lab.{{domain}}/billing) to add more. Use Buy credits for a pack or switch on Auto top-up so it happens by itself.

### E32 - Credits exhausted

Likely template: `credits.zero_balance`

**Subject:** Your bots have stopped answering

**Body:**

Hi [first name],

Your credits can no longer cover a message. All of your bots have stopped answering everyone including your buyers until you add credits.

Open [Billing and credits](https://lab.{{domain}}/billing) and add credits with Buy credits. If you have a promo code enter it under Promo code and press Redeem.

Your bots start answering again from the next message once your balance covers it.

### E33 - Auto top-up charged

Likely template: `credits.auto_topup_charged`

**Subject:** Auto top-up charged {{amount}}

**Body:**

Hi [first name],

Your credits fell below your Auto top-up threshold so we charged {{amount}} to your card and added the credits to your balance.

You can change the threshold or the Top-up amount or switch Auto top-up off in [Billing and credits](https://lab.{{domain}}/billing).

### E34 - Auto top-up daily cap reached

Likely template: `credits.auto_topup_limit_reached`

**Subject:** Auto top-up is paused for now

**Body:**

Hi [first name],

Auto top-up has reached its limit for today and is paused until midnight UTC.

After that it tries again the next time your credits are used while the balance is below your level. If your credits run out first your bots stop answering and Auto top-up doesn't restart by itself. To add credits now open [Billing and credits](https://lab.{{domain}}/billing) and use Buy credits.

### E35 - Auto top-up declined twice

Likely template: `credits.auto_topup_failed`

**Subject:** Auto top-up has switched off

**Body:**

Hi [first name],

Your card was declined twice so Auto top-up has switched itself off. No more charges will be tried.

Update your card from the customer area under Invoices, receipts and saved cards in [Billing and credits](https://lab.{{domain}}/billing). Then press Agree and switch on.

If your credits run low in the meantime you can add them with Buy credits.

### E36 - Auto top-up statement updated

Likely template: `credits.auto_topup_paused`

**Subject:** Please agree to the updated Auto top-up statement

**Body:**

Hi [first name],

We've updated the Auto top-up statement. A top-up came due and wasn't charged. Auto top-up is paused until you agree to the new statement.

Open [Billing and credits](https://lab.{{domain}}/billing) and read the statement. It links to The Auto top-up section of our terms and conditions. Then press Switch off and after that press Agree and switch on.

Until you agree no automatic charges are made.

### E37 - Auto top-up needs bank approval

Likely template: `credits.auto_topup_approval_needed`

**Subject:** Your bank asked for approval of an Auto top-up

**Body:**

Hi [first name],

Your bank asked for approval of an Auto top-up payment so it didn't go through. We don't retry a payment that needs approval and Auto top-up stays on. The next attempt waits until your balance is back at your level or above.

To add credits open [Billing and credits](https://lab.{{domain}}/billing) and use Buy credits. The checkout opens in a new tab where you can approve the payment with your bank.

### E44 - Account suspended

Likely template: `account.suspended`

**Subject:** Your account has been suspended

**Body:**

Hi [first name],

Your Botter's Lab account is suspended. You can still sign in and chat with bots you bought access to.

While it's suspended you can't build or publish or buy or withdraw or close the account.

To find out more use the link in the Account suspended banner to message the Botter Support Team.

### E45 - Terms or privacy updated

Likely template: `document.terms_updated`

**Subject:** We've updated our terms or privacy policy

**Body:**

Hi [first name],

We've updated our terms or privacy policy. You can read both without an account. They're linked in the foot of every page.

[Sign in](https://lab.{{domain}}/login) to the Botter's Lab and press Accept in the banner. Until you do you can't publish a bot or list one for sale.

### E46 - Data export ready

Likely template: `export.ready`

**Subject:** Your data export is ready

**Body:**

Hi [first name],

The data export you asked for is ready. It is available until {{available_until}}.

Open [Settings](https://lab.{{domain}}/settings) then Data export and press Download. The zip holds your bots and their conversations, your sales and credit history and the files you uploaded. Integration passwords and keys are never included.

### E47 - Account closure requested

Likely template: `account.closing`

**Subject:** Your account will close on {{grace_end_date}}

**Body:**

Hi [first name],

You've asked to close your account. It is now closing and the grace period ends on {{grace_end_date}}. Your bots have stopped answering and your listings are hidden.

If you didn't mean to do this sign in before that date. The page Reopen your account? has a Reopen my account button.

This is a service message about your account. Botterverse marketing emails have been switched off for you.

### E48 - Grace period ends

Likely template: `account.closed`

**Subject:** Your account is now closed

**Body:**

Hi [first name],

The grace period for your account has ended and the account is closed. Your bots and listings have been removed and your name and email address have been removed from our records. Your username stays reserved.

Any customers owed a refund have received it. Bots you already sold stay with their buyers.

If you'd like to return you'll need a new account and a new username.

### Report back

For each email give the template you matched (or none) and whether you applied the wording. Give any sentence you left out and why. Say too which tags you changed. Tell me anything that could cause a missed or duplicate email.
