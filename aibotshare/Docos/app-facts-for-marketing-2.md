# Facts for marketing, second round: two questions again, the plan upgraded email and three small questions

Read from the code on branch `phase-4/plan-upgraded`, answering `16-app-agent-prompt-follow-up-questions-and-plan-upgraded.md`. No live call was made and no live database was read. Where a value is a Back Office setting the default is given and staff decide it.

## Part 1 - Two questions asked again

**Q33 again. Declarations not re-confirmed in time.** Yes, the email is `moderation.declarations_overdue`.

**33.1 Time allowed. 14 days.** It is the Back Office setting **Moderation declaration grace period** (code `moderation.declaration_grace_period`). It sits on Settings under the Moderation section, not on Advanced settings. Staff decide it. Source: `app/Enums/SettingCode.php`, `app/Jobs/Batch/Children/SwitchOverdueBot.php`.

**33.2 Counted from. Different.** The clock starts when the round opens, not at the change itself. A saved change opens the round in the check that runs straight after the save. A scan finding or a staff lock opens it when it is made. `DeclarationRounds::openRound()` and `oweLocks()` set `bot.declaration_due_ts` to the current time and only where it is empty, so a second change during an open round does not restart the clock. A daily batch step (`OverdueDeclarationsStep`) switches bots whose time is older than 14 days, so the email can arrive up to one day after day 14.

**33.3 Does the email say how long. No.** The body says the declarations "have not been confirmed in time" and gives no figure. Subject: "Your bot {{ bot_name }} has been switched to Personal". Tags: `member_name`, `bot_name`, `builder_url`. File: `resources/mail/templates/moderation.declarations_overdue.md`.

**Q42 again. The seller's sale email.** Yes, it is `sales.sale_made`. Its subject (after the prefix) is "You have made a sale". The body says "Congratulations, you have made a sale." then lists **Bot**, **Sale** and **Added to your earnings**. It does not carry your wording.

**42.1 All three kinds with the same wording. Yes.** `MarketFulfilment::emailSeller()` is called for paywall access, a message top-up and a Bot Market sale. All three use the one template. Source: `app/Services/Market/Sales/MarketFulfilment.php`.

**42.2 Values of `sale_type_name`.** Exactly three: `Bot access` for paywall access, `Message top-up` and `Bot Market sale`.

**42.3 Buyer's username. No.** The tags are `member_name`, `bot_name`, `sale_type_name`, `earnings_amount` and `sales_url` only. Adding the buyer's username would need a code change, which was not made.

**42.4 Seller's share after the platform fee. Yes.** `earnings_amount` is the price less tax, less the platform fee (a percentage that comes from the seller's plan plus a fixed amount set in the Back Office) and less any affiliate commission. Source: `app/Services/Market/Sales/SalesSplit.php`. The email calls it "Added to your earnings".

**42.5 The switch.** **Sales** under **Email notifications** on Settings. Its description reads "An email for each sale you make, each review you receive and each affiliate commission credited to you." It turns off this email as well as the review and affiliate commission emails. **Insights** has no effect on it. Source: `EmailCode::switchOffColumn()` (`notify_sales`), `resources/views/settings/partials/notifications.blade.php`.

## Part 2 - Plan upgraded

**Built as `plan.upgraded`**, named **Plan upgraded** on Email templates. Subject: "Your plan is now {{ new_plan_name }}". Tags: `member_name`, `old_plan_name`, `new_plan_name`, `billing_url`. Always sent and members cannot switch it off. The layout adds the sign-off "Warm Regards," and "Your Botter Support Team" and the sender adds the subject prefix, so a sent subject reads `[Botter’s Lab] Your plan is now Master Botter`. Files: `resources/mail/templates/plan.upgraded.md`, `app/Enums/EmailCode.php`, `app/Services/Billing/Subscriptions/MemberTier.php` (`planUpgraded()`), migration `2026_11_01_000006_seed_plan_upgraded_email.php`.

**Where it is sent from.** `MemberTier::afterChange()` sends it with the other plan emails, once the new tier is saved. A retried event changes no tier, so it sends no second email.

**Part 2, question 1. Tags. Yes.** `old_plan_name` and `new_plan_name` are available at that point, as are `member_name` and `billing_url`. A plan name is the tier name staff set on the Feature matrix, seeded as for example "Novice Botter" and "Expert Botter".

**Part 2, question 2. Before the invoice is paid. Different.** The email goes when the new tier is saved. On the FluentCart upgrade route that happens after payment: the new subscription carries a trial, so it gives its tier only once an invoice of more than zero is paid or once FluentCart ends the old plan, which it does when the payment completes. A price change made directly on the same Stripe subscription takes effect before payment. "The change takes effect now" is true at the moment the email goes, because the tier, the plan's features and the bot limit change in the same step. Source: `PlanChangeWindow`, `SubscriptionMirror::trialGivesTier()`.

**Part 2, question 3. Paused bots. Yes they return and the count is available.** A move up returns the bots the lower plan paused, oldest first, up to the new limit. An unlimited plan returns all of them. Bots paused by the owner or by staff stay paused. The count is the figure `BotLifecycle::applyBotLimit()` returns in `MemberTier::refresh()`. The tag name would be `returned_bot_count`. It is not added and the wording does not mention it. A template is filled by plain tag replacement with no conditions, so a sentence using it would also appear with the figure 0 for a member who had no paused bots.

**Part 2, question 4. Closing or closed. Yes, none sent.** A member whose account is closing or closed is sent nothing, as is a banned member. A first plan and a return with no earlier tier send nothing either. A change of billing period on the same tier, such as monthly to annual, sends nothing.

**Part 2, question 5. Does Your plan list the plan's features. No.** The section shows the plan's name, **Billed monthly** or **Billed annually**, **Renews** or **Ends** with a date, for an annual plan the date of the next monthly credits, **Change your plan** and **Cancel my plan**. It does not list the plan's features or included credits. Source: `resources/views/billing/partials/plan.blade.php`.

**What I adapted**

1. The third paragraph. Your rule was to say "look under Your plan to see what the new plan includes" only if the section lists the plan's features. It does not. The body ends with the link line `[Open Billing and credits]({{ billing_url }})` as `plan.ended` and `plan.fewer_bots` do. If you want a sentence there, this one is true: "Open Billing and credits and look under Your plan to see how it is billed and when it renews."
2. The greeting is "Hi {{ member_name }}," as you wrote it. The other plan emails say "Hello".
3. The credits sentence and "The change takes effect now" are kept as written. The credits sentence is true when the email goes in the usual case, which is a paid move up. On a paid invoice the same call that saves the tier then expires the unused included credits and grants the new plan's amount. The history shows both. It is not true in these cases:
   - A change made inside Stripe on the same subscription with a zero-amount invoice. That invoice grants nothing, so nothing resets and nothing is added until the next period. A member cannot do this from the member area.
   - A change whose invoice is not yet paid when the app sees it, such as a late payment. The credits follow when the payment is recorded.
   - A tier that rises because a newer plan ended while an older and higher plan still runs. That needs two live plans and has no invoice, so no credits change.

**Tests.** `tests/Feature/Billing/PlanUpgradedEmailTest.php` covers a move from any tier to a higher one with the right names, a retried event, a first plan, a return with no earlier tier, a move down, a change of billing period, a closing and a closed account, the credits on a paid and a zero-amount change, the exact wording and the layout and sender.

## Part 3 - Three small questions

**A. Q23 restart gap. No, not deliberate.** It is how the code behaves and nobody decided it. No comment, spec or test addresses a member whose bots have stopped for want of credits. Source: `app/Services/Billing/Credits/AutoTopup.php` (`afterDeduct`). I suggest wording the daily cap email so that it does not promise a restart.

**B. Q25 re-agree flow. No, not deliberate.** It is how the code behaves and nobody decided it. The page comment says only that switching on is the agreement. The test `tests/Feature/Billing/AutoTopupWordingTest.php` calls the service directly and not the page. Source: `resources/views/billing/partials/auto-topup.blade.php`.

**C. Q48 tag word.** The word is `Auto Top Up`, with capitals on A and T and U and two spaces. The code default is `CrmHookCode::suggestedTag()` in `app/Enums/CrmHookCode.php`. The script `docs/live-data/set-live-values.php` writes the same word. There is no live CRM Integration row yet because the live app database is not built. I did not read the local database, since it does not hold the live values. When the live row is made, the tag on CRM Integration for the hook `auto_topup_charged` is `Auto Top Up`. A blank tag fires nothing and staff can change it.
