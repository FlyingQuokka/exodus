# Request for the app coding agent: an Affiliate Joined tag

Copy everything below the line into the app agent's session. It follows `marketing-tags-reply.md`.

---

## Brief: send an Affiliate Joined tag to FluentCRM

Thank you for the answers on tags and timing. I have rebuilt my automations around them. The owner has decided that the app should send the `Affiliate Joined` tag, since FluentAffiliate's own triggers may set a contact to subscribed and cut across double opt-in.

### What I need

1. A new CRM hook that fires once when a member joins the affiliate programme (the **Join the affiliate programme** button on the Affiliates page). Name it as you see fit.
2. Staff then save the word `Affiliate Joined` against it on the Back Office CRM Integration page. The word must match FluentCRM exactly.
3. Fire it once for life. A member who leaves the programme (a move down to Apprentice Botter or a plan that ends) and then comes back must not fire it again, because FluentCRM starts nothing for a tag that is already attached. If the member could rejoin in a way that should start my onboarding again, tell me and I will remove the tag in my automation instead.
4. The programme is for Novice Botter and above. If a member below that tier cannot join, nothing more is needed. If they can, tell me. My automation checks the plan tag itself and ends for a lower tier.

### How to use this brief

I wrote it from outside the code. Adapt it to the code. Report every adaptation and the reason. The outcome I need is: when a member joins the programme once, FluentCRM receives the tag `Affiliate Joined` once.

### Two questions that came out of your answers

- **Annual cancel refunds.** You said the app makes some refunds directly through Stripe, the annual cancel included. You said FluentCart might not raise its Order Refunded event for them. My refund email (O07) now starts from that FluentCart event. Please check, as far as the code shows, whether a refund the app makes directly through Stripe for an annual cancel also raises FluentCart's event. If it does not, the member still receives your `billing.annual_refunded` email, so I need nothing more. I only want to know.
- **Failed events.** You said a tag FluentCRM does not hold fails delivery. All the words in my table exist in FluentCRM, including `Downgraded` and `Downgraded From Novice`, `Expert`, `Pro` and `Master`. Please confirm that the words saved on the live CRM Integration page are the same words, spelt exactly as in my table.

### What I changed on my side

So you know how the tags are used:

- `Cancelled`, `Plan Ended` and `Dormant` are removed by FluentCRM when a member buys a plan again, because the app never removes them.
- The win-back emails start from `Plan Ended` and not from `Cancelled`.
- The upgrade automation looks for the new plan tag at 2, 12 and 32 minutes after the `Upgraded From` tag.

### Report back

Tell me where the new hook is fired from in the code and what you adapted. Give your answers to the two questions.

Wording rules for anything you write back: British English and no exclamation marks. Say "the Botter Support Team" and never "our team".
