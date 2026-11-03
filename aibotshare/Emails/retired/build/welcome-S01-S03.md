# Welcome sequence S01 to S03 (approved)

The three approved emails, copied from the sample file. Rewrite only if the owner asks.

---

## S01 - Congratulations (day 1, all tiers)

**Subject:** [Botterverse] Welcome aboard - here's what happens next

**Body:**

Hi {{contact.first_name}},

Congratulations on becoming our latest Botter. You can now build AI bots on the model you choose and share them or sell access to them however you like.

**What you've received**

Your plan includes a Botter's Lab account, which is where you build, share and run your bots. It also includes credits every month. Credits pay for the messages your bots send, whether a visitor is chatting or you're testing.

Unused included credits are reset at your next renewal or plan change. Credits you buy never expire. The [Pricing](https://{{domain}}/pricing/) page lists what each plan adds along with the limits.

For help you have the [help articles](https://{{domain}}/docs/), a feedback form and a support portal. Support needs its own account but you can use the same username and password as your billing login to keep things simple.

**What happens now**

1. Create your Botter's Lab account. Use the second link in your purchase email, with the same email address you bought with. That's how your plan reaches your account.
2. Confirm your email address from the message we send you. Your plan is set up as soon as you do.
3. Set the password for your billing login from the link in your purchase receipt. That link works once and expires after 24 hours.

Over the following days you'll build a bot, test it and share it. After that we'll move on to the features your plan unlocks.

**Task for today**

Create your account from the link in your purchase email. Pick your username with care because it becomes part of your bots' web addresses and it can't be changed. You sign in with your username and not your email address.

{{#founder}}
**A note for Founders**

Keep your Founders coupon code. Enter it at the checkout whenever you upgrade because it doesn't carry over to a new plan by itself.
{{/founder}}

That's all for today. One email will arrive each day for the next 30 days and each one covers a single feature.

Welcome aboard,

Your Botter Team

P.S. Next up: how to sign in and why one particular button is worth pressing.

**Notes**
- Facts: username can't be changed and becomes part of bot addresses. Sign-in uses the username. The billing password link works once and expires after 24 hours (guide).
- Founder block: shown as a placeholder. The Founder tag may not exist when this sends. Options: a FluentCRM condition on the order's coupon if one exists or a short wait before the email sends. Needs a decision.
- Annual plans and prices are not mentioned.
- Vocabulary: Botter and Botter's Lab only.
- Automation: A0 step 1. Tags applied: Customer and Welcome Active.

---

## S02 - One button worth pressing (day 2, all tiers)

**Subject:** [Botter's Lab] One button worth pressing

**Body:**

Hi {{contact.first_name}},

Yesterday you created your Botter's Lab account and confirmed your email. If you haven't yet, the link in your purchase email is the place to start.

Today is about signing in and finding your way around the Dashboard, which is the first page you see after you sign in.

**Signing in**

The Sign in page asks for your username and your password. It never asks for your email address. If you forget your username, press Forgotten username? and we'll email it to you.

On a computer or phone only you use, tick Keep me signed in. That's the button worth pressing because you won't need to type your details every time.

**The Dashboard**

The Dashboard shows four things. Credit balance is what you can spend on messages right now and Usage this month shows how many credits you've used.

Active bots shows how many bots you have against your plan's limit, for example 3 of 5. Paused bots still count towards the limit. Revenue over time will show your share of what your bots earn.

**The menu**

The menu down the left is how you move around. Bots holds the Bot list, Create a bot, Import a bot, Analytics, A/B tests and Bot styles. Bot Market holds Browse, Bots I bought, My listings and My profile. Earnings holds Sales and Payouts.

Settings, Support, Help, Feedback and Affiliates sit at the foot. Which of these you can use depends on your plan, so don't worry if a few aren't ready yet.

The Bot list page shows each of your bots with its status such as Running or Paused by you. It's empty for now and that's about to change.

**Task for today**

Sign in with your username and tick Keep me signed in. Then find your Credit balance on the Dashboard and open the Bot list to see where your bots will live.

Speak soon,

Your Botter Team

P.S. Next up: your first bot. All it needs is a name and a few plain sentences.

**Notes**
- Facts: labels from chapter 2 of the guide and the menu screenshot. Forgotten username? sends the username by email. Paused bots count towards the limit.
- Subject chosen to follow on from the S01 P.S. (the button).
- Menu items are listed by name only. Plan availability is not stated item by item.
- If the contact hasn't confirmed their email the recap line is the fallback. A Check Condition on Welcome Active is enough.
- Vocabulary: Botter's Lab only.
- Automation: A0 step 2.

---

## S03 - Let's build your first bot (day 3, all tiers)

**Subject:** [Botter's Lab] Let's build your first bot

**Body:**

Hi {{contact.first_name}},

Yesterday you signed in and found your way around the Dashboard and the menu. Today Create a bot earns its place, because you're going to build your first bot.

We'll start with a Quick Answer Bot. It answers questions about one topic in a clear and consistent tone, which makes it a good first project.

**How a bot starts**

Every new bot starts as Personal, which means only you can use it. Nobody else can see it until you choose to make it Public.

Select Create a bot in the menu and give your bot a name. A short description and an image are optional. The name is the only required field.

**Instructions**

The Instructions section has a box called What the bot should do. Write it in plain language as if you were briefing a new member of staff. Say who the bot is for and what it helps with, how it should sound, what it shouldn't talk about and what to say when it doesn't know the answer.

You don't need to write it from scratch. Here's a starting point with three blanks to fill in:

> You are a quick answer bot for [WHO IT IS FOR]. You help them with [YOUR TOPIC] and nothing else. Answer in a [TONE, FOR EXAMPLE FRIENDLY AND CLEAR] voice using short paragraphs. If you don't know the answer say so plainly and don't guess.

If the instructions are too long for the model the Save button will tell you. Each time you save, a new version of the instructions is kept.

**Task for today**

Create a bot, paste in the text above and fill in the three blanks. Then press Save. You'll see the message The bot is saved.

That's bot number one built.

See you soon,

Your Botter Team

P.S. Next up: your bot receives a shelf in the Botterverse and its first words.

**Notes**
- Facts: Personal start, Name required, Description and Image optional, Instructions box What the bot should do, checklist items, Save refusal wording and version history, saved message (chapter 3 of the guide). The menu item is Create a bot (screenshot). The guide's wording is Bot list then New bot, so the two routes should be checked in the app.
- The copy-and-paste block is in a quote. It has exactly three blanks.
- Subject chosen to follow on from the S02 P.S.
- Vocabulary: the Botterverse appears once, in the P.S.
- Automation: A0 step 3. The bot is saved only. Preview and sharing come later.
