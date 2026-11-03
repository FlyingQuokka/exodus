# Nightshift's main colours

For the session building the WordPress theme. Nightshift is the dark theme. Hex values are converted
from the theme's oklch values, so a browser may round one by a shade. The source is
`resources/scss/themes/_nightshift.scss`.

| Use | Token | Hex | OKLCH |
|---|---|---|---|
| **Accent** (buttons, highlights) | `--theme-accent` | `#00d1da` | `oklch(0.78 0.14 200)` |
| Accent hover | `--theme-accent-hover` | `#24e9f2` | `oklch(0.85 0.14 200)` |
| Accent soft (tinted backgrounds) | `--theme-accent-soft` | `#003033` | `oklch(0.28 0.05 200)` |
| **Accent as text or links** | `--theme-accent-text` | `#00d1da` | `oklch(0.78 0.14 200)` |
| **Text on the accent** | `--theme-text-on-accent` | `#04070f` | `oklch(0.13 0.02 260)` |
| Page background | `--theme-bg` | `#080d16` | `oklch(0.16 0.02 260)` |
| Cards | `--theme-surface` | `#0f141d` | `oklch(0.19 0.02 260)` |
| Alternate surface | `--theme-surface-alt` | `#050911` | `oklch(0.14 0.02 260)` |
| Sidebar | `--theme-sidebar` | `#04070f` | `oklch(0.13 0.02 260)` |
| Main text | `--theme-text` | `#eceff2` | `oklch(0.95 0.005 260)` |
| Secondary text | `--theme-text-secondary` | `#a1a6b0` | `oklch(0.725 0.015 260)` |
| Muted text | `--theme-text-muted` | `#8b939f` | `oklch(0.66 0.02 260)` |
| Border | `--theme-border` | `#474d58` | `oklch(0.42 0.02 260)` |
| Success | `--theme-success` | `#4ec983` | `oklch(0.75 0.15 155)` |
| Warning | `--theme-warning` | `#e9b452` | `oklch(0.8 0.13 80)` |
| Danger | `--theme-danger` | `#f47b74` | `oklch(0.72 0.15 25)` |
| Info | `--theme-info` | `#70b3f7` | `oklch(0.75 0.12 250)` |

**Fonts:** Sora for headings and IBM Plex Sans for body text.

**Corners:** cards 12px, navigation 8px, controls 8px, pills fully round.

## How it differs from Pleasant Pink

- **The accent works as text here.** Nightshift's cyan reads at about 9.8:1 on its cards, so the accent
  and the accent text are the same colour.
- **Never put white text on the accent:** it reads at only about 1.9:1. Use `#04070f`, which reads at
  about 10.7:1.
- **Fonts and corners differ too.** A theme here varies its fonts and corners as well as its colours,
  so copy those along with the colours.

The contrast figures above are worked out from these values.
