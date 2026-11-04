# Upgrade sequences plan

Draft 1 for review. Nothing is set up in FluentCRM. The emails are written after you approve this plan.

## 1. Decision carried over

An upgrade means the welcome sequence has worked. An upgrade therefore ends the member's welcome track. The member then starts the upgrade sequence for the new tier. The remaining welcome days are not sent.

## 2. How it works

- There is one upgrade sequence for each tier that members can upgrade into: **Novice** and **Expert** and **Pro** and **Master**. Nobody upgrades into Apprentice so it has none. Downgrades are covered by the event emails.
- Each sequence has 10 emails.
- Each email goes into depth on what the member can now do. Each one ends with an example they can use at once.
- Novice and Expert have two emails near the end that subtly show a feature from the tier above. Pro has one or two. Master has none. Master focuses on its own features.
- No hard sell. A peek email shows what the feature does and names the plan in one sentence.
- Stories open a few of the emails. The rules and the list are in `retired\03-storyselling-plan.md`.

## 3. Timing

One email on day 0 then day 1 then every second day: days 0 and 1 and 3 and 5 and 7 and 9 and 11 and 13 and 15 and 17. The first days are quick because the member has just paid and is keen.

## 4. Starting and stopping

The app already sends a tag each time a member's tier changes. The events are tier_reached_apprentice and tier_reached_novice and tier_reached_expert and tier_reached_pro and tier_reached_master. Each applies the plan tag of the same name such as Novice Botter. The sixth tier's row is blank so it never fires. These tags say where the member is. They do not say whether the move was up or down. The app also sends Downgraded for a downgrade.

**Superseded:** the app moves the plan tag itself and sends the Upgraded From tags, so no automation reads or removes the old plan tag (3 November 2026). The older idea follows for the record. **Without any app change** the direction can be worked out. When a plan tag arrives the contact still holds the old plan tag. The automation checks it first and removes it afterwards:
- No old plan tag means a first plan.
- A lower old plan tag means an upgrade.
- A higher old plan tag means a downgrade.

Weak points: two tags can arrive close together and a contact created late may have no old tag. A short wait before the check reduces the first problem [verify].

**Recommended addition to the app:** four upgrade events keyed to the old tier. Their tags are Upgraded From Apprentice and Upgraded From Novice and Upgraded From Expert and Upgraded From Pro. Direction is then exact. The jump size is the gap between the old tier in that tag and the new plan tag. The existing Downgraded tag is enough for downgrades for now. Four more tags (Downgraded From Master and so on) would let the downgrade emails say exactly what pauses. [verify the tag names]

**What FluentCart does on an upgrade** (read from the plugin source). It creates a new order and a new subscription and cancels the old subscription without raising any hooks. Subscription Activated therefore fires for the new plan and Subscription Canceled does not fire for the old one. There is no FluentCRM trigger for a plan change. The welcome automation has restart switched off so an upgrade does not start it again. Upgrade detection stays tag-based.

When an upgrade is detected:
- Cancel every welcome automation and any running upgrade sequence.
- Remove Welcome Active. Apply Welcome Done.
- Apply Upgrade Active.
- Start the upgrade sequence for the new tier.

When the last email is sent: remove Upgrade Active and apply Upgrade Done.

Removing Upgrade Active by hand stops the sequence and returns the member to the main list. Broadcast campaigns exclude Upgrade Active.

A member who skips one tier or more receives a recap first. See section 8.

## 5. The four sequences

Story means the email opens with a short story. Peek means it shows a feature from the next tier. The last column is the example the member can use at once.

### Novice

| ID | Day | Subject idea | What it covers | Story | Use at once |
|---|---|---|---|---|---|
| UN01 | 0 | Welcome to Novice | What just opened: every model and paywall and integrations and basic analytics and affiliate programme and more bots | No | Choose the first one to try |
| UN02 | 1 | Four brains now | Every model. Dearer models use more credits. A model change on a Public bot means confirming declarations again | No | A question to try on each family |
| UN03 | 3 | Ana's checklist | Paywall step by step. One-time price. Sell access to this bot. What buyers see | Yes | An example paywall description and three starters |
| UN04 | 5 | Cap it and top it up | Message cap and top-up. Why the cap protects the owner's credits | No | Example cap and top-up values |
| UN05 | 7 | Promise and prove | Money-back guarantee. Show the bot's rating. Handling a claim in Sales | No | A short checklist for choosing the guarantee |
| UN06 | 9 | Let a bot write your promotions | Join the affiliate programme. Your link. Referrals. The Swipe Writer in depth | No | Fuller instructions for the Swipe Writer |
| UN07 | 11 | Promote other Botters' bots | Promote a listing. Promoted listings. Commission. Last click counts | No | Copy a Promote link |
| UN08 | 13 | Tom's Thursday problem | Integrations. The Booking Helper field by field | Yes | The field values to enter |
| UN09 | 15 | What your numbers are telling you | Basic analytics and what to change. **Peek (Expert):** Busiest hours and Top conversation starters | No | Which number to check first |
| UN10 | 17 | How many bots you really need | Using the Novice bot limit. **Peek (Pro):** selling a bot on Bot Market | No | A bot map for one business |

### Expert

| ID | Day | Subject idea | What it covers | Story | Use at once |
|---|---|---|---|---|---|
| UE01 | 0 | Welcome to Expert | What just opened: more bots and larger included credits and deeper analytics | No | Choose the first one to try |
| UE02 | 1 | Rosa's surprising question | Top conversation starters and how to rewrite your starters from them | Yes | A prompt for rewriting starters |
| UE03 | 3 | Find the busy hours | Busiest hours. When to share. When to set a Daily credit limit | No | A simple posting plan |
| UE04 | 5 | How you compare | Category benchmarks. Messages per buyer and price and conversion beside This bot. Hidden until enough bots feed it | No | Which panel to read first |
| UE05 | 7 | Close the gap | Conversation insights in depth. Unanswered questions and Common topics and Suggested additions | No | Use Add to knowledge on one suggestion |
| UE06 | 9 | A bot for every audience | Using the Expert bot limit. A suite for one business | No | A named bot suite |
| UE07 | 11 | Credits at a bigger scale | Plan credits and bought credits and the usage graph and Auto top-up | No | The auto top-up steps |
| UE08 | 13 | Tune the paywall with data | Use analytics to adjust cap and starters and description. Price is never tested | No | A short tuning checklist |
| UE09 | 15 | Same bot. New outfit | **Peek (Pro):** Bot styles | No | A sample style recipe |
| UE10 | 17 | Maya's bot found a buyer | **Peek (Pro):** selling on Bot Market and Multi-sell | Yes | The listing fields |

### Pro

| ID | Day | Subject idea | What it covers | Story | Use at once |
|---|---|---|---|---|---|
| UP01 | 0 | Welcome to Pro | What just opened: unlimited bots and styles and a lower platform fee and Bot Market selling and the CRM connector and priority support | No | Choose the first one to try |
| UP02 | 1 | Make every bot look like yours | Bot styles in depth. Branding and Colours and Text and corners and What shows. Apply to another bot | No | A sample style recipe |
| UP03 | 3 | Dev's workflow becomes a listing | Listing a bot. Declarations and category and licence terms. Suggest a description and tags | Yes | A sample description and tags |
| UP04 | 5 | Choose your licence | Personal use and Resell rights and Master resell rights and PLR. Copy our template. Notify my buyers | No | Which licence suits which bot |
| UP05 | 7 | Be a seller people trust | Seller profile and badges and replying to reviews | No | A reply to a review |
| UP06 | 9 | Send leads home | CRM connector. Webhook address and privacy notice and signing secret. Send test event. Consent | No | A setup checklist |
| UP07 | 11 | Tag the moments | Lifecycle tags for each event | No | An example tag set |
| UP08 | 13 | Tag what they ask about | Interest tags and the customer CSV for customers who agree to share their details | No | Three example rules |
| UP09 | 15 | Priority support and a lower fee | How to write a clear ticket. What the lower platform fee means | No | A ticket template |
| UP10 | 17 | Tom's greeting test | **Peek (Master):** A/B tests and advanced analytics | Yes | A sample test |

### Master

Master has no peeks. Every email is about using what Master has.

| ID | Day | Subject idea | What it covers | Story | Use at once |
|---|---|---|---|---|---|
| UM01 | 0 | Welcome to Master | What just opened: A/B tests and advanced analytics and the largest included credits | No | Choose the first test |
| UM02 | 1 | Your first A/B test | Control and variants. Control's share (%). Start the test | No | A setup checklist |
| UM03 | 3 | What to test first | Five test ideas with paste-in variants. Greeting and tone and answer length and starters and closing line | Yes | Five variants to paste |
| UM04 | 5 | Read the results | Conversations and Messages per conversation and Returning customers and Paywall conversion and Revenue per conversation | No | A reading guide |
| UM05 | 7 | Crown a winner | Choose as winner and Keep the control and Stop the test and Start a new test | No | A decision rule |
| UM06 | 9 | Views against purchases | The Conversion panel. Paywall views and Listing views and Purchases and Conversion | Yes | A diagnosis checklist |
| UM07 | 11 | What you cannot test | Price is never tested. What to adjust instead | No | A list of things to test instead |
| UM08 | 13 | Credits at scale | Large credit use. Daily credit limit and Auto top-up and the usage graph | No | A credit budget checklist |
| UM09 | 15 | Tests and the CRM together | The A/B variant in each CRM event. Segmenting by variant | No | A tag plan for variants |
| UM10 | 17 | Your Master routine | A weekly review across tests and analytics and credits and the CRM | No | A one-page routine |

## 6. Automations needed

| ID | Name | Emails | Trigger | Only if | When it ends |
|---|---|---|---|---|---|
| UP-Nov | Upgrade to Novice | UN01 to UN10 | Upgrade detected [verify] | The new plan is Novice Botter | Remove Upgrade Active. Apply Upgrade Done |
| UP-Exp | Upgrade to Expert | UE01 to UE10 | Upgrade detected [verify] | The new plan is Expert Botter | Same |
| UP-Pro | Upgrade to Pro | UP01 to UP10 | Upgrade detected [verify] | The new plan is Pro Botter | Same |
| UP-Mas | Upgrade to Master | UM01 to UM10 | Upgrade detected [verify] | The new plan is Master Botter | Same |
| UP-STOP | Upgrade stop | None | Tag Upgrade Active removed or Cancelled or Plan Ended or Downgraded applied | Nothing | Cancel every upgrade automation |

Each automation starts by cancelling the welcome automations and any other upgrade automation.

The welcome stop automation also cancels on Upgrade Active.

## 7. Decisions and open items

- Cadence of 10 emails over 17 days: agreed.
- Upgrade detection: use the old plan tag for now. Ask for the four Upgraded From tags in the app.
- The jump recap: the middle route. See section 8.

## 8. Jump recap options

A jump is any move that skips a tier. There are six: Apprentice to Expert and Apprentice to Pro and Apprentice to Master and Novice to Pro and Novice to Master and Expert to Master.

### Option 1: one recap email (recommended)

The first email of the new tier's sequence is replaced by a recap.

- Opens as the normal welcome for the new tier.
- Says the member has skipped ahead.
- Lists everything they now have from the skipped tiers. One line per feature. Each line says where it lives in the Botters Lab and links to its Help article.
- Suggests one thing to try first.
- The rest of the sequence runs unchanged. The skipped features have one line each and nothing more.

Example for Apprentice to Pro. The recap lists every model and the paywall and integrations and the affiliate programme and basic analytics (Novice). It lists Top conversation starters and Busiest hours and Category benchmarks (Expert). Then it moves to Pro as normal.

Cost: six recap emails to write. If FluentCRM has conditional content blocks one email can cover all six [verify].

### Option 2: a longer catch-up

The recap email plus the best emails from the skipped tiers. They are reused from the existing Novice and Expert sequences so no new writing is needed beyond the recap.

Example for Apprentice to Pro:

| Days | Emails |
|---|---|
| 0 | The recap |
| 1 and 3 and 5 and 7 | UN02 Four brains now and UN03 Ana's checklist and UN06 Let a bot write your promotions and UN08 Tom's Thursday problem |
| 9 and 11 | UE02 Rosa's surprising question and UE05 Close the gap |
| 13 to 29 | UP02 to UP10 |

Sixteen emails over about 29 days. Apprentice to Master would need more so the catch-up is capped at six emails.

Cost: six extra automations. Risk: the member paid for Pro and waits nearly two weeks to hear about Pro features.

### Decision: the middle route

Decided. The recap email replaces the first email of the new tier's sequence (Option 1). The catch-up emails follow after the sequence ends. They are reused from the Novice and Expert and Pro sequences. Only the six recap emails are new.

The sequence ends on day 17. The catch-up starts on day 19 and runs every second day. It never has more than six emails. Story emails are never next to each other. A story email is marked with an asterisk.

| Jump | Skipped | Catch-up emails in order | Days |
|---|---|---|---|
| Apprentice to Expert | Novice | UN02 and UN03* and UN06 and UN08* | 19 to 25 |
| Apprentice to Pro | Novice and Expert | UN02 and UN03* and UN06 and UN08* and UE05 and UE02* | 19 to 29 |
| Apprentice to Master | Novice and Expert and Pro | UN03* and UN06 and UE02* and UE05 and UP03* and UP06 | 19 to 29 |
| Novice to Pro | Expert | UE02* and UE03 and UE05 and UE06 | 19 to 25 |
| Novice to Master | Expert and Pro | UE02* and UE05 and UP02 and UP03* and UP06 and UP08 | 19 to 29 |
| Expert to Master | Pro | UP02 and UP03* and UP06 and UP08 | 19 to 25 |

Automations: six catch-up automations. Each starts when Upgrade Done is applied to a contact that has the matching Upgraded From tag and the new plan tag [verify]. Each ends by removing nothing. The stop rule is the same as for the upgrade sequences.

The library is now 94 emails: 48 welcome and 40 upgrade and 6 recap.

The app agent prompt for the Upgraded From tags is in `04-app-agent-prompt-tier-events.md`.

## 9. Update after welcome plan v4 (31 October 2026)

- The welcome track is now the v4 fast-start track in `01-welcome-sequence-plan-v4.md`. The final loop table is `09-welcome-loop-map-v4.md`.
- An upgrade still ends the welcome track at any point (A0 stops and Welcome Done is applied). No welcome email is repeated in an upgrade sequence or a jump recap.
- The welcome library is now 51 written versions: 30 day slots with full versions and previews for lower tiers and five tier versions of the last email. The upgrade sequences (40 emails) and the six jump recaps are unchanged in count.
- The upgrade email IDs now carry a U prefix: UN01 to UN10 and UE01 to UE10 and UP01 to UP10 and UM01 to UM10. This keeps them apart from the welcome IDs (M1 to M6 and N1 to N6 and F1 to F6) and the event IDs (E01 to E54).
- The upgrade and jump-recap emails now follow the v4 brief: linked Botters Lab pages and no "Advanced" group and "In" for fields. The catch-up lists in section 8 are unchanged because they point at upgrade emails only.
- Coding agent report (1 November 2026): the Upgraded From tags work as specified. A move down is now a cancel then a first plan so the Downgraded and Downgraded From tags almost never fire. Use Cancelled and Plan Ended for anything about leaving or moving down.

## 10. As built (3 November 2026)

Generated by `tools\make-upgrade-funnels.py` into `sitetv-sync\dataunnels\`. Twenty automations in all, counting the welcome and STOP ones already built.

- **Four detect automations** (`UP Detect - from Apprentice`, Novice, Expert, Pro). Each starts when its Upgraded From tag is applied, so the origin is certain. It waits two minutes, then cancels the welcome track and any earlier upgrade run, clears old state tags and applies Welcome Done and Upgrade Active. It then looks for the new plan tag at 2, 12 and 32 minutes, because the app sends the two tags as separate rows and the plan tag can be late. The first look that finds one applies a Start Upgrade tag and Upgrade Routed. If none arrives it applies Upgrade Unrouted so staff can find the contact.
- **Four sequence automations** (`UP Sequence - Novice`, Expert, Pro, Master). Each starts on its Start Upgrade tag. The first email is the normal welcome or a jump recap, chosen by the Upgraded From tag. Then day 1 and every second day to day 17. At the end it removes Upgrade Active and applies Upgrade Done.
- **Six catch-up automations** (`UP Catch-up - Apprentice to Expert` and so on). Each starts on Upgrade Done and ends at once unless the member has the matching Upgraded From tag and plan tag. The emails go every second day from day 19.
- **Two stop automations.** Removing Upgrade Active cancels the detect and sequence automations only, because a finished sequence removes that tag on purpose. Cancelled or Plan Ended cancels everything and clears the state tags.
- **Four new internal tags:** Start Upgrade Novice, Expert, Pro and Master. The app does not send them.
- **Timing (app agent, 3 November 2026):** normally seconds, up to about 70 seconds if a job run ends between the rows or many minutes if the queue is busy. A failed plan tag retries after about 5 and 20 minutes. If `Upgraded From` fails, the plan tag arrives alone and nothing here starts.
