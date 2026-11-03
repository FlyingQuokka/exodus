# Pleasant Pink's main colours

For the session building the WordPress theme. Hex values are converted from the theme's oklch values,
so a browser may round one by a shade. The source is `resources/scss/themes/_pleasant-pink.scss`.

| Use | Token | Hex | OKLCH |
|---|---|---|---|
| **Accent** (buttons, highlights) | `--theme-accent` | `#dc8fd5` | `oklch(0.75 0.13 330)` |
| Accent hover | `--theme-accent-hover` | `#c876c1` | `oklch(0.68 0.14 330)` |
| Accent soft (tinted backgrounds) | `--theme-accent-soft` | `#ffe0fb` | `oklch(0.94 0.05 330)` |
| **Accent as text or links** | `--theme-accent-text` | `#984f92` | `oklch(0.54 0.13 330)` |
| **Text on the accent** | `--theme-text-on-accent` | `#391d37` | `oklch(0.28 0.06 330)` |
| Page background | `--theme-bg` | `#f8f7ff` | `oklch(0.98 0.01 290)` |
| Cards | `--theme-surface` | `#ffffff` | `#ffffff` |
| Alternate surface | `--theme-surface-alt` | `#f1f1f8` | `oklch(0.96 0.01 290)` |
| Sidebar | `--theme-sidebar` | `#ebedfc` | `oklch(0.95 0.02 280)` |
| Main text | `--theme-text` | `#282637` | `oklch(0.28 0.03 290)` |
| Secondary text | `--theme-text-secondary` | `#4f4d5f` | `oklch(0.43 0.03 290)` |
| Muted text | `--theme-text-muted` | `#605e71` | `oklch(0.49 0.03 290)` |
| Border | `--theme-border` | `#a9a8af` | `oklch(0.735 0.01 290)` |
| Success | `--theme-success` | `#036639` | `oklch(0.45 0.11 155)` |
| Warning | `--theme-warning` | `#895800` | `oklch(0.5 0.13 80)` |
| Danger | `--theme-danger` | `#ac3031` | `oklch(0.5 0.16 25)` |
| Info | `--theme-info` | `#0e5794` | `oklch(0.45 0.12 250)` |

**Fonts:** Baloo 2 for headings and Nunito Sans for body text.

**Corners:** cards 22px, navigation 16px, controls 12px, pills fully round.

## Two contrast rules to keep

- Never use the accent pink as text: it reads at only 2.03:1. Use `#984f92` instead.
- Never put white text on the accent: it reads at only 2.36:1. Use `#391d37`, which reads at 6.34:1.

## Why OKLCH rather than hex

- **It is readable.** The three numbers are lightness, colour strength and hue. `oklch(0.75 0.13 330)`
  tells you it is a fairly light pink. `#dc8fd5` tells you nothing without a tool.
- **Lighter or darker shades are one number's difference.** Accent and hover differ mainly in lightness
  (0.75 and 0.68) while the hue stays at 330. With hex all six characters change and the hue can drift.
- **Lightness matches what the eye sees.** Two colours at the same lightness look about equally bright
  whatever their hue, which hex and HSL do not give you. That makes it easier to meet the contrast rules
  across a palette, such as the status colours here.
- **Palettes stay consistent.** The status colours were built with the same steps on different hues, so
  they sit together naturally.
- **It can reach wider colours** on modern screens than hex allows, though this theme does not rely on
  that.

**The downsides:** email clients and some older tools do not understand it, so the app generates a hex
palette for emails. WordPress theme settings and many page builders expect hex too, so the WordPress
theme will probably want the hex column.
