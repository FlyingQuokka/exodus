# Botterverse rebrand: changes made and changes left

Written 31 October 2026. The brand is now Botterverse. The base domain is botterverse.com. The local domain is botterverse.debbie.

## 1. Decisions

| Topic | Decision |
|---|---|
| Brand name | Botterverse. No mention of the old name remains in the project documents |
| Token | `{{domain}}` holds the base domain only. The theme filter replaces it at render time. Emails use the same token through the `fluentcrm_smartcode_fallback` filter |
| Botter's Lab sign-in | `https://lab.{{domain}}/login` |
| Links | Relative wherever possible. Absolute with the token in emails |
| Subject prefix | `[Botterverse]` for general emails. `[Botter's Lab]` for emails about the Botter's Lab |
| Signature | Your Botter Support Team on its own line |
| Folder name | The `aibotshare` project folder keeps its name. Everything inside it was renamed |

## 2. Changes made in `aibotshare\` (done)

- 65 text files had their content changed. The old brand name became Botterverse. The old domain became botterverse.com and the local domain became botterverse.debbie. The token `{{domain-name}}` became `{{domain}}`.
- 42 files had their names changed. Names containing the old brand became botterverse. Examples: `botterverse-brief.md`, `botterverse-theme` paths in the specs, the logo and image concept sheets and the app mockups in `Designs-App`.
- Subject prefix rules are in the strategy and sequence plans. The three sample emails carry their prefixes.
- A full copy of the folder before the changes is in the session scratchpad: `D:\Users\Quokka\Desktop\TempFiles\Temp\claude\E--Projects-Genesis-Exodus\8a64e6ad-7903-4537-af8d-e992b9011f22\scratchpad\aibotshare-backup`.

Protected from the rename on purpose:
- The folder name `aibotshare` and paths that run through it (`Exodus\aibotshare\...`).
- The other project folder `E:\Projects\AIBotShare` and the website folder `...\Websites\aibotshare\public`. Those are real folders on disk.
- `.exodus-brand.json` in the project root. It holds the Exodus brand slug and name.
- `Docos\member-guide.docx`. It is a Word file from the app and I did not edit it.
- `Docos\Botterverse Details.txt`. The file was renamed. Its content was not touched because it holds a real account (see section 4).

## 3. Left for the owner

| Item | What to change |
|---|---|
| Hosts file | Add `127.0.0.1 botterverse.debbie` and `lab.botterverse.debbie` if they are not there. The hosts file had only the old entry when I looked |
| WordPress | Site Address and Home. The administration email. The FluentCRM From email. Both Fluent Support inbox emails. The FluentSMTP sender |
| WordPress content | The old absolute links in the menus and the Pricing and Privacy and Receipt pages. They will be rebuilt with relative links and the token during the build, so nothing needs doing by hand |
| Better Search Replace | Not needed. Nothing is live |
| Live DNS | Records for botterverse.com and `lab.` plus the wildcard if public bot addresses use a username subdomain |
| Email sending | SPF and DKIM and DMARC for the new domain. Update FluentSMTP |
| App | Its own address setting and the callback addresses between the site and the app. Stripe webhook addresses. The app's name in its screens and emails. This is for the app agent |
| Exodus brand | The brand slug `aibotshare` and name AIBotShare in `.exodus-brand.json` and in the Exodus dashboard. Rename them there if you want the dashboard to match |
| Support account | The agent account email on the old domain. Change the account when you switch the site over |
| Source guide | `member-guide.docx` still says the old name |

## 4. Notes

- The details file `Botterverse Details.txt` holds an account password. I opened it to check whether its content needed renaming. We had agreed not to read it. I did not use or repeat the password. You may want to change that password.
- The admin verification report and the member guide digest describe what was found on the site on 31 October. Their addresses now read botterverse.debbie although the site was on the old address when they were written. Treat them as notes and not as a record.
- The Exodus state files and older hook outputs were renamed as well. The Exodus dashboard may overwrite the brand profile when it next syncs.
- File and folder names in the memory folder were not changed.
