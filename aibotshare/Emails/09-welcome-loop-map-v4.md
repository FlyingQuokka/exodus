# Welcome loop map, version 4

The single final loop table for the welcome sequence in plan v4 (`01-welcome-sequence-plan-v4.md`). It replaces the loop table in `07-soap-opera-format-and-loop-map.md`. Every row is read from the written emails in `build\`, so the P.S. text here is the text in the files. The recap of each email echoes the P.S. of the email before it in the same member's path.

## How to read the table

- **Who** is the lowest tier that receives the full email. A **preview** row is the version sent in the same slot to lower tiers. It has the same P.S. as the full version so the chain never breaks.
- Day 9 to day 14 and day 15 to day 21 and day 29 have a full version and a preview. Day 24 and day 25 have a Master version that replaces the main one for Master members.
- Day 30 has five versions (S30-A and S30-N and S30-E and S30-P and S30-M) chosen by the tier tag. FluentCRM has no per-tier blocks inside one email.
- Day 17 and day 28 are tips (TIP1 and TIP2). They are for all tiers.
- An upgrade ends the welcome track at any point. The upgrade sequence starts and no later welcome email is sent.

## The table

| Day | ID | Topic | Who | Subject | P.S. loop | File |
|---|---|---|---|---|---|---|
| 1 | S01 | Congratulations | all tiers | [Botterverse] Welcome aboard - here's what happens next | Next up: a quick tour of the Botters Lab, five minutes away. | `build\v4-day1-S01-T1-T2.md` |
| 1 | T1 | A quick tour | all tiers | [Botters Lab] A quick tour of your new workspace | Next up: bringing a bot you already have into the Botters Lab. | `build\v4-day1-S01-T1-T2.md` |
| 1 | T2 | Bring your existing bot in | all tiers | [Botters Lab] Bring your existing bot in | Next up: how to build a bot from scratch in a single sitting. | `build\v4-day1-S01-T1-T2.md` |
| 2 | B1 | Build a bot in one sitting | all tiers | [Botters Lab] Build a bot in one sitting | Next up: testing it and sharing it. | `build\v4-B1-B3-C1.md` |
| 3 | B2 | Test it then Make Public and share the link | all tiers | [Botters Lab] Test it, then share it | Next up: feeding it your own material. | `build\v4-B1-B3-C1.md` |
| 4 | B3 | Make it yours: knowledge files and the model | all tiers | [Botters Lab] Feed your bot your own material | Next up: what fuels a bot. | `build\v4-B1-B3-C1.md` |
| 5 | C1 | Credits and Auto top-up and promo codes | all tiers | [Botters Lab] What fuels your bot | Next up: your bot on your own website. | `build\v4-B1-B3-C1.md` |
| 6 | W1 | Put your bot on your website | all tiers | [Botters Lab] Put your bot on your own website | Next up: which kinds of bot work well on a website. | `build\v4-W1-W3-TIP.md` |
| 7 | W2 | Website bots for a sales page | all tiers | [Botters Lab] Bots that work well on a website | Next up: more bot ideas by niche. | `build\v4-W1-W3-TIP.md` |
| 8 | W3 | Website bots by niche | all tiers | [Botters Lab] Three website bots for your niche | Next up: charging for access. | `build\v4-W1-W3-TIP.md` |
| 9 | M1 | Earning 1: a paywall and a price | Novice and above | [Botters Lab] Put a price on your bot | Next up: a paywall without limits can cost you so tomorrow you cap it and add a promise. | `build\v4-M1-M6.md` |
| 9 | M1 preview | Earning 1: a paywall and a price | preview for lower tiers | [Botters Lab] Put a price on your bot | Next up: a paywall without limits can cost you so tomorrow you cap it and add a promise. | `build\v4-M1-M6.md` |
| 10 | M2 | Earning 2: message cap and top-up and money-back guarantee | Novice and above | [Botters Lab] Cap it and add a promise | Next up: now your bot can earn but who tells people? Tomorrow you meet the affiliate programme. | `build\v4-M1-M6.md` |
| 10 | M2 preview | Earning 2: message cap and top-up and money-back guarantee | preview for lower tiers | [Botters Lab] Cap it and add a promise | Next up: now your bot can earn but who tells people? Tomorrow you meet the affiliate programme. | `build\v4-M1-M6.md` |
| 11 | M3 | Earning 3: the affiliate programme | Novice and above | [Botterverse] Who tells people? The affiliate programme | Next up: you can also promote someone else's listing in the Bot Market and share in its sales. | `build\v4-M1-M6.md` |
| 11 | M3 preview | Earning 3: the affiliate programme | preview for lower tiers | [Botterverse] Who tells people? The affiliate programme | Next up: you can also promote someone else's listing in the Bot Market and share in its sales. | `build\v4-M1-M6.md` |
| 12 | M4 | Earning 4: promote someone else's Bot Market listing | Novice and above | [Botterverse] Promote someone else's bot | Next up: once you've seen how listings work you may want to sell your own bot to other Botters. | `build\v4-M1-M6.md` |
| 12 | M4 preview | Earning 4: promote someone else's Bot Market listing | preview for lower tiers | [Botterverse] Promote someone else's bot | Next up: once you've seen how listings work you may want to sell your own bot to other Botters. | `build\v4-M1-M6.md` |
| 13 | M5 | Earning 5: list your bot on the Bot Market | Pro and above | [Botters Lab] Put your bot on sale | Next up: a Public bot brings visitors. Tomorrow the ones who agree to share their details can reach your own CRM. | `build\v4-M1-M6.md` |
| 13 | M5 preview | Earning 5: list your bot on the Bot Market | preview for lower tiers | [Botters Lab] Put your bot on sale | Next up: a Public bot brings visitors. Tomorrow the ones who agree to share their details can reach your own CRM. | `build\v4-M1-M6.md` |
| 14 | M6 | Earning 6: capture leads and send them home | Pro and above | [Botters Lab] Send your leads home | Next up: your bot can call your own tools while it chats. Tomorrow you plug it into them. | `build\v4-M1-M6.md` |
| 14 | M6 preview | Earning 6: capture leads and send them home | preview for lower tiers | [Botters Lab] Send your leads home | Next up: your bot can call your own tools while it chats. Tomorrow you plug it into them. | `build\v4-M1-M6.md` |
| 15 | F1 | Integrations | Novice and above | [Botters Lab] Plug your bot into your tools | Next up: reading the numbers. Tomorrow you see how your bot is doing. | `build\v4-F1-F6.md` |
| 15 | F1-P | Integrations | preview for lower tiers | [Botters Lab] Plug your bot into your tools | Next up: reading the numbers. Tomorrow you see how your bot is doing. | `build\v4-F1-F6.md` |
| 16 | F2 | Read the numbers: basic analytics | Novice and above | [Botters Lab] Is it working? Read the numbers | Next up: what one message costs. | `build\v4-F1-F6.md` |
| 16 | F2-P | Read the numbers: basic analytics | preview for lower tiers | [Botters Lab] Is it working? Read the numbers | Next up: what one message costs. | `build\v4-F1-F6.md` |
| 17 | TIP1 | Know what a message costs | all tiers | [Botters Lab] What one message costs | Next up: finding your busy hours. | `build\v4-W1-W3-TIP.md` |
| 18 | F3 | Busy hours and conversation insights | Expert and above | [Botters Lab] Find the busy hours | Next up: setting the doors. Tomorrow, the two settings that decide who comes in. | `build\v4-F1-F6.md` |
| 18 | F3-P | Busy hours and conversation insights | preview for lower tiers | [Botters Lab] Find the busy hours | Next up: setting the doors. Tomorrow, the two settings that decide who comes in. | `build\v4-F1-F6.md` |
| 19 | F4 | Daily limit and sign-up requirement | all tiers | [Botters Lab] Two settings for the door | Next up: dressing your bot. Tomorrow it changes how it looks. | `build\v4-F1-F6.md` |
| 20 | F5 | Bot styles | Pro and above | [Botters Lab] Dress your bot for the occasion | Next up: tagging what they ask about. Tomorrow your bot labels customers by interest. | `build\v4-F1-F6.md` |
| 20 | F5-P | Bot styles | preview for lower tiers | [Botters Lab] Dress your bot for the occasion | Next up: tagging what they ask about. Tomorrow your bot labels customers by interest. | `build\v4-F1-F6.md` |
| 21 | F6 | Interest tags and the customer download | Pro and above | [Botters Lab] Tag them by interest | Next up: a bot idea for a course. Tomorrow's example is a course companion. | `build\v4-F1-F6.md` |
| 21 | F6-P | Interest tags and the customer download | preview for lower tiers | [Botters Lab] Tag them by interest | Next up: a bot idea for a course. Tomorrow's example is a course companion. | `build\v4-F1-F6.md` |
| 22 | N1 | Course companion | all tiers | [Botters Lab] A bot idea for a course | Next up: a bot for a local business. | `build\v4-N1-N6.md` |
| 23 | N2 | Local business lead catcher | all tiers | [Botters Lab] A bot for a local business | Next up: a bot for an affiliate review. | `build\v4-N1-N6.md` |
| 24 | N3 | Affiliate review helper | all tiers | [Botters Lab] A bot for an affiliate review | Next up: an ad copy bot. | `build\v4-N1-N6.md` |
| 24 | N3 | Affiliate review helper | Master | [Botters Lab] A bot for an affiliate review and your first test | Next up: an ad copy bot. | `build\v4-N1-N6.md` |
| 25 | N4 | Ad copy writer | all tiers | [Botters Lab] An ad copy bot | Next up: a client assistant for an agency. | `build\v4-N1-N6.md` |
| 25 | N4 | Ad copy writer | Master | [Botters Lab] An ad copy bot and your first winner | Next up: a client assistant for an agency. | `build\v4-N1-N6.md` |
| 26 | N5 | Client assistant for an agency | all tiers | [Botters Lab] A client assistant for an agency | Next up: a bot for a newsletter or community. | `build\v4-N1-N6.md` |
| 27 | N6 | Newsletter or community helper | all tiers | [Botters Lab] A bot for a newsletter or community | Next up: a free bot as a teaser. | `build\v4-N1-N6.md` |
| 28 | TIP2 | A free bot as a teaser | all tiers | [Botters Lab] A free bot as a teaser | Next up: becoming a seller people trust. | `build\v4-W1-W3-TIP.md` |
| 29 | S28 | Seller profile and badges and tidy the Lab | Pro and above | [Botters Lab] How to be a seller people trust | Next up: the last email. Tomorrow you're a proper Botter. | `build\v4-S28-S30.md` |
| 29 | S28 | Seller profile and badges and tidy the Lab | preview for lower tiers | [Botters Lab] How sellers build trust (and a short tidy-up) | Next up: the last email. Tomorrow you're a proper Botter. | `build\v4-S28-S30.md` |
| 30 | S30-A | You've finished the welcome emails | Apprentice Botter | [Botterverse] You've finished the welcome emails | None. Winds up the sequence | `build\v4-S28-S30.md` |
| 30 | S30-E | You've finished the welcome emails | Expert Botter | [Botterverse] You've finished the welcome emails | None. Winds up the sequence | `build\v4-S28-S30.md` |
| 30 | S30-M | You've finished the welcome emails | Master Botter | [Botterverse] You've finished the welcome emails | None. Winds up the sequence | `build\v4-S28-S30.md` |
| 30 | S30-N | You've finished the welcome emails | Novice Botter | [Botterverse] You've finished the welcome emails | None. Winds up the sequence | `build\v4-S28-S30.md` |
| 30 | S30-P | You've finished the welcome emails | Pro Botter | [Botterverse] You've finished the welcome emails | None. Winds up the sequence | `build\v4-S28-S30.md` |

## Chain check

Read from the files. Each P.S. names the topic of the next day's email:

- Day 1: S01 points to T1. T1 points to T2. T2 points to B1.
- Days 2 to 8: B1 to B2 to B3 to C1 to W1 to W2 to W3. W3 points to the paywall in M1.
- Days 9 to 14: M1 to M6. M6 points to integrations in F1.
- Days 15 to 21: F1 to F2. F2 points to TIP1 (what one message costs) on day 17. TIP1 points to busy hours in F3 on day 18. F3 to F4 to F5 to F6. F6 points to the course bot in N1.
- Days 22 to 27: N1 to N6. N6 points to TIP2 (a free bot as a teaser) on day 28.
- Days 28 to 30: TIP2 points to the seller profile in S28 on day 29. S28 points to the last email. S30 has no P.S.

## Notes

- **Upgrade IDs.** The upgrade sequence emails use a U prefix (UN01 to UN10 and UE01 to UE10 and UP01 to UP10 and UM01 to UM10) so they never clash with the welcome IDs M1 to M6 and N1 to N6 and F1 to F6 or with the event IDs E01 to E54.
- T1 sends 5 minutes after S01. T2 sends when the tier tag arrives with a fallback at the end of day 1. T2 never sends before T1.
- Retired welcome files (now in `retired\build\`): `welcome-S01-S03.md` and `welcome-S04-S15.md` and `welcome-S16-S30-and-extras.md` and `welcome-upgrade-teasers-U1-U13.md`. The v4 files above replace them. X2 to X5 in the old extras file are standalone emails and are not part of the welcome track.
- **Founders email.** FND1 (in `build\v4-day1-S01-T1-T2.md`) is a separate short email sent when the Founder tag is applied. It is outside the loop chain. S01 no longer has a Founders block because the tag can arrive after S01 sends or days later (per the app agent's trace).
