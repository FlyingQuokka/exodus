# Questions for the app coding agent: tags and timing

Copy everything below the line into the app agent's session.

---

## Brief: seven questions about the CRM tags

I have built the FluentCRM automations from your earlier answers. They depend on which tags the app sends and when. I wrote this from outside the code, so answer from the code and not from the guide. For each question give the answer and the file you read. Do not change code.

### Questions

1. **Order and timing on an upgrade.** When a member moves up a tier, the app applies the new plan tag (for example `Expert Botter`) and an Upgraded From tag (for example `Upgraded From Novice`). In which order and how many seconds can pass between them? My upgrade automation starts on the Upgraded From tag, waits two minutes and then looks for the plan tag. If the plan tag can arrive later than two minutes, tell me how long it can take.
2. **Cancelled.** Is `Cancelled` applied at the moment the member presses Cancel, with the plan still running until its end date? Does Keep my plan remove it? What else removes it?
3. **Plan Ended.** Is `Plan Ended` applied only when the plan has actually ended? Is the plan tag removed at the same moment? Does it fire for a plan that lapsed through a failed payment? The reminders `Plan Ending Soon`, `Plan Ending Tomorrow` and `Plan Ends Today` are new in my list. Please confirm their exact spelling.
4. **Dormant.** Does the app remove `Dormant` when the member is active again? My dormant automation stops when the tag is removed.
5. **Affiliate Joined and First Commission.** Does the app apply a tag when a member joins the affiliate programme and another when the first commission is credited? I need `Affiliate Joined` and `First Commission`, spelt exactly like that. I created both in FluentCRM myself, because they were not among the tags the app already uses. If the app does not send them, tell me the simplest way to add them.
6. **Refunded.** Does the app apply a `Refunded` tag when a refund is paid or should FluentCRM start from FluentCart's own refund event? Say which events the app sees.
7. **The CRM Integration page.** You said a tag only moves if it is entered on the Back Office CRM Integration page. Please list every tag word the app can send, with the event that sends it and whether the live settings fill it in. I use these:

| Tag | Event I expect |
|---|---|
| `Apprentice Botter`, `Novice Botter`, `Expert Botter`, `Pro Botter`, `Master Botter` | Plan reached |
| `Upgraded From Apprentice`, `Upgraded From Novice`, `Upgraded From Expert`, `Upgraded From Pro` | Moved up a tier |
| `Built First Bot`, `Published First Bot`, `First Sale` | First bot built, first bot made Public, first sale |
| `Bot Market Seller`, `Bot Market Buyer` | First listing live, first Bot Market purchase |
| `Migrated From GPT` | First import |
| `Auto Top Up` | First successful auto top-up |
| `Cancelled`, `Plan Ended`, `Dormant` | As in questions 2 to 4 |
| `Plan Ending Soon`, `Plan Ending Tomorrow`, `Plan Ends Today` | Seven days before, the day before and the day the plan ends |
| `Founder` | Founders coupon used |
| `Affiliate Joined`, `First Commission` | As in question 5 |
| `Refunded` | As in question 6 |

### Report back

Answer each question by its number. For question 7, mark every tag in the table that the app does not send today.

Wording rules for anything you write back: British English and no exclamation marks. Say "the Botter Support Team" and never "our team".
