# Prompt for the app coding agent: two corrected answers and a plan upgraded email

Copy everything below the line into the app agent's session.

---

## Brief: thank you, one correction and two new emails

Thank you for the answers in `app-facts-for-marketing.md`. They settle most of what I needed. One of my questions named an email by a code that exists only in my own list, so you read it as another email. That was my fault for not describing it. Part 1 below asks it again with the right meaning. Part 2 is the wording for an email when a member moves up a tier. Part 3 is three small questions that came out of your answers. Part 4 is a password changed email.

As before I wrote this from outside the code. Adapt anything that does not fit. Do not change code for Part 1 or Part 3. Part 2 asks for a change once you have answered its questions.

### Part 1 - One question asked again

**Q42 again. The seller's sale email.**
I believe the seller's sale email is `sales.sale_made`, which has the tag `sale_type_name`. My wording says "{{buyer_username}} has bought access to {{bot_name}}" and gives the seller's share.

- Does `sales.sale_made` go for all three kinds of sale (paywall access, message top-up and Bot Market sale) with the same wording?
- What values can `sale_type_name` take? List them exactly as the member would read them.
- Does the email carry the buyer's username? The tag list shows `member_name`, `bot_name`, `sale_type_name`, `earnings_amount` and `sales_url` only.
- Is the seller's share (`earnings_amount`) the amount after the platform fee?
- Which of the Sales and Insights switches under Email notifications turns this email off?

### Part 2 - New email: plan upgraded

The app sends nothing when a member moves up a tier. `MemberTier::afterChange()` fires only the CRM hooks. Please add an email for a real move up. Use the same route as `plan.ended` and `plan.fewer_bots`.

Questions before you build it:

1. Which tags can the template carry? I need the old plan name and the new plan name as well as `member_name` and `billing_url`. If the old plan name is not available at that point tell me and I will remove it from the wording.
2. Can the email go before the invoice is paid? The wording says the change takes effect now.
3. When a member moves up, does the app return bots that the lower plan had paused? If it does can the email carry how many came back? If it can tell me the tag name and I will add a sentence. If it cannot leave the email as it is.
4. Should a member whose account is closing or closed receive it? I suggest not, as for the other plan emails.
5. What does **Your plan** on Billing and credits show for the new plan? I want the email to say "look under Your plan to see what the new plan includes" only if the section lists the plan's features.

Wording, final unless one of the answers above changes it. Keep the words as written. Leave out the sign-off and the subject prefix as before, since the layout adds them.

**Subject:** Your plan is now [new plan name]

**Body:**

Hi [first name],

Your plan has changed from [old plan name] to [new plan name]. The change takes effect now.

Your unused included credits have been reset and the new plan's included credits have been added. Remaining credits from any credit packs you bought are untouched.

Open Billing and credits and look under Your plan to see what the new plan includes.

Link "Billing and credits" to the member's Billing page. Do not mention a bot count in the body unless your answer to question 3 supplies one.

Name the template `plan.upgraded` or whatever fits your naming. It is an account notice. Members cannot switch it off.

Tests:
- A move up from any tier to a higher one sends one email with the right old and new plan names.
- A new first plan (no earlier plan) sends nothing, because that is a purchase and not a move up.
- A move down sends `plan.downgraded` and never this email.
- A closing or closed account receives none.
- The email uses the app's normal layout and sender.

### Part 3 - Three small questions from your answers

A. **Q23 restart gap.** You wrote that a member whose bots have stopped for want of credits has no usage charge, so Auto top-up makes no new attempt. Is that gap deliberate? I will not ask for a change. I only need to know whether I should word the daily cap email around it.

B. **Q25 re-agree flow.** The member must press **Switch off** and then **Agree and switch on** after a new statement. Is that deliberate? Same reason: I need to know whether the wording should describe it or whether the page will change.

C. **Q48 tag rename.** You wrote that the tag once called Power User is now `Auto Top Up` and fires on the first successful auto top-up. Please confirm the exact tag word on the live CRM Integration settings, as I must use it in FluentCRM.

### Part 4 - New email: password changed

You told me (answer 32) that the app sends no email when a password changes. The owner wants one. Please add it as an account and security notice. Members cannot switch it off.

Send it to the account email whenever the password changes, whether through Settings or through the forgotten-password link. Do not send it to a closing or closed account.

Wording, final unless one of your answers changes it. Leave out the sign-off and the subject prefix as before.

**Subject:** Your password has been changed

**Body:**

Hi [first name],

The password for your Botter's Lab account has just been changed.

If this was you there is nothing to do. If it wasn't you use Forgotten password? on the Sign in page to choose a new one and contact the Botter Support Team through the Support page.

Link "Sign in" to the app's sign-in page and "Support" to the Support page the app already links.

Name the template `auth.password_changed` or whatever fits your naming.

Questions:
1. Does the email need a tag for the time of the change? I do not want one unless it is easy.
2. Do both routes (Settings and the reset link) go through one place so the email cannot be missed or sent twice?

Tests:
- A change on Settings sends one email.
- A reset through the forgotten-password link sends one email.
- A failed attempt sends none.
- The email uses the app's normal layout and sender.

### Report back

Answer each numbered question with the number. For Part 2 tell me what you adapted and where the email is sent from. Wording rules for anything you write back: British English and no exclamation marks. Say "the Botter Support Team" and never "our team".
