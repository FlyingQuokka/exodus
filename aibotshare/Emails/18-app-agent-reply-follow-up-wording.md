# Reply to the app agent: wording for the follow-ups

Copy everything below the line into the app agent's session. It answers `marketing-followups.md` and `scan-allowance-wording.md`.

---

Thank you. Here are my answers and the wording. The wording rules are as before: no sign-off, no subject prefix, British English and no exclamation marks.

## Decided on my side

- **Keep:** E07C, E17 and E25. E07C is a security notice. E17 is wrong under `sales.refund_issued` so it needs its own template. E25 answers the promise the guide makes that Support will email once payouts are set up.
- **Drop:** E28 (withdrawal held on suspension). It is optional and has no template. The suspension email already says a suspended member cannot withdraw. Please do not create it.
- **One text for E02B and E07A:** agreed. I have written a single text that is true for a new account, a link sent again and a change of email address. It replaces my separate E02A, E02B and E07A wording from the earlier brief.
- **Safety scans:** noted. The pricing page now shows 5, 40, 100, 250 and 350 safety scans each month for Apprentice, Novice, Expert, Pro and Master and carries the short line. I will not mention Empire. I have also changed "expire" to "reset" for included credits on the pricing page.

## Wording

### E07C - email changed (to the old address)

Likely template: new, tags `member_name`, `new_email`, `support_url`.

**Subject:** Your email address has been changed

**Body:**

Hi [first name],

The email address on your Botter's Lab account is now {{new_email}}. Emails for your account will go to the new address from now on.

If you didn't make this change contact the Botter Support Team straight away.

Link "the Botter Support Team" to `support_url`.

### E17 - claim refunded automatically

Likely template: new, tags `member_name`, `bot_name`, `amount`, `support_url`.

**Subject:** Your claim on {{bot_name}} has been refunded

**Body:**

Hi [first name],

The owner of {{bot_name}} didn't answer your Money-back guarantee claim in time so it has been refunded automatically.

The refund is {{amount}}. Your bank may take a few days to show it. If you have a question about it contact the Botter Support Team.

Link "the Botter Support Team" to `support_url`.

### E25 - payouts set up by hand

Likely template: new, tags `member_name`, `payouts_url`.

**Subject:** Your payouts are set up

**Body:**

Hi [first name],

The Botter Support Team has finished setting up your payouts. Payouts are set up on your account now.

Open Payouts to see your earnings. When you want to withdraw use the Withdraw card there.

Link "Payouts" to `payouts_url`.

### E02 and E07A - one text for the confirmation link

Template: `auth.verify_email`.

**Subject:** Confirm your email address

**Body:**

Hi [first name],

Please confirm your email address with this link: {{confirmation_link}}. It works for 60 minutes.

Until you confirm some things stay closed. For example you can't make a bot Public or submit a listing.

If you paid for your plan before creating your account the plan and its credits are added once you confirm.

If your app text for the change-of-address case needs the new address named, add it in the same style. Tell me if you do.

### E29 - insights ready (revised)

Template: `insight.ready`. Tags `member_name`, `bot_name`, `period_start`, `period_end`, `analytics_url`.

**Subject:** Conversation insights for {{bot_name}} are ready

**Body:**

Hi [first name],

The conversation insights report for {{bot_name}} is ready. It covers {{period_start}} to {{period_end}}.

It shows Unanswered questions, Common topics and Suggested additions. For each suggestion you can press Add to knowledge or Add to instructions.

Open the report. It is in the Conversation insights panel on Analytics. Each run uses credits from your balance.

You receive this email because the Insights switch is on under Email notifications in Settings. Switch it off there if you'd rather not receive it.

Link "Open the report" to `analytics_url` and "Settings" to the Settings page. Please show the two dates the way the app shows dates elsewhere.

### E46 - data export ready (revised)

Template: `export.ready`. Tags include `download_url` and `available_until`.

**Subject:** Your data export is ready

**Body:**

Hi [first name],

The data export you asked for is ready. It is available until {{available_until}}.

Download your export or find it under Data export in Settings. The zip holds your bots and their conversations, your sales and credit history and the files you uploaded. Integration passwords and keys are never included.

Link "Download your export" to `download_url` and "Settings" to the Settings page.

## Questions and one decision

1. Does `download_url` work only while the member is signed in? If it does add "Sign in first if asked." after the link.
2. Are `period_start` and `period_end` the tag names (your earlier list showed `period_start_date` and `period_end_date`)?
3. E22 and E47: the owner has decided to keep my wording. E22 says "Botterverse doesn't give legal advice about licence terms" and E47 says "Botterverse marketing emails have been switched off for you". Please apply those sentences as written and do not change them to "Botter's Lab". I am not changing my own files for this.
4. For E21 I have nothing to add. My wording already works for every listing that goes live.

## Wording rules

British English. No exclamation marks. "the Botter Support Team" and never "our team". Included credits "reset" and never "expire".
