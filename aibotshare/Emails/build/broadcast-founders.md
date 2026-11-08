# Founders offer broadcasts

Two one-off broadcast emails for the Leads list while the Founders offer is open. They replace the Founders blocks that were inside O01 to O04. Each is sent once from FluentCRM as a campaign and not as part of any sequence. The offer wording follows the Home page copy. No price or discount figure other than the 50% in the Home copy appears. Nothing is set up in FluentCRM.

Who receives them: contacts on the main list with the tag Leads. Exclude contacts with the tag Customer and contacts with the tag Founder. Exclude Upgrade Active and Welcome Active as for every broadcast.

**Loop map**

| ID | When | Purpose |
|---|---|---|
| FB1 | The day the offer opens | Says the offer is open and how to join |
| FB2 | A few days before the offer closes | Says the offer closes on a named date |

---

## FB1 - The Founders offer is open (broadcast, Leads)

**Subject:** [Botterverse] The Founders offer is open

**Body:**

Hi {{contact.first_name}},

The Founders offer is open. Every plan is 50% off for life while the offer runs. Join as a Founder and your price stays.

The coupon works on every plan. Enter FOUNDER50 at the checkout when you choose a plan.

The [Pricing](https://{{domain}}/pricing/) page lists what each plan includes. Each plan includes everything in the one before and you can change plan later.

Your Botter Support Team

**Notes**
- Facts: Founders offer is 50% off every plan for life (Home copy section 1 and 8). The coupon works on all tiers and a Founder is a Founder for life (handover decisions). There is no free plan or trial.
- Broadcast style: no recap and no Task for today and no P.S.
- The coupon code is FOUNDER50. It is given out in outreach posts and ads and sales emails so it is one public code that can be named in the email.
- The Founder badge is not mentioned. No price figures. No income claims.
- Automation: none. Send once as a campaign to the list described above.

---

## FB2 - The Founders offer closes soon (broadcast, Leads)

**Subject:** [Botterverse] The Founders offer closes {{founders_close}}

**Body:**

Hi {{contact.first_name}},

The Founders offer closes {{founders_close}}. After that, new plans are at the standard price.

If you join before then, your price stays at 50% off for life. The coupon works on every plan, so you can choose the plan that suits you.

Enter FOUNDER50 at the checkout. The [Pricing](https://{{domain}}/pricing/) page lists what each plan includes.

Your Botter Support Team

**Notes**
- States the closing date as a fact and nothing more. No countdown and no pressure wording.
- The closing date is never typed. `{{founders_close}}` reads the end date of the FOUNDER50 coupon (UTC end date minus five hours, so the US Eastern day) and gives "on 30 November". It gives "soon" when the coupon has no end date.
- Send once about three days before the close. Do not send a third email. Contacts who join are excluded by the Customer tag. Contacts on the FND2 sequence (tag Src Founders Page) receive FB2 as well and not FB1.
- Automation: none. Send once as a campaign. When the offer closes stop using both emails and remove the Founders band from the Home page and Pricing page.
