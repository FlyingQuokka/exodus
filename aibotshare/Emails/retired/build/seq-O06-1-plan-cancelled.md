# Retired: O06-1 Plan cancelled

Dropped by the owner on 3 November 2026 because the FluentCart email E42a ("Your plan will end on...") says the same at the moment of cancelling. Not for use.

## O06-1 - Plan cancelled (day 0, tag Cancelled)

**Subject:** [Botterverse] Your plan is cancelled

**Body:**

Hi {{contact.first_name}},

We've seen that you've cancelled your Botter's Lab plan. Whether you're moving to a different plan or leaving, here's what happens next.

**Until your plan ends**

On a monthly plan you keep your plan until the end of the period you've paid for. On an annual plan your plan ends at the end of the current month and each whole unused month is refunded to your card. [Billing and credits](https://lab.{{domain}}/billing) shows the months and the amount before you confirm.

Until then your bots keep running. Billing and credits shows an Ends date and a Keep my plan button if you change your mind.

**After it ends**

Your account stays open and you can sign in. Your bots pause and their data is kept. Credits you've bought stay in your account and auto top-up switches off. Unused included credits don't carry over.

Moving to a different plan? Buy it once this one ends using the same email address as your Botter's Lab account. We'll email you reminders before the end date.

**Task for today**

If you'd like a copy of your work open [Settings](https://lab.{{domain}}/settings) and find Data export. Press Request export and we'll email you when it's ready. If not there's nothing you need to do.

Thank you for botting with us,

Your Botter Support Team

P.S. Next up: one question about why you cancelled. It takes ten seconds to answer.

**Notes**
- Facts: digest 10.7 (cancel behaviour for monthly and annual and after the plan ends) and 12.4 (Data export and Request export) and `plan-ending-emails.md` (buy the new plan after the end).
- Included credits: the digest says they end with the plan. The text says they "don't carry over" to follow the house word rule.
- Automation: O06 step 1, sends at once when Cancelled is applied. Exit if a plan tag is applied. O15 reminders run separately from the plan-ending tags.

---

