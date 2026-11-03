# Botterverse: FluentCRM email playbook

Draft 1, 20 October 2026. This says which automations to create in FluentCRM, what starts each one and what goes in every step. Full email bodies come later, once the page copy is settled and the Genesis email bots can run (they need the sales copy as input).

## Rules for every email

- **From name:** Botterverse. No personal name. Sign off "The Botterverse team".
- **Subject lines:** start with `[Botterverse]` then a space then the subject. Keep the part after the prefix short.
- **No footers or addresses.** WordPress and FluentCRM add them.
- **No income promises, no named competitors, no testimonials, no mention of the sixth tier.**
- **EU:** never mentioned in emails. It lives in the FAQ and on the cart page.
- **Founders offer:** 50% off for life on every plan, charged for real, open through the beta and for two weeks after public launch.
- **Dates:** use relative waits. The beta and launch dates are not set.

## What I verified and what you must check

Confirmed from FluentCRM and FluentCart documentation:
- **Triggers you can use:** List Applied, Tag Applied, Contact Created and a Fluent Forms submission. For FluentCart: Order Paid, Subscription Activated, Subscription Renewed, Subscription Canceled, Subscription Expired, Order Refunded (Full), Order Canceled and Cart Abandoned.
- **Actions you can use:** Send Email, a wait step, Apply Tag, Remove Tag, Remove from List, Update Contact, Cancel Automations and Cancel Sequence Emails. There are also goal (benchmark) blocks and conditional blocks.
- **Cart Abandoned** needs switching on in FluentCRM's Abandoned Cart Settings, with the FluentCart driver. A background job runs about every five minutes, so expect up to a five minute lag.
- **Order Paid** lets you pick the contact status, target specific products and allow restarts.

Not confirmed, so check in your installed version: the exact names of the wait step options, which conditional blocks are Pro only and whether Order Paid and Subscription Activated both fire for a new subscription. Use one of them as the trigger and never both. Otherwise people receive two onboarding sequences.

## Lists and tags to create first

**Lists:** Interested, Beta, Customers, Affiliates.

**Tags you add by hand or by form:** Interested, Skool Beta, Beta Open, Launch Open, Founders Window Closed, Affiliate.

**Tags the app sends** (confirmed 20 October 2026): `Apprentice Botter`, `Novice Botter`, `Expert Botter`, `Pro Botter`, `Master Botter`, `Downgraded`, `Cancelled`, `Dormant`, `Built First Bot`, `Published First Bot`, `First Sale`, `Migrated From GPT`, `Bot Market Seller`, `Bot Market Buyer` and `Power User`. A sixth plan tag also exists. Never build an automation or an email on it.

`Power User` is applied when a member's first auto top-up charge succeeds, so it marks someone who is using credits heavily. See S16.

The app has no tag for joining the affiliate programme, but FluentAffiliate has its own FluentCRM triggers, so S10 needs no app change. The four it offers are Affiliate Registered as Pending, Affiliate Account Approved, Successful Referral Created and Affiliate Payout Sent.

## Build order

1. Welcome (S1). 2. Beta open (S2). 3. Cart abandonment (S4). 4. Onboarding (S5). 5. Feedback and testimonial request (S11). 6. Public launch (S3). 7. The rest.

---

## S1. Welcome and pre-launch

**Trigger:** List Applied: Interested (or the Fluent Forms sign-up form on the site).
**Restart:** off.

| Step | Wait | Email |
|---|---|---|
| 1 | Immediately | **Subject:** [Botterverse] Your link was never yours. **Purpose:** welcome, name the problem (the link and customers were never yours), say what Botterverse is in two lines and what happens next. |
| 2 | 2 days | **Subject:** [Botterverse] One bot, three ways to be paid. **Purpose:** access, Multi-sell, Transfer in the rights language they know. One link to the sales page. |
| 3 | 2 days | **Subject:** [Botterverse] Answer the question before they leave. **Purpose:** the embeddable bot on a sales page. Link to the demo. |
| 4 | 3 days | **Subject:** [Botterverse] What we take from a sale. **Purpose:** the published fee, plainly, with the $49 example. Honest about the 30 cents. |
| 5 | 3 days | **Subject:** [Botterverse] Founders pay half price for life. **Purpose:** the Founders offer and how to be told first. Apply tag Founders Window Interest if you want to segment. |

**End:** nothing. They wait for S2 or S3 to be triggered by tag.

## S2. Beta open

**Trigger:** Tag Applied: Beta Open. Apply the tag to the Skool beta group and the Interested list when the beta starts.
**Stop condition:** Add a cancel step to the purchase automation (S5) using Cancel Automations so buyers leave this sequence.

| Step | Wait | Email |
|---|---|---|
| 1 | Immediately | **[Botterverse] The Botter's Lab is open.** The beta is live. Founders offer: 50% off for life, everything charged for real. No seat limit. One button to the cart. |
| 2 | 1 day | **[Botterverse] Which plan fits you?** Short plan guide: bots, credits, what unlocks at Novice and Pro. Link to pricing. |
| 3 | 2 days | **[Botterverse] Bring your old GPT across.** The importer. Be honest that you paste the content in and rebuild actions as integrations. |
| 4 | 2 days | **[Botterverse] Your questions, answered.** The top FAQ answers: fees, cancelling, models. Link to the FAQ. |
| 5 | 3 days | **[Botterverse] Put a bot on your sales page.** Embed demo and a simple how-to. |
| 6 | 3 days | **[Botterverse] Founders window.** Remind them the offer ends two weeks after public launch. Do not give a date until you know it. |

## S3. Public launch

**Trigger:** Tag Applied: Launch Open. You apply it on launch day to everyone not yet a customer.
**Before that,** send two or three manual teaser broadcasts in the days before using the Interested list.

| Step | Wait | Email |
|---|---|---|
| 1 | Immediately | **[Botterverse] It is open.** Launch announcement, the three ways to sell, Founders offer and its two-week window. |
| 2 | 1 day | **[Botterverse] Who is it for?** Three short scenes: the seller, the Multi-sell reseller, the sales-page owner. |
| 3 | 2 days | **[Botterverse] The fine print, in plain words.** Fees, billing, cancelling and refunds. Builds trust. |
| 4 | 3 days | **[Botterverse] Founders window: halfway.** Reminder with the Founders badge. |
| 5 | 3 days | **[Botterverse] Last questions.** Objection handling from the FAQ. |
| 6 | Wait until the last 48 hours of the window | **[Botterverse] 48 hours left for Founders.** |
| 7 | Same day, later | **[Botterverse] Last day for the Founders offer.** |
| 8 | 1 day | Apply tag Founders Window Closed. Send **[Botterverse] The Founders window has closed.** Standard prices apply from now on. |

## S4. Cart abandonment

**Trigger:** Cart Abandoned - FluentCart. Switch on abandoned cart tracking first.

| Step | Wait | Email |
|---|---|---|
| 1 | 1 hour | **[Botterverse] You left your plan behind.** Simple reminder with a link back to checkout. |
| 2 | 1 day | **[Botterverse] Questions before you join?** Cancelling, fees and what each plan includes. |
| 3 | 3 days | **[Botterverse] Your Founders price is still there.** Only while the Founders window is open. Use a condition or a separate version after it closes. |

## S5. Onboarding after purchase

**Trigger:** Subscription Activated (or Order Paid with the plan products selected). Pick one.
**First action:** Apply tag Customer, add to list Customers, Cancel Automations for S2 and S3.

| Step | Wait | Email |
|---|---|---|
| 1 | Immediately | **[Botterverse] Welcome to the Botter's Lab.** Your plan, your username, where to start. |
| 2 | 1 day | **[Botterverse] Build your first bot.** One page, instructions, files, preview chat. Skip if tag Built First Bot is present. |
| 3 | 3 days | **[Botterverse] Make it Public.** Personal versus Public, your bot page and the embed. Skip if Published First Bot is present. |
| 4 | 5 days | **[Botterverse] Charge for it.** Paywall setup for Novice and above. Show Pro the Bot Market instead. |
| 5 | 7 days | **[Botterverse] Earn from referrals.** The affiliate programme for Novice and above. Say commission details only once the owner confirms payment is live. |
| 6 | 10 days | **[Botterverse] How is it going?** One question and a reply address. Opens the door to feedback. |
| 7 | 14 days | **[Botterverse] How credits work.** Plain explanation: included credits renew with the plan and expire at renewal, credits you buy never expire. Show the five packs and say auto top-up is off until they switch it on. No pressure and no "free credits". |

## S6. Dormant account

**Trigger:** Tag Applied: Dormant (no activity for 45 days). **Stop:** remove the tag when activity resumes.

| Step | Wait | Email |
|---|---|---|
| 1 | Immediately | **[Botterverse] Your bots are waiting.** Gentle nudge and the one thing that is easiest to do next. |
| 2 | 5 days | **[Botterverse] Stuck on something?** Offer help and link to support. |
| 3 | 7 days | **[Botterverse] Should we pause your plan?** Honest note about downgrading and what happens to bots over the limit. |

## S7. Upgrade paths

**Trigger:** Tag Applied: `Apprentice Botter`, then `Novice Botter`, `Expert Botter` and `Pro Botter` as separate automations.

- **Apprentice, day 14:** what Novice adds (paywall, integrations, analytics, affiliate programme).
- **Novice or Expert, day 30:** what Pro adds (Bot Market selling, bot style, lower fee).
- **Pro, day 30:** what Master adds (A/B testing, advanced analytics). Only if they have published bots.

Each is one email. Keep it factual and link to the plan table.

## S8. Cancelling and leaving

**Trigger:** Subscription Canceled (or tag Cancelled).

| Step | Wait | Email |
|---|---|---|
| 1 | Immediately | **[Botterverse] You are cancelled.** Access continues to the end of the period you paid for. Remind them they can request a data export from Settings: their bots and settings, uploaded files, instruction history, conversations, sales and commissions. |
| 2 | 2 days | **[Botterverse] One question.** Why did you cancel? A single reply or a short form. |
| 3 | 30 days | **[Botterverse] Anything new?** Soft win-back with a link to what has changed. |

## S9. Refunds

**Trigger:** Order Refunded (Full). Apply tag Refunded and remove from Customers. One short email: confirm the refund and ask for feedback.

## S10. Affiliate onboarding

**Trigger:** the FluentAffiliate trigger Affiliate Account Approved. If members join as Pending first, use Affiliate Registered as Pending instead. Check which one your install fires when a member presses Join. First action: apply tag Affiliate.

| Step | Wait | Email |
|---|---|---|
| 1 | Immediately | **[Botterverse] You are in.** Where your link lives, the rates at launch and the rules (no self-referral, credit packs earn nothing). |
| 2 | 2 days | **[Botterverse] What to say.** Plain suggestions for talking about it. Add the line "do not promise income". |
| 3 | 5 days | **[Botterverse] Promote a Bot Market listing.** How listing affiliate shares work. |
| 4 | 10 days | **[Botterverse] Your first referral.** Nudge with a simple share idea. |

**For launch:** send affiliates a separate set of broadcasts: a swipe email, two follow-ups and a last-chance email, plus a short page of links and graphics. That is a one-off campaign, not an automation.

## S11. Feedback and testimonial request

**Trigger:** Tag Applied: `First Sale`. For the Skool beta group use 14 days after Subscription Activated instead.
**Purpose:** you have no testimonials yet and the brief says to gather them. This is how.

| Step | Wait | Email |
|---|---|---|
| 1 | 5 days | **[Botterverse] Tell us how it is going.** Two questions. Explicit permission line asking whether they may be quoted and how to name them. |
| 2 | 5 days | **[Botterverse] One more thing.** Short reminder only if they have not replied. |

Never quote anyone without written permission. Keep every reply that grants it.

## S12. First sale

**Trigger:** Tag Applied: `First Sale`.

| Step | Wait | Email |
|---|---|---|
| 1 | Immediately | **[Botterverse] Your first sale.** Congratulate without any income claim. Explain the timeline plainly: a sale can be refunded for 14 days and its earnings become available to withdraw 21 days after it. Payouts then run daily. Remind them to set up payouts once on Stripe's form. |

## S13. Bot Market seller

**Trigger:** Tag Applied: `Bot Market Seller`.

| Step | Wait | Email |
|---|---|---|
| 1 | Immediately | **[Botterverse] Your listing is live.** Tips: a clear description, the price guidance, an optional affiliate share and replying to reviews. |
| 2 | 7 days | **[Botterverse] Build a reputation.** Verified purchase reviews, the seller profile and the badges (Founder, Verified Seller, 10 Sales and Top Rated). |

## S14. Bot Market buyer

**Trigger:** Tag Applied: `Bot Market Buyer`.

| Step | Wait | Email |
|---|---|---|
| 1 | Immediately | **[Botterverse] Your new bot.** How to open it and where its licence terms are. Read the seller's licence before reselling anything. |
| 2 | 7 days | **[Botterverse] How is it working?** Invite a Verified purchase review. |

## S15. Moved across from a GPT

**Trigger:** Tag Applied: `Migrated From GPT`.

| Step | Wait | Email |
|---|---|---|
| 1 | Immediately | **[Botterverse] Your GPT has moved across.** Test it in the preview chat, rebuild any actions as integrations and make it Public when ready. |
| 2 | 3 days | **[Botterverse] Share it or sell it.** Embed it, add a paywall from the Novice plan or list it on the Bot Market from Pro. |

## S16. Power User (heavy credit use)

**Trigger:** Tag Applied: `Power User`. It fires once, when the first auto top-up succeeds.

| Step | Wait | Email |
|---|---|---|
| 1 | Immediately | **[Botterverse] Your auto top-up just worked.** Confirm what it does and where to change or switch it off. Reassure them that it stops if the bank asks for approval. |
| 2 | 3 days | **[Botterverse] Making your credits go further.** Show that a bigger credit pack carries bonus credits and that a higher plan includes more credits each month. Factual, with no pressure. |

---

## What I need from you next

- Whether Affiliate Account Approved or Affiliate Registered as Pending fires when a member presses Join.
- Whether FluentCart fires Order Paid or Subscription Activated for a new plan.
- The beta start date as soon as you know it, so S2 can be timed.
- Your Skool material, so the welcome and launch emails can use real language.
