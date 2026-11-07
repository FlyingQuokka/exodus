# Home page style guide (for the app agent)

Written 7 November 2026 from `site\btv-theme\assets\css\btv-home.css`, `btv-theme.css` and `theme.json`. The home page is the first page in the new look. Every other site page will follow it. The app should use the same tokens so members see one brand.

The source of truth is the CSS files above. If a value here differs from the file, the file wins. Tell the owner so this guide can be corrected.

## 1. Fonts

Four families are used. All are open licence (SIL OFL) and available from Google Fonts. The woff2 files are in `site\btv-theme\assets\fonts\` (`btv-` prefix).

| Role | Family | Weight | Used for |
|---|---|---|---|
| Body | Nunito Sans | 200 to 1000 (400 normal and 700 or 800 bold) | All running text and form fields and table cells and small labels |
| Headings | M PLUS Rounded 1c | 800 | Section headings (h2) and card titles (h3) and prices and the plan names and chat bot name and table column names and FAQ questions |
| Motto and big numbers | Nunito | 900 (Black) | The "Build it. Share it. Sell it." line and the moving strip and the large step numbers |
| Other pages (old look) | Baloo 2 | 400 to 800 | Headings on pages not yet redone. Do not use in the app |

Fallbacks: `'M PLUS Rounded 1c', 'Baloo 2', system-ui, sans-serif` for headings and `'Nunito', 'Baloo 2', system-ui, sans-serif` for the motto and `'Nunito Sans', system-ui, sans-serif` for body.

Load the heading and motto fonts only where used. M PLUS Rounded 1c has a large character set so subset it to Latin if the file is heavy.

## 2. Type scale

Base text is 17px with line height 1.65. Headings are tight.

| Element | Size | Weight | Line height | Letter spacing | Colour |
|---|---|---|---|---|---|
| Motto display | width of box divided by 11.3 (about 100px on a 1120px page) | 900 Nunito | 1 | -0.02em | Ink then purple then pink, one colour per word |
| Page h1 (dark tile) | clamp(1.7rem, 3vw, 2.6rem) | 800 | 1.1 | -0.02em | White. Emphasised words #c27bbb |
| Section h2 | clamp(1.8rem, 3.8vw, 3.1rem) | 800 | 1.05 | -0.015em | Ink. Centred |
| Closing card h2 | as h2 | 800 | 1.05 | -0.015em | Ink |
| FAQ block h2 | clamp(1.6rem, 3vw, 2.2rem) | 800 | 1.05 | -0.015em | Ink |
| Big stat or card title | clamp(2rem, 3.2vw, 2.8rem) | 800 | 1.05 | -0.01em | Ink |
| Row title | 1.9rem | 800 | 1.12 | -0.01em | Ink |
| Card h3 | 1.25rem to 1.3rem | 800 | 1.15 | -0.01em | Ink |
| Big step number | 4.2rem | 900 Nunito | 1 | normal | Purple |
| Price | 2.6rem | 800 | 1 | normal | Ink. The "per month" text beside it is body font 0.8rem 700 |
| Lead paragraph | 1.12rem to 1.22rem | 400 | 1.65 | normal | #4f4d5f (#e6e4f2 on the dark tile) |
| Eyebrow | 0.95rem | 800 | 1.4 | 0.1em and uppercase | Pink #dc8fd5 on dark. Purple #984f92 on light |
| Button | 1.15rem (1.05rem in plan cards and 0.85rem in the table) | 800 body font | 1.2 | normal | White |
| Small print | 0.82rem to 0.9rem | 400 or 700 | 1.5 | normal | #6b6980 |

## 3. Colours

Page colours. Use these exact hex values.

| Token | Hex | Use |
|---|---|---|
| Ink | #282637 | Headings and the dark tile and button hover and the floating bar |
| Purple | #984f92 | Buttons and links and ticks and small coloured text and the featured outline and step numbers |
| Pink | #dc8fd5 | Accent and eyebrow on dark and the send button in the chat and the third word of the motto |
| Pink soft | #ffe0fb | Tinted cards and the featured plan and row hover and the total line |
| Cyan soft | #d4f6f8 | One tinted card only. Never use bright cyan for fills |
| Lilac | #ebedfc | Panels and the table header and the seal card and the models card |
| Line | #e3e0ee | Card borders and dividers |
| White | #ffffff | Cards and chat window and FAQ rows |
| Page background | #f8f7ff | Body |
| Text 2 | #4f4d5f | Secondary text and lead paragraphs |
| Muted | #6b6980 | Small print and notes. The site theme also holds #605e71 |
| Soft text on dark | #e6e4f2 | Paragraphs on the ink tile |
| Emphasis on dark | #c27bbb | Emphasised words in the dark tile headline |
| Dash grey | #b9b6c9 | The "not included" dash and the typing dots |
| Dashed divider | #d9d4e6 | Dashed lines in the worked example and input borders |
| Bot bubble | #f6f1fa with border #e8dff0 | Bot messages in the chat |
| User bubble | gradient 135deg from #b97ab3 to #984f92 | Member messages in the chat. White text |
| Pink hover | #c876c1 | Link hover and the old-style primary button |
| On pink | #391d37 | Text placed on the pink fill |

Status colours (from `theme.json`). These pass contrast on white.

| Status | Hex |
|---|---|
| Success | #036639 |
| Warning | #895800 |
| Danger | #ac3031 |
| Info | #0e5794 |

Dark theme (Nightshift) is optional and off on the site. If the app has a dark mode use background #080d16 and surface #0f1626 and alt #141c30 and border #26304a and text #f8f7ff and accent cyan #00d1da. Pink on bright cyan has only 1.25 to 1 contrast so never put pink objects on cyan.

Rule: purple text on white and on pink soft passes. Pink text on white does not, so use pink only for large shapes and for text on the ink tile.

## 4. Shape and spacing

| Item | Value |
|---|---|
| Button and pill radius | 999px (fully round) |
| Large tile radius | 28px |
| Card radius | 22px to 24px (20px for list rows and 18px for FAQ rows) |
| Final card radius | 32px |
| Chat window radius | 22px. Bubbles 16px with one 4px corner on the speaker's side |
| Form control radius | 12px |
| Borders | 1px #e3e0ee on cards. 2px ink above and below the numbered rows. 2px dashed purple for empty slots. 1px purple around the chat window |
| Shadows | Cards at rest have none. Chat window 0 18px 44px rgba(152,79,146,.16). Plan card hover 0 14px 34px rgba(40,38,55,.08). Floating bar 0 14px 40px rgba(40,38,55,.35). Site default 0 10px 30px rgba(40,38,55,.08) |
| Page width | 1120px with 24px gutters on a phone |
| Section gap | 5rem above each section (3.5rem under 620px) |
| Tile grid | 6 columns and 1rem gap. Rows at least 170px |
| Card padding | 1.5rem to 1.6rem. Dark tile 0.9rem top and bottom and 2rem sides |

## 5. Components

| Component | Recipe |
|---|---|
| Primary button | Purple fill and white text and fully round. Padding 0.9rem 1.6rem. Hover: ink fill and lifts 2px. Transition 0.15s |
| Dark tile | Ink fill and white text and 28px radius. Eyebrow in pink above a white h1 |
| Tinted cards | Pink soft or lilac or cyan soft fill with no border. White cards use the 1px line border |
| Tick list | Purple tick drawn as a 15px mask. Bold text 700 |
| Numbered rows | Three columns (130px number and 190px title and text). 2px ink lines. Hover tints the row pink soft and nudges it right 1rem |
| Plan card | White with 1px line border and 22px radius. Featured plan has pink soft fill and a purple border and a purple flag pill (white text 0.9rem 800) overlapping the top edge. Hover slides it 6px right |
| Worked example | White card and dashed dividers and a pink soft total line with the value in the heading font |
| Comparison table | Lilac name row and white body and 1px #eeeaf5 row lines. The featured column has pink soft fill with 2px purple sides and a purple cap on top |
| FAQ | White rows with 18px radius. Question in the heading font. A purple plus turns to a minus when open |
| Certificate | Ornate rounded border drawn as an SVG border image. Fill #fffafd. Signature line in the heading font in purple |
| Floating bar | Ink pill fixed at the bottom centre. White 700 text and a purple button inside |
| Live slot | White box with a 2px dashed purple border and 28px radius. Used where the app drops in a live bot |
| Chat | White window with the bot icon and name and seal at the top. Messages fade in one by one. Typing dots bounce. Footer has a rounded input and a pink Send pill |
| Moving strip | The motto repeated at clamp(1.8rem, 4.2vw, 3.4rem) in Nunito 900. Scrolls left over 30 seconds |

## 6. Motion

Short and gentle. All of it stops when the member has asked for reduced motion.
- Buttons lift 2px on hover over 0.15s.
- Plan cards and numbered rows move over 0.2s.
- The bot icon in the chat floats up and down 4px over 4s.
- Chat messages rise 8px and fade in over 0.5s with staggered delays.
- Typing dots bounce 4px over 1s.

## 7. Ready to paste

```css
:root {
  --ink: #282637;
  --purple: #984f92;
  --pink: #dc8fd5;
  --pink-soft: #ffe0fb;
  --cyan-soft: #d4f6f8;
  --lilac: #ebedfc;
  --line: #e3e0ee;
  --bg: #f8f7ff;
  --surface: #ffffff;
  --text-2: #4f4d5f;
  --muted: #6b6980;
  --pink-hover: #c876c1;
  --success: #036639;
  --warning: #895800;
  --danger: #ac3031;
  --info: #0e5794;
  --font-body: 'Nunito Sans', system-ui, sans-serif;
  --font-head: 'M PLUS Rounded 1c', 'Baloo 2', system-ui, sans-serif;
  --font-motto: 'Nunito', 'Baloo 2', system-ui, sans-serif;
  --r-pill: 999px;
  --r-tile: 28px;
  --r-card: 22px;
  --r-control: 12px;
}
body { background: var(--bg); color: var(--text-2); font: 17px/1.65 var(--font-body); }
h2, h3 { font-family: var(--font-head); font-weight: 800; color: var(--ink); letter-spacing: -.015em; line-height: 1.05; }
.btn { background: var(--purple); color: #fff; font: 800 1.15rem/1.2 var(--font-body); padding: .9rem 1.6rem; border-radius: var(--r-pill); }
.btn:hover { background: var(--ink); transform: translateY(-2px); }
```

## 8. Do and do not

- Use the heading font for anything that names something (plan names and prices and card titles and questions). Use the body font for everything else.
- Use the motto font only for the motto and big numbers.
- Keep fills soft. Strong colour is for the button and the dark tile and the featured outline.
- Round everything. No sharp corners on cards or buttons.
- Do not use Baloo 2 in the app.
- Do not use em dashes or en dashes in any text. Use hyphens.
- Check each colour pair for contrast before use. Purple on white passes and pink on white does not.
