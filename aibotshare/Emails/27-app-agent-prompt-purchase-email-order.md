# Prompt for the app coding agent: swap the two steps in the purchase email

Copy everything below the line into the app agent's session.

---

## Brief: put the Botters Lab account step first in the purchase email

Members can now sign in to the billing account with their Botters Lab username. So the better order for a new member is to create the Botters Lab account first and then set up the billing login.

### What to change

In the `btv_checkout_guard` plugin, the buyer account email (the subject is "Your Botters Lab purchase: two quick steps"):

1. Swap the two numbered paragraphs so that **1** is the Botters Lab account and **2** is the billing login.
2. Change the default body in the plugin (`includes/BuyerAccount.php`) to the wording below.
3. Update any tests that quote the old order.

### New body

```
Hi {{first_name}},

Thanks for your purchase. There are two things to set up.

1. Your Botters Lab account. This is where you build your bots. Create it with this same email address so your plan is added to it: {{register_url}}

2. Your billing login. This is where you see invoices, change your card or cancel. Set its password here: {{set_password_url}} You can sign into your billing account with your Botters Lab username as well.

Already have a Botters Lab account under this email? Sign in and verify your email if you have not yet. Your plan is then added automatically.
```

The subject stays as it is. The local site's saved option is already changed to match.

### Questions

1. Does the plugin send a plain-text email or an HTML one? The website wraps plain-text emails in the Botterverse layout so it would show the numbered paragraphs as they are.
2. Is there any other place that shows these two steps in this order (a screen, a help article or another email)? List each one.

### Report back

Number each answer. British English and no exclamation marks. Say "the Botter Support Team" and never "our team".
