# Event emails 28 to 54

Transactional and notification emails for events 28 to 54 in `06-event-emails-plan.md`: boosts and billing and plan and account events plus the two help desk templates. Draft for owner review. Nothing is built in the app or WordPress or FluentCRM.

**Not written (covered or not needed):** 50 (covered by event 23 and O08) and 53 (on-screen only) and 54 (handled by the behaviour sequences and the welcome sequence).

**Written:** 28 to 49 and 51 and 52. Optional events (28 and 38 and 49) are marked Optional in the heading. Event 41 has two variants (41a upgrade and 41b downgrade) and event 42 has two variants (42a monthly and 42b annual). Total 26 emails.

**Placeholders used**

| Placeholder | Meaning |
|---|---|
| `{{contact.first_name}}` | Member's first name |
| `{{domain}}` | Base domain |
| `{{amount}}` | Amount charged by an auto top-up (E33) |
| `{{credits_removed}}` | Boosts taken off after a refunded pack (E38) |
| `{{plan_name}}` | The member's current plan (E40) |
| `{{old_plan_name}}` and `{{new_plan_name}}` | Plan before and after a change (E41a) |
| `{{end_date}}` | Date the plan ends (E42a and E42b) |
| `{{expiry_date}}` | The Available until date of a data export (E46). The app's tag name |
| `{{period_start_date}}` and `{{period_end_date}}` | The dates the insights report covers (E29). The app's tag names |
| `{{grace_end_date}}` | Date the grace period ends (E47) |
| `{{order_summary}}` | The order lines and totals the cart inserts (E39) |
| `{{ticket.title}}` and `{{customer.full_name}}` and `{{response.full_content}}` | Fluent Support's own tags in E51 and E52: the subject and the member's name and the written reply |

**Sender key:** App means the Botters Lab sends it. Cart means FluentCart or WordPress. Desk means the help desk. CRM means a FluentCRM automation. Every sender is still to be verified with the app agent.

---

## E28 - DROPPED - Withdrawal held on suspension (Optional) (on event, members with a withdrawal pending when suspended)

**Dropped on 2 November 2026 on the marketing agent's recommendation (optional, no template in the app and E44 already says a suspended member cannot withdraw). The text is kept for the record.**

**Subject:** [Botterverse] Your withdrawal is on hold

**Body:**

Hi {{contact.first_name}},

Your account is suspended and a withdrawal you asked for earlier is on hold. It hasn't been cancelled.

While the account is suspended, you can't withdraw or build or publish or buy. You can still chat with bots you bought access to.

To find out more or to ask for a review, use the link in the Account suspended banner in the Botters Lab to message the Botter Support Team.

Your Botter Support Team

**Notes**
- Facts: the guide says a withdrawal already asked for is held and not cancelled. A suspended account cannot build or publish or buy or withdraw or close the account. It can chat with bots it bought access to (12.3).
- Sender: App. The guide shows a banner only. The email is optional.
- Automation: none.
- Confirmed by the app agent (answer 35): lifting a suspension leaves the withdrawal as requested. It then follows its normal route: sent on the next payout run in API mode or by staff in manual mode. The email stays neutral.

---

## E29 - Insights report ready (on event, members with the Insights switch on)

**Subject:** [Botters Lab] Conversation insights for {{bot_name}} are ready

**Body:**

Hi {{contact.first_name}},

The conversation insights report for {{bot_name}} is ready. It covers {{period_start_date}} to {{period_end_date}}.

It shows Unanswered questions, Common topics and Suggested additions. For each suggestion, you can press Add to knowledge or Add to instructions.

[Open the report]({{analytics_url}}). It is in the Conversation insights panel on Analytics. Each run uses boosts from your balance.

You receive this email because the Insights switch is on under Email notifications in [Settings](https://lab.{{domain}}/settings). Switch it off there if you'd rather not receive it.

Your Botter Support Team

**Notes**
- Facts: Insights is an optional switch under Email notifications in Settings. The panel shows Unanswered questions and Common topics and Suggested additions with Add to knowledge and Add to instructions. No plan includes insights so each run uses the owner's boosts (8.2).
- Sender: App. Opt-in.
- Automation: none.
- Confirmed by the app agent (answers 19): the report opens on Bot analytics in the Conversation insights panel, under Conversations over time. The insight.ready email carries a link to it.

---

## E30 - CRM connection switched off by failures (on event, Pro Botter and above)

**Subject:** [Botters Lab] Your CRM connection has switched off

**Body:**

Hi {{contact.first_name}},

Your CRM connection has switched itself off after repeated failures. Nothing is sent to your CRM while it's off.

Open [Settings](https://lab.{{domain}}/settings) and then CRM. Check the Webhook address and press Send test event. When the test works, press Switch on.

If you need help finding the cause, use Support in the menu.

Your Botter Support Team

**Notes**
- Facts: after repeated failures the connection switches off and the member is emailed. Controls are Switch off and Switch on and Replace secret and Disconnect. Send test event is on the same page (9.2).
- Sender: App.
- Automation: none.
- Confirmed by the app agent (answer 20): Send test event shows whenever a connection exists. A test does not switch the connection back on, so the member still presses Switch on.

---

## E31 - Boosts low (on event, all members with auto top-up threshold set)

**Subject:** [Botters Lab] Your boosts are running low

**Body:**

Hi {{contact.first_name}},

Your boosts have fallen below the level set under Top up when my boosts fall below.

When boosts run out, all of your bots stop answering everyone. That includes buyers.

Open [Billing and boosts](https://lab.{{domain}}/billing) to add more. Use Buy boosts to add a Botter Booster Pack or switch on Auto top-up so it happens by itself.

Your Botter Support Team

**Notes**
- Facts: the member is emailed when boosts fall below their auto top-up threshold. Billing and boosts has Buy boosts and Auto top-up and Promo code sections. At zero all of the owner's bots stop answering (10.1).
- Sender: App.
- Automation: none.
- Confirmed by the app agent (answer 21): the email goes whether or not Auto top-up is on, once per crossing of the level. Any boosts added clear the level so the next charge below it sends the email again. A new member starts on a level of 1,000 boosts.

---

## E32 - Boosts exhausted (on event, all members)

**Subject:** [Botters Lab] Your bots have stopped answering

**Body:**

Hi {{contact.first_name}},

Your boosts can no longer cover a message. All of your bots have stopped answering everyone, including your buyers, until you add boosts.

Open [Billing and boosts](https://lab.{{domain}}/billing) and add boosts with Buy boosts. If you have a promo code, enter it under Promo code and press Redeem.

Your bots start answering again from the next message once your balance covers it.

Your Botter Support Team

**Notes**
- Facts: when boosts cannot cover a message all of the owner's bots stop answering everyone including buyers until boosts are added. The member is emailed again (10.1). Promo code and Redeem (10.5).
- Sender: App.
- Automation: none.
- Confirmed by the app agent (answer 22): nothing needs pressing. The first message the boost check lets through clears the stopped state. The check needs the balance to cover the message's worst-case cost so a very small top-up can still be refused.

---

## E33 - Auto top-up charged (on event, members with auto top-up on)

**Subject:** [Botterverse] Auto top-up charged {{amount}}

**Body:**

Hi {{contact.first_name}},

Your boosts fell below your Auto top-up threshold, so we charged {{amount}} to your card and added the boosts to your balance.

You can change the threshold or the Top-up amount or switch Auto top-up off in [Billing and boosts](https://lab.{{domain}}/billing).

Your Botter Support Team

**Notes**
- Facts: the member is emailed each time auto top-up charges. Settings are Top up when my boosts fall below and Top-up amount. One boost per cent with no Botter Booster Pack bonus (10.4). No amount is printed in this copy.
- Sender: App.
- Automation: the Power User tag fires on the first charge (set by the app agent and not by this email).

---

## E34 - Auto top-up daily cap reached (on event, members with auto top-up on)

**Subject:** [Botterverse] Auto top-up is paused for now

**Body:**

Hi {{contact.first_name}},

Auto top-up has reached its limit for today and is paused until midnight UTC.

After that, it tries again the next time your boosts are used while the balance is below your level. To add boosts now, open [Billing and boosts](https://lab.{{domain}}/billing) and use Buy boosts.

Your Botter Support Team

**Notes**
- Facts: a daily cap pauses auto top-up until the next day with an email (10.4). The number of top-ups per day is not printed because the guide and the brief differ (conflict 29).
- Sender: App.
- Automation: none.
- Confirmed by the app agent (answer 23): the daily cap counts from UTC midnight (default 3 top-ups per UTC day, a staff setting). Nothing runs at midnight. The next attempt comes from the next usage charge that leaves the balance below the level, so a member whose bots have already stopped has no new attempt until boosts are added another way. The wording follows the app as built (owner decision 1 November 2026).

---

## E35 - Auto top-up declined twice (on event, members with auto top-up on)

**Subject:** [Botterverse] Auto top-up has switched off

**Body:**

Hi {{contact.first_name}},

Your card was declined twice, so Auto top-up has switched itself off. No more charges will be tried.

Update your card from the customer area under Invoices, receipts and saved cards in [Billing and boosts](https://lab.{{domain}}/billing). Then press Agree and switch on.

If your boosts run low in the meantime, you can add them with Buy boosts.

Your Botter Support Team

**Notes**
- Facts: a declined card is tried once more and then auto top-up switches off with an email (10.4). The billing login is separate from the Botters Lab (10.8). Switching back on uses Agree and switch on.
- Sender: App.
- Automation: none.
- Confirmed by the app agent (answer 24): the second decline switches Auto top-up off and the member must press Agree and switch on. The button shows only with a card on an active subscription. The threshold and amount are kept.

---

## E36 - Auto top-up statement updated (on event, members with auto top-up on)

**Subject:** [Botterverse] Please agree to the updated Auto top-up statement

**Body:**

Hi {{contact.first_name}},

We've updated the Auto top-up statement. A top-up came due and wasn't charged. Auto top-up is paused until you agree to the new statement.

Open [Billing and boosts](https://lab.{{domain}}/billing) and read the statement. It links to The Auto top-up section of our terms and conditions. Then press Switch off and after that press Agree and switch on.

Until you agree, no automatic charges are made.

Your Botter Support Team

**Notes**
- Facts: a changed statement pauses auto top-up until the member agrees again with an email (10.4). The statement link text is The Auto top-up section of our terms and conditions.
- Sender: App.
- Automation: none.
- Confirmed by the app agent (answer 25): a newer statement pauses charges while the switch stays on, so the page reads "Auto top-up is on" and shows only Switch off. The member presses Switch off then Agree and switch on. The email goes at the first charge the new statement blocks and not when staff save it. The wording follows the app as built (owner decision 1 November 2026).

---

## E37 - Auto top-up needs bank approval (on event, members with auto top-up on)

**Subject:** [Botterverse] Your bank asked for approval of an Auto top-up

**Body:**

Hi {{contact.first_name}},

Your bank asked for approval of an Auto top-up payment, so it didn't go through. We don't retry a payment that needs approval and Auto top-up stays on. The next attempt waits until your balance is back at your level or above.

To add boosts, open [Billing and boosts](https://lab.{{domain}}/billing) and use Buy boosts. The checkout opens in a new tab where you can approve the payment with your bank.

Your Botter Support Team

**Notes**
- Facts: if the bank asks for approval auto top-up is not retried and the member buys a Botter Booster Pack instead (10.4). Buy boosts opens checkout in a new tab (10.3).
- Sender: App. The guide does not state this email. Recommended.
- Automation: none.
- Confirmed by the app agent (answer 26): the switch is not changed and the app sends "Your bank needs you to approve a top-up" with the amount and a Buy boosts link. No new attempt starts until added boosts bring the balance back to the level or above or the member switches it off.

---

## E38 - DROPPED - Botter Booster Pack refunded (Optional) (on event, buyers of a refunded pack)

**Dropped by the owner on 2 November 2026. Do not build. The text is kept for the record.**

**Subject:** [Botterverse] Your Botter Booster Pack was refunded

**Body:**

Hi {{contact.first_name}},

A Botter Booster Pack payment has been refunded. We've taken {{credits_removed}} boosts off your balance for it. A refund removes boosts only up to the balance you have.

You can see the change in the usage history in [Billing and boosts](https://lab.{{domain}}/billing). It appears as Refunded purchase.

Your Botter Support Team

**Notes**
- Facts: if a pack's payment is refunded its boosts are removed up to the balance. History label is Refunded purchase (10.1 and 10.3).
- Sender: App. The guide does not state this email. Optional.
- Automation: none.
- [DECISION: the app agent says (answer 27) the app has no email for a refunded Botter Booster Pack. A Botter Booster Pack refund reaches the app through Stripe, the boosts removed are saved as a Refunded purchase row. An email would need a code change. Drop E38 (it is optional) or ask the app agent to add it. FluentCart's own refund email to the customer cannot carry the boosts figure.]

---

## E39 - Receipts and invoices (on event, all purchases)

**Subject:** [Botterverse] Your receipt

**Body:**

Hi {{order.customer.first_name}},

Thanks for your payment. Here's your receipt.

{{order.items_table}}

Plan payments are listed in the customer area under Invoices, receipts and saved cards in [Billing and boosts](https://lab.{{domain}}/billing). Bot access, message top-ups and Bot Market purchases are single payments. Each has its own receipt and no card is saved.

Your Botter Support Team

**Notes**
- Facts: receipts go to the Botters Lab account email. The billing login is separate from the Botters Lab. Bot access, message top-ups and Bot Market purchases each send their own receipt and save no card (10.8).
- Sender: Cart. Style the FluentCart templates with this wording. One wrapper can serve all receipt types.
- Automation: none.
- FluentCart wraps a custom body in its own receipt template, so the opening line stays. Checked against the plugin source: `{{order.items_table}}` inserts the order lines.

---

## E40 - Payment failed (on event, members with a failed plan payment)

**Subject:** [Botterverse] Your plan payment didn't go through

**Body:**

Hi {{order.customer.first_name}},

The last payment for your {{subscription.item_name}} plan didn't go through. Your plan stays while we try the payment again.

Update your card from the customer area under Invoices, receipts and saved cards in [Billing and boosts](https://lab.{{domain}}/billing). You sign in there with your billing login and not with your Botters Lab username.

The red Payment past due pill shows at the top of the Botters Lab until the payment is made.

Your Botter Support Team

**Notes**
- Facts: pill Payment past due and the plan stays while the payment is retried (12.3). Customer area and billing login (10.8).
- Sender: Cart. The guide shows the pill only. Recommended.
- Automation: none. No tag in this copy.
- The retry count is Stripe's setting and the email promises no number. FluentCart sends this on `subscription_renewal_failed`. Its `subscription_past_due` email is switched off so a member gets one.

---

## E41a - Plan change up (on event, members who upgrade)

**Subject:** [Botterverse] Your plan is now {{new_plan_name}}

**Body:**

Hi {{contact.first_name}},

Your plan has changed from {{old_plan_name}} to {{new_plan_name}}. The change takes effect now.

Included boosts from your old plan are replaced by the new plan's first payment. Remaining boosts from any Botter Booster Packs you bought are untouched.

{{new_plan_name}} includes all the features of the lower plans. You can see what's included on the [pricing page](https://{{domain}}/pricing/#compare).

Your Botter Support Team

**Notes**
- Facts: the new plan's first payment replaces unused included boosts and bought boosts stay. Moving back up restores features paused by a move down (10.6). Plan change emails are always sent (12.1).
- Sender: Cart.
- Automation: pairs with the tier tags. The tag change is set by the cart automation and not by this email.
- Confirmed 3 November 2026: Your plan shows no plan details, so the email links to the plan comparison table on the pricing page.

---

## E42a - Plan cancelled, monthly and annual (on event, members who cancel)

**Subject:** [Botterverse] Your plan will end on {{subscription.expire_at}}

**Body:**

Hi {{order.customer.first_name}},

You've cancelled your plan. It ends on {{subscription.expire_at}} and works as normal until then.

On a monthly plan, that is the end of the period you paid for. On an annual plan, it is the end of the current month and we refund the whole months you haven't used to your card after it ends. We email you when the refund is made.

Until then, the red Plan cancelling pill shows in the Botters Lab. If you change your mind, press Keep my plan in [Billing and boosts](https://lab.{{domain}}/billing) before that date.

Your Botter Support Team

**Notes**
- Facts: monthly plan runs to the end of the paid period. Pill Plan cancelling and the Ends date and Keep my plan (10.7 and 12.3). Digest conflict 8: say "you keep your plan to the end of the period you paid for" and not "no refunds".
- Sender: Cart. Owner decision 2 November 2026: a cancelling member receives this email. FluentCart's `subscription_canceled_customer` notification sends it with this wording in place of its stock text.
- Automation: the Cancelled tag is applied by the automation. O06 step 1 must not send this email as well.
- One text serves monthly and annual plans because FluentCart has no conditional blocks (E42b merged into this email, 2 November 2026). `{{subscription.expire_at}}` must be checked with a real cancelled subscription: the plugin shows 'Never' when it is empty.

---

## E42b - DROPPED - Plan cancelled, annual (merged into E42a)

**Merged into E42a on 2 November 2026. Do not build. The text is kept for the record.**

**Subject:** [Botterverse] Your plan will end on {{end_date}}

**Body:**

Hi {{contact.first_name}},

You've cancelled your plan. It ends on {{end_date}}, which is the end of the current month.

After it ends, we refund the whole months you haven't used to your card and email you when the refund is made. Until the plan ends, the red Plan cancelling pill shows in the Botters Lab.

If you change your mind, press Keep my plan in [Billing and boosts](https://lab.{{domain}}/billing) before that date.

Your Botter Support Team

**Notes**
- Facts: annual plan ends at the end of the current month and whole unused months are refunded to the card with the months and amount shown first (10.7).
- Sender: Cart, as for E42a. FluentCart cannot fill refund figures so the email gives none. The app sends `billing.annual_refunded` ("We have refunded the unused months of your annual plan") with the months and amount when the refund is made.
- Automation: the Cancelled tag is applied by the automation. O06 step 1 must not send this email as well.
- Annual billing is offered (index decision 16) so this variant stays.

---

## E43 - DROPPED - Plan ends (on event, members whose plan has ended)

**Dropped by the owner on 2 November 2026. The app sends `plan.ended` with the same facts. Do not build. The text is kept for the record.**

**Subject:** [Botterverse] Your plan has ended

**Body:**

Hi {{contact.first_name}},

Your {{plan_name}} plan has ended. Your account stays open and you can sign in to chat with bots you bought access to.

Your own bots are paused and your data is kept. Unused plan boosts have reset. Remaining boosts from any Botter Booster Packs you bought are untouched. Auto top-up is off.

To build and run bots again, choose a plan on the [Pricing](https://{{domain}}/pricing/) page. Bots your old plan paused start again up to the new plan's bot limit.

Your Botter Support Team

**Notes**
- Facts: after the plan ends the account stays open and own bots pause with data kept and unused plan boosts reset and bought boosts stay and auto top-up switches off (10.7).
- Sender: CRM. The guide does not state this email. Recommended.
- Automation: follows O06. Tag handling is in the automation plan.
- Confirmed by the app agent (answer 38): choosing a plan returns the bots the old plan paused, oldest first, up to the new plan's limit. Bots paused by the owner or by staff stay paused. A returned bot still needs boosts to answer. See the open decision on E43 against the app's plan.ended email.

---

## E44 - Account suspended (on event, suspended members)

**Subject:** [Botterverse] Your account has been suspended

**Body:**

Hi {{contact.first_name}},

Your Botters Lab account is suspended. You can still sign in and chat with bots you bought access to.

While it's suspended, you can't build or publish or buy or withdraw or close the account.

To find out more, use the link in the Account suspended banner to message the Botter Support Team.

Your Botter Support Team

**Notes**
- Facts: pill Account suspended and a banner with a link to message Support. A suspended account can chat with bots it bought access to but cannot build or publish or buy or withdraw or close the account (12.3 and 12.5).
- Sender: App. The guide shows a banner only. Recommended.
- Automation: none.
- Confirmed by the app agent (answer 34): the app's suspension email carries no reason and staff reasons are kept in the audit log only ("never emailed"). The copy gives none.

---

## E45 - Terms or privacy updated (on event, all members)

**Subject:** [Botterverse] We've updated our terms or privacy policy

**Body:**

Hi {{contact.first_name}},

We've updated our terms or privacy policy. You can read both without an account. They're linked in the foot of every page.

[Sign in](https://lab.{{domain}}/login) to the Botters Lab and press Accept in the banner. Until you do, you can't publish a bot or list one for sale.

Your Botter Support Team

**Notes**
- Facts: the banner We have updated our terms or privacy policy asks for Accept and until then no publishing or listing (12.3 and 12.7). Terms and Privacy policy are linked in the page foot (1.6).
- Sender: App. The guide shows a banner only. Recommended.
- Automation: none.

---

## E46 - Data export ready (on event, members who requested an export)

**Subject:** [Botterverse] Your data export is ready

**Body:**

Hi {{contact.first_name}},

The data export you asked for is ready. It is available until {{expiry_date}}.

[Download your export]({{download_url}}) or find it under Data export in [Settings](https://lab.{{domain}}/settings). The zip holds your bots and their conversations, your sales and boost history and the files you uploaded. Integration passwords and keys are never included.

Your Botter Support Team

**Notes**
- Facts: Settings then Data export then Request export. Status Being prepared then Ready and Download. Available until date. Integration passwords and keys never included (12.4). Digest conflict 6: say "your own bots" and not every bot.
- Sender: App.
- Automation: none.
- Data export ships at launch (owner decision 1 November 2026). The app agent confirms it is built for every account with no plan gate. Files stay for 7 days by default.

---

## E47 - Account closure requested (on event, members who close an account)

**Subject:** [Botterverse] Your account will close on {{grace_end_date}}

**Body:**

Hi {{contact.first_name}},

You've asked to close your account. It is now closing and the grace period ends on {{grace_end_date}}. Your bots have stopped answering and your listings are hidden.

If you didn't mean to do this, sign in before that date. The page Reopen your account? has a Reopen my account button.

Withdraw any earnings from [Payouts](https://lab.{{domain}}/payouts) before then. If you haven't set up your payout details, do that first. Earnings left when the account closes are forfeited.

This is a service message about your account. Botterverse marketing emails have been switched off for you.

Your Botter Support Team

**Notes**
- Facts: at once the account becomes closing and bots stop answering and listings are hidden and the member is unsubscribed from Botterverse emails and emailed the grace period end date (12.5). Reopen your account? and Reopen my account (12.6).
- Sender: App.
- Automation: the unsubscribe from marketing is done by the app. Digest conflict 7: no length of grace period is stated.

---

## E48 - Grace period ends (on event, members whose account closes)

**Subject:** [Botterverse] Your account is now closed

**Body:**

Hi {{contact.first_name}},

The grace period for your account has ended and the account is closed. Your bots and listings have been removed and your name and email address have been removed from our records. Your username stays reserved.

Any customers owed a refund have received it. Bots you already sold stay with their buyers.

If you'd like to return, you'll need a new account and a new username.

Your Botter Support Team

**Notes**
- Facts: at grace end an open withdrawal is sent if a payout recipient is active (otherwise cancelled) and customers are refunded and remaining earnings are forfeited and bots are deleted and listings removed and own customer conversations removed and name and email removed with the username reserved. Bots already sold stay with buyers (12.5). The page text is The grace period for this account has ended (12.6).
- Sender: App. The guide says nothing about a closing-day email. Recommended.
- E48 stays as written. The warning about forfeited earnings is in E47 (owner decision 2 November 2026). The app agent says (answer 36) an open withdrawal is cancelled with no active payout recipient, sent at once in API mode with one or left for staff in manual mode.
- Confirmed by the app agent (answer 36): the email is sent before the address is removed. If the send fails it is logged and not retried.

---

## E49 - Reopening (Optional) (on event, members who reopen an account)

**Subject:** [Botterverse] Welcome back

**Body:**

Hi {{contact.first_name}},

Your account is open again. Your bots and listings that were paused for the closing are restored. So are your affiliate record and your Botterverse emails. Your plan carries on unless it was set to cancel before you closed the account or its paid period has ended.

Auto top-up stays off. If you used it, open [Billing and boosts](https://lab.{{domain}}/billing) and switch it on again.

Your Botter Support Team

**Notes**
- Facts: Reopen my account restores the account and bots and listings paused by closing and the subscription (unless it was set to cancel before closing) and the affiliate record and emails. Auto top-up stays off (12.6).
- Sender: None in the guide (page only). Optional.
- Automation: none.
- Confirmed by the app agent (answer 37): reopening clears the end date that closing set so the plan carries on. It is left out when the plan was already set to cancel before closing or the paid period has ended. Auto top-up stays off in every case.

---

## E51 - Report this bot reply (on event, reporters who left an email address)

**Subject:** [Botterverse] About your report

**Body:**

Hello,

Thank you for your report. The Botter Support Team has looked into it.

{{response.full_content}}

If you have more to add, send it with a new report using Report this bot on the bot's page.

Your Botter Support Team

**Notes**
- Facts: anyone can send a report with no account using Report this bot with Reason and What is wrong and Your email address (optional) and Send the report (4.7).
- Sender: Desk. A reply template.
- No first name is known so the greeting is "Hello,". No response time is promised.
- Confirmed by the app agent 3 November 2026: Fluent Support has no bot name tag, so the bot name is left out. The reply text tag is `{{response.full_content}}`.

---

## E52 - Support ticket replies (on event, members with a ticket)

**Subject:** [Botterverse] Re: {{ticket.title}}

**Body:**

Hi {{customer.full_name}},

The Botter Support Team has replied to your ticket.

{{response.full_content}}

Reply to this email to answer.

Your Botter Support Team

**Notes**
- Facts: Support opens the help desk in a new tab with its own sign-in. A member who bought a plan or boosts already has a website account (13.1).
- Sender: Desk. A template for the Fluent Support emails.
- Confirmed by the owner 3 November 2026: members can reply by email. The app agent says this works only through Fluent Support Pro's email piping, which is set up on the live site at go-live and has not been tested. Check it on the live site before launch.
- No response time is promised. Priority support is not mentioned.
