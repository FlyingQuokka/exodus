# Sequences O05 to O15 - behaviour and event emails

Covers O05 dormant (3), O06 cancelling and win-back (4), O07 refund (1), O08 affiliate onboarding (6), O09 feedback request (1), O10 first sale (1), O11 Bot Market seller (2), O12 Bot Market buyer (2), O13 moved across from a GPT (1), O14 Power User (2) and O15 plan-ending reminders (4). Total 27 emails. Nothing is set up in FluentCRM.

Behaviour sequences wait while Welcome Active or Upgrade Active is on the contact (priority 3 in the collision rules). O15 and O07 are event emails and always send.

## Loop map

| Email | Topic | P.S. loop text |
|---|---|---|
| O05-1 | Quiet check-in and one quick win | Next up: the quickest way to a working bot, if starting from a blank page is what held you back. |
| O05-2 | Import a bot and Duplicate | Next up: what to do if your plan no longer fits the way you use the Botters Lab. |
| O05-3 | Does your plan still fit | None. Plain sign-off. |
| O06-2 | Why did you cancel | Next up: in a few weeks a short note on what is waiting in your account. |
| O06-3 | Your account is still here (30 days) | Next up: a reminder of what your account still holds. |
| O06-4 | Your bots are still saved (about 60 days) | Next up: one last note from us. |
| O06-5 | A last note (about 90 days) | None. Plain sign-off. |
| O07-1 | Refund confirmed | None. Single email. |
| O08-1 | You're in - your link and the rules | Next up: what to say when you share your link. Plain wording you can adapt. |
| O08-2 | What to say | Next up: ready-made material in the Affiliates page so you don't start from nothing. |
| O08-3 | Swipe material | Next up: a second way to earn commission, by promoting a Bot Market listing. |
| O08-4 | Promote a Bot Market listing | Next up: what to check if your first referral hasn't arrived yet. |
| O08-5 | Your first referral nudge | Next up: what happens when your first commission lands. |
| O08-6 | Your first commission (tag First Commission) | None. Plain sign-off. |
| O09-1 | How is selling going | None. Plain sign-off. |
| O10-1 | First sale | None. Single email. |
| O11-1 | Listing tips | Next up: how reviews and badges build trust in your listing. |
| O11-2 | Reviews and badges | None. Plain sign-off. |
| O12-1 | Open your bought bot and read the licence | Next up: a review and why it matters to the next buyer. |
| O12-2 | Leave a review | None. Plain sign-off. |
| O13-1 | Check your imported bot | None. Single email. |
| O14-1 | Auto top-up and where to change it | Next up: a few ways to make your boosts go further. |
| O14-2 | Making boosts go further | None. Plain sign-off. |
| O15-1 to O15-4 | Plan-ending reminders | None. Each is sent by its own tag. |

---

## O05-1 - Quiet check-in (day 0 of the sequence, Customers tagged Dormant)

**Subject:** [Botters Lab] Your bots are waiting

**Body:**

Hi {{contact.first_name}},

It's been a while since you last visited the Botters Lab. Your plan is still active and your account is as you left it.

Today is a short check-in with one thing worth a few minutes.

**Pick up where you stopped**

Sign in at https://lab.{{domain}}/login with your username and password. If you've forgotten your username, press Forgotten username? and we'll email it to you.

Open [Bot list](https://lab.{{domain}}/bots) to see your bots and their status such as Running or Paused by you. A bot that's saved but never tested is a good place to start.

**Task for today**

Open a bot from Bot list and use Preview to ask it one question. Preview uses your boosts and it shows you what a visitor would see.

Whenever you're ready,

Your Botter Support Team

P.S. Next up: the quickest way to a working bot, if starting from a blank page is what held you back.

**Notes**
- Facts: sign-in uses the username. Forgotten username? exists. Bot list statuses. Preview is a section of the bot's page and uses the owner's boosts (digest 2.4 and 3.9 and 3.11).
- Automation: O05 step 1, sends once the Dormant tag is applied and Welcome Active and Upgrade Active are absent. Exit when Dormant is removed.
- Confirmed by the app agent (answer 48): the app sets Dormant 60 days after the member was last active (a staff setting, measured from any signed-in request and not from sign-in itself). The text says "a while" and "visited".

---

## O05-2 - Import a bot and Duplicate (day 4, Dormant)

**Subject:** [Botters Lab] The quickest way to a working bot

**Body:**

Hi {{contact.first_name}},

Last time, we suggested a quick Preview of one of your bots.

If starting from a blank page is what held you back, there are two shortcuts.

**Import a bot**

[Import a bot](https://lab.{{domain}}/bots/import) lets you paste in instructions you already have, for example from a GPT. It doesn't connect to any other account and it uses no boosts.

You'll work through Instructions, Files, Integrations (optional) and Review. Nothing is saved until you press Create bot and the new bot opens as Personal.

**Duplicate**

If you already have a bot that works, you can copy it with Duplicate. Open the bot from [Bot list](https://lab.{{domain}}/bots) and find it at the foot of the page. The copy is named with "Copy" on the end and starts as Personal.

A copy counts towards your plan's bot limit like any other bot.

**Task for today**

Try Import a bot with one set of instructions you already have or Duplicate a bot and change one thing. The Help link beside the page title opens a step-by-step article for that page.

See you soon,

Your Botter Support Team

P.S. Next up: what to do if your plan no longer fits the way you use the Botters Lab.

**Notes**
- Facts: Import a bot is paste-only and uses no boosts. Steps and "Create bot" and opens as Personal. Duplicate adds "Copy" and starts Personal and counts towards the limit (digest 3.10 and 3.12). Integrations are not part of Apprentice Botter: the importer step says so and the member can carry on.
- Automation: O05 step 2, about 4 days after step 1. Skips if Dormant has been removed.

---

## O05-3 - Does your plan still fit (day 8, Dormant)

**Subject:** [Botterverse] Does your plan still fit?

**Body:**

Hi {{contact.first_name}},

Last time, we covered two shortcuts for starting a bot.

Today is about the plan itself. If you don't need all of it, a smaller plan may suit you better and here's how that works.

**Moving to a lower plan**

The way to move down is to cancel your current plan on [Billing and boosts](https://lab.{{domain}}/billing) and buy the lower plan once the current one ends. Open Your plan and press Cancel my plan. You'll keep your current plan until the end of the period you've paid for.

Between the two plans, your bots pause and their pages show as unavailable. They come back when your new plan starts, oldest first, up to the new plan's bot limit.

We'll email you reminders as the end date comes close. The [Pricing](https://{{domain}}/pricing/) page lists what each plan includes.

**If you're staying**

You don't need to do anything. Your plan and your bots stay as they are.

**Task for today**

Look at Your plan on Billing and boosts and decide whether it matches how you use your bots. If you'd like to talk it through, open the [Support](https://{{domain}}/support/) page.

Whenever you're ready,

Your Botter Support Team

**Notes**
- Facts: owner decision of 31 October 2026 (see `plan-ending-emails.md`): a lower plan is bought after the current plan ends and FluentCart offers no downward move. Bots pause between plans and return oldest first up to the new limit. Cancel my plan is under Your plan on Billing and boosts. A cancelled plan runs to the end of the paid period (digest 10.7).
- The plan asked for an offer to pause the plan. The guide has no plan pause so the email offers a lower plan instead. The guide has no plan pause (owner check, 1 November 2026).
- The guide describes a Change plan route for moving down but the owner and the app agent confirm that moving down is a cancel then a new purchase. This email follows that. Change plan is built and working for upgrades (owner, 1 November 2026).
- Automation: O05 step 3, about 4 days after step 2. Last email. Dormant removal ends the sequence.

---

## O06-2 - Why did you cancel (day 2, Cancelled)

**Subject:** [Botterverse] One question about your cancellation

**Body:**

Hi {{contact.first_name}},

Your plan ended two days ago.

We'd like to know why because your answer helps us decide what to fix.

**One question**

What was the main reason? A reply of a few words is plenty. These are the usual ones:

1. The plan cost more than I needed
2. I wasn't using it enough
3. A feature I needed was missing
4. Something didn't work as I expected
5. I'm moving to a different plan
6. Something else

**Task for today**

Reply to this email with the number or a line of your own. If something didn't work as you expected, you can also open the [Support](https://{{domain}}/support/) page and we'll look at it with you.

Thank you,

Your Botter Support Team

P.S. Next up: in a few weeks a short note on what is waiting in your account.

**Notes**
- Facts: Support page link from the brief. No product claims.
- Confirmed 3 November 2026: replies go to the support desk (support@botterverse.com), so the sync sets the FluentCRM reply-to address to it.
- Automation: O06 step 1, 2 days after Plan Ended. Skips if a plan tag has been applied. The app sets Plan Ended only when the member cancelled and the plan has ended.

---

## O06-3 - Your account is still here (day 30, Cancelled)

**Subject:** [Botterverse] Your account is still here

**Body:**

Hi {{contact.first_name}},

A few weeks ago, we asked why you cancelled.

Today is a short update. Your Botters Lab account is still open and nothing in it has been removed.

**What's in your account**

Your bots are paused with their instructions and knowledge files kept. Remaining boosts from any Botter Booster Packs you bought are untouched.

We keep adding to the Botters Lab. The [help articles](https://{{domain}}/docs/) describe each feature as it stands today.

**If you'd like to come back**

Buy a plan on the [Pricing](https://{{domain}}/pricing/) page using the same email address as your Botters Lab account. Your bots come back when the plan starts, oldest first, up to the new plan's bot limit.

**Task for today**

Sign in at https://lab.{{domain}}/login and look at your [Bot list](https://lab.{{domain}}/bots) so you know what's waiting. There's nothing else to do unless you want to.

All the best,

Your Botter Support Team

P.S. Next up: a reminder of what your account still holds.

**Notes**
- Facts: digest 10.7 (account stays open and bots pause and data kept and bought boosts stay). Bots return oldest first up to the new limit (`plan-ending-emails.md`).
- The text stays neutral and points to the help articles (owner decision 2 November 2026).
- Automation: O06 step 3, about 30 days after the tag. Skips if a plan tag has been applied.

---

## O06-4 - Your bots are still saved (day 60, Cancelled)

**Subject:** [Botterverse] A reminder of what your account holds

**Body:**

Hi {{contact.first_name}},

A month ago, we told you your account is still here.

This is a reminder of what it holds and how to take your work with you if you want to.

**Still in your account**

Your bots are paused with their data kept. If you built bots on knowledge files, those files are still attached.

**Taking your work with you**

Open [Settings](https://lab.{{domain}}/settings) and find Data export. Press Request export and we'll email you when it's ready. The zip holds your bots with their instructions, knowledge files and your conversations.

**Coming back**

Buy a plan on the [Pricing](https://{{domain}}/pricing/) page using the same email address as your Botters Lab account. Your bots start again from there.

**Task for today**

Sign in once and check that your bots are as you left them. Request your export if you haven't already.

Best wishes,

Your Botter Support Team

P.S. Next up: one last note from us.

**Notes**
- Facts: Data export contents (digest 12.4). Left out of the export: instructions and files of a bought bot while its refund window is open. The email says "your bots" and not "every bot".
- Automation: O06 step 4, about 60 days after the tag. Skips if a plan tag has been applied.

---

## O06-5 - A last note (day 90, Cancelled)

**Subject:** [Botterverse] A last note from us

**Body:**

Hi {{contact.first_name}},

This is the last email in this series. We won't keep writing about your cancelled plan.

Your account stays open and your bots stay saved. If you ever want to build again, buy a plan on the [Pricing](https://{{domain}}/pricing/) page with the same email address as your Botters Lab account, then sign in at https://lab.{{domain}}/login

If something stopped you from staying and we could have helped, the [Feedback](https://{{domain}}/feedback/) page is open any time. We read every email.

Thank you for being a Botter,

Your Botter Support Team

**Notes**
- Facts: account stays open after the plan ends (digest 10.7).
- Final email: no Next up loop. The Cancelled tag stays so later campaigns can reach the member.
- Confirmed 3 November 2026: "We read every email" is true.
- Automation: O06 step 5, about 90 days after the tag. Skips if a plan tag has been applied. Sequence ends.

---

## O07-1 - Refund confirmed (event, tag Refunded)

**Subject:** [Botterverse] Your refund

**Body:**

Hi {{contact.first_name}},

We've refunded your payment. The money goes back to the card you paid with. Your bank may take a few days to show it.

Your Botters Lab account stays open. If your plan has ended your bots are paused with their data kept and you can request an export from [Settings](https://lab.{{domain}}/settings).

We'd value one thing in return. If you tell us what didn't work for you, we can fix it. The [Feedback](https://{{domain}}/feedback/) page is the place for that. If you'd like to talk to someone, open the [Support](https://{{domain}}/support/) page.

You're welcome back whenever it suits you,

Your Botter Support Team

**Notes**
- Facts: refunds go back to the card (digest 10.7 for annual). The account stays open after a plan ends and bots pause with data kept.
- Confirmed by the app agent (answer 46): the app states no refund time of its own and the buyer emails say the bank may take a few days. A staff refund in full of the current period's plan payment ends the plan at once. A part refund or a refund of an older payment leaves it running. The text says "if your plan has ended" and stays true.
- Automation: O07 single email. Tag Refunded applied by the refund trigger. No exit step. Event email so it sends even during a welcome sequence.

---

## O08-1 - You're in (day 0, new affiliates, Novice Botter and up)

**Subject:** [Botterverse] You're in the affiliate programme

**Body:**

Hi {{contact.first_name}},

You've joined the affiliate programme. Here's where your link lives and how it works.

**Your link**

Open [Affiliates](https://lab.{{domain}}/affiliates) at the foot of the menu in the Botters Lab. Your link ends in your username and you share it wherever you like.

**What earns commission**

You earn commission on the subscription payments of members who joined through your link. That covers their first payment and every renewal. Commission is currently 50% on the first payment and 20% on later ones, worked out on the part of the payment after tax. Botter Booster Packs earn nothing.

You also earn on Bot Market sales made through your listing links. That's covered in a later email.

Each commission waits for the refund period. After that Botterverse reviews it and adds it to your earnings where it can be withdrawn.

**The rules**

Referring yourself breaks the terms. The programme has a single level, so only people you refer directly count.

If you move to Apprentice Botter or your plan ends, you leave the programme and the commission you've earned stays yours. Moving back to Novice Botter or above restores it.

**Task for today**

Open Affiliates and press Join the affiliate programme if you haven't already. Then copy Your link.

Welcome to the programme,

Your Botter Support Team

P.S. Next up: what to say when you share your link. Plain wording you can adapt.

**Notes**
- Facts: digest chapter 11 (11.1 to 11.4). Self-referral and single level and leaving the programme.
- The affiliate software is never named.
- Confirmed by the app agent (answer 43): the app pays 50% of a member's first ever subscription payment and 20% of every later payment, on the part after tax. Botter Booster Packs and order bumps earn nothing. Staff set both rates and press Pay commissions after the refund period. The text gives no figures.
- The rates are stated as "currently" because staff set them (owner approved the wording on 2 November 2026).
- Automation: O08 step 1, trigger is the affiliate-joined event. Novice Botter and above only. Test the tier tag before starting.

---

## O08-2 - What to say (day 2, affiliates)

**Subject:** [Botterverse] What to say when you share it

**Body:**

Hi {{contact.first_name}},

Yesterday, you found Your link in [Affiliates](https://lab.{{domain}}/affiliates).

Today is about what to say with it. Plain wording works better than a sales pitch.

**Where to share**

Your email list, social posts and your own website all work. The powered-by tag on your bots also carries your link. It earns commission once you've joined the programme.

**What to say**

Say what you built and how you use it. Then add your link. Please don't promise anyone an income or a result because nobody can know what a bot will earn.

Here's a starting point:

> I built [WHAT YOUR BOT DOES] with Botterverse. You choose the AI model and share the bot by link or on your own website. If you'd like to try it, here is my link: [YOUR LINK]

One tip: ask people to sign up with the email address they intend to use because that helps the referral reach you.

**Task for today**

Fill in the blanks and post it somewhere you already post.

Speak soon,

Your Botter Support Team

P.S. Next up: ready-made material in the Affiliates page so you don't start from nothing.

**Notes**
- Facts: ways to share and the powered-by tag earning only after joining (digest 11.2 and 4.6). Buyers should use the email they sign up with (11.2).
- No income claim. The copy block makes no claim.
- Automation: O08 step 2, 2 days after step 1.

---

## O08-3 - Swipe material (day 4, affiliates)

**Subject:** [Botterverse] Ready-made material for sharing

**Body:**

Hi {{contact.first_name}},

Last time, we covered plain wording for sharing your link.

Today, you have a shortcut. The [Affiliates](https://lab.{{domain}}/affiliates) page of the Botters Lab holds swipe material you can copy and adapt.

**How to use it**

Open Affiliates in the menu to find the swipe material. Pick one piece that fits the people you talk to.

Put it in your own words and replace any blank with Your link. Check that it makes no promise of income or results before you post it.

**Task for today**

Choose one piece of swipe material and send it to one audience you already have.

See you soon,

Your Botter Support Team

P.S. Next up: a second way to earn commission, by promoting a Bot Market listing.

**Notes**
- Facts: Affiliates page is part of the Botters Lab (digest 1.5).
- Confirmed 3 November 2026: the swipe material is on the Affiliates page in the Botters Lab. It can hold text or images or both, so the email says "swipe material" only.
- Automation: O08 step 3, 2 days after step 2.

---

## O08-4 - Promote a Bot Market listing (day 7, affiliates)

**Subject:** [Botterverse] A second way to earn commission

**Body:**

Hi {{contact.first_name}},

Last time, we pointed you to the swipe material in [Affiliates](https://lab.{{domain}}/affiliates).

Today is about a second link. You can also promote a listing on the Bot Market and earn commission when someone buys through it.

**How to promote a listing**

Open [Browse](https://lab.{{domain}}/market) and find a listing you'd happily recommend. Press Promote and copy the link.

The last link clicked counts within the affiliate period. Sellers set an Affiliate share on each listing and it's taken from what's left after the platform fee.

The Bot Market is for members only, so share the link with people who might build or buy bots. Affiliates shows Promoted listings with Sales and Commission earned.

The [Bot Market help articles](https://{{domain}}/docs/browse-and-buy/) explain the rest.

**Task for today**

Pick one listing and share its link with a person who'd find it useful.

See you soon,

Your Botter Support Team

P.S. Next up: what to check if your first referral hasn't arrived yet.

**Notes**
- Facts: digest 11.3 (Promote and last click and Promoted listings and Affiliate share taken after the platform fee). The Bot Market is not a public store (1.2). Promoting needs Novice Botter and above. Setting the share needs Pro Botter and above.
- Commission on listing sales also waits for the refund period (digest 7.2).
- Automation: O08 step 4, 3 days after step 3.

---

## O08-5 - Your first referral nudge (day 14, affiliates)

**Subject:** [Botterverse] If your first referral hasn't arrived

**Body:**

Hi {{contact.first_name}},

A week ago, we showed you how to promote a Bot Market listing.

Today is a check on how your link is doing and what to try if nothing has happened yet.

**Where to look**

Open [Affiliates](https://lab.{{domain}}/affiliates) and find Referrals. It lists each referral with a date and status. The Date range control narrows it.

Subscription commissions shows each commission with its status such as Pending, Paid or Under review. Pending means it's waiting for the refund period.

**If nothing has arrived yet**

That's normal at the start. Put your link somewhere that stays visible such as your website or your email footer, so it keeps working after you post.

Share it once in a place you haven't tried. Ask people to sign up with the email address they plan to use.

**Task for today**

Check Referrals and share your link in one new place.

Keep going,

Your Botter Support Team

P.S. Next up: what happens when your first commission lands.

**Notes**
- Facts: Referrals and Date range and Subscription commissions statuses (digest 11.2 and 11.4). Pending waits for the refund period.
- No income claim and no promise that a referral will arrive.
- Automation: O08 step 5, 7 days after step 4.

---

## O08-6 - Your first commission (event, tag First Commission, affiliates)

**Subject:** [Botterverse] Your first commission

**Body:**

Hi {{contact.first_name}},

Your first commission is now in your earnings. Thank you for sharing the Botterverse with people.

**Where to find it**

Open [Payouts](https://lab.{{domain}}/payouts) and look at Your earnings. The amount shows under Available to withdraw because subscription commissions are added only after the refund period. A commission is taken back if the payment is later refunded or lost to a chargeback.

**Withdrawing**

Withdrawals are requested in the Botters Lab. If you haven't yet, press Set up payouts on the Payouts page and finish the form. We never see your bank details.

Once your earnings reach the smallest withdrawal shown on Payouts, the Withdraw card lets you choose an amount and press Show the fees. Some withdrawals are sent on set days or by hand, so each one shows its status.

**Task for today**

Open Payouts and check that your payout set-up is complete.

Well done,

Your Botter Support Team

**Notes**
- Facts: digest 7.2 and 7.4 and 7.5 and 11.4. Withdrawals are requested in the Botters Lab. No "daily payouts" wording. No amount stated.
- The $50 minimum is left out on purpose: this email's subject is the first commission and not withdrawals. The text points to the figure shown on Payouts.
- Automation: O08 step 6, sent when the app applies the tag First Commission [proposed event, not yet confirmed to exist]. Last email, no loop.

---

## O09-1 - How is selling going (day 3 after First Sale, sellers)

**Subject:** [Botterverse] How is selling going?

**Body:**

Hi {{contact.first_name}},

Congratulations again on your first sale.

We'd like to hear how it's going because Botters who sell can tell us things nobody else can.

**Three questions**

What made you decide to sell a bot? What was the hardest part? What one thing would you change in the Botters Lab?

You can answer in a line each. If you've found a bug or have an idea for a feature, the [Feedback](https://{{domain}}/feedback/) page takes both.

**Task for today**

Reply to this email with a few lines on your answers.

Thank you,

Your Botter Support Team

**Notes**
- Facts: Feedback page takes Bug report or Feature suggestion (digest 13.2).
- Replies go to the reply-to mailbox set in FluentCRM, so that mailbox must be one a person reads. No quotes are asked for (owner decision 2 November 2026).
- Automation: O09 step 1, about 3 days after First Sale is applied so it doesn't meet O10 on the same day. Exit when the member replies. Sequence ends.

---

## O10-1 - First sale (event, tag First Sale)

**Subject:** [Botterverse] Your first sale

**Body:**

Hi {{contact.first_name}},

Congratulations on your first sale. It now shows on your [Sales](https://lab.{{domain}}/sales) page.

**What you'll see**

Sales lists the bot, the price, the platform fee and Your share. The status may read Pending at first.

Buyers can ask for a refund within the refund period, which is 14 days at most. On Bot Market sales the Botter Support Team decides each request. Your share is held for 21 days before you can withdraw it. [Payouts](https://lab.{{domain}}/payouts) shows each held amount with the date it becomes available under Withdrawable from.

**Withdrawing**

Withdrawals are requested in the Botters Lab. Open Payouts and press Set up payouts if you haven't yet. The minimum withdrawal is $50. When an amount is available, press Withdraw and follow the steps. Some withdrawals are sent on set days or by hand, so each one shows its status.

**Task for today**

Open Sales and look at the sale. Then open Payouts and begin your payout set-up so it's ready when the money is.

Well done,

Your Botter Support Team

**Notes**
- Facts: digest 7.1 to 7.5. Withdrawals are requested in the Botters Lab. No daily payouts wording and no income claim.
- Confirmed by the app agent (answer 47): the refund period (14 days) and the holdback (21 days) are staff settings with those defaults. Both apply to paywall sales, top-ups and Bot Market sales. A paywall guarantee has its own length of 7 or 14 days, up to the refund period, so the text says "at most". Bot Market refunds are decided by the Botter Support Team and the seller can only comment.
- The $50 minimum is stated in the Withdrawing paragraph (owner decision 2 November 2026).
- Automation: O10 single email, tag First Sale. Sends at once. Event email.

---

## O11-1 - Listing tips (day 0, tag Bot Market Seller)

**Subject:** [Botters Lab] Tips for your Bot Market listing

**Body:**

Hi {{contact.first_name}},

Your bot is live on the Bot Market. Here are four things that help a listing do its job.

**Four tips**

1. Use Suggest a description and tags on the listing form. It costs no boosts and gives you a clear first draft to edit.
2. Pick the sale type with care. Transfer moves ownership and sells once. Multi-sell gives each buyer their own copy and you keep the original.
3. Check your licence terms under [Settings](https://lab.{{domain}}/settings). Copy our template gives you a starting point and Notify my buyers tells current holders when the terms change.
4. Use the On the listing switches. Show verified sales and conversations is one buyers pay attention to.

The [Bot Market help articles](https://{{domain}}/docs/browse-and-buy/) cover each of these step by step.

**Task for today**

Open [My listings](https://lab.{{domain}}/listings) and read your listing as a buyer would. Edit the description if anything is unclear.

Good luck with it,

Your Botter Support Team

P.S. Next up: how reviews and badges build trust in your listing.

**Notes**
- Facts: digest 6.2 and 6.5 and 6.7. Listing needs Pro Botter and above. Statuses Draft and In review and Live.
- The email assumes the member is a Pro Botter or above because only they can list.
- Confirmed by the app agent (answer 48): the tag fires when the member's first ever listing goes Live and never at submission. The opening line says the bot is live. A second listing does not fire it again.
- Automation: O11 step 1, tag Bot Market Seller. Waits while Welcome Active or Upgrade Active is on the contact.

---

## O11-2 - Reviews and badges (day 5, Bot Market sellers)

**Subject:** [Botters Lab] Reviews and badges

**Body:**

Hi {{contact.first_name}},

Last time, we covered tips for your listing.

Buyers look for signs of trust, so today is about reviews and badges.

**Reviews**

Buyers who bought your bot can leave a review marked Verified purchase. Open [Sales](https://lab.{{domain}}/sales), use Reply to answer a review and press Post the reply when you're done. Use Edit the reply if you want to change it.

**Badges**

Your profile page [My profile](https://lab.{{domain}}/market/profile) shows badges. Verified Seller appears once you've been paid out or set up payouts. 10 Sales appears after ten verified sales and Top Rated appears while you have enough Bot Market reviews with a high enough average (currently ten reviews averaging 4.5 stars or more).

Badges show only while their condition holds, so a badge can disappear if it no longer applies.

**Task for today**

Open My profile and check that it reads the way you'd like a buyer to see it.

Best wishes,

Your Botter Support Team

**Notes**
- Facts: digest 6.3 and 6.8. Verified purchase reviews and replies and badges. The Founder badge is left out as agreed.
- Confirmed by the app agent (answer 17): Top Rated needs at least 10 published Bot Market reviews with an average of at least 4.50 stars. Both are staff settings so the text says "currently".
- Automation: O11 step 2, 5 days after step 1.

---

## O12-1 - Open your bought bot and read the licence (day 0, tag Bot Market Buyer)

**Subject:** [Botters Lab] Your new bot - what to check first

**Body:**

Hi {{contact.first_name}},

Your new bot is in [Bot list](https://lab.{{domain}}/bots) marked Purchased. It runs on your own boosts.

**Before you use it with customers**

Open [Bots I bought](https://lab.{{domain}}/my-bots) and select Licence terms. The licence says what you can do with the bot such as resell it or use it for yourself.

Integrations arrive switched off and their passwords and keys never move. If the bot uses one, enter your own credentials and switch it on. Then confirm the declarations.

Preview the bot before anyone else sees it. Preview uses your boosts.

**If it doesn't work**

If the bot doesn't work or isn't as described, press Request a refund and tell us why. The Botter Support Team decides. Putting the bot on sale or making it Public ends the right to a refund.

The [Bot Market help articles](https://{{domain}}/docs/browse-and-buy/) cover each step.

**Task for today**

Open Licence terms and read them. Then Preview the bot with one question.

Enjoy it,

Your Botter Support Team

P.S. Next up: a review and why it matters to the next buyer.

**Notes**
- Facts: digest 6.3 and 6.4. Licence terms and integrations off on arrival and refund route and decision by staff and ending of the right on sale or Public.
- Refund wording follows the digest. No period is stated.
- Automation: O12 step 1, tag Bot Market Buyer.

---

## O12-2 - Leave a review (day 7, Bot Market buyers)

**Subject:** [Botters Lab] Your review helps the next buyer

**Body:**

Hi {{contact.first_name}},

Last time, we covered what to check when you open a bought bot.

If you've used it for a while, a review now helps the next person decide.

**Leaving a review**

Open [Bots I bought](https://lab.{{domain}}/my-bots) and select Leave a review. Choose Your rating from 1 to 5 and add Your review if you like. The text is optional. Press Publish the review.

Your review shows with a Verified purchase mark, so it carries weight. An honest review helps buyers and sellers alike.

**Task for today**

Leave a rating. A line or two about what the bot did for you is plenty.

Thank you,

Your Botter Support Team

**Notes**
- Facts: digest 6.3 and 6.4. Leave a review and Your rating and Your review (optional) and Publish the review and Verified purchase.
- Nothing is promised about the seller's response.
- Automation: O12 step 2, 7 days after step 1.

---

## O13-1 - Check your imported bot (event, tag Migrated From GPT)

**Subject:** [Botters Lab] Check your imported bot

**Body:**

Hi {{contact.first_name}},

You've brought a bot across from a GPT. Before anyone uses it, check how it behaves here.

**Test it in Preview**

Open the bot from [Bot list](https://lab.{{domain}}/bots) and use Preview. Ask the questions your GPT handled well and a few it should refuse. Preview uses your boosts.

The import is paste-only and it doesn't connect to your old account. The Review step listed what was Not carried across, so check that list for anything you need to rebuild.

**Rebuild actions as integrations**

If your GPT called another service, Integrations on Novice Botter and above lets you do the same. Save the bot first then press Add an integration. The endpoint address must start with https.

Integrations aren't part of Apprentice Botter.

**Task for today**

Preview your bot with five questions and compare the answers with what you expected.

Good luck,

Your Botter Support Team

**Notes**
- Facts: digest 3.12 and 3.9 and 9.1. The Not carried across list and Preview and Add an integration and Novice Botter and above.
- "GPT" is used only as the type of thing imported and no competitor is named.
- Automation: O13 single email, tag Migrated From GPT. The welcome sequence already moves Import a bot to day 3 for these members.

---

## O14-1 - Auto top-up and where to change it (day 0, tag Auto Top Up)

**Subject:** [Botters Lab] Keeping your boosts topped up

**Body:**

Hi {{contact.first_name}},

Auto top-up has just added boosts to your balance. That usually means your bots are busy.

You receive an email each time it happens. Here's where to see and change it.

**Auto top-up**

Open [Billing and boosts](https://lab.{{domain}}/billing) and find Auto top-up. Top up when my boosts fall below sets the level that triggers a top-up and Top-up amount sets how much is added.

A daily cap pauses it until midnight UTC and we email you when that happens. After that, it tries again the next time your boosts are used while the balance is below your level.

If your card is declined twice, it switches off and we email you. Press Agree and switch on to turn it back on.

**Task for today**

Open Auto top-up and check that the level and the amount suit how you use your bots. Switch it on if it's off.

Best wishes,

Your Botter Support Team

P.S. Next up: a few ways to make your boosts go further.

**Notes**
- Facts: digest 10.4. Top up when my boosts fall below and Top-up amount and the daily cap and the declined card rule. No defaults or caps stated.
- Confirmed by the app agent (answers 23, 24 and 48): the tag formerly called Power User was renamed Auto Top Up on 25 October 2026 and fires on the member's first successful auto top-up only. The daily cap resets at midnight UTC and the next attempt comes from the next usage charge that leaves the balance below the level. After two declines the member presses Agree and switch on. [Exact live tag word still to be confirmed by the app agent.]
- Automation: O14 step 1, tag Auto Top Up.

---

## O14-2 - Making boosts go further (day 4, Power Users)

**Subject:** [Botters Lab] A few ways to make boosts go further

**Body:**

Hi {{contact.first_name}},

Last time, we covered auto top-up and where to change it.

Today is about using fewer boosts for the same job.

**Four ways**

1. Choose the model with care. A dearer model uses more boosts per message, so use one only where the answers need it.
2. Open the bot from [Bot list](https://lab.{{domain}}/bots) and set a Daily boost limit in Sharing and embed. At the limit, free visitors are told the bot has reached its limit for the day.
3. If you sell access, set a Message cap. Each buyer message is paid from your boosts, so the cap protects you.
4. Check Usage this month on the [Dashboard](https://lab.{{domain}}/) and the usage graph on [Billing and boosts](https://lab.{{domain}}/billing) to see which days cost most.

Uploading knowledge files and the importer use no boosts. Preview does.

**Task for today**

Pick one bot and review its Model and Daily boost limit. Save if you change either.

See you soon,

Your Botter Support Team

**Notes**
- Facts: digest 3.8 and 4.4 and 5.3 and 10.1. The Message cap needs Novice Botter and above.
- No "free boosts" wording and no pressure to buy.
- Automation: O14 step 2, 4 days after step 1.

---

## O15-1 - Plan ending soon (event, tag Plan Ending Soon)

**Subject:** [Botterverse] Your plan ends in a week

**Body:**

Hi {{contact.first_name}},

Your Botters Lab plan ends in 7 days, as you asked. Your bots keep running until then.

**Moving to a different plan?** You can buy it as soon as this one ends. We'll remind you on the day.

**Changed your mind?** Press Keep my plan on the [Billing and boosts](https://lab.{{domain}}/billing) page and nothing changes.

If you're leaving, thank you for botting with us. Your account stays here if you ever come back.

Your Botter Support Team

**Notes**
- Facts: `plan-ending-emails.md`. Fires 7 days before the plan ends. Skipped if the member cancelled later than that.
- Automation: O15 funnel for tag `Plan Ending Soon`, one email sent at once. The app removes this tag if the member presses Keep my plan. Stop the funnel when a tier tag such as `Novice Botter` is applied. Does not send for a plan that lapsed through a failed payment.

---

## O15-2 - Plan ending tomorrow (event, tag Plan Ending Tomorrow)

**Subject:** [Botterverse] Your plan ends tomorrow

**Body:**

Hi {{contact.first_name}},

Your plan ends tomorrow. The [Billing and boosts](https://lab.{{domain}}/billing) page shows the exact time.

**Moving to a different plan?** Set aside a moment tomorrow to buy it as soon as this one ends. When no plan is active, your bots pause and their pages show as unavailable, so buying straight away keeps them running for your visitors.

Use the same email address as your Botters Lab account, so your new plan reaches it. If you have a Founders coupon, press Open the Customer Area on your Billing page first so you're signed in to your billing account. The checkout then applies it for you. The [Pricing](https://{{domain}}/pricing/) page lists the plans.

**Changed your mind?** Press Keep my plan on the Billing and boosts page.

Your Botter Support Team

**Notes**
- Facts: `plan-ending-emails.md`. No set time of day is given.
- Automation: O15 funnel for tag `Plan Ending Tomorrow`, one email sent at once. Tag removed by the app on Keep my plan. Stop the funnel on a tier tag.

---

## O15-3 - Plan ends today (event, tag Plan Ends Today)

**Subject:** [Botterverse] Your plan ends today

**Body:**

Hi {{contact.first_name}},

Today's the day. Your plan ends later today at the time shown on the [Billing and boosts](https://lab.{{domain}}/billing) page. We'll email you again the moment it has ended, so you can buy your new plan straight away.

**Have this ready:** the email address of your Botters Lab account. If you have a Founders coupon, the checkout applies it for you.

**Changed your mind?** You can still press Keep my plan on the Billing and boosts page until it ends.

Your Botter Support Team

**Notes**
- Facts: `plan-ending-emails.md`. Fires early on the day the plan ends. Only for a member who pressed Cancel and never for a lapse through a failed payment.
- Automation: O15 funnel for tag `Plan Ends Today`, one email sent at once. Tag removed on Keep my plan. Stop the funnel on a tier tag.

---

## O15-4 - Plan ended (event, tag Plan Ended)

**Subject:** [Botterverse] Your plan has ended - pick your new one now

**Body:**

Hi {{contact.first_name}},

Your plan has ended, so you can buy your new one now. Your bots are paused until you do. They come back as soon as your new plan starts, oldest first, up to your new plan's bot limit.

**[See the plans](https://{{domain}}/pricing/)**

Use the same email address as your Botters Lab account. If you have a Founders coupon, press Open the Customer Area on your Billing page first so you're signed in to your billing account. The checkout then applies it for you.

Remaining boosts from any Botter Booster Packs you bought are untouched. Included boosts you had not used have been reset.

If you're on an annual plan and were due a refund for whole unused months, it goes back to your card within a day.

If you're leaving, thank you. Your account stays here if you ever come back.

Your Botter Support Team

**Notes**
- Facts: `plan-ending-emails.md`. Fires the moment the plan has ended and also on that day. Only for a member who pressed Cancel.
- Never says a refund has been paid: it goes in the next daily run after the plan ends. Says "within a day" as the source does.
- App agent confirmed 1 November 2026: a member who pressed Cancel receives this email and not the app's `plan.ended`. Every other ending (failed payment or FluentCart's own Cancel) receives `plan.ended` and no tag. So this email must carry what `plan.ended` says: bots paused until a plan is bought, bought boosts stay and unused included boosts are reset. The app sends no paused bot count through the tag so none is given here.
- Automation: O15 funnel for tag `Plan Ended`, one email sent at once. The app removes all four tags once the member has a plan again so a later cancellation sends the emails again. Stop the funnel on a tier tag.
