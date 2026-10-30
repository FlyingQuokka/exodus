# Competitor research: CRM connection and tagging

Checked on 22 October 2026 for the member CRM connector (lifecycle tags, `{bot}` tags, interest
tags and consent). Nothing was signed up for, entered or submitted. Where a source is a review
site, a third-party page or a search summary rather than the vendor's own page, the cell says so.
"Not found" means it was not found, not that it definitely does not exist. Features change, so
check again before using any claim in launch copy.

## What was compared

1. Captures leads and sends them to the creator's own CRM
2. Lifecycle events
3. Creator-named tags per event
4. Interest tagging
5. Consent before sharing
6. Charging end customers

## Comparison table

| Platform | 1. Leads to creator's CRM | 2. Lifecycle events | 3. Tags per event | 4. Interest tagging | 5. Consent | 6. Charge end customers |
|---|---|---|---|---|---|---|
| **Eden** (eden.so) | Yes. Buyers, page signups and form emails go to Kit, beehiiv, GoHighLevel, Substack or Eden's own list. Signed webhooks (HMAC-SHA256) plus Zapier, Make and n8n guides. eden.so/help/email-marketing/connect-your-email-list/ and eden.so/help/api/webhooks/ | Store events: purchase created and refunded, membership renewed, cancelled and ended, customer and lead created, contact tagged, form and lesson completed. No events for chat usage, credits running low or inactivity. eden.so/help/api/webhooks/ | Partly. One optional tag per list connection plus a tag per product. Automations can add tags. No tag per lifecycle event. eden.so/help/email-marketing/email-automations/ | Keyword matching only in Auto-DM on Instagram comments and DMs. Not found for Custom AI chats. eden.so/features/auto-dm/ | A notice for buyers, not a tick box. Quizzes and applications send only people who tick the email box. | Yes. Custom AI sold through the Eden store on Stripe, with credits. eden.so/help/store/your-custom-ai-purchase/ |
| **Chatbase** | Yes. Collect Leads action, a signed `leads.submit` webhook and a Zapier trigger. The HubSpot and Salesforce integrations create tickets or cases. chatbase.co/docs/developer-guides/webhooks | Lead and form submit, phone call summary only | Not found | Not found | Not found | Not found |
| **CustomGPT.ai** | Yes. Lead Capture with a Zapier "New Lead" trigger. HubSpot through Zapier. No webhook docs found. docs.customgpt.ai | Zapier triggers: new lead, new conversation, new message, conversation end | No. Its content tags label documents, not customers. | Not found | Not found | No built-in payment. Its blog suggests adding a paywall yourself. |
| **Botpress** | Yes, in flows: native HubSpot, Salesforce, Mailchimp, Zapier and webhook integrations. botpress.com/integrations | None ready-made. Has to be built in workflows. | User and conversation tags set in code. No preset lifecycle tags. | Possible through your own flow logic. No ready feature found. | Not found | A Stripe integration makes payment links. No pay-for-access feature found. |
| **Voiceflow** | HubSpot tool creates contacts, leads and tickets. Zapier not found. docs.voiceflow.com/docs/hubspot | Not found | Not found | Not found | Not found | Not found |
| **Stammer.ai** | Yes. Lead capture with a lead webhook, Zapier, GoHighLevel and Zoho, from the docs index. docs.stammer.ai | Not found | Not found | Not found | Not found | The agency bills its business clients, not the bot's end customers. |
| **Chatling** | Yes. Lead Form, native HubSpot and a Zapier trigger. Webhook not found. docs.chatling.ai | Not found | Not found | Not found | No consent box in the Lead Form docs. | Not found |
| **SiteGPT** | Yes. A leads webhook with a token header (no signature, no retry) and a Zapier trigger. It states it has no built-in CRM connection. sitegpt.ai/docs/guides/leads/send-leads-to-other-tools | New lead only | Not found | Not found | Not found | Not found |
| **Dante AI** | Zapier triggers for new lead, conversation and message, from a search summary of its docs. No webhook found. | Those three only | Not found | Not found | Not found | Not found |
| **Delphi** (delphi.co) | The pricing page names only Slack, text and WhatsApp integrations plus an API. Lead capture is claimed only by review sites. | Not found | Not found | "Audience insights" analytics only | Not found | Review sites say creators can charge. Not confirmed on Delphi's own pages. |
| **Coachvox AI** | Yes. Leads through Zapier, GoHighLevel or webhooks. coachvox.ai | Not found | Not found | Insight themes, analytics only | Not found | Yes. Paid access, coupons and trials. |
| **Pickaxe** | Yes. Webhook events for portal signup and payment with the user's email. Zapier trigger. pickaxe.co/v1/documentation/webhooks | Signup and payment | Not found | Not found | Not found | Yes. Stripe subscriptions, credits and one-off payments. |
| **Chipp** | Partly. Lead forms go to Google Sheets. GoHighLevel contact sync. Signed session webhooks. chipp.ai/docs/guides/session-webhooks | Session created and ended only | Not found | **Closest match.** AI message tags classify by meaning rather than keywords. A tag can trigger an action. chipp.ai/docs/guides/message-tagging.md | Not found | Yes. Stripe credit packs and subscriptions. |
| **OpenAI custom GPTs and GPT Store** | No. Chats are not shared with builders. Actions can send data to the builder's own API. | No | No | No | The user chooses whether data goes to an Action's API. | A limited US pilot closed to new builders, from a secondary source. |
| **Poe** | Not found | Not found | Not found | Not found | Not applicable | Yes. Price per message and a monetisation API. creator.poe.com/docs/resources/creator-monetization |
| **ManyChat** (reference) | Yes. Native ActiveCampaign, HubSpot, Kit, Mailchimp, Klaviyo, Flodesk, Google Sheets and Zapier. | Its own triggers: keywords, comments and DMs. No AI bot usage lifecycle. | Yes. An "Add Tag" action with any name in any flow. | Yes. "Message contains" keywords plus AI intention recognition. | Not found | A Stripe buy button in Messenger. Not paid access to a bot. |
| **GoHighLevel Conversation AI** (reference) | It is the CRM itself, so contacts are saved natively. | Workflow triggers such as Customer Replied and Tag Added. | Yes. Any tag name. | Yes. A "Contains Phrase" filter on replies plus AI tag actions. | Not found | Not found |

## Eden in particular

Eden is an all-in-one workspace for creators and marketers: content research, scheduling, a
Stripe store, email marketing, Instagram Auto-DM and "Custom AI" bots sold in the store with
credits. It is the closest overall match. It has signed webhooks that work with Zapier, Make and
n8n. It has purchase, refund and membership events and native sending to Kit, beehiiv and
GoHighLevel. It allows a tag per connection or product.

Not found in Eden:

- events tied to how a buyer uses the Custom AI: first chat, message counts, credits running low
  or used up, going quiet and ratings
- a tag name per event or a `{bot}` placeholder
- keyword tagging inside AI chats, since its keyword feature works on Instagram comments and DMs
  only
- an unticked consent box for buyers, who see a sharing notice instead

## Conclusion

No checked platform offers lifecycle events built on bot usage: signed up but never chatted,
reached N messages, hit the free daily limit, allowance running low or used up, came back after
going quiet, went quiet and rated a reply up or down. None lets the creator name a tag for each
event and none has a `{bot}` placeholder. Among the AI bot builders, none was found with an
unticked consent box before details go to the creator's CRM.

Several parts are already common: lead capture sent on through Zapier or a webhook, signup and
purchase events (Eden and Pickaxe, plus refunds in Eden) and charging end customers (Eden,
Pickaxe, Chipp, Coachvox and Poe). Keyword tagging is standard in ManyChat and GoHighLevel. Among
creator bot builders only Chipp tags messages by meaning and triggers an action from a tag.
Botpress and Voiceflow could be made to do most of this by hand, so a claim should say "out of
the box".

## A claim that does not overstate

"Of the 15 AI chatbot builders we checked in October 2026, none sends a creator's own CRM a tag
the creator names for each stage of a customer's bot use (such as a first chat, hitting the free
limit or going quiet) only after the customer has opted in."
