# Welcome spine S16 to S30 and extra emails X1 to X5

Fifteen welcome spine emails (days 16 to 30) and the five useful emails outside the spine. Written to `08-writing-brief.md` in the format of `10-sample-emails-v2.md`. Nothing is set up in FluentCRM.

Branch emails (S17 and S20 and S24) are written for the tier that carries on the spine. The other tier's loop is in that email's Notes.

## Loop map

| Email | Topic | P.S. loop text |
|---|---|---|
| S15 (incoming, not in this file) | Affiliate programme and link | Next up: your bot can talk to people. Tomorrow it talks to your other tools. |
| S16 | Integrations | Next up: is it working? Tomorrow you read the numbers. |
| S17 | Basic analytics | Next up: there's more behind that panel. Tomorrow, the busy hours. (Expert and up. Novice alternative in Notes) |
| S18 | Busy hours and benchmarks | Next up: numbers tell you when. Tomorrow your bot tells you what it didn't know. |
| S19 | Conversation insights | Next up: who comes through the door? Tomorrow, the two settings that decide that. |
| S20 | Daily limit and sign-up requirement | Next up: your bot works. Tomorrow it dresses for the occasion. (Pro and up. Expert alternative in Notes) |
| S21 | Bot styles | Next up: tomorrow your bot goes on sale to other Botters. |
| S22 | Bot Market listing | Next up: a listing brings strangers. Tomorrow, the ones who agree to share their details can reach your own CRM. |
| S23 | CRM connector | Next up: contacts need labels. Tomorrow your bot tags them by interest. |
| S24 | Interest tags and customer download | Next up: you've been guessing which version of your bot works best. Tomorrow you stop. (Master. Pro alternative in Notes) |
| S25 | A/B tests | Next up: a test needs a result. Tomorrow you read it. |
| S26 | Advanced analytics | Next up: reading a result is half the job. Tomorrow you crown a winner. |
| S27 | Choose a winner | Next up: tomorrow, how to be a seller people trust. |
| S28 | Seller profile and badges | Next up: your Lab is busy. Tomorrow, a short tidy-up. |
| S29 | Settings and export | Next up: one day to go. Tomorrow you're a proper Botter. |
| S30 | Wrap-up and help | No loop. Plain sign-off (Master). Upgrade-series versions in Notes. |
| X1 to X5 | Standalone | No loop. Plain sign-off and a P.S. that is not a loop. |

---

## S16 - Integrations (day 16, Novice and above)

**Subject:** [Botter's Lab] Your bot talks to your other tools

**Body:**

Hi {{contact.first_name}},

Yesterday you joined the affiliate programme from Affiliates and copied Your link. Your bot can talk to people so today it talks to your other tools.

Integrations let your bot call one of your own services in the middle of a chat. That could be a booking system, an order lookup or a price list.

**Adding an integration**

Say a visitor asks when you're free. The bot checks your booking system and answers with real times instead of a guess.

Save the bot first because integrations only work on a saved bot. Then open Integrations in the builder and select Add an integration.

1. Fill in Name, Method, What it does and Endpoint address. The address must start with https.
2. Press Add a parameter for each detail the bot should send such as a date. Each one has a Name, Description, Type, Sent in, Default value and Required field. Choose the Type and Sent in values your service expects.
3. Choose your Authentication: None, Bearer token, API key in a header or Basic (user name and password).
4. Check Switched on and press Save integration.

Here's an example of how to fill in the first fields:

> Name: Check free times
> What it does: Looks up free appointment times for the date the visitor asks about. Use it whenever someone asks when we're available.
> Endpoint address: https://[YOUR SERVICE ADDRESS]
> Parameter name: date

Your credentials are stored encrypted and never shown again. An integration takes effect as soon as you save it.

If it sends data to anyone other than the model provider that needs declaring the next time you confirm your bot's declarations.

**Task for today**

Add one integration to a bot that needs your service. A Booking Helper that checks free times is a good place to start. Then ask it a question in Preview, which uses your credits.

Happy connecting,

Your Botter Team

P.S. Next up: is it working? Tomorrow you read the numbers.

**Notes**
- Facts: Integrations are Novice Botter and above. Save the bot first. Field and button labels, the four Authentication options and credential storage from chapter 9.1. Declaration 7 (data sent beyond the model provider) and re-confirmation after an integration change from 4.2. Preview uses the owner's credits (3.9).
- The Method options are not listed in the digest so none are named.
- Automation: Welcome spine B step 4 (S13 to S17). Tier tags tested: Novice and Expert and Pro and Master. Welcome Active must be present.
- Recap echoes the S15 loop.

---

## S17 - Basic analytics (day 17, Novice and above)

**Subject:** [Botter's Lab] Is it working? Read the numbers

**Body:**

Hi {{contact.first_name}},

Yesterday you added an integration so your bot can reach your own service. Is it working? Today you read the numbers.

Bot analytics shows how each bot is doing. From Novice Botter you see the basic figures.

**What the figures show**

Select Analytics in the menu. You can also open a bot from the Dashboard or press Full analytics in the bot builder. Choose the Bot and a Date range at the top of the page.

You'll find these figures:

- Conversations, with the change against the previous period
- Messages, with messages per conversation
- Credits used, with credits per message
- Revenue, with the number of access purchases
- Conversations over time, as a graph

Every figure has an info mark. Hover over it or tap it and it explains what the figure counts. That's the quickest way to learn what each number means.

Deeper panels start at Expert Botter. Today is about the basics.

**Task for today**

Open Analytics and choose your Paid Answer Desk or any bot that has had visitors. Set the Date range to cover the days since you shared it then hover over the info marks beside Conversations and Credits used.

See you tomorrow,

Your Botter Team

P.S. Next up: there's more behind that panel. Tomorrow, the busy hours.

**Notes**
- Facts: Basic figures are Novice Botter and above. Labels and info marks from chapter 8.1. Analytics opens from the menu or a bot on the Dashboard or Full analytics in the builder.
- This P.S. is the Expert and above version. Novice alternative (matches the v3 branch map where Novice receives S19 next): "P.S. Next up: what did your bot not know? Tomorrow it tells you." Note `07` says a Novice upgrade teaser here but v3 puts S19 on day 18 for Novice. The v3 map is followed. Needs a decision.
- Mentions Expert Botter in one sentence only. No pressure and no price.
- Automation: Welcome spine B step 5 (last step). Applies Welcome B Done. Novice then moves to the Novice track.

---

## S18 - Busy hours and benchmarks (day 18, Expert and above)

**Subject:** [Botter's Lab] Find the busy hours

**Body:**

Hi {{contact.first_name}},

Yesterday you read the basic figures on Bot analytics. There's more behind that panel and today you open it.

From Expert Botter you see three extra panels that show when people use your bot and how it compares.

**The three panels**

Open Analytics and choose the Bot and Date range as before. Then find these panels:

- Busiest hours shows when visitors chat with your bot. It tells you when to share your link.
- Top conversation starters counts which of your starters visitors choose. It tells you which ones are working.
- Category benchmarks sets the category average for messages per buyer, price and conversion beside This bot. It stays hidden until enough bots in your category feed it.

Every figure has an info mark if you want to check what it counts.

**Task for today**

Open Analytics for your Paid Answer Desk and find the three panels. If one conversation starter is never chosen reword it under Conversation starters in the builder and press Save.

Enjoy the view,

Your Botter Team

P.S. Next up: numbers tell you when. Tomorrow your bot tells you what it didn't know.

**Notes**
- Facts: Category benchmarks and Busiest hours and Top conversation starters are Expert Botter and above (8.1). Benchmarks hidden until enough bots feed them. Top conversation starters counts the starters set in the builder (3.6).
- [CONFIRM: where each panel sits on the Bot analytics page. The v3 plan says "where each panel sits" but the digest gives no layout, so the email names the panels and not their position.]
- Automation: Welcome spine C step 1 (S18 to S20). Tier tags tested: Expert and Pro and Master.

---

## S19 - Conversation insights (day 19, Expert and above)

**Subject:** [Botter's Lab] What your bot didn't know

**Body:**

Hi {{contact.first_name}},

Yesterday you found Busiest hours and Top conversation starters on Bot analytics. Numbers tell you when so today your bot tells you what it didn't know.

Conversation insights reports on the questions your bot couldn't answer. It's the quickest way to find gaps in your knowledge files.

**Switching it on**

Conversation insights is off until you switch it on. No plan includes it so each report uses your credits. Nothing is charged for a run that is skipped or fails.

1. Open your bot in the builder and go to Analytics under Advanced.
2. Switch on Conversation insights and press Save.
3. Open Bot analytics when a report is ready.

The panel shows Unanswered questions, Common topics and Suggested additions. Each suggestion comes with the choices Add to knowledge and Add to instructions so you can teach the bot the answer.

If you'd like an email when a report is ready switch on Insights under Email notifications in Settings.

**Task for today**

Switch on Conversation insights for your Quick Answer Bot and press Save. Come back to the panel once the bot has had some conversations.

Speak soon,

Your Botter Team

P.S. Next up: who comes through the door? Tomorrow, the two settings that decide that.

**Notes**
- Facts: Off until switched on. Uses the owner's credits and no plan includes it (8.2). Nothing is charged for a skipped or failed run. Not offered on a bot whose instructions the owner cannot see (left out of the body to keep it short). Insights email switch is under Email notifications in Settings (12.1).
- The recap is the spine version (Expert and above). S19 also sits on the Apprentice track (day 15 after X2) and the Novice track (day 18 after S17). Those tracks need a Check Condition on the recap and the P.S. Suggested Novice recap: "Yesterday you read the basic figures on Bot analytics. Today your bot tells you what it didn't know." The email body itself is safe for every tier because all plans can use Conversation insights.
- Automation: Welcome spine C step 2. Also used in T-App and T-Nov.

---

## S20 - Daily limit and sign-up requirement (day 20, Expert and above)

**Subject:** [Botter's Lab] Two settings for the door

**Body:**

Hi {{contact.first_name}},

Yesterday you switched on Conversation insights. Now control who comes through the door. Today, the two settings that decide that.

Both sit in the bot builder. One decides whether visitors must sign up and the other caps how many credits a bot can spend in a day.

**Require visitors to sign up**

When it's on visitors sign up or sign in before they chat. You know who is chatting and a paid bot always needs an account anyway.

When it's off anyone can chat at once. The setting is on for a new bot and while it's on an embedded bot shows a Chat with button and not the chat itself.

**Daily credit limit**

You pay for every visitor message so this protects your credits. Leave it empty to use the platform default or enter a number of whole credits.

When a bot reaches the limit free visitors are told it has reached its limit for the day. Paid buyers and you carry on. The limit resets at midnight UTC and we email you once that day.

You'll find both under Sharing and embed in Advanced. Here's how to set them:

> Require visitors to sign up: on
> Daily credit limit: [A WHOLE NUMBER OF CREDITS YOU'RE HAPPY TO SPEND ON THIS BOT IN ONE DAY]

**Task for today**

Open a bot that collects leads such as a Lead Catcher. Set both fields then press Save.

Until tomorrow,

Your Botter Team

P.S. Next up: your bot works. Tomorrow it dresses for the occasion.

**Notes**
- Facts: Require visitors to sign up and Daily credit limit sit under Sharing and embed in Advanced and are saved with Save (3.3 and 4.4). Embed shows a Chat with button when sign-up is on (4.5). Limit resets at midnight UTC with one email to the owner. Visitor limits per minute and per day are left out.
- Pro and above version of the P.S. Expert alternative per the v3 branch map (Expert receives X1 next): "P.S. Next up: have a bot built somewhere else? Tomorrow it moves into your Lab." `07` says an upgrade teaser here. The v3 map is followed. Needs a decision.
- No mention of the CRM or the A/B tests in the body so the email suits Expert as well.
- S20 also sits on the Apprentice track (day 18 after U1) and the Novice track (day 19 after S19). Recap and P.S. need Check Condition variants there.
- Automation: Welcome spine C step 3 (last step). Applies Welcome C Done. Expert then moves to the Expert track.

---

## S21 - Bot styles (day 21, Pro and above)

**Subject:** [Botter's Lab] Dress your bot for the occasion

**Body:**

Hi {{contact.first_name}},

Yesterday you set the Daily credit limit and Require visitors to sign up. Your bot works so today it dresses for the occasion.

Bot styles are included from Pro Botter. A style changes how a bot looks to visitors and not how Botter's Lab looks to you.

**What a style changes**

A style applies to the chat page, the paywall, the embed and the sign-up pages for a bot. Select Bot styles in the menu then New style. A Live preview shows your changes as you go and a warning appears if the contrast is poor.

A style has four groups of settings:

- Branding: your logo (jpg or png or webp) and a Display name
- Colours: Background, Bot message bubble, Customer message bubble, Text and Accent
- Text and corners: Font, Chat text size (Small or Medium or Large) and Corners (Square or Soft or Round)
- What shows: Show the header, Show the bot's image and Show the powered-by tag

The powered-by tag carries your affiliate link. It earns only once you've joined the affiliate programme.

You can apply a style with Style in the builder or Apply to another bot. Edit changes every bot that uses the style and Duplicate as a new style makes a copy.

**Task for today**

Create one style with your logo and your brand colour as the Accent. Apply it to your Quick Answer Bot and look at the Live preview before you save.

Looking sharp,

Your Botter Team

P.S. Next up: tomorrow your bot goes on sale to other Botters.

**Notes**
- Facts: Pro Botter and above. Groups and field labels from 4.6 (the digest lists the Chat text size and Corners options). Powered-by tag earns only after joining the affiliate programme.
- Style options use "or" inside parentheses in place of commas. No comma sits before "and" or "or".
- Automation: Welcome spine D step 1 (S21 to S24). Tier tags tested: Pro and Master.

---

## S22 - Bot Market listing (day 22, Pro and above)

**Subject:** [Botter's Lab] Put your bot on sale

**Body:**

Hi {{contact.first_name}},

Yesterday you gave a bot its own style. Today it goes on sale to other Botters in the Bot Market.

Selling starts at Pro Botter. A buyer receives the bot itself and runs it on their own credits.

**Before you list**

The bot needs to be Public with its declarations confirmed and a category chosen. You also need your Licence terms saved under Settings and your email confirmed. Select Copy our template there if you'd like a starting point. Botterverse doesn't give legal advice about them.

**Listing a bot**

1. Select My listings then List a bot for sale and List it next to your bot.
2. Under Listing details write a Description and add Tags. Suggest a description and tags writes a draft for you and uses no credits.
3. Under Sale type and licence choose Transfer or Multi-sell. Transfer moves ownership and sells once. Multi-sell gives each buyer their own copy and you keep the original. Then choose one of Personal use or Resell rights or Master resell rights or PLR.
4. Under Price set the Price (USD) and the Affiliate share (%) other members earn for promoting your listing. A line on the form shows the platform fee.
5. Check the switches under On the listing then press Submit or Save as draft.

A listing moves from Draft to In review to Live and we email you when it goes live.

**Task for today**

Choose one finished bot and press Save as draft on a listing for it. Use Suggest a description and tags to save time.

Happy selling,

Your Botter Team

P.S. Next up: a listing brings strangers. Tomorrow, the ones who agree to share their details can reach your own CRM.

**Notes**
- Facts: Listing is Pro Botter and above. Requirements, labels, sale types, licences and statuses from 6.2 and 6.5 and 6.7. Suggest a description and tags uses no credits. The Affiliate share (%) can be set by a Pro seller. The Founder badge and fee percentages are not mentioned.
- Step 3 uses "or" without commas for the licence choices.
- The 07 loop reads "A listing brings strangers. Tomorrow they become contacts in your own CRM." I added the consent condition per the brief. Also a Bot Market buyer receives a copy of the bot and doesn't become a contact of the seller, so the loop logic is loose. Needs a decision: keep as written or reword the loop to be about visitors to your public bots.
- Automation: Welcome spine D step 2.

---

## S23 - CRM connector (day 23, Pro and above)

**Subject:** [Botter's Lab] Send your leads home

**Body:**

Hi {{contact.first_name}},

Yesterday you listed a bot for sale. A listing brings strangers and today the ones who agree to share their details can reach your own CRM.

The CRM connector is included from Pro Botter. It sends a customer's details and actions to your own CRM by webhook once the customer agrees.

**How consent works**

Nothing is sent unless the customer agrees. While the connection is on an unticked box asks the customer to share their name and email address with you. It's never required.

**Connecting your CRM**

1. Open Settings and select CRM.
2. Enter your Webhook address (it must start with https) and Your privacy notice (an address is required).
3. Press Save. Your signing secret then appears once so copy it somewhere safe. Your developer can use it to check each event is genuine.
4. Press Send test event and check it arrives in your CRM.
5. Press Switch on.

Each event carries the event name, its tag, the customer's name and email address, the bot's name and slug, the A/B variant, the time and an event id.

You choose the tag for each event under Lifecycle tags such as a visitor signing up to a bot. A blank tag means that event isn't sent. Writing {bot} in a tag fills in the bot's slug.

Once connected you're responsible for the data under data protection law and you need to honour every unsubscribe. If the connection keeps failing it switches itself off and we email you.

**Task for today**

Enter your Webhook address and Your privacy notice then press Save. Press Send test event before you Switch on.

Good luck,

Your Botter Team

P.S. Next up: contacts need labels. Tomorrow your bot tags them by interest.

**Notes**
- Facts: Pro Botter and above. Settings then CRM. Field and button labels, one-time signing secret, event contents, blank tag rule, responsibility for data and automatic switch-off from 9.2 and 9.3 and 9.5. "Customers who agree to share their details" wording per v3 section 3.
- Left out on purpose: header names and signing algorithm (for the member's developer).
- [CONFIRM: where Lifecycle tags are set in the app. The digest says members set them but does not give the page. The email avoids naming a page.]
- Automation: Welcome spine D step 3.

---

## S24 - Interest tags and customer download (day 24, Pro and above)

**Subject:** [Botter's Lab] Tag them by interest

**Body:**

Hi {{contact.first_name}},

Yesterday you connected your CRM. Contacts need labels so today your bot tags them by interest.

Interest tags are keyword rules. When a customer's message contains your keyword the bot sends the tag to your CRM.

**How the rules work**

A rule matches whole words and ignores capitals. It reads customer messages only and never the bot's replies. Each tag is sent once per customer. Tags are sent only for customers who agreed to share their details.

Open Settings and select CRM then Interest tags. Press Add a rule then fill in Tag and Keywords or phrases. Choose Cover all my bots or pick the bots under Bots this rule covers. Then press Save.

Because matching uses whole words add each form you need such as book and booking. Here are three example rules:

> Tag: interest-pricing
> Keywords or phrases: price, cost, how much
>
> Tag: interest-booking
> Keywords or phrases: book, booking, appointment
>
> Tag: interest-support
> Keywords or phrases: help, problem, not working

**Your customers**

Under Settings then CRM you'll also find Your customers. Download customers (CSV) lists the customers who agreed to share their details and haven't stopped. Each row holds the name, email address, bot, where they agreed and the date.

Customers can stop sharing at any time under Shared with bot owners in their own Settings.

**Task for today**

Add the first example rule above for your Lead Catcher and press Save. Download customers (CSV) once some customers have agreed.

Nearly there,

Your Botter Team

P.S. Next up: you've been guessing which version of your bot works best. Tomorrow you stop.

**Notes**
- Facts: Interest tags are Pro Botter and above. Rule mechanics and labels from 9.4. Download customers (CSV) wording from 9.5. The consent condition appears three times. "All your customers" is never used.
- Rule limits per plan are not given in the guide so none are stated.
- This P.S. is the Master version. Pro alternative: `07` says "Tomorrow, how sellers earn trust." but the v3 branch map gives Pro X1 on day 25 and S28 only on day 28. To match v3 use: "P.S. Next up: have a bot built somewhere else? Tomorrow it moves into your Lab." Needs a decision.
- The Master version points at A/B tests without naming the plan.
- Automation: Welcome spine D step 4 (last step). Applies Welcome D Done. Pro then moves to the Pro track and Master to the Master track.

---

## S25 - A/B tests (day 25, Master)

**Subject:** [Botter's Lab] Stop guessing - split-test your bot

**Body:**

Hi {{contact.first_name}},

Yesterday you set up Interest tags and found Download customers (CSV). Until now you've been guessing which version of your bot works best. Today you stop.

A/B tests are included with Master Botter. They run two or more versions of one bot side by side and show you which one does better.

**How a test works**

The bot as it stands is your control. Each variant changes the Instructions or the Starters or both. Price is never tested.

While a test is Running the same visitor always sees the same version.

1. Select A/B tests in the menu and choose the Bot.
2. Set the Control's share (%).
3. Give the variant a Variant name and a Share (%) then change its Instructions or Starters. Use Add a variant for more. The shares must total 100%.
4. Press Save. The test is a Draft until you press Start the test.

Change one thing only so you know what made the difference. Here's a first test:

> Control's share (%): 50
> Variant name: Warmer welcome
> Share (%): 50
> Instructions: [COPY YOUR CURRENT INSTRUCTIONS AND ADD ONE LINE SUCH AS: Greet every visitor by saying you're glad they stopped by.]

A test stops by itself if the bot is sold by Transfer or deleted or your plan drops below Master Botter.

**Task for today**

Create a test for your Paid Answer Desk using the block above. Then press Start the test.

Let the test run,

Your Botter Team

P.S. Next up: a test needs a result. Tomorrow you read it.

**Notes**
- Facts: Master Botter only. All labels and behaviour from 8.3. Price is never tested. Shares total 100%. Visitors always see the same version. Auto-stop conditions.
- The example variant is an illustration and not a result.
- Automation: Master track T-Mas step 1. Tier tag tested: Master Botter.

---

## S26 - Advanced analytics (day 26, Master)

**Subject:** [Botter's Lab] Read the result

**Body:**

Hi {{contact.first_name}},

Yesterday you started your first A/B test. A test needs a result so today you read it.

Master Botter adds advanced analytics. The Conversion panel sets views against purchases so you can see how many people who looked went on to buy.

**Two places to look**

Open Analytics and choose the Bot and the Date range. The Conversion panel shows Paywall views, Listing views, Purchases and Conversion. Paywall views count visits to your paywall page and Listing views count visits to your Bot Market listing.

Your A/B test has its own Results. They show Conversations, Messages per conversation, Returning customers, Paywall conversion and Revenue per conversation for the control and each variant.

Every figure has an info mark if you're unsure what it counts.

**Reading it well**

Set the Date range to cover only the days the test has run. Compare the control and the variant on the same figure and not on all of them at once.

Results fill in as visitors arrive so there's no need to rush. A small number of visitors can mislead you.

**Task for today**

Open Analytics for your Paid Answer Desk and find the Conversion panel. Then open your running test under A/B tests and read its Results.

Read carefully,

Your Botter Team

P.S. Next up: reading a result is half the job. Tomorrow you crown a winner.

**Notes**
- Facts: Advanced analytics (Conversion panel) is Master Botter only. Panel and Results labels from 8.1 and 8.3.
- The sentence on Paywall views and Listing views is inferred from the panel names. [CONFIRM: that Paywall views counts paywall page visits and Listing views counts Bot Market listing visits.]
- No sample figures are shown.
- Automation: T-Mas step 2.

---

## S27 - Choose a winner (day 27, Master)

**Subject:** [Botter's Lab] Crown a winner

**Body:**

Hi {{contact.first_name}},

Yesterday you read the Conversion panel and your test Results. Reading a result is half the job so today you crown a winner.

When a test has run long enough you finish it. You have four choices.

**Finishing a test**

Open the test under A/B tests. These are the choices:

- Choose as winner picks the variant you want to go with
- Keep the control keeps the bot as it was
- Stop the test ends it without a decision
- Start a new test begins the next idea

Look at Revenue per conversation and Paywall conversion first if your bot has a paywall. Messages per conversation and Returning customers tell you how people felt about the chat.

Then change one more thing and run the next test. Small steps are easier to read than big ones.

**Task for today**

Open your test and read the Results one last time. Then press Choose as winner or Keep the control. When you're ready press Start a new test with a single change.

Well tested,

Your Botter Team

P.S. Next up: tomorrow, how to be a seller people trust.

**Notes**
- Facts: Master Botter only. Finishing options from 8.3.
- [CONFIRM: what Choose as winner changes on the bot. The digest names the choice but not the result, so the email says only "picks the variant you want to go with".]
- Automation: T-Mas step 3.

---

## S28 - Seller profile and badges (day 28, Pro and above)

**Subject:** [Botter's Lab] How to be a seller people trust

**Body:**

Hi {{contact.first_name}},

Yesterday you finished your test and chose what comes next. Today, how to be a seller people trust.

Buyers on the Bot Market see three things about you before they pay: your profile, your replies to reviews and your licence terms.

**Your profile and badges**

Select My profile in the menu. Each listing shows About the seller with your badges, Average rating, Verified sales and Member since.

Badges are Verified Seller (you've been paid out or set up payouts), 10 Sales (ten verified sales) and Top Rated. A badge shows only while its condition still holds.

**Replying to reviews**

Reviews on your listings are marked Verified purchase. Open Sales then select Reply on a review and press Post the reply. You can use Edit the reply later.

Here's a reply you can adapt:

> Thank you for your review. [ONE SENTENCE ABOUT WHAT THEY MENTIONED]. I'm glad you're using the bot and I'll keep improving it.

**Licence terms**

Open Settings then Licence terms to read or change what buyers agree to. If you change them Notify my buyers emails each current licence holder a link to the terms page. Saving on its own sends no email.

**Task for today**

Open My profile and check which badges show. Then reply to a review under Sales or if you have none yet read your Licence terms again.

Keep building trust,

Your Botter Team

P.S. Next up: your Lab is busy. Tomorrow, a short tidy-up.

**Notes**
- Facts: My profile and badges and replying from Sales from 6.8. Licence terms and Notify my buyers from 6.7. Selling is Pro Botter and above.
- The Founder badge is deliberately not mentioned (brief section 3). Verified revenue is left out.
- Payouts set-up is referred to without naming the payment provider (open question 19 in the digest).
- The recap is the Master version. Pro members arrive from U10 on day 27 and need a Check Condition recap such as: "Yesterday you looked at views against purchases. Today, how to be a seller people trust."
- Automation: T-Mas step 4. Also T-Pro (after U10 and before U9).

---

## S29 - Settings and export (day 29, all tiers)

**Subject:** [Botter's Lab] A short tidy-up

**Body:**

Hi {{contact.first_name}},

Yesterday you looked at your seller profile and your licence terms. Your Lab is busy so today is a short tidy-up.

Three small jobs in Settings keep your account in good order.

**Timezone**

Dates in Botter's Lab show in your own timezone. Open Settings then Account and choose your Timezone. Then press Save timezone.

**Email notifications**

Under Email notifications you'll find two optional switches. Insights emails you when a Conversation insights report is ready. Sales emails you about each sale, review and commission.

Press Save after you change them. Receipts, security and plan-change emails are always sent.

**Data export**

Data export lets you download a copy of your own information. The zip holds your bots with their instructions and knowledge files, your conversations, your sales, purchases and commissions, your credit and earnings history and files you uploaded such as bot images. Integration passwords and keys are never included.

Press Request export. It shows Being prepared then we email you. When it says Ready press Download. The link has an Available until date. If it shows Failed press Request export again.

**Task for today**

Set your Timezone and choose your Email notifications. Then press Request export so you have a copy in hand.

Tidy as you go,

Your Botter Team

P.S. Next up: one day to go. Tomorrow you're a proper Botter.

**Notes**
- Facts: Settings sections, Timezone with Save timezone, the two Email notifications switches and always-sent emails from 12.1. Data export statuses and contents from 12.4. The email says "your own information" and does not say every bot comes with you (bought bots may be left out while a refund window is open).
- [CONFIRM: that Data export ships at launch (digest conflict 5).]
- The email suits every tier. The Sales switch is described neutrally. Style logos are not named in the export list because they only exist from Pro.
- The recap is the Master and Pro version. S29 also sits on the Apprentice and Novice and Expert tracks after other emails so those need a Check Condition recap.
- Automation: T-Mas step 5. Also used in the Apprentice and Novice and Expert tracks.

---

## S30 - Wrap-up and help (day 30, all tiers)

**Subject:** [Botterverse] You're a proper Botter now

**Body:**

Hi {{contact.first_name}},

Yesterday was the short tidy-up. One day to go and today you're a proper Botter.

You've built a bot, tested it, shared it and learned your way around the Lab. This last email is about where to find help and a few things worth another look.

**Where to find help**

Press Help beside any page title in Botter's Lab. It opens the article for that page in a new tab.

For anything else select Support in the menu. It opens the help desk in a new tab and it has its own sign-in, separate from Botter's Lab. Select Feedback to send a Bug report or a Feature suggestion.

**Changing plan**

Open Billing and credits then Your plan and press Change plan whenever you want to. The Pricing page at https://{{domain}}/pricing/ lists what each plan adds.

**Things worth another look**

- Import a bot lets you paste in a bot you built elsewhere. It uses no credits.
- Duplicate copies a working bot so you can try a new idea safely.
- Browse in the Bot Market has a 4 stars and up filter.
- Conversation insights shows what your bot couldn't answer. It uses credits so switch it on when you need it.

{{#pro}}
**One more feature**

Master Botter adds A/B tests. You write a second version of your bot's Instructions or Starters and each visitor sees one or the other. The results show which version holds a conversation better. You can see it on the Pricing page and start it from Change plan under Billing and credits.
{{/pro}}

**Task for today**

Press Help beside the title of the page you use most. It's worth knowing what's there.

Thank you for building with us,

Your Botter Team

P.S. That's the last of the daily emails. Thank you for spending the month with us.

**Notes**
- Facts: Help beside page titles (1.6 and 13.3). Support opens the help desk in a new tab with its own sign-in (13.1). Feedback Type options (13.2). Change plan path (10.6). The "Things worth another look" list is in the v3 plan row for S30 so it is included. v3 section 10 question 3 (whether every track's S30 carries it) is still open. List items are limited to features every tier has.
- The {{#pro}} block is for Pro members only and mentions the one feature Master adds (v3 section 5). Placeholder merge block like the Founder block in the sample. It carries no price and no pressure.
- This P.S. is the Master version (plain sign-off). Upgrade-series versions to be matched to `02-upgrade-sequences-plan.md` (not read for this task):
  - Apprentice: "P.S. Next up: a short run of emails on what Novice Botter adds."
  - Novice: "P.S. Next up: a short run of emails on what Expert Botter adds."
  - Expert: "P.S. Next up: a short run of emails on what Pro Botter adds."
  - Pro: "P.S. Next up: a short run of emails on what Master Botter adds."
  [CONFIRM: wording and names of the upgrade sequences.]
- Priority support is not mentioned in the shared body (starts at Pro).
- Automation: T-Mas step 6 and the last step of every track. Removes Welcome Active and applies Welcome Done.

---

## X1 - Bring your old GPT home (standalone, all tiers)

**Subject:** [Botter's Lab] Bring your old GPT home

**Body:**

Hi {{contact.first_name}},

If you already have a bot somewhere else you don't need to start again. Import a bot brings it into Botter's Lab by pasting. It doesn't connect to any other account and it uses no credits.

**What you can bring**

A custom GPT is a good example. You paste in its instructions and upload its files. Nothing is saved until the last step.

1. Select Import a bot in the menu.
2. On Instructions paste your instructions and press Continue.
3. On Files press Browse and choose the files the bot should use.
4. On Integrations press Add integration if the bot calls another service. This step is optional. It isn't part of Apprentice Botter and the step says so.
5. On Review check the suggested Name, Description, Category and Starters. Not carried across lists anything that couldn't move.
6. Press Create bot.

The bot opens in the builder as Personal so only you can use it. It counts towards your plan's bot limit like any other bot.

**Task for today**

Import one bot. Read Not carried across before you do anything else, then try the bot in Preview. Preview uses your credits.

Welcome home,

Your Botter Team

P.S. Not carried across is worth a read before you change anything on the other side.

**Notes**
- Facts: Import a bot is a paste-only flow with no credits and nothing saved until Create bot (3.12). Integrations are not part of Apprentice Botter. The imported bot is Personal and counts towards the plan limit (3.1).
- The email makes no assumption about earlier emails because X1 can arrive on day 3 (the Migrated From GPT variant) or on days 13 or 20 or 21 or 25 depending on the track. There is no recap on purpose.
- Automation: T-App step 1 and T-Nov step 3 and T-Exp step 1 and T-Pro step 1. Also sent on day 3 to contacts with the tag Migrated From GPT.

---

## X2 - Clone before you tinker (standalone, all tiers)

**Subject:** [Botter's Lab] Clone before you tinker

**Body:**

Hi {{contact.first_name}},

Before you change a bot that works make a copy first. Duplicate does it in one press and the original stays safe.

**Making a copy**

A copy keeps the instructions, the knowledge files, the starters, the model and any integrations with their credentials. It starts as Personal with its paywall off.

1. Open Bot list and select the bot.
2. Scroll to the foot of the builder and press Duplicate.
3. Open the copy. Its name ends in Copy so rename it if you like.
4. Change the tone in Instructions and press Save. Then try it in Preview, which uses your credits.

Duplicate takes effect at once without Save. A copy counts towards your plan's bot limit and Duplicate is hidden when you're at the limit.

**Pausing and finding bots**

Pause stops a bot answering and Unpause starts it again. A paused bot still counts towards your limit.

Bot list has Search your bots and two filters. Use the status filter for Any status or Paused for any reason and the mode filter for Any mode or Personal or Public.

**Task for today**

Duplicate a bot and give the copy a different tone such as warmer or more formal. Keep the one you like better.

Copy that,

Your Botter Team

P.S. The mode filter set to Personal shows your copies in one go.

**Notes**
- Facts: Duplicate, Pause, Unpause and Delete sit at the foot of the builder (3.2). Duplicate adds Copy to the name and the copy starts Personal with its paywall off. Counts towards the limit and is hidden at the limit (3.10). A bought bot can't be duplicated until its refund window has passed or it has been put on sale (left out of the body to keep it short). Bot list filters from 3.11.
- No recap on purpose (standalone).
- Automation: T-App step 2 and T-Nov step 4 and T-Exp step 2 and T-Pro step 2.

---

## X3 - Wander the Bot Market (standalone, all tiers)

**Subject:** [Botter's Lab] Wander the Bot Market

**Body:**

Hi {{contact.first_name}},

The Bot Market is where fellow Botters sell bots to each other. Every plan can buy and the Bot Market is for members only.

A buyer receives the bot itself and runs it on their own credits.

**Finding a bot**

Select Browse in the menu. Use Search Bot Market or the filters Any category, Any model, Any sale type, Any owner, Any release date, Includes integrations and 4 stars and up. You can sort by Relevance, Top rated, Price high to low or Price low to high.

Open a listing to read the Reviews (each marked Verified purchase) and About the seller. You'll also find strips such as More from this seller and You might also like.

**Before you buy**

Read The licence you are buying. The sale type is either Transfer or Multi-sell and the licence is one of Personal use, Resell rights, Master resell rights or PLR. A bot on Personal use stays private to you.

1. Press Buy.
2. Tick the delivery and refund box and tick I accept the seller's licence terms shown above.
3. Press Pay.

The bot appears in your Bot list marked Purchased and we email you. A bought bot counts towards your plan's bot limit. Before you use it with customers enter any integration credentials and confirm its declarations.

**Task for today**

Select Browse and set the 4 stars and up filter. Open two listings and read the licence and the reviews. You don't have to buy.

Happy wandering,

Your Botter Team

P.S. After you've used a bot you can leave a review with Your rating and Your review. It helps the next buyer.

**Notes**
- Facts: Browse, filters, sort options, listing page and strips from 6.3. Buy steps and Purchased marker from 6.3. Bought-bot steps from 6.4. Personal use bots stay private (4.1).
- Refund and holdback figures are left out (this is not a refund email). No prices.
- No recap on purpose (standalone).
- Automation: T-App step 4 and T-Nov step 5 and T-Exp step 3.

---

## X4 - Where to find help (standalone, Apprentice)

**Subject:** [Botterverse] Where to find help

**Body:**

Hi {{contact.first_name}},

You have three places to find help and they each have their own sign-in. Here's which is which.

**Help on the page you're on**

Press Help beside any page title in Botter's Lab. It opens that page's article in a new tab. The Help centre can also be browsed by category or searched.

**Support**

Select Support in the menu to open the help desk in a new tab. It has its own sign-in, separate from Botter's Lab.

If you bought a plan you already have a website account. On the help desk sign-in page press Reset password beside Forgot your password? and choose a password. Otherwise press Create an account beside Not registered?.

When you write a ticket include the details below. It helps us answer faster.

> Username:
> Bot or listing:
> What I did:
> What I expected to happen:
> What happened instead:
> The exact wording of any message:

**Feedback**

Select Feedback to report a problem or share an idea. Choose Bug report or Feature suggestion as the Type.

**Task for today**

Press Help beside the title of the page you use most. Then open Support once and sign in so it's ready when you need it.

We're here,

Your Botter Support Team

P.S. Your billing login for invoices and receipts is separate from all of these. It starts from the link in your purchase receipt.

**Notes**
- Facts: Help links (1.6 and 13.3). Support and its own sign-in and the two account routes (13.1). Ticket advice (13.1). Feedback Type options (13.2). Billing login is separate (10.8).
- Support hours and response times are not stated (guide silent). Priority support is not mentioned (starts at Pro).
- Signature is Support Team (help email).
- Automation: T-App step 15 (Apprentice only).

---

## X5 - Promote someone else's bot (standalone, Novice and above)

**Subject:** [Botterverse] Promote someone else's bot

**Body:**

Hi {{contact.first_name}},

You don't need a bot of your own on sale to earn through the affiliate programme. You can promote another member's Bot Market listing and share in its sales.

If you haven't joined yet select Affiliates in the menu then Join the affiliate programme.

**Promoting a listing**

1. Select Browse and open a listing you'd recommend.
2. Press Promote.
3. Copy the link and share it with your audience.

The last click counts within the affiliate period so people who follow your link are credited to you. The seller sets the Affiliate share (%) and it is taken from what is left after the platform fee.

**Tracking and waiting**

Promoted listings shows your Sales and Commission earned. A commission waits until the refund period has passed before it can be withdrawn.

Don't buy through your own link. Referring yourself breaks the terms.

**Task for today**

Find a listing you'd recommend and copy its Promote link. If you built a Swipe Writer ask it for a short post to go with the link.

Share well,

Your Botter Team

P.S. Check the Affiliate share (%) on a listing before you choose which ones to promote.

**Notes**
- Facts: Joining and promoting (11.1 and 11.3). Last click counts. Affiliate share comes from what is left after the platform fee. Commission waits for the refund period (11.4 and 7.2). Self-referral breaks the terms (11.1). No income claims and no rates.
- [CONFIRM: where Promoted listings appears (the digest does not name the page; likely Affiliates). The email does not name a page for it.]
- [CONFIRM: that affiliate commission is already being paid (digest conflict 35).]
- The $50 minimum and the 14 and 21 day figures are not used.
- No recap on purpose (standalone).
- Automation: T-Nov step 10 and T-Exp step 8.
