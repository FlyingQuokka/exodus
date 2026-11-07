# Page design brief

Every agent building a Botterverse page design reads this first. Designs are plain HTML and CSS prototypes in `E:\Projects\Genesis\Exodus\aibotshare\Designs-WP\Pages\`. They are translated to WordPress blocks later. Nothing is built in WordPress. Never touch the WordPress site or the files outside `aibotshare\`.

## Shared files (already built, do not edit)

- `assets/botterverse-pages.css` is the shared stylesheet: tokens and components (header and footer and buttons and cards and grids and steps and plan cards and compare table and accordion and forms and bands). Link it and reuse its classes. Page-specific rules go in a short `<style>` block in the page head.
- `assets/_page-skeleton.html` is the page skeleton with the header and Founders band and footer. Copy it for every new page. Keep the header and footer markup as it is.
- `assets/logo.svg` (logo for light backgrounds) and `assets/logo-on-dark.svg` (for dark backgrounds) and `assets/mark.svg` and `assets/favicon.svg`. These are the final logo files. Never redraw them.
- `assets/seal.svg` (main Certified by Botterverse seal) and `assets/seal-small.svg` (use at 64 pixels and under).
- `assets/pictures.js` holds ten illustrations. Put `<div class="pic" data-pic="N"></div>` in a page and include `<script src="assets/pictures.js"></script>` (the skeleton already does). N is: 1 the remote (bots you control) / 2 the bot reads its brief (instructions) / 3 file tiles feeding the bot (knowledge) / 4 paste a snippet into a web page (share and embed) / 5 price ticket and message meter and guarantee (sell) / 6 unplugged grey bot and the import slot (bring a GPT across) / 7 the model dial (choose the model) / 8 anonymous and named visitors (know who is chatting) / 9 the Certified card (checked bots) / 10 the boost tank and tap (daily boost limit). Pictures are 640 by 400. Use one only where it matches the text next to it. Do not draw new pictures.
- Colour tokens are CSS variables. Pleasant Pink is the default. `data-theme="nightshift"` on `<html>` switches to the dark style.

## Rules for everything you write

1. British English. Never a comma before the word and or the word or. Hyphens only and never an en or em dash. Never the word get. Plain and short. No flowery language. Do not sound like an AI. No exclamation marks.
2. The brand is Botterverse. The old name never appears. Never type a domain. The Botters Lab sign-in link is `https://lab.{{domain}}/login`. Links between the designs use the file names (`pricing.html`). Same-site system pages use root-relative paths such as `/terms-and-conditions/`.
3. Never mention: the sixth tier or Empire, the Founder badge, testimonials or invented customers or results, income claims, a named competitor, "daily" payouts. The customer download always carries the consent condition (only customers who ticked the box are included). Priority support starts at Pro. Founders offer facts: 50% off every plan for life, coupon code FOUNDER50 entered at checkout, closes 30 November, works on every plan.
4. Use only copy from the copy files named in your assignment. Do not invent product facts. If a copy line has a square-bracket note, treat the note as a note to the owner and keep it out of the page.
5. Buttons: the main action reads "Take Me To The Botterverse". Button text on pink is `#391d37`. Pink is never used as text (use `--accent-text`). White text on pink is never used.
6. Accessible: contrast AA or better, visible focus, headings in order, alt text on images, works at 390 pixels wide with no sideways scroll, respects reduced motion.
7. Keep each page's own CSS short. No JavaScript frameworks. A few lines of plain JS only where needed.

## How to check your work

Render with Chrome headless and look at the picture with the Read tool. Desktop and phone:

```
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --hide-scrollbars --window-size=1280,2400 --screenshot=<scratch>\page-desktop.png file:///E:/Projects/Genesis/Exodus/aibotshare/Designs-WP/Pages/<page>.html
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --hide-scrollbars --window-size=390,3000 --screenshot=<scratch>\page-phone.png file:///...
```

Write screenshots to the scratchpad directory only (D:\Users\Quokka\Desktop\TempFiles\Temp\claude\E--Projects-Genesis-Exodus\d6b6f872-9ea5-410d-a4be-bbdd2138c73a\scratchpad). Fix any overflow or overlap you see. Then grep your files for: a comma before and or or (the pattern comma then space then and or or), any en or em dash, the word get, the old name AIBotShare, and a typed domain. Fix every hit. Report in under 100 words.
