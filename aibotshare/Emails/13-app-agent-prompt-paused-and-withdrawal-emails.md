# Prompt for the app coding agent: two member emails (bot paused by staff and withdrawal failed)

Copy everything below the line into the app agent's session.

---

## Brief: send two account emails from the app

### Context

The Botter's Lab app already emails members about some events. The member guide says it emails for example when credits run low, when a bot reaches its daily credit limit and when a withdrawal is sent. It shows two other events only as a status on screen and does not say that an email goes out:

1. A bot is paused by the Botter Support Team. The bot's status becomes **Paused by the Botter Support Team** and only staff can unpause it.
2. A withdrawal fails or is returned. The withdrawal status becomes **Failed. Check your bank details** or **Returned by your bank. Check your bank details** and the amount returns to the member's earnings.

Members should be told about both. Both are account notices and not marketing.

### Why the app should send these (and not FluentCRM)

Both emails need details that a CRM tag cannot carry: the name of the bot for the first, the amount and the status for the second. The app knows these. So the app should send the two emails itself in the same way it sends its other account emails. No new CRM tag events are needed.

### How to use this brief

I wrote this from outside the code. My source is the member guide. I have not seen the code. Treat the brief as a plan to adapt.

- Compare each rule with what the code does and with your own plan.
- Where they differ adapt the brief to the code. Do not bend the code to the brief.
- Report every adaptation and the reason.
- Keep the outcomes below even if the route changes.

Outcomes I need:
1. When staff pause a bot the owner receives the first email once.
2. When a withdrawal fails or is returned the member receives the second email once with the right status and amount.
3. Both emails look like the app's other account emails.
4. I know whether the app already emails members when bots are paused by a plan change.

### What I do not know and you should check

- How the app sends its other emails (the mail class or template system or queue) and what a new one needs.
- Whether the staff pause action has one place where the status changes. Check the same for the withdrawal failure path and the withdrawal return path. Each email should fire from that single place so it cannot be missed or sent twice.
- Whether a bot can be paused by staff more than once (paused then unpaused then paused again). Each new pause should send an email.
- What happens when a staff pause and an account suspension or closure overlap. Do not send the pause email for a bot paused only because the account is closing (status **Paused for account closing**).
- Whether a withdrawal that fails and is then retried by the system could send the failure email more than once.
- Whether an email address and first name are always available for the member.
- Whether the member's Email notifications settings in Settings can switch these off. They should not. Account, security and plan emails are always sent.

### What to build

#### A. Bot paused by the Botter Support Team

Send to the bot's owner when a staff action sets the bot to **Paused by the Botter Support Team**. Sign it Your Botter Support Team.

**Subject:** [Botter's Lab] Your bot has been paused by the Botter Support Team

**Body:**

Hi [first name],

[bot name] has been paused by the Botter Support Team. Its status in your Bot list now reads Paused by the Botter Support Team. Only the Botter Support Team can unpause it.

To find out more or to ask for a review contact the Botter Support Team through the Support link in the menu. Please include your username and the name of the bot.

Your Botter Support Team

Link the words "Bot list" to the member's Bot list page in the app. Link "Support link" to the Support page the app already links (it opens the help desk). Do not give a reason for the pause. The guide lists none.

#### B. Withdrawal failed or returned

Send to the member when a withdrawal reaches **Failed. Check your bank details** or **Returned by your bank. Check your bank details**. Sign it Your Botter Support Team.

**Subject:** [Botter's Lab] Your withdrawal didn't reach your bank

**Body:**

Hi [first name],

Your withdrawal of [amount] didn't reach your bank. Its status on the Payouts page reads [status]. The amount has returned to your earnings.

Open Payouts and update your bank details on Stripe's form. Then request the withdrawal again.

Your Botter Support Team

Fill [status] with the exact status text the member sees on screen. Fill [amount] the way the Payouts page shows an amount (with the currency). Link "Payouts" to the member's Payouts page in the app. Do not send this email for the status **Stripe can no longer pay your bank account** unless you find it follows the same event. If it does tell me and I will write a variant.

#### C. Related question (answer only)

The app pauses bots that are over the limit when a member's plan changes. The status becomes **Paused by your plan**. Tell me whether the app already emails the member then. If it does not tell me and I will send you the wording for a third email in the same style.

### Wording rules

The email text above is final. Keep the words as written. If your email system needs a different placeholder style change only the placeholders. British English throughout. No exclamation marks.

### Tests

- A staff pause sends one email to the right owner with the right bot name. A second pause of the same bot after an unpause sends a second email.
- A bot paused only by the account closing sends nothing.
- A failed withdrawal sends one email with the right amount and status. A returned withdrawal does the same. Retrying a failed withdrawal does not send a second failure email for the same failure.
- The emails still send when the member has switched off the optional Sales and Insights notifications.
- The emails use the app's normal email layout and sender.

### Report back

Tell me where each email is sent from in the code. Tell me what adaptations you made. Tell me whether the app already emails for the plan-change pause. Tell me anything you found that could cause a missed or duplicate email.
