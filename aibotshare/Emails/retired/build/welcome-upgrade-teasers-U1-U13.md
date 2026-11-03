# Welcome sequence upgrade teasers U1 to U13

The thirteen upgrade-teaser emails that sit inside the tier tracks of the welcome sequence in place of spine emails. Each shows one feature of a higher plan by describing a screen or a result. Nothing is set up in FluentCRM.

Conditional blocks use the same style as the Founder block in the samples (for example `{{#apprentice}} ... {{/apprentice}}`). They are Check Condition blocks on the plan tag: Apprentice Botter and Novice Botter and Expert Botter and Pro Botter.

## Loop map

"Incoming" is the P.S. the previous email in the track must end with so that the recap here echoes it. "Outgoing" is the P.S. of the teaser. Where a teaser has more than one successor the P.S. is conditional on the plan tag.

| Email | Topic | Follows (by track) | Incoming loop (P.S. of the previous email) | Outgoing loop (P.S. of this email) |
|---|---|---|---|---|
| U1 | Paywall | Apprentice: X3 | Next up: what a price tag looks like on a bot. | Next up: who comes through the door of your bot and the two settings that decide it. (to S20) |
| U2 | Every model | Apprentice: S20 | Next up: the same question put to four different brains. | Next up: a bot that writes your promotions for you. (to U3) |
| U3 | Affiliate programme | Apprentice: U2 | (U2 outgoing) | Next up: what happens when your bot meets your own tools. (to U4) |
| U4 | Integrations | Apprentice: U3 | (U3 outgoing) | Next up: a short tidy-up of the Lab. (to S29) |
| U5 | Analytics | Apprentice: S29. Novice: X3 | Next up: what your bot's numbers could be telling you. | Next up: one bot in two outfits. (to U6) |
| U6 | Bot styles | Apprentice and Novice: U5. Expert: X3 | Next up: one bot in two outfits. | Next up: what a bot looks like when it's for sale in the Bot Market. (to U7) |
| U7 | Bot Market selling | All three: U6 | (U6 outgoing) | Next up: what your leads look like when they arrive in your own tools. (to U8) |
| U8 | CRM connector | All three: U7 | (U7 outgoing) | Apprentice: Next up: where to turn when you're stuck. (to X4). Novice: Next up: how to promote someone else's bot. (to X5). Expert: Next up: which of two greetings wins. (to U9) |
| U9 | A/B tests | Expert: U8. Pro: S28 | Next up: which of two greetings wins. | Expert: Next up: how to promote someone else's bot. (to X5). Pro: Next up: the last email in the series and a short list of things worth another look. (to S30) |
| U10 | Advanced analytics | Pro: X2 | Next up: how many people look at your bot's page and how many buy. | Next up: how to be a seller people trust. (to S28) |
| U11 | Bot limit (Novice) | Apprentice: X4 | Next up: what a business could do with more than one bot. | Next up: which plan fits what you want to do. (to U13) |
| U12 | Bot limit (Expert) | Novice: X5 | Next up: one bot for each audience. | Next up: a short tidy-up of the Lab. (to S29) |
| U13 | Plan choice | Apprentice: U11 | (U11 outgoing) | Next up: the last email in the series and a short list of things worth another look. (to S30) |

Coordination needed with the writers of the other emails:
- X3 ends three different ways: Apprentice (to U1) and Novice (to U5) and Expert (to U6).
- S29 for Apprentice ends with the U5 incoming loop. S29 for everyone else keeps the 07 loop.
- X4 and X5 and X2 and S28 end with the incoming loops shown above for U11 and U12 and U10 and U9.
- S20 for Apprentice ends with the U2 incoming loop.

---

## U1 - What a price tag looks like (day 17, Apprentice)

**Subject:** [Botter's Lab] What a price tag looks like

**Body:**

Hi {{contact.first_name}},

Yesterday you browsed the Bot Market and saw how other Botters present their bots. Today you see what a price tag looks like on a bot.

This is a look at a feature of the next plan up, so there's nothing to set up.

**The paywall as a buyer sees it**

Picture a bot called Paid Answer Desk that answers questions about one subject in depth. A buyer opens its page and sees the name, the rating, a short description and a list headed Things you can ask it. Under that sit the price, the number of messages that come with it and the money-back guarantee if the owner chose one.

For example the price could be $12 for 100 messages with a top-up of 50 messages for $6. These figures are only an example because every owner sets their own. The buyer ticks the agreement and presses Pay and the chat opens. At the message cap the buyer sees Top up.

Each buyer message is paid for from the owner's credits so the cap protects them. Every sale appears in Sales with the platform fee and the owner's share.

The paywall comes with Novice Botter and you can change plan from Billing and credits then Your plan then Change plan whenever it suits you.

**Task for today**

Re-read the description of your best bot as if you were a buyer. Is it clear what someone would be paying for?

See you soon,

Your Botter Team

P.S. Next up: who comes through the door of your bot and the two settings that decide it.

**Notes**
- Facts: paywall page contents, Pay flow and Top up at the cap, cap protects owner's credits, Sales columns (digest 5.1 to 5.5). Paywall is Novice Botter and above. Change plan path from digest 10.6.
- The example price is labelled as an example. No plan prices or limits are named.
- Automation: T-App step 5 (day 17). Tags tested: none needed. Welcome Active stays on.
- [CONFIRM: digest 10.6 says Plan changes are not available here yet. means the member contacts the Botter Support Team. If the Change plan button is not live at launch all teasers need a one-line change to "contact the Botter Support Team". Applies to every email in this file.]

---

## U2 - Same question, four brains (day 19, Apprentice)

**Subject:** [Botter's Lab] Same question, four brains

**Body:**

Hi {{contact.first_name}},

Yesterday you set the doors for your bot: the Daily credit limit and Require visitors to sign up. Today the same question goes to four different brains.

**Four families on one screen**

Open any bot and look at Model. It lists four families: Claude, GPT, Gemini and Grok. On your plan each family offers its everyday models.

With Novice Botter every model appears, including the most expensive one from each family. A dearer model uses more credits per message so the choice is worth making on purpose.

The families often differ in tone and length, which is easy to see when you ask the same question of each. Try it on a Personal bot because changing the model on a Public bot means confirming its declarations again.

Every model comes with Novice Botter and you can change plan from Billing and credits then Your plan then Change plan whenever it suits you.

**Task for today**

Choose one real question your bot should answer. In Model pick one family and press Save then ask the question in Preview. Switch to a second family then Save and ask again to compare the tone and the length (Preview uses your credits).

Speak soon,

Your Botter Team

P.S. Next up: a bot that writes your promotions for you.

**Notes**
- Facts: four families, everyday models only on Apprentice, every model from Novice, dearer model uses more credits, Preview under Advanced uses credits, declarations again on a Public bot after a model change (digest 3.8, 3.9).
- No sample outputs are shown because the plan requires real runs. [CONFIRM: owner may add four short answers from real runs to the same question as a quote block after the first paragraph under "Four families on one screen". Until then the email stays neutral.]
- Automation: T-App step 7 (day 19).

---

## U3 - A bot that writes your promotions (day 20, Apprentice)

**Subject:** [Botter's Lab] A bot that writes your promotions

**Body:**

Hi {{contact.first_name}},

Yesterday you put one question to different brains. Today a bot writes your promotions for you.

**The Affiliates page**

Affiliates sits at the foot of the menu from Novice Botter up. Join the affiliate programme and it shows Your link, which ends in your username.

You earn commission on the subscription payments of members who joined through your link and on Bot Market sales made through listing links you share. Credit packs earn nothing. Referrals lists each person with a date and a status.

Each commission shows a status in Subscription commissions: Pending or Paid or Skipped or Under review or Not paid: self-referral. A commission waits until the refund period has passed and is then reviewed and paid into your earnings.

Pair the link with a bot of your own. A Swipe Writer is a bot you build with instructions so that it drafts affiliate emails and ads and review posts from the details of a product you give it. You read the draft and edit it before it goes anywhere.

The affiliate programme comes with Novice Botter and you can change plan from Billing and credits then Your plan then Change plan whenever it suits you.

**Task for today**

Think of one place you could share a link such as an email list or a social account or your website. Write it down.

Until next time,

Your Botter Team

P.S. Next up: what happens when your bot meets your own tools.

**Notes**
- Facts: Affiliates at menu foot for Novice and above, Join the affiliate programme, Your link ends in the username, commission on subscription payments and on Bot Market listing links, credit packs earn nothing, statuses Pending and Paid and Skipped and Under review and Not paid: self-referral, commission waits for the refund period (digest ch 11). No rates and no figures given. No earnings claim.
- Swipe Writer is described as a bot the member builds. Sample output is left out until a real run exists. [CONFIRM: owner may add a short real Swipe Writer output for a sample product.]
- The affiliate software is not named.
- Automation: T-App step 8 (day 20).

---

## U4 - Your bot meets your tools (day 21, Apprentice)

**Subject:** [Botter's Lab] Your bot meets your tools

**Body:**

Hi {{contact.first_name}},

Yesterday you saw how a bot can write your promotions. Today your bot meets your own tools.

**A bot that looks things up**

An integration lets a bot call one of your own services while it chats, such as a booking system or an order lookup or a price list. Here is an example of what a visitor could see:

> Visitor: Do you have a free slot on Thursday afternoon?
>
> Bot: Let me check the calendar. Thursday at 2pm and 4pm are free. Which would you like?

That conversation is an example only. The bot did not guess the answer. It asked your service.

You set this up in the Integrations section of the bot builder with Add an integration. You give it a Name and a Method and say What it does then enter the Endpoint address (which must start with https). Choose Authentication and set Switched on and press Save integration. Any key or password is stored encrypted and never shown again.

Integrations come with Novice Botter and you can change plan from Billing and credits then Your plan then Change plan whenever it suits you.

**Task for today**

Write down one thing visitors ask that the answer lives in a system of yours. That's your first integration.

See you soon,

Your Botter Team

P.S. Next up: a short tidy-up of the Lab.

**Notes**
- Facts: integration fields and labels, https endpoint, credentials encrypted and never shown again (digest 9.1). Integrations are Novice Botter and above.
- The conversation is an invented illustration and is labelled as an example. It names no customer.
- Automation: T-App step 9 (day 21).

---

## U5 - What your numbers could be telling you (day 23, Apprentice and Novice)

**Subject:** [Botter's Lab] What your numbers could be telling you

**Body:**

Hi {{contact.first_name}},

{{#apprentice}}Yesterday you tidied up the Lab with your timezone and notifications and data export.{{/apprentice}}{{#novice}}Yesterday you wandered the Bot Market.{{/novice}} Today you see what your bot's numbers could be telling you.

**Two panels worth knowing**

{{#apprentice}}Basic analytics comes with Novice Botter. It shows conversations and messages and credits used and revenue with a Conversations over time graph.{{/apprentice}}{{#novice}}You already see conversations and messages and credits used and revenue with a Conversations over time graph.{{/novice}} Expert Botter adds Category benchmarks and Busiest hours and Top conversation starters.

Here's what two of those panels could show. These are examples only.

> Busiest hours: most chats begin in the early evening. You would share your link then.
>
> Top conversation starters: How do I book? is picked three times as often as your other two starters. You would put it first and rewrite the others.

Every figure has an info mark that explains what it counts.

{{#apprentice}}Basic analytics comes with Novice Botter and Busiest hours and Top conversation starters with Expert Botter.{{/apprentice}}{{#novice}}Busiest hours and Top conversation starters come with Expert Botter.{{/novice}} You can change plan from Billing and credits then Your plan then Change plan whenever it suits you.

**Task for today**

{{#apprentice}}Think of the one question you would most like your numbers to answer. It might be when people visit or what they ask first. Write it down.{{/apprentice}}{{#novice}}Open Analytics in the menu and choose a bot and a Date range. Press the info mark beside Conversations to see what the figure means.{{/novice}}

Speak soon,

Your Botter Team

P.S. Next up: one bot in two outfits.

**Notes**
- Facts: basic analytics Novice and above, Category benchmarks and Busiest hours and Top conversation starters Expert and above, info mark on every figure (digest 8.1). The two panels are described by their names and purpose only. [CONFIRM: how Busiest hours is drawn (graph or grid) is not in the digest so the email does not describe its shape.]
- Both example panels are labelled as examples.
- The plan sentence is one conditional sentence per tier.
- Automation: T-App step 11 (day 23) and T-Nov step 6 (day 23). Tags tested: Apprentice Botter and Novice Botter.

---

## U6 - Same bot, new outfit (day 24, Apprentice and Novice and Expert)

**Subject:** [Botter's Lab] Same bot, new outfit

**Body:**

Hi {{contact.first_name}},

{{#apprentice}}Yesterday you saw what your numbers could be telling you.{{/apprentice}}{{#novice}}Yesterday you saw what your numbers could be telling you.{{/novice}}{{#expert}}Yesterday you wandered the Bot Market.{{/expert}} Today you see one bot in two outfits.

**One bot twice**

Picture your Quick Answer Bot twice. The first shows the default look with the powered-by tag at the foot.

The second wears a Bot style. It has your logo and a Display name at the top and a Background and Accent colour chosen to match your site. The Corners are Round and the Chat text size is Large and Show the powered-by tag is switched off.

You make a style once under Bot styles in the menu with New style. A live Preview shows the chat as visitors see it and warns you when text is hard to read against its background. Apply it with Style in the bot builder or with Apply to another bot.

A style changes the chat page and the paywall and the embed and the sign-up pages. It doesn't change the Lab. Edit a style and every bot that uses it changes too.

Bot styles come with Pro Botter and you can change plan from Billing and credits then Your plan then Change plan whenever it suits you.

**Task for today**

Choose the colour from your logo or site that you would use as the Accent. Write down its name or code.

See you soon,

Your Botter Team

P.S. Next up: what a bot looks like when it's for sale in the Bot Market.

**Notes**
- Facts: style fields Branding (logo and Display name) and Colours and Text and corners and What shows, live Preview and contrast warnings, Apply to another bot, Edit changes every bot on the style, affects bot pages and not the Lab (digest 4.6). Pro Botter and above.
- The recap is the same sentence for Apprentice and Novice (U5 precedes) and differs for Expert (X3 precedes).
- Automation: T-App step 12 and T-Nov step 7 and T-Exp step 4 (day 24).

---

## U7 - A listing in the Bot Market (day 25, Apprentice and Novice and Expert)

**Subject:** [Botter's Lab] A listing in the Bot Market

**Body:**

Hi {{contact.first_name}},

Yesterday you saw one bot in two outfits. Today you see what a bot looks like when it's for sale in the Bot Market.

**A listing page**

A listing shows the name and the rating and the price and a short description with the category and the model. Beneath sit Reviews marked Verified purchase and a section called About the seller with badges. Strips follow: Customers who also bought and You might also like and More from this seller.

A seller builds it under My listings with List a bot for sale. They write the Description and Tags (Suggest a description and tags makes a first draft and uses no credits). They choose a sale type: Transfer moves the bot to the buyer and Multi-sell gives each buyer their own copy while the seller keeps the original.

They then choose one of four licences: Personal use and Resell rights and Master resell rights and PLR. They set the Price (USD) and an Affiliate share (%) for people who promote the listing. Submit sends it for review and Save as draft keeps it for later.

Selling on the Bot Market comes with Pro Botter and you can change plan from Billing and credits then Your plan then Change plan whenever it suits you.

**Task for today**

Open Browse and pick a listing in a category close to one of your bots. Read its description and note what makes it clear.

Speak soon,

Your Botter Team

P.S. Next up: what your leads look like when they arrive in your own tools.

**Notes**
- Facts: listing page elements (digest 6.3), listing steps and labels and sale types and licences (6.2, 6.5). Listing is Pro Botter and above. Every plan can buy.
- No prices or income wording. No fee figure.
- Automation: T-App step 13 and T-Nov step 8 and T-Exp step 5 (day 25).

---

## U8 - What your leads look like when they arrive (day 26, Apprentice and Novice and Expert)

**Subject:** [Botter's Lab] What your leads look like when they arrive

**Body:**

Hi {{contact.first_name}},

Yesterday you looked at a listing in the Bot Market. Today you see what your leads look like when they arrive in your own tools.

**A lead in your own CRM**

The CRM connector sends details of customers who agreed to share them to your own CRM. A customer sees an unticked box asking whether to share their name and email address with you and nothing is sent unless they tick it.

Each event that arrives holds a handful of items. This is an example only:

> Event: first conversation started
>
> Tag: lead-{bot}, which fills in as lead-quick-answer-bot
>
> Customer: their name and email address
>
> Bot: its name and slug. Also the A/B variant and the time and an event id.

You choose the tag for each moment. They are grouped as Lead and Engaged and Free user ready to buy and Buyer and Upsell timing and Re-engage and Feedback. A tag left blank means that event isn't sent.

You set it up under Settings then CRM with a Webhook address and Your privacy notice. Press Save then use Send test event then Switch on. Once it's on you're responsible for that data under data protection law.

The CRM connector comes with Pro Botter and you can change plan from Billing and credits then Your plan then Change plan whenever it suits you.

**Task for today**

Write down which tool you would send leads to and the one tag you would want on a brand new lead.

See you soon,

Your Botter Team

{{#apprentice}}P.S. Next up: where to turn when you're stuck.{{/apprentice}}{{#novice}}P.S. Next up: how to promote someone else's bot.{{/novice}}{{#expert}}P.S. Next up: which of two greetings wins.{{/expert}}

**Notes**
- Facts: consent box and nothing sent unless the customer agrees (digest 9.5), event contents (9.2), lifecycle groups and blank tag rule and `{bot}` fill (9.3), setup steps and labels (9.2), member responsibility (9.2). Pro Botter and above.
- The customer list is not mentioned here so the consent condition is only stated for events. "Customers who agreed to share them" is used throughout.
- The tag example is labelled as an example. The signing detail is left to the member's developer.
- P.S. is conditional by track because the next email differs: X4 for Apprentice and X5 for Novice and U9 for Expert.
- Automation: T-App step 14 and T-Nov step 9 and T-Exp step 6 (day 26). Tags tested: plan tag for the P.S.

---

## U9 - Which greeting wins (day 27 Expert and day 29 Pro)

**Subject:** [Botter's Lab] Which greeting wins

**Body:**

Hi {{contact.first_name}},

{{#expert}}Yesterday you saw what your leads look like when they arrive in your own tools.{{/expert}}{{#pro}}Yesterday you looked at how to be a seller people trust.{{/pro}} Today you see which of two greetings wins.

**Two greetings and one result**

A/B tests lets you run two versions of a bot at once. The bot as it stands is the control. You add a variant with its own Instructions and Starters, such as a warmer greeting. You set the Control's share (%) and the variant's Share (%) so that they total 100% and press Start the test.

The same visitor always sees the same version. When the test is running the results panel looks like this. These figures are an example only:

| | Control | Variant |
|---|---|---|
| Conversations | 140 | 135 |
| Messages per conversation | 4.1 | 5.6 |
| Returning customers | 12 | 21 |
| Paywall conversion | 2.1% | 3.0% |
| Revenue per conversation | $0.18 | $0.25 |

When you're ready you press Choose as winner or Keep the control or Stop the test. Then you can Start a new test. Price is never tested.

A/B tests come with Master Botter and you can change plan from Billing and credits then Your plan then Change plan whenever it suits you.

**Task for today**

Write the greeting your best bot uses now and then a second version in a different tone. Keep both for later.

Speak soon,

Your Botter Team

{{#expert}}P.S. Next up: how to promote someone else's bot.{{/expert}}{{#pro}}P.S. Next up: the last email in the series and a short list of things worth another look.{{/pro}}

**Notes**
- Facts: A/B tests is Master Botter only, control and variants and Control's share (%) and Share (%) and Instructions and Starters and Add a variant and Start the test, same visitor sees the same version, five result figures, Choose as winner and Keep the control and Stop the test and Start a new test, price never tested (digest 8.3).
- The table is labelled as an example and is not a real result. [CONFIRM: owner approves invented example figures in the results panel or prefers words only.]
- Pro recap points to S28 (the previous Pro email). Pro has U10 (Conversion) two days earlier so the Pro writer of S30 can mention Master once.
- Automation: T-Exp step 7 (day 27) and T-Pro step 5 (day 29). Tags tested: Expert Botter and Pro Botter for recap and P.S.

---

## U10 - Views against purchases (day 27, Pro)

**Subject:** [Botter's Lab] Views against purchases

**Body:**

Hi {{contact.first_name}},

Yesterday you saw how to clone a bot before you tinker with it. Today you see how many people look at your bot's page and how many buy.

**The Conversion panel**

On Bot analytics Master Botter adds a Conversion panel. It sets views against purchases with four figures: Paywall views and Listing views and Purchases and Conversion.

For example a paywall is viewed 200 times and bought 10 times. That's 5% and the figure is an example only.

The panel tells you where to look next. Many views and few purchases means people reach the page but don't buy, so read the paywall as a buyer does: the description and Things you can ask it and the guarantee. Few views means the work is in where you share the link.

The panel never tests price and neither does an A/B test. Greetings and starters and descriptions are the things you can change and compare.

Advanced analytics comes with Master Botter and you can change plan from Billing and credits then Your plan then Change plan whenever it suits you.

**Task for today**

Open the Share link of one of your paid bots in a private browser window and read the paywall page as a buyer would. Note the one line you would change.

See you soon,

Your Botter Team

P.S. Next up: how to be a seller people trust.

**Notes**
- Facts: Conversion panel is Master Botter with Paywall views and Listing views and Purchases and Conversion (digest 8.1), price is never tested (8.3), paywall page contents (5.5), quick win private window (ch 5).
- The 200 and 10 figures are labelled as an example. "Listing views" assumes the member has a Bot Market listing, which a Pro member can have.
- X2 (Duplicate and Pause) must end with: Next up: how many people look at your bot's page and how many buy.
- Automation: T-Pro step 3 (day 27).

---

## U11 - One bot is a start (day 28, Apprentice)

**Subject:** [Botter's Lab] One bot is a start

**Body:**

Hi {{contact.first_name}},

Yesterday we covered where to find help. Today you see what a business could do with more than one bot.

**A set of five**

Novice Botter allows more bots than you have now. Here's an example of five bots for five jobs in one business:

| Bot | Its job |
|---|---|
| Quick Answer Bot | Answers common questions on one subject |
| Paid Answer Desk | Sells deeper answers behind a paywall |
| Lead Catcher | Asks visitors to sign up so you know who's chatting |
| Booking Helper | Looks up free slots in your calendar |
| Swipe Writer | Drafts promotions for your affiliate link |

Four of those have already appeared in this series. Each one has its own instructions and starters and knowledge files, so each stays good at one thing.

Every bot counts towards your plan's limit whether it's Personal or Public and running or paused. Active bots on the Dashboard shows where you stand. At the limit New bot is hidden and a note says that you can change your plan to add more bots.

You can change plan from Billing and credits then Your plan then Change plan whenever it suits you. The [Pricing](https://{{domain}}/pricing/) page lists the limits.

**Task for today**

Open the Dashboard and read Active bots. Then write down the one job you would give a second bot.

Until next time,

Your Botter Team

P.S. Next up: which plan fits what you want to do.

**Notes**
- Facts: each plan adds more bots, bots count whether Personal or Public or paused, Active bots on the Dashboard, New bot hidden at the limit (digest 3.1, 2.6). No limit figure is stated. The Pricing page link carries the numbers.
- The example set reuses bots from the series: Paid Answer Desk (U1) and Swipe Writer (U3) and Booking Helper (U4) and Lead Catcher (S20). Quick Answer Bot is the bot built in S03.
- The five bots are an example. The email does not claim Novice allows exactly five.
- X4 (Where to find help) must end with: Next up: what a business could do with more than one bot.
- Automation: T-App step 16 (day 28).

---

## U12 - One bot for each audience (day 28, Novice)

**Subject:** [Botter's Lab] One bot for each audience

**Body:**

Hi {{contact.first_name}},

Yesterday you saw how to promote someone else's bot. Today you see one bot for each audience.

**A map of bots**

Expert Botter allows many more bots than Novice. One way to use them is a bot for each audience, each with its own instructions and starters. Here's an example map for one business:

| Audience | Bot | What it does |
|---|---|---|
| New visitors | Welcome bot | Explains the basics in plain words |
| Beginners | Starter bot | Walks through first steps |
| Experienced users | Deep dive bot | Answers detailed questions from your files |
| Paying customers | Support bot | Handles questions behind a paywall |
| Partners | Partner bot | Explains how to work with you |

Duplicate is the quick way to begin. It keeps the instructions and files and starters and model and gives the copy "Copy" in its name. Each bot has its own Daily credit limit so a busy one can't use up all your credits.

With deeper analytics each bot shows its own Top conversation starters and Busiest hours, so you can see what every audience asks.

More bots come with Expert Botter and you can change plan from Billing and credits then Your plan then Change plan whenever it suits you.

**Task for today**

Write down the audiences you serve. If any would like a different tone from the others, that's a second bot.

Speak soon,

Your Botter Team

P.S. Next up: a short tidy-up of the Lab.

**Notes**
- Facts: Expert adds more bots and deeper analytics (digest 1.4, 8.1), Duplicate keeps instructions and files and starters and model and adds "Copy" and counts towards the limit (3.10), Daily credit limit is saved per bot (3.3, 4.4).
- No bot limit figure is stated. The map is an example only.
- Analytics are per bot (the Bot control on Bot analytics).
- X5 (Promote someone else's bot) must end with: Next up: one bot for each audience.
- Automation: T-Nov step 11 (day 28).

---

## U13 - Which plan fits (day 29, Apprentice)

**Subject:** [Botterverse] Which plan fits

**Body:**

Hi {{contact.first_name}},

Yesterday you saw what a business could do with more than one bot. Today a short quiz shows which plan fits what you want to do.

**Find the line that sounds like you**

Each plan includes everything in the plan before it. Read down the left column and stop at the line that sounds most like your next step.

| If you'd like to | Look at |
|---|---|
| Stay as you are and keep building and sharing | Apprentice Botter - nothing to do |
| Charge for a bot or connect it to your tools or use every model or join the affiliate programme | Novice Botter |
| See when visitors arrive and what they ask first | Expert Botter |
| Give your bots your own look or sell bots on the Bot Market or send leads to your own CRM | Pro Botter |
| Test one version of a bot against another | Master Botter |

The [Pricing](https://{{domain}}/pricing/) page shows what each plan costs and what its limits are.

If a plan sounds right you can change plan from Billing and credits then Your plan then Change plan whenever it suits you. If not, your account carries on exactly as it is.

**Task for today**

Pick the line from the table that matters most to you in the next month. If it's the first line then you're done.

See you soon,

Your Botter Team

P.S. Next up: the last email in the series and a short list of things worth another look.

**Notes**
- Facts: the five plans and what each adds (digest 1.4). Features named are each at that tier or higher. CRM connector and Bot Market selling and styles are Pro. A/B tests are Master. Deeper analytics is Expert. Paywall and integrations and every model and affiliate programme are Novice.
- No prices or limits are named. The Pricing page link carries them.
- Prefix is [Botterverse] because the subject is the plan and not a Lab feature.
- U11 must end with: Next up: which plan fits what you want to do.
- Automation: T-App step 17 (day 29).
