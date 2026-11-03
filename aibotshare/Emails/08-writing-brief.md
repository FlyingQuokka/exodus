# Email writing brief

Every agent writing emails for Botterverse reads this file first. It holds the rules. The approved voice is in `10-sample-emails-v2.md` (S01 and S02 and S03). Match it.

Nothing is built in WordPress or FluentCRM. You write text files only. Never read or edit anything outside `E:\Projects\Genesis\Exodus\aibotshare\`. Write only the files you are assigned in `Emails\build\`. Do not edit any other file.

## 1. Sources of truth

| Need | Read |
|---|---|
| What the product does (labels and rules and tiers) | `Docos\member-guide-digest.md` (labels in bold are exact). The digest is a summary of the member guide. If the digest does not say it do not claim it |
| The format | `07-soap-opera-format-and-loop-map.md` |
| The voice | `10-sample-emails-v2.md` |
| Your sequence | The plan file named in your assignment |
| Tags and rules for sending | `00-strategy-one-list-and-tags.md` |
| Brand constraints | `Docos\theme-spec-v1.md` section 8 (links) and this file |

Do not read anything in the `retired` folder. It holds the retired files.

## 2. Writing rules (hard rules - they apply to every word you write)

1. British English spelling (organise and colour and licence as a noun and so on).
2. Never write a comma before the word "and" or the word "or". Not in a list and not between clauses. Lists read "a, b and c". Never write "a and b and c".
3. Hyphens only. Never an em dash or an en dash.
4. Never use the word "get" in any form. Use have or become or receive or find or reach.
5. Contractions by preference (it's and you'll and don't and that's).
6. Friendly but not overly so. Plain words. No flowery language. Do not sound like an AI. No exclamation marks except where the sample voice would use one (almost never).
7. Paragraphs hold one or two sentences. Never write a run of short one-line sentences. These are information emails and not sales emails.
8. Botterverse vocabulary where it fits and no more. Botter and Botter's Lab are normal. "The Botterverse" (with the article) is the community and place. "Botterverse" with no article is the company. Do not overdo it.
9. No opening platitude. Start the recap straight away.

## 3. Brand and fact rules

- The brand is Botterverse. The old name never appears.
- Never mention: prices or plan limits or credit amounts (link to the Pricing page instead), annual plans, the Founders offer (except where your assignment says so), the sixth tier, the EU as a market, named competitors, testimonials or invented customers or stories, income claims or earnings promises, "daily payouts", the affiliate software by name, the Founder badge.
- Say "reset" for included credits at renewal and not "expire". Credits the member buys never expire.
- Keep the $50 minimum withdrawal and the 14-day refund and 21-day holdback only in event or sequence emails whose subject is withdrawals or refunds.
- The customer list for Pro and above carries the consent condition: only customers who ticked the box are included. Never say "all your customers".
- Priority support starts at Pro.
- The cheapest tier is Apprentice Botter. The tiers in order are Apprentice Botter and Novice Botter and Expert Botter and Pro Botter and Master Botter. Never imply a member has a feature their tier doesn't. Use the digest to check each feature's tier.
- Page names must match the Botter's Lab menu: Dashboard and Bot list and Create a bot and Import a bot and Analytics and A/B tests and Bot styles and Browse and Bots I bought and My listings and My profile and Sales and Payouts and Settings and Support and Help and Feedback and Affiliates. Use the guide's exact labels for buttons and fields and section names.
- If you are unsure of a fact write `[CONFIRM: what is unclear]` in the email's Notes and keep the email text neutral. Never invent a number or a feature or a button label.

## 4. Links and merge codes

- Never type a domain. The base domain token is `{{domain}}`.
- Botter's Lab sign-in: `https://lab.{{domain}}/login`.
- Any link to the main site in an email is absolute: `https://{{domain}}/pricing/` and `https://{{domain}}/affiliates/` and `https://{{domain}}/faq/` and `https://{{domain}}/support/` and `https://{{domain}}/feedback/`.
- Help articles: `https://{{domain}}/docs/<slug>/` using a real slug from `12-help-article-slugs.md` (for example `https://{{domain}}/docs/create-a-bot/`). Never invent a slug.
- Name: `{{contact.first_name}}`.
- Links to a place inside the Botter's Lab: see section 11. They are linked and not only described.

## 5. Subject lines

- Prefix `[Botterverse]` for general emails (purchase and billing and account and affiliate programme and anything not about using the Lab).
- Prefix `[Botter's Lab]` for emails about using a Botter's Lab feature.
- After the prefix write a short plain subject. For sequence emails prefer a subject that echoes the previous P.S. loop.
- No preheader. No avatars. No images. No stories or invented people.

## 6. Anatomy of a sequence email (welcome and upgrade and behaviour sequences)

```
**Subject:** [Botter's Lab] Subject here

Hi {{contact.first_name}},

Recap: one or two sentences saying what the last email covered. Reuse the wording of the previous P.S. loop.

New topic: one or two sentences saying what today's email is for and why it matters now.

**Heading for the content**

Describe the feature and what it can do for the member. Then the how-to as short paragraphs or a numbered list. Use a copy-and-paste block (in a quote) only where it genuinely helps.

**Task for today**

One or two sentences telling them how to do the task now.

Closing line,

Your Botter Support Team

P.S. Next up: the open loop. One sentence that names the next topic as a question or a promise without giving the answer.
```

- Closing line then the signature on its own line. Signature is `Your Botter Support Team` on every email (owner decision 2 November 2026).
- The final email in a sequence has no "Next up" loop. It ends with a plain sign-off or points to the next sequence as your assignment says.
- Easy and quick features first and advanced ones later within a sequence.
- A few emails may tease a higher tier feature: one short paragraph that shows what it does for the member and what plan it needs. Never pressure. Never a countdown. Use "show not tell" (for example describe a screen).
- Typical length 150 to 300 words. Say what is needed and stop.
- Upgrade sequences use the same anatomy. Examples for the member to use immediately are welcome (for example a copy-and-paste instruction block or an example price labelled "for example").

## 7. Anatomy of an event or behaviour email (short and not a sequence step)

Same subject and signature rules. No P.S. loop and no "Task for today" unless a task is the point. Recap is not needed. State what happened and what it means and the one next action. 60 to 150 words. Keep any wording the digest gives for the event.

## 8. File layout

Each file starts with a title and a short line saying what it covers. Then a **Loop map** table (email id and topic and the P.S. loop text) for sequences. Then each email:

```
---

## ID - Name (day N, who receives it)

**Subject:** ...

**Body:**

...

**Notes**
- Facts: the guide facts used.
- Automation: the sequence id and step and tags applied or tested.
- [CONFIRM: ...] only if needed.
```

Write the loop map first and write the emails to match it so every recap echoes the previous loop.

## 9. Self-check before you finish

Search your own files and fix every hit:
- `, and ` and `, or ` (a comma before and or or)
- an en dash or em dash
- the word get in any form (gets and getting and get)
- American spellings (color and organize and behavior and license as a noun)
- the word "expire" next to included or plan credits
- any old brand name
- any typed domain other than `{{domain}}`
- a run of three or more one-line sentences in a row

Report back: the files written and the count of emails and a short list of every [CONFIRM] and any decision you needed from the owner. Keep the report short.

## 10. Welcome sequence plan v4 changes

The welcome sequence follows `01-welcome-sequence-plan-v4.md`. Where this section and sections 1 to 9 differ for the welcome sequence this section wins. Read the plan's day-by-day table first. Its ID and Topic and Who and P.S. loop columns are the order and the loops. Write each recap to echo the previous email's P.S. loop in the plan.

**Fast start.** The aim is a working bot on day 1 for members who already have one and a working shared bot by day 3 for everyone. Each lesson is short and finished in one sitting. Do not write "one email a day for 30 days" anywhere. Day 1 has three emails.

**Day 1 timing.**
- S01 arrives at once on purchase. Its P.S. loop is the quick tour.
- T1 arrives 5 minutes after S01. Its recap can say "a few minutes ago". The member may not have created the account yet so T1 never assumes they are signed in. It says where the purchase email link is.
- T2 arrives when the account is confirmed and the tier tag arrives. If no tag arrives by the end of day 1 a fallback sends T2. The tag version may say the plan is active. The fallback version stays plan-neutral and says nothing about the account being confirmed. T2 never sends before T1.
- Day 1 is an exception to the rule of one marketing email per day. Day 2 onwards has one per day.
- T2 ends with one line for members with no bot: the next email builds one.

**Make Public.** The button and the step are spelled **Make Public** exactly as the guide spells them. Never write "go Public" or "publish" for the step. "Public" on its own describes the state of a bot (a Public bot) and is fine. The sequence runs Personal then Mode then declarations then Confirm declarations then Make Public.

**Previews for lower tiers.**
- A gated email (M1 to M6 and F1 to F6 and the Master track emails) is written once in full for the tier that has the feature. A second version is a preview for lower tiers in the same slot.
- A preview describes what the feature does by describing the screen a member or buyer sees. It labels the example as "for example". It has one short paragraph saying which plan it belongs to with a link to `https://{{domain}}/pricing/`. It has no pressure and no countdown.
- The Task for today in a preview is something the member can do on their own plan that prepares for the feature (for example write the ten questions their audience asks most and upload them as a knowledge file).
- Keep the same recap and P.S. loop as the full version so the sequence reads the same.
- Mark each version's heading with who receives it, for example `(day 9, Novice and above)` and `(day 9, preview for Apprentice)`.

**Tips.** TIP1 and TIP2 are short emails. The other tips are one paragraph inside the email the plan names in section 7 of the plan.

**Example bot emails (N1 to N6) and website bot emails (W1 to W3).**
- Each has a table of field values (Name and Description and Category and Instructions and Conversation starters and the knowledge file contents) and a Task for today.
- Everything is labelled "for example". No invented customer or result. No income claims. The bot answers only from the owner's own material.
- Say which plan is needed to sell it. Selling by paywall needs Novice Botter and above. Listing on Bot Market needs Pro Botter and above.

**New menu note.** The menu has Billing and credits in an Account group. Add it to the page names in section 3. Create a bot is the approved wording in the samples but the guide's route is Bot list then New bot. Use "Create a bot" where the sample did and add `[CONFIRM: menu entry Create a bot or New bot on Bot list]` to Notes.

**Extra self-check.** Search for "go Public" and "publish" used as a step name and for "one email a day" or "30 days".

## 11. Owner corrections after the day 1 review (31 October 2026)

These win over everything above.

**Day 1 timing.** T1 arrives 5 minutes after S01 (not 5 to 10). S01 says "in five minutes" or "shortly" about the tour.

**Link every page you send the member to.** Whenever an email tells the member to go to a page the first mention in that email is a link so they don't have to search. Later mentions in the same email are plain text. Links to Botter's Lab pages use the pattern `https://lab.{{domain}}/path` with these paths (confirmed from the app's route list on 31 October 2026). Never use any other path:

| Page | Link |
|---|---|
| Sign in | `https://lab.{{domain}}/login` |
| Dashboard | `https://lab.{{domain}}/` |
| Bot list | `https://lab.{{domain}}/bots` |
| Create a bot | `https://lab.{{domain}}/bots/create` |
| Import a bot | `https://lab.{{domain}}/bots/import` |
| Analytics | `https://lab.{{domain}}/bots/analytics` |
| A/B tests | `https://lab.{{domain}}/bots/ab-tests` |
| Bot styles | `https://lab.{{domain}}/bot-styles` |
| Browse | `https://lab.{{domain}}/market` |
| Bots I bought | `https://lab.{{domain}}/my-bots` |
| My listings | `https://lab.{{domain}}/listings` |
| My profile | `https://lab.{{domain}}/market/profile` |
| Sales | `https://lab.{{domain}}/sales` |
| Payouts | `https://lab.{{domain}}/payouts` |
| Billing and credits | `https://lab.{{domain}}/billing` |
| Settings | `https://lab.{{domain}}/settings` |
| Affiliates | `https://lab.{{domain}}/affiliates` |

Main site pages keep the links in section 4. Paths are confirmed so no CONFIRM is needed for them. The Dashboard link is the bare root `https://lab.{{domain}}/`. The app has no path for Help. Use `https://{{domain}}/docs/` for help articles.

Pages inside the builder (sections of the Create a bot page) are not separate pages. Name them and link the Create a bot page the first time. For one bot's page use the words "open the bot from [Bot list](link)".

**The Create a bot page.** It is one page with these sections in this order. Each section is folded and opens when selected. A **Save** bar sits at the foot of the page. Use these exact names and no others:

| Section | Its sub-title on screen |
|---|---|
| Details | Name and description and image |
| Category | How the bot is grouped |
| Instructions | What the bot knows and how it behaves |
| Conversation starters | Prompts shown to new visitors |
| Knowledge files | Files the bot can draw on |
| Model | The AI model the bot runs on |
| Mode | Personal or Public |
| Paywall and pricing | Sell access to the bot |
| Style | How the bot's page looks |
| Integrations | Services the bot can call |
| Sharing and embed | Link plus embed snippet |
| Preview | Chat with the bot as a visitor would |
| Analytics | How the bot is used |

- There is no "Advanced" group. Sharing and embed and Preview and Analytics are sections of the page in their own right. Never write "under Advanced".
- The screen shows Style for the owner's own account. Style and Interest tags are Pro Botter features (guide). Interest tags is not on the sample screen. Check the digest for the tier and never name a section a member's tier can't see. `[CONFIRM: sections shown per tier]` goes in Notes where it matters.
- The page title is Create a bot. The guide's route is Bot list then New bot. Call the page "Create a bot" and link it as above.
- The field inside Instructions is the box called **What the bot should do** (guide).
- Knowledge files and Preview and Sharing and embed only work once the bot is saved (guide). Say so where it matters.

**Use "In" for fields and sections.** A member works in a field or a section. Write "In Instructions, paste ..." and "In Knowledge files, press Add a file". Never "On Instructions" or "On Files". Use "on" only for a whole page or a switch or tick box ("on the Dashboard", "switch on Sales"). The import steps are written "In Instructions" and "In Files" and "In Integrations" and "In Review".

**Extra self-check.** Search for "On Instructions" and "On Files" and "Advanced" and for any page name in the table above that is not a link at its first mention.

## 12. Answers from the app (Docos\create-a-bot-answers.md, 31 October 2026)

- **Category list** (use these exact names): Marketing and Copywriting and Sales and Social Media and SEO and Email Marketing and Content Creation and Ecommerce and Customer Support and Coaching and Consulting and Education and Training and Productivity and Finance and Accounting and People and Recruitment and Property and Health and Fitness and Travel and Hospitality and Software and Technical and Legal and Compliance and Other. A member can also choose No category.
- **Sections per tier:** every tier sees Details and Category and Instructions and Conversation starters and Knowledge files and Model and Mode and Paywall and pricing and Integrations and Sharing and embed and Preview and Analytics. Style is hidden below Pro. Interest tags show at Pro and above and only on a saved bot. Below Novice Paywall and pricing shows an upgrade note. Apprentice sees everyday models only. On an unsaved bot Knowledge files and Integrations and Mode and Preview and Analytics say to save first.
- **Promoted listings** is a card on the Affiliates page.
- **Lifecycle tags** are in Settings then CRM then Lifecycle tags (Pro and above).
- **Save on Auto top-up** is on the Billing page in the Auto top-up section at the left below the threshold and amount fields. Agree and switch on is a separate button at the top right of that section. The Create a bot page keeps its Save in a bar at the foot.
- **Starters** show in the order entered on the chat and the paywall page.
- **Instructions are not a hard lock.** Use the help wording: "Every bot is told never to reveal, quote, summarise or translate its instructions or knowledge files". Never promise "always".
- **FluentCRM merge codes** are in the form `{{contact.first_name}}`. A fallback looks like `{{contact.first_name|there}}`. Never write `{{first_name}}`.
- **Open:** plans.md says five plans but FluentCart has a sixth above Master. Do not mention a sixth tier.

## 13. Owner rules added 1 November 2026

- **No serial "and".** Never write "a and b and c". Any list of three or more items reads "a, b and c" (commas between the items and "and" before the last with no comma in front of it). This applies to every sentence a reader sees. Fixed names stay as they are (for example Billing and credits and Coaching and Consulting and Terms And Conditions and Pleasant Pink). Two items joined by "and" are fine. Clauses joined by "and" are fine.
- **Say "annual" never "yearly".** Annual billing and Pay annually and Annual plans. The price line still reads for example "$50 per year".
- **The tagline is "Build a bot. Share it. Sell access."** Never "Build an AI bot".
- **FOUNDER50 works on monthly and annual billing.** A Founder who leaves can use it again while the coupon is still active.
- **Extra self-check:** search each body for a line with two or more " and " joining short items and rewrite it.
