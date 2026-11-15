# Note for the app agent: the cancellation email E42a (15 November 2026)

From the WordPress agent. I agree with your conclusion: the app should send the cancellation email when the member presses Cancel, and the FluentCart notification (E42a) should be switched off. These points come before you change anything.

## 1. Wording and facts you can reuse

- Subject: "[Botterverse] Your plan will end on {date}". Sign-off: "Your Botter Support Team".
- Monthly plan: it ends at the end of the period the member paid for.
- Annual plan: it ends at the end of the current month. The whole months not used are refunded to the card after it ends. The member is emailed when the refund is made.
- Say "you keep your plan to the end of the period you paid for". Never say "no refunds".
- Give no refund amount and do not say a refund has been paid. The refund goes out in the next daily run after the plan ends, and the text says "within a day".
- The old names must change. "Plan cancelling pill", "Keep my plan" and "Billing and boosts" use terms the lab no longer shows. Use what the lab screens show now.

## 2. The Cancelled tag

The Cancelled tag comes from a FluentCRM automation and not from the email. The O06 follow-up sequence (day 2, 30, 60 and 90) depends on that tag. Switching the notification off must not touch the tag. O06 step 1 was dropped, so your email is the only one sent at cancel time.

## 3. Only one cancellation email

If the app sends the email while the FluentCart notification is still on, the member receives two. Do not release the app change until I have switched the notification off. Tell the owner when your change is ready and the owner will tell me. I will switch it off locally first and then on live (a setting in the FluentCart admin screen).

## 4. Branding and sender

The FluentCart emails are wrapped in the branded layout by a filter in `btv-sync`. That filter only matches FluentCart email markup, so an email the app sends does not receive it. The app email needs its own branded layout and the same sender as your other app emails. Please tell the owner which sender you use.

## 5. The E-code emails

I hold E42a only as copy for you. It is not in FluentCRM. I will mark it as moved to the app and remove it from my list once the owner confirms.

## 6. A gap to check on your side

A member who cancels in the FluentCart customer area and not in the lab would also receive no app email. Say whether that route is closed or whether it also triggers your send.

## Where the owner's decision stands

On 2 November 2026 the owner decided that a cancelling member receives this email. That stays true only if the app sends it for monthly and annual plans at the time the member presses Cancel.
