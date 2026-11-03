# Soap opera format and welcome loop map

Draft 1 for review. This replaces the storyselling approach in `retired\03-storyselling-plan.md`, which is retired. The sample emails in `retired\10-sample-emails-v1.md` are out of date and will be rewritten after you approve this format. Nothing is set up in FluentCRM.

## 1. The format

Every email in the welcome and upgrade sequences has four parts and nothing else:

| Part | Length | Job |
|---|---|---|
| Recap | One or two sentences | Remind them what the last email covered and what they should have done |
| New topic | One or two sentences | Say what today's email is for and why it matters now |
| Content | The body | The how-to. Numbered steps. A copy-and-paste block where useful |
| Open loop | One short sentence | Name tomorrow's topic as a question or a promise without giving the answer |

Rules:
- No preheader text. No avatars. No stories or invented characters.
- The open loop is written first and the next email is written to pay it off. The loop map below is the plan.
- The recap line of an email repeats the previous loop's wording so the chain feels continuous.
- One bot and one task per email.
- Where a track branches the loop must name something the member can actually do on their plan. A loop that points to a feature they do not have is never used.
- Keep the Botterverse vocabulary gradual, as agreed.
- Subjects carry a prefix: [Botterverse] for general emails and [Botter's Lab] for Botter's Lab emails.
- Subject lines can echo the open loop of the previous email.
- Sign-off is the same short line each time.
- Tone: friendly but not overly so. Botterverse words where they fit and no more. These are info emails and not sales emails.
- Paragraphs hold one or two sentences. No run of short one-line sentences.
- Order: easy and quick features first then the advanced ones that take longer. A few emails tease higher tier features.
- Every email describes the feature and what it does for the member then has a Task for today sub heading with a sentence or two.
- The open loop is a P.S. line.
- Sample emails are in 10-sample-emails-v2.md. They are approved for tone and format.
- Contractions by preference. Lists read a, b and c with no repeated and.
- Signature on its own line: Your Botter Support Team.
- The P.S. starts with Next up.
- Page names match the Botter's Lab menu.
- Say reset and not expire for included credits.

Example of the last line of S03: "Tomorrow your bot receives a shelf in the Botterverse and its first words. Both take two minutes."

## 2. Email 1 (S01)

Purpose: make them feel good about the purchase and explain what happens now. Then introduce the first topic and open the first loop. It is the longest email in the sequence.

Order:
1. "Congratulations on becoming our latest Botter." A warm opening of two or three sentences.
2. What has just arrived. Every plan: a Botter's Lab account for building and sharing and running bots. Included credits each month (annual plans receive a new set every month). Each message a bot sends uses credits. That includes the person chatting and your own testing. Unused included credits expire at the next renewal or plan change. Credits you buy never expire. Help articles and Feedback and the support portal, with links. Support needs its own account. The same username and password work for both.
3. What your plan adds. A link to the Pricing page and nothing more. Prices and limits stay on the Pricing page because they can change.
4. What happens now, in order:
   1. Create your Botter's Lab account with the email you bought with. That is how the plan reaches your account.
   2. Confirm your email. Your plan is then set up.
   3. Set your billing password from the link in your purchase receipt.
   4. Create your first bot (link to the help article).
   5. Preview it then share it by link or embed.
5. Novice and above: join the affiliate programme from the Affiliates page in the Botter's Lab. That is covered in a later email so S01 only mentions it once.
6. Open loop to S02.

The Founders coupon note ("keep your code for upgrades") goes in a Founder-only block. It shows only to contacts with the Founder tag. The tag may arrive after S01 sends so the same note is repeated in S02 for founders.

### The trigger and the plan problem

The coding agent notes that tier tags reach FluentCRM only after the account is created and confirmed. So S01 must start from the FluentCart purchase and not from a tier tag. That is already the plan: automation A0 starts on Subscription Activated.

Consequence: S01 cannot rely on a tier tag. It is plan-neutral and links to the Pricing page for "what your plan adds". Plan-specific content starts at S02 and later and uses a Check Condition block. If the tag has not arrived by then the neutral version sends. To confirm: whether the FluentCart trigger can filter by plan variation. If it can S01 could name the plan. The plugin check found it filters by product or category only.

## 3. Loop map for the spine (S01 to S30)

Each row: the loop that closes the email (and so the recap that opens the next). Branch points are marked.

| Email | Topic | Closing open loop |
|---|---|---|
| S01 | Welcome and what happens now | "Next, the key to the Lab. One sign-in and your dashboard opens. Do you know the one button that keeps you signed in?" |
| S02 | Sign in and tour the dashboard | "Tomorrow you meet your first bot. It takes three blanks and about ten minutes." |
| S03 | Build bot one: Details and Instructions | "Your bot is built but nobody can find it. Tomorrow it receives a shelf and its first words." |
| S04 | Category and conversation starters | "A bot that knows nothing is just chat. Tomorrow you feed it your own files." |
| S05 | Knowledge files | "Same bot. Different brain. Tomorrow you choose the model it thinks with." |
| S06 | Pick a model | "Before anyone else sees it you should try to break it. Tomorrow's test has one trick question." |
| S07 | Preview and test | "Your bot is ready. Tomorrow it leaves Personal and goes Public." |
| S08 | Go Public | "Public means it has an address. Tomorrow you send it to your first real visitor." |
| S09 | Share the link | "A link is good. Your own website is better. Tomorrow your bot moves in." |
| S10 | Embed on your website | "Your bot is working and so is something else: credits. Tomorrow we look at what fuels it." |
| S11 | Credits and the credits pill | "Credits can run out at a bad time. Tomorrow you make sure they do not." |
| S12 | Auto top-up and promo codes | **Branch.** Novice and up: "Your bot works. Tomorrow you put a price on it." Apprentice: "Tomorrow you meet the first thing your next plan could add." |
| S13 | Paywall and one-time price | "A paywall without limits can cost you. Tomorrow you cap it and add a promise." |
| S14 | Message cap and guarantee | "Now it can earn. Who tells people? Tomorrow you meet the affiliate programme." |
| S15 | Affiliate programme and link | "Your bot can talk to people. Tomorrow it talks to your other tools." |
| S16 | Integrations | "Is it working? Tomorrow you read the numbers." |
| S17 | Basic analytics | **Branch.** Expert and up: "There is more behind that panel. Tomorrow, the busy hours." Novice: first upgrade teaser, see `02`. |
| S18 | Busy hours and benchmarks | "Numbers tell you when. Tomorrow your bot tells you what it did not know." |
| S19 | Conversation insights | "Now control who comes through the door. Tomorrow, the two settings that decide that." |
| S20 | Daily limit and sign-up requirement | **Branch.** Pro and up: "Your bot works. Tomorrow it dresses for the occasion." Expert: upgrade teaser, see `02`. |
| S21 | Bot styles | "Tomorrow your bot goes on sale to other Botters." |
| S22 | Bot Market listing | "A listing brings strangers. Tomorrow they become contacts in your own CRM." |
| S23 | CRM connector | "Contacts need labels. Tomorrow your bot tags them by interest." |
| S24 | Interest tags and customer download | **Branch.** Master: "You have been guessing. Tomorrow you stop." Pro: "Tomorrow, how sellers earn trust." |
| S25 | A/B tests | "A test needs a result. Tomorrow you read it." |
| S26 | Advanced analytics | "Reading a result is half the job. Tomorrow you crown a winner." |
| S27 | Choose a winner | "Tomorrow, how to be a seller people trust." |
| S28 | Seller profile and badges | "Your Lab is busy. Tomorrow a short tidy-up." |
| S29 | Settings and export | "One day to go. Tomorrow you are a proper Botter." |
| S30 | Wrap-up and help | Final loop: points to the upgrade sequence for their tier. Master has a plain sign-off for Master. |

The last line of each branch email sends the loop that matches the member's tier. A Check Condition on the tier tag picks it.

## 4. What changes in the other plans

- `01-welcome-sequence-plan-v3.md`: the structure stands. Rewrite the bodies to the four-part format. S01 follows section 2 here.
- `02-upgrade-sequences-plan.md`: the ten-email sequences need their own loop map (UN01 to UM10). The story emails (UN03 and UN08 and UE02 and UE10 and UP03 and UP10 and UM03 and UM06) become ordinary how-to emails. The "show not tell" examples stay and become the content part.
- `retired\03-storyselling-plan.md`: retired.
- `retired\10-sample-emails-v1.md`: retired. New samples will follow the format here: S01 and S08 and U1 (the Novice upgrade teaser).
- Tag logic and automations are unchanged. The loops are plain text inside each email.

## 5. Decisions

1. The loop sits in a P.S. line.
2. Subject line examples are in the sample file for the owner to choose a style.
3. S01 is longer than the rest. It says what is needed and stops.
4. The Founder note appears in S01 only. Open: the Founder tag may not exist when S01 sends. See the sample notes.
