# Email strategy: one list with tags or several lists

Draft 1 for review. Nothing is set up in FluentCRM.

## 1. Pros and cons

| | One list with tags | Several lists |
|---|---|---|
| Contact record | One per person | A person on two lists is still one contact but sits in two groups |
| Moving someone on | Apply and remove tags | Remove from one list and add to another |
| Sending the same campaign | Choose a tag filter. Nobody receives it twice | A person on two lists can receive it twice unless excluded |
| Unsubscribe | One status for the contact | Same. FluentCRM unsubscribes at contact level |
| Consent separation | Needs a consent tag or a rule | Lists show the difference at a glance |
| Reporting | One place. Segment by tag | Scattered across lists |
| Risk | A wrong tag filter can mail the wrong group | A wrong list choice can mail the wrong group |
| Setup effort | Needs a written tag naming rule | Needs a written list naming rule and transfer rules |
| Fit for Botterverse | Good. The app already sends tags | Weak. The app does not move people between lists |

## 2. Recommendation

One list called **Botterverse** plus tags.

Reasons:
- The app already sends plan and lifecycle tags. A tag model matches it. A list model does not.
- FluentCRM unsubscribes at contact level, so extra lists give no separate opt-out.
- Pre-purchase leads and members need different content. A tag does that without a second list.
- The playbook's four lists (Interested and Customers and Affiliates) become tags.

If a pre-launch waiting list is needed later, add one list called **Waiting list** and remove people from it when they buy.

## 3. Tag scheme

Tags in **bold** are sent by the app. The rest are applied by automations.

| Group | Tags | Applied by |
|---|---|---|
| Status | Lead | Form sign-up |
| Status | Customer | Purchase automation |
| Plan | **Apprentice Botter** and **Novice Botter** and **Expert Botter** and **Pro Botter** and **Master Botter** | App |
| Journey | **Built First Bot** and **Published First Bot** and **First Sale** | App |
| Journey | **Migrated From GPT** and **Bot Market Seller** and **Bot Market Buyer** and **Power User** | App |
| Risk | **Cancelled** and **Plan Ended** and **Dormant** | App |
| Risk | **Downgraded** and the four **Downgraded From** tags. They rarely fire because a move down is now a cancel then a first plan. Do not build anything on them | App |
| Programme | Affiliate Joined | Automation on the affiliate trigger [verify] |
| Programme | First Commission | App [proposed new event affiliate_first_commission_paid] |
| Offer | Founder | App [proposed new event founder_confirmed] |
| Email state | Welcome Active and Welcome A Done and Welcome B Done and Welcome C Done and Welcome D Done and Welcome Done | Welcome automations. Removing Welcome Active stops the sequence and returns the member to the main list |
| Email state | Upgrade Active and Upgrade Done | Upgrade automations. Removing Upgrade Active stops the sequence and returns the member to the main list |
| Direction | Upgraded From Apprentice and Upgraded From Novice and Upgraded From Expert and Upgraded From Pro | App [proposed new events] |

Rules:
- A sixth plan tag exists in the app and is never used in any email or segment.
- One plan tag at a time. The app keeps this itself: it moves the plan tag when the plan changes and removes it when a plan lapses. No automation is needed and one could get in the way (app agent, confirmed 3 November 2026).
- Remove Lead when Customer is applied.
- Never name a tag after a person.
- Tags are for who someone is. Email state tags are for where they are in a sequence.

## 4. Sender and format rules

- Sender name: Botterverse.
- Subject prefix: [Botterverse] for general emails and [Botters Lab] for emails about the Botters Lab.
- No addresses or footers in the copy. WordPress and FluentCRM add them.
- Name the sign-in in any instruction: Botters Lab (username) or billing login or help desk.
- Never repeat the two links in the purchase email.

## 5. What the plugin check found (31 October)

Read from the plugin source. Nothing has been tested live. Full detail is in `Docos\admin-verification-report.md`.

1. **Plan purchase.** Use Subscription Activated with restart switched off. Order Paid also fires but it fires for Botter Boosters and any other order as well. Never use both.
2. **Upgrades.** FluentCart creates a new order and a new subscription and cancels the old one silently. So Subscription Activated fires again for the new plan. Restart off stops a member re-entering the welcome sequence. There is no FluentCRM trigger for a plan change. The app's tier tags remain the signal.
3. **Tags.** Tag Applied and Tag Removed are Pro triggers and they exist. One automation can start another by applying a tag.
4. **Conditions.** A Check Condition block (Pro) tests tags and lists and custom fields.
5. **Exits.** Removing a tag does not stop pending steps. A stop automation on Tag Removed with the Cancel Automations block does. A contact who unsubscribes has their next step cancelled.
6. **Unsubscribe.** It applies to the whole contact.
7. **Affiliates.** The affiliate plugin has Registered as Pending and Account Approved and Successful Referral Created and Payout Sent triggers. Payout Sent fires from the plugin only. The app pays commission so it will not fire.
