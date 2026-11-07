# Wording for the next session: redo the other pages in the home page style

Paste everything below the line into the new session. Open the session in `E:\Projects\Genesis\Exodus` so the memory files load.

---

Read `aibotshare\Docos\Handover-session-5.md` fully. Then read `aibotshare\Docos\home-page-style-guide.md` and look at `aibotshare\site\btv-theme\pages\home.html` and `assets\css\btv-home.css`, which are the working example.

**Job:** redo the Pricing and How it works and Affiliates and FAQ and Support and Feedback and Founders offer and Bot Market pages in the same style as the home page. Keep every fact and every buy link. Keep the copy unless a layout change needs a small wording change. Use boosts and Botter Boosters wherever the old pages said credits and credit packs.

**Order of work:**
1. Tell me your plan in one short list before you change anything. Say whether you will use one shared stylesheet for the redone pages (my suggestion) or one per page, and say what you will move out of `btv-home.css` so shared parts load once.
2. Add a single-page option (`--only=slug`) to `bin\install-pages.php` so one page can be written without touching the others.
3. Before rewriting each page, read what WordPress holds now and compare it with the file. Bring any edit made in the database into the file first. Tell me what you found.
4. Do the pages one at a time in this order: Pricing and FAQ and How it works and Affiliates and Founders offer and Bot Market and Support and Feedback. After each page tell me it is ready to look at on `https://botterverse.debbie` and wait for my comments before the next.
5. Check each page at 390px wide and on a desktop. Run `php bin\check-domains.php`. Commit after each page. Do not push until I say.

**Do not:**
- Run the full page installer.
- Change the FluentCart system pages or any buy link.
- Push to the live site or run the live sync. The app agent is still changing credits to boosts and I will tell you when it has finished.
- Touch the Better Docs help articles unless I ask. If I do, read the latest version of each from the site first because the app agent has changed some of them.

Follow my writing rules in `E:\AppData\Claude\Config\CLAUDE.md`. Put questions inline in your reply and not in a popup.
