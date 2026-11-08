# Sequence FND2 - Founders page list

Two emails for people who join the list from the form on the Founders offer page. They are on the main list with the tags Lead and Src Founders Page. The tag Src Founders Page starts this sequence. The tag Lead also starts O01 and puts them on the Leads broadcasts FB1 and FB2, so nothing here repeats the closing date reminder.

**Trigger:** tag Src Founders Page applied. **Exit:** tag Customer applied.

Shared notes:
- Sender is Botterverse. Prefix `[Botterverse]` on every email.
- The offer facts follow the Founders offer page and the two broadcasts. 50% off for life. The coupon FOUNDER50 works on every plan and on monthly and annual billing. The closing date is 30 November, as in FB2. No price figures and no income claims.
- Nobody in this sequence is a member yet.

## Loop map

| ID | When | Purpose |
|---|---|---|
| FND2-01 | At once | Confirms they are on the list and says how the offer works |
| FND2-02 | Three days later | Explains the coupon in plain steps |

---

## FND2-01 - You are on the Founders list (at once, Leads)

**Subject:** [Botterverse] You're on the Founders list

**Body:**

Hi {{contact.first_name}},

Thanks for joining the list. We'll email you before the Founders offer closes on 30 November.

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

Enter the code at the checkout when you choose a plan. If you leave later you can rejoin as a Founder while the coupon is still active.

The [Pricing](https://{{domain}}/pricing/) page lists what each plan includes. Each plan includes everything in the one before and you can change plan later.

Your Botter Support Team

**Notes**
- Sent three days after FND2-01.
- Facts: the Founders offer page questions. Nothing about the closing date here because FB2 covers it.
