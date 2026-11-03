# Welcome sequence plan

Draft 1 for review. This is the plan. The emails are written after you approve it.

## 1. Aim

Make the new member feel good about buying. Then introduce one function per email. Each email ends with something to paste or click so a working bot exists early.

## 2. What the member has already received

- The purchase email from the cart. It carries two links: one sets the billing login password and one creates the Botter's Lab account. Never repeat or contradict it.
- Later the confirmation email from the app.

## 3. Rules for every email

- One function. One action. One thing to paste.
- Name the sign-in: Botter's Lab (username and password) or billing login or help desk.
- Use the exact on-screen labels from the guide.
- No promised durations. The guide gives none.
- Remind people once that preview and visitor messages use their credits.
- A new bot is private until the member presses Make Public.
- No EU wording. No fixed refund or holdback figures. No Founder badge.
- Plan-gated functions only go to plans that have them.

## 4. The sequence

| # | When | Subject idea | Function | Paste or click |
|---|---|---|---|---|
| W1 | Soon after purchase | You are in | Welcome. What the plan gives. What comes next | Use the second link in your purchase email to create your Botter's Lab account |
| W2 | Day 1 | Your first bot in four fields | Create the bot | A full set of instructions with three blanks to fill |
| W2b | Day 1 for Migrated From GPT | Bring your GPT across | Import a bot | The steps and what is not carried across |
| W3 | Day 2 | Give it a category and a first question | Suggest a category and conversation starters | Three example starters |
| W4 | Day 3 | Teach it what you know | Knowledge files | One line for the instructions that makes the bot use its files first |
| W5 | Day 4 | Test it before anyone else does | Model and Preview | A question the bot should refuse |
| W6 | Day 5 | Share your bot | Make Public and Share link | A short message to send with the link |
| W7 | Day 6 | Put your bot on your site | Embed snippet and Require visitors to sign up | The embed steps |
| W8 | Day 8 | Charge for your bot | Paywall | An example of a price and a message top-up |
| W9 | Day 10 | Make marketing material with a bot | Affiliate programme and an affiliate material bot | Instructions for a bot that writes affiliate emails and ads |
| W10 | Day 12 | Never run out mid-conversation | Credits and auto top-up and promo code | The steps for auto top-up |
| W11 | Day 14 | Browse what others have built | Bot Market | The 4 stars and up filter |
| W12 | Day 17 | Where to find help | Help and Support and Feedback and data export | The Help link beside any page title |

W8 and W9 go to Novice and above. Apprentice members receive a short note about what the next plan adds instead of W8 and W9.
W11 also tells Pro and above about My listings.

## 5. Nudges outside the sequence

| Nudge | Condition | Message |
|---|---|---|
| Account not created | No plan tag by the end of day 2 | A reminder to use the purchase email's account link |
| Stuck before the first bot | No Built First Bot tag by day 4 | Offer of Support and a shorter set of instructions |
| Built but never Public | Built First Bot with no Published First Bot by day 8 | The Make Public steps and the Checking message explained |

## 6. Automation needed for each email

All sequence emails start from one automation. Triggers are marked [verify].

| Email | Trigger | Wait | Condition | Tags | Exit |
|---|---|---|---|---|---|
| W1 | FluentCart purchase of a plan [verify] | A few minutes | None | Apply Customer and Welcome Started. Remove Lead | Cancelled tag |
| W2 | Same automation | 1 day | Skip if Built First Bot | None | Built First Bot |
| W2b | Same automation | 1 day | Only if Migrated From GPT | None | Built First Bot |
| W3 | Same automation | 1 day | Skip if Built First Bot | None | Built First Bot |
| W4 | Same automation | 1 day | Skip if Built First Bot | None | Built First Bot |
| W5 | Same automation | 1 day | None | None | None |
| W6 | Same automation | 1 day | Skip if Published First Bot | None | Published First Bot |
| W7 | Same automation | 1 day | None | None | None |
| W8 | Same automation | 2 days | Only Novice Botter or higher | None | First Sale |
| W9 | Same automation | 2 days | Only Novice Botter or higher | None | Affiliate Joined |
| W10 | Same automation | 2 days | None | None | Power User |
| W11 | Same automation | 2 days | None | None | None |
| W12 | Same automation | 3 days | None | Remove Welcome Started. Apply Welcome Done | None |

If the funnel has no condition block the skip rules become separate small automations that apply a tag the main automation checks.

## 7. Questions for you

1. Is the length right or do you want fewer emails over a shorter time.
2. Should W2 give one generic bot or a choice of three types.
3. Should Apprentice members receive W9 to see what affiliates need.
4. Do you want a plain text style or a branded template for these.
