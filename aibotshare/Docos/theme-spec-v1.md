# Bespoke theme spec, draft 1

A specification. Nothing is built and nothing is written to the WordPress site. The theme is a block theme with its own code. It is not a child of Twenty Twenty-Five. Pages are built as code and are never made in the Site Editor.

## 1. Principles

- One stylesheet for tokens and components. No inline styles anywhere.
- All page content lives in the repository as block markup.
- No link carries a typed domain. See section 8.
- Plain and fast. System fonts as fallback. Fonts hosted by the theme.
- Accessible by default: contrast and focus and reduced motion.

## 2. Folder layout

```
botterverse-theme/
  style.css                 theme header only
  theme.json                palette and fonts and spacing and block defaults
  functions.php             small and documented
  assets/
    css/botterverse.css      tokens and components
    css/integrations/       fluent-support.css and fluent-forms.css and fluentcart.css and better-docs.css and login.css
    fonts/                  Baloo 2 and Nunito Sans
    img/                    logo and favicon
  templates/                front-page and page and page-wide and index and single and archive and search and 404
  parts/                    header and footer
  patterns/                 reusable sections
  styles/                   nightshift.json (optional variation)
```

## 3. Tokens

| Token | Value |
|---|---|
| Background | #f8f7ff |
| Sidebar and soft panels | #ebedfc |
| Card | #ffffff |
| Brand pink | #dc8fd5 |
| Pink hover | #c876c1 |
| Pink tint | #ffe0fb |
| Heading text | #282637 |
| Small coloured text | #984f92 |
| Nightshift background | #080d16 |
| Nightshift accent | #00d1da |

- Headings: Baloo 2. Body: Nunito Sans. Nightshift uses Sora and IBM Plex Sans.
- Full palettes are in `Docos\pleasant-pink-colours.md` and `Docos\nightshift-colours.md`. Use their hex columns in the theme and in emails.
- Button text on pink is #391d37 (6.34 to 1). White on pink is only 2.36 to 1 so it is never used. Pink is never used as text. Use #984f92 for coloured text and links.
- Nightshift button text is #04070f (about 10.7 to 1). The accent works as text there.
- Extra tokens from the docs: alternate surface #f1f1f8, secondary text #4f4d5f, muted text #605e71, border #a9a8af, success #036639, warning #895800, danger #ac3031, info #0e5794. Corners: cards 22px and navigation 16px and controls 12px.
- Pink on cyan has about 1.25 to 1 contrast so never put them together.
- Radius and spacing and shadow tokens are defined once in the stylesheet and in `theme.json`.

## 4. Templates

| Template | Used for |
|---|---|
| front-page | Home |
| page | Default pages |
| page-wide | Account and Fluent Support portal and Better Docs wrappers. Full width. Heading aligned to the content |
| index | Articles (hidden until after launch) |
| single | One article |
| archive | Article lists |
| search | Search results |
| 404 | Not found |

Cart and checkout and receipt and order review use `page-wide` and are styled only by CSS. Their content is never changed.

## 5. Template parts

**Header**
- Logo on the left. Menu in the centre. Icons on the right.
- Signed out: Pricing and How it works and Affiliates and FAQ then a cart icon (only when the cart has items) then Log in.
- Signed in to WordPress: Botter's Lab button and Support and an Account icon. No Pricing or Shop or Cart or Checkout.
- The signed-in switch is a small PHP pattern that tests whether the visitor is logged in.

**Footer**
- Three columns: Product and Help and Legal.
- The Legal column uses the Footer navigation post so you can edit it.
- The bottom credit row is removed.

## 6. Patterns

Hero. Three-up cards. Steps. Plan cards. Comparison table. Founders band (one block to remove). Call-to-action band. FAQ accordion. Notice. Swipe list. Email capture form. Table for the earnings illustration.

No testimonial pattern is built while there are no testimonials.

## 7. Integrations to style

Method for each: CSS only unless the plugin offers a template override. Class names are in `Docos\admin-verification-report.md`. FluentCart sets `--fct-*` colour variables on `:root` late so the theme overrides them with a later rule or sets the FluentCart option that inherits theme colours. Fluent Support uses `--fs-*` variables and `.fs_*` classes inside `#fluent_support_client_app`.

| Surface | Approach |
|---|---|
| Fluent Support portal and login and feedback form | Scoped CSS file. Page copy above it from `pages-copy-v1.md` |
| Fluent Forms | One global style preset plus scoped CSS. All forms use the brand look |
| Better Docs | Brand its templates. Override in the theme if the plugin allows it |
| FluentCart cart and checkout and account and receipt | Scoped CSS only. Account pages use a full-width wrapper so the heading lines up with the panel |
| WordPress login and lost password | `login_enqueue_scripts` and the logo filters. Copy from section 7 of `pages-copy-v1.md` |
| FluentCRM email template | One branded HTML template: plain background and one accent colour and one button. No banners |

## 8. The domain rule

- Same-site links: root-relative paths such as `/pricing/`.
- Links to the Botter's Lab: written `https://lab.{{domain}}/login`. The token `{{domain}}` is the base domain only. A theme filter replaces it at render time with the site's own host from `home_url()` with any `www.` removed.
- One helper function builds the Lab address for PHP. The header Log in link uses it.
- FluentCRM emails use the same token with absolute links. The theme answers the `fluentcrm_smartcode_fallback` filter for `{{domain}}`. A normal smart code cannot be used because FluentCRM needs a group and a key.
- The build fails if a typed domain appears in the source.

## 9. Behaviour

- Articles page: not in any menu and set to noindex until after launch.
- No JavaScript framework. Small scripts only for the accordion and the menu button.
- Reduced motion respected. Visible focus on every control.
- Nightshift is optional. It is off until you decide.

## 10. Build and release

- The theme lives in the build repository under `site/`. Designs stay under `design/`.
- A sync script writes page content from the repository. Page IDs are kept per environment.
- Nothing is built until you approve the designs.

## 11. Open items

1. Resolved: button text on pink is #391d37.
2. Whether Nightshift is offered on the website.
3. Test the plugin styling live. The class names come from source and have not been tested on a filled cart or a logged-in account.
5. Yoast fields on pages: the theme registers `_yoast_wpseo_title` and `_yoast_wpseo_metadesc` and `_yoast_wpseo_focuskw` for pages with `show_in_rest` so the sync can write them.
4. Whether the cart icon can show an item count (depends on FluentCart).
