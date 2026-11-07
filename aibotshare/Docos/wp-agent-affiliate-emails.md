# To the WordPress agent: FluentAffiliate's own emails and one app sentence

From the app agent, 3 November 2026, after the owner's commission tests. Copy everything below the line into the WordPress agent's session.

---

## Brief: switch off two FluentAffiliate emails and approve one sentence

The owner's commission tests on 3 November showed that FluentAffiliate's own emails tell affiliates things that are not true for Botterverse. The app works out and pays every commission itself. FluentAffiliate only records the referral and its own figure, which is never paid. Please change FluentAffiliate's email settings as below. Report back which settings you changed, with their exact names as FluentAffiliate shows them.

### 1. Switch off the affiliate's "New Commission Earned" email

**Seen in the test:** "Affiliate Sale Confirmation: New Commission Earned", sent to the affiliate when FluentAffiliate records a referral.

**Why it is wrong:**
- **It names FluentAffiliate's figure, not the app's.** FluentAffiliate works at its flat 20%. The app pays 50% of a member's first payment and 20% after that, so a first sale is emailed at less than half its real commission.
- **It goes for referrals the app never pays.** In the test it went for a self-referral and for a Botter Booster. The app skips both and pays nothing.
- **It goes before the refund period.** A commission is paid only once `sales.refund_period` (14 days) has passed. A refund inside it means no commission at all, after the affiliate has been told they earned one.

**What replaces it:** the app's own email, "A commission has been added" (`affiliate.commission_credited`). It goes when the commission is actually credited to the affiliate's earnings, at the right amount, after every check. Nothing needs adding.

### 2. Switch off the affiliate's "payout processed" email

**Seen in the test:** "Your Affiliate Payout Has Been Processed - Botterverse", sent to the affiliate when the app marks the referral paid in FluentAffiliate.

**Why it is wrong:** the app marks a referral paid in FluentAffiliate once it has credited the commission to the affiliate's earnings, so FluentAffiliate stops offering it again. No money has moved to the affiliate's bank at that point. The affiliate withdraws later from the Payouts page, exactly as a seller does. "Payout processed" tells them money is on its way when it is not.

**What replaces it:** the app's own emails cover both moments. "A commission has been added" goes when it is credited. The payout emails, such as `payouts.withdrawal_sent`, go when the affiliate withdraws and the money is sent.

### 3. The staff copy of the new sale email

**Seen in the test:** "New Affiliate Sale Notification", sent to staff. It carries FluentAffiliate's figure too. It also goes for self-referrals and Botter Boosters. The app's daily report already lists the commissions held for review and those paid. Switch it off unless the owner wants it as an early signal. If it stays, it should never be read as the amount owed.

### 4. One sentence in the app's `plan.downgraded` email, for your approval

The app sends `plan.downgraded` when a member's tier falls. Its body says:

> Included boosts you had not used have been reset.

The owner's test showed this is not true when the email goes. A move down within a period has no paid invoice, so nothing is reset or granted until the next renewal. Members cannot move down themselves under Option C, so this email goes only when a plan is changed outside the member area, but it should still be true.

The app agent proposes:

> Your included boosts change to your new plan's at your next renewal.

Reply with this sentence approved or with your own. The app agent will then change the template, with a data migration for a saved row staff have not edited.

### Report back

1. The FluentAffiliate settings changed, by their exact names.
2. Whether the staff copy stays.
3. The `plan.downgraded` sentence.

Wording rules for anything you write back: British English and no exclamation marks. Say "the Botter Support Team" and never "our team".
