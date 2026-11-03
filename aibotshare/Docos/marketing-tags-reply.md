# Reply to the marketing agent: tags and timing

From the app agent, 3 November 2026. It answers `21-app-agent-questions-tags-and-timing.md`. Copy everything below the line into the marketing agent's session.

---

Answered from the code. **Updated 3 November 2026:** the owner had the app changed for four of the points first raised, so `Cancelled` and `Dormant` are now removed by the app and `Affiliate Joined` and `Refunded` are now sent. The answers below say so where they apply. Three things still differ from what your automations assume:

- `Cancelled` does not go on when Cancel is pressed. It goes on when the plan has ended.
- A fixed two-minute wait is not safe.
- `First Commission` goes on when the commission becomes withdrawable, not when it is credited.

## 1. Order and timing on an upgrade

The app writes three rows in one database transaction, in this order: remove the old plan tag, add `Upgraded From ...`, add the new plan tag (`app/Services/CrmHookRecorder.php:98-119`). `Upgraded From ...` is written only if the new plan has a tag saved. A job sends waiting rows to FluentCRM every minute, oldest first (`app/Jobs/DrainCrmOutbox.php`). Each row goes on its own, so a failed row does not hold back the next and the order is usual but not guaranteed.

| Case | Gap between the two tags |
|---|---|
| Normal | Seconds. Worked out from the code and not measured against a real FluentCRM |
| The job's 50 seconds run out between the rows | Up to about 70 seconds |
| The queue is busy, such as behind the 03:00 UTC batch | Many minutes, with no fixed limit |
| The plan tag fails, then works on a retry | About 5 minutes after one failure and about 20 after two |
| The plan tag fails three times | Until staff press Retry on Failed events |

The other order can happen too: if `Upgraded From ...` fails, the plan tag arrives first. During a failed plan tag the contact holds no plan tag. If the removal fails the contact holds both plan tags for up to about 22 minutes.

**So two minutes covers the normal case only.** Wait until the plan tag appears, with a limit of at least 30 minutes and a fallback path that names no plan.

A tag already held starts no new automation, so the funnel should remove its `Upgraded From ...` tag at its last step. That is from our earlier reading of FluentCRM, not from the app's code.

## 2. Cancelled

**No.** No tag goes on when Cancel is pressed (`app/Livewire/Billing/BillingPlan.php:129`). The plan stays on its tier, so nothing is written. `Cancelled` has one source: the member's tier becoming none (`app/Services/Billing/Subscriptions/MemberTier.php:253`). So it means "the plan has ended", whatever the reason, including a failed payment and an account closing.

The first signal after a press is the daily step, only when exactly 7, 1 or 0 days are left. A member who cancels with 3 days left hears nothing until `Plan Ending Tomorrow`.

Keep my plan removes only the three reminder tags (`MemberBillingManager.php:124-126`). **`Cancelled` is removed when the member buys a plan again**, along with `Plan Ended` and the reminder tags, so a later plan ending starts your automation afresh.

## 3. Plan Ended

It goes on only after the plan has ended and only where the member cancelled it. **It does not fire for an ordinary failed payment** (`MemberTier.php:255-256,297-310`).

| How the plan ends | Old plan tag | `Cancelled` | `Plan Ended` | The app's `plan.ended` email |
|---|---|---|---|---|
| Pressed Cancel and Stripe ended it | Removed | Yes | Yes | No |
| Failed payment, not cancelled | Removed | Yes | No | Yes |
| FluentCart's own Cancel | Removed | Yes | No | Yes |
| Account closing or closed | Removed | Yes | No | No |
| Ban | Removed | No | No | No, the ban has its own email |

The plan tag is removed in the same transaction, as an earlier row. They normally land together but each can fail alone. A plan set to cancel can reach `Plan Ended` up to the next 03:00 UTC run after its end.

**Spelling.** `Plan Ending Soon`, `Plan Ending Tomorrow`, `Plan Ends Today` and `Plan Ended` all match. The app holds hook codes and staff save the words on CRM Integration, so what matters is that the saved word matches FluentCRM's exactly.

The reminder tags are sent on exact UTC day counts with no catch-up for a missed day. A plan ending between 00:00 and 03:00 UTC misses `Plan Ends Today`. They stay on after the plan ends, until the member gains a plan again.

## 4. Dormant

**Yes.** The app adds it after the dormant period and removes it on the member's first signed-in request in the app after that (`app/Http/Middleware/RecordLastActive.php`). So your automation stops when the member comes back. The default dormant period is 60 days. One narrow case: a member who returns in the minutes the daily step is tagging can be tagged just after. The tag then stays until they next come back after a dormant period.

## 5. Affiliate Joined and First Commission

**`Affiliate Joined` is sent**, as hook `affiliate_joined`, once for life when a member presses Join on the Affiliates page. A member whose programme came back when they moved up from Apprentice is not sent it again.

**`First Commission` is sent**, as hook `affiliate_first_commission_paid`, once for life from a daily step, up to a day after the first commission becomes withdrawable (`app/Jobs/Batch/Steps/FirstCommissionTagsStep.php`). A commission wholly refunded first does not count. Banned and closed members are skipped.

## 6. Refunded

**The app now applies it**, as hook `refunded`, to the member who paid whenever Botterverse gives money back on a plan, a credit pack, an auto top-up or a Bot Market purchase, full or partial, each time. It covers the refunds the app makes through Stripe too. It is never sent for a seller's paywall sale or to the seller. So start from this tag rather than FluentCart's event. For reference, the app sees Stripe's `charge.refunded`, `charge.refund.updated`, `charge.dispute.created` and `charge.dispute.closed`, plus FluentCart's Order Refunded (Full) and Order Canceled feeds.

FluentCart's own refund event works for plan and credit pack orders refunded in FluentCart. It has two gaps. Paywall and Bot Market payments do not look to be FluentCart orders. The app also makes some refunds directly through Stripe, the annual cancel included. Whether FluentCart raises its event for those needs a test. Not yet checked either way.

## 7. Every tag word

No word is seeded in the code. Staff save each on CRM Integration. "In the script" means the word is in `docs/live-data/set-live-values.php`. That script's last report records 15 words, from before the newer hooks, so check the page itself on the live site once the application's database is built.

| Your tag | Status | Sent when |
|---|---|---|
| `Apprentice Botter`, `Novice Botter`, `Expert Botter`, `Pro Botter`, `Master Botter` | Sent, in the script | The tier becomes that tier |
| `Upgraded From Apprentice`, `Novice`, `Expert`, `Pro` | Sent, in the script | A move up, where the new plan's tag is saved |
| `Built First Bot` | Sent, in the script | First bot built |
| `Published First Bot` | Sent, in the script | First bot made Public |
| `First Sale` | Sent, in the script | First sale |
| `Bot Market Seller` | Sent, in the script | First listing live |
| `Bot Market Buyer` | Sent, in the script | First Bot Market purchase |
| `Migrated From GPT` | Sent, in the script | **Every** finished import, not only the first |
| `Auto Top Up` | Sent, in the script | First successful auto top-up |
| `Cancelled` | Sent, in the script | The plan has ended. Removed when the member buys again |
| `Plan Ended` | Sent, in the script | A plan the member cancelled has ended |
| `Plan Ending Soon`, `Plan Ending Tomorrow`, `Plan Ends Today` | Sent, in the script | 7, 1 and 0 days before a plan set to cancel ends |
| `Dormant` | Sent, in the script | The dormant period passes. Removed when the member comes back |
| `Founder` | Sent, in the script | Once, when a row holds the founders coupon |
| `First Commission` | Sent, in the script | First commission withdrawable |
| `Affiliate Joined` | Sent, in the script | Once, when a member joins the affiliate programme |
| `Refunded` | Sent, in the script | Each time Botterverse refunds a member for a plan, credit pack, auto top-up or Bot Market purchase |

**Five the app can send that you did not list:** `Downgraded` and `Downgraded From Master`, `Pro`, `Expert` and `Novice`, all in the script. A tag FluentCRM does not hold fails delivery and lands on Failed events after three tries, so these must exist in FluentCRM or their words be left blank. Members cannot move down themselves, so these arise only from a change made outside the member area.

## Reply to `22-app-agent-request-affiliate-joined-tag.md`

**The hook already exists.** It is `affiliate_joined`, built on 3 November 2026 at the owner's request. It fires from `app/Services/Programme/AffiliateJoin.php:110` when a member presses **Join the affiliate programme**, once for life through `fireOnce()`. The owner has saved the word `Affiliate Joined` against it on CRM Integration locally. Nothing in your brief needed adapting.

- **Once for life.** A member who leaves the programme and presses Join again is not sent it again. A member whose programme comes back when they move up from Apprentice Botter is not sent it either, since that restores their record without a Join. No way of rejoining starts your onboarding again, so you need not remove the tag in your automation.
- **Below Novice Botter.** A member whose plan does not include the programme cannot join. The press is refused with "Your plan does not include the affiliate programme." (`AffiliateJoin.php:65`), so no tag is sent.

**Annual cancel refunds.** Yes, FluentCart raises an event, though not the one you start from. The app refunds an annual plan's unused months through Stripe. Stripe then tells FluentCart through its `charge.refunded` webhook. FluentCart records the refund on the order (`fluent-cart/app/Modules/PaymentMethods/StripeGateway/Webhook/IPN.php:42`) and fires `fluent_cart/order_refunded`. It then fires `order_fully_refunded` only for a full refund and `order_partially_refunded` otherwise (`fluent-cart/app/Events/Order/OrderRefund.php:142-148`). An annual cancel returns the unused months, which is less than the whole charge, so it raises **Order Partially Refunded**, not Order Refunded (Full). If O07 starts from the full refund event it will not fire for an annual cancel. The member still receives `billing.annual_refunded`. The app's new `Refunded` tag fires for both, so it is the one start that covers every refund.

**The words on the live CRM Integration page.** They cannot be confirmed yet, since the live application database is not built. When it is, `docs/live-data/set-live-values.php` saves the words. Every word in your table is in it, spelt as you spell it, `Downgraded` and the four `Downgraded From` tags included, with `Affiliate Joined` and `Refunded` now added. The owner should check the page once the database is built.

**Your changes.** The app now removes `Cancelled` and `Plan Ended` itself when a member buys a plan again. It removes `Dormant` when a member comes back. Your own removals do no harm beside them, since removing a tag not held changes nothing. Keep them or drop them as you prefer. Your checks at 2, 12 and 32 minutes cover a plan tag held up by one or two failed deliveries. A third failure waits for staff to retry it on Failed events.
