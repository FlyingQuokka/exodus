# Upgrade jump recaps

The six jump-recap emails from section 8 of `02-upgrade-sequences-plan.md` (the middle route). Each one replaces the first email of the new plan's upgrade sequence (UE01, UP01 or UM01) when a member skips one plan or more. The rest of the new plan's sequence runs unchanged. The catch-up emails then follow after the sequence ends (days 19 onwards). Nothing is set up in FluentCRM.

## Loop map

| Email | Jump | Replaces | Skipped | P.S. loop |
|---|---|---|---|---|
| J-AE | Apprentice to Expert | UE01 | Novice | Next up: tomorrow your Expert series continues with the questions your visitors ask most and later the catch-up emails take you through the Novice features above one at a time. |
| J-AP | Apprentice to Pro | UP01 | Novice and Expert | Next up: tomorrow your Pro series starts with making every bot look like yours and later the catch-up emails take you through the Novice and Expert features above one at a time. |
| J-AM | Apprentice to Master | UM01 | Novice and Expert and Pro | Next up: tomorrow you set up your first A/B test and later the catch-up emails take you through the Novice, Expert and Pro features above one at a time. |
| J-NP | Novice to Pro | UP01 | Expert | Next up: tomorrow your Pro series starts with making every bot look like yours and later the catch-up emails take you through the Expert features above one at a time. |
| J-NM | Novice to Master | UM01 | Expert and Pro | Next up: tomorrow you set up your first A/B test and later the catch-up emails take you through the Expert and Pro features above one at a time. |
| J-EM | Expert to Master | UM01 | Pro | Next up: tomorrow you set up your first A/B test and later the catch-up emails take you through the Pro features above one at a time. |

Decision for the owner: the first email of the new sequence is followed on day 1 by the second email of that sequence (UE02, UP02 or UM02) and the catch-up starts only on day 19. A P.S. that points only at the catch-up would break the daily chain so each P.S. names tomorrow's email and then the catch-up. If you prefer the P.S. to name only the catch-up the day 1 email's recap would need to change as well.

The order of each list matches the catch-up table in section 8 so the member meets the features in the same order.

---

## J-AE - Apprentice to Expert (day 0, replaces UE01)

**Subject:** [Botterverse] Welcome to Expert Botter - you've skipped ahead

**Body:**

Hi {{contact.first_name}},

Welcome to Expert Botter. You've moved up from Apprentice Botter in one step, so you now have everything Novice Botter adds as well as Expert's own features.

**What Expert adds**

Expert Botter adds more bots, larger included boosts and deeper analytics. In [Analytics](https://lab.{{domain}}/bots/analytics) that means Category benchmarks, Busiest hours and Top conversation starters.

**What you skipped**

These Novice features are open to you now. They're in the order the catch-up emails will cover them and each line says where it lives and links to its Help article.

1. Every model. Open a bot from the [Bot list](https://lab.{{domain}}/bots) and look at Model. The most expensive model from each family now appears. [Help article](https://{{domain}}/docs/choose-a-model/)
2. The paywall. On the [Create a bot](https://lab.{{domain}}/bots/create) page, open Paywall and pricing and use Sell access to this bot to charge a one-time price. [Help article](https://{{domain}}/docs/paywall/)
3. The affiliate programme. Select [Affiliates](https://lab.{{domain}}/affiliates) at the foot of the menu then Join the affiliate programme. [Help article](https://{{domain}}/docs/affiliate-programme/)
4. Integrations. In Integrations on the Create a bot page, a bot can look things up in your own services. [Help article](https://{{domain}}/docs/integrations/)

Basic analytics is open as well. Select Analytics in the menu for conversations, messages, boosts used and revenue.

**Try this first**

Open Analytics and choose a bot. Look at Top conversation starters to see which starter your visitors pick most.

Speak soon,

Your Botter Support Team

P.S. Next up: tomorrow, your Expert series continues with the questions your visitors ask most and later the catch-up emails take you through the Novice features above one at a time.

**Notes**
- Facts: Expert adds more bots and larger included boosts and deeper analytics (digest 1.4). Novice features and their locations from digest 3.8, 5.2, 9.1, 11.1 and 8.1 and menu map 1.5. No numbers, prices or limits.
- Order follows the catch-up UN02 (every model) and UN03 (paywall) and UN06 (affiliate) and UN08 (integrations).
- Automation: UP-Exp step 1 in place of UE01. Sent only when the contact has Upgraded From Apprentice and Expert Botter. Catch-up CU-AE starts on Upgrade Done. Tags: Upgrade Active applied by the sequence.
- Welcome track: an upgrade ends the welcome track (A0 stops and Welcome Done is applied) whatever day the member has reached so no welcome email is repeated here.
- Help article slugs are the real BetterDocs slugs (read 1 November 2026).

---

## J-AP - Apprentice to Pro (day 0, replaces UP01)

**Subject:** [Botterverse] Welcome to Pro Botter - you've skipped ahead

**Body:**

Hi {{contact.first_name}},

Welcome to Pro Botter. You've moved up from Apprentice Botter by two steps, so you now have everything Novice Botter and Expert Botter add as well as Pro's own features.

**What Pro adds**

Pro Botter adds more bots again, [Bot styles](https://lab.{{domain}}/bot-styles) and a lower platform fee. It also adds selling on the Bot Market with your own licence terms, the CRM connector and priority support.

**What you skipped**

These Novice and Expert features are open to you now. They're in the order the catch-up emails will cover them and each line says where it lives and links to its Help article.

1. Every model. Open a bot from the [Bot list](https://lab.{{domain}}/bots) and look at Model. The most expensive model from each family now appears. [Help article](https://{{domain}}/docs/choose-a-model/)
2. The paywall. On the [Create a bot](https://lab.{{domain}}/bots/create) page, open Paywall and pricing and use Sell access to this bot to charge a one-time price. [Help article](https://{{domain}}/docs/paywall/)
3. The affiliate programme. Select [Affiliates](https://lab.{{domain}}/affiliates) at the foot of the menu then Join the affiliate programme. [Help article](https://{{domain}}/docs/affiliate-programme/)
4. Integrations. In Integrations on the Create a bot page, a bot can look things up in your own services. [Help article](https://{{domain}}/docs/integrations/)
5. Conversation insights. Open the bot from Bot list then in the Analytics section, switch on Conversation insights (each run uses your boosts). [Help article](https://{{domain}}/docs/conversation-insights/)
6. Top conversation starters. Select [Analytics](https://lab.{{domain}}/bots/analytics) in the menu and choose a bot. [Help article](https://{{domain}}/docs/bot-analytics/)

Basic analytics, Busiest hours and Category benchmarks are open on the same Analytics page.

**Try this first**

Select Bot styles in the menu and press New style. Add your logo and an Accent colour and watch the live Preview change.

Until next time,

Your Botter Support Team

P.S. Next up: tomorrow, your Pro series starts with making every bot look like yours and later the catch-up emails take you through the Novice and Expert features above one at a time.

**Notes**
- Facts: Pro adds more bots and Bot styles and a lower platform fee and Bot Market selling with own licence terms and the CRM connector and priority support (digest 1.4). Locations from digest 3.8, 5.2, 9.1, 11.1, 8.1, 8.2, 4.6 and menu map 1.5. No numbers.
- Conversation insights are switched on in the Analytics section of the Create a bot page. They are open on every plan and each run costs boosts (brief section 12).
- Order follows the catch-up UN02 and UN03 and UN06 and UN08 and UE05 and UE02.
- Automation: UP-Pro step 1 in place of UP01. Sent only when the contact has Upgraded From Apprentice and Pro Botter. Catch-up CU-AP starts on Upgrade Done.
- Welcome track: an upgrade ends the welcome track (A0 stops and Welcome Done is applied) whatever day the member has reached so no welcome email is repeated here.

---

## J-AM - Apprentice to Master (day 0, replaces UM01)

**Subject:** [Botterverse] Welcome to Master Botter - you've skipped ahead

**Body:**

Hi {{contact.first_name}},

Welcome to Master Botter. You've moved up from Apprentice Botter by three steps, so you now have everything Novice, Expert and Pro Botter add as well as Master's own features.

**What Master adds**

Master Botter adds [A/B tests](https://lab.{{domain}}/bots/ab-tests) and advanced analytics. A/B tests runs two versions of a bot against each other and advanced analytics sets views against purchases in a Conversion panel.

**What you skipped**

These features from the plans in between are open to you now. They're in the order the catch-up emails will cover them and each line says where it lives and links to its Help article.

1. The paywall. On the [Create a bot](https://lab.{{domain}}/bots/create) page, open Paywall and pricing and use Sell access to this bot to charge a one-time price. [Help article](https://{{domain}}/docs/paywall/)
2. The affiliate programme. Select [Affiliates](https://lab.{{domain}}/affiliates) at the foot of the menu then Join the affiliate programme. [Help article](https://{{domain}}/docs/affiliate-programme/)
3. Top conversation starters. Select [Analytics](https://lab.{{domain}}/bots/analytics) in the menu and choose a bot. [Help article](https://{{domain}}/docs/bot-analytics/)
4. Conversation insights. Open the bot from [Bot list](https://lab.{{domain}}/bots) then in the Analytics section, switch on Conversation insights (each run uses your boosts). [Help article](https://{{domain}}/docs/conversation-insights/)
5. Listing a bot on the Bot Market. Select [My listings](https://lab.{{domain}}/listings) then List a bot for sale. [Help article](https://{{domain}}/docs/list-a-bot/)
6. The CRM connector. Open [Settings](https://lab.{{domain}}/settings) then CRM to send customers who agreed to share their details to your own CRM. [Help article](https://{{domain}}/docs/crm-connector/)

Also open on your plan: every model, Integrations, basic analytics, Busiest hours, Category benchmarks, [Bot styles](https://lab.{{domain}}/bot-styles), Interest tags, a lower platform fee and priority support.

**Try this first**

Select A/B tests in the menu and read the form. It asks for a Bot and a Control's share (%), then a variant. You can start a real test tomorrow.

See you soon,

Your Botter Support Team

P.S. Next up: tomorrow, you set up your first A/B test and later the catch-up emails take you through the Novice, Expert and Pro features above one at a time.

**Notes**
- Facts: Master adds A/B tests and advanced analytics (digest 1.4, 8.1, 8.3). Locations from digest 5.2, 11.1, 8.1, 8.2, 6.5, 9.2 and menu map 1.5. No numbers.
- Conversation insights are switched on in the Analytics section of the Create a bot page. They are open on every plan and each run costs boosts (brief section 12).
- Order follows the catch-up UN03 and UN06 and UE02 and UE05 and UP03 and UP06. The line after the list names the skipped features that the catch-up does not cover.
- The CRM line carries the consent condition (customers who agreed to share their details).
- Automation: UP-Mas step 1 in place of UM01. Sent only when the contact has Upgraded From Apprentice and Master Botter. Catch-up CU-AM starts on Upgrade Done.
- Welcome track: an upgrade ends the welcome track (A0 stops and Welcome Done is applied) whatever day the member has reached so no welcome email is repeated here.

---

## J-NP - Novice to Pro (day 0, replaces UP01)

**Subject:** [Botterverse] Welcome to Pro Botter - you've skipped ahead

**Body:**

Hi {{contact.first_name}},

Welcome to Pro Botter. You've moved up from Novice Botter by two steps, so you now have everything Expert Botter adds as well as Pro's own features.

**What Pro adds**

Pro Botter adds more bots again, [Bot styles](https://lab.{{domain}}/bot-styles) and a lower platform fee. It also adds selling on the Bot Market with your own licence terms, the CRM connector and priority support.

**What you skipped**

These Expert features are open to you now. They're in the order the catch-up emails will cover them and each line says where it lives and links to its Help article.

1. Top conversation starters. Select [Analytics](https://lab.{{domain}}/bots/analytics) in the menu and choose a bot. [Help article](https://{{domain}}/docs/bot-analytics/)
2. Busiest hours. It sits on the same Analytics page and shows when your visitors chat. [Help article](https://{{domain}}/docs/bot-analytics/)
3. Conversation insights. Open the bot from [Bot list](https://lab.{{domain}}/bots) then in the Analytics section, switch on Conversation insights (each run uses your boosts). [Help article](https://{{domain}}/docs/conversation-insights/)
4. More bots. Active bots on the [Dashboard](https://lab.{{domain}}/) shows how many you have used and Bot list holds them all. [Help article](https://{{domain}}/docs/bot-list/)

Category benchmarks is open as well and sits on the Analytics page beside This bot.

**Try this first**

Select Bot styles in the menu and press New style. Add your logo and an Accent colour and watch the live Preview change.

Speak soon,

Your Botter Support Team

P.S. Next up: tomorrow, your Pro series starts with making every bot look like yours and later the catch-up emails take you through the Expert features above one at a time.

**Notes**
- Facts: Pro adds (digest 1.4). Expert adds more bots and larger included boosts and deeper analytics (1.4, 8.1). Locations from digest 8.1, 8.2, 2.6, 3.11, 4.6. No numbers. Category benchmarks stays hidden until enough bots feed it (8.1) so it is only mentioned as open.
- Conversation insights are switched on in the Analytics section of the Create a bot page. They are open on every plan and each run costs boosts (brief section 12).
- Order follows the catch-up UE02 and UE03 and UE05 and UE06.
- Automation: UP-Pro step 1 in place of UP01. Sent only when the contact has Upgraded From Novice and Pro Botter. Catch-up CU-NP starts on Upgrade Done.
- Welcome track: an upgrade ends the welcome track (A0 stops and Welcome Done is applied) whatever day the member has reached so no welcome email is repeated here.

---

## J-NM - Novice to Master (day 0, replaces UM01)

**Subject:** [Botterverse] Welcome to Master Botter - you've skipped ahead

**Body:**

Hi {{contact.first_name}},

Welcome to Master Botter. You've moved up from Novice Botter by two steps, so you now have everything Expert and Pro Botter add as well as Master's own features.

**What Master adds**

Master Botter adds [A/B tests](https://lab.{{domain}}/bots/ab-tests) and advanced analytics. A/B tests runs two versions of a bot against each other and advanced analytics sets views against purchases in a Conversion panel.

**What you skipped**

These Expert and Pro features are open to you now. They're in the order the catch-up emails will cover them and each line says where it lives and links to its Help article.

1. Top conversation starters. Select [Analytics](https://lab.{{domain}}/bots/analytics) in the menu and choose a bot. [Help article](https://{{domain}}/docs/bot-analytics/)
2. Conversation insights. Open the bot from [Bot list](https://lab.{{domain}}/bots) then in the Analytics section, switch on Conversation insights (each run uses your boosts). [Help article](https://{{domain}}/docs/conversation-insights/)
3. Bot styles. Select [Bot styles](https://lab.{{domain}}/bot-styles) in the menu then New style to give your bots your own look. [Help article](https://{{domain}}/docs/bot-styles/)
4. Listing a bot on the Bot Market. Select [My listings](https://lab.{{domain}}/listings) then List a bot for sale. [Help article](https://{{domain}}/docs/list-a-bot/)
5. The CRM connector. Open [Settings](https://lab.{{domain}}/settings) then CRM to send customers who agreed to share their details to your own CRM. [Help article](https://{{domain}}/docs/crm-connector/)
6. Interest tags and the customer download. Both sit in Settings then CRM and the download lists only customers who agreed to share their details. [Help article](https://{{domain}}/docs/interest-tags/)

Also open on your plan: Busiest hours, Category benchmarks, a lower platform fee and priority support.

**Try this first**

Select A/B tests in the menu and read the form. It asks for a Bot and a Control's share (%), then a variant. You can start a real test tomorrow.

Until next time,

Your Botter Support Team

P.S. Next up: tomorrow, you set up your first A/B test and later the catch-up emails take you through the Expert and Pro features above one at a time.

**Notes**
- Facts: Master adds (digest 1.4, 8.3). Locations from digest 8.1, 8.2, 4.6, 6.5, 9.2, 9.4, 9.5. Consent condition stated for the CRM and the customer download. No numbers.
- Conversation insights are switched on in the Analytics section of the Create a bot page. They are open on every plan and each run costs boosts (brief section 12).
- Order follows the catch-up UE02 and UE05 and UP02 and UP03 and UP06 and UP08.
- Automation: UP-Mas step 1 in place of UM01. Sent only when the contact has Upgraded From Novice and Master Botter. Catch-up CU-NM starts on Upgrade Done.
- Welcome track: an upgrade ends the welcome track (A0 stops and Welcome Done is applied) whatever day the member has reached so no welcome email is repeated here.

---

## J-EM - Expert to Master (day 0, replaces UM01)

**Subject:** [Botterverse] Welcome to Master Botter - you've skipped ahead

**Body:**

Hi {{contact.first_name}},

Welcome to Master Botter. You've moved up from Expert Botter by two steps, so you now have everything Pro Botter adds as well as Master's own features.

**What Master adds**

Master Botter adds [A/B tests](https://lab.{{domain}}/bots/ab-tests) and advanced analytics. A/B tests runs two versions of a bot against each other and advanced analytics sets views against purchases in a Conversion panel.

**What you skipped**

These Pro features are open to you now. They're in the order the catch-up emails will cover them and each line says where it lives and links to its Help article.

1. Bot styles. Select [Bot styles](https://lab.{{domain}}/bot-styles) in the menu then New style to give your bots your own look. [Help article](https://{{domain}}/docs/bot-styles/)
2. Listing a bot on the Bot Market. Select [My listings](https://lab.{{domain}}/listings) then List a bot for sale. [Help article](https://{{domain}}/docs/list-a-bot/)
3. The CRM connector. Open [Settings](https://lab.{{domain}}/settings) then CRM to send customers who agreed to share their details to your own CRM. [Help article](https://{{domain}}/docs/crm-connector/)
4. Interest tags and the customer download. Both sit in Settings then CRM and the download lists only customers who agreed to share their details. [Help article](https://{{domain}}/docs/interest-tags/)

A lower platform fee and priority support are open as well.

**Try this first**

Select A/B tests in the menu and read the form. It asks for a Bot and a Control's share (%), then a variant. You can start a real test tomorrow.

See you soon,

Your Botter Support Team

P.S. Next up: tomorrow, you set up your first A/B test and later the catch-up emails take you through the Pro features above one at a time.

**Notes**
- Facts: Master adds (digest 1.4, 8.3). Pro features and locations from digest 4.6, 6.5, 9.2, 9.4, 9.5, 1.4. Consent condition stated. No numbers.
- Order follows the catch-up UP02 and UP03 and UP06 and UP08.
- Automation: UP-Mas step 1 in place of UM01. Sent only when the contact has Upgraded From Expert and Master Botter. Catch-up CU-EM starts on Upgrade Done.
- Welcome track: an upgrade ends the welcome track (A0 stops and Welcome Done is applied) whatever day the member has reached so no welcome email is repeated here.
