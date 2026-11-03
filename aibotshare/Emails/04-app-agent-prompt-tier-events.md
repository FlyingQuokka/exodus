# Prompt for the app coding agent: tier change direction events

Copy everything below the line into the app agent's session.

---

## Brief: add direction events to the CRM tag system

### Context

The Botter's Lab app sends CRM tag events to the FluentCRM install on the marketing website. The admin has a table of these events. Each row has an event key and a description and a tag field and a default tag. A blank tag field means the event does not fire.

Rows that exist today include tier_reached_apprentice and tier_reached_novice and tier_reached_expert and tier_reached_pro and tier_reached_master. Each says "A member tier becomes X Botter" and applies the tag "X Botter". The row for the sixth tier is blank so it never fires. A Downgraded event also exists.

### Why this is needed

The tier_reached events say where a member is. They do not say whether the member moved up or down or how far. The marketing automations need all three. Upgrades have no event at all.

### How to use this brief

I wrote this brief from outside the code. My source is the member guide and a screenshot of the admin table. I have not seen the code. Treat the brief as a plan to adapt.

- Compare each rule with what the code does and with your own coding plan.
- Where they differ adapt the brief to the code. Do not bend the code to the brief.
- Report every adaptation and the reason in your report back.
- Keep the outcomes below even if the route changes.

Outcomes I need:
1. When a member changes tier the CRM receives a tag that says which tier they left and the direction of the move. It arrives once per change.
2. A founder is tagged once and keeps the tag for life.
3. A member's first referral commission is tagged once.
4. I know how affiliate joins and referrals are recorded.

Event names and tag strings below are my proposals. Rename the event keys to fit the code's conventions. Tell me if you do. The tag strings must stay as written because the email automations match them exactly.

### What I understand from the member guide and have not checked against the code

- **The Sales email.** The guide says Settings has an optional Sales switch under Email notifications. It says the switch emails the member for each sale and each review and each affiliate commission. I do not know which moment in the code sends the commission email. It could be when a referral is recorded or when the commission is pending or when it is paid into earnings. I do not know whether it sends once per commission. Please find where it is triggered. Part D should line up with it and must not duplicate it. The CRM tag is separate from that email.
- **When a commission is paid.** The guide says a subscription commission is added to earnings only after its refund period so it is withdrawable at once. It says a promoted-listing commission is added with the sale and waits for the holdback like a sale. Commission statuses in the guide are Pending and Paid and Skipped and Under review and Not paid: self-referral.
- **Founders.** The guide says the Founder badge shows while the member's subscription uses the Founders coupon. The owner says a founder is a founder for life and that the coupon works on every tier. The code may track founder status differently from either.
- **Plan changes.** The guide says plan changes open an upgrade checkout on the website. It also has a message saying plan changes are not available yet. The app may learn of a tier change through a webhook from the website rather than making the change itself. Find the real path.
- **Leaving the programme.** The guide says moving to Apprentice Botter leaves the affiliate programme and moving back to Novice Botter or above restores it. Commission already earned is unaffected.
- **Previous tier.** The guide does not say how the app records the tier a member held before a change.

### What to build

#### A. Four upgrade events

| Event key | Description | Default tag |
|---|---|---|
| tier_upgraded_from_apprentice | A member moves up from Apprentice Botter to a higher tier. | Upgraded From Apprentice |
| tier_upgraded_from_novice | A member moves up from Novice Botter to a higher tier. | Upgraded From Novice |
| tier_upgraded_from_expert | A member moves up from Expert Botter to a higher tier. | Upgraded From Expert |
| tier_upgraded_from_pro | A member moves up from Pro Botter to a higher tier. | Upgraded From Pro |

#### B. Four downgrade-from events

Build these in the same change because they use the same code path.

| Event key | Description | Default tag |
|---|---|---|
| tier_downgraded_from_master | A member moves down from Master Botter to a lower tier. | Downgraded From Master |
| tier_downgraded_from_pro | A member moves down from Pro Botter to a lower tier. | Downgraded From Pro |
| tier_downgraded_from_expert | A member moves down from Expert Botter to a lower tier. | Downgraded From Expert |
| tier_downgraded_from_novice | A member moves down from Novice Botter to a lower tier. | Downgraded From Novice |

Keep the existing Downgraded event exactly as it is.

### Rules for when each event fires

1. An event is named for the tier the member **left**. A member who moves from Apprentice to Pro fires tier_upgraded_from_apprentice once. It fires once however many tiers are skipped.
2. The new events fire **in addition to** the existing tier_reached event for the destination tier and the existing Downgraded event. Never instead of them.
3. Fire only when the tier actually changes and there was a previous tier. Do not fire for:
   - a first plan
   - a renewal
   - a switch between monthly and annual on the same tier
   - a cancellation that does not change tier
   - a reactivation to the same tier
4. Define "previous tier" the same way the existing Downgraded event does so the two agree. If a member had no active plan before the change treat it as a first plan. Tell me what definition you found.
5. If the destination tier's tier_reached tag is blank (so that event does not fire) do not fire the direction event either. This keeps the sixth tier out of the system.
6. A blank tag field disables an event. Same as the existing rows.
7. One fire per change. Retries and duplicate webhooks must not send a second event. Use the same protection the existing events use.
8. Plan changes made by staff must behave the same as plan changes made by the member. Follow whatever the existing tier_reached events do.

### Order and side effects

- Send the direction tag before the tier_reached tag. If the app sends them in one call put them in that order.
- Do not remove or add any other tags. The CRM removes old plan tags itself.
- Tell me whether the app currently removes the old plan tag anywhere. I need to know.

### Admin table

- The new rows appear in the same table with the same editing behaviour and the default tag shown.
- Place them next to the related tier and downgrade rows.
- Description text uses British English and hyphens only.
- Nothing new mentions the sixth tier in any visible text.

### Part C: a Founder event

| Event key | Description | Default tag |
|---|---|---|
| founder_confirmed | A member becomes a founder through the Founders coupon. | Founder |

Rules:
- The Founders coupon works on every tier. A member who joins with it is a founder for life.
- Fire once per member the first time they become a founder. Never remove the tag automatically.
- Do not tie it to the badge staying visible. The badge may depend on the subscription still using the coupon. The tag does not.
- Use the same test as the badge. The code shows the badge if any subscription row, past or present, holds the coupon. A member whose coupon sits on a cancelled or replaced subscription is still a founder. An upgrade creates a new subscription and cancels the old one, so the coupon may only appear on the old row.
- Fire when a subscription row holding the coupon is first recorded for a member who has no Founder tag. Do not test only the current subscription.
- Do not fire for members who never used the coupon.
- The backfill must scan every subscription row including cancelled and expired ones. Its dry run lists the members it would tag and says which row holds the coupon.

### Part D: a first commission event

| Event key | Description | Default tag |
|---|---|---|
| affiliate_first_commission_paid | A member's first referral commission is paid into their earnings. | First Commission |

Rules:
- Fire when the commission becomes withdrawable in the member's earnings. Not while it is pending or under review. Not for skipped or self-referral commissions.
- Fire once per member. Never remove the tag. A later refund or chargeback that takes the commission back does not remove it.
- Count a commission of either kind: a subscription commission or a promoted-listing commission. Tell me if the code makes that hard.

### Part E: report how affiliate joins and referrals are recorded

Do not change anything for this part. Report:
- How a member joining the affiliate programme is recorded. Does it go through the affiliate plugin on the website by its own routes or hooks or does the app write the record itself.
- How a referral is recorded the same way.
- What happens to the record when a member moves to Apprentice Botter and leaves the programme.

I need this to know whether the plugin's own FluentCRM triggers will fire for joins and referrals. If they will not fire propose the design of an affiliate_joined event but do not build it until I say so.

### Tests

Write tests in the repo's existing style.

- All 10 upgrade pairs among the five tiers. Assert the exact set of events fired for each.
- All 10 downgrade pairs. Assert the exact set including the existing Downgraded event.
- A first plan fires only tier_reached.
- A renewal fires nothing new.
- A monthly to annual switch on the same tier fires nothing new.
- A blank tag field means no event.
- A blank destination tier_reached tag means no direction event.
- A retried or duplicated change sends one event.
- A staff-made change behaves like a member-made one.
- The admin table shows the new rows with the right defaults.
- founder_confirmed fires once for a new founder on any tier and never for a non-founder.
- founder_confirmed does not fire again when the subscription renews or changes tier.
- The founder backfill dry run changes nothing and lists the right members.
- affiliate_first_commission_paid fires once when the first commission becomes withdrawable.
- It does not fire for pending or skipped or self-referral commissions.
- It does not fire a second time for a later commission or after a clawback.

### What to report back

1. How the tier_reached events are implemented (file names and the function that fires them).
2. How previous tier is worked out.
3. Whether any code removes the old plan tag.
4. Files changed.
5. Test results.
6. A sample payload sent to the CRM for an Apprentice to Pro upgrade.
7. The part E findings on how affiliate joins and referrals are recorded.
8. Each place you adapted this brief to the code and the reason.
9. Where the Sales email for commissions is triggered and how it lines up with part D.
10. Anything unclear. If a rule above conflicts with how the code works stop and ask before changing behaviour.

### Boundaries

- Work only in the app repository.
- Do not touch the WordPress site or FluentCRM or any production data.
- Do not rename any existing event or tag.
- Follow the repo's conventions and test setup.
- No secrets in output.
- Tag strings must match exactly including capitals and spaces. FluentCRM matches them as written.

## Status (1 November 2026)

The coding agent has finished this work. The Upgraded From tags work as described. The Downgraded and Downgraded From tags almost never fire because a member moving down now cancels and buys again, which counts as Cancelled followed by a first plan. Use Cancelled and Plan Ended for win-back and plan-ending emails.
