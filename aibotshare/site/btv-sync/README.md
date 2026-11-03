# btv-sync

Creates and updates the Botterverse tags, FluentCart emails and FluentCRM automations from the files in `data\`. It is safe to run again. It finds everything by name or key and never by ID. It never deletes a tag or a contact.

## Run it

```
php bin\run-sync.php --wp=<path to the WordPress folder> --user=<login of a WordPress admin>
```

Add `--publish` to publish the automations whose file says `"publish": true`. Without it every automation stays in draft. On the local site the WordPress folder is `D:\Users\Quokka\Desktop\Websites\botterverse\public` and the user is `agentuser`. It needs PHP on the command line. WP-CLI is not used.

## Install

Link or copy this folder to `wp-content\plugins\btv-sync` and activate it. The plugin registers the Botterverse email design (the default for new emails) and the `{{domain}}` smart code. Locally the folder is a Windows folder junction to this one.

## Files

| File | What it holds |
|---|---|
| `data\tags.json` | Tags to create when missing |
| `data\emails.json` | Email subjects and HTML. Built by `tools\build-email-data.py` from `Emails\build`. Do not edit by hand |
| `data\fluentcart.json` | Which FluentCart emails carry our wording and which stock ones are switched off |
| `data\funnels\*.json` | One automation per file |
| `data\forms.json` | The Fluent Forms lead capture form and its FluentCRM feed. The form id is kept in the option `btv_lead_form_id` |
| `data\campaigns.json` | Draft broadcast campaigns. Never sent by the sync |
| `data\settings.json` | FluentCRM experimental features. `abandoned_cart` is `no` until launch |
| `data\assets\btv-email-logo.png` | Uploaded to the media library once |
| `templates\email.html` | The branded email wrapper |

## An automation file

```
{"title": "...", "trigger": {"type": "tag_applied|tag_removed|subscription_activated", "tags": [...]},
 "run_multiple": false, "publish": false, "steps": [ ... ]}
```

Steps need a unique `key` within the automation. The key is how the step is found again, so renaming a key makes a new step. Step types:

- `email` with `"email": "<id in emails.json>"`
- `wait` with `amount` and `unit` (minutes, hours, days)
- `add_tag` and `remove_tag` with `tags`
- `cancel` with `automations` (titles of other automations, which must have files)
- `end`
- `condition` with `if` (`tags` and `match` of `any` or `all`) and `yes` and `no` lists of steps. One level only, as FluentCRM allows

## Tested and not tested

Tested on the local site on 3 November 2026 with temporary contacts (removed afterwards, mail captured and never sent):

- Lead tag starts O01 and Customer stops it. A purchase start of A0 sends S01, adds and removes the right tags and reaches the day 2 wait. Removing Welcome Active cancels A0.
- Plan Ended starts the win-back and a new plan tag clears Cancelled and Plan Ended.
- An upgrade from Novice to Pro is detected, routed to the Pro sequence and starts with the recap email.
- Each of these tags starts its automation and queues the right email: Refunded, Dormant, Auto Top Up, Bot Market Seller, Bot Market Buyer, First Sale, Migrated From GPT, Founder, Plan Ending Soon, Plan Ended, Affiliate Joined (ends for an Apprentice) and First Commission.

Not tested yet:

- The real FluentCart Subscription Activated event. A0 was started directly in the test.
- The cart-abandoned trigger. O04 stays a draft until a real abandoned cart has been seen.
- The FluentCart emails with a real order and a real cancelled subscription.
- Any email actually leaving the server.
- A publish on the live server. `--publish` publishes only the automations whose file says `"publish": true` and then rebuilds FluentCRM's list of active triggers. Without that rebuild a published automation never starts.

## Rehearse on a copy

`--db=NAME` runs the sync against another database on the same server. It stops with "Cannot switch" unless the switch took, so it can never write to the site's own database by mistake.

1. Create an empty database and import a snapshot taken before any build, for example `backups\pre-build-2026-11-02.sql`.
2. Give the WordPress database user access to the copy only: `GRANT ALL PRIVILEGES ON copy.* TO user@localhost`. Without it the switch silently fails.
3. Run the sync twice with `--db=copy`. The second run must change nothing.
4. Compare tags, automations, steps, emails and forms with the real database, then revoke the access and drop the copy.

Done on 3 November 2026: a run from nothing produced exactly the local result (40 automations, 506 steps, 171 emails, 2 draft broadcasts, 1 form with its feed) and a repeat run changed nothing. The media library file for the logo is shared between the copy and the site, so delete the copy's extra upload afterwards.
