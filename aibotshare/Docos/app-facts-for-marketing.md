# Facts for the member emails

Answers to `15-app-agent-prompt-facts-to-confirm.md`, read from the code on `dev` on 1 November 2026. No code changed. Default templates and setting defaults are quoted, so a copy staff have since edited could read differently.

## Ask A: reports on briefs 13 and 14

**E13, bot paused by the Botter Support Team.** The app already sent `moderation.action_taken` with the staff reason for a pause. A new template, `moderation.bot_paused`, now goes in its place, with your wording and no reason. `moderation.action_taken` stays for unpause, delete and unlock. It is sent from `ModerationActionEmail::send()`, which `BotStaffService::pause()` and `ModerationDecisions::afterUphold()` both call. An uphold on a bot already paused by staff no longer sends a second email.

**E27, withdrawal failed or returned.** The app already sent `payouts.withdrawal_failed`, so it now holds your wording with a new `status` tag. It is sent from `PayoutEndings::failed()`. The status text comes from the same source as the Payouts page, so the two cannot differ. The old line about part of the payout fee being returned has gone, since your text drops it. "Stripe can no longer pay your bank account" is a separate event (`payouts.recipient_disabled`) and is unchanged.

**Plan ended and fewer bots.** `plan.ended` and `plan.fewer_bots` hold your wording. `plan.downgraded` keeps its body, is renamed "Plan downgraded" and goes only for a real move to a lower tier.

**What was adapted:**
- Sign-offs are left out of the bodies, because the mail layout adds "Your Botter Support Team".
- Subjects have no prefix in the template, because the app adds `[Botter's Lab]`.
- "our team" became "the Botter Support Team" in E13's subject and body, under the owner's rule of 21 October.
- A member whose account is closing or closed receives neither plan email, because "Your account is still open" would be wrong.
- `plan.ended` counts every bot still paused by the plan, not only those this change paused.

**Your marketing email for a member who pressed Cancel** must carry what `plan.ended` says, because that member does not receive `plan.ended`.


# Facts to confirm: Part 1 - Screens and features

Answered from the code on branch dev at commit 405b65ad. No code was changed.

Where a question asks for a list or a definition, **Yes** means the guide (`docs/member-guide/member-guide.md`) agrees with the code and **Different** means it does not. Dollar figures marked as defaults are Back Office settings, which the Botter Support Team's staff decide.

## 1. Bot analytics layout

**Yes.** In page order, under the **Bot** and **Date range** controls:

1. Four figures: **Conversations**, **Messages**, **Credits used**, **Revenue**
2. **Conversations over time**
3. **Conversation insights**
4. **Category benchmarks**
5. **Busiest hours**
6. **Top conversation starters**
7. **Conversion**, which holds **Paywall views**, **Listing views**, **Purchases** and **Conversion**

Each panel shows only for the level the plan holds and insights only where they apply. The guide groups the panels by level and does not say where insights sit (section 8.1).

File: `resources/views/livewire/analytics/analytics-page.blade.php`, `App\Livewire\Analytics\AnalyticsPage`.

## 2. Paywall views and Listing views

**Yes.** Paywall views counts each time a visitor is shown the paywall on a bot page. Listing views counts each opening of a listing's own page, not a card on Browse and not a hidden listing.

Each counts one visitor (by IP address) once per UTC day for each bot, variant and kind of view, so visitors sharing an address count as one. Views are saved only for dates before today, so today's views are not shown yet. The guide does not mention these limits.

File: `App\Services\Market\BotPages\PublicBotVisit`, `App\Livewire\Market\MarketListing`, `App\Services\Analytics\ViewCounterService`.

## 3. Listing views

**No.** The figure shows for every bot on the advanced level whether or not it is listed, so an unlisted bot shows 0. The whole panel shows its empty state only when Paywall views, Listing views and Purchases are all zero.

The guide does not say otherwise.

File: `resources/views/livewire/analytics/analytics-page.blade.php`.

## 4. Option labels

**Yes.** All three are on the integration form in the Bot builder's Integrations section. The third control's exact label is **Sent in the**, not "Sent in".

| Control | Options |
|---|---|
| **Method** | GET, POST, PUT, PATCH, DELETE (GET is preselected) |
| **Type** | String, Number, Boolean |
| **Sent in the** | Query, Body, Header |

The guide names the controls but not their options (section 9.1).

File: `resources/views/livewire/bots/integration-form.blade.php`, `App\Services\Bots\BotIntegrations`, `App\Enums\IntegrationParameterType`, `App\Enums\IntegrationParameterLocation`.

## 5. Analytics options

**No.** Bot analytics has none of the options in question 4. It has **Bot** (listing the member's bots) and **Date range** with **Last week**, **Last month**, **Year to date**, **Last 5 years** and **Custom range**.

The guide agrees on the two controls and does not list the date range options (section 8.1).

File: `resources/views/livewire/analytics/analytics-page.blade.php`, `App\Enums\DateRangePreset`.

## 6. Top conversation starters

**No.** It also counts typed messages. Pressing a starter sends its text as an ordinary message with no marker, then the panel counts each conversation whose first visitor message matches one of the bot's own current starters.

The match follows the database collation, whose default in `config/database.php` is `utf8mb4_unicode_ci`, which ignores case. A variant's starter counts only if it is also one of the bot's own. The guide says "how often each starter opened a conversation" and does not mention typed messages.

File: `resources/js/chat/ChatApp.vue`, `App\Repositories\Analytics\AnalyticsFiguresRepository::topStarters()`, `App\Services\Analytics\AnalyticsReport::topStarters()`.

## 7. Busiest hours

**Yes.** It uses the member's own timezone from their account settings. The default is Europe/London, which is also used if the saved name is not recognised.

The guide says the member's timezone (section 8.1).

File: `App\Support\DisplayTimezone`, `App\Support\ListensForDateRange`, `App\Repositories\Analytics\AnalyticsFiguresRepository::busiestHours()`.

## 8. Benchmarks

**Yes.** With no category the **Category benchmarks** panel is hidden and category figures count only the bots or live listings in that category. A figure also needs enough bots feeding it: 10 by default, which staff decide (`market.benchmark_minimum_sample`).

Messages per buyer and conversion cover the last 30 days by default, which staff decide (`market.benchmark_period`). The guide says the panel is hidden until enough bots feed it but does not say it is also hidden with no category (sections 3.4 and 8.1).

File: `App\Livewire\Analytics\AnalyticsPage::benchmarkRows()`, `App\Services\Analytics\BenchmarkService`, `App\Repositories\Analytics\BenchmarkRepository`.

## 9. A/B Results

**Yes.** Both cover the whole test and Bot Market sales are in neither.

- **Paywall conversion** is new paywall accesses with a successful payment, bought by a buyer talking to that version, divided by that version's paywall views, as a percentage. Purchases stop at the last date views are saved for, which is yesterday. It shows **No views** with no views. Top-ups are not counted.
- **Revenue per conversation** is the owner's net share of successful access payments and message top-ups credited to that version, divided by its conversations. It shows **No data** with no conversations.

The guide gives the names only (section 8.3).

File: `App\Services\AbTests\AbTestResults`, `App\Repositories\Analytics\AbTestResultsRepository`.

## 10. Choose as winner

**Yes.** The variant's instructions become the bot's new main version and its starters replace the bot's starters. The test ends with the status **Winner promoted**, so new conversations run the new main version.

Conversations already open stay on the version they started on. The name, model, knowledge, price and paywall do not change. A Public bot is scanned again. If the instructions are too large for the model the member sees a refusal and the test keeps running. The guide agrees with less detail (section 8.3).

File: `App\Services\AbTests\AbTestSetup::chooseWinner()`, `App\Services\Bots\BotSaver::saveInstructions()`, `App\Services\Bots\BotRescans`, `App\Services\Chat\ChatConversations`.

## 11. Variant Instructions

**Yes, it replaces them.** A conversation on a variant is answered from that variant's instructions in place of the bot's. A new variant's box starts filled with the bot's current instructions for the member to change.

A test varies instructions and starters only. The guide agrees (section 8.3).

File: `App\Services\Chat\ChatPromptBuilder`, `App\Services\Chat\ChatConversations`, `App\Livewire\AbTests\AbTestPage::blankVariant()`, `App\Services\AbTests\AbTestSetup`.

## 12. Variant field

**Yes.** The CRM event field `ab_variant` carries the name typed in **Variant name**. It is empty (null) on the bot's main version, so the control is not named.

The value comes from the customer's latest conversation on the bot when the event is built. The guide says only "the A/B variant the customer saw" (section 9.2).

File: `App\Services\Crm\Member\MemberCrmPayloads`.

## 13. Minimum price

**Yes.** The message shows beside the field and only when the price was changed, so an older price below a raised minimum stands.

| Where | Message at the default |
|---|---|
| Bot builder, **One-time price** | The price cannot be less than $5.00. |
| Bot builder, **Top-up price** | The top-up price cannot be less than $1.00. |
| List a bot for sale, **Price (USD)** | The price must be at least $5.00. |

The defaults are 500 cents (`sales.minimum_price`) and 100 cents (the minimum top-up price) and staff decide them. The listing form also shows **At least $5.00.** under the field. The guide agrees (sections 5.3 and 6.5).

File: `App\Services\Bots\BotSaver::checkPaywall()`, `App\Services\Market\Listings\ListingEditor::validate()`, `App\Enums\SettingCode`.

## 14. Save as draft

**Yes, with limits.** It stays available and saves while Submit is blocked by the name rule, missing licence terms, declarations not confirmed, an open refund request, updated terms not accepted on an existing draft, an unconfirmed email address or a check still running.

It is still refused for no category, no description, an invalid sale type or licence and a missing price or one below the minimum. It is also refused where the plan, account status or bot rules stop the listing and for a first save while updated terms are not accepted. The guide does not cover this and section 6.6 lists a missing category only as stopping a submission.

File: `App\Services\Market\Listings\ListingEditor` (`refuseAction()`, `validate()`, `submissionRefusals()`), `App\Livewire\Market\ListingForm`.

## 15. Rights

**Yes.** The only difference is what copies the holder may sell. **Resell rights** sells copies on Personal use. **Master resell rights** sells copies on Personal use or Resell rights.

Both may use the bot, make it Public and put it behind a paywall. Both sell by Multi-sell only, may not edit or rebrand it and cannot see its instructions or knowledge files. The guide agrees (section 6.2).

File: `App\Services\Market\MarketLabels::licenceSummary()`, `App\Services\Market\Listings\ListingEditor`, `App\Services\Bots\BotLicence`.

## 16. Personal use

**No.** The **Paywall and pricing** section shows "A bot you hold on a personal licence cannot be paywalled." in place of its fields. The server refuses the switch with "A bot you hold on a personal licence stays private, so it cannot have a paywall."

The guide agrees (sections 5.2 and 6.2).

File: `App\Services\Bots\BotLicence::mayBePublicOrPaywalled()`, `App\Services\Bots\BotSaver::checkPaywallSwitch()`, `resources/views/livewire/bots/bot-builder.blade.php`.

## 17. Top Rated

**Yes.** The seller needs at least 10 published Bot Market reviews with an average of at least 4.50 stars. Both are defaults that staff decide (`market.top_rated_minimum_reviews` is 10 and `market.top_rated_minimum_average` is 450 hundredths of a star).

It is worked out across all the seller's reviews each time a page loads, so it shows only while the condition holds. Access ratings do not count. The guide gives no figures, saying only "A high average rating from enough reviews" (section 6.8).

File: `App\Services\Market\Reputation\MarketReputation::badges()`, `App\Repositories\Market\MarketFiguresRepository::sellerReviews()`, `App\Enums\SettingCode`.

## 18. Data export

**Yes.** It is built on dev for every account with no plan gate, linked as **Data export** at the foot of Settings. The launch date itself is not in the code, so the owner decides it.

Files are kept for 7 days by default, which staff decide. The guide agrees (section 12.4).

File: `App\Http\Controllers\Export\ExportPageController`, `App\Livewire\Export\ExportPage`, `routes/web.php`, `resources/views/settings/index.blade.php`.

## 19. Insights

**Yes.** The report opens on **Bot analytics**, in the **Conversation insights** panel under **Conversations over time**. It has no page of its own.

The ways in are **Analytics** in the menu, a bot on the Dashboard, **Full analytics** in the Bot builder and the link in the `insight.ready` email (`analytics_url`). The guide agrees (sections 8.1 and 8.2).

File: `resources/views/livewire/analytics/analytics-page.blade.php`, `App\Services\Insights\InsightPanel`, `App\Services\Insights\InsightReadyEmail`, `App\Support\Navigation\PageRoute::botAnalytics()`.

## 20. CRM connection

**Yes.** **Send test event** shows whenever a connection exists and nothing checks whether it is switched on. The page says "Your connection was switched off after repeated failures." above the button.

A test does not switch the connection back on and does not change its failure count or last error, so the member still presses **Switch on**. Presses are limited to 5 per minute by default, which staff decide. The guide does not cover this case (section 9.2).

File: `resources/views/settings/partials/crm-connection.blade.php`, `App\Services\Crm\Member\CrmConnections::sendTest()`, `App\Services\Crm\Member\WebhookCrmAdapter::sendTest()`, `App\Enums\SettingCode`.

# Facts to confirm: Parts 2 and 3 (questions 21 to 38)

Read from the code on branch dev on 1 November 2026. Nothing was run or changed. Paths are relative to the members folder. Email subjects are the default files in `resources/mail/templates/`, which staff can edit in the Back Office.

## Part 2 - Credits and billing

**21. Credits low. Yes.**
It goes whether or not Auto top-up is on, since the check never reads the switch. The trigger is a usage charge (a message or an insight report) that leaves the balance below the member's threshold while no low-credit level is saved. It goes once per crossing, but any credits added clear the level, so the next charge below the threshold sends it again even if the balance never rose above it.

- Subject: "Your credits are running low".
- Threshold: the member's **Top up when my credits fall below**. A new member starts on 1,000 credits, the Back Office setting `credits.auto_topup_threshold` (default 10000000 micro-credits), which staff decide.
- Wording point: the email says "the threshold you set", though a member who never opened the section is on the default.
- Source: `app/Services/Billing/Credits/CreditAlerts.php`, `CreditLedgerManager.php`, `app/Enums/SettingCode.php`.
- Guide: section 10.1 agrees but does not say the email also goes with Auto top-up off.

**22. Credits added. Yes, from the next message.**
Nothing needs pressing, since the chat runs its credit check on each message and the first message it lets through clears the stopped state. That check needs the balance to cover the message's worst-case cost and not merely to be above zero, so a very small top-up can still be refused.

- Source: `app/Services/Billing/Credits/CreditAlerts.php` (`afterPreCheck`), `CreditLedgerManager.php` (`hasCredit`), `app/Services/Chat/ChatMetering.php`, `ChatGate.php`.
- Guide: section 10.1 says "Topping up starts the bots again". That agrees but leaves out the worst-case check.

**23. Auto top-up daily cap. Midnight UTC.**
The day is counted from UTC midnight using that day's succeeded and pending top-ups, so a declined charge does not use the allowance. The cap is the Back Office setting `credits.auto_topup_daily_limit`, default 3 per UTC day, which staff decide.

- Restart point: nothing runs at midnight. The next attempt comes from the next usage charge that leaves the balance below the threshold, which are the only first attempts I found. A member whose bots have already stopped for want of credits has no message charged, so no new attempt starts until credits are added by other means or an insight report is charged.
- Email: "Auto top-up is paused for now", which says "resets at midnight UTC" and "starts again later by itself". The second phrase does not hold in the case above.
- Source: `app/Services/Billing/Credits/AutoTopup.php` (`limitReached`, `afterDeduct`), `app/Enums/SettingCode.php`.
- Guide: section 10.4 says "until the next day" and does not name UTC.

**24. Two declines. Yes.**
The second decline switches Auto top-up off and the page then offers **Agree and switch on**, which the member must press. The button shows only with a card on an active subscription and the threshold and amount are kept. The retry waits for the Back Office setting `credits.auto_topup_retry_period`, default 24 hours, which staff decide.

- Email: "Auto top-up has been switched off".
- Source: `app/Services/Billing/Credits/AutoTopup.php` (`declined`), `resources/views/billing/partials/auto-topup.blade.php`.
- Guide: section 10.4 agrees that it switches off and does not name the button for this case.

**25. Updated statement. Different.**
The only label is **Agree and switch on**, but the member cannot press it straight away. A newer statement pauses charges while the switch stays on, so the page reads "Auto top-up is on" and shows only **Switch off**. The member must press **Switch off** and then **Agree and switch on**.

- Email: "Please review the new auto top-up terms", sent at the first charge the new statement blocks and not when staff save it. It says "switch it on from the Billing page" and does not mention switching off first.
- Source: `resources/views/billing/partials/auto-topup.blade.php`, `app/Livewire/Billing/BillingAutoTopup.php`, `app/Services/Billing/Credits/AutoTopup.php` (`begin`). The test `tests/Feature/Billing/AutoTopupWordingTest.php` calls the service directly and not the page.
- Guide: section 10.4 says it "pauses until the member agrees to the new one" and does not mention this step, so the guide and the email both differ from the page.

**26. Bank approval. Stays on. Yes, an email is sent.**
The switch is not changed. No new attempt starts until added credits bring the balance back to the threshold or above or the member switches it off.

- Email: "Your bank needs you to approve a top-up", with the amount and a **Buy credits** link.
- Source: `app/Services/Billing/Credits/AutoTopup.php` (`approvalNeeded`, `afterGrant`), `app/Services/Billing/BillingPreferences.php`.
- Guide: section 10.4 agrees that it is not retried. It does not say that it stays on or that this email goes.

**27. Refunded credit pack. No email. The figure exists but no email carries it.**
The email register has no email for this. A pack is refunded by staff in FluentCart or Stripe and reaches the app through Stripe's `charge.refunded`. Whether FluentCart sends its own email is for FluentCart to decide. The credits removed are saved as a `refund` row in the credit ledger and show in the history as **Refunded purchase**, so supplying them would need a new email and a code change.

- Rule: the credits removed are the refunded share of the pack, capped at the balance at the time.
- Source: `app/Services/Billing/Refunds/StripeRefundEvents.php`, `RefundFollowOns.php` (`removeCredits`), `app/Services/Billing/Credits/CreditLedgerManager.php` (`removeCapped`), `app/Enums/EmailCode.php`.
- Guide: section 10.3 says "its credits are removed, up to the balance at the time" and does not cover a partial refund.

**28. Receipts. Yes for plans and credit packs, but FluentCart and Stripe send them and decide.**
The app sends no receipt and sets no `receipt_email` on any Stripe charge. The Billing page says "Our cart software and payment processor send your receipts and invoices to the email on this account." An email change on Settings carries through to Stripe and the billing login.

- Auto top-up: the app's own email, `credits.auto_topup_charged`, goes to the account email. Whether Stripe also sends a receipt depends on Stripe's account settings.
- Source: `resources/views/billing/partials/plan.blade.php`, `app/Services/Billing/Stripe/StripeApiGateway.php`, `app/Services/Billing/Credits/AutoTopup.php`.
- Guide: section 10.8 agrees for plans and packs and does not mention auto top-up.

**29. Billing sign-in. Yes.**
The billing login and the help desk sign-in are the same WordPress account. FluentCart makes a new one only for an email that has none. **Open the customer area** goes to the billing sign-in page and then on to the customer area. What the customer area then shows is for FluentCart to decide and I did not test it.

- Source: `wordpress/plugins/btv_checkout_guard/includes/BuyerAccount.php`, `app/Services/Billing/BillingLinks.php` (`customerArea`).
- Guide: section 10.8 agrees.

## Part 3 - Account and security

**30. Sign-in links. Different by type of link.**
The app has no link that signs a member in. The three links that do exist behave differently.

- **Password reset: Yes.** Laravel deletes the earlier token when it makes a new one. A repeat request within 60 seconds is throttled, so no fresh link goes and the earlier one still works.
- **Email confirmation: No.** Each link is signed with its own expiry, so an earlier one works until it expires. A link made for a different pending address stops working, since the link is tied to the address.
- **Billing login password: Yes.** WordPress replaces its reset key each time, so WordPress decides this.
- Source: `vendor/laravel/framework/src/Illuminate/Auth/Passwords/DatabaseTokenRepository.php`, `config/auth.php`, `app/Models/User.php` (`emailVerificationUrl`), `wordpress/plugins/btv_checkout_guard/includes/BuyerAccount.php`.
- Guide: silent.

**31. Link validity. 60 minutes for both app links.**

- **Password reset:** 60 minutes, fixed in `config/auth.php` and not a Back Office setting. The email says "The link works for the next hour." An expired link shows "That reset link has expired or has already been used. Please ask for another."
- **Email confirmation:** 60 minutes, the fallback in `User::emailVerificationUrl()` since `auth.verification.expire` is not set. The email states no time.
- **Billing login password:** the plugin sets no limit, so WordPress decides.
- Guide: silent on the 60 minutes. Section 10.8 gives 24 hours for the billing link, which the code does not set.

**32. Password change. No.**
Neither a change on Settings nor a forgotten password reset sends an email. The register has no such email. Settings shows the message "Your password is changed." and signs out other devices. The separate billing login does send WordPress's "Password Changed" notice, in the plugin's wording.

Changed on 3 November 2026: the app now sends `auth.password_changed` ("Your password has been changed") to the account's address after every saved change, through Settings or a forgotten password link. No Email notifications switch turns it off. The answer above is how it stood when it was written.

- Source: `app/Livewire/Settings/SettingsPassword.php`, `app/Http/Controllers/Auth/PasswordResetController.php`, `app/Enums/EmailCode.php`, `BuyerAccount.php`.
- Guide: silent.

**33. Time allowed. 60 minutes, assuming event 11 is the password reset email.**
"Event 11" appears nowhere in the code or in `E:\Projects\AIBotShare\Docos` beyond the question itself, so this is my assumption: `auth.password_reset`, subject "Reset your password". The 60 minutes applies to the reset link, from when it is made.

- If event 11 is the email change warning (`auth.email_change_requested`), that email carries no time limit. The confirmation link sent to the new address lasts 60 minutes.
- Source: `config/auth.php`, `resources/mail/templates/auth.password_reset.md`, `auth.email_change_requested.md`.

**34. Suspension reason. No. Not as built.**
The email's only tags are `member_name` and `terms_url`. Staff must enter a reason, but it is saved only in the audit log as `user.suspended` and the code's rule is "never emailed". The reason is available when the email is sent, so including it would need a template and code change plus the owner's decision.

- Subject: "Your account has been suspended".
- Source: `app/Services/Staff/AccountSanctionsService.php`, `resources/mail/templates/account.suspended.md`.
- Guide: silent on a reason.

**35. Suspension lifted. Different.**
Lifting the suspension does nothing to the withdrawal itself, which stays `requested`. It then follows its normal route. In API mode the next payout run sends it with no staff action. In manual mode staff send it by hand as they do any other, which the Back Office refuses only while the suspension lasts. The mode is the Back Office setting `payouts.mode`, default `manual`, which staff decide.

- Email: `account.reinstated` says "anything you had held is released as normal".
- Source: `app/Services/Staff/AccountSanctionsService.php` (`reinstate`), `app/Services/Market/Payouts/PayoutSender.php`, `PayoutReportActions.php`, `app/Jobs/Batch/Steps/PayoutsStep.php`, `app/Enums/SettingCode.php`.
- Guide: section 12.3 says "held, not cancelled" and is silent on release.

**36. Account closed. Yes, because it is sent before the address is removed.**
The sweep sends `account.closed` (subject "Your account is closed") and only then replaces the address. If the send fails the fault is logged, there is no retry and the removal goes ahead. The email does not mention a withdrawal.

An open withdrawal at that point goes one of these ways:

- **No active payout recipient:** cancelled. The amount returns to the earnings and is forfeited with the rest.
- **Active recipient, API mode:** sent at once, ignoring the payout day.
- **Active recipient, manual mode:** stays open for staff to send by hand.
- **Already being sent:** left to finish.
- **Later emails:** if the payment completes after the address is removed, `payouts.withdrawal_sent` is not sent and neither is the member's failure email.
- Source: `app/Services/Closure/AccountSweep.php`, `app/Services/Market/Payouts/PayoutWithdrawals.php` (`settleForClosure`), `PayoutEndings.php` (`emailSent`, `failed`).
- Guide: section 12.5 says "sent if there is an active payout recipient, otherwise it is cancelled". That leaves out the wait for staff in manual mode.

**37. Reopening. Yes to both.**
Reopening clears the end date that closing set, so the plan carries on and renews. It is left out when `has_cancellation_at_closure` shows the plan was already set to cancel before closing. It is also left out when the paid period has already ended, in which case the member returns with no plan. Auto top-up stays off in every case.

- Source: `app/Services/Closure/AccountReopening.php`, `AccountClosing.php`, `app/Services/Billing/Subscriptions/MemberBillingManager.php`.
- Guide: section 12.6 agrees.

**38. Plan ended. Yes, up to the new plan's bot limit.**
Choosing a plan returns the bots the plan paused, oldest first, up to the limit. An unlimited plan returns all of them. Bots paused by the owner or by staff stay paused. If any stay paused by the plan the member receives "Your new plan allows fewer bots" with the limit and the number still paused. A returned bot still needs credits to answer.

- Source: `app/Services/Bots/BotLimits.php` (`enforce`), `app/Services/Billing/Subscriptions/MemberTier.php`, `resources/mail/templates/plan.ended.md`.
- Guide: sections 10.6 and 10.7 agree.

# Facts to confirm: Part 4 and asks B and C

Read from the code on branch `dev`. Nothing was changed, no database was read and no live call was made. Ask A is left to the coordinator.

Where a value is a Back Office setting, the default is given and staff decide it. These settings are on Settings unless marked Advanced, in `app/Enums/SettingCode.php`.

## Part 4 - Sales, refunds, payouts and tags

**39. Refund access. Different, by kind of sale.**
- Paywall access: the access is revoked once the refund has settled and the buyer's rating is deleted if that access is their newest on the bot. Unused top-ups are refunded with it.
- One top-up refunded alone: only its messages come off and the access stays.
- Bot Market Transfer: the bot returns to the seller from the sale's snapshot. Bot Market Multi-sell: the buyer's copy is deleted and the original is untouched.
- A bot the buyer has already put on sale stays with them. Only a lost chargeback can reach that case, since Request a refund is refused after a bot is put on sale.

Files: `app/Services/Billing/Refunds/RefundFollowOns.php`, `app/Services/Billing/Refunds/RefundRouteTable.php`, `app/Services/Market/Requests/RefundRequests.php`. The guide agrees (sections 5.6 and 7.3).

**40. Claims. Yes, a claim can be declined, by the Botter Support Team only. The buyer is emailed either way.**
A seller cannot decline a paywall guarantee claim. They can refund it or ask the Botter Support Team to review. If they do neither it is refunded automatically after `sales.guarantee_response_period` (default 3 days, staff decide). Staff decide claims on the Refunds queue only where the seller referred them, the buyer has more than `sales.guarantee_claim_review_count` earlier claims in 12 months (default 3, staff decide) or the sale was disputed.

| Decision | Buyer's email | Subject |
|---|---|---|
| Guarantee claim refused | `sales.guarantee_claim_rejected` | Your guarantee claim was not approved |
| Guarantee claim refunded | `sales.refund_issued` | You have been refunded |
| Bot Market request refused | `market.refund_rejected_buyer` | Your Bot Market refund request was not approved |
| Bot Market request refunded | `market.refund_approved_buyer` | Your Bot Market refund has been paid |

Neither refusal email gives the reason: staff's decision note is not one of the tags. The refunded emails go when the refund succeeds, not at the approval. Files: `app/Services/Market/Requests/RefundRequests.php`, `app/Services/Market/Requests/RefundQueue.php`, `app/Jobs/Batch/Children/RefundGuaranteeClaim.php`. The guide agrees (section 5.5).

**41. Contacting a seller. No.**
No page has a control that lets a buyer message a seller. The refund and claim reasons go through the refund flows, the seller's Comment is for the Botter Support Team and the refusal emails send the buyer to the Botter Support Team. Files: `resources/views` (searched for contact wording), `app/Services/Market/Requests/RefundRequests.php`. The guide offers no such route either, including on the seller profile.

**42. Event 23. No, the wording differs.**
Assumption: no document here holds the numbering, so 23A, 23B and 23C are taken to mean the three Bot Market refund emails to the buyer. Please confirm with the marketing agent.

| Assumed event | Template | Subject (after the prefix) |
|---|---|---|
| 23A | `market.refund_requested_buyer` | We have received your refund request |
| 23B | `market.refund_approved_buyer` | Your Bot Market refund has been paid |
| 23C | `market.refund_rejected_buyer` | Your Bot Market refund request was not approved |

If the numbering means the three refund-paid emails instead, the wording differs there too:

| Template | Subject (after the prefix) |
|---|---|
| `sales.refund_issued` | You have been refunded |
| `market.purchase_refunded_unavailable` | Your payment has been refunded |
| `sales.blocked_country_refund` | Your payment has been refunded |

The last two share a subject and a closing line but give different reasons. Files: `resources/mail/templates/`.

**43. Commission. Yes, it is built to be paid at launch. The rates are 50% of the first payment and 20% of every later payment.**
The daily batch imports referrals from FluentAffiliate and its nightly Commission payment step pays each commission that is due, in every payout mode, with no staff action (the owner's decision of 3 November 2026). Nothing in the code switches this off. Staff act only on a commission the card check holds for them on Commission review. Its Pay commissions button can pay sooner than the nightly run.

How the app derives the rates: it does not read FluentAffiliate's Commission Rate or Renewal Rate. FluentAffiliate tells the app that a referral exists and the app works out the amount itself from two settings:

| Setting | Default | Label in the owner's terms |
|---|---|---|
| `affiliate.first_payment_rate` | 5000 basis points, which is 50% | Commission Rate 50% |
| `affiliate.recurring_rate` | 2000 basis points, which is 20% | Renewal Rate 20% |

Staff decide both. The live plan keeps these defaults (`docs/live-data-plan.md`). The owner's FluentAffiliate figures match them, but nothing keeps the two in step: if one is changed the other does not follow and the app's figure is what is paid.

Details:
- First payment means the payer's first ever subscription payment, whatever the tier. Every other payment is at 20%, including the first payment after an upgrade.
- The base is the plan's part after tax. Credit packs and order bumps earn nothing.
- A commission is payable only once `sales.refund_period` has passed since the payment (default 14 days, staff decide).
- The programme is part of Novice Botter and above.

Files: `app/Services/Commissions/CommissionWorkings.php`, `app/Services/Commissions/CommissionPayRun.php`, `app/Jobs/Batch/Steps/CommissionImportStep.php`. The guide gives no percentages and agrees on the rest (sections 11.1 and 11.4). `docs/marketing/botterverse-brief.md` line 303 says the import, review and payment steps are still being built: the code differs, since all three exist. Its 50% and 20% (lines 279 and 280) match. The FluentAffiliate settings themselves were not checked, since that needs a live call. `docs/live-data/wordpress-cleanup-report.md` line 189 recorded 20% on the local site before the owner's change.

**44. Disputes. Different: Comment is not a dispute action.**
Comment belongs to an open Bot Market refund request, until `market.refund_comment_period` runs out (default 3 days, staff decide). A paywall or top-up sale never offers it. A disputed sale offers only the note "The buyer's bank is deciding a dispute on this sale, so it cannot be refunded here." The one overlap is a Bot Market sale with an open request that is then disputed: the page checks the request alone, so Comment stays until its date. Files: `app/Services/Market/Sales/SalesPageRows.php`, `resources/views/livewire/market/partials/sale-body.blade.php`. The guide agrees (section 7.1).

**45. Withdrawal amount. Different, by email.**
- `payouts.withdrawal_sent` carries `sent_amount` (the sum withdrawn less the fee) with `fee_amount` beside it. Labels: "Amount sent" and "Payout fee". The sample is $246.75 and $3.25.
- `payouts.withdrawal_failed` carries `amount`, which is the whole sum withdrawn before the fee.

If Stripe's actual fee is lower the difference goes back to the earnings, as the sent email says. Files: `app/Services/Market/Payouts/PayoutEndings.php`, `resources/mail/templates/`. The guide does not describe the emails. Its **What will arrive** on Payouts is the same idea as `sent_amount` (section 7.5).

**46. Refund timing. Different.**
The app states no figure of its own: the bank and Stripe decide. The buyer emails say "Your bank may take a few days to show" the refund.

A full refund ends the plan at once only in these cases:

| Case | Plan |
|---|---|
| Staff refund the current period's plan payment in full in FluentCart or Stripe | Cancelled in Stripe at once and the account lapses, unless another subscription still gives access |
| Lost chargeback on a subscription payment | Ended at once, whatever the period |
| A part refund or a refund of an older payment | Carries on |
| A refund of an order bump alone | Carries on |
| Annual plan cancelled by the member | Runs to the end of the current month, then each whole month left is refunded (`billing.annual_refunded`) |

A member has no refund button for a plan. Files: `app/Services/Billing/Refunds/StripeRefundEvents.php`, `app/Enums/RefundFollowOn.php`, `app/Services/Billing/Payments/Disputes.php`, `app/Services/Billing/Subscriptions/MemberBillingManager.php`. The guide agrees on annual plans (section 10.7) and does not mention the staff refund or chargeback cases.

**47. Refund period and holdback. Yes to all three.**
- `sales.refund_period`: default 14 days, staff decide.
- `payouts.holdback_period`: default 21 days, staff decide. It must stay longer than the refund period, shorter than the closure grace period and below 90.
- Both apply to paywall sales, top-ups and Bot Market sales. A paywall guarantee has its own length of 7 or 14 days, up to the refund period. A listing affiliate's share waits for the holdback too. A subscription commission does not, since it is added only after the refund period.
- Bot Market refunds are decided by the Botter Support Team on the Refunds queue. The seller can only comment and the Refund button is never offered on a Bot Market sale.

The holdback extends while a dispute or a refund request is open. Files: `app/Enums/SettingCode.php`, `app/Services/Billing/Earnings/EarningsLedgerManager.php`, `app/Services/Market/Sales/SalesRefunds.php`, `app/Services/Market/Requests/RefundRequests.php`. The guide agrees and gives no figures (sections 7.2 and 7.3).

**48. Tags. Different for Power User.**
The app sets all of these by firing a hook into FluentCRM. The tag word is set on CRM Integration in the Back Office, a blank tag fires nothing and `docs/live-data/set-live-values.php` holds the live words.

| Tag | Rule |
|---|---|
| Bot Market Seller | When the member's first ever listing goes Live, never at submission. `app/Services/Market/Listings/ListingLifecycle.php` |
| Dormant | `account.dormant_period` days after the member was last active, for an active account, once per spell, found by the daily batch. Default 60 days on Advanced settings, staff decide. It is measured from any signed-in request and not from sign-in itself. Staff impersonating do not count. `app/Jobs/Billing/MarkDormantMembers.php`, `app/Http/Middleware/RecordLastActive.php` |
| Power User | No longer exists. The owner renamed it `Auto Top Up` on 25 October 2026. Rule: the member's first successful auto top-up only, with no test of credit use. `app/Services/Billing/Credits/AutoTopup.php`, `app/Enums/CrmHookCode.php` |

The guide does not cover these tags.

**49. Included credits. Bought credits always stay. Included credits go as follows.**

| Event | Included credits | Bought credits |
|---|---|---|
| Renewal or the next month of an annual plan | Unused part reset, then the plan's amount added | Stay |
| Move up, on the paid invoice | Unused part reset, then the new plan's amount added | Stay |
| Move down by cancelling then buying the lower plan | Reset when the old plan ends, then the new plan's amount added on its first payment | Stay |
| Plan ends | Unused part reset, nothing added and auto top-up switches off | Stay |

Usage spends included credits first. The history row reads "Unused included credits were reset."

One point to check against `plan.downgraded`: a zero-amount invoice for a change within a period grants nothing, so nothing resets until the next paid period. The email says "Included credits you had not used have been reset" as soon as the tier falls, which would not yet be true in that case. Members cannot move down this way themselves, since the guide's route is to cancel and buy again, so it could arise only from a change made outside the member area. I read this from the code and did not run it.

Files: `app/Services/Billing/Credits/IncludedCredits.php`, `app/Services/Billing/Subscriptions/PeriodGrants.php`, `app/Services/Billing/Subscriptions/AccountLapse.php`. The guide agrees (sections 10.6 and 10.7) and the `plan.ended` wording matches.

## Part 5 - Asks B and C

**B. E13 subject. Yes, with one character to note.**
The sent subject reads `[Botter’s Lab] Your bot has been paused by the Botter Support Team`, with the prefix once. The apostrophe is the typographic ’ and not the straight one in the brief. The template holds "Your bot has been paused by the Botter Support Team" and the sender adds the prefix from `notify.subject_prefix` (default `[Botter’s Lab] `, on Advanced settings, staff decide). Staff can also edit the subject on Email templates. Files: `resources/mail/templates/moderation.bot_paused.md`, `app/Services/EmailTemplateService.php`, `tests/Feature/Safety/BotManagementActionsTest.php` line 144.

**C. Moving up a tier. No, the app sends no email when a member moves up.**
`MemberTier::afterChange()` sends nothing on a move up (`app/Services/Billing/Subscriptions/MemberTier.php`), so please send the wording. It fires CRM hooks instead: `tier_reached_*` for the new tier and `tier_upgraded_from_*` for the old one (Apprentice, Novice, Expert or Pro only), so a FluentCRM automation could send one from the marketing side. `plan.fewer_bots` is a separate case: it goes when a member with no plan buys one and bots stay paused.

**C. Every email and its tags.**
There are 72 templates in `resources/mail/templates`. Every subject is sent with the prefix in ask B. The tags are the ones each template allows, from its own file. Staff can edit the text on Email templates but can use only these tags.

Emails to members (61):

| Email | Subject | Tags |
|---|---|---|
| `account.banned` | Your account has been closed | member_name, terms_url |
| `account.billing_email_updated` | Your billing email has been successfully updated | member_name, new_email |
| `account.closed` | Your account is closed | member_name |
| `account.closing` | Your account is closing | member_name, closure_date, reopen_url |
| `account.reinstated` | Your account has been reinstated | member_name, dashboard_url |
| `account.reopened` | Your account is reopened | member_name, dashboard_url |
| `account.suspended` | Your account has been suspended | member_name, terms_url |
| `affiliate.commission_credited` | You have earned an affiliate commission | member_name, amount, affiliates_url |
| `auth.email_change_requested` | A change to your email address was requested | member_name, new_email, settings_url |
| `auth.forgot_username` | Your username | member_name, username, login_url |
| `auth.password_changed` | Your password has been changed | member_name, login_url, support_url |
| `auth.password_reset` | Reset your password | member_name, reset_url |
| `auth.verify_email` | Please confirm your email address | member_name, verify_url |
| `billing.annual_refunded` | We have refunded the unused months of your annual plan | member_name, month_count, refund_amount, billing_url |
| `credits.auto_topup_approval_needed` | Your bank needs you to approve a top-up | member_name, amount, topup_url |
| `credits.auto_topup_charged` | Your credits have been topped up | member_name, amount, credits_added, credit_balance, billing_url |
| `credits.auto_topup_failed` | Auto top-up has been switched off | member_name, amount, billing_url |
| `credits.auto_topup_limit_reached` | Auto top-up is paused for now | member_name, amount_charged_today, billing_url |
| `credits.auto_topup_paused` | Please review the new auto top-up terms | member_name, billing_url |
| `credits.bot_daily_limit_reached` | {{ bot_name }} has reached its daily credit limit | member_name, bot_name, bot_settings_url |
| `credits.low_balance` | Your credits are running low | member_name, credit_balance, topup_url |
| `credits.zero_balance` | Your bots have stopped answering | member_name, topup_url |
| `crm.connection_disabled` | Your CRM connection has been switched off | member_name, last_error, crm_settings_url |
| `document.terms_updated` | We have updated our {{ document_name }} | member_name, document_name, effective_date, document_url |
| `export.ready` | Your data export is ready to download | member_name, expiry_date, download_url |
| `insight.ready` | Conversation insights for {{ bot_name }} are ready | member_name, bot_name, period_start_date, period_end_date, analytics_url |
| `licence.terms_updated` | The licence terms for a bot you bought have been updated | member_name, seller_username, terms_page_url |
| `market.bot_purchased` | Your bot is ready in your Bot list | member_name, listing_title, seller_username, amount, terms_page_url, bots_url |
| `market.listing_live` | Your listing {{ listing_title }} is now live | member_name, listing_title, listing_url |
| `market.purchase_refunded_unavailable` | Your payment has been refunded | member_name, purchase_name, amount |
| `market.refund_approved_buyer` | Your Bot Market refund has been paid | member_name, listing_title, refund_amount, bots_url |
| `market.refund_approved_seller` | A Bot Market sale has been refunded | member_name, listing_title, earnings_amount, sales_url |
| `market.refund_rejected_buyer` | Your Bot Market refund request was not approved | member_name, listing_title, bots_url |
| `market.refund_rejected_seller` | A refund request on your sale was not approved | member_name, listing_title, sales_url |
| `market.refund_requested_buyer` | We have received your refund request | member_name, listing_title, bots_url |
| `market.refund_requested_seller` | A buyer has asked for a refund | member_name, listing_title, buyer_username, comment_by_date, sales_url |
| `market.review_received` | A buyer has reviewed your listing | member_name, listing_title, rating, listing_url |
| `model.retired` | The {{ model_name }} model has been retired | member_name, model_name, bot_count, bots_url |
| `moderation.action_taken` | We have taken action on your bot {{ bot_name }} | member_name, bot_name, outcome_name, reason, builder_url |
| `moderation.bot_paused` | Your bot has been paused by the Botter Support Team | member_name, bot_name, bot_list_url, support_url |
| `moderation.bot_unpublished` | Your bot {{ bot_name }} has been switched to Personal | member_name, bot_name, category_name, builder_url |
| `moderation.breach_rejected` | Your licence breach report about {{ buyer_username }} | member_name, listing_title, buyer_username, sales_url |
| `moderation.breach_upheld` | Your licence breach report about {{ buyer_username }} was upheld | member_name, listing_title, buyer_username, sales_url |
| `moderation.declarations_overdue` | Your bot {{ bot_name }} has been switched to Personal | member_name, bot_name, builder_url |
| `moderation.licence_revoked` | Your licence for {{ bot_name }} has been revoked | member_name, bot_name, seller_username, terms_page_url |
| `moderation.licence_revoked_banned` | Your licence for {{ bot_name }} has been revoked and your account banned | member_name, bot_name, seller_username, terms_page_url |
| `moderation.scan_refused` | The model provider refused the text of your {{ item_name }} | member_name, item_name, reason, outcome, item_url |
| `moderation.seller_action_taken` | We have taken action on your {{ item_name }} | member_name, outcome_name, item_name, item_url |
| `payouts.recipient_disabled` | Your payout details need attention | member_name, payouts_url |
| `payouts.withdrawal_failed` | Your withdrawal didn't reach your bank | member_name, amount, status, payouts_url |
| `payouts.withdrawal_sent` | Your withdrawal is on its way | member_name, sent_amount, fee_amount, payouts_url |
| `plan.downgraded` | Your plan has changed | member_name, paused_bot_count, bots_url, billing_url |
| `plan.ended` | Your plan has ended | member_name, paused_bot_count, pricing_url, billing_url |
| `plan.fewer_bots` | Your new plan allows fewer bots | member_name, bot_limit, paused_bot_count, bots_url, billing_url |
| `sales.access_purchased` | Thank you for your purchase | member_name, bot_name, purchase_type_name, amount, bot_url |
| `sales.blocked_country_refund` | Your payment has been refunded | member_name, amount |
| `sales.chargeback_opened` | A buyer has disputed a payment for your bot | member_name, bot_name, amount, sales_url |
| `sales.guarantee_claim_made` | A buyer has claimed your bot's guarantee | member_name, bot_name, buyer_username, amount, respond_by_date, sales_url |
| `sales.guarantee_claim_rejected` | Your guarantee claim was not approved | member_name, bot_name, seller_username, my_bots_url |
| `sales.refund_issued` | You have been refunded | member_name, bot_name, seller_username, refund_amount |
| `sales.sale_made` | You have made a sale | member_name, bot_name, sale_type_name, earnings_amount, sales_url |
| `sales.unavailable_warning` | Your bot's paying customers cannot use it | member_name, bot_name, days_remaining, bot_url |

Emails to staff at `notify.admin_email` (11), which members never receive:

| Email | Subject | Tags |
|---|---|---|
| `notify.chargeback_opened` | A buyer has disputed a payment | transaction_ref, amount, seller_username |
| `notify.daily_report` | Daily report for {{ run_date }} | run_date, report_sections |
| `notify.email_sync_failed` | A member's new email did not reach their billing records | member_username, old_email, new_email, step, done_url |
| `notify.payout_balance_short` | Withdrawals are waiting for the Stripe balance | payout_date, amount_due, stripe_balance, payouts_report_url |
| `notify.payout_setup_requested` | A member is waiting for payout set-up | member_username, payouts_report_url |
| `notify.provider_error` | {{ provider_name }}: model calls are failing ({{ failure_type }}) | provider_name, failure_type, failure_count, health_url |
| `notify.reportable_item` | A reportable moderation item needs a look now | category_name, subject_name, moderation_url |
| `notify.stripe_error` | A Stripe call needs attention | operation, error_message, correlation_ref |
| `notify.template_stale` | An email template needs attention | template_name, stale_tags, template_url |
| `notify.unknown_price` | A subscription arrived with a variation the platform does not know | fluent_cart_variation_ref, stripe_price_ref, subscription_ref, feature_matrix_url |
| `notify.withdrawal_failed` | A withdrawal has failed or been returned | member_username, withdrawal_ref, amount, failure_reason |

Notes:
- `app/Enums/EmailCode.php` also lists eight Release 2 codes with no template, which are not sent: `notify.ipn_mapping_off`, `sales.founders_coupon`, `sales.ipn_access_granted`, `sales.ipn_access_revoked`, `sales.ipn_copy_ready`, `sales.ipn_mapping_off_buyer`, `sales.ipn_mapping_off_seller` and `team.invite`.
- The comment on `ModerationScanRefused` in `EmailCode.php` names `bot_name` and `builder_url`. The template allows `item_name` and `item_url` as listed above. The template is what is used.
- Only four emails can be switched off by a member: `insight.ready` with Insights, then `affiliate.commission_credited`, `market.review_received` and `sales.sale_made` with Sales.
- This lists the default templates. A copy staff have customised in the database could read differently.
