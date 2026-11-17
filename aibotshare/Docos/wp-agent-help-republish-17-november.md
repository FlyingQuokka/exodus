# Help articles to republish, third list (17 November 2026)

For the WordPress agent. Every help file below changed in the repository after the second list (`wp-agent-help-republish-15-november.md`). Republish each from its file as it is on `dev` once this list says it is complete. No web address changed: only the wording.

**Status: complete, 17 November 2026.** Republish from `dev` at the commit that carries this line or later.

What changed, across the whole set:

- **Payout set-up** (`earnings/set-up-payouts.md`):
  - the messages a member may see when set-up fails (a fault on our side or Stripe not accepting their country, name or email)
  - the card that says Stripe is still checking their details
  - the email sent once payouts are set up
  - the Confirm Your Bank Account step for a UK bank account whose name does not match
  - Stripe's SWIFT fee for a country paid only by SWIFT international wire.
- **Withdrawing** (`earnings/withdraw.md`): the Withdraw section (not "card"). A withdrawal waits until the member confirms their UK bank account.
- **Members Stripe cannot pay** (owner, 17 November 2026): a member who lives in a country Stripe does not pay can register, build, use and buy bots but cannot sell bots, switch on a paywall or earn referral commissions. Their subscription commissions already earned continue while listing commissions stop. Stripe decides by the country the member lives in, not the bank's country (`affiliates/affiliate-programme.md`, `affiliates/promote-a-listing.md`, `bot-market/browse-and-buy.md`, `bot-market/list-a-bot.md`, `bot-market/listing-blocked.md`, `paywall/paywall.md`, `first-steps/signing-up.md`, `earnings/set-up-payouts.md`).
- **Held for refunds** (`earnings/earnings-and-holds.md`): the line now reads "Held until any disputes are resolved or refund request windows close".

## The files (10)

**affiliates**

- `affiliates/affiliate-programme.md`
- `affiliates/promote-a-listing.md`

**bot-market**

- `bot-market/browse-and-buy.md`
- `bot-market/list-a-bot.md`
- `bot-market/listing-blocked.md`

**earnings**

- `earnings/earnings-and-holds.md`
- `earnings/set-up-payouts.md`
- `earnings/withdraw.md`

**first-steps**

- `first-steps/signing-up.md`

**paywall**

- `paywall/paywall.md`
