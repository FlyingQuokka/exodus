# Upgrade sequence: Novice Botter (UN01 to UN10)

Ten emails for a member who has just moved up to Novice Botter. Days 0, 1, 3, 5, 7, 9, 11, 13, 15 and 17. Automation UP-Nov. Applies Upgrade Active at the start. The last email removes Upgrade Active and applies Upgrade Done.

## Loop map

| Email | Day | Topic | P.S. loop text |
|---|---|---|---|
| UN01 | 0 | Welcome to Novice Botter and what just opened | Next up: every AI model is now yours to choose from. Which family should answer your visitors? |
| UN02 | 1 | Every model: the four families | Next up: your bot is ready to earn. What will a buyer see before they pay? |
| UN03 | 3 | The paywall and the one-time price | Next up: a paywall with no limits can cost you. How do you cap it? |
| UN04 | 5 | Message cap and top-up | Next up: one promise that puts a buyer at ease. What does it cost you if someone uses it? |
| UN05 | 7 | Money-back guarantee and claims | Next up: a bot that writes your promotions for you. What would you ask it to write? |
| UN06 | 9 | Affiliate programme and a promotions bot | Next up: your own bots aren't the only ones you can promote. Whose would you pick? |
| UN07 | 11 | Promoting other Botters' bots | Next up: your bot can talk to people. Can it also talk to your booking system? |
| UN08 | 13 | Integrations: a booking helper | Next up: is it all working? One number to check first. |
| UN09 | 15 | Basic analytics (peek: Expert) | Next up: how many bots do you really need? A map for one business. |
| UN10 | 17 | Using your bots well (peek: Pro) | None. Plain sign-off. |

---

## UN01 - Welcome to Novice Botter (day 0, new Novice Botter)

**Subject:** [Botterverse] Welcome to Novice Botter

**Body:**

Hi {{contact.first_name}},

Your move to Novice Botter has gone through. Everything from your last plan is still there and several new things have opened.

Today is a short tour so you can choose where to start. Over the next few weeks, one email covers each feature in depth and each one ends with something you can use straight away.

**What Novice Botter adds**

- Every AI model, including the dearer ones in each family.
- The paywall, where visitors pay a one-time price for access to a bot. It comes with message top-ups.
- Integrations, which let a bot use your own services while it chats.
- Basic analytics on [Analytics](https://lab.{{domain}}/bots/analytics) in the menu.
- The affiliate programme, on [Affiliates](https://lab.{{domain}}/affiliates) at the foot of the menu.
- More bots. Your limit is shown under Active bots on the [Dashboard](https://lab.{{domain}}/) and the [Pricing](https://{{domain}}/pricing/) page lists what each plan includes.

**Task for today**

Pick the one you want to try first. If you want a bot to answer better or more cheaply, start with the models (tomorrow). If you want a bot to earn, start with the paywall (day 3).

Glad to have you on the next step,

Your Botter Support Team

P.S. Next up: every AI model is now yours to choose from. Which family should answer your visitors?

**Notes**
- Facts: Novice Botter adds every AI model, the paywall with message top-ups, integrations, basic analytics, the affiliate programme and more bots (guide 1.4). The Dashboard shows the bot limit under Active bots (guide 1.4). No figures printed.
- Automation: UP-Nov step 1. Tags applied: Upgrade Active.
- If the contact skipped a tier the recap email replaces this one.

---

## UN02 - Every model: the four families (day 1, Novice Botter)

**Subject:** [Botters Lab] Which family should answer your visitors?

**Body:**

Hi {{contact.first_name}},

Yesterday's tour showed that every AI model is now yours to choose from. Today is about picking between the four families.

**Choosing a model**

Open the bot from [Bot list](https://lab.{{domain}}/bots) and select the Model section. You'll find Claude (the default), GPT, Gemini and Grok. On your earlier plan, only the everyday models were offered and now every model in each family is open.

A dearer model uses more credits per message. That applies to your visitors' chats and to your own testing in Preview.

Two rules are worth knowing. If you change the model on a Public bot, you'll confirm its declarations again. If your instructions are too long for the model you pick, Save refuses with the message The instructions are too large for this model.

**Try the same question on each family**

Use a question that needs judgement and not a fact. Here's one you can adapt:

> [A REAL QUESTION A CUSTOMER HAS ASKED YOU, ONE WHERE THE ANSWER DEPENDS ON THEIR SITUATION]. After you answer, tell me the one thing you'd need to know to answer better.

**Task for today**

Use Duplicate on a working bot so your original stays untouched. The copy starts as Personal and counts towards your bot limit.

In the copy, choose a different model and press Save. Open Preview and ask the question above. Check your credits pill before and after to see what the answer cost. Repeat for each family and keep the one whose answer you'd be happy for a customer to read.

Enjoy the comparison,

Your Botter Support Team

P.S. Next up: your bot is ready to earn. What will a buyer see before they pay?

**Notes**
- Facts: four families with Claude as default; Apprentice Botter has everyday models only; dearer models use more credits; model change on a Public bot means confirming declarations again; refusal wording; Preview uses the last saved version and the owner's credits; Duplicate starts Personal and counts towards the limit (guide 3.8, 3.9, 3.10).
- Subject echoes the UN01 P.S.
- Automation: UP-Nov step 2.

---

## UN03 - The paywall and the one-time price (day 3, Novice Botter)

**Subject:** [Botters Lab] What will a buyer see before they pay?

**Body:**

Hi {{contact.first_name}},

Two days ago, you compared the model families and chose the one that answers best. That bot is ready to earn.

Today you'll switch on the paywall and see what a buyer sees. Visitors pay a one-time price for access to the bot. There's no subscription.

**Switching it on**

1. Open the bot from [Bot list](https://lab.{{domain}}/bots). It has to be Public first, which means Mode, ticking the declarations, Confirm declarations and then Make Public.
2. Open Paywall and pricing and tick Sell access to this bot.
3. Enter the One-time price in US dollars.
4. Leave Message cap empty for now. Tomorrow's email covers it.
5. Press Save.

Each sale adds to your earnings less the platform fee. A price change applies to new buyers only.

**What buyers see**

The paywall page shows your bot's name and description, the starters under Things you can ask it, the price and the guarantee if you add one. A signed-out visitor chooses Sign up or Sign in. After that, they tick the agreement and press Pay. The chat then opens.

That makes your description and starters the sales page. Here's a layout to adapt, with an example below it.

> [WHAT IT HELPS WITH] in plain language. Built from [WHAT IT KNOWS]. Ask it about [THING ONE] or [THING TWO].

For example: "A plain-English guide to choosing a first road bike. Built from a short buyer's checklist. Ask it what to look for or what to avoid."

For example, three starters: "Which frame size suits me?", "What should I check on a used bike?" and "What can I skip on a first bike?"

**Task for today**

Set the price and save. Then open the Share link in a private browser window to see the paywall as a buyer does. Don't press Pay.

Have fun with it,

Your Botter Support Team

P.S. Next up: a paywall with no limits can cost you. How do you cap it?

**Notes**
- Facts: paywall steps, fields and buyer view from guide 5.1 to 5.5. Public needed first (guide 4.1). Price changes apply to new buyers (5.3). Quick win from chapter 5 (private window).
- Examples are labelled "for example". No real price printed.
- Story version dropped (no invented person).
- Automation: UP-Nov step 3.

---

## UN04 - Message cap and top-up (day 5, Novice Botter)

**Subject:** [Botters Lab] How do you cap a paywall?

**Body:**

Hi {{contact.first_name}},

On day 3, you switched on the paywall and saw what a buyer sees. A paywall with no limits can cost you, because every buyer message is paid from your credits.

Today you'll add a Message cap and a top-up so each sale stays worthwhile.

**How the cap works**

Message cap is the number of messages one purchase includes. If you leave it empty, the access has no cap. Once a buyer reaches the cap, they see a Top up button.

A top-up needs three things: a cap, a Top-up size in messages and a Top-up price. The platform fee is taken from each access and each top-up.

**Choosing the numbers**

Open [Analytics](https://lab.{{domain}}/bots/analytics) and find credits per message for your bot. That's roughly what one buyer message costs you. Multiply it by the cap and check the one-time price covers that with room to spare.

For example, a cap of 100 messages with a top-up of 50 messages. The guide's own example button reads "Top up 50 messages for $9.00". Treat any figures as a starting point and adjust once you've seen real use.

**Task for today**

Open Paywall and pricing on your bot. Enter a Message cap then a Top-up size in messages and a Top-up price. Press Save.

Minimum prices apply. If you change a price to a figure that is too low, a message appears beside the field.

See you in two days,

Your Botter Support Team

P.S. Next up: one promise that puts a buyer at ease. What does it cost you if someone uses it?

**Notes**
- Facts: Message cap empty means no cap; top-up needs both fields and a cap; buyer sees Top up at the cap; fee on each access and top-up; the cap protects the owner because each buyer message is paid from the owner's credits (guide 5.3). Credits per message is a basic analytics figure (8.1). The $9.00 example is the guide's own button wording (5.5).
- Confirmed by the app agent (1 November 2026, answer 13): a message shows beside the price field when the price is changed to below the minimum. The minimums are staff settings so no figure is stated.
- Subject echoes the UN03 P.S.
- Automation: UP-Nov step 4.

---

## UN05 - Money-back guarantee and claims (day 7, Novice Botter)

**Subject:** [Botters Lab] A promise that puts buyers at ease

**Body:**

Hi {{contact.first_name}},

Last time you capped the messages and added a top-up. Today is about one promise that puts a buyer at ease and what it costs you if someone uses it.

**Guarantee and rating**

In Paywall and pricing, you'll find Money-back guarantee. The choices are No guarantee, 7 days or 14 days. The wording on the paywall is fixed so buyers see the same promise everywhere.

Below it is Show the bot's rating on its paywall page. Buyers can rate a bot from 1 to 5 stars after a few messages and that rating appears once you switch this on.

**If a buyer makes a claim**

The buyer uses Request a refund on [Bots I bought](https://lab.{{domain}}/my-bots) and gives a reason. You're emailed and [Sales](https://lab.{{domain}}/sales) shows the claim with the reason and the date it will be refunded automatically.

You can press Refund or Ask the Botter Support Team to review. If you do nothing, the buyer is refunded on that date. A guarantee refund takes the full price from your earnings even when that leaves them below zero.

**Choosing your guarantee**

1. Can a buyer judge the bot in a few messages? If so, 7 days is usually enough.
2. Have you promised a longer period on your own site? A promise longer than the platform's can leave you unable to refund from earnings.
3. Is the bot new? Leave the rating off until buyers have rated it.
4. Are you happy to refund the full price? If not, choose No guarantee.

**Task for today**

Choose a guarantee from the list above and press Save. Then open Sales and look at the columns so a first claim won't surprise you.

Speak soon,

Your Botter Support Team

P.S. Next up: a bot that writes your promotions for you. What would you ask it to write?

**Notes**
- Facts: guarantee options, fixed wording, rating switch, claim handling, full price taken from earnings even below zero, longer promises elsewhere may be unrefundable because of the holdback (guide 5.4 to 5.6). Buyers rate 1 to 5 stars after a few messages (5.5).
- Holdback length and refund period not stated, as the guide gives none.
- Story version dropped (no invented person).
- Automation: UP-Nov step 5.

---

## UN06 - Affiliate programme and a promotions bot (day 9, Novice Botter)

**Subject:** [Botters Lab] A bot that writes your promotions

**Body:**

Hi {{contact.first_name}},

Last time you chose a guarantee and learned how a claim is handled. Today a bot writes your promotions for you.

First, you'll join the affiliate programme and then build a small helper bot to draft the posts.

**Joining**

Select [Affiliates](https://lab.{{domain}}/affiliates) at the foot of the menu then Join the affiliate programme. You'll see Your link, which ends in your username.

You earn commission on subscription payments from members who join through your link. That covers their first payment and every renewal. Credit packs earn nothing and referring yourself breaks the terms. Support can tell you the current rates.

**A promotions bot**

Use [Create a bot](https://lab.{{domain}}/bots/create) to make one called Swipe Writer. Keep it Personal because only you will use it. In Instructions, paste this into What the bot should do:

> You write short promotional posts for [MY NAME OR BRAND]. The product is the Botterverse bot builder, which lets people build AI bots and share them or sell access to them. Write in a [TONE] voice using plain words. Use only the facts I give you in each request. Never invent results, earnings, reviews or prices. Always include the link I give you. Give me three versions each time: one short, one medium and one for an email.

In Knowledge files, add a short file with what you're happy to say about your own experience so every post sounds like you.

**Task for today**

Join the programme and copy Your link. Then ask Swipe Writer for three versions of one post and paste the link in your request.

Happy writing,

Your Botter Support Team

P.S. Next up: your own bots aren't the only ones you can promote. Whose would you pick?

**Notes**
- Facts: Affiliates page, Join the affiliate programme, Your link ends in username; commission on subscription payments (first and every renewal) of members who joined through the link; credit packs earn nothing; self-referral breaks terms; Support gives rates (guide 11.1, 11.2, 11.4). Knowledge files accept PDF, Word, text, Markdown and CSV (3.7).
- No rates, no income claims. The bot instructions tell the bot never to invent results or earnings.
- "Swipe Writer" is a bot the member builds here. The guide has no such feature and the welcome sequence does not use the name, so this stays as written.
- Subject echoes the UN05 P.S.
- Automation: UP-Nov step 6.

---

## UN07 - Promoting other Botters' bots (day 11, Novice Botter)

**Subject:** [Botters Lab] Whose bot would you promote?

**Body:**

Hi {{contact.first_name}},

Two days ago, you joined the affiliate programme and built a bot to draft your posts. Your own bots aren't the only ones you can promote.

Today you'll promote a listing on the Bot Market and see where the commission appears.

**How a promote link works**

Members sell bots to each other on the Bot Market. When you promote a listing with your link, you earn commission on the sale. If a buyer clicks more than one link, the last click counts, within the affiliate period.

The seller sets an Affiliate share (%) on the listing and it's taken from what's left after the platform fee. Commission waits for the refund period and then becomes withdrawable.

**Finding something worth promoting**

Select [Browse](https://lab.{{domain}}/market) under Bot Market. Switch on the 4 stars and up filter so you only see well-rated bots. Open a listing and read the description and the Reviews.

Only promote a bot you'd use yourself. Say plainly that the link is yours.

**Task for today**

1. Open a listing you like.
2. Press Promote and copy the link.
3. Ask Swipe Writer for a short post about that bot and paste in the link.

Later, the Promoted listings card on [Affiliates](https://lab.{{domain}}/affiliates) shows your Sales and Commission earned for each link.

Enjoy browsing,

Your Botter Support Team

P.S. Next up: your bot can talk to people. Can it also talk to your booking system?

**Notes**
- Facts: Promote on a listing; last click counts within the affiliate period; Promoted listings shows Sales and Commission earned; Affiliate share (%) set by the seller and taken from what is left after the platform fee; commission waits for the refund period (guide 11.3, 11.4, 7.2). Browse filter 4 stars and up (6.3). Every plan can buy and browse (6.1).
- Setting an Affiliate share needs Pro Botter. This email says only that the seller sets it.
- Subject echoes the UN06 P.S.
- Automation: UP-Nov step 7.

---

## UN08 - Integrations: a booking helper (day 13, Novice Botter)

**Subject:** [Botters Lab] Can your bot talk to your booking system?

**Body:**

Hi {{contact.first_name}},

Last time you copied a Promote link for another Botter's bot. Today your bot learns to talk to a service of your own.

An integration lets a bot call your booking system, an order lookup or a price list while it chats. We'll set one up field by field for a bot that checks appointment times.

**Before you start**

Save the bot first. Then open the bot from [Bot list](https://lab.{{domain}}/bots) and in Integrations, select Add an integration. You'll need the web address of your service and its documentation open beside you.

**The fields, with example values**

- Name: Check appointment times
- Method: the one your service's documentation says to use (GET, POST, PUT, PATCH or DELETE)
- What it does: Looks up free appointment times for a date the visitor gives and returns them.
- Endpoint address: https://[YOUR SERVICE ADDRESS] (it must start with https)
- Add a parameter: Name: date. Description: The day the visitor wants, as year-month-day. Required: ticked. Choose Type (String, Number or Boolean) and Sent in the (Query, Body or Header) to match your service.
- Authentication: None, Bearer token, API key in a header or Basic (user name and password), whichever your service expects
- Switched on: ticked

Press Save integration. Credentials are stored encrypted and are never shown again. Changes take effect at once without pressing Save on the bot.

**Tell the bot when to use it**

In Instructions, add this to What the bot should do and save the bot:

> When a visitor asks about availability, use Check appointment times. Ask them for the date first.

Sending data to anyone other than the model provider has to be declared under declaration 7. Confirm your declarations again if the bot is Public.

**Task for today**

Add the integration and test it in Preview with a real date.

Good luck,

Your Botter Support Team

P.S. Next up: is it all working? One number to check first.

**Notes**
- Facts: integration fields and authentication options from guide 9.1; save bot first; credentials encrypted and never shown again; changes take effect now; declaration 7 for third parties (9.1, 4.2). Declarations re-confirmed after an integration change (4.2).
- Confirmed by the app agent (answer 4): Method GET, POST, PUT, PATCH, DELETE (GET preselected). Type String, Number, Boolean. The third control is labelled Sent in the with Query, Body, Header.
- Story version dropped (no invented person).
- Automation: UP-Nov step 8.

---

## UN09 - Basic analytics (day 15, Novice Botter)

**Subject:** [Botters Lab] Which number should you check first?

**Body:**

Hi {{contact.first_name}},

Last time your bot learned to call your booking system. Is it all working? Today you read the numbers.

**What Analytics shows on Novice Botter**

Select [Analytics](https://lab.{{domain}}/bots/analytics) in the menu and choose your Bot and a Date range. Every figure has an info mark that explains it.

- Conversations, with the change since the previous period.
- Messages, with messages per conversation.
- Credits used, with credits per message.
- Revenue, with the number of access purchases.
- Conversations over time, as a graph.

**What to change**

Few conversations means the bot isn't being found. Share the link again or add it to your website.

Many messages per conversation can mean the bot needs fuller instructions or knowledge files. Credits per message tells you if your model choice is paying its way.

Conversations without purchases on a paid bot suggest the description or starters need work.

**A peek at Expert Botter**

Expert Botter adds Busiest hours, which shows when visitors chat. It also adds Top conversation starters, which counts your starters. Between them, they tell you when to share and what to change. See the [Pricing](https://{{domain}}/pricing/) page for the plan.

**Task for today**

Check Conversations first, set the Date range to Last month and note the change. That's your baseline for comparing later.

See you soon,

Your Botter Support Team

P.S. Next up: how many bots do you really need? A map for one business.

**Notes**
- Facts: basic analytics figures from guide 8.1 (Novice Botter and above); Bot and Date range controls; info mark on every figure. Expert Botter adds Category benchmarks and Busiest hours and Top conversation starters (8.1).
- The Date range option Last month is on the Dashboard revenue control (guide 2.6). Confirmed by the app agent (answer 5): Bot analytics has Bot and Date range with Last week, Last month, Year to date, Last 5 years and Custom range.
- Subject echoes the UN08 P.S.
- Automation: UP-Nov step 9.

---

## UN10 - Using your bots well (day 17, Novice Botter)

**Subject:** [Botters Lab] A map of bots for one business

**Body:**

Hi {{contact.first_name}},

Last time you read your numbers and chose one to check first. Today is about how many bots you really need.

One bot per job works better than one bot that does everything. Each one has short instructions and its own mode and paywall.

**An example for a garden centre**

1. Plant Finder. Public and free. Answers plant questions from your catalogue as a knowledge file.
2. Seasonal Planner. Public with a paywall. A paid guide to what to plant each month.
3. Workshop Helper. Public. Uses an integration to check booking times.
4. Swipe Writer. Personal. Only you use it to draft posts.
5. Test copy. Personal. A duplicate where you try new instructions before changing the live bot.

A bot can stay Personal for ever. Paused bots still count towards your limit and Active bots on the [Dashboard](https://lab.{{domain}}/) shows where you stand. Duplicate is hidden once you reach the limit.

**A peek at Pro Botter**

Pro Botter lets you sell a bot itself on the Bot Market. You choose a Price (USD) and a licence. The buyer then receives the bot. See the [Pricing](https://{{domain}}/pricing/) page for the plan.

**Task for today**

Write down your own map in the same shape. One line per bot with a job, a mode and whether it has a paywall. Then build the next bot on it.

That's the end of this series. If a question comes up, look in the [help articles](https://{{domain}}/docs/) or ask the support team.

Happy building,

Your Botter Support Team

**Notes**
- Facts: Personal can stay Personal for ever (guide 4.1). Paused bots count towards the limit (2.6). Duplicate is hidden at the limit (3.10). Selling on the Bot Market is Pro Botter and above with a Price (USD) and licence (6.5).
- No bot limit figure printed.
- Final email: plain sign-off. No Next up loop. On send remove Upgrade Active and apply Upgrade Done.
- Story version dropped.
- Automation: UP-Nov step 10 (last).
