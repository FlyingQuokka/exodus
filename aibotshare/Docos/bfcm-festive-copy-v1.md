# Black Friday and Cyber Monday deal and the festive deal: copy, draft 1 (18 November 2026)

Written with the Genesis bot `mario-bot-` from `bfcm-festive-brief.md` then corrected by hand against the brief and the rules. Nothing here is on the site or in FluentCRM or in the app.

Changes made to the bot's drafts and why:
- Every claim that a Founder's price "never goes up" was removed. The facts say 50% off for life and 40% off for life. They do not say the list price is fixed.
- The Black Friday emails no longer mention the festive deal. It is announced only from 4th December.
- Claims that people in the market "locked in half what everyone pays" were removed. The festive deal means December buyers pay 40% off.
- "Sold out" and "the Founders page lit up" were removed. They state a result with no figure behind it.
- "No code needed" was changed. The link carries the code and FluentCart applies it when the visitor adds a plan. The code is still given in case a buyer asks.

Dates and the two codes are in `bfcm-festive-brief.md`. Coupon end dates read through `{{cpn_dateend_founder50}}` and `{{cpn_dateend_founder40}}`. On local FOUNDER50 still ends on 30 November and FOUNDER40 does not exist, so those codes show the wrong date or "a date to be confirmed" until the coupons are set on live.

---

# Part 1: Black Friday and Cyber Monday (FOUNDER50)

## 1.1 Hooks

1. Custom GPTs are being switched off. Your bots don't have to go with them.
2. 50% off for life. Not a sale price that reverts. A Founder rate for as long as you stay.
3. The platform for what OpenAI took away, at half price for life.
4. You built something real. It deserves a home you own. Today that home is half price for life.
5. Every month from now on you pay the Founder rate. Half the list price. Your decision takes one click.
6. Black Friday. Cyber Monday. One deal. One deadline: the close of 1st December EST.
7. Build it. Share it. Charge for it. All of it at half price for life.
8. OpenAI closed the door on custom GPTs. Botterverse opened one that is yours.
9. A Founder stays a Founder for life. The deal closes on 1st December.
10. Some people will look back at this week and wish they had moved. Be the one who did.

## 1.2 Banner pairs

Headline up to 8 words. Supporting line up to 12 words.

| # | Headline | Supporting line |
|---|---|---|
| 1 | Your Founder rate. 50% off for life. | Every plan. Closes on 1st December. |
| 2 | Build bots. Sell access. Pay half price. | Founder pricing ends 1st December. Code FOUNDER50. |
| 3 | Custom GPTs are gone. Your bots aren't. | Botterverse is your new home. 50% off for life. |
| 4 | Half price today. Half price for life. | Join as a Founder before 1st December. |
| 5 | Black Friday. Cyber Monday. One deal. | 50% off for life. Code FOUNDER50. Closes 1st December. |
| 6 | Your bots. Your marketplace. Your rate. | Founder pricing ends at the close of 1st December EST. |
| 7 | Be a Founder. Not a latecomer. | 50% off for life ends at the close of 1st December EST. |
| 8 | 50% off every plan for life. | Monthly or annual. Closes on 1st December. |

## 1.3 Social posts

Each ends with the deadline and the link.

**Post 1**
OpenAI switched off custom GPTs for personal accounts. A lot of people lost something they had spent months building.

Botterverse is where those bots can live now. This week it is 50% off for life.

Code FOUNDER50. Closes on 1st December. botterverse.com/founders

**Post 2**
50% off for life means your subscription stays at half the list price for as long as you stay.

One deal. Every plan. Monthly or annual.

Closes on 1st December. botterverse.com/founders

**Post 3**
Build a bot. Embed it on your site. Charge for access. List it on Bot Market.

That is the whole thing. Until 1st December you can do all of it at half price for life.

Code FOUNDER50. botterverse.com/founders

**Post 4**
Black Friday deals usually last a weekend.

This one runs through Cyber Monday and ends at the close of 1st December EST. One deadline. No extensions.

50% off for life. Code FOUNDER50. botterverse.com/founders

**Post 5**
Write your instructions. Add your files. Pick a model. Share the link.

That is how a bot goes live on Botterverse. And right now every plan is 50% off for life.

Closes on 1st December. botterverse.com/founders

**Post 6**
If you have been watching Botterverse and waiting for a reason to move, this is it.

50% off for life. Every plan. Code FOUNDER50.

Closes on 1st December. botterverse.com/founders

## 1.4 Site announcement bar

1. Founder pricing: 50% off for life. Code FOUNDER50. Closes on 1st December.
2. Black Friday and Cyber Monday: 50% off every plan for life. Ends 1st December.
3. Become a Founder. 50% off for life. Closes 1st December.
4. Your Founder rate is waiting. 50% off for life until 1st December.
5. 50% off for life. Ends at the close of 1st December EST.

## 1.5 Sign-up sequence (people who join the list on the Founders page)

For FluentCRM. The link carries the code so the discount applies when the visitor adds a plan. Prefix `[Botterverse]` is already in each subject.

### BF-S1 - at once

**Subject:** [Botterverse] You're on the list. Here's how to claim 50% off for life

Hi {{contact.first_name}},

You're on the Founders list. Here is exactly what happens next.

Use the link below. It carries the code FOUNDER50 with it so the discount is applied when you choose a plan. Pick a plan and choose monthly or annual billing. Check out. That's it.

From then on you pay 50% of the list price for as long as you stay a member. You are a Founder for life.

The deal covers every plan. At half price Apprentice is $2.50 a month and Master is $148.50. Annual billing is ten times the monthly price and the same 50% applies.

Botterverse is where you build, share and sell AI chatbots. You build in the Botters Lab and list on Bot Market. Your audience reaches your bot through a link or an embed on your own site.

The offer closes on {{cpn_dateend_founder50}}.

Claim 50% off for life:
https://{{domain}}/founders/?cpn=founder50

The Botterverse team

### BF-S2 - day 2

**Subject:** [Botterverse] What 50% off for life means

Hi {{contact.first_name}},

A lot of offers give you a cheap first month and then put the price up. This one doesn't work that way.

With FOUNDER50 your subscription stays at 50% off for life. At Pro that is $98.50 a month instead of $197. At Master it is $148.50 instead of $297. Every payment is at the Founder rate for as long as you remain a member.

There is a quieter benefit too. You decide once. You don't have to watch for the next promotion or wonder whether you missed the cheap window. You are in.

The offer closes on {{cpn_dateend_founder50}}.

Lock in your rate:
https://{{domain}}/founders/?cpn=founder50

The Botterverse team

### BF-S3 - day 4

**Subject:** [Botterverse] What you can build here and sell

Hi {{contact.first_name}},

If you built custom GPTs and sold access to them you already know the problem. OpenAI stopped personal accounts from creating or publishing new custom GPTs from 16 August 2026. That route is closed.

Botterverse is where that work can go. You write your bot's instructions in the Botters Lab. You add your files. You pick an AI model. Then you share it by link or embed it on your own site.

If you want to charge for access you can. If you want to list the bot on Bot Market so other members find it you can do that too.

Novice covers 20 bots and selling access. Expert covers 50. Pro has unlimited bots and Bot Market selling. At 50% off for life Novice is $23.50 a month and Pro is $98.50.

The offer closes on {{cpn_dateend_founder50}}.

https://{{domain}}/founders/?cpn=founder50

The Botterverse team

### BF-S4 - day 6

**Subject:** [Botterverse] Black Friday and Cyber Monday: the clock is real

Hi {{contact.first_name}},

Black Friday and Cyber Monday are one offer here. One code. One deadline.

50% off for life on every plan. The code FOUNDER50 stops working at the close of 1st December EST. After that the price is the list price. We won't extend it quietly or send a "last chance we really mean it" email three days later.

If you have been waiting for a reason to start, the reason is the date.

Your Founder rate is fixed at half the list price for as long as you stay. The only thing that changes is whether you take it now.

https://{{domain}}/founders/?cpn=founder50

The Botterverse team

### BF-S5 - final 24 hours

**Subject:** [Botterverse] Last 24 hours for 50% off for life

Hi {{contact.first_name}},

This ends at the close of {{cpn_dateend_founder50}} EST.

After that FOUNDER50 stops working and the 50% off for life offer is over. There is no extension.

If you are still choosing a plan: Novice is $23.50 a month at the Founder rate and has room for 20 bots and selling access. Pro is $98.50 and has unlimited bots with full Bot Market selling. Annual billing is ten times the monthly price if you would rather pay once.

The code is already in the link. Click and choose your plan.

https://{{domain}}/founders/?cpn=founder50

See you inside.

The Botterverse team

## 1.6 Swipe emails for affiliates (shown in the app)

Relative URL for this set: `/founders?cpn=founder50`
The only link in each email is `{affiliate_link}`. Show this set from the Lab launch until the close of 1st December 2026 EST.

### BF-A1 - the deal

**Subject:** 50% off for life. Not a typo

I don't use the word "life" lightly.

Botterverse is running 50% off for life right now. You pay half the list price every month for as long as you stay a member.

No introductory rate that quietly doubles. You join as a Founder and the Founder rate is yours.

Botterverse is where you build AI chatbots and share them by link. You can embed them on your own site and charge for access. One platform. Your bots. Your audience.

The deal runs through Black Friday and Cyber Monday. It ends at the close of 1st December EST.

Use my link below. When you choose a plan from that page the discount is applied for you. If anyone asks, the code is FOUNDER50. It works on every plan and on monthly and annual billing.

After 1st December this price is gone.

{affiliate_link}

### BF-A2 - custom GPTs

**Subject:** Custom GPTs are being switched off. Here's where people are going

If you built custom GPTs and sold access to them you already know the problem.

Since 16 August 2026 personal accounts can no longer create or publish new custom GPTs. The route that made it easy to package and sell AI tools was closed with very little notice.

A lot of people who built and sold custom GPTs are looking for somewhere new.

Botterverse is that place. You build the bot in the Botters Lab. You write the instructions and add your files and pick the model. Then you share it by link or embed it where your audience already is. You set your own price.

Through Cyber Monday every plan is 50% off for life. You join as a Founder and keep that discount for as long as you stay.

My link takes you to the Founders page. Choose a plan from there and the discount is applied. If anyone asks the code is FOUNDER50.

It ends at the close of 1st December EST.

{affiliate_link}

### BF-A3 - build and sell

**Subject:** Build a bot. Charge for it

Here is something a lot of people are overlooking.

You build an AI chatbot around something you know. A niche or a skill or a system. You put it on Botterverse and set a price. You share the link. People pay for access.

Botterverse has the Botters Lab to build in and Bot Market to list on. You can also drop a direct link anywhere your audience is.

And right now through Black Friday and Cyber Monday you can take any plan at 50% off for life.

Selling access starts on Novice. Novice covers 20 bots. Expert goes to 50. Pro has unlimited bots and Bot Market selling.

Use the link below. When you choose a plan the discount is applied for you. If anyone asks the code is FOUNDER50. The offer ends at the close of 1st December EST.

{affiliate_link}

### BF-A4 - last day

**Subject:** Closes tonight. 50% off for life ends at midnight

This is the last one I'm sending about this.

The Black Friday and Cyber Monday deal closes tonight. After the close of 1st December EST the 50% off for life price is gone.

What you are taking is a Founder rate: half the list price every month for as long as you stay.

Botterverse is where you build AI chatbots and sell access to them. You can embed them on your site and list them on Bot Market. It is also where a lot of people have been rebuilding since the custom GPT switch-off.

Plans start at $5 a month and the 50% applies to every plan. Choose a plan from my link and the discount is applied. If anyone asks the code is FOUNDER50.

After midnight Eastern tonight that is it.

{affiliate_link}

## 1.7 Emails to Botterverse members about promoting the deal (FluentCRM)

For members who have the affiliate programme (Novice and above). Used as the swapped version while the deal runs: see section 3. `{{fluent_affiliate.share_url}}` is the contact's share link. It gives `https://{{domain}}/?r=VALUE`, so the deal link adds `&cpn=founder50`. The affiliate parameter is `r` on this site.

### BF-M1 - the arithmetic

**Subject:** [Botterverse] Your membership can pay for itself

Hi {{contact.first_name}},

The Black Friday and Cyber Monday deal is on. 50% off for life on every plan with FOUNDER50.

Here is why it matters to you as an affiliate. Commission is 50% of a member's first payment and 20% of every payment after that. It is worked out on the price they pay.

If you are on Novice at the deal price you pay $23.50 a month. One member you bring in on Pro pays $98.50 and you receive $49.25 on that first payment. That covers two months of your Novice membership.

One member on Master pays $148.50 and you receive $74.25. That covers three months.

Two Pro members cover four months.

Annual billing works the same way. A Pro member on annual billing at the deal price pays $985 and you receive $492.50 on that first payment. Novice annual at the deal price is $235, so that one referral covers two years of your own membership.

Custom GPTs are being switched off and people who built and sold them need somewhere to go. Your link:

{{fluent_affiliate.share_url}}&cpn=founder50

The code stops working on {{cpn_dateend_founder50}}.

The Botterverse team

### BF-M2 - three steps

**Subject:** [Botterverse] Three steps for today

Hi {{contact.first_name}},

If your link has been waiting in a drawer, today is the day to use it.

Step one. Copy your deal link: {{fluent_affiliate.share_url}}&cpn=founder50. It takes people to the Founders page with your referral attached and the deal code carried through to their cart.

Step two. Think of who you know who built or sold custom GPTs or wants a proper place to build and sell bots. You don't need a big list. You need the right people.

Step three. Say something true. The deal is 50% off for life. Custom GPTs are being switched off. People need a new home.

The arithmetic on your side: a Novice membership at the deal price costs you $23.50 a month. One Pro referral pays $49.25 on the first payment. One Master referral pays $74.25.

The deal closes on {{cpn_dateend_founder50}}.

The Botterverse team

### BF-M3 - last day

**Subject:** [Botterverse] Last day for the Black Friday deal

Hi {{contact.first_name}},

FOUNDER50 closes tonight. After {{cpn_dateend_founder50}} 50% off for life is over.

For you that also means the commission arithmetic changes. Today a Pro referral pays you $49.25 on the first payment and a Master referral pays $74.25. Two Pro referrals cover four months of Novice at the deal price.

If there is someone you have been meaning to tell, tonight is the time. Your link has everything in it:

{{fluent_affiliate.share_url}}&cpn=founder50

Commission tracks from the click.

The Botterverse team

---

# Part 2: Festive deal (FOUNDER40)

Live from 4th December 2026 until the close of 1st January 2027 EST. The premise throughout: Black Friday went so well that a festive version is here, at 40% to honour the people who moved fast and took 50%.

## 2.1 Hooks

1. Black Friday went so well we are doing it again. 40% off for life until 1st January.
2. Missed 50%? Here is 40% off for life. It closes on 1st January.
3. Custom GPTs are being switched off. Your bots need a home. Founders pay 40% less for life.
4. The people who moved fast on Black Friday took 50%. Here is 40% for everyone who is ready now.
5. Build bots. Share them. Charge for them. At 40% off for life until 1st January.
6. Start the new year with your Founder rate already chosen. 40% off for life.
7. The festive Founder deal exists because Black Friday went so well. It closes on 1st January.
8. Your subscription stays at 40% off for life. You only need to join before 1st January.
9. A Founder stays a Founder for life. The festive deal is open until 1st January.
10. Black Friday is over. The festive deal is here until the close of 1st January EST.

## 2.2 Banner pairs

| # | Headline | Supporting line |
|---|---|---|
| 1 | 40% off for life. Festive Founder deal. | Join before 1st January and keep the discount. |
| 2 | Your Founder rate. 40% off for life. | Every plan. Closes on 1st January. |
| 3 | Black Friday went well. Now it's festive. | 40% off for life. Code FOUNDER40. Closes 1st January. |
| 4 | Build bots. Charge for them. Pay less. | Festive Founder deal: 40% off for life. |
| 5 | Custom GPTs are going. Botterverse stays. | Take 40% off for life before 1st January. |
| 6 | One code. One rate. Yours for life. | FOUNDER40. 40% off every plan. Closes 1st January. |
| 7 | The festive deal closes on 1st January. | 40% off for life. Ends at the close of 1st January. |
| 8 | Start the new year as a Founder. | 40% off for life. Closes on 1st January. |

## 2.3 Social posts

**Post 1**
Black Friday went so well we decided to run a festive version.

40% off Botterverse for life. Every plan. Monthly or annual. For everyone who didn't move in November.

Code FOUNDER40. Closes on 1st January. botterverse.com/founders

**Post 2**
Custom GPTs are being switched off.

If you built and sold them you need somewhere to go. Botterverse lets you build bots and charge for access. This festive season it is 40% off for life.

Closes on 1st January. botterverse.com/founders

**Post 3**
The people who moved on Black Friday took 50% off for life.

This festive deal is 40%, to honour them for moving first. Still a Founder rate for as long as you stay.

Code FOUNDER40. Closes on 1st January. botterverse.com/founders

**Post 4**
Build AI chatbots. Share them by link. Embed them on your site. Charge for access. List them on Bot Market.

All of it at 40% off for life.

Code FOUNDER40. Closes on 1st January. botterverse.com/founders

**Post 5**
The festive deal is live.

40% off Botterverse for life with FOUNDER40. Every plan. Monthly or annual billing.

Ends at the close of 1st January EST. botterverse.com/founders

**Post 6**
Start the year with the decision already made.

40% off for life. Every plan. Code FOUNDER40.

Closes on 1st January. botterverse.com/founders

## 2.4 Site announcement bar

1. Festive Founder deal: 40% off for life. Code FOUNDER40. Closes 1st January.
2. 40% off every plan for life. FOUNDER40. Closes on 1st January.
3. Black Friday went well. Festive deal now open: 40% off for life.
4. Become a Founder. 40% off for life. Closes 1st January.
5. FOUNDER40: 40% off for life. Ends at the close of 1st January EST.

## 2.5 Sign-up sequence

### FD-S1 - at once

**Subject:** [Botterverse] Black Friday went so well that we're doing this

Hi {{contact.first_name}},

Black Friday went better than we hoped. People moved fast and took 50% off for life.

So there is a festive version. Until {{cpn_dateend_founder40}} you can join Botterverse as a Founder at 40% off for life.

The people who took 50% keep it. They moved first and that's how it should work. You're at 40% and that rate stays with you for as long as you're a member.

Botterverse is where you build, share and sell AI chatbots. Your own bots. On your own terms.

Use this link and the code FOUNDER40 is carried to your cart when you choose a plan:
https://{{domain}}/founders/?cpn=founder40

The offer closes on {{cpn_dateend_founder40}}.

The Botterverse team

### FD-S2 - day 2

**Subject:** [Botterverse] What 40% off for life means

Hi {{contact.first_name}},

Most offers are a cheap first month. This one lasts as long as you stay.

With FOUNDER40 your subscription stays at 40% off for life. Apprentice is $3 a month. Novice is $28.20. Expert is $58.20. Pro is $118.20. Master is $178.20. Annual billing is ten times the monthly price and the same 40% applies.

You make the decision once.

The offer closes on {{cpn_dateend_founder40}}.

https://{{domain}}/founders/?cpn=founder40

The Botterverse team

### FD-S3 - day 4

**Subject:** [Botterverse] Custom GPTs are being switched off. This is the next move

Hi {{contact.first_name}},

If you built custom GPTs and sold access to them you already know what happened. From 16 August 2026 personal ChatGPT accounts can no longer create or publish new custom GPTs.

Botterverse exists for that gap. You build your bots in the Botters Lab. You write the instructions and add your files and choose an AI model. Then you share by link or embed on your own site. You set the price and you control access. You list on Bot Market if you want wider reach.

It's yours. It isn't hosted inside someone else's platform on someone else's terms.

The festive Founder deal at 40% off for life is open until {{cpn_dateend_founder40}}.

https://{{domain}}/founders/?cpn=founder40

The Botterverse team

### FD-S4 - day 8

**Subject:** [Botterverse] New year. Your bots. Your rate

Hi {{contact.first_name}},

There is something satisfying about starting a year with a decision already made. Not a resolution. A real thing: your rate chosen and your bots ready to build.

The festive deal closes on {{cpn_dateend_founder40}}. Join before then and you carry 40% off into the new year and every year after.

Novice at 40% off is $28.20 a month. You can build up to 20 bots and charge for access. Pro at 40% off is $118.20 a month with unlimited bots and Bot Market selling.

https://{{domain}}/founders/?cpn=founder40

The Botterverse team

### FD-S5 - final 24 hours

**Subject:** [Botterverse] 24 hours left on the festive Founder rate

Hi {{contact.first_name}},

This ends at the close of {{cpn_dateend_founder40}} EST.

After that FOUNDER40 stops working. The 40% off for life offer is over.

The people who took 50% on Black Friday keep their rate. You are at 40% because the festive deal exists for everyone who is ready now. Both rates last for as long as the member stays.

One link. One code. One deadline.

https://{{domain}}/founders/?cpn=founder40

The Botterverse team

## 2.6 Swipe emails for affiliates (shown in the app)

Relative URL for this set: `/founders?cpn=founder40`
Show this set from 4th December 2026 until the close of 1st January 2027 EST.

### FD-A1 - it's back

**Subject:** It's back: 40% off for life

Black Friday on Botterverse went so well that a festive version is here.

Until 1st January you can take 40% off for life on any Botterverse plan. Monthly or annual.

That isn't a one-month discount. You pay the reduced price for as long as you stay a member.

The Black Friday crowd took 50% off. This one is 40% and it exists to honour the people who moved fast the first time.

Botterverse is where you build, share and sell AI chatbots. You write the instructions and add your files and pick a model. Then you share by link or embed it on your site. You can charge for access and list your bots on Bot Market.

Use my link. When you choose a plan from that page the discount is applied. If anyone asks the code is FOUNDER40. It ends at the close of 1st January EST.

{affiliate_link}

### FD-A2 - custom GPTs

**Subject:** Custom GPTs are being switched off. Here's where people are going

In August 2026 OpenAI stopped personal ChatGPT accounts from creating or publishing new custom GPTs.

If you built a tool or a product on that platform you know what that felt like. A lot of people needed somewhere to go.

Botterverse is where many of them are going. You build bots in the Botters Lab. Write instructions and add files and pick a model. But you own the link and you embed it on your own site. You set the price. You list it on Bot Market if you want wider reach.

Right now there is a festive deal. 40% off for life on any plan. It runs until 1st January.

Use my link below. When you choose a plan the discount is applied. If anyone asks the code is FOUNDER40.

{affiliate_link}

### FD-A3 - build and sell

**Subject:** Build a bot. Charge for it

Here's what I find interesting about Botterverse. You don't just build bots for yourself. You build them and put a price on them and sell access.

Someone pays to use your bot and you set the terms. The bot lives on your site or on Bot Market where members are already browsing.

Right now there's a festive deal. 40% off for life on any plan. It closes on 1st January. Selling access starts on Novice so you can start building something that pays you back from the beginning.

Use my link. When you choose a plan the discount is applied. If anyone asks the code is FOUNDER40.

{affiliate_link}

### FD-A4 - last day

**Subject:** Closes tonight: 40% off for life

The Botterverse festive deal closes tonight at midnight Eastern. After that the code stops working and the price goes back to the list price.

The deal is 40% off for life on any plan. Monthly or annual. That's what you pay from your first payment for as long as you stay a member.

Botterverse is where you build and sell AI chatbots. You can embed them on your own site or list them on Bot Market. It's a proper home for anyone building with AI, especially if the custom GPT switch-off left you without one.

Plans start at $5 a month. Novice at $47 is $28.20 with 40% off and includes selling access.

Choose a plan from my link and the discount is applied. If anyone asks the code is FOUNDER40.

{affiliate_link}

## 2.7 Emails to members about promoting the deal (FluentCRM)

### FD-M1 - the deal is back

**Subject:** [Botterverse] The deal is back and so are festive commissions

Hi {{contact.first_name}},

Black Friday went so well that we are bringing a version back for the festive period. 40% off for life on every plan with FOUNDER40.

For you as an affiliate this is a second round of commission. Commission is 50% of a member's first payment and 20% of every payment after that, worked out on the price they pay.

If you are on Novice at the festive price you pay $28.20 a month. One Pro member pays $118.20 and you receive $59.10 on that first payment. That covers two months of your membership with $2.70 left over. One Master member pays $178.20 and you receive $89.10, which covers three months.

Annual billing works the same way. A Pro member on annual billing at the festive price pays $1,182 and you receive $591 on that first payment. Novice annual at the festive price is $282, so that one referral covers two years of your own membership.

Your deal link:

{{fluent_affiliate.share_url}}&cpn=founder40

The code stops working on {{cpn_dateend_founder40}}.

The Botterverse team

### FD-M2 - three steps

**Subject:** [Botterverse] Three steps for the festive deal

Hi {{contact.first_name}},

Step one. Copy your deal link: {{fluent_affiliate.share_url}}&cpn=founder40. It takes people to the Founders page with your referral attached and the festive code carried to their cart.

Step two. Think of who you know who has lost custom GPTs or wants to build and sell bots. You don't need a big list. You need the right people.

Step three. Say something true. The deal is 40% off for life. Custom GPTs are being switched off. People need a new home.

On your side the arithmetic is simple. A Novice membership at the festive price is $28.20 a month. One Pro referral pays $59.10 on the first payment. One Master referral pays $89.10.

The deal closes on {{cpn_dateend_founder40}}.

The Botterverse team

### FD-M3 - last day

**Subject:** [Botterverse] Last day for the festive deal

Hi {{contact.first_name}},

FOUNDER40 closes tonight. After {{cpn_dateend_founder40}} the festive deal is over.

A Pro referral pays you $59.10 on the first payment today and a Master referral pays $89.10. Two Pro referrals cover four months of Novice at the festive price.

If there is someone you have been meaning to tell, tonight is the time:

{{fluent_affiliate.share_url}}&cpn=founder40

The Botterverse team

---

# Part 3: Between the deals and when each text shows

## 3.1 Gap days (2nd and 3rd December)

Banners and offer pages are hidden. The Founders page shows nothing about an offer. No email mentions the festive deal until 4th December.

## 3.2 How the member emails swap in while a deal runs

The affiliate emails in the normal follow-up sequence (the ones that talk about the programme) become `{{deal_block_NAME}}`. While FOUNDER50 is in its dates the Black Friday text shows. While FOUNDER40 is in its dates the festive text shows. Otherwise the normal text shows. Sections 1.7 and 2.7 are the deal texts. The normal texts stay as they are now. Needs one `data/deal-blocks.json` entry per email once you approve the wording.

## 3.3 Notes for the app agent

- Two sets of swipe emails with the relative URLs in sections 1.6 and 2.6. The first shows until the close of 1st December 2026 EST and the second from 4th December until the close of 1st January 2027 EST.
- The emails say "when you choose a plan from that page the discount is applied". That depends on the website change in `runtime.php` going live.
- The affiliate parameter on the live site is `r` and not `ref`.

## 3.4 Open items

- None for the coupons. FOUNDER50 ends at the close of 1st December 2026 EST and FOUNDER40 exists for 4th December to the close of 1st January 2027 EST (both done on 18 November 2026).
