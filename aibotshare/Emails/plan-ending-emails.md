# Plan ending reminder emails

For the session writing the FluentCRM automations. A member who wants a lower plan cancels on the
Billing page, then buys the lower plan once the current one ends (owner, 31 October 2026). FluentCart
offers no downward move. These emails stop the member forgetting, since their bots pause between the
two plans.

The app is being built to fire these tags: the build is not finished, so do not switch the funnels on
until told.

## Why four tags and not one

A plan's end date varies by member, from a day to a month after they cancel. A single tag with fixed
waits would send on the wrong days. So the app checks every cancelled plan daily and fires the right
tag on the right day.

| Tag (spelt exactly) | Fires | Email |
|---|---|---|
| `Plan Ending Soon` | 7 days before the plan ends. Skipped if the member cancelled later than that | 1 |
| `Plan Ending Tomorrow` | The day before the plan ends | 2 |
| `Plan Ends Today` | Early on the day the plan ends | 3 |
| `Plan Ended` | The moment the plan has ended, also on that day | 4 |

Emails 3 and 4 are the two on the last day. They fire only for a member who pressed Cancel, never for a
plan that lapsed through a failed payment.

**Funnel rules**

- One short funnel per tag, sending at once. No fixed waits between them.
- The app removes the three "ending" tags if the member presses Keep my plan. It removes all four once
  they have a plan again. So a member who cancels again later receives the emails again.
- Stop any funnel when the member gains a tier tag such as `Novice Botter`.
- The app does not send a date. Say "today" or "tomorrow" as below and point to the Billing page, which
  shows the exact date and time.

## The wording

Written for a member who may be moving down or leaving altogether, so it does not assume either.
`{{first_name}}` and links are for you to set: the pricing page and the Billing page in the Botter's Lab.

### Email 1: `Plan Ending Soon`

**Subject:** Your plan ends in a week

Hi {{first_name}},

Your Botter's Lab plan ends in 7 days, as you asked. Your bots keep running until then.

**Moving to a different plan?** You can buy it as soon as this one ends. We will remind you on the day.

**Changed your mind?** Press Keep my plan on your Billing page and nothing changes.

If you are leaving, thank you for botting with us. Your account stays here if you ever come back.

### Email 2: `Plan Ending Tomorrow`

**Subject:** Your plan ends tomorrow

Hi {{first_name}},

Your plan ends tomorrow. Your Billing page shows the exact time.

**Moving to a different plan?** Set aside a moment tomorrow to buy it as soon as this one ends. When no
plan is active your bots pause and your bot pages show as unavailable, so buying straight away keeps
them running for your visitors.

Use the same email address as your Botter's Lab account so your new plan reaches it. **Founders:** type
your founders coupon at checkout again, because it does not carry over by itself.

**Changed your mind?** Press Keep my plan on your Billing page.

### Email 3: `Plan Ends Today`

**Subject:** Your plan ends today

Hi {{first_name}},

Today is the day. Your plan ends later today at the time shown on your Billing page. We will email you
again the moment it has ended, so you can buy your new plan straight away.

**Have these ready:** the email address of your Botter's Lab account and, if you are a founder, your
founders coupon.

**Changed your mind?** You can still press Keep my plan on your Billing page until it ends.

### Email 4: `Plan Ended`

**Subject:** Your plan has ended: pick your new one now

Hi {{first_name}},

Your plan has ended, so you can buy your new one now. Your bots are paused until you do. They come back
as soon as your new plan starts, oldest first, up to your new plan's bot limit.

**[See the plans]** (the pricing page)

Use the same email address as your Botter's Lab account. **Founders:** remember to type your founders
coupon at checkout.

If you are annual and were due a refund for whole unused months, it goes back to your card within a day.
Your boosts that you bought stay in your account.

If you are leaving, thank you. Your account stays here if you ever come back.

## Do not say

- "Expire" about included boosts: the owner's wording is "reset".
- A set time of day: it varies by member.
- That a refund has been paid: it goes in the next daily run after the plan ends.
