# Sequences O01 to O04 - lead and cart emails

Three sequences for people who have not bought yet: O01 pre-launch nurture (5 emails), O03 public launch (8) and O04 cart abandonment (3). 16 emails in all. O02 was deleted on 2 November 2026. Relative waits only. Nothing is built in FluentCRM.

Shared notes:
- Sender is Botterverse. Prefix `[Botterverse]` on every email here.
- Nobody in these sequences is a member yet. No email refers to "your bots" or to the Lab as available to them. Each uses a **Next step** heading and not "Task for today".
- No Founders text appears in these emails. The Founders offer goes to Leads as two separate broadcasts (`broadcast-founders.md`) while the offer is open.
- No prices or limits or boost amounts appear. Every email that needs them links to `https://{{domain}}/pricing/`.

---

# O01 - Pre-launch nurture

**Trigger:** tag Lead applied. **Exit:** tag Customer applied.

## Loop map

| ID | Topic | P.S. loop |
|---|---|---|
| O01-01 | Custom GPTs are being switched off and what you can build instead | Next up: you've built a custom GPT already? Whether you have to start again. |
| O01-02 | Bring a GPT across with Import a bot | Next up: who pays when people chat with a bot and how to keep that predictable. |
| O01-03 | Who pays when people chat (boosts and limits) | Next up: what happens when someone pays to use a bot and what Botterverse keeps. |
| O01-04 | Selling access and the published fee | Next up: which plan suits what you want to do. |
| O01-05 | Choosing a plan | None. Plain sign-off. |

---

## O01-01 - Why Botterverse (day 0, Leads)

**Subject:** [Botterverse] Custom GPTs are being switched off - what you can build instead

**Body:**

Hi {{contact.first_name}},

You joined our list, so here is the short version of what Botterverse is. Custom GPTs are being switched off and many people who built one are looking for somewhere to take it.

**What you can do here**

You can build an AI bot from your own instructions and files on the model you choose. That's Claude, GPT, Gemini or Grok. You can share it by a link, put it on your own website or sell access to it.

**What's different from a custom GPT**

You decide which model each bot uses. You can ask visitors to sign up so you know who is chatting. Your bots, knowledge and conversations go with you because you can request an export whenever you like.

Every bot is checked before it can be made Public. Its Certified by Botterverse page shows who owns it and what the owner declared but doesn't vouch for the answers, so you still test your own bot.

**Next step**

Open the [FAQ](https://{{domain}}/faq/) and read the question that matches your biggest doubt. If yours isn't there, you can ask through [Support](https://{{domain}}/support/).

Talk soon,

Your Botter Support Team

P.S. Next up: you've built a custom GPT already? Whether you have to start again.

**Notes**
- Facts: models, share by link or embed, sign-up requirement, export from Settings, checked before Public, Certified page does not certify accuracy (guide 1.1 and 1.2 and 4.7 and 12.4). Home copy v3 sections 3 and 7.
- No date given for the GPT switch-off.
- Automation: O01 step 1. Sent on the Lead tag. Recap omitted (first email).

---

## O01-02 - Bring a GPT across (day 2, Leads)

**Subject:** [Botterverse] Do you have to start again?

**Body:**

Hi {{contact.first_name}},

In the last email, I asked whether you have to start again if you've built a custom GPT already. The short answer is no.

**Import a bot**

Botterverse has a page called [Import a bot](https://lab.{{domain}}/bots/import). You paste in your GPT's instructions and add its files. It doesn't connect to your OpenAI account, so you bring the content across yourself.

The steps are Instructions, Files, Integrations and Review. In Review, you see a suggested name, description, category and conversation starters. A list called Not carried across shows anything that couldn't move.

Nothing is saved until you press Create bot and it opens as a bot only you can see. Importing uses no boosts.

**A note on actions**

If your GPT used actions, you rebuild them as integrations. Integrations start on the Novice Botter plan and the [Pricing](https://{{domain}}/pricing/) page lists what each plan adds.

**Next step**

Save a copy of your GPT's instructions and files somewhere you can reach. That's all you need before you decide.

Speak soon,

Your Botter Support Team

P.S. Next up: who pays when people chat with a bot and how to keep that predictable.

**Notes**
- Facts: Import a bot is paste only and uses no boosts and the last step lists what was not carried across. Integrations are not part of Apprentice (guide 3.12). Integrations from Novice (9.1).
- Wording "only you can see" = Personal (guide 3.12 and 4.1).
- Automation: O01 step 2.

---

## O01-03 - Who pays when people chat (day 4, Leads)

**Subject:** [Botterverse] Who pays when people chat with a bot?

**Body:**

Hi {{contact.first_name}},

Last time, we covered bringing a GPT across with [Import a bot](https://lab.{{domain}}/bots/import). The next thing most people ask about is who pays when people chat with a bot.

**Boosts**

You do. Every message a bot sends uses boosts from the owner's balance at its real size. That includes visitors, customers and your own testing. A more expensive model uses more boosts per message.

Your plan includes boosts each month and they reset at renewal. Boosts you buy never expire. The [Pricing](https://{{domain}}/pricing/) page lists the amounts.

**Keeping it predictable**

Two settings stop a busy day from using up your balance. A Daily boost limit on a bot caps what free visitors can use in a day. A Message cap on a paid bot limits how many messages a buyer receives before a top-up.

You can also switch on Auto top-up so a low balance is topped up from your card. It stays off until you switch it on.

**Next step**

Think of one bot you might build and how many people might chat with it. That tells you whether to look at a smaller plan or a larger one.

Speak soon,

Your Botter Support Team

P.S. Next up: what happens when someone pays to use a bot and what Botterverse keeps.

**Notes**
- Facts: owner pays for visitor and customer chats and own testing (guide 1.3 and 10.1). Daily boost limit (4.4). Message cap (5.3). Auto top-up off until switched on (10.4). Included boosts reset and bought boosts never expire.
- Daily boost limit effect worded as "free visitors" as the guide says free visitors are told the limit is reached while paid buyers carry on.
- Automation: O01 step 3.

---

## O01-04 - Selling access (day 6, Leads)

**Subject:** [Botterverse] What happens when someone pays to use a bot

**Body:**

Hi {{contact.first_name}},

In the last email, we looked at who pays when people chat and how limits keep it predictable. Today is the other side: what happens when a visitor pays to use your bot.

**The paywall**

From the Novice Botter plan, you can put a one-time price on a bot. A buyer pays once then chats. You can add a Message cap with a top-up and a money-back guarantee of 7 or 14 days if you want one. There's no subscription for the buyer.

**The fee**

Botterverse takes one fee on each sale: a percentage of the price plus a fixed amount, lower from the Pro Botter plan. The exact figures are on the [Pricing](https://{{domain}}/pricing/) page and the [FAQ](https://{{domain}}/faq/) has a worked example.

**Reaching buyers**

No plan promises sales. You can share a link or put the bot on your own site or refer people through the affiliate programme. From Pro you can also list a bot on Bot Market for other Botters.

**Next step**

Write down who would pay to use your bot and where you already talk to them. That's the first thing a paywall needs.

Speak soon,

Your Botter Support Team

P.S. Next up: which plan suits what you want to do.

**Notes**
- Facts: paywall from Novice, one-time price, Message cap and top-up, guarantee 7 or 14 days (guide 5.1 to 5.4). Fee lower from Pro (guide 1.4 and pages-copy-v1). Bot Market selling from Pro. Affiliate programme from Novice.
- The plan says step 4 explains the published fee. Figures are kept off the email in line with the brief and left on Pricing and FAQ.
- Automation: O01 step 4.

---

## O01-05 - Choosing a plan (day 8, Leads)

**Subject:** [Botterverse] Which plan suits what you want to do

**Body:**

Hi {{contact.first_name}},

Last time, we covered what happens when someone pays to use a bot. This email is about choosing a plan to match.

**Start with what you need to do**

Each plan includes everything in the one before. Apprentice Botter builds and shares bots with the everyday models. Novice Botter adds every model, the paywall, integrations and the affiliate programme.

Expert Botter adds deeper analytics. Pro Botter adds [Bot styles](https://lab.{{domain}}/bot-styles), selling on Bot Market, the CRM connector and priority support. Master Botter adds [A/B tests](https://lab.{{domain}}/bots/ab-tests) and advanced analytics.

There's no free plan or trial. You can cancel from [Billing and boosts](https://lab.{{domain}}/billing) when you like.

Your plan runs to the end of the period you paid for. You can change plan later and remaining boosts from any Botter Booster Packs you bought are untouched.

**Next step**

Open the [Pricing](https://{{domain}}/pricing/) page and compare the plans against the one bot you'd like to build first.

Whenever you're ready,

Your Botter Support Team

**Notes**
- Facts: plan contents (guide 1.4 and pages-copy-v1 table). No free plan or trial and cancel from Billing and boosts (guide 1.4 and 10.7). Bought boosts stay on plan change (10.6).
- Final email: no loop. Ends on a plain sign-off.
- Automation: O01 step 5. Exit when tag Customer is applied.

---

# O03 - Public launch

**Trigger:** tag Launch Open applied. **Exit:** tag Customer applied.

## Loop map

| ID | Topic | P.S. loop |
|---|---|---|
| O03-01 | Botterverse is open | Next up: what a first bot could do. |
| O03-02 | What to build | Next up: how a visitor reaches your bot and who checks it. |
| O03-03 | Share and embed and the checks | Next up: putting a price on a bot. |
| O03-04 | Selling access | Next up: what chatting costs and how to cap it. |
| O03-05 | Boosts and limits | Next up: Bot Market and the affiliate programme. |
| O03-06 | Bot Market and affiliates | Next up: which plan to start on. |
| O03-07 | Choosing a plan | Next up: the questions people ask last. |
| O03-08 | Questions answered | None. Plain sign-off. |

Note for automation: these emails carry no Founders text. The Founders offer is sent as separate broadcasts.

---

## O03-01 - Botterverse is open (day 0, Leads)

**Subject:** [Botterverse] Botterverse is open

**Body:**

Hi {{contact.first_name}},

Botterverse is open. You can choose a plan and build your first bot today.

**What it is**

You build an AI bot from your own instructions and files on the model you choose. You share it by a link or on your own website and can sell access to it if you want to. There's no code.

It's made for coaches, consultants, course creators and anyone with an audience. If you've built a custom GPT, you can bring it across and you don't have to start again.

**What happens when you join**

You buy a plan and one email arrives with two links. The second creates your Botters Lab account and that's where you build.

**Next step**

Open the [Pricing](https://{{domain}}/pricing/) page and see what each plan adds. The next emails explain the rest one piece at a time.

See you soon,

Your Botter Support Team

P.S. Next up: what a first bot could do.

**Notes**
- Facts: guide 1.1 and 1.2 and 2.3. Purchase email has two links.
- Automation: O03 step 1. Recap omitted (first email).

---

## O03-02 - What to build (day 2, Leads)

**Subject:** [Botterverse] What could your first bot do?

**Body:**

Hi {{contact.first_name}},

Last time, I asked what a first bot could do. Here are some ideas to start from.

**Examples**

A coaching assistant that answers client questions from your own material. A support bot trained on your course lessons. A product guide that answers questions before someone buys.

A writing partner that keeps your brand voice. A bot that creates marketing material for products you promote. A niche expert that people pay to use.

These are examples only. A bot is only as good as its instructions and files.

**How you build it**

You write what the bot should do in plain language as if you were briefing a new assistant. You add files in PDF or Word or text or Markdown or CSV and you choose Claude, GPT, Gemini or Grok. Uploading files uses no boosts.

**Next step**

Choose one example and write one sentence about who it helps. That sentence becomes the start of your bot's instructions.

Speak soon,

Your Botter Support Team

P.S. Next up: how a visitor reaches your bot and who checks it.

**Notes**
- Facts: home copy v3 section 5 examples (affiliate marketing bot reworded as marketing material). File types and no boosts for upload (guide 3.7). Models (3.8).
- Automation: O03 step 2.

---

## O03-03 - Share and checks (day 4, Leads)

**Subject:** [Botterverse] How a visitor reaches your bot

**Body:**

Hi {{contact.first_name}},

In the last email, we looked at what a first bot could do. Next is how people reach it and what they're told before they chat.

**Two ways in**

Every Public bot has its own page with your username in the address and a Share link you can copy. Or you paste one snippet into your own site. Visitors are told they're talking to an AI before the first reply.

**Every bot is checked**

Every bot is checked before it can be made Public and every bot starts as Personal, so only you can use it. You press Make Public when you're ready.

Each bot has a Certified by Botterverse page. It shows who owns the bot, the model it runs on and what the owner declared. It doesn't vouch for the answers, so you preview your bot and test it before anyone else sees it.

**Next step**

Think of a question your bot should refuse and note it down. Trying it in Preview is the quickest way to test your instructions.

Speak soon,

Your Botter Support Team

P.S. Next up: putting a price on a bot.

**Notes**
- Facts: guide 4.1 and 4.4 and 4.5 and 4.7. Home copy v3 section 7.
- Automation: O03 step 3.

---

## O03-04 - Selling access (day 6, Leads)

**Subject:** [Botterverse] Putting a price on a bot

**Body:**

Hi {{contact.first_name}},

Last time, we covered how visitors reach a bot and how bots are checked. Today, we look at charging for access.

**The paywall**

From the Novice Botter plan, you can sell access to a bot for a one-time price. A buyer pays once and chats. You can set a Message cap with a top-up size and price plus a money-back guarantee of 7 or 14 days.

Botterverse takes one fee from each sale and the [Pricing](https://{{domain}}/pricing/) page lists it. Your earnings from a sale are what remains.

**Reaching buyers**

No plan promises sales. You can share a link or use your own site or list on Bot Market or refer people through the affiliate programme.

**Next step**

Think of what a fair one-time price might be for your bot and what a buyer would use it for. You can change the price later and it applies to new buyers.

Speak soon,

Your Botter Support Team

P.S. Next up: what chatting costs and how to cap it.

**Notes**
- Facts: guide 5.1 to 5.4. Price changes apply to new buyers (5.3).
- Automation: O03 step 4.

---

## O03-05 - Boosts and limits (day 8, Leads)

**Subject:** [Botterverse] What chatting costs and how to cap it

**Body:**

Hi {{contact.first_name}},

In the last email, we looked at putting a price on a bot. The cost on your side is boosts.

**Who pays**

You do. Each message a bot sends uses boosts from your balance at its real size. That covers visitors, customers and your own testing. A more expensive model uses more boosts.

Your plan includes boosts each month and they reset at renewal. Boosts you buy never expire. There's no free plan or trial.

**Caps**

Set a Daily boost limit on a bot and a Message cap on a paid bot, so a busy day can't use up your balance. Auto top-up is off until you switch it on.

**Next step**

Look at the Botter Booster Packs on the [Pricing](https://{{domain}}/pricing/) page and think about how many people might chat with your bot in a week.

Speak soon,

Your Botter Support Team

P.S. Next up: Bot Market and the affiliate programme.

**Notes**
- Facts: guide 1.3 and 4.4 and 5.3 and 10.1 and 10.4.
- Automation: O03 step 5.

---

## O03-06 - Bot Market and affiliates (day 10, Leads)

**Subject:** [Botterverse] Bot Market and the affiliate programme

**Body:**

Hi {{contact.first_name}},

Last time, we covered boosts and how to cap them. Two more things can bring people to your bots.

**Bot Market**

Bot Market is where Botters buy and sell bots with each other. Every plan can buy, but selling starts on the Pro Botter plan. When you list a bot, you choose the licence terms and can set an affiliate share on the listing.

**The affiliate programme**

From the Novice Botter plan, you can join the programme and share your link. You earn commission on the subscription payments of members who join through it. The [Affiliates](https://{{domain}}/affiliates/) page lists the rates at launch and the rules.

Botter Booster Packs earn nothing and you can't refer yourself. Botterverse doesn't promise or guarantee any income.

**Next step**

Read the [Affiliates](https://{{domain}}/affiliates/) page and see whether the programme suits how you already reach people.

Speak soon,

Your Botter Support Team

P.S. Next up: which plan to start on.

**Notes**
- Facts: guide 6.1 and 6.5 and 11.1. Rates are on the Affiliates page marked "at launch" so none are written here. No earnings claim.
- Automation: O03 step 6.

---

## O03-07 - Choosing a plan (day 12, Leads)

**Subject:** [Botterverse] Which plan to start on

**Body:**

Hi {{contact.first_name}},

In the last email, we covered Bot Market and the affiliate programme. Now the question that comes with all of them: which plan to start on.

**Start with what you need to do**

Each plan includes everything in the one before. Apprentice Botter builds and shares bots with the everyday models. Novice Botter adds every model, the paywall, integrations and the affiliate programme.

Expert Botter adds deeper analytics. Pro Botter adds [Bot styles](https://lab.{{domain}}/bot-styles), selling on Bot Market, the CRM connector and priority support. Master Botter adds [A/B tests](https://lab.{{domain}}/bots/ab-tests) and advanced analytics.

Remaining boosts from any Botter Booster Packs you bought are untouched when you change plan from [Billing and boosts](https://lab.{{domain}}/billing). You can also cancel when you like and your plan runs to the end of the period you paid for.

**Next step**

Open the [Pricing](https://{{domain}}/pricing/) page and match a plan to the first thing you'd like to do.

Speak soon,

Your Botter Support Team

P.S. Next up: the questions people ask last.

**Notes**
- Facts: pages-copy-v1 plans table. Change plan and cancel (guide 10.6 and 10.7).
- Automation: O03 step 7.

---

## O03-08 - Questions answered (day 14, Leads)

**Subject:** [Botterverse] The questions people ask last

**Body:**

Hi {{contact.first_name}},

Last time, I covered which plan to start on. This is the last email in this series and it answers what people ask just before they join.

**Do I need to be technical?**

No. If you can brief a new assistant, you can write a bot's instructions.

**Can someone copy my instructions or files?**

Every bot is told never to reveal or quote or summarise or translate its instructions or files. No instruction is a perfect lock, so keep secrets out of them.

**Will I be locked in?**

No. Request an export from [Settings](https://lab.{{domain}}/settings) and your bots, knowledge and conversations go with you.

**What if my bot says something wrong?**

You write the instructions and choose what the bot knows. Preview it before anyone else sees it. The Certified page doesn't vouch for the answers, so test yours.

**Next step**

Read the [FAQ](https://{{domain}}/faq/). If your question isn't there, ask through [Support](https://{{domain}}/support/) and we'll reply.

All the best,

Your Botter Support Team

**Notes**
- Facts: home copy v3 section 10 answers. Export from Settings (guide 12.4).
- Tone of the copy-protection answer approved by the owner on 2 November 2026.
- Final email: no loop and no Founders text. Automation: O03 step 8.

---

# O04 - Cart abandonment

**Trigger:** Cart Abandoned - FluentCart (FluentCRM trigger `fc_ab_cart_simulation_fluent_cart`). It needs the Abandoned Cart experimental feature switched on in FluentCRM settings. **Exit:** order paid.

Three reminders. Loops omitted.

| ID | Topic | Wait |
|---|---|---|
| O04-01 | Your plan is still in your cart | about 1 hour |
| O04-02 | Common questions before buying | about 1 day |
| O04-03 | Last reminder | about 3 days |

---

## O04-01 - Still in your cart (about 1 hour after, abandoned cart)

**Subject:** [Botterverse] You left a plan in your cart

**Body:**

Hi {{contact.first_name}},

You started choosing a plan and didn't finish. Your cart is still there if you'd like to carry on.

**What happens after you buy**

One email arrives with two links. The first sets the password for your billing login and the second creates your Botters Lab account. Use the same email address you bought with, so your plan reaches your account.

Then you build your first bot. Every new bot starts as Personal, so nobody else sees it until you're ready.

**Next step**

[Return to your cart](##ab_cart_fluent_cart.recovery_url##) and complete the purchase when you're ready. The [Pricing](https://{{domain}}/pricing/) page lists what each plan includes if you'd like to check first.

Your Botter Support Team

**Notes**
- Facts: purchase email with two links (guide 1.4 and 2.3). Personal until Make Public.
- Cart recovery link: `##ab_cart_fluent_cart.recovery_url##` (checked in the FluentCRM source). The feature collects the visitor's email before purchase, so the privacy policy needs a line on it.
- Automation: O04 step 1.

---

## O04-02 - Common questions (about 1 day after, abandoned cart)

**Subject:** [Botterverse] Questions people ask before they buy

**Body:**

Hi {{contact.first_name}},

Here are the questions people ask most before they join, in case one of them is holding you back.

**Is there a free trial?**

No. There's no free plan or trial. You can cancel from [Billing and boosts](https://lab.{{domain}}/billing) when you like and your plan runs to the end of the period you paid for.

**Who pays when people chat with my bot?**

You do. Each message uses boosts from your balance and your plan includes boosts each month. A Daily boost limit and a Message cap keep a busy day from using up your balance.

**Will I be locked in?**

No. Request an export from [Settings](https://lab.{{domain}}/settings) and your bots, knowledge and conversations go with you.

**Next step**

Read the [FAQ](https://{{domain}}/faq/) or ask [Support](https://{{domain}}/support/) if something else is in the way.

Your Botter Support Team

**Notes**
- Facts: guide 1.4 and 10.1 and 10.7 and 12.4. Home copy v3 section 10.
- Automation: O04 step 2.

---

## O04-03 - Last reminder (about 3 days after, abandoned cart)

**Subject:** [Botterverse] A last note about your cart

**Body:**

Hi {{contact.first_name}},

This is the last reminder about the plan you left in your cart. We won't write again about it.

If you're still deciding, the [Pricing](https://{{domain}}/pricing/) page lists what each plan includes. Each plan includes everything in the one before and you can change plan later.

**Next step**

[Return to your cart](##ab_cart_fluent_cart.recovery_url##) if you'd like to carry on or ask [Support](https://{{domain}}/support/) if a question is still open.

Your Botter Support Team

**Notes**
- Facts: pages-copy-v1 pricing intro. Change plan later (guide 10.6).
- Automation: O04 step 3. Final email.
