# Event emails plan

Draft 1 for review. This covers the emails and notices the member area needs. The source is section 3 of `Docos\member-guide-digest.md`. Nothing is written yet.

## 1. Who sends what

Most events in the guide say "the member is emailed". The Botter's Lab app sends those itself. We do not send them from FluentCRM. What we can provide is the **copy** so every email sounds the same. The app agent adopts it.

| Sender | Meaning |
|---|---|
| App | The Botter's Lab sends it |
| Cart | FluentCart or WordPress sends it |
| Desk | The help desk sends it |
| CRM | A FluentCRM automation sends it |
| None | The guide shows an on-screen notice only |

Every sender is marked [verify with the app agent]. The guide describes behaviour and does not name the sender.

## 2. House style for event emails

- Transactional. No marketing. No stories. No upsells.
- Subject prefix: [Botterverse] for general emails and [Botter's Lab] for emails about the Botter's Lab. Member-area events use [Botter's Lab]. Purchase and billing events use [Botterverse].
- One purpose per email. The first line says what happened.
- Then what it means for the member. Then the one thing to do if anything.
- Use the exact on-screen labels from the guide.
- Name the sign-in when it matters: Botter's Lab or billing login or help desk.
- Short. No promised durations or response times.
- Links use the domain token. Never a typed domain.

## 3. The 54 events

Copy: Yes means we write it. Optional means the guide shows a notice only. A short email would help.

| # | Event | Sender | Copy | Note |
|---|---|---|---|---|
| 1 | Purchase email with two links | Cart | Yes | Review that it holds both links. Never duplicated elsewhere |
| 2 | Email confirmation link | App | Yes | Includes the Send it again case |
| 3 | Plan activated after confirmation | None | Optional | The welcome sequence covers it |
| 4 | Forgotten password | App | Yes | |
| 5 | Forgotten username | App | Yes | |
| 6 | Billing login password reset | Cart | Yes | Link works once and expires after 24 hours |
| 7 | Email change | App | Yes | Four variants: new address link and old address notice and old address confirmation and billing email updated |
| 8 | Password change | App | Yes | Security email |
| 9 | Bot blocked by model provider | App | Yes | |
| 10 | Public bot switched to Personal after a blocked category | App | Yes | |
| 11 | Declarations not re-confirmed in time | App | Yes | |
| 12 | Daily credit limit reached | App | Yes | Once per day |
| 13 | Bot paused by staff | App | Yes | Not stated in the guide. Recommended |
| 14 | Bots paused by plan change | App | Yes | Sent by the app. The Downgraded tags rarely fire. Not stated in the guide |
| 15 | Guarantee claim received (seller) | App | Yes | |
| 16 | Guarantee claim decided (buyer) | App | Yes | |
| 17 | Guarantee claim automatic refund | App | Optional | |
| 18 | Bot Market purchase | App | Yes | O12 follows seven days later |
| 19 | Purchase refunded as undeliverable | App | Optional | |
| 20 | Bot Market refund decision | App | Yes | |
| 21 | Listing goes live | App | Yes | |
| 22 | Licence terms changed | App | Yes | Sent to each holder after Notify my buyers |
| 23 | Sale and review and commission | App | Yes | Opt-in. Three variants |
| 24 | Dispute opened on a sale | App | Yes | |
| 25 | Payout set-up done by hand | App | Yes | |
| 26 | Withdrawal sent | App | Yes | |
| 27 | Withdrawal failed or returned | App | Yes | Not stated in the guide. Recommended |
| 28 | Withdrawal held on suspension | App | Optional | |
| 29 | Insights report ready | App | Yes | Opt-in |
| 30 | CRM connection switched off by failures | App | Yes | |
| 31 | Credits low | App | Yes | |
| 32 | Credits exhausted | App | Yes | All bots have stopped answering |
| 33 | Auto top-up charged | App | Yes | Power User tag fires on the first one |
| 34 | Auto top-up daily cap reached | App | Yes | |
| 35 | Auto top-up declined twice | App | Yes | |
| 36 | Auto top-up statement updated | App | Yes | The member must agree again |
| 37 | Auto top-up needs bank approval | App | Yes | Not stated in the guide. Recommended |
| 38 | Credit pack refunded | App | Optional | |
| 39 | Receipts and invoices | Cart | Yes | Style the FluentCart email templates |
| 40 | Payment failed | Cart | Yes | The guide shows the Payment past due pill only. Recommended |
| 41 | Plan change | Cart | Yes | Two variants: up and down. Pairs with the tier tags |
| 42 | Plan cancelled | CRM | Yes | O06 step 1 |
| 43 | Plan ends | CRM | Yes | Recommended |
| 44 | Account suspended | App | Yes | Not stated in the guide. Recommended |
| 45 | Terms or privacy updated | App | Yes | Not stated in the guide. Recommended |
| 46 | Data export ready | App | Yes | |
| 47 | Account closure requested | App | Yes | Gives the grace period end date |
| 48 | Grace period ends | App | Yes | Not stated in the guide. Recommended |
| 49 | Reopening | None | Optional | A short "welcome back" |
| 50 | Referral sign-up and commission paid | App | Covered | By event 23 and O08 |
| 51 | Report this bot reply | Desk | Yes | A reply template |
| 52 | Support ticket replies | Desk | Yes | A template for the Fluent Support emails |
| 53 | Customer shares details with a bot owner | None | No | On-screen only |
| 54 | First built and first published and first sale | CRM | No | Handled by the behaviour sequences and the welcome sequence |

Totals: 45 to write. 6 optional. 1 covered elsewhere. 2 not needed.

## 4. Recommended extras

Eleven events have no email in the guide where one would help. They are marked Recommended above: 13 and 14 and 27 and 37 and 40 and 43 and 44 and 45 and 48 plus the optional notices 17 and 19. The app agent decides whether to build them.

## 5. Delivery

- Write the copy in groups: account and sign-in then bots then Bot Market then earnings and withdrawals then credits and billing then plan and account.
- Each group is one file in `emails\events\`.
- Give the app agent a short brief that points to the files and the house style.

## 6. Questions for you

1. Do you want all 45 written now or only the recommended extras first.
2. Do you want the app agent to adopt the copy or keep its own wording for existing emails.
