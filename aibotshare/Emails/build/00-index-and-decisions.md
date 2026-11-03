# Email build: index and decisions

Rewritten 1 November 2026. 201 written versions as text (E28, E38, E42b, E43, O06-1, O09-2 and the whole of O02 dropped). Nothing is built in FluentCRM or WordPress. Every file passes the mechanical rule check (no comma before and or or and no dashes and British spelling and the banned verb and no typed domain and no old brand name). The welcome sequence follows plan v4 (`../01-welcome-sequence-plan-v4.md`) and its loop table is `../09-welcome-loop-map-v4.md`. The rules for writers are in `../08-writing-brief.md`.

## 1. Files in `build\`

| File | Versions | Covers |
|---|---|---|
| `v4-day1-S01-T1-T2.md` | 4 | Welcome day 1: S01 and T1 and T2 and the Founders email FND1 |
| `v4-B1-B3-C1.md` | 4 | Welcome days 2 to 5: B1 and B2 and B3 and C1 |
| `v4-W1-W3-TIP.md` | 5 | Website bots W1 to W3 and tips TIP1 and TIP2 |
| `v4-M1-M6.md` | 12 | Earning M1 to M6 with a preview of each |
| `v4-F1-F6.md` | 11 | Features F1 to F6 with previews (F4 goes to every tier and has no preview) |
| `v4-N1-N6.md` | 8 | Example bots N1 to N6 with two Master versions |
| `v4-S28-S30.md` | 7 | Days 29 and 30: S28 with a preview and S30 in five tier versions |
| `broadcast-founders.md` | 2 | Founders broadcasts FB1 and FB2 for Leads |
| `upgrade-novice.md` | 10 | Upgrade sequence UN01 to UN10 |
| `upgrade-expert.md` | 10 | Upgrade sequence UE01 to UE10 |
| `upgrade-pro.md` | 10 | Upgrade sequence UP01 to UP10 |
| `upgrade-master.md` | 10 | Upgrade sequence UM01 to UM10 |
| `upgrade-jump-recaps.md` | 6 | Six jump recaps J-AE and J-AP and J-AM and J-NP and J-NM and J-EM |
| `seq-O01-O04.md` | 16 | Pre-launch and beta and launch and abandoned cart |
| `seq-O05-O15.md` | 27 | Dormant and win-back and refund and affiliate and sellers and buyers and plan ending |
| `events-01-27.md` | 38 | Event emails 1 to 27 (with variants) |
| `events-28-54.md` | 21 | Event emails 28 to 54 (with variants and E41b dropped) |
| Total | 201 | |

Other documents in `Emails\`: `00-strategy-one-list-and-tags.md` (list and tags) and `01-welcome-sequence-plan-v4.md` and `01-welcome-sequence-plan-v3.md` (still holds the A0 and STOP automation definitions) and `02-upgrade-sequences-plan.md` and `04-app-agent-prompt-tier-events.md` (done by the app agent) and `05-other-sequences-plan.md` and `06-event-emails-plan.md` and `07-soap-opera-format-and-loop-map.md` (format only: its loop table is superseded) and `10-sample-emails-v2.md` (approved voice) and `12-help-article-slugs.md` and `plan-ending-emails.md` (source for O15). Retired files are in `retired\` and `retired\build\`. They are not for use: the old welcome files S01 to S30 and the upgrade teasers U1 to U13 and the old plan versions and the storyselling plan. X2 and X3 and X4 from the old extras file are not in plan v4 and would need rewriting to the current brief before any use.

## 2. Decisions made

1. Email format is the soap opera: recap then new topic then content then a Task for today heading then a closing line then the signature on its own line then a P.S. starting "Next up". No preheader or avatars or stories. Paragraphs of one or two sentences.
2. Signature is Your Botter Support Team on every email (owner decision 2 November 2026). Subject prefix is [Botterverse] for general emails and [Botter's Lab] for Lab emails.
3. One main list plus tags. Welcome plan v4: three emails on day 1 (S01 at once and T1 five minutes later and T2 when the tier tag arrives or at the end of day 1). Members below the needed tier receive a preview of a gated email in the same slot. An upgrade ends the welcome track and starts the upgrade sequence.
4. F4 (daily limit and sign-up requirement) goes to every tier because the app has no tier limit on those settings.
5. S30 is the last welcome email. It has no P.S. and no "Next up". It winds the sequence up and exists in five tier versions chosen by the tier tag, because FluentCRM has no per-tier blocks inside one email.
6. The upgrade email IDs carry a U prefix (UN and UE and UP and UM) so they never clash with the welcome IDs or the event IDs.
7. Founders: the coupon is FOUNDER50 and the offer closes 30 November. It works on every plan and on monthly and annual billing. A Founder who leaves can use it again while it is still active. O01 to O04 carry no Founders text. Leads receive the broadcasts FB1 and FB2. The Founder tag triggers FND1 (the tag can arrive after the welcome emails).
8. The Downgraded tags almost never fire (a move down is a cancel then a first plan). Leaving and win-back emails use Cancelled and Plan Ended. E41b (plan change down) is dropped. E14 (bots paused) is sent by the app.
9. Pages in emails are linked at first mention using the real Lab paths. Fields and sections use "In" (In Instructions). The Create a bot page has no Advanced group. Help articles use the real slugs in `../12-help-article-slugs.md`.
10. No serial "and": lists read a, b and c. Say "annual" and never "yearly". The tagline is Build a bot. Share it. Sell access. No sixth tier is ever mentioned.
11. Make Public is spelled as the guide spells it. Included credits "reset" and bought credits never expire.
12. Example bots and website bots are labelled "for example". No income claims and no invented customers.
13. Change plan is built and working for upgrades. Moving down is a cancel then a new purchase (O05-3 says so).
14. Jump recaps keep their P.S. naming tomorrow's email then the catch-up (the new plan's day 1 email arrives before the catch-up starts on day 19). Say if you want it changed.
15. Fees are described in words in O01 and O03 and the figures stay on Pricing and the FAQ. The 7 and 14 day guarantee options are mentioned as a product setting. The $50 minimum is not added to O10 because it belongs only in emails about withdrawals and refunds.
16. Event 42b (annual plan cancelled) stays because annual billing is on the Pricing page.
17. Swipe Writer stays a bot the member builds (the guide has no such feature). O05-3 does not offer a plan pause because the guide has none.
18. The real phone check waits until the site is live.

## 3. Decisions still needed from you

1. **Events 13 and 27 (bot paused by staff and withdrawal failed or returned).** The guide gives no email for them. Both are written (E13 and E27). They need the app to send them. Owner decision 1 November 2026: build them. The app sends them (prompt in `../13-app-agent-prompt-paused-and-withdrawal-emails.md`). Waiting for the app agent's report.
2. **Plan ended and fewer bots (decided 1 November 2026).** The app sends `plan.ended` and `plan.fewer_bots` with the wording in `../14-app-email-wording-plan-ended-and-fewer-bots.md` (E14b and E14c in events-01-27.md). A member who pressed Cancel receives only the marketing email O15-4 (tag Plan Ended). Every other ending (failed payment or FluentCart's own Cancel) receives only `plan.ended`. O15-4 stays and now carries the same facts. The app agent still has to apply the wording and report. It also corrected E13: the words are "the Botter Support Team" and never "our team" (owner rule of 21 October).
3. **Placeholders in the event emails.** About 43 event emails are sent by the app and use its own placeholders (for example [bot name], {{bot_name}} and {{amount}}). That works because the app fills them. Six event emails in `events-28-54.md` are sent by the Cart (plan cancelled, plan change and similar) and use placeholders such as {{end_date}} and {{plan_name}} that FluentCRM cannot fill. Decide for each whether FluentCart sends it (its own notification templates) or the app sends it or FluentCRM sends it from custom fields.

## 4. Facts to confirm with the app agent or in the app

Updated 2 November 2026. These notes are still open. A decision note needs the owner.

**`events-01-27`**
- E08 (decision): the app agent says (answer 32) the app sends no password change email. Settings shows "Your password is changed." and signs out other devices. Ask the app agent to add this email or drop E08. The billing login does send WordPress's own Pass
- E11 (confirm): the length of time allowed. The guide gives none so none is stated.
- E23A (confirm): whether the app sends the same wording for all three.

**`events-28-54`**
- E38 (decision): the app agent says (answer 27) the app has no email for a refunded credit pack. A pack refund reaches the app through Stripe, the credits removed are saved as a Refunded purchase row. An email would need a code change. Drop E38 (it is optio
- E41a (confirm): that the member sees what the new plan includes under Your plan. The email says only to look there.
- E51 (confirm): that the desk can fill in {{bot_name}} and {{reply_text}}.
- E52 (confirm): whether members can reply by email. If they can replace the last paragraph with "Reply to this email to answer."

**`seq-O05-O15`**
- O06-2 (confirm): that replies to this email reach a person and are read.
- O06-5 (confirm): "We read what arrives" is true for the Feedback page.
- O08-3 (confirm): where affiliates find the swipe material. The brief says it is in the Affiliates page of the Botter's Lab. The email says so and also says "look for" so it stays true if the exact spot differs.
- O08-3 (confirm): what the swipe material contains (text only or images as well). The email says "swipe material" only.

## 5. Next steps

1. You approve the emails and answer section 3.
2. After you approve and after the domain switch: set the branded default email template (`../../Designs-WP/Email/README.md` says how) and register the `{{domain}}` filter and create the tags and build the automations (A0 and STOP and the four upgrade sequences and the six catch-ups and O01 to O15 and the event emails) in FluentCRM.
3. Build the WordPress theme and pages from the approved designs in `Designs-WP/Pages`.
4. End-to-end tests with the app agent.
