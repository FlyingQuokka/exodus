# Sequence FND2 - Founders page list

One combined track for people who join the list from the form on the Founders offer page. They are on the main list with the tags Lead and Src Founders Page. The tag Src Founders Page starts this sequence. The same people also carry the tag Lead, so O01 skips them (its first step ends the run for anyone with the tag Src Founders Page) and FB1 leaves them out. They still receive the FB2 closing broadcast.

**Trigger:** tag Src Founders Page applied. **Exit:** tag Customer applied (the STOP Leads - Customer automation cancels it).

Shared notes:
- Sender is Botterverse. Prefix `[Botterverse]` on every email.
- The closing date is never typed in an email. `{{cpn_dateend_founder50}}` reads the end date of the FOUNDER50 coupon (UTC end date minus five hours, so the US Eastern day) and gives "30 November". It gives "a date to be confirmed" when the coupon has no end date. The same tag format works for any coupon: `{{cpn_dateend_COUPONCODE}}`.
- The offer facts follow the Founders offer page. 50% off for life. The coupon FOUNDER50 works on every plan and on monthly and annual billing. No price figures and no income claims.
- Nobody in this sequence is a member yet.

## Loop map

| Day | Email | Purpose |
|---|---|---|
| 0 | FND2-01 | Confirms they are on the list and says how the offer works |
| 2 | O01-01 | Why Botterverse (from O01) |
| 4 | FND2-02 | Explains the coupon in plain steps |
| 6 | O01-02 | Bring a GPT across with Import a bot (from O01) |
| 8 | O01-03 | Who pays when people chat (from O01) |
| 10 | O01-04 | Selling access and the published fee (from O01) |
| 12 | O01-05 | Choosing a plan (from O01) |

---

## FND2-01 - You are on the Founders list (at once, Leads)

**Subject:** [Botterverse] You're on the Founders list

**Body:**

Hi {{contact.first_name}},

Thanks for joining the list. We'll email you before the Founders offer closes on {{cpn_dateend_founder50}}.

Here is the offer in short. Every plan is 50% off for life while the offer runs. Join as a Founder and your price stays.

The coupon works on every plan. Enter FOUNDER50 at the checkout when you choose a plan.

The [Founders offer](https://{{domain}}/founders/) page has the details. The [Pricing](https://{{domain}}/pricing/) page lists what each plan includes.

Your Botter Support Team

**Notes**
- Sent at once when the form is submitted.
- Facts: the Founders offer page and FB1.

---

## FND2-02 - How the Founders coupon works (day 3, Leads)

**Subject:** [Botterverse] How the Founders coupon works

**Body:**

Hi {{contact.first_name}},

Here is how the Founders coupon works.

- FOUNDER50 works on all five plans.
- It works on monthly and annual billing.
- A Founder stays a Founder for life and the price stays.

Enter the code at the checkout when you choose a plan. If you leave later, you can rejoin as a Founder while the coupon is still active.

The [Pricing](https://{{domain}}/pricing/) page lists what each plan includes. Each plan includes everything in the one before and you can change plan later.

Your Botter Support Team

**Notes**
- Sent on day 4, two days after O01-01.
- Facts: the Founders offer page questions. Nothing about the closing date here because FB2 covers it.
