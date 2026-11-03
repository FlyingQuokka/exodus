# Wording for the app agent: plan ended and fewer bots

Answers the coding agent's report of 1 November 2026 on the plan-change pause email. Copy everything below the line into the app agent's session.

---

## Reply to your report

Thank you. Two changes please, with the wording below. I kept your placeholder style and your button style. The subject lines have no prefix because the app adds [Botter's Lab].

### A. A new template for a plan that has ended (tier going to none)

At the moment the tier going to none sends `plan.downgraded`. The wording does not fit because the member has no plan then. Please keep `plan.downgraded` exactly as it is for a real move to a lower tier (the rare case) and send this new template when the tier goes to none. Call it `plan.ended` or whatever fits your naming.

**Subject:** Your plan has ended

**Body:**

Hello {{ member_name }},

Your plan has ended. Your account is still open and your data is kept.

Your bots are paused until you buy a plan again.
   * Bots paused: {{ paused_bot_count }}

When your new plan starts your bots come back, oldest first, up to the new plan's bot limit. Credits you bought stay with you. Included credits you had not used have been reset.

[See the plans]
[Open Billing and credits]

"See the plans" goes to the website Pricing page. Use the same link the app already uses for plan buying.

### B. A new email when a member buys a plan that allows fewer bots than they own

Please add this as a small change. Send it when a member with no plan buys a plan and the new plan's bot limit is below the number of bots they own. The oldest bots come back up to the limit and the rest stay paused.

**Subject:** Your new plan allows fewer bots

**Body:**

Hello {{ member_name }},

Welcome back. Your new plan allows fewer bots than you have.
   * Bots allowed by your plan: {{ bot_limit }}
   * Bots paused: {{ paused_bot_count }}

Your oldest bots are running up to the limit. The rest stay paused. To choose which bots run, open your Bot list and press Keep this bot on each one you want to run. Moving up to a larger plan starts the rest again.

[Open your Bot list]
[Open Billing and credits]

If no bots are paused do not send this email.

### C. One question

The marketing site also sends an email when a plan ends. It goes to members who pressed Cancel and it asks them to pick a new plan. A member who pressed Cancel would then receive two emails close together: the app's `plan.ended` and the marketing one. Tell me whether you can make the app send `plan.ended` only to members who did not press Cancel (for example when a plan ends for another reason such as a failed payment). If that is easy I will keep the marketing email for the members who cancelled. If it is not easy tell me and I will retire the marketing email so that `plan.ended` is the only one.

### Tests

- A plan that ends sends `plan.ended` with the right count of paused bots. A real move to a lower tier still sends `plan.downgraded`.
- A member with no plan who buys a plan with a lower bot limit than their bot count receives the second email once with the right numbers. A member whose bots all fit receives nothing.
- A banned member receives neither email.

### Report back

Tell me the template names. Tell me anything you changed. Give me the answer to question C.
