# Other sequences plan

Draft 1 for review. This revises the old playbook (`output\fluentcrm-email-playbook.md`, sequences S1 to S16) to match the decisions since: one list with tags and the 30-day welcome sequence and the upgrade sequences. Nothing is set up in FluentCRM.

## 1. Rules that apply to every sequence

- One list with tags. See `00-strategy-one-list-and-tags.md`.
- Subject prefix: [Botterverse] for general emails and [Botters Lab] for emails about the Botters Lab. Sender is Botterverse. No addresses or footers.
- No income promises. No named competitors. No testimonials. No sixth tier. No EU wording. No Founder badge on website copy.
- Relative waits only. The launch dates are not set.
- Stories follow `retired\03-storyselling-plan.md`. None of the sequences below carries a story unless marked.

### Collision rules

A member must not receive two marketing emails on one day.

| Priority | Kind | Rule |
|---|---|---|
| 1 | Event emails (receipts and security and account notices) | Always send |
| 2 | Welcome and upgrade sequences | Run on their own schedule |
| 3 | Behaviour sequences (dormant and first sale and seller and buyer and Power User) | Wait while Welcome Active or Upgrade Active is on the contact |
| 4 | Campaigns and launch broadcasts | Exclude Welcome Active and Upgrade Active |

Waiting means the first step holds until the tag is removed. A Check Condition block can test the tag.

## 2. What happens to each old sequence

| Old | Name | Decision |
|---|---|---|
| S1 | Welcome and pre-launch | Keep as O01. Change the trigger to the tag Lead |
| S2 | Doors open | Deleted on 2 November 2026 |
| S3 | Public launch | Keep as O03 |
| S4 | Cart abandonment | Keep as O04 |
| S5 | Onboarding after purchase | Replaced by the 30-day welcome sequence |
| S6 | Dormant account | Keep as O05 |
| S7 | Upgrade paths | Replaced by the upgrade sequences |
| S8 | Cancelling and leaving | Keep as O06 and extend |
| S9 | Refunds | Keep as O07 |
| S10 | Affiliate onboarding | Keep as O08 and extend |
| S11 | Feedback request | Keep as O09 (feedback only) |
| S12 | First sale | Keep as O10 and fix the payout wording |
| S13 | Bot Market seller | Keep as O11 |
| S14 | Bot Market buyer | Keep as O12 |
| S15 | Moved across from a GPT | Mostly replaced. One email stays as O13 |
| S16 | Power User | Keep as O14 |

## 3. The sequences

| ID | Name | Trigger | Audience | Emails | Exit |
|---|---|---|---|---|---|
| O01 | Pre-launch nurture | Tag Lead applied (sign-up form) | Leads | 5 | Customer applied |
| O02 | Deleted on 2 November 2026 | | | | |
| O03 | Public launch | Tag Launch Open applied | Leads | 8 | Customer applied |
| O04 | Cart abandonment | FluentCart cart abandoned [verify] | Anyone with an abandoned cart | 3 | Order paid |
| O05 | Dormant | Tag Dormant applied | Customers | 3 | Dormant removed |
| O06 | Cancelling and win-back | Tag Cancelled applied | Cancelled members | 5 | Plan tag applied |
| O07 | Refunds | FluentCart full refund [verify] | Refunded buyers | 1 | None |
| O08 | Affiliate onboarding | Affiliate plugin trigger [verify] | New affiliates | 6 | None |
| O09 | Feedback request | Tag First Sale applied | Sellers | 1 | Reply |
| O10 | First sale | Tag First Sale applied | Sellers | 1 | None |
| O11 | Bot Market seller | Tag Bot Market Seller applied | Sellers | 2 | None |
| O12 | Bot Market buyer | Tag Bot Market Buyer applied | Buyers | 2 | None |
| O13 | Moved across from a GPT | Tag Migrated From GPT applied | Imports | 1 | None |
| O14 | Power User | Tag Power User applied | Heavy credit users | 2 | None |

Total about 47 emails.

## 4. Notes on each

**O01 Pre-launch nurture.** Same five steps as the old S1 with the angle updated to the new headline: custom GPTs are being switched off and you can build bots you control. Step 4 explains the published fee. Step 5 explains the Founders offer. No dates.

**O02 Doors open.** Six steps as in the old S2. Step 3 about moving a GPT now points to Import a bot.

**O03 Public launch.** Eight steps as in the old S3. The last three depend on the Founders window. The window-closed email applies the tag Founders Window Closed. O04 step 3 uses that tag to switch off the Founders line.

**O04 Cart abandonment.** Switch on abandoned cart tracking first. Three steps at about one hour and one day and three days. Step 3 mentions Founders only while the window is open.

**O05 Dormant.** Three steps. Step 3 offers to pause the plan and explains what happens to bots over the limit. The wording follows the guide on downgrading.

**O06 Cancelling and win-back.** The old S8 had three emails. This version has five.
1. You are cancelled. Your plan runs to the end of the period you paid for. Your bots pause and your data is kept. You can request an export from Settings.
2. One question: why did you cancel. Two days later.
3. Anything new. Thirty days later.
4. A reminder at about 60 days of what has changed.
5. A last note at about 90 days.

**O07 Refunds.** One short email to confirm the refund and ask for feedback. Apply a Refunded tag.

**O08 Affiliate onboarding.** Six steps.
1. You are in. Where your link lives and the rates at launch and the rules.
2. What to say. Plain suggestions. Do not promise income.
3. The swipe material. Where to find it and how to use it.
4. Promote a Bot Market listing.
5. Your first referral nudge.
6. Your first commission. Triggered by the tag First Commission from the app [proposed event]. States that the commission is now in earnings and can be withdrawn.

Never mention the affiliate software by name.

**O09 Feedback request.** One email after the first sale. It asks for feedback only and never for a quote. Never fabricate a testimonial.

**O10 First sale.** One email. Congratulate without an income claim. Explain the refund period and the holdback and that withdrawals are requested in the Botters Lab. The old "payouts run daily" wording is removed.

**O11 Bot Market seller.** Two steps. Listing tips. Then reputation: Verified purchase reviews and the badges Verified Seller and 10 Sales and Top Rated. The Founder badge is left out.

**O12 Bot Market buyer.** Two steps. How to open the new bot and read the licence. Then an invitation to leave a review.

**O13 Moved across from a GPT.** One email. Test it in Preview. Rebuild actions as integrations on Novice and above. The welcome sequence already swaps Import a bot to day 3 for these members.

**O14 Power User.** Two steps. The auto top-up worked and where to change it. Then making credits go further. No pressure and no "free credits".

## 5. Tags used

See `00-strategy-one-list-and-tags.md`. New ones from this plan: Launch Open and Founders Window Closed and Refunded. Add them to the tag table.

## 6. Build order

1. Welcome sequence A0 and its stop automation.
2. Cart abandonment O04.
3. O02 was deleted on 2 November 2026.
4. Upgrade sequences.
5. Affiliate onboarding O08 and feedback O09.
6. Public launch O03.
7. The rest.

## 7. Questions for you

1. Are the five-step win-back at 30 and 60 and 90 days acceptable or should it stop at 30.
2. Resolved on 2 November 2026: O09 asks for feedback only and never for a quote.
3. Is the pre-launch sign-up form already on the site or is that still to build.

## As built (3 November 2026)

Generated by `tools\make-event-funnels.py` into `sitetv-sync\dataunnels\`. All are drafts.

- **O05** Dormant check-in: skips a member in the welcome track or an upgrade sequence. Stops if Dormant is removed.
- **O06 Cancelling:** O06-2 after two days, only if Cancelled is still on the contact. O06-1 was dropped on 3 November 2026 because the FluentCart email E42a says the same at the moment of cancelling. **O06 Win-back after plan end** sends O06-3 to O06-5 at 30, 60 and 90 days after Plan Ended and skips a member who has a plan tag again. This differs from the plan, which counted from Cancelled. The emails say the bots are paused, which is true only after the plan ends.
- **O08** Affiliate onboarding starts on Affiliate Joined for Novice Botter and above. **O08 First commission** starts on First Commission.
- **O09** Feedback request (one email, three days after First Sale), **O10** First sale, **O11** Bot Market seller (waits once for ten days if the welcome track or an upgrade is running), **O12** buyer, **O13** moved across from a GPT, **O14** Auto top-up.
- **O15** has four automations, one per reminder tag, each sending one email at once.
- **Open:** whether the app applies Affiliate Joined, First Commission and Refunded. See `21-app-agent-questions-tags-and-timing.md`.

## Lead and Founders automations as built (3 November 2026)

Generated by `tools\make-lead-funnels.py`. All are drafts.

- **O01** Pre-launch nurture starts on the Lead tag. Five emails every second day.
- **O03** Public launch starts on a new tag, Launch Open, which the owner applies to the leads on launch day. Eight emails every second day.
- **O04** Cart abandonment starts on FluentCRM's cart-abandoned trigger, with emails at about 1 hour, 1 day and 3 days. The abandoned cart feature is off. Turn it on at launch, after the privacy policy has a line on it, by setting `abandoned_cart` to `yes` in `data\settings.json`.
- **STOP Leads - Customer** cancels O01, O03 and O04 when Customer is applied.
- **FND1** sends once when the Founder tag is applied.
- **FB1 and FB2** are saved as draft broadcast campaigns for contacts tagged Lead, excluding Customer, Founder, Upgrade Active and Welcome Active. The sync never sends them.
- **Lead capture form:** built by the sync (`data/forms.json`) as the Fluent Forms form "Botterverse lead capture". It asks for a first name and an email address with a consent tick. A submission adds the contact to FluentCRM with the Lead tag, which starts O01. Single opt-in. The theme's email capture pattern finds it through the option `btv_lead_form_id`. It is not placed on any page yet.

## Changes after the app agent's tag answers (3 November 2026)

- **What the app does:** `Cancelled` goes on when a plan has ended for any reason and is never removed. `Plan Ended` goes on only when the member cancelled and the plan then ended. `Dormant` is never removed. `Affiliate Joined` and `Refunded` are not sent. `First Commission` goes on when the commission becomes withdrawable.
- **O06** is now one automation, started by Plan Ended: O06-2 after two days, then O06-3 to O06-5 at 30, 60 and 90 days. Each step skips a member who has a plan tag again. The old O06 Cancelling automation is deleted.
- **RESET Returning member** starts when any plan tag is applied and removes Cancelled, Plan Ended and Dormant, because a tag that is still attached starts nothing the next time.
- **O05** takes Dormant off in its first step for the same reason and skips a member who has no plan tag.
- **O07** now starts from FluentCart's Order Refunded (Full) event and applies the Refunded tag itself. It misses refunds the app makes directly through Stripe, such as the annual cancel and paywall or Bot Market refunds that are not FluentCart orders.
- **O08** still waits on Affiliate Joined, which the app does not send.

## Update after the app agent's second reply (3 November 2026)

- The app now sends `Affiliate Joined` (once for life) and `Refunded` (for every refund, annual cancels included). O07 starts from the Refunded tag again and removes the tag at its end. O08 can start.
- The app removes `Cancelled` and `Plan Ended` when a member buys again and removes `Dormant` when a member returns. The RESET automation and the first step of O05 do the same and cause no harm.
- Published locally on 3 November 2026: 39 of the 40 automations. O04 Cart abandonment stays a draft until a real abandoned cart has been seen. Abandoned cart tracking is switched on and the Privacy Policy says so.
- The welcome sequence now waits one day between emails, so each arrives at about the time the member signed up.
