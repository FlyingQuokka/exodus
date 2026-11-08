# Prompt for the app coding agent: comma changes in the app-sent emails

Copy everything below the line into the app agent's session.

---

## Brief: punctuation changes to the email wording

The owner has set a house style for all Botterverse email copy. A comma goes after an introductory phrase and before "so" or "which" when they join two clauses (for example "If you did not ask for this, you can ignore this email."). I have applied this to every email I send. Please apply the same changes to the matching app emails so members see one voice. These are punctuation changes only. No words change.

### What to do

1. Find each sentence below in your seeded templates and in any saved rows staff have not edited. Use a data migration for the saved rows, as before.
2. Make the sentence read exactly as shown. The only difference from your current text should be the comma.
3. Keep your own placeholder style (for example `[bot name]` where I show `{{bot_name}}`).
4. The name Botters Lab in these sentences follows brief 25. If brief 25 is not done yet, change the comma only and leave the name as it is.
5. Some of these emails are sent by the cart or by me and not by the app (receipts, payment failed, plan change up and plan cancelled). Skip any sentence you do not send. List what you skipped.
6. Two emails also have wording changes that are already in brief 24 (the plan downgraded email and the daily cap email). Do those through brief 24. Ignore them here.
7. Add or update tests that quote the old punctuation.

The IDs are my email numbers and may not match your template names. Search by the text.

### Sentences

- **E01A**: If you already have a Botters Lab account under this email address, you only need to sign in and verify your email address. Your plan is added automatically.
- **E01B**: Thank you for your purchase. You already have a help desk sign-in under this email address, so we haven't created a separate billing login.
- **E01B**: Use your help desk sign-in for invoices and card changes. To start building, create your Botters Lab account here: {{create_account_link}}. Use the same email address you bought with so your plan reaches your account.
- **E01B**: If you already have a Botters Lab account under this email address, you only need to sign in and verify your email address. Your plan is added automatically.
- **E02A**: Some things stay closed until you do. For example, you can't make a bot Public or submit a listing. If you paid for your plan before creating your account, the plan and its credits are added once you confirm.
- **E02B**: Once you confirm your email address, making a bot Public and submitting a listing open up.
- **E03**: You've confirmed your email address, so your plan and its credits have been added to your Botters Lab account.
- **E04**: We received a request to choose a new password for your Botters Lab account. Use this link to choose one: {{reset_link}}. The link works for the next hour. If you ask for another link, the earlier one stops working.
- **E04**: If you didn't ask for this, you can ignore this email and your password stays as it is.
- **E06**: The link works once and expires after 24 hours. Your billing login is separate from your Botters Lab sign-in, so this doesn't change your Botters Lab password.
- **E06**: If you didn't ask for this, you can ignore this email.
- **E07A**: Your change also carries to your billing account. If you didn't ask for this, you can ignore this email.
- **E07B**: If this was you, there is nothing to do. If it wasn't you, please contact the Botter Support Team at https://{{domain}}/support/ and change your password in [Settings](https://lab.{{domain}}/settings).
- **E07C**: If you didn't make this change, please contact the Botter Support Team at https://{{domain}}/support/ straight away.
- **E08**: If this was you, there is nothing to do. If it wasn't you, use Forgotten password? on the [Sign in](https://lab.{{domain}}/login) page to choose a new one and contact the Botter Support Team at https://{{domain}}/support/.
- **E09**: The model provider refused the text of {{bot_name}}, so the bot is now Personal. A Personal bot can't be shared or embedded and has no customers.
- **E10**: The check found that {{bot_name}} falls into a category that isn't allowed: {{blocked_categories}}. The bot is now Personal, so its link and embed have stopped and it has no customers.
- **E10**: If you think the check was wrong, contact the Botter Support Team at https://{{domain}}/support/.
- **E11**: The declarations for {{bot_name}} weren't confirmed again in the time allowed, so the bot has been switched to Personal. Its link and embed have stopped and it has no customers.
- **E12**: The limit resets at midnight UTC. To change it, open the bot from [Bot list](https://lab.{{domain}}/bots) and go to Sharing and embed. Enter a new Daily credit limit and press Save. You'll receive this email once per day.
- **E13**: To find out more or to ask for a review, contact the Botter Support Team through the Support link in the menu. Please include your username and the name of the bot.
- **E14b**: When your new plan starts, your bots come back, oldest first, up to the new plan's bot limit. Remaining credits from any credit packs you bought are untouched. Included credits you had not used have been reset.
- **E15**: You can press Refund or press Ask the Botter Support Team to review. If you do nothing, the claim is refunded automatically on {{refund_date}}. A guarantee refund takes the full price from your earnings even if that takes them below zero.
- **E16A**: Your access to the bot ends once the refund has settled. If you have a question about the refund, contact the Botter Support Team at https://{{domain}}/support/.
- **E16B**: If you'd like this looked at again, contact the Botter Support Team at https://{{domain}}/support/. Please say which bot it was and what happened.
- **E17**: The owner of {{bot_name}} didn't answer your Money-back guarantee claim in time, so it has been refunded automatically.
- **E17**: The refund is {{amount}}. Your bank may take a few days to show it. If you have a question about it, contact the Botter Support Team at https://{{domain}}/support/.
- **E18**: Before you use it with customers, enter the credentials for any integrations and switch each one on. Then confirm the declarations. The bot runs on your own credits. You can read the terms any time under Licence terms on the bot.
- **E20A**: The Botter Support Team has approved your refund request for {{bot_name}}. The refund is {{amount}}, which is the price you paid less a processing fee.
- **E20B**: If you have more to add, contact the Botter Support Team at https://{{domain}}/support/ and include the exact wording of any messages you saw.
- **E22**: You'll also find the terms under Licence terms on the bot in [Bots I bought](https://lab.{{domain}}/my-bots). If you have questions about the terms, contact the Botter Support Team at https://{{domain}}/support/. Botterverse doesn't give legal advice about licence terms.
- **E23C**: A commission waits for the refund period before it is paid into your earnings. Once it is paid, you can withdraw it. You receive this email because Sales is switched on under Email notifications in [Settings](https://lab.{{domain}}/settings).
- **E25**: Open [Payouts](https://lab.{{domain}}/payouts) to see your earnings. When you want to withdraw, use the Withdraw card there.
- **E26**: Open Payouts and look at Withdrawals to follow it. The fees for your withdrawal were shown before you confirmed it. If the actual fee is lower, the difference returns to your earnings.
- **E29**: It shows Unanswered questions, Common topics and Suggested additions. For each suggestion, you can press Add to knowledge or Add to instructions.
- **E30**: Open [Settings](https://lab.{{domain}}/settings) and then CRM. Check the Webhook address and press Send test event. When the test works, press Switch on.
- **E30**: If you need help finding the cause, use Support in the menu.
- **E31**: When credits run out, all of your bots stop answering everyone. That includes buyers.
- **E32**: Your credits can no longer cover a message. All of your bots have stopped answering everyone, including your buyers, until you add credits.
- **E32**: Open [Billing and credits](https://lab.{{domain}}/billing) and add credits with Buy credits. If you have a promo code, enter it under Promo code and press Redeem.
- **E33**: Your credits fell below your Auto top-up threshold, so we charged {{amount}} to your card and added the credits to your balance.
- **E35**: Your card was declined twice, so Auto top-up has switched itself off. No more charges will be tried.
- **E35**: If your credits run low in the meantime, you can add them with Buy credits.
- **E36**: Until you agree, no automatic charges are made.
- **E37**: Your bank asked for approval of an Auto top-up payment, so it didn't go through. We don't retry a payment that needs approval and Auto top-up stays on. The next attempt waits until your balance is back at your level or above.
- **E37**: To add credits, open [Billing and credits](https://lab.{{domain}}/billing) and use Buy credits. The checkout opens in a new tab where you can approve the payment with your bank.
- **E42a**: On a monthly plan, that is the end of the period you paid for. On an annual plan, it is the end of the current month and we refund the whole months you haven't used to your card after it ends. We email you when the refund is made.
- **E42a**: Until then, the red Plan cancelling pill shows in the Botters Lab. If you change your mind, press Keep my plan in [Billing and credits](https://lab.{{domain}}/billing) before that date.
- **E44**: While it's suspended, you can't build or publish or buy or withdraw or close the account.
- **E44**: To find out more, use the link in the Account suspended banner to message the Botter Support Team.
- **E45**: [Sign in](https://lab.{{domain}}/login) to the Botters Lab and press Accept in the banner. Until you do, you can't publish a bot or list one for sale.
- **E47**: If you didn't mean to do this, sign in before that date. The page Reopen your account? has a Reopen my account button.
- **E47**: Withdraw any earnings from [Payouts](https://lab.{{domain}}/payouts) before then. If you haven't set up your payout details, do that first. Earnings left when the account closes are forfeited.
- **E48**: If you'd like to return, you'll need a new account and a new username.
- **E49**: Auto top-up stays off. If you used it, open [Billing and credits](https://lab.{{domain}}/billing) and switch it on again.
- **E51**: If you have more to add, send it with a new report using Report this bot on the bot's page.

### Report back

1. How many sentences you changed and in how many templates.
2. Which sentences you skipped and why.
3. Any sentence you could not find.

Wording rules for anything you write back: British English and no exclamation marks. Say "the Botter Support Team" and never "our team".
