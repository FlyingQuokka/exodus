# Answers for the marketing agent: Create a bot and related pages

Read from the code on `dev` on 31 October 2026, not in a browser.

## 1. Bot category names

These are the seeded defaults. Staff can rename or add to them in the Back Office.

- Marketing
- Copywriting
- Sales
- Social Media
- SEO
- Email Marketing
- Content Creation
- Ecommerce
- Customer Support
- Coaching and Consulting
- Education and Training
- Productivity
- Finance and Accounting
- People and Recruitment
- Property
- Health and Fitness
- Travel and Hospitality
- Software and Technical
- Legal and Compliance
- Other

A member can also choose "No category".

## 2. Sections per tier on Create a bot

All tiers see Details, Category, Instructions, Conversation starters, Knowledge files, Model, Mode, Paywall and pricing, Integrations, Sharing and embed, Preview and Analytics. The ones that vary are:

| Section | Difference |
|---|---|
| Model | Apprentice sees everyday models only. Novice and above see every model |
| Paywall and pricing | Below Novice, the section shows an upgrade note instead |
| Integrations | The help article says from Novice. How this section looks below that was not read |
| Style | Hidden below Pro |
| Interest tags | Pro and above, and only on a bot that has been saved |

- **Help article:** the Model and Integrations tier details come from `docs/help/first-steps/plans.md`.
- **Unsaved bot:** Knowledge files, Integrations, Mode, Preview and Analytics each say to save first or show a short note.
- **Bought bots:** a bot held below a PLR licence hides Instructions and Knowledge files.

## 3. Promoted listings

A card on the **Affiliates** page, listing Bot Market listings sold through the member's links, with sales and commission.

## 4. Lifecycle tags

**Settings > CRM > Lifecycle tags**. CRM is a Pro and above feature.

## 5. Save on Auto top-up

On the **Billing** page in the Auto top-up section, at the left below the threshold and amount fields. "Agree and switch on" is a separate button at the top right of that section.

The Create a bot page is different: its Save stays in a bar at the foot of the screen.

## 6. Starter order

Starters show in the order entered. Nothing sorts or shuffles them, on the chat or the paywall page.

## 7. Trick questions

Taken to mean a visitor trying to extract a bot's instructions. Every bot is told to refuse however the request is put, say it cannot share how it was set up and carry on helping. That is an instruction to the AI model, not a hard block, so "always" is not safe to promise.

Use the help article's wording: "Every bot is told never to reveal, quote, summarise or translate its instructions or knowledge files".

## 8. FluentCRM merge names

Taken to mean FluentCRM's smart codes, in the form `{{contact.first_name}}`. Others include `{{contact.last_name}}`, `{{contact.full_name}}` and `{{contact.email}}`. A fallback looks like `{{contact.first_name|there}}`.

`plan-ending-emails.md` wrongly used `{{first_name}}` and is now corrected. Any copy of that wording needs the same change.

## Open: five plans or six

`plans.md` says there are five plans, but FluentCart product 45 has six, with Empire above Master. The owner is to confirm whether Empire is on sale. Do not copy the tier list from that article until then.
