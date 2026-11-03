// Generates Botterverse public marketing page mockups from one shared shell.
// Standalone from build-pages.mjs (the member + Back Office generator) but
// reuses the same theme tokens verbatim, so the marketing site and the app
// stay one visual identity.
// Run: node build-marketing-pages.mjs
import { writeFileSync } from 'node:fs';

const PREFIX = 'botterverse-design-e-softline-marketing';
const f = (slug) => `${PREFIX}-${slug}.html`;

/* ---------------------------------------------------------------- icons */
const I = {
  bot: '<rect x="4" y="8" width="16" height="12" rx="5" stroke="currentColor" stroke-width="1.8"/><path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" stroke-width="1.8"/><circle cx="9" cy="14" r="1.3" fill="currentColor"/><circle cx="15" cy="14" r="1.3" fill="currentColor"/>',
  market: '<path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="1.8"/>',
  tag: '<path d="M12 3l7.5 7.5a2 2 0 0 1 0 2.8L14 18.8a2 2 0 0 1-2.8 0L3.7 11.3V4A1 1 0 0 1 4.7 3H12z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="8.3" cy="7.3" r="1.1" fill="currentColor"/>',
  card: '<rect x="3" y="6" width="18" height="13" rx="4" stroke="currentColor" stroke-width="1.8"/><path d="M3 10h18" stroke="currentColor" stroke-width="1.8"/>',
  affiliate: '<circle cx="7" cy="8" r="3" stroke="currentColor" stroke-width="1.8"/><circle cx="17" cy="16" r="3" stroke="currentColor" stroke-width="1.8"/><path d="M9.5 9.5l5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  chevR: '<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  chevD: '<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  credit: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  lock: '<rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="1.8"/>',
  check: '<path d="M5 13l4.5 4.5L19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  shield: '<path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12l2.2 2.2L15.5 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  quote: '<path d="M7 8c-2 1-3 2.7-3 5s1.3 4 3.3 4c1.5 0 2.7-1.2 2.7-2.7 0-1.4-1-2.5-2.3-2.6C7.9 10 9 8.6 11 8" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M16 8c-2 1-3 2.7-3 5s1.3 4 3.3 4c1.5 0 2.7-1.2 2.7-2.7 0-1.4-1-2.5-2.3-2.6C16.9 10 18 8.6 20 8" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>',
  link: '<path d="M9 15l6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M11 6l1.3-1.3a3.5 3.5 0 0 1 5 5L16 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M13 18l-1.3 1.3a3.5 3.5 0 0 1-5-5L8 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  wand: '<path d="M4 20L15 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M15 4v3M19 8h-3M20.5 4.5l-2 2M12.5 5.5l-1.3 1.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  play: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M10 8.5l6 3.5-6 3.5z" fill="currentColor"/>',
};
const ic = (name, size = 19) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">${I[name]}</svg>`;
const toneIcon = (name, tone, size = 19, sw) => {
  const fg = `var(--theme-${tone})`;
  let d = I[name].replace(/stroke="currentColor"/g, '').replace(/fill="currentColor"/g, `fill="${fg}"`);
  if (sw) d = d.replace(/stroke-width="[\d.]+"/g, `stroke-width="${sw}"`);
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${fg}">${d}</svg>`;
};

/* ---------------------------------------------------------------- themes */
// Copied verbatim from build-pages.mjs so the marketing site and the app
// share one identity. Keep in sync by hand if either file's tokens change.
const THEMES = {
  'pleasant-pink': {
    label: 'Pleasant Pink',
    fonts: 'Baloo+2:wght@500;600;700;800&family=Nunito+Sans:wght@400;600;700;800',
    tokens: {
      'bg': 'oklch(0.98 0.01 290)', 'surface': '#ffffff', 'surface-alt': 'oklch(0.96 0.01 290)', 'surface-hover': 'oklch(0.985 0.008 290)', 'sidebar': 'oklch(0.95 0.02 280)',
      'text': 'oklch(0.28 0.03 290)', 'text-secondary': 'oklch(0.44 0.03 290)', 'text-muted': 'oklch(0.55 0.03 290)', 'text-subtle': 'oklch(0.62 0.03 290)', 'text-on-accent': '#ffffff',
      'border': 'oklch(0.94 0.01 290)', 'border-strong': 'oklch(0.90 0.015 290)', 'border-width': '1px',
      'accent': 'oklch(0.75 0.13 330)', 'accent-hover': 'oklch(0.68 0.14 330)', 'accent-soft': 'oklch(0.94 0.05 330)',
      'success': 'oklch(0.45 0.11 155)', 'success-soft': 'oklch(0.93 0.05 155)',
      'warning': 'oklch(0.50 0.13 80)', 'warning-soft': 'oklch(0.94 0.07 80)',
      'danger': 'oklch(0.50 0.16 25)', 'danger-soft': 'oklch(0.94 0.05 25)',
      'info': 'oklch(0.45 0.12 250)', 'info-soft': 'oklch(0.93 0.04 250)',
      'font-display': "'Baloo 2', system-ui, sans-serif", 'font-body': "'Nunito Sans', system-ui, sans-serif",
      'radius-card': '22px', 'radius-nav': '16px', 'radius-control': '12px', 'radius-pill': '999px',
      'shadow-card': 'none', 'shadow-raised': '0 4px 10px oklch(0.75 0.13 330 / 0.30)',
    },
  },
  'nightshift': {
    label: 'Nightshift',
    fonts: 'Sora:wght@500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700',
    tokens: {
      'bg': 'oklch(0.16 0.02 260)', 'surface': 'oklch(0.19 0.02 260)', 'surface-alt': 'oklch(0.14 0.02 260)', 'surface-hover': 'oklch(0.22 0.02 260)', 'sidebar': 'oklch(0.13 0.02 260)',
      'text': 'oklch(0.95 0.005 260)', 'text-secondary': 'oklch(0.72 0.015 260)', 'text-muted': 'oklch(0.60 0.02 260)', 'text-subtle': 'oklch(0.50 0.02 260)', 'text-on-accent': 'oklch(0.13 0.02 260)',
      'border': 'oklch(0.25 0.02 260)', 'border-strong': 'oklch(0.32 0.02 260)', 'border-width': '1px',
      'accent': 'oklch(0.78 0.14 200)', 'accent-hover': 'oklch(0.85 0.14 200)', 'accent-soft': 'oklch(0.28 0.05 200)',
      'success': 'oklch(0.75 0.15 155)', 'success-soft': 'oklch(0.26 0.05 155)',
      'warning': 'oklch(0.80 0.13 80)', 'warning-soft': 'oklch(0.28 0.05 80)',
      'danger': 'oklch(0.72 0.15 25)', 'danger-soft': 'oklch(0.28 0.06 25)',
      'info': 'oklch(0.75 0.12 250)', 'info-soft': 'oklch(0.26 0.05 250)',
      'font-display': "'Sora', system-ui, sans-serif", 'font-body': "'IBM Plex Sans', system-ui, sans-serif",
      'radius-card': '12px', 'radius-nav': '8px', 'radius-control': '8px', 'radius-pill': '999px',
      'shadow-card': '0 1px 2px rgb(0 0 0 / 0.30)', 'shadow-raised': '0 4px 12px rgb(0 0 0 / 0.45)',
    },
  },
};
const DEFAULT_THEME = 'pleasant-pink';

function themeBlocks() {
  return Object.entries(THEMES).map(([code, t]) => {
    const sel = code === DEFAULT_THEME ? `:root,\n[data-theme="${code}"]` : `[data-theme="${code}"]`;
    const vars = Object.entries(t.tokens).map(([k, v]) => `    --theme-${k}: ${v};`).join('\n');
    return `  ${sel} {\n${vars}\n  }`;
  }).join('\n\n');
}
const FONT_HREF = 'https://fonts.googleapis.com/css2?family=' + Object.values(THEMES).map((t) => t.fonts).join('&family=') + '&display=swap';

/* -------------------------------------------------------------- five tiers */
// A sixth tier exists in the app but is never shown in public copy.
// Figures: bots and credits from Data-Model.md section 4, fees from the
// platform fee rules (percentage of the price after tax plus 30 cents).
const TIERS = [
  { code: 'Apprentice', price: 5, bots: '1 bot', credits: '300', fee: 5, canSellInMarket: false, note: "Try the Botter's Lab with one bot", featured: false },
  { code: 'Novice', price: 47, bots: '5 bots', credits: '2,000', fee: 5, canSellInMarket: false, note: 'Build a small stable of bots', featured: false },
  { code: 'Expert', price: 97, bots: '20 bots', credits: '5,000', fee: 5, canSellInMarket: false, note: 'Room to build and run a serious catalogue', featured: false },
  { code: 'Pro', price: 197, bots: 'Unlimited bots', credits: '12,000', fee: 3, canSellInMarket: true, note: 'Where selling in the Bot Market starts', featured: true },
  { code: 'Master', price: 297, bots: 'Unlimited bots', credits: '20,000', fee: 3, canSellInMarket: true, note: 'The biggest monthly credit allowance', featured: false },
];

// Shared by the home FAQ (first four) and the standalone FAQ page (all).
const FAQ_ITEMS = [
  ['Will Botterverse pull the rug the way OpenAI did?', 'No platform can promise the future. What you do have is a choice of four models rather than one vendor, published fees rather than an undisclosed formula and a data export for what you build.'],
  ['What does the platform take from my sales?', 'One published fee on every sale: 5% of the price after tax on Apprentice, Novice and Expert or 3% on Pro and Master, plus 30 cents. It covers paywall access purchases, message top-ups and Bot Market sales.'],
  ['What are the three ways to sell a bot?', 'Sell access through a paywall; sell copies with resale rights through Multi-sell; or sell the bot outright through Transfer. Selling in the Bot Market starts at Pro.'],
  ['Can I offer affiliates a share of my sales?', 'Yes, on Bot Market listings. You set the affiliate share on each listing. Any member from Novice up can promote it with their own link and earn that share of the price after the platform fee. Only one level is paid.'],
  ['Which models can I build on?', 'Claude, ChatGPT, Grok or Gemini at launch. You choose the model for each bot. Nothing is routed or swapped for you automatically.'],
  ['Can I move an existing GPT across?', 'Botterverse has an importer for moving an old GPT across. OpenAI does not let other platforms pull a GPT configuration automatically, so you bring the instructions and files and the importer helps you rebuild it.'],
  ['Can I embed a bot on my own site?', 'Yes. Any bot can be embedded on any web page, including as a live FAQ assistant on a sales page. This FAQ is answered the same way.'],
  ['Is billing monthly or annual?', 'Both options are available.'],
  ['Can I cancel and what about refunds?', 'Yes. Cancelling keeps your access until the end of the current billing period. Monthly subscriptions are not refunded. On an annual plan the unused remainder of the year is refunded.'],
  ['What do Founders receive?', 'Founders keep their discount for life and wear a permanent Founders badge on their bot pages. There is no seat limit.'],
];

// Shared by the price cards and the checkout order summary.
const tierFeatures = (t) => `
              <li>${ic('check', 15)} ${t.bots}</li>
              <li>${ic('check', 15)} ${t.credits} credits each month</li>
              <li>${ic('check', 15)} ${t.fee}% platform fee plus 30 cents per sale</li>
              <li>${ic('check', 15)} ${t.canSellInMarket ? 'Sell in the Bot Market' : 'Bot Market selling starts at Pro'}</li>`;

/* ---------------------------------------------------------------- base css */
const BASE_CSS = `
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  html, body { margin: 0; font-family: var(--theme-font-body); background: var(--theme-bg); color: var(--theme-text); }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  .display { font-family: var(--theme-font-display); }
  .wrap { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
  ::-webkit-scrollbar { width: 8px; height: 8px; }
  ::-webkit-scrollbar-thumb { background: var(--theme-border-strong); border-radius: var(--theme-radius-pill); }

  /* -- header -- */
  .site-header { position: sticky; top: 0; z-index: 20; background: var(--theme-bg); border-bottom: var(--theme-border-width) solid var(--theme-border); }
  .header-row { display: flex; align-items: center; justify-content: space-between; height: 76px; }
  .brand { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 18px; }
  .nav-links { display: flex; align-items: center; gap: 30px; font-size: 14.5px; font-weight: 700; color: var(--theme-text-secondary); }
  .header-ctas { display: flex; align-items: center; gap: 14px; }

  /* -- buttons -- */
  .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 14px 26px; border-radius: var(--theme-radius-pill); font-size: 15px; font-weight: 800; border: none; cursor: pointer; font-family: inherit; white-space: nowrap; }
  .btn-primary { background: var(--theme-accent); color: var(--theme-text-on-accent); box-shadow: var(--theme-shadow-raised); }
  .btn-ghost { background: var(--theme-surface-alt); color: var(--theme-text-secondary); }
  .btn-outline { background: transparent; color: var(--theme-text); border: 2px solid var(--theme-border-strong); }
  .btn-sm { padding: 10px 18px; font-size: 13.5px; }
  .btn-lg { padding: 18px 34px; font-size: 17px; }
  .btn-block { width: 100%; }

  /* -- eyebrow / section head -- */
  .eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 12.5px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: var(--theme-accent); background: var(--theme-accent-soft); padding: 7px 16px; border-radius: var(--theme-radius-pill); }
  .section { padding: 90px 0; }
  .section-head { text-align: center; max-width: 700px; margin: 0 auto 52px; }
  .section-head h2 { font-size: 36px; margin: 16px 0 14px; }
  .section-head p { font-size: 17px; color: var(--theme-text-secondary); line-height: 1.6; margin: 0; }

  /* -- hero -- */
  .hero { padding: 76px 0 40px; text-align: center; }
  .hero h1 { font-size: 54px; line-height: 1.08; margin: 22px 0 20px; }
  .hero .lede { font-size: 19px; color: var(--theme-text-secondary); max-width: 640px; margin: 0 auto 34px; line-height: 1.6; }
  .hero-ctas { display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .hero-fine { margin-top: 16px; font-size: 13px; color: var(--theme-text-muted); font-weight: 700; }

  /* -- mock chrome for screenshots/demo frames -- */
  .mock-frame { background: var(--theme-surface); border-radius: var(--theme-radius-card); box-shadow: var(--theme-shadow-raised); overflow: hidden; border: var(--theme-border-width) solid var(--theme-border); }
  .mock-chrome { display: flex; gap: 6px; padding: 12px 16px; background: var(--theme-surface-alt); }
  .mock-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--theme-border-strong); }

  /* -- cards, grids -- */
  .grid { display: grid; gap: 22px; }
  .cols-2 { grid-template-columns: repeat(2, minmax(0,1fr)); }
  .cols-3 { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .card { background: var(--theme-surface); border-radius: var(--theme-radius-card); padding: 30px 26px; box-shadow: var(--theme-shadow-card); border: var(--theme-border-width) solid var(--theme-border); }
  .icon-tile { width: 48px; height: 48px; border-radius: var(--theme-radius-nav); display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
  .card h3 { font-size: 19px; margin: 0 0 10px; }
  .card p { font-size: 14.5px; color: var(--theme-text-secondary); line-height: 1.6; margin: 0; }

  /* -- mechanism (three-way bot market) -- */
  .mech-card { position: relative; }
  .mech-num { position: absolute; top: 26px; right: 26px; font-size: 34px; font-weight: 800; color: var(--theme-border-strong); }

  /* -- pricing -- */
  .price-grid { display: grid; grid-template-columns: repeat(5, minmax(0,1fr)); gap: 16px; align-items: stretch; }
  .price-card { background: var(--theme-surface); border-radius: var(--theme-radius-card); padding: 26px 20px; border: 2px solid var(--theme-border); display: flex; flex-direction: column; }
  .price-card.featured { border-color: var(--theme-accent); box-shadow: var(--theme-shadow-raised); transform: translateY(-8px); }
  .price-pill { align-self: flex-start; font-size: 11px; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; background: var(--theme-accent); color: var(--theme-text-on-accent); padding: 5px 12px; border-radius: var(--theme-radius-pill); margin-bottom: 12px; }
  .price-name { font-size: 18px; font-weight: 800; margin: 0 0 4px; }
  .price-amount { font-size: 34px; font-weight: 800; font-family: var(--theme-font-display); }
  .price-amount span { font-size: 14px; font-weight: 700; color: var(--theme-text-muted); }
  .price-note { font-size: 13px; color: var(--theme-text-muted); margin: 8px 0 20px; line-height: 1.5; min-height: 40px; }
  .price-features { list-style: none; margin: 0 0 22px; padding: 0; font-size: 13px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
  .price-features li { display: flex; align-items: flex-start; gap: 8px; color: var(--theme-text-secondary); }
  .price-features svg { flex-shrink: 0; margin-top: 2px; color: var(--theme-success); }

  /* -- badges -- */
  .badge-founder { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 800; background: var(--theme-warning-soft); color: var(--theme-warning); padding: 6px 14px; border-radius: var(--theme-radius-pill); }

  /* -- testimonials -- */
  .testimonial { display: flex; flex-direction: column; gap: 16px; }
  .testimonial .stars { display: flex; gap: 3px; color: var(--theme-warning); }
  .testimonial blockquote { margin: 0; font-size: 15px; line-height: 1.65; color: var(--theme-text); }
  .testimonial-who { display: flex; align-items: center; gap: 12px; margin-top: auto; }
  .testimonial-avatar { width: 42px; height: 42px; border-radius: 50%; background: var(--theme-accent); color: var(--theme-text-on-accent); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px; flex-shrink: 0; }
  .testimonial-name { font-size: 13.5px; font-weight: 800; }
  .testimonial-role { font-size: 12px; color: var(--theme-text-muted); }

  /* -- widget demo -- */
  .widget-demo-frame { position: relative; background: var(--theme-surface-alt); border-radius: var(--theme-radius-card); padding: 60px 40px; min-height: 320px; }
  .widget-bubble { position: absolute; bottom: 24px; right: 24px; width: 300px; background: var(--theme-surface); border-radius: var(--theme-radius-card); box-shadow: var(--theme-shadow-raised); overflow: hidden; border: var(--theme-border-width) solid var(--theme-border); }
  .widget-head { display: flex; align-items: center; gap: 10px; padding: 14px 16px; background: var(--theme-accent); color: var(--theme-text-on-accent); font-weight: 800; font-size: 13px; }
  .widget-body { padding: 14px 16px; display: flex; flex-direction: column; gap: 10px; }
  .widget-msg { font-size: 12.5px; line-height: 1.5; padding: 9px 12px; border-radius: 12px; max-width: 85%; }
  .widget-msg.them { background: var(--theme-surface-alt); align-self: flex-start; }
  .widget-msg.us { background: var(--theme-accent-soft); color: var(--theme-accent); align-self: flex-end; }

  /* -- faq (reuses the app's accordion pattern) -- */
  .faq-item { background: var(--theme-surface); border-radius: var(--theme-radius-card); border: var(--theme-border-width) solid var(--theme-border); overflow: hidden; margin-bottom: 12px; }
  .faq-q { display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; cursor: pointer; font-weight: 700; font-size: 15px; }
  .faq-a { padding: 0 24px 20px; font-size: 14px; color: var(--theme-text-secondary); line-height: 1.6; }
  .faq-item:not(.open) .faq-a { display: none; }
  .faq-item.open .faq-q svg { transform: rotate(180deg); }

  /* -- cta band -- */
  .cta-band { text-align: center; padding: 70px 40px; border-radius: var(--theme-radius-card); background: var(--theme-accent-soft); }
  .cta-band h2 { font-size: 32px; margin: 0 0 14px; }
  .cta-band p { font-size: 16px; color: var(--theme-text-secondary); margin: 0 0 28px; }

  /* -- footer -- */
  .site-footer { border-top: var(--theme-border-width) solid var(--theme-border); padding: 56px 0 34px; }
  .footer-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 32px; margin-bottom: 40px; }
  .footer-blurb { font-size: 13.5px; color: var(--theme-text-muted); line-height: 1.6; max-width: 280px; }
  .footer-heading { font-size: 12px; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; color: var(--theme-text-muted); margin-bottom: 16px; }
  .footer-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 11px; font-size: 13.5px; font-weight: 700; color: var(--theme-text-secondary); }
  .footer-bottom { display: flex; align-items: center; justify-content: space-between; font-size: 12.5px; color: var(--theme-text-muted); border-top: var(--theme-border-width) solid var(--theme-border); padding-top: 24px; }

  /* -- long-form (variant 2) -- */
  .letter { max-width: 720px; margin: 0 auto; }
  .letter h2 { font-size: 27px; margin: 44px 0 16px; }
  .letter p { font-size: 16.5px; line-height: 1.75; color: var(--theme-text-secondary); margin: 0 0 20px; }
  .letter p.lead { font-size: 19px; color: var(--theme-text); font-weight: 600; }
  .letter ul.benefits { list-style: none; padding: 0; margin: 24px 0; display: flex; flex-direction: column; gap: 14px; }
  .letter ul.benefits li { display: flex; gap: 12px; font-size: 15.5px; color: var(--theme-text); align-items: flex-start; }
  .letter ul.benefits svg { flex-shrink: 0; margin-top: 3px; color: var(--theme-success); }
  .letter blockquote.pull { border-left: 4px solid var(--theme-accent); padding: 4px 0 4px 22px; font-size: 18px; font-style: italic; margin: 32px 0; color: var(--theme-text); }
  .p-s { font-size: 15px; font-weight: 700; }

  /* -- comparison table (variant 3) -- */
  .compare-table { width: 100%; border-collapse: collapse; background: var(--theme-surface); border-radius: var(--theme-radius-card); overflow: hidden; box-shadow: var(--theme-shadow-card); }
  .compare-table th, .compare-table td { padding: 16px 20px; text-align: center; border-bottom: var(--theme-border-width) solid var(--theme-border); font-size: 13.5px; }
  .compare-table th { font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--theme-text-muted); font-weight: 800; }
  .compare-table td:first-child, .compare-table th:first-child { text-align: left; font-weight: 700; }
  .compare-table td.us { background: var(--theme-accent-soft); font-weight: 800; color: var(--theme-accent); }
  .tab-row { display: flex; gap: 8px; justify-content: center; margin-bottom: 40px; flex-wrap: wrap; }
  .tab-pill { padding: 10px 20px; border-radius: var(--theme-radius-pill); font-size: 13.5px; font-weight: 700; background: var(--theme-surface-alt); color: var(--theme-text-secondary); cursor: pointer; }
  .tab-pill.active { background: var(--theme-accent); color: var(--theme-text-on-accent); }

  @media (max-width: 900px) {
    .cols-2, .cols-3 { grid-template-columns: 1fr; }
    .price-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .footer-grid { grid-template-columns: 1fr 1fr; }
    .hero h1 { font-size: 38px; }
    .nav-links { display: none; }
  }
`;

/* --------------------------------------------------------------- helpers */
const logo = () => `<a href="${f('home-v1')}" class="brand display">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="14" fill="var(--theme-accent)"/>
      <circle cx="11" cy="14" r="2.3" fill="var(--theme-text-on-accent)"/>
      <circle cx="19" cy="14" r="2.3" fill="var(--theme-text-on-accent)"/>
      <path d="M10.5 19c1.3 1.4 2.9 2 4.5 2s3.2-.6 4.5-2" stroke="var(--theme-text-on-accent)" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    </svg>
    Botterverse
  </a>`;

const header = (active) => `
<header class="site-header">
  <div class="wrap header-row">
    ${logo()}
    <nav class="nav-links">
      <a href="#mechanism">Bot Market</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
      <a href="${f('affiliate-v1')}">Affiliates</a>
    </nav>
    <div class="header-ctas">
      <a href="#" class="btn btn-ghost btn-sm">Log in</a>
      <a href="#pricing" class="btn btn-primary btn-sm">Take Me To The Lab</a>
    </div>
  </div>
</header>`;

const footer = () => `
<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        ${logo()}
        <p class="footer-blurb" style="margin-top:16px;">Build, run and sell AI bots across Claude, ChatGPT, Grok and Gemini. Own what you build. Sell it three ways.</p>
      </div>
      <div>
        <div class="footer-heading">Botterverse</div>
        <ul class="footer-links">
          <li><a href="#mechanism">Bot Market</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="${f('affiliate-v1')}">Affiliates</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-heading">Company</div>
        <ul class="footer-links">
          <li><a href="${f('about-v1')}">About</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#">Support desk</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-heading">Legal</div>
        <ul class="footer-links">
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Botterverse. All rights reserved.</span>
      <span>Earnings disclaimer: results vary. Nothing on this site is a promise of income.</span>
    </div>
  </div>
</footer>`;

const priceCard = (t) => `
          <div class="price-card${t.featured ? ' featured' : ''}">
            ${t.featured ? '<div class="price-pill">Most popular</div>' : ''}
            <div class="price-name">${t.code} Botter</div>
            <div class="price-amount display">$${t.price}<span>/mo</span></div>
            <p class="price-note">${t.note}</p>
            <ul class="price-features">${tierFeatures(t)}
            </ul>
            <a href="#" class="btn ${t.featured ? 'btn-primary' : 'btn-outline'} btn-block">Choose ${t.code}</a>
          </div>`;

const pricingSection = () => `
<section class="section" id="pricing">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">${ic('card', 14)} Pricing</span>
      <h2 class="display">Five tiers. Every fee published.</h2>
      <p>Every sale pays one platform fee: 5% of the price after tax on Apprentice to Expert or 3% on Pro and Master, plus 30 cents. Selling in the Bot Market starts at Pro.</p>
    </div>
    <div class="price-grid">
${TIERS.map(priceCard).join('')}
    </div>
  </div>
</section>`;

const faqItem = (open, q, a) => `
        <div class="faq-item${open ? ' open' : ''}">
          <div class="faq-q" onclick="this.parentNode.classList.toggle('open')">
            ${q}
            ${ic('chevD', 16)}
          </div>
          <div class="faq-a">${a}</div>
        </div>`;

const faqSection = () => `
<section class="section" id="faq">
  <div class="wrap" style="max-width:760px;">
    <div class="section-head">
      <span class="eyebrow">${ic('shield', 14)} FAQ</span>
      <h2 class="display">Questions this exact bot is answering right now</h2>
      <p>Everything below is answered live by an Botterverse bot embedded on this page. That is the embeddable-widget feature, working in front of you.</p>
    </div>
${FAQ_ITEMS.slice(0, 4).map(([q, a], i) => faqItem(i === 0, q, a)).join('')}
  </div>
</section>`;

const testimonial = (initials, name, role, quote) => `
          <div class="card testimonial">
            <div class="stars">${ic('star', 15)}${ic('star', 15)}${ic('star', 15)}${ic('star', 15)}${ic('star', 15)}</div>
            <blockquote>&ldquo;${quote}&rdquo;</blockquote>
            <div class="testimonial-who">
              <div class="testimonial-avatar">${initials}</div>
              <div>
                <div class="testimonial-name">${name}</div>
                <div class="testimonial-role">${role}</div>
              </div>
            </div>
          </div>`;

// No real testimonials exist yet, so the section renders nothing. Add real
// ones here as [initials, name, role, quote] once the beta has produced them.
const TESTIMONIALS = [];
const testimonialsSection = () => TESTIMONIALS.length === 0 ? '' : `
<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">${ic('quote', 14)} From the Botterverse</span>
      <h2 class="display">Here's what other Botters are saying...</h2>
    </div>
    <div class="grid cols-3">
${TESTIMONIALS.map((t) => testimonial(...t)).join('')}
    </div>
  </div>
</section>`;

const mechanismSection = () => `
<section class="section" id="mechanism">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">${ic('market', 14)} The Bot Market</span>
      <h2 class="display">Three ways to turn one bot into income</h2>
      <p>Pick one or list a bot under all three. Selling in the Bot Market starts at Pro.</p>
    </div>
    <div class="grid cols-3">
      <div class="card mech-card">
        <span class="mech-num display">1</span>
        <div class="icon-tile" style="background:var(--theme-accent-soft);">${toneIcon('tag', 'accent', 24)}</div>
        <h3 class="display">Sell access</h3>
        <p>The buyer pays to use your bot through a paywall. You keep ownership and set the price.</p>
      </div>
      <div class="card mech-card">
        <span class="mech-num display">2</span>
        <div class="icon-tile" style="background:var(--theme-success-soft);">${toneIcon('market', 'success', 24)}</div>
        <h3 class="display">Sell resale rights</h3>
        <p>Multi-sell sells copies with RR, MRR or PLR style rights. The buyer can resell them, the way you already sell rights to an info product.</p>
      </div>
      <div class="card mech-card">
        <span class="mech-num display">3</span>
        <div class="icon-tile" style="background:var(--theme-warning-soft);">${toneIcon('shield', 'warning', 24)}</div>
        <h3 class="display">Sell it outright</h3>
        <p>Transfer hands full ownership to the buyer. You no longer have access. A clean, one-time exit for a bot you are done building.</p>
      </div>
    </div>
  </div>
</section>`;

const widgetDemoSection = () => `
<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">${ic('link', 14)} Embed anywhere</span>
      <h2 class="display">This chat bubble is a live Botterverse bot</h2>
      <p>Add a short snippet to any sales page and it answers your prospects' questions before they click away. The FAQ on this page is the same feature.</p>
    </div>
    <div class="widget-demo-frame">
      <div class="widget-bubble">
        <div class="widget-head">${ic('bot', 16)} Ask Botterverse</div>
        <div class="widget-body">
          <div class="widget-msg them">Does this replace my GPTs?</div>
          <div class="widget-msg us">Yes. Rebuild them here and choose your own model for each one.</div>
          <div class="widget-msg them">What models can I use?</div>
          <div class="widget-msg us">Claude, ChatGPT, Grok or Gemini. Pick your favourite.</div>
        </div>
      </div>
    </div>
  </div>
</section>`;

const ctaBand = (text = 'Ready to stop cobbling tools together?') => `
<section class="section">
  <div class="wrap">
    <div class="cta-band">
      <h2 class="display">${text}</h2>
      <p>Five tiers from $5. One published fee on every sale. No payout formula to decode.</p>
      <a href="#pricing" class="btn btn-primary btn-lg">Take Me To The Lab</a>
    </div>
  </div>
</section>`;

/* -------------------------------------------------------------- the shell */
function page({ slug, title, description, body, extraCss = '' }) {
  return `<!doctype html>
<html lang="en" data-theme="${DEFAULT_THEME}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Botterverse - ${title}</title>
<meta name="description" content="${description}">
<link rel="stylesheet" href="${FONT_HREF}">
<script>
  try {
    var t = localStorage.getItem('abs-preview-theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
</script>
<style>
${themeBlocks()}
${BASE_CSS}
${extraCss}
</style>
</head>
<body>
${header()}
${body}
${footer()}
</body>
</html>
`;
}

/* ============================================================ HOME PAGE, 3 VARIANTS */
const PAGES = [];

/* --- Home v1: classic hero-led SaaS layout --- */
PAGES.push(page({
  slug: 'home-v1', title: 'Build. Sell. Own your bots.',
  description: 'The GPT replacement built for Botters. Build AI bots on Claude, ChatGPT, Grok or Gemini and sell them three ways.',
  body: `
<section class="hero wrap">
  <span class="eyebrow">${ic('shield', 14)} Won't pull the rug on you</span>
  <h1 class="display">Build AI bots.<br>Sell them three ways.<br>Own every one.</h1>
  <p class="lede">Botterverse is the GPT replacement built for Botters: choose Claude, ChatGPT, Grok or Gemini, embed your bot anywhere and pay one published fee on every sale.</p>
  <div class="hero-ctas">
    <a href="#pricing" class="btn btn-primary btn-lg">Take Me To The Lab</a>
    <a href="#mechanism" class="btn btn-outline btn-lg">See the Bot Market</a>
  </div>
  <p class="hero-fine">Currently in a private Founders beta. Public launch follows.</p>
</section>

<section class="wrap" style="padding-bottom:40px;">
  <div class="mock-frame">
    <div class="mock-chrome"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span></div>
    <div style="padding:50px; text-align:center; color:var(--theme-text-muted); font-size:14px;">[ Product screenshot placeholder - Bot Builder or Dashboard preview ]</div>
  </div>
</section>

${mechanismSection()}
${widgetDemoSection()}
${pricingSection()}
${testimonialsSection()}
${faqSection()}
${ctaBand()}
`,
}));

/* --- Home v2: long-form, WSO/JV-style sales letter --- */
PAGES.push(page({
  slug: 'home-v2', title: 'The day OpenAI killed your GPT income',
  description: 'A letter to every Botter who lost their GPT income overnight and what to do about it.',
  extraCss: `.letter .btn-lg { margin: 28px auto; display: flex; width: fit-content; }`,
  body: `
<section class="section letter wrap">
  <span class="eyebrow">${ic('bot', 14)} An open letter to Botters</span>
  <h1 class="display" style="font-size:38px; margin:20px 0;">The day OpenAI killed your GPT income</h1>
  <p class="lead">On 16 August 2026, OpenAI switched off the ability for personal accounts to build or publish new GPTs. If you had an income built on one, it stopped mattering how good your bot was.</p>
  <p>You already know the rest. No real revenue-sharing formula was ever published. No ownership, since the bot lived behind someone else's login, under someone else's branding. Poor discovery, buried in a Store full of duplicates. Then, with under eight hours' notice, the door closed.</p>
  <p>Right now you are probably cobbling together two or three tools that were never built to work with each other. That is not a strategy. That is triage.</p>

  <blockquote class="pull">There is a difference between a platform that lets you sell a bot and a platform that lets you sell rights to a bot the way you already sell PLR rights to an info product.</blockquote>

  <h2 class="display">What Botterverse actually gives you</h2>
  <ul class="benefits">
    <li>${ic('check', 18)} <span>Build on Claude, ChatGPT, Grok or Gemini. Pick your favourite model, not whichever one the platform assigns you.</span></li>
    <li>${ic('check', 18)} <span>Sell access, sell resale rights (RR, MRR or PLR-style) or sell the bot outright. Three routes, one bot.</span></li>
    <li>${ic('check', 18)} <span>Pay one published fee on every sale: 3% or 5% of the price after tax, plus 30 cents. Nothing buried in a formula.</span></li>
    <li>${ic('check', 18)} <span>Take a data export of what you build.</span></li>
    <li>${ic('check', 18)} <span>Embed any bot on any page, including as a live FAQ assistant answering your own prospects' questions.</span></li>
    <li>${ic('check', 18)} <span>Set an affiliate share on your Bot Market listings and let other Botters promote them.</span></li>
  </ul>

  <h2 class="display">The Founders offer</h2>
  <p>Founders keep their discount for life and wear a permanent Founders badge on their bot pages. There is no seat limit.</p>
</section>

${pricingSection()}
${faqSection()}

<section class="section letter wrap" style="padding-top:0;">
  <p class="p-s">Take Me To The Lab. Five tiers from $5. One published fee on every sale.</p>
  <a href="#pricing" class="btn btn-primary btn-lg">Take Me To The Lab</a>
</section>
`,
}));

/* --- Home v3: product-led, comparison-driven layout --- */
PAGES.push(page({
  slug: 'home-v3', title: 'Botterverse vs the rest of the Botterverse',
  description: 'See Botterverse next to Pickaxe, Poe and Agensi, then pick your tier.',
  body: `
<section class="hero wrap" style="padding-bottom:30px;">
  <span class="eyebrow">${ic('market', 14)} Built for the Botterverse</span>
  <h1 class="display">One platform.<br>Every model. Every way to sell.</h1>
  <p class="lede">Compare Botterverse with what you are already cobbling together, then see it running for real.</p>
</section>

<section class="wrap" style="padding-bottom:70px;">
  <div class="tab-row">
    <span class="tab-pill active">Bot Builder</span>
    <span class="tab-pill">Bot Market</span>
    <span class="tab-pill">Dashboard</span>
  </div>
  <div class="mock-frame">
    <div class="mock-chrome"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span></div>
    <div style="padding:50px; text-align:center; color:var(--theme-text-muted); font-size:14px;">[ Live product screenshot placeholder - swap per tab ]</div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">${ic('shield', 14)} How it compares</span>
      <h2 class="display">Where the Botter's Lab beats the alternatives</h2>
    </div>
    <table class="compare-table">
      <thead><tr><th>Feature</th><th>Botterverse</th><th>Pickaxe</th><th>Poe</th><th>Agensi</th></tr></thead>
      <tbody>
        <tr><td>Revenue share</td><td class="us">95%</td><td>90-98%</td><td>Usage-based</td><td>70%</td></tr>
        <tr><td>Sell resale rights (RR/MRR/PLR)</td><td class="us">${ic('check',16)}</td><td>-</td><td>-</td><td>-</td></tr>
        <tr><td>Affiliate tooling for your own bots</td><td class="us">${ic('check',16)}</td><td>-</td><td>-</td><td>-</td></tr>
        <tr><td>Embed anywhere, incl. sales pages</td><td class="us">${ic('check',16)}</td><td>${ic('check',16)}</td><td>-</td><td>${ic('check',16)}</td></tr>
        <tr><td>Entry price</td><td class="us">$5</td><td>$37/mo</td><td>Free tier</td><td>Not confirmed</td></tr>
      </tbody>
    </table>
  </div>
</section>

${mechanismSection()}
${pricingSection()}
${testimonialsSection()}
${faqSection()}
${ctaBand("See enough? The Botter's Lab is open.")}
`,
}));

/* ============================================================ HOME PAGE, 3 MORE VARIANTS */
// Filename format for this batch is botterverse-{pagename}-{version number},
// distinct from the botterverse-design-e-softline-marketing-* names above.
const fWp = (pagename, version) => `botterverse-${pagename}-v${version}.html`;
const PAGES_WP = [];

/* --- Home 4: founder-story split hero --- */
PAGES_WP.push(page({
  slug: 'home-4', title: 'Built by a Botter, not a boardroom',
  description: 'The founder lost GPT income the same week OpenAI shut the door. Here is what he built instead.',
  extraCss: `.founder-hero { display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:center; padding:70px 0 90px; }
  .founder-hero .lede { text-align:left; margin:0 0 28px; }
  .founder-hero .hero-ctas { justify-content:flex-start; }
  .founder-photo { aspect-ratio:1/1; display:flex; align-items:center; justify-content:center; text-align:center; color:var(--theme-text-muted); font-size:13.5px; padding:30px; }
  @media (max-width: 900px) { .founder-hero { grid-template-columns:1fr; padding:44px 0; } }`,
  body: `
<section class="wrap founder-hero">
  <div>
    <span class="eyebrow">${ic('shield', 14)} Built by a Botter, not a boardroom</span>
    <h1 class="display" style="font-size:44px; line-height:1.12; margin:20px 0 18px;">I lost GPT income overnight too. So I built the replacement myself.</h1>
    <p class="lede">Botterverse started the same week OpenAI switched off personal GPT creation. Five tiers, three ways to sell, 95% revenue share. Built for Botters, by a Botter.</p>
    <div class="hero-ctas">
      <a href="#pricing" class="btn btn-primary btn-lg">Take Me To The Lab</a>
    </div>
  </div>
  <div class="mock-frame founder-photo">[ Founder photo or origin-story visual placeholder ]</div>
</section>

<section class="section letter wrap" style="padding-top:0;">
  <p>On 16 August 2026, OpenAI switched off the ability for personal accounts to build or publish new GPTs. I had bots making money that week, same as you might have. No warning past eight hours, no export button, no real answer for what came next.</p>
  <p>So the mission is narrow on purpose: own what you build, choose your own model and receive fair payment for what you sell. Nothing more complicated than that.</p>
</section>

${mechanismSection()}
${widgetDemoSection()}
${pricingSection()}
${testimonialsSection()}
${faqSection()}
${ctaBand()}
`,
}));

/* --- Home 5: demo-first, the widget does the talking --- */
PAGES_WP.push(page({
  slug: 'home-5', title: 'Talk to Botterverse before you read about it',
  description: 'Ask the bot on this page anything. It is the product, answering for itself.',
  body: `
<section class="hero wrap" style="padding-bottom:20px;">
  <span class="eyebrow">${ic('link', 14)} This is the product talking</span>
  <h1 class="display">Don't take our word for it.<br>Ask it yourself.</h1>
  <p class="lede">That chat bubble below is a live Botterverse bot, embedded the same way you would embed one on your own sales page. Ask it anything.</p>
</section>

${widgetDemoSection()}

<section class="section wrap" style="padding-top:0; text-align:center;">
  <p style="font-size:16px; color:var(--theme-text-secondary); max-width:600px; margin:0 auto 30px; line-height:1.6;">Build bots like that one on Claude, ChatGPT, Grok or Gemini. Sell access, resale rights or the bot outright. Pay one published fee.</p>
  <a href="#pricing" class="btn btn-primary btn-lg">Take Me To The Lab</a>
</section>

${mechanismSection()}
${pricingSection()}
${testimonialsSection()}
${faqSection()}
${ctaBand()}
`,
}));

/* --- Home 6: community-led, the beta and its Founders Botters up front --- */
PAGES_WP.push(page({
  slug: 'home-6', title: 'Join the Botters already inside',
  description: 'A private Founders beta running right now through the IM Skool community, badges and all.',
  extraCss: `.community-strip { display:flex; align-items:center; justify-content:center; gap:10px; margin:22px 0 0; flex-wrap:wrap; }`,
  body: `
<section class="hero wrap" style="padding-bottom:30px;">
  <span class="eyebrow">${ic('star', 14)} Private Founders beta, open now</span>
  <h1 class="display">The Botterverse already has its first Founders.<br>You can be next.</h1>
  <p class="lede">Botterverse is running a private beta through the IM Skool community, 50% off every tier with a Founders badge on every bot you build.</p>
  <div class="hero-ctas">
    <a href="#pricing" class="btn btn-primary btn-lg">Take Me To The Lab</a>
  </div>
  <div class="community-strip">
    <span class="badge-founder">${ic('star', 13)} Founders Botter badge included</span>
    <span class="badge-founder">${ic('shield', 13)} 50% off every tier</span>
  </div>
</section>

${testimonialsSection()}
${mechanismSection()}
${widgetDemoSection()}
${pricingSection()}
${faqSection()}
${ctaBand('Ready to join the Founders Botters?')}
`,
}));

/* ============================================================ FAQ page */
// FAQ_ITEMS is defined near the top. Home shows the first four, this page all.
const faqPageSection = () => `
<section class="section" id="faq">
  <div class="wrap" style="max-width:760px;">
    <div class="section-head">
      <span class="eyebrow">${ic('shield', 14)} FAQ</span>
      <h2 class="display">Every question, answered by the product itself</h2>
      <p>The same embeddable bot feature you would put on your own sales page is answering these questions live, right here.</p>
    </div>
${FAQ_ITEMS.map(([q, a], i) => faqItem(i === 0, q, a)).join('')}
  </div>
</section>`;

/* ============================================================ CHECKOUT */
const CHECKOUT_CSS = `
  .checkout-grid { display:grid; grid-template-columns:1fr 1.2fr; gap:40px; align-items:start; }
  .order-summary { position:sticky; top:96px; }
  .order-summary .price-features li { color:var(--theme-text-secondary); }
  .field-group { display:flex; flex-direction:column; gap:6px; margin-bottom:18px; }
  .field-group label { font-size:13px; font-weight:700; color:var(--theme-text-secondary); }
  .field-group input { border:2px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:13px 16px; font-size:14.5px; font-family:inherit; color:var(--theme-text); width:100%; }
  .field-row-2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
  .secure-note { display:flex; align-items:center; gap:8px; font-size:12.5px; color:var(--theme-text-muted); font-weight:700; margin-top:16px; justify-content:center; }
  @media (max-width: 900px) { .checkout-grid { grid-template-columns:1fr; } .order-summary { position:static; } }
`;

function checkoutPage(tier) {
  return page({
    slug: `checkout-${tier.code.toLowerCase()}`,
    title: `Checkout - ${tier.code} Botter`,
    description: `Join Botterverse on the ${tier.code} Botter tier.`,
    extraCss: CHECKOUT_CSS,
    body: `
<section class="wrap" style="padding:56px 0 90px;">
  <div class="section-head" style="margin-bottom:44px;">
    <span class="eyebrow">${ic('lock', 14)} Secure checkout</span>
    <h1 class="display" style="font-size:32px; margin:16px 0 6px;">You're one step from the Botter's Lab</h1>
    <p>Joining as a ${tier.code} Botter, $${tier.price}/mo. Change tier any time from your account.</p>
  </div>

  <div class="checkout-grid">
    <div class="order-summary card">
      ${tier.featured ? '<div class="price-pill">Most popular</div>' : ''}
      <div class="price-name">${tier.code} Botter</div>
      <div class="price-amount display">$${tier.price}<span>/mo</span></div>
      <p class="price-note">${tier.note}</p>
      <ul class="price-features">
        ${tierFeatures(tier)}
      </ul>
      <div class="divider"></div>
      <div style="display:flex; justify-content:space-between; font-weight:800; font-size:15px;"><span>Due today</span><span>$${tier.price}.00</span></div>
    </div>

    <div class="card">
      <h3 class="display" style="margin-bottom:20px;">Your details</h3>
      <div class="field-row-2">
        <div class="field-group"><label>First name</label><input type="text" placeholder="Jamie"></div>
        <div class="field-group"><label>Last name</label><input type="text" placeholder="Marlowe"></div>
      </div>
      <div class="field-group"><label>Email</label><input type="email" placeholder="you@example.com"></div>
      <div class="field-group"><label>Card number</label><input type="text" placeholder="•••• •••• •••• ••••"></div>
      <div class="field-row-2">
        <div class="field-group"><label>Expiry</label><input type="text" placeholder="MM / YY"></div>
        <div class="field-group"><label>CVC</label><input type="text" placeholder="•••"></div>
      </div>
      <a href="#" class="btn btn-primary btn-lg btn-block" style="margin-top:8px;">Take Me To The Lab</a>
      <div class="secure-note">${ic('lock', 14)} Secured checkout. Cancel any time from your account.</div>
    </div>
  </div>
</section>
`,
  });
}

/* ============================================================ ABOUT, AFFILIATE, SUPPORT, BETA */
const OTHER_PAGES = [];

OTHER_PAGES.push({ pagename: 'about', version: 1, content: page({
  slug: 'about', title: 'About Botterverse',
  description: 'Where Botters build AI bots and sell them three ways for one published fee.',
  body: `
<section class="hero wrap" style="padding-bottom:30px;">
  <span class="eyebrow">${ic('bot', 14)} About</span>
  <h1 class="display">Built for Botters</h1>
  <p class="lede">Botterverse is where Botters build AI bots, choose their own model and sell them three ways for one published fee.</p>
</section>

<section class="section letter wrap" style="padding-top:20px;">
  <h2 class="display">Why this exists</h2>
  <p>On 16 August 2026 OpenAI closed new GPT creation to personal accounts. The GPT Store had never published a payout formula. Every GPT lived behind OpenAI's login under OpenAI's branding. Removal came with under eight hours' notice. A whole market of imers needed somewhere to build and sell bots on terms they could read.</p>

  <h2 class="display">What we stand for</h2>
  <ul class="benefits">
    <li>${ic('check', 18)} <span>Published fees. Every sale pays one fee: 5% or 3% of the price after tax, plus 30 cents.</span></li>
    <li>${ic('check', 18)} <span>Your choice of model. Claude, ChatGPT, Grok or Gemini for each bot, never routed for you.</span></li>
    <li>${ic('check', 18)} <span>Real ways to sell. Access, resale rights or outright sale, in language imers already use.</span></li>
    <li>${ic('check', 18)} <span>Plain terms. Cancel any time and keep access to the end of the billing period.</span></li>
  </ul>
</section>

${mechanismSection()}
${ctaBand()}
`,
})});

OTHER_PAGES.push({ pagename: 'affiliate', version: 1, content: page({
  slug: 'affiliate', title: 'Affiliates',
  description: 'Earn 50% on the first payment and 20% on every payment after, for every Botter you bring to Botterverse.',
  extraCss: `.step-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:22px; } .step-num { width:40px; height:40px; border-radius:50%; background:var(--theme-accent); color:var(--theme-text-on-accent); display:flex; align-items:center; justify-content:center; font-weight:800; margin-bottom:16px; } @media (max-width:900px){.step-grid{grid-template-columns:1fr;}}`,
  body: `
<section class="hero wrap" style="padding-bottom:30px;">
  <span class="eyebrow">${ic('affiliate', 14)} Affiliates</span>
  <h1 class="display">Bring a Botter in. Earn for as long as they stay.</h1>
  <p class="lede">50% commission on their first payment, 20% on every payment after. Paid straight into your Botterverse balance.</p>
  <div class="hero-ctas"><a href="#" class="btn btn-primary btn-lg">Join the affiliate programme</a></div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">${ic('link', 14)} How it works</span>
      <h2 class="display">Three steps, tracked automatically</h2>
    </div>
    <div class="step-grid">
      <div class="card"><div class="step-num display">1</div><h3 class="display">Claim your link</h3><p>Claim a tracked link from your account. No separate sign-up needed elsewhere.</p></div>
      <div class="card"><div class="step-num display">2</div><h3 class="display">Share it</h3><p>Your list, your sales pages, your own embedded bots. Anywhere a Botter might be watching.</p></div>
      <div class="card"><div class="step-num display">3</div><h3 class="display">Earn from it</h3><p>50% of their first payment, 20% of every payment after, added straight to your earnings.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">${ic('market', 14)} Bot Market listings</span>
      <h2 class="display">Promote other Botters' bots too</h2>
      <p>Sellers set an affiliate share on each Bot Market listing. Any member from Novice up can promote a listing with their own link and earn that share. Only one level is paid.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">${ic('credit', 14)} Your balance</span>
      <h2 class="display">Withdraw it or spend it</h2>
      <p>Commissions land in your Botterverse balance. Withdraw to your own Stripe account on demand or leave it in to cover your own bots' credits.</p>
    </div>
  </div>
</section>

${ctaBand('Ready to start earning from the Botterverse?')}
`,
})});

OTHER_PAGES.push({ pagename: 'support', version: 1, content: page({
  slug: 'support', title: 'Support',
  description: 'Botters helping Botters. Reach the Botterverse support desk.',
  body: `
<section class="hero wrap" style="padding-bottom:40px;">
  <span class="eyebrow">${ic('bot', 14)} Support desk</span>
  <h1 class="display" style="font-size:40px;">Botters helping Botters</h1>
  <p class="lede">Check the FAQ first, since most answers live there already. Otherwise the desk is staffed and waiting.</p>
  <div class="hero-ctas">
    <a href="#" class="btn btn-primary btn-lg">Open a support ticket</a>
    <a href="${fWp('faq', 1)}" class="btn btn-outline btn-lg">Browse the FAQ</a>
  </div>
</section>

${faqSection()}
`,
})});

OTHER_PAGES.push({ pagename: 'faq', version: 1, content: page({
  slug: 'faq-standalone', title: 'FAQ',
  description: 'Every Botterverse question, answered by an embedded Botterverse bot.',
  body: `
<section class="hero wrap" style="padding-bottom:10px;">
  <span class="eyebrow">${ic('shield', 14)} FAQ</span>
  <h1 class="display" style="font-size:40px;">Questions, answered live</h1>
  <p class="lede">The same embeddable-bot feature you would use on your own sales page is answering every question below.</p>
</section>
${faqPageSection()}
${ctaBand()}
`,
})});

/* --- Beta landing: phase 1, private Skool launch, 50% off, unlisted --- */
const money = (n) => (Number.isInteger(n) ? `${n}` : n.toFixed(2));
const BETA_TIERS = TIERS.map((t) => ({ ...t, betaPrice: money(t.price / 2) }));

OTHER_PAGES.push({ pagename: 'beta-landing', version: 1, content: page({
  slug: 'beta-landing', title: 'Founders Beta - IM Skool',
  description: 'Private beta for the IM Skool community. 50% off every tier, Founders badge included.',
  extraCss: `.beta-banner { background:var(--theme-accent); color:var(--theme-text-on-accent); text-align:center; padding:12px; font-size:13.5px; font-weight:800; }
  .beta-price-grid { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:16px; }
  .was-price { text-decoration:line-through; color:var(--theme-text-muted); font-size:14px; font-weight:700; margin-right:6px; }
  @media (max-width:900px){.beta-price-grid{grid-template-columns:repeat(2,minmax(0,1fr));}}`,
  body: `
<div class="beta-banner">${ic('star', 14)} Private Founders beta for IM Skool members - invite only</div>

<section class="hero wrap" style="padding-bottom:30px;">
  <span class="eyebrow">${ic('star', 14)} Welcome, Skool Botter</span>
  <h1 class="display">50% off every tier.<br>A Founders badge on every bot.</h1>
  <p class="lede">You are seeing this because you are in the IM Skool community. Your discount is for life and the Founders badge is permanent. There is no seat limit.</p>
</section>

<section class="wrap" style="padding-bottom:70px;">
  <div class="beta-price-grid">
${BETA_TIERS.map((t) => `
    <div class="price-card${t.featured ? ' featured' : ''}">
      ${t.featured ? '<div class="price-pill">Most popular</div>' : ''}
      <div class="price-name">${t.code} Botter</div>
      <div class="price-amount display"><span class="was-price">$${t.price}</span>$${t.betaPrice}<span>/mo</span></div>
      <p class="price-note">${t.note}</p>
      <ul class="price-features">${tierFeatures(t)}
      </ul>
      <a href="${fWp(`checkout-${t.code.toLowerCase()}`, 1)}" class="btn btn-primary btn-block">Choose ${t.code}</a>
    </div>`).join('')}
  </div>
</section>

${mechanismSection()}
${faqSection()}
`,
})});

/* ================================================================= write */
// First three keep the existing botterverse-home-v{n} naming already in use
// on disk. The newer three use the plain botterverse-{pagename}-{n} format.
for (const [content, i] of PAGES.map((c, i) => [c, i])) {
  const out = fWp('home', i + 1);
  writeFileSync(out, content, 'utf8');
  console.log(`wrote ${out}`);
}

for (const [content, i] of PAGES_WP.map((c, i) => [c, i])) {
  const out = fWp('home', i + 4);
  writeFileSync(out, content, 'utf8');
  console.log(`wrote ${out}`);
}

for (const { pagename, version, content } of OTHER_PAGES) {
  const out = fWp(pagename, version);
  writeFileSync(out, content, 'utf8');
  console.log(`wrote ${out}`);
}

for (const tier of TIERS) {
  const out = fWp(`checkout-${tier.code.toLowerCase()}`, 1);
  writeFileSync(out, checkoutPage(tier), 'utf8');
  console.log(`wrote ${out}`);
}
