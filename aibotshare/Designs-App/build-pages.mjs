// Generates every Botterverse member + Back Office example page from one shared shell.
// Run: node build-pages.mjs
import { writeFileSync } from 'node:fs';

const PREFIX = 'botterverse-design-e-softline';
const f = (slug) => `${PREFIX}-${slug}.html`;

/* ---------------------------------------------------------------- icons */
const I = {
  dashboard: '<rect x="3" y="3" width="8" height="8" rx="3" stroke="currentColor" stroke-width="1.8"/><rect x="13" y="3" width="8" height="5" rx="2.5" stroke="currentColor" stroke-width="1.8"/><rect x="13" y="10" width="8" height="11" rx="3" stroke="currentColor" stroke-width="1.8"/><rect x="3" y="13" width="8" height="8" rx="3" stroke="currentColor" stroke-width="1.8"/>',
  bot: '<rect x="4" y="8" width="16" height="12" rx="5" stroke="currentColor" stroke-width="1.8"/><path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" stroke-width="1.8"/><circle cx="9" cy="14" r="1.3" fill="currentColor"/><circle cx="15" cy="14" r="1.3" fill="currentColor"/>',
  build: '<path d="M14.7 6.3l3 3-9 9H5.7v-3l9-9z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M13 8l3 3" stroke="currentColor" stroke-width="1.8"/>',
  chart: '<path d="M4 20V10M11 20V4M18 20v-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  import: '<path d="M12 4v11m0-11l-4 4m4-4l4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 16v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  market: '<path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="1.8"/>',
  tag: '<path d="M12 3l7.5 7.5a2 2 0 0 1 0 2.8L14 18.8a2 2 0 0 1-2.8 0L3.7 11.3V4A1 1 0 0 1 4.7 3H12z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="8.3" cy="7.3" r="1.1" fill="currentColor"/>',
  card: '<rect x="3" y="6" width="18" height="13" rx="4" stroke="currentColor" stroke-width="1.8"/><path d="M3 10h18" stroke="currentColor" stroke-width="1.8"/>',
  users: '<circle cx="9" cy="8" r="3" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="9" r="2.4" stroke="currentColor" stroke-width="1.8"/><path d="M15 19a4.2 4.2 0 0 1 6.8-3.3" stroke="currentColor" stroke-width="1.8"/>',
  cog: '<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/><path d="M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1h-.2a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.6v-.2a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6 1h.2a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  help: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M9.5 9.2a2.5 2.5 0 1 1 3.4 2.3c-.9.4-1.4 1-1.4 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="11.9" cy="16.5" r="1" fill="currentColor"/>',
  affiliate: '<circle cx="7" cy="8" r="3" stroke="currentColor" stroke-width="1.8"/><circle cx="17" cy="16" r="3" stroke="currentColor" stroke-width="1.8"/><path d="M9.5 9.5l5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  grid: '<rect x="3" y="4" width="18" height="16" rx="4" stroke="currentColor" stroke-width="1.8"/><path d="M3 10h18M9 10v10" stroke="currentColor" stroke-width="1.8"/>',
  clock: '<circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v4l2.6 1.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  lines: '<path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  ticket: '<rect x="3" y="7" width="18" height="11" rx="4" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12.5" r="2.2" stroke="currentColor" stroke-width="1.8"/>',
  log: '<path d="M9 4h11v16H9z" stroke="currentColor" stroke-width="1.8"/><path d="M4 8h5M4 12h5M4 16h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  megaphone: '<path d="M4 10v4a1 1 0 0 0 1 1h3l6 4V5L8 9H5a1 1 0 0 0-1 1z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M18 9.5a3.5 3.5 0 0 1 0 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  chevR: '<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  chevD: '<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  search: '<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  credit: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  plus: '<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  lock: '<rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="1.8"/>',
  contrast: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor"/>',
};
const ic = (name, size = 19) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">${I[name]}</svg>`;

/* ------------------------------------------------------------ navigation */
const MEMBER_NAV = [
  { group: 'General', items: [
    ['Dashboard', 'dashboard', 'dashboard'],
    ['My Bots', 'my-bots', 'bot'],
    ['Bot Builder', 'bot-builder', 'build'],
    ['Bot Analytics', 'bot-analytics', 'chart'],
    ['Importer', 'importer', 'import'],
  ]},
  { group: 'Marketplace', items: [
    ['Bot Market', 'bot-market', 'market'],
    ['List a Bot', 'list-a-bot', 'tag'],
  ]},
  { group: 'Account', items: [
    ['Billing &amp; Credits', 'billing-credits', 'card'],
    ['Team &amp; Clients', 'team-clients', 'users'],
    ['Settings', 'settings', 'cog'],
  ]},
];

const OFFICE_NAV = [
  { group: 'General', items: [
    ['Dashboard', 'back-office-dashboard', 'dashboard'],
    ['User Management', 'back-office-user-management', 'users'],
    ['Bot Management', 'back-office-bot-management', 'bot'],
  ]},
  { group: 'Configuration', items: [
    ['Feature Matrix', 'back-office-feature-matrix', 'grid'],
    ['Model &amp; Rates', 'back-office-model-rates', 'clock'],
    ['CRM Integration', 'back-office-crm-integration', 'lines'],
  ]},
  { group: 'Commerce', items: [
    ['Promo Codes', 'back-office-promo-codes', 'ticket'],
    ['BotFlip Admin', 'back-office-botflip-admin', 'market'],
  ]},
  { group: 'System', items: [
    ['Audit Log', 'back-office-audit-log', 'log'],
    ['Broadcast', 'back-office-broadcast', 'megaphone'],
  ]},
];

/* ---------------------------------------------------------------- themes */
// Every value a theme may change. Nothing outside this list is themeable,
// and nothing inside it may be hardcoded in a component.
const THEMES = {
  'pleasant-pink': {
    label: 'Pleasant Pink',
    fonts: 'Baloo+2:wght@500;600;700;800&family=Nunito+Sans:wght@400;600;700;800',
    tokens: {
      // surfaces
      'bg':               'oklch(0.98 0.01 290)',
      'surface':          '#ffffff',
      'surface-alt':      'oklch(0.96 0.01 290)',
      'surface-hover':    'oklch(0.985 0.008 290)',
      'sidebar':          'oklch(0.95 0.02 280)',
      // text
      'text':             'oklch(0.28 0.03 290)',
      'text-secondary':   'oklch(0.44 0.03 290)',
      'text-muted':       'oklch(0.55 0.03 290)',
      'text-subtle':      'oklch(0.62 0.03 290)',
      'text-on-accent':   '#ffffff',
      // lines
      'border':           'oklch(0.94 0.01 290)',
      'border-strong':    'oklch(0.90 0.015 290)',
      'border-width':     '1px',
      // accent
      'accent':           'oklch(0.75 0.13 330)',
      'accent-hover':     'oklch(0.68 0.14 330)',
      'accent-soft':      'oklch(0.94 0.05 330)',
      // status
      'success':          'oklch(0.45 0.11 155)',
      'success-soft':     'oklch(0.93 0.05 155)',
      'warning':          'oklch(0.50 0.13 80)',
      'warning-soft':     'oklch(0.94 0.07 80)',
      'danger':           'oklch(0.50 0.16 25)',
      'danger-soft':      'oklch(0.94 0.05 25)',
      'info':             'oklch(0.45 0.12 250)',
      'info-soft':        'oklch(0.93 0.04 250)',
      // type
      'font-display':     "'Baloo 2', system-ui, sans-serif",
      'font-body':        "'Nunito Sans', system-ui, sans-serif",
      // shape
      'radius-card':      '22px',
      'radius-nav':       '16px',
      'radius-control':   '12px',
      'radius-pill':      '999px',
      // depth
      'shadow-card':      'none',
      'shadow-raised':    '0 4px 10px oklch(0.75 0.13 330 / 0.30)',
    },
  },

  'nightshift': {
    label: 'Nightshift',
    fonts: 'Sora:wght@500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700',
    tokens: {
      'bg':               'oklch(0.16 0.02 260)',
      'surface':          'oklch(0.19 0.02 260)',
      'surface-alt':      'oklch(0.14 0.02 260)',
      'surface-hover':    'oklch(0.22 0.02 260)',
      'sidebar':          'oklch(0.13 0.02 260)',

      'text':             'oklch(0.95 0.005 260)',
      'text-secondary':   'oklch(0.72 0.015 260)',
      'text-muted':       'oklch(0.60 0.02 260)',
      'text-subtle':      'oklch(0.50 0.02 260)',
      'text-on-accent':   'oklch(0.13 0.02 260)',

      'border':           'oklch(0.25 0.02 260)',
      'border-strong':    'oklch(0.32 0.02 260)',
      'border-width':     '1px',

      'accent':           'oklch(0.78 0.14 200)',
      'accent-hover':     'oklch(0.85 0.14 200)',
      'accent-soft':      'oklch(0.28 0.05 200)',

      'success':          'oklch(0.75 0.15 155)',
      'success-soft':     'oklch(0.26 0.05 155)',
      'warning':          'oklch(0.80 0.13 80)',
      'warning-soft':     'oklch(0.28 0.05 80)',
      'danger':           'oklch(0.72 0.15 25)',
      'danger-soft':      'oklch(0.28 0.06 25)',
      'info':             'oklch(0.75 0.12 250)',
      'info-soft':        'oklch(0.26 0.05 250)',

      'font-display':     "'Sora', system-ui, sans-serif",
      'font-body':        "'IBM Plex Sans', system-ui, sans-serif",

      'radius-card':      '12px',
      'radius-nav':       '8px',
      'radius-control':   '8px',
      'radius-pill':      '999px',

      'shadow-card':      '0 1px 2px rgb(0 0 0 / 0.30)',
      'shadow-raised':    '0 4px 12px rgb(0 0 0 / 0.45)',
    },
  },
};

const DEFAULT_THEME = 'pleasant-pink';

// pleasant-pink doubles as the :root fallback, so a missing or misspelt
// data-theme attribute still renders correctly.
function themeBlocks() {
  return Object.entries(THEMES)
    .map(([code, t]) => {
      const sel = code === DEFAULT_THEME ? `:root,\n[data-theme="${code}"]` : `[data-theme="${code}"]`;
      const vars = Object.entries(t.tokens)
        .map(([k, v]) => `    --theme-${k}: ${v};`)
        .join('\n');
      return `  ${sel} {\n${vars}\n  }`;
    })
    .join('\n\n');
}

// Mockups link both themes' fonts from the CDN. The shipped app self-hosts
// them, so browsers fetch only the faces the active theme actually renders.
const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=' +
  Object.values(THEMES).map((t) => t.fonts).join('&family=') +
  '&display=swap';

/* ------------------------------------------------------------------- css */
const BASE_CSS = `
  * { box-sizing: border-box; }
  html, body { margin: 0; height: 100%; font-family: var(--theme-font-body); background: var(--theme-bg); color: var(--theme-text); }
  a { color: var(--theme-accent); text-decoration: none; }
  .display { font-family: var(--theme-font-display); }
  ::-webkit-scrollbar { width: 8px; height: 8px; }
  ::-webkit-scrollbar-thumb { background: var(--theme-border-strong); border-radius: var(--theme-radius-pill); }

  .app { display:flex; width:100%; height:100vh; overflow:hidden; padding:14px; gap:14px; }

  .sidebar { display:flex; flex-direction:column; width:100%; height:100%; background:var(--theme-sidebar); border-radius:var(--theme-radius-card); overflow:hidden; }
  .sidebar-wrap { position:relative; width:258px; flex-shrink:0; transition:width 0.15s ease; }
  .sidebar-wrap.collapsed { width:80px; }

  .logo { display:flex; align-items:center; gap:10px; padding:22px 18px 18px; flex-shrink:0; white-space:nowrap; }
  .logo span { color:var(--theme-text); font-weight:700; font-size:17px; transition:opacity 0.1s ease; }

  .collapser-btn { position:absolute; top:23px; right:5px; background:none; border:none; display:flex; align-items:center; justify-content:center; font-size:25px; line-height:1; padding:0; color:var(--theme-text-secondary); cursor:pointer; z-index:2; transition:transform 0.15s ease; }
  .collapsed .collapser-btn { transform:rotate(180deg); }
  .collapsed .logo span, .collapsed .nav-label, .collapsed .nav-group { opacity:0; }

  .nav { flex:1; overflow-y:auto; padding:6px 12px; }
  .nav-group { color:var(--theme-text-muted); font-size:13px; font-weight:800; letter-spacing:0.04em; text-transform:uppercase; padding:14px 12px 8px; white-space:nowrap; transition:opacity 0.1s ease; }
  .nav-item { display:flex; align-items:center; gap:12px; padding:11px 14px; border-radius:var(--theme-radius-nav); margin-bottom:4px; color:var(--theme-text-secondary); }
  .nav-item svg { flex-shrink:0; }
  .nav-item .nav-label { font-size:14px; font-weight:700; white-space:nowrap; transition:opacity 0.1s ease; }
  .nav-item.active { background:var(--theme-accent); color:var(--theme-text-on-accent); box-shadow:var(--theme-shadow-raised); }
  .sidebar-foot { flex-shrink:0; padding:12px; }
  .nav-item.foot { color:var(--theme-text-secondary); }

  .main-col { flex:1; display:flex; flex-direction:column; min-width:0; gap:14px; }
  .topbar { height:70px; flex-shrink:0; background:var(--theme-surface); border-radius:var(--theme-radius-card); display:flex; align-items:center; justify-content:space-between; padding:0 26px; box-shadow:var(--theme-shadow-card); }
  .topbar h1 { font-size:21px; font-weight:700; margin:0; color:var(--theme-text); }
  .topbar-right { display:flex; align-items:center; gap:14px; }
  .credit-chip { display:flex; align-items:center; gap:6px; background:var(--theme-success-soft); color:var(--theme-success); padding:8px 16px; border-radius:var(--theme-radius-pill); font-size:13px; font-weight:700; }
  .user-block { text-align:right; line-height:1.3; padding:4px 4px; display:block; text-decoration:none; }
  .user-block:hover { opacity:0.75; }
  .user-name { font-size:15px; font-weight:700; color:var(--theme-text); }
  .user-tier { font-size:12.5px; font-weight:700; color:var(--theme-accent); }

  .content { flex:1; overflow-y:auto; padding-right:2px; }
  .content-inner { display:flex; flex-direction:column; gap:14px; }
  .narrow { max-width:800px; }

  /* -- surfaces -- */
  .card { background:var(--theme-surface); border-radius:var(--theme-radius-card); padding:20px 22px; box-shadow:var(--theme-shadow-card); }
  .panel-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; flex-wrap:wrap; gap:10px; }
  .panel-title { font-size:19px; font-weight:700; color:var(--theme-text); }
  .panel-sub { font-size:12.5px; color:var(--theme-text-muted); margin-top:2px; font-weight:400; }
  .section-note { font-size:13px; color:var(--theme-text-muted); line-height:1.55; margin:0 0 14px; }

  /* -- stats -- */
  .stat-grid { display:grid; gap:14px; }
  .cols-2 { grid-template-columns:repeat(2, minmax(0,1fr)); }
  .cols-3 { grid-template-columns:repeat(3, minmax(0,1fr)); }
  .cols-4 { grid-template-columns:repeat(4, minmax(0,1fr)); }
  .stat-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; }
  .stat-label { font-size:12.5px; font-weight:700; color:var(--theme-text-muted); }
  .stat-icon { width:38px; height:38px; border-radius:var(--theme-radius-pill); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .stat-value { font-size:26px; font-weight:800; color:var(--theme-text); }
  .stat-sub { font-size:12.5px; color:var(--theme-text-muted); margin-top:4px; }
  .stat-sub.up { color:var(--theme-success); }
  .stat-sub.down { color:var(--theme-danger); }
  .stat-unit { font-size:15px; font-weight:700; color:var(--theme-text-muted); }

  /* -- date range -- */
  .range-control { display:flex; gap:4px; background:var(--theme-surface-alt); padding:4px; border-radius:var(--theme-radius-pill); }
  .range-pill { padding:7px 13px; border-radius:var(--theme-radius-pill); font-size:12.5px; font-weight:700; color:var(--theme-text-muted); cursor:pointer; }
  .range-pill.active { background:var(--theme-accent); color:var(--theme-text-on-accent); }
  .axis-labels { display:flex; justify-content:space-between; font-size:11.5px; color:var(--theme-text-subtle); padding:6px 4px 0; }

  /* -- buttons -- */
  .btn { display:inline-flex; align-items:center; gap:8px; padding:11px 20px; border-radius:var(--theme-radius-pill); font-size:13.5px; font-weight:700; border:none; cursor:pointer; font-family:inherit; }
  .btn-primary { background:var(--theme-accent); color:var(--theme-text-on-accent); }
  .btn-ghost { background:var(--theme-surface-alt); color:var(--theme-text-secondary); }
  .btn-danger { background:var(--theme-danger-soft); color:var(--theme-danger); }
  .btn-sm { padding:7px 14px; font-size:12.5px; }

  /* -- forms -- */
  .field-row { display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:16px; margin-bottom:14px; }
  .field-row.single { grid-template-columns:1fr; }
  .field { display:flex; flex-direction:column; gap:6px; }
  .field label { font-size:12.5px; font-weight:700; color:var(--theme-text-secondary); }
  .field .hint { font-size:11.5px; color:var(--theme-text-subtle); font-weight:400; }
  .field input, .field select, .field textarea { border:var(--theme-border-width) solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:10px 14px; font-size:13.5px; font-family:inherit; color:var(--theme-text); width:100%; }
  .field textarea { resize:vertical; line-height:1.6; }
  .field input[readonly] { background:var(--theme-surface-hover); color:var(--theme-text-muted); }
  .field input::placeholder, .field textarea::placeholder { color:var(--theme-text-subtle); }
  .name-group { display:flex; gap:12px; }
  .name-group .field { flex:1; }
  .divider { height:1px; background:var(--theme-border); margin:20px 0; }

  .toggle-row { display:flex; align-items:center; justify-content:space-between; padding:10px 0; gap:16px; }
  .toggle-text .t-title { font-size:13.5px; font-weight:700; }
  .toggle-text .t-sub { font-size:12px; color:var(--theme-text-muted); margin-top:1px; }
  .toggle { width:42px; height:24px; border-radius:var(--theme-radius-pill); flex-shrink:0; position:relative; }
  .toggle.on { background:var(--theme-accent); }
  .toggle.off { background:var(--theme-border-strong); }
  .toggle .knob { position:absolute; top:3px; width:18px; height:18px; border-radius:50%; background:var(--theme-surface); }
  .toggle.on .knob { right:3px; }
  .toggle.off .knob { left:3px; }

  .radio-row { display:flex; gap:12px; flex-wrap:wrap; }
  .radio-card { flex:1; min-width:200px; border:2px solid var(--theme-border-strong); border-radius:var(--theme-radius-nav); padding:14px 16px; cursor:pointer; }
  .radio-card.sel { border-color:var(--theme-accent); background:var(--theme-accent-soft); }
  .radio-card .rc-title { font-size:13.5px; font-weight:700; }
  .radio-card .rc-sub { font-size:12px; color:var(--theme-text-muted); margin-top:3px; line-height:1.5; }

  /* -- accordion -- */
  .accordion { background:var(--theme-surface); border-radius:var(--theme-radius-card); overflow:hidden; box-shadow:var(--theme-shadow-card); }
  .accordion-head { display:flex; align-items:center; justify-content:space-between; padding:22px 26px; cursor:pointer; }
  .accordion-head .title-group { display:flex; align-items:center; gap:14px; }
  .accordion-icon { width:38px; height:38px; border-radius:var(--theme-radius-pill); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .accordion-title { font-size:18px; font-weight:700; }
  .accordion-sub { font-size:12.5px; color:var(--theme-text-muted); margin-top:1px; }
  .accordion-chevron { color:var(--theme-text-muted); transition:transform 0.15s ease; flex-shrink:0; }
  .accordion.open .accordion-chevron { transform:rotate(180deg); }
  .accordion-body { padding:0 26px 26px; }
  .accordion:not(.open) .accordion-body { display:none; }

  /* -- tables -- */
  .table-wrap { overflow-x:auto; }
  table.data { width:100%; border-collapse:collapse; font-size:13px; }
  table.data th { text-align:left; font-size:11.5px; font-weight:800; letter-spacing:0.04em; text-transform:uppercase; color:var(--theme-text-muted); padding:0 14px 12px; white-space:nowrap; }
  table.data td { padding:13px 14px; border-top:var(--theme-border-width) solid var(--theme-border); vertical-align:middle; }
  table.data tr:hover td { background:var(--theme-surface-hover); }
  table.data td.num, table.data th.num { text-align:right; }
  .cell-main { font-weight:700; }
  .cell-sub { font-size:11.5px; color:var(--theme-text-muted); margin-top:2px; }
  .row-actions { display:flex; gap:6px; justify-content:flex-end; }
  .icon-btn { background:var(--theme-surface-alt); border:none; width:30px; height:30px; border-radius:var(--theme-radius-control); display:flex; align-items:center; justify-content:center; color:var(--theme-text-secondary); cursor:pointer; }

  /* -- badges + chips -- */
  .badge { display:inline-block; font-size:11px; font-weight:700; padding:4px 10px; border-radius:var(--theme-radius-pill); white-space:nowrap; }
  .b-green { background:var(--theme-success-soft); color:var(--theme-success); }
  .b-grey  { background:var(--theme-surface-alt); color:var(--theme-text-muted); }
  .b-pink  { background:var(--theme-accent-soft); color:var(--theme-accent); }
  .b-amber { background:var(--theme-warning-soft); color:var(--theme-warning); }
  .b-red   { background:var(--theme-danger-soft); color:var(--theme-danger); }
  .b-blue  { background:var(--theme-info-soft); color:var(--theme-info); }

  /* Avatar fills are identity colours, not theme colours - they distinguish
     one person or bot from another and stay constant across themes. */
  .avatar-sm { width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:11.5px; color:#fff; flex-shrink:0; }
  .avatar-lg { width:76px; height:76px; border-radius:50%; background:var(--theme-accent); color:var(--theme-text-on-accent); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:24px; flex-shrink:0; }
  .with-avatar { display:flex; align-items:center; gap:11px; }

  /* -- search + filters -- */
  .filter-card { background:var(--theme-surface); border-radius:var(--theme-radius-card); padding:16px 18px; display:flex; align-items:center; gap:12px; flex-wrap:wrap; box-shadow:var(--theme-shadow-card); }
  .search-box { display:flex; align-items:center; gap:8px; background:var(--theme-surface-alt); border-radius:var(--theme-radius-pill); padding:10px 16px; flex:1; min-width:220px; color:var(--theme-text-muted); }
  .search-box input { border:none; background:none; outline:none; font-size:13.5px; font-family:inherit; flex:1; color:var(--theme-text); }
  .search-box input::placeholder { color:var(--theme-text-subtle); }
  .filter-pill { display:flex; align-items:center; gap:6px; background:var(--theme-surface-alt); border-radius:var(--theme-radius-pill); padding:9px 14px; font-size:13px; font-weight:700; color:var(--theme-text-secondary); white-space:nowrap; cursor:pointer; }
  .push-right { margin-left:auto; }
  .results-row { display:flex; align-items:center; justify-content:space-between; padding:0 4px; }
  .results-count { font-size:13px; font-weight:700; color:var(--theme-text-muted); }

  /* -- notices -- */
  .notice { display:flex; align-items:flex-start; gap:10px; font-size:12.5px; font-weight:700; padding:12px 16px; border-radius:var(--theme-radius-control); line-height:1.5; }
  .notice svg { flex-shrink:0; margin-top:1px; }
  .n-amber { background:var(--theme-warning-soft); color:var(--theme-warning); }
  .n-pink { background:var(--theme-accent-soft); color:var(--theme-accent); }
  .n-blue { background:var(--theme-info-soft); color:var(--theme-info); }

  .back-link { display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:700; color:var(--theme-text-muted); padding:2px 4px; }
  .list-row { display:flex; align-items:center; gap:12px; padding:11px 10px; border-radius:var(--theme-radius-nav); }
  .list-row + .list-row { border-top:var(--theme-border-width) solid var(--theme-border); }
  .dot { width:9px; height:9px; border-radius:50%; flex-shrink:0; }
  .dot-on { background:var(--theme-success); }
  .dot-off { background:var(--theme-border-strong); }
  .dot-warn { background:var(--theme-warning); }

  /* -- preview aid only, not a shipped feature -- */
  .theme-switch { display:flex; flex-direction:column; align-items:center; gap:5px; cursor:pointer; user-select:none; }
  .theme-switch .tw-label { font-size:10.5px; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; color:var(--theme-text-muted); line-height:1; }
`;

/* --------------------------------------------------------------- helpers */
function areaChart(points, { w = 620, h = 200, tone = 'accent', fillId = 'ac' } = {}) {
  const max = Math.max(...points), min = Math.min(...points);
  const span = max - min || 1;
  const step = w / (points.length - 1);
  const pts = points.map((v, i) => `${Math.round(i * step)},${Math.round(h - 12 - ((v - min) / span) * (h - 40))}`);
  const line = 'M' + pts.join(' L');
  const colour = `var(--theme-${tone})`;
  return `<svg width="100%" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
            <defs><linearGradient id="${fillId}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${colour}" stop-opacity="0.25"/>
              <stop offset="100%" stop-color="${colour}" stop-opacity="0"/>
            </linearGradient></defs>
            <path d="${line} L${w},${h} L0,${h} Z" fill="url(#${fillId})"/>
            <path d="${line}" fill="none" stroke="${colour}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
}

const rangeControl = (active = 'Month') =>
  `<div class="range-control">` +
  ['Week', 'Month', 'YTD', '5yr', 'Custom']
    .map((r) => `<span class="range-pill${r === active ? ' active' : ''}">${r}</span>`)
    .join('') +
  `</div>`;

const axis = (labels) =>
  `<div class="axis-labels">${labels.map((l) => `<span>${l}</span>`).join('')}</div>`;

// tone is one of: accent, success, warning, danger, info
const toneIcon = (iconName, tone, size, strokeWidth) => {
  const fg = `var(--theme-${tone})`;
  let d = I[iconName].replace(/stroke="currentColor"/g, '').replace(/fill="currentColor"/g, `fill="${fg}"`);
  if (strokeWidth) d = d.replace(/stroke-width="[\d.]+"/g, `stroke-width="${strokeWidth}"`);
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${fg}">${d}</svg>`;
};

const stat = (label, value, sub, iconName, tone, subClass = '') => `
          <div class="card">
            <div class="stat-head">
              <span class="stat-label">${label}</span>
              <div class="stat-icon" style="background:var(--theme-${tone}-soft);">${toneIcon(iconName, tone, 18, 2)}</div>
            </div>
            <div class="stat-value display">${value}</div>
            <div class="stat-sub ${subClass}">${sub}</div>
          </div>`;

const accordion = (open, title, sub, iconName, tone, body) => `
        <div class="accordion${open ? ' open' : ''}">
          <div class="accordion-head" onclick="this.parentNode.classList.toggle('open')">
            <div class="title-group">
              <div class="accordion-icon" style="background:var(--theme-${tone}-soft);">${toneIcon(iconName, tone, 19)}</div>
              <div>
                <div class="accordion-title display">${title}</div>
                <div class="accordion-sub">${sub}</div>
              </div>
            </div>
            <svg class="accordion-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none">${I.chevD}</svg>
          </div>
          <div class="accordion-body">${body}</div>
        </div>`;

const table = (headers, rows) => `
          <div class="table-wrap">
            <table class="data">
              <thead><tr>${headers.map((h) => `<th${h.num ? ' class="num"' : ''}>${h.label ?? h}</th>`).join('')}</tr></thead>
              <tbody>${rows.map((r) => `<tr>${r.join('')}</tr>`).join('')}</tbody>
            </table>
          </div>`;

/* --------------------------------------------------------------- the shell */
function page({ area, slug, title, extraCss = '', body, showCredits = true }) {
  const isOffice = area === 'office';
  const nav = isOffice ? OFFICE_NAV : MEMBER_NAV;
  const wordmark = isOffice ? 'Back Office' : 'Botterverse';
  const home = f(isOffice ? 'back-office-dashboard' : 'dashboard');
  const profile = f(isOffice ? 'back-office-profile' : 'profile');
  const width = isOffice ? 262 : 258;

  const navHtml = nav
    .map(
      (sec) =>
        `      <div class="nav-group">${sec.group}</div>\n` +
        sec.items
          .map(
            ([label, s, icon]) =>
              `      <a href="${f(s)}" class="nav-item${s === slug ? ' active' : ''}">\n        ${ic(icon)}\n        <span class="nav-label">${label}</span>\n      </a>`
          )
          .join('\n')
    )
    .join('\n\n');

  const credits = showCredits && !isOffice
    ? `        <div class="credit-chip">${ic('credit', 14)} 24,650 credits</div>\n`
    : '';

  // Preview aid for confirming the token set. Not a shipped feature: release 1
  // has no theme switching UI in either area. Built as an accordion so further
  // themes cost no extra space in the sidebar.
  // Preview aid for confirming the token set. Not a shipped feature: release 1
  // has no theme switching UI in either area.
  const switcher = `        <div class="theme-switch" id="themeSwitch" title="Switch theme">
          <span class="tw-label">Theme</span>
          <div class="toggle off"><div class="knob"></div></div>
        </div>
`;

  return `<!doctype html>
<html lang="en" data-theme="${DEFAULT_THEME}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${PREFIX}-${slug}</title>
<link rel="stylesheet" href="${FONT_HREF}">
<script>
  // Applied before first paint so there is no flash of the previous theme.
  // In the shipped app the attribute is server-rendered from the user's
  // saved preference instead - see Docos/Theming-Spec.md section 6.
  try {
    var t = localStorage.getItem('abs-preview-theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
</script>
<style>
/* ---- theme layer ---- */
${themeBlocks()}

/* ---- component layer: reads tokens only ---- */
${BASE_CSS}
  .sidebar-wrap { width:${width}px; }
${extraCss}</style>
</head>
<body>
<div class="app">

  <div class="sidebar-wrap" id="sidebar">
  <div class="sidebar">
    <a href="${home}" class="logo">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" style="flex-shrink:0;">
        <circle cx="15" cy="15" r="14" fill="var(--theme-accent)"/>
        <circle cx="11" cy="14" r="2.3" fill="var(--theme-text-on-accent)"/>
        <circle cx="19" cy="14" r="2.3" fill="var(--theme-text-on-accent)"/>
        <path d="M10.5 19c1.3 1.4 2.9 2 4.5 2s3.2-.6 4.5-2" stroke="var(--theme-text-on-accent)" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      </svg>
      <span>${wordmark}</span>
    </a>

    <div class="nav">
${navHtml}
    </div>

    <div class="sidebar-foot">
      <a href="#" class="nav-item foot">
        ${ic('help')}
        <span class="nav-label">Support</span>
      </a>
      <a href="#" class="nav-item foot">
        ${ic('affiliate')}
        <span class="nav-label">Affiliates</span>
      </a>
    </div>
  </div>
  <button class="collapser-btn" onclick="document.getElementById('sidebar').classList.toggle('collapsed')" aria-label="Collapse sidebar">&laquo;</button>
  </div>

  <div class="main-col">
    <div class="topbar">
      <h1 class="display">${title}</h1>
      <div class="topbar-right">
${switcher}${credits}        <a href="${profile}" class="user-block">
          <div class="user-name">${isOffice ? 'Priya Adeyemi' : 'Jamie Marlowe'}</div>
          <div class="user-tier">${isOffice ? 'Superadmin' : 'Pro Botter'}</div>
        </a>
      </div>
    </div>

    <div class="content">
${body}
    </div>
  </div>
</div>

<script>
  (function () {
    var root = document.documentElement;
    var codes = ${JSON.stringify(Object.keys(THEMES))};
    var el = document.getElementById('themeSwitch');
    if (!el) return;
    var knob = el.querySelector('.toggle');
    function sync() {
      var i = codes.indexOf(root.getAttribute('data-theme'));
      knob.className = 'toggle ' + (i > 0 ? 'on' : 'off');
    }
    el.addEventListener('click', function () {
      var i = codes.indexOf(root.getAttribute('data-theme'));
      var next = codes[(i + 1) % codes.length];
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('abs-preview-theme', next); } catch (e) {}
      sync();
    });
    sync();
  })();
</script>
</body>
</html>
`;
}

/* ============================================================ MEMBER PAGES */
const PAGES = [];

/* --- Dashboard --- */
PAGES.push(page({
  area: 'member', slug: 'dashboard', title: 'Dashboard',
  body: `      <div class="content-inner">
        <div class="stat-grid cols-3">
${stat('Credit balance', '24,650', '~9,860 messages left', 'credit', 'accent')}
${stat('Usage this month', '18,204', 'messages across all bots', 'chart', 'success')}
${stat('Active bots', '4 <span style="font-size:15px; font-weight:700; color:var(--theme-text-muted);">of 6</span>', '2 paused', 'bot', 'warning')}
        </div>

        <div style="display:grid; grid-template-columns:1.7fr 1fr; gap:14px; align-items:start;">
          <div class="card">
            <div class="panel-head">
              <div class="panel-title display">Revenue over time</div>
              ${rangeControl()}
            </div>
            ${areaChart([40, 48, 44, 62, 56, 70, 67, 84, 76, 96, 90, 108, 102, 124, 120], { fillId: 'rev' })}
            ${axis(['1 Jul', '8 Jul', '15 Jul', '22 Jul', '29 Jul'])}
          </div>

          <div class="card">
            <div class="panel-title display" style="margin-bottom:12px;">Your bots</div>
            <a href="${f('bot-analytics')}" class="list-row"><span class="dot" style="background:var(--theme-success);"></span><div style="flex:1;"><div class="cell-main">Client Onboarding Bot</div><div class="cell-sub">Active · 412 today</div></div></a>
            <a href="${f('bot-analytics')}" class="list-row"><span class="dot" style="background:var(--theme-success);"></span><div style="flex:1;"><div class="cell-main">Sales Qualifier</div><div class="cell-sub">Active · 128 today</div></div></a>
            <a href="${f('bot-analytics')}" class="list-row"><span class="dot" style="background:var(--theme-success);"></span><div style="flex:1;"><div class="cell-main">Course FAQ Bot</div><div class="cell-sub">Active · 65 today</div></div></a>
            <a href="${f('bot-analytics')}" class="list-row"><span class="dot" style="background:var(--theme-border-strong);"></span><div style="flex:1;"><div class="cell-main">Support Concierge</div><div class="cell-sub">Paused · 2 days ago</div></div></a>
            <a href="${f('my-bots')}" class="btn btn-ghost" style="width:100%; justify-content:center; margin-top:10px;">View all bots</a>
          </div>
        </div>
      </div>`,
}));

/* --- My Bots --- */
PAGES.push(page({
  area: 'member', slug: 'my-bots', title: 'My Bots',
  body: `      <div class="content-inner">
        <div class="filter-card">
          <div class="search-box">${ic('search', 16)}<input type="text" placeholder="Search your bots…"></div>
          <div class="filter-pill">Status ${ic('chevD', 13)}</div>
          <div class="filter-pill">Mode ${ic('chevD', 13)}</div>
          <a href="${f('bot-builder')}" class="btn btn-primary push-right">${ic('plus', 15)} New bot</a>
        </div>

        <div class="card">
${table(
  ['Bot', 'Mode', 'Status', 'Model', { label: 'Messages (30d)', num: true }, { label: 'Actions', num: true }],
  [
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.68 0.14 258);">CO</div><div><div class="cell-main">Client Onboarding Bot</div><div class="cell-sub">Business · paywalled at $49</div></div></div></td>', '<td><span class="badge b-blue">Public</span></td>', '<td><span class="badge b-green">Active</span></td>', '<td>Claude</td>', '<td class="num">8,412</td>', '<td><div class="row-actions"><button class="icon-btn">' + ic('build', 15) + '</button><button class="icon-btn">' + ic('chart', 15) + '</button><button class="icon-btn">' + ic('chevR', 15) + '</button></div></td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.65 0.15 25);">SQ</div><div><div class="cell-main">Sales Qualifier</div><div class="cell-sub">Sales · free</div></div></div></td>', '<td><span class="badge b-blue">Public</span></td>', '<td><span class="badge b-green">Active</span></td>', '<td>GPT</td>', '<td class="num">3,940</td>', '<td><div class="row-actions"><button class="icon-btn">' + ic('build', 15) + '</button><button class="icon-btn">' + ic('chart', 15) + '</button><button class="icon-btn">' + ic('chevR', 15) + '</button></div></td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.7 0.13 165);">CF</div><div><div class="cell-main">Course FAQ Bot</div><div class="cell-sub">Education · paywalled at $19</div></div></div></td>', '<td><span class="badge b-blue">Public</span></td>', '<td><span class="badge b-green">Active</span></td>', '<td>Gemini</td>', '<td class="num">2,106</td>', '<td><div class="row-actions"><button class="icon-btn">' + ic('build', 15) + '</button><button class="icon-btn">' + ic('chart', 15) + '</button><button class="icon-btn">' + ic('chevR', 15) + '</button></div></td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.72 0.14 80);">LM</div><div><div class="cell-main">Lead Magnet Bot</div><div class="cell-sub">Marketing · free</div></div></div></td>', '<td><span class="badge b-blue">Public</span></td>', '<td><span class="badge b-green">Active</span></td>', '<td>Claude</td>', '<td class="num">1,286</td>', '<td><div class="row-actions"><button class="icon-btn">' + ic('build', 15) + '</button><button class="icon-btn">' + ic('chart', 15) + '</button><button class="icon-btn">' + ic('chevR', 15) + '</button></div></td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.6 0.12 300);">SC</div><div><div class="cell-main">Support Concierge</div><div class="cell-sub">Support · free</div></div></div></td>', '<td><span class="badge b-grey">Personal</span></td>', '<td><span class="badge b-grey">Paused</span></td>', '<td>Claude</td>', '<td class="num">440</td>', '<td><div class="row-actions"><button class="icon-btn">' + ic('build', 15) + '</button><button class="icon-btn">' + ic('chart', 15) + '</button><button class="icon-btn">' + ic('chevR', 15) + '</button></div></td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.55 0.1 250);">WR</div><div><div class="cell-main">Webinar Replay Bot</div><div class="cell-sub">Marketing · draft</div></div></div></td>', '<td><span class="badge b-grey">Personal</span></td>', '<td><span class="badge b-grey">Paused</span></td>', '<td>Grok</td>', '<td class="num">0</td>', '<td><div class="row-actions"><button class="icon-btn">' + ic('build', 15) + '</button><button class="icon-btn">' + ic('chart', 15) + '</button><button class="icon-btn">' + ic('chevR', 15) + '</button></div></td>'],
  ]
)}
        </div>
        <div class="results-row"><span class="results-count">Showing 6 of 6 bots</span><span class="results-count">Pro Botter allows unlimited bots</span></div>
      </div>`,
}));

/* --- Bot Builder --- */
PAGES.push(page({
  area: 'member', slug: 'bot-builder', title: 'Bot Builder',
  body: `      <div class="content-inner narrow">
        <div class="card">
          <div class="panel-head" style="margin-bottom:0;">
            <div>
              <div class="panel-title display">Client Onboarding Bot</div>
              <div class="panel-sub">8,412 messages this month · <a href="${f('bot-analytics')}">full analytics</a></div>
            </div>
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="toggle-text" style="text-align:right;"><div class="t-title">Public</div><div class="t-sub">Shareable and sellable</div></div>
              <div class="toggle on"><div class="knob"></div></div>
            </div>
          </div>
        </div>

${accordion(true, 'Instructions', 'What the bot knows and how it behaves', 'build', 'accent', `
            <div class="field-row single">
              <div class="field">
                <label>System instructions</label>
                <textarea rows="7">You are the onboarding assistant for a marketing agency. Greet new clients warmly, collect their business name, industry, current marketing channels and monthly budget. Ask one question at a time. Once you have all four, summarise them back and confirm before finishing.</textarea>
                <span class="hint">4,180 of 8,000 characters used</span>
              </div>
            </div>
            <div class="field-row">
              <div class="field"><label>Model</label><select><option>Claude (default)</option><option>GPT</option><option>Gemini</option><option>Grok</option></select></div>
              <div class="field"><label>Category</label><select><option>Business</option><option>Sales</option><option>Education</option><option>Support</option></select></div>
            </div>`)}

${accordion(false, 'Knowledge files', '3 files uploaded · 2.4 MB of 25 MB', 'import', 'success', `
            <div class="list-row"><span class="dot" style="background:var(--theme-success);"></span><div style="flex:1;"><div class="cell-main">onboarding-checklist.pdf</div><div class="cell-sub">840 KB · uploaded 12 Jul 2026</div></div><button class="btn btn-ghost btn-sm">Remove</button></div>
            <div class="list-row"><span class="dot" style="background:var(--theme-success);"></span><div style="flex:1;"><div class="cell-main">service-tiers.docx</div><div class="cell-sub">1.1 MB · uploaded 12 Jul 2026</div></div><button class="btn btn-ghost btn-sm">Remove</button></div>
            <div class="list-row"><span class="dot" style="background:var(--theme-success);"></span><div style="flex:1;"><div class="cell-main">faq-responses.txt</div><div class="cell-sub">460 KB · uploaded 28 Jul 2026</div></div><button class="btn btn-ghost btn-sm">Remove</button></div>
            <div class="divider"></div>
            <button class="btn btn-ghost">${ic('plus', 15)} Upload a file</button>`)}

${accordion(false, 'Conversation starters', '4 prompts shown to new visitors', 'lines', 'warning', `
            <div class="field-row single"><div class="field"><input type="text" value="I would like to start a new project"></div></div>
            <div class="field-row single"><div class="field"><input type="text" value="What information do you need from me?"></div></div>
            <div class="field-row single"><div class="field"><input type="text" value="How long does onboarding take?"></div></div>
            <div class="field-row single"><div class="field"><input type="text" value="Can you explain your service tiers?"></div></div>
            <button class="btn btn-ghost">${ic('plus', 15)} Add starter</button>`)}

${accordion(false, 'Integrations', '2 configured', 'cog', 'info', `
            <div class="list-row"><span class="dot" style="background:var(--theme-success);"></span><div style="flex:1;"><div class="cell-main">Create CRM contact</div><div class="cell-sub">POST · https://crm.example.com/api/contacts · Bearer token</div></div><button class="btn btn-ghost btn-sm">Edit</button></div>
            <div class="list-row"><span class="dot" style="background:var(--theme-success);"></span><div style="flex:1;"><div class="cell-main">Book discovery call</div><div class="cell-sub">POST · https://cal.example.com/api/book · API key</div></div><button class="btn btn-ghost btn-sm">Edit</button></div>
            <div class="divider"></div>
            <button class="btn btn-ghost">${ic('plus', 15)} Add integration</button>`)}

${accordion(false, 'Paywall &amp; pricing', 'One-time purchase at $49', 'card', 'accent', `
            <div class="toggle-row"><div class="toggle-text"><div class="t-title">Charge for access</div><div class="t-sub">Visitors pay once, then keep access</div></div><div class="toggle on"><div class="knob"></div></div></div>
            <div class="divider"></div>
            <div class="field-row">
              <div class="field"><label>Price (USD)</label><input type="text" value="49.00"></div>
              <div class="field"><label>Usage cap per purchase</label><input type="text" value="1,000 messages"><span class="hint">Protects you from open-ended credit costs</span></div>
            </div>`)}

${accordion(false, 'Sharing &amp; embed', 'Link plus embed snippet', 'tag', 'danger', `
            <div class="field-row single"><div class="field"><label>Share link</label><input type="text" value="https://chat.botterverse.com/b/client-onboarding-bot" readonly></div></div>
            <div class="field-row single"><div class="field"><label>Embed snippet</label><textarea rows="3" readonly>&lt;script src="https://embed.botterverse.com/v1.js" data-bot="client-onboarding-bot"&gt;&lt;/script&gt;</textarea></div></div>`)}

        <div class="card" style="display:flex; gap:10px; align-items:center;">
          <button class="btn btn-primary">Save bot</button>
          <button class="btn btn-ghost">Duplicate</button>
          <button class="btn btn-ghost">Pause</button>
          <button class="btn btn-danger push-right">Delete bot</button>
        </div>
      </div>`,
}));

/* --- Bot Analytics --- */
PAGES.push(page({
  area: 'member', slug: 'bot-analytics', title: 'Bot Analytics',
  body: `      <div class="content-inner">
        <div class="filter-card">
          <div class="filter-pill" style="font-size:13.5px;">Bot: Client Onboarding Bot ${ic('chevD', 13)}</div>
          ${rangeControl()}
        </div>

        <div class="stat-grid cols-4">
${stat('Conversations', '2,318', '+12% vs last month', 'lines', 'accent', 'up')}
${stat('Messages', '8,412', '3.6 per conversation', 'chart', 'success')}
${stat('Credits used', '6,140', '$0.0074 per message', 'credit', 'warning')}
${stat('Revenue', '$1,862', '38 access purchases', 'card', 'info', 'up')}
        </div>

        <div class="card">
          <div class="panel-head">
            <div class="panel-title display">Conversation volume</div>
            <span class="results-count">Daily, last 30 days</span>
          </div>
          ${areaChart([32, 41, 38, 55, 47, 62, 58, 71, 64, 82, 75, 91, 86, 104, 98], { fillId: 'conv' })}
          ${axis(['1 Jul', '8 Jul', '15 Jul', '22 Jul', '29 Jul'])}
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; align-items:start;">
          <div class="card">
            <div class="panel-title display" style="margin-bottom:14px;">Busiest hours</div>
            ${areaChart([8, 6, 4, 3, 5, 12, 28, 44, 52, 61, 58, 49, 44, 51, 47, 38, 30, 22, 18, 14, 11, 9, 8, 7], { w: 460, h: 140, tone: 'success', fillId: 'hrs' })}
            ${axis(['00:00', '06:00', '12:00', '18:00', '23:00'])}
          </div>
          <div class="card">
            <div class="panel-title display" style="margin-bottom:14px;">Top conversation starters</div>
            <div class="list-row"><div style="flex:1;"><div class="cell-main">I would like to start a new project</div><div class="cell-sub">41% of openings</div></div></div>
            <div class="list-row"><div style="flex:1;"><div class="cell-main">What information do you need from me?</div><div class="cell-sub">27% of openings</div></div></div>
            <div class="list-row"><div style="flex:1;"><div class="cell-main">Can you explain your service tiers?</div><div class="cell-sub">19% of openings</div></div></div>
            <div class="list-row"><div style="flex:1;"><div class="cell-main">How long does onboarding take?</div><div class="cell-sub">13% of openings</div></div></div>
          </div>
        </div>
      </div>`,
}));

/* --- Importer --- */
PAGES.push(page({
  area: 'member', slug: 'importer', title: 'Importer',
  extraCss: `
  .steps { display:flex; gap:8px; align-items:center; }
  .step { display:flex; align-items:center; gap:9px; padding:9px 16px; border-radius:var(--theme-radius-pill); font-size:13px; font-weight:700; background:var(--theme-surface-alt); color:var(--theme-text-muted); white-space:nowrap; }
  .step.done { background:var(--theme-success-soft); color:var(--theme-success); }
  .step.now { background:var(--theme-accent); color:var(--theme-text-on-accent); }
  .step-n { width:20px; height:20px; border-radius:50%; border:1.5px solid currentColor; display:flex; align-items:center; justify-content:center; font-size:11px; }
  .step-line { flex:1; height:2px; background:var(--theme-border); min-width:10px; }
`,
  body: `      <div class="content-inner narrow">
        <div class="card">
          <div class="steps">
            <span class="step done"><span class="step-n">✓</span> Instructions</span><span class="step-line"></span>
            <span class="step now"><span class="step-n">2</span> Files</span><span class="step-line"></span>
            <span class="step"><span class="step-n">3</span> Integrations</span><span class="step-line"></span>
            <span class="step"><span class="step-n">4</span> Review</span>
          </div>
        </div>

        <div class="card">
          <div class="panel-head">
            <div>
              <div class="panel-title display">Step 2 - Upload your knowledge files</div>
              <div class="panel-sub">The same files you attached to your original GPT. PDF, DOCX, TXT, CSV or MD.</div>
            </div>
          </div>

          <div style="border:2px dashed var(--theme-border-strong); border-radius:var(--theme-radius-card); padding:34px; text-align:center; background:var(--theme-surface-hover);">
            <div style="display:flex; justify-content:center; margin-bottom:10px; color:var(--theme-text-subtle);">${ic('import', 30)}</div>
            <div style="font-size:14px; font-weight:700; margin-bottom:4px;">Drop files here or browse</div>
            <div style="font-size:12.5px; color:var(--theme-text-muted);">Up to 20 files, 25 MB total</div>
          </div>

          <div class="divider"></div>

          <div class="list-row"><span class="dot" style="background:var(--theme-success);"></span><div style="flex:1;"><div class="cell-main">onboarding-checklist.pdf</div><div class="cell-sub">840 KB · ready</div></div><button class="btn btn-ghost btn-sm">Remove</button></div>
          <div class="list-row"><span class="dot" style="background:var(--theme-success);"></span><div style="flex:1;"><div class="cell-main">service-tiers.docx</div><div class="cell-sub">1.1 MB · ready</div></div><button class="btn btn-ghost btn-sm">Remove</button></div>
          <div class="list-row"><span class="dot" style="background:var(--theme-warning);"></span><div style="flex:1;"><div class="cell-main">pricing-2026.xlsx</div><div class="cell-sub">Converting to text…</div></div></div>

          <div class="divider"></div>
          <div class="notice n-blue">${ic('help', 15)} Files are read once at upload and stored as searchable text. Uploading does not use credits.</div>

          <div class="divider"></div>
          <div style="display:flex; gap:10px;">
            <button class="btn btn-ghost">Back</button>
            <button class="btn btn-primary push-right">Continue to integrations</button>
          </div>
        </div>
      </div>`,
}));

/* --- Bot Market (existing look, regenerated) --- */
PAGES.push(page({
  area: 'member', slug: 'bot-market', title: 'Bot Market',
  extraCss: `
  .bot-grid { display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:16px; }
  .bot-card { background:var(--theme-surface); border-radius:var(--theme-radius-card); padding:20px; display:flex; flex-direction:column; gap:12px; }
  .bot-card-head { display:flex; align-items:center; gap:12px; }
  .bot-mark { width:44px; height:44px; border-radius:var(--theme-radius-control); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:16px; color:#fff; flex-shrink:0; }
  .bot-title { font-size:15.5px; font-weight:700; }
  .bot-owner { font-size:12px; color:var(--theme-text-muted); margin-top:1px; }
  .bot-desc { font-size:12.5px; color:var(--theme-text-muted); line-height:1.5; }
  .tag-row { display:flex; gap:6px; flex-wrap:wrap; }
  .bot-footer { display:flex; align-items:center; justify-content:space-between; margin-top:auto; padding-top:8px; border-top:1px solid var(--theme-border); }
  .bot-price { font-size:17px; font-weight:800; }
  .bot-price .mode { font-size:11px; font-weight:700; color:var(--theme-text-muted); display:block; margin-top:1px; }
`,
  body: `      <div class="content-inner">
        <div class="filter-card">
          <div class="search-box">${ic('search', 16)}<input type="text" placeholder="Search bots by name or description…"></div>
          <div class="filter-pill">Category ${ic('chevD', 13)}</div>
          <div class="filter-pill">Model ${ic('chevD', 13)}</div>
          <div class="filter-pill">Sale type ${ic('chevD', 13)}</div>
          <div class="filter-pill">Owner ${ic('chevD', 13)}</div>
          <div class="filter-pill">Release date ${ic('chevD', 13)}</div>
          <div class="filter-pill push-right">Sort: Relevance ${ic('chevD', 13)}</div>
        </div>

        <div class="results-row"><span class="results-count">142 bots listed</span></div>

        <div class="bot-grid">
${[
  ['CO', 'oklch(0.68 0.14 258)', 'Client Onboarding Pro', 'Priya Kaur', 'Walks new clients through setup, collects intake details and hands off a summary to your team.', [['Business', 'b-blue'], ['Claude', 'b-grey'], ['Integrations', 'b-green']], '$49', 'Transfer'],
  ['CQ', 'oklch(0.65 0.15 25)', 'Cold Email Qualifier', 'Devon Reyes', 'Scores inbound replies and drafts a follow-up so you only spend time on warm leads.', [['Sales', 'b-red'], ['GPT', 'b-grey']], '$29', 'Multi-sell'],
  ['CC', 'var(--theme-success)', 'Course Companion FAQ', 'Marta Lindgren', 'Answers student questions from your course transcripts, day or night, in your own tone.', [['Education', 'b-green'], ['Gemini', 'b-grey']], '$19', 'Multi-sell'],
  ['RE', 'oklch(0.6 0.12 300)', 'Real Estate Lead Bot', 'Sam Okafor', 'Qualifies buyers and sellers straight from your site chat widget and books viewings.', [['Property', 'b-pink'], ['Claude', 'b-grey'], ['Integrations', 'b-green']], '$79', 'Transfer'],
  ['PS', 'var(--theme-warning)', 'Podcast Show Notes Bot', 'Jonas Wren', 'Turns a raw transcript into show notes, timestamps and three social clips.', [['Content', 'b-amber'], ['GPT', 'b-grey']], '$15', 'Multi-sell'],
  ['LI', 'oklch(0.5 0.1 250)', 'Legal Intake Assistant', 'Priya Kaur', "Screens new enquiries against your firm's case criteria before they reach a paralegal.", [['Legal', 'b-blue'], ['Claude', 'b-grey'], ['Integrations', 'b-green']], '$99', 'Transfer'],
].map(([initials, colour, title, owner, desc, tags, price, mode]) => `
          <div class="bot-card">
            <div class="bot-card-head">
              <div class="bot-mark" style="background:${colour};">${initials}</div>
              <div><div class="bot-title">${title}</div><div class="bot-owner">by ${owner}</div></div>
            </div>
            <div class="bot-desc">${desc}</div>
            <div class="tag-row">${tags.map(([t, c]) => `<span class="badge ${c}">${t}</span>`).join('')}</div>
            <div class="bot-footer">
              <div class="bot-price">${price} <span class="mode">${mode}</span></div>
              <button class="btn btn-primary btn-sm">View listing</button>
            </div>
          </div>`).join('')}
        </div>
      </div>`,
}));

/* --- List a Bot --- */
PAGES.push(page({
  area: 'member', slug: 'list-a-bot', title: 'List a Bot',
  body: `      <div class="content-inner narrow">
        <div class="notice n-pink">${ic('tag', 15)} Selling is available on Pro Botter and above. Your plan includes it.</div>

        <div class="card">
          <div class="panel-head"><div><div class="panel-title display">Listing details</div><div class="panel-sub">Only bots in Public mode can be listed</div></div></div>

          <div class="field-row">
            <div class="field"><label>Bot to list</label><select><option>Client Onboarding Bot</option><option>Sales Qualifier</option><option>Course FAQ Bot</option><option>Lead Magnet Bot</option></select></div>
            <div class="field"><label>Category</label><select><option>Business</option><option>Sales</option><option>Education</option><option>Support</option><option>Content</option></select></div>
          </div>

          <div class="field-row single">
            <div class="field"><label>Listing title</label><input type="text" value="Client Onboarding Pro - agency intake in 6 questions"></div>
          </div>

          <div class="field-row single">
            <div class="field">
              <label>Description</label>
              <textarea rows="5">Collects business name, industry, current channels and budget from every new client, confirms the summary back to them, then pushes the record straight into your CRM. Built and refined over 8,000 real conversations.</textarea>
            </div>
          </div>

          <div class="field-row single">
            <div class="field"><label>Tags</label><input type="text" value="onboarding, agency, intake, CRM"><span class="hint">Comma separated, used by Bot Market search</span></div>
          </div>
        </div>

        <div class="card">
          <div class="panel-head"><div><div class="panel-title display">Sale type</div><div class="panel-sub">This cannot be changed once the first sale completes</div></div></div>
          <div class="radio-row">
            <div class="radio-card sel">
              <div class="rc-title">Transfer - sell once</div>
              <div class="rc-sub">Ownership moves to the buyer. You no longer have the bot and cannot sell it again. Its stats reset to zero for them.</div>
            </div>
            <div class="radio-card">
              <div class="rc-title">Multi-sell - PLR copies</div>
              <div class="rc-sub">Each buyer receives their own copy. You keep the original and can keep selling it.</div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="panel-head"><div class="panel-title display">Price and caps</div></div>
          <div class="field-row">
            <div class="field"><label>Price (USD)</label><input type="text" value="49.00"></div>
            <div class="field"><label>Usage cap per purchase</label><input type="text" value="1,000 messages"><span class="hint">Leave blank for unlimited</span></div>
          </div>
          <div class="divider"></div>
          <div class="toggle-row"><div class="toggle-text"><div class="t-title">Show in the central Bot Market</div><div class="t-sub">Turn off to sell only through your own shareable listing link</div></div><div class="toggle on"><div class="knob"></div></div></div>
          <div class="divider"></div>
          <div class="notice n-amber">${ic('credit', 15)} Botterverse takes 5% of each sale. On $49 you receive $46.55, available to withdraw after the holdback.</div>
        </div>

        <div class="card" style="display:flex; gap:10px; align-items:center;">
          <button class="btn btn-primary">Publish listing</button>
          <button class="btn btn-ghost">Save as draft</button>
        </div>
      </div>`,
}));

/* --- Billing & Credits --- */
PAGES.push(page({
  area: 'member', slug: 'billing-credits', title: 'Billing &amp; Credits',
  body: `      <div class="content-inner narrow">
        <div class="stat-grid cols-3">
${stat('Credit balance', '24,650', '~9,860 messages left', 'credit', 'accent')}
${stat('Used this month', '18,204', 'across 6 bots', 'chart', 'success')}
${stat('Current plan', 'Pro Botter', '$197/mo · renews 12 Sep', 'card', 'warning')}
        </div>

${accordion(true, 'Credit usage', 'Consumption over time and recent activity', 'chart', 'accent', `
            <div class="panel-head">${rangeControl()}</div>
            ${areaChart([420, 510, 470, 640, 580, 720, 690, 810, 760, 900, 870, 1010, 960, 1120, 1080], { w: 720, h: 170, fillId: 'cred' })}
            ${axis(['1 Jul', '8 Jul', '15 Jul', '22 Jul', '29 Jul'])}
            <div class="divider"></div>
${table(
  ['Date', 'Bot', 'Type', { label: 'Credits', num: true }],
  [
    ['<td>31 Aug 2026</td>', '<td class="cell-main">Client Onboarding Bot</td>', '<td><span class="badge b-grey">Usage</span></td>', '<td class="num">-1,204</td>'],
    ['<td>30 Aug 2026</td>', '<td class="cell-main">Auto top-up</td>', '<td><span class="badge b-green">Purchase</span></td>', '<td class="num">+20,000</td>'],
    ['<td>30 Aug 2026</td>', '<td class="cell-main">Sales Qualifier</td>', '<td><span class="badge b-grey">Usage</span></td>', '<td class="num">-486</td>'],
    ['<td>28 Aug 2026</td>', '<td class="cell-main">Promo code LAUNCH50</td>', '<td><span class="badge b-pink">Bonus</span></td>', '<td class="num">+5,000</td>'],
    ['<td>28 Aug 2026</td>', '<td class="cell-main">Course FAQ Bot</td>', '<td><span class="badge b-grey">Usage</span></td>', '<td class="num">-312</td>'],
  ]
)}`)}

${accordion(false, 'Auto top-up', 'On · tops up when the balance drops below 5,000', 'credit', 'success', `
            <div class="toggle-row"><div class="toggle-text"><div class="t-title">Top up automatically</div><div class="t-sub">Charges the card on file so your bots never stop mid-conversation</div></div><div class="toggle on"><div class="knob"></div></div></div>
            <div class="divider"></div>
            <div class="field-row">
              <div class="field"><label>Top up when balance falls below</label><input type="text" value="5,000 credits"></div>
              <div class="field"><label>Top-up amount</label><select><option>20,000 credits - $40</option><option>50,000 credits - $95</option><option>100,000 credits - $180</option></select></div>
            </div>
            <div class="notice n-blue">${ic('help', 15)} You are emailed immediately every time an automatic top-up is charged.</div>`)}

${accordion(false, 'Promo code', 'Redeem a bonus-credit code', 'ticket', 'warning', `
            <div class="field-row">
              <div class="field"><label>Code</label><input type="text" placeholder="e.g. LAUNCH50"></div>
              <div class="field" style="justify-content:flex-end;"><button class="btn btn-primary">Redeem code</button></div>
            </div>`)}

${accordion(false, 'Plan &amp; invoices', 'Pro Botter · $197/mo', 'card', 'info', `
            <div style="display:flex; gap:10px; margin-bottom:6px;">
              <button class="btn btn-primary">Upgrade to Master Botter</button>
              <button class="btn btn-ghost">Change plan</button>
              <button class="btn btn-ghost">Update card</button>
            </div>
            <div class="divider"></div>
${table(
  ['Invoice', 'Date', 'Plan', { label: 'Amount', num: true }, { label: '', num: true }],
  [
    ['<td class="cell-main">INV-2026-0841</td>', '<td>12 Aug 2026</td>', '<td>Pro Botter</td>', '<td class="num">$197.00</td>', '<td class="num"><a href="#">PDF</a></td>'],
    ['<td class="cell-main">INV-2026-0774</td>', '<td>12 Jul 2026</td>', '<td>Pro Botter</td>', '<td class="num">$197.00</td>', '<td class="num"><a href="#">PDF</a></td>'],
    ['<td class="cell-main">INV-2026-0698</td>', '<td>12 Jun 2026</td>', '<td>Expert Botter</td>', '<td class="num">$97.00</td>', '<td class="num"><a href="#">PDF</a></td>'],
  ]
)}
            <div class="divider"></div>
            <button class="btn btn-danger btn-sm">Cancel subscription</button>`)}
      </div>`,
}));

/* --- Team & Clients --- */
PAGES.push(page({
  area: 'member', slug: 'team-clients', title: 'Team &amp; Clients',
  body: `      <div class="content-inner">
        <div class="notice n-amber">${ic('lock', 15)} Team seats and client sub-accounts are an Empire Botter feature. You are on Pro Botter - this page is shown read-only as a preview.</div>

        <div class="stat-grid cols-3">
${stat('Seats used', '7 <span style="font-size:15px; font-weight:700; color:var(--theme-text-muted);">of 20</span>', '13 available', 'users', 'accent')}
${stat('Client accounts', '4', '2 onboarding', 'bot', 'success')}
${stat('Consolidated spend', '$1,284', 'this month, all accounts', 'card', 'warning')}
        </div>

        <div class="card">
          <div class="panel-head">
            <div><div class="panel-title display">Team and clients</div><div class="panel-sub">Internal seats share your credits; client accounts are metered separately</div></div>
            <button class="btn btn-primary">${ic('plus', 15)} Invite</button>
          </div>
${table(
  ['Name', 'Type', 'Access', 'Bots', { label: 'Credits used', num: true }, { label: 'Actions', num: true }],
  [
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.75 0.13 330);">JM</div><div><div class="cell-main">Jamie Marlowe</div><div class="cell-sub">jamie@marlowemarketing.co</div></div></div></td>', '<td><span class="badge b-pink">Owner</span></td>', '<td>Full</td>', '<td>6</td>', '<td class="num">18,204</td>', '<td class="num">-</td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.68 0.14 258);">RN</div><div><div class="cell-main">Rosa Neve</div><div class="cell-sub">rosa@marlowemarketing.co</div></div></div></td>', '<td><span class="badge b-blue">Team seat</span></td>', '<td>Build and edit</td>', '<td>3</td>', '<td class="num">4,910</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Manage</button></td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.65 0.15 25);">TA</div><div><div class="cell-main">Tomas Alves</div><div class="cell-sub">tomas@marlowemarketing.co</div></div></div></td>', '<td><span class="badge b-blue">Team seat</span></td>', '<td>Analytics only</td>', '<td>0</td>', '<td class="num">0</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Manage</button></td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.7 0.13 165);">HB</div><div><div class="cell-main">Harbour &amp; Co</div><div class="cell-sub">Client sub-account</div></div></div></td>', '<td><span class="badge b-green">Client</span></td>', '<td>Own bots only</td>', '<td>2</td>', '<td class="num">6,480</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Manage</button></td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.72 0.14 80);">GV</div><div><div class="cell-main">Greenvale Clinic</div><div class="cell-sub">Client sub-account</div></div></div></td>', '<td><span class="badge b-green">Client</span></td>', '<td>Own bots only</td>', '<td>1</td>', '<td class="num">3,120</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Manage</button></td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.6 0.12 300);">NT</div><div><div class="cell-main">Northgate Tuition</div><div class="cell-sub">Onboarding wizard sent 28 Aug</div></div></div></td>', '<td><span class="badge b-green">Client</span></td>', '<td>Pending</td>', '<td>0</td>', '<td class="num">0</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Resend</button></td>'],
  ]
)}
        </div>
      </div>`,
}));

/* --- Settings --- */
PAGES.push(page({
  area: 'member', slug: 'settings', title: 'Settings',
  body: `      <div class="content-inner narrow">
${accordion(true, 'Account', 'Notification preferences', 'cog', 'accent', `
            <div class="notice n-blue" style="margin-bottom:12px;">${ic('help', 15)} Your name, email and password live on your <a href="${f('profile')}">profile page</a>.</div>
            <div class="toggle-row"><div class="toggle-text"><div class="t-title">Usage alerts</div><div class="t-sub">Email me when a bot's credit cap is close to being hit</div></div><div class="toggle on"><div class="knob"></div></div></div>
            <div class="toggle-row"><div class="toggle-text"><div class="t-title">New sale notifications</div><div class="t-sub">Email me when a bot or Bot Market listing sells</div></div><div class="toggle on"><div class="knob"></div></div></div>
            <div class="toggle-row"><div class="toggle-text"><div class="t-title">Auto top-up receipts</div><div class="t-sub">Email me each time credits are topped up automatically</div></div><div class="toggle on"><div class="knob"></div></div></div>
            <div class="toggle-row"><div class="toggle-text"><div class="t-title">Product updates</div><div class="t-sub">Occasional email about new Botterverse features</div></div><div class="toggle off"><div class="knob"></div></div></div>
            <div class="divider"></div>
            <button class="btn btn-primary">Save changes</button>`)}

${accordion(false, 'Branding &amp; white-label', 'Logo, colours and custom domain', 'grid', 'success', `
            <p class="section-note">Logo and colour rebrand is included on Pro Botter and above. Custom domain requires Master Botter.</p>
            <div class="field-row">
              <div class="field"><label>Brand name</label><input type="text" value="Marlowe Marketing"></div>
              <div class="field"><label>Accent colour</label><input type="text" value="#C77DBB"></div>
            </div>
            <div class="field-row single"><div class="field"><label>Logo</label><input type="text" value="marlowe-logo.svg" readonly></div></div>
            <div class="divider"></div>
            <div class="notice n-amber">${ic('lock', 15)} Custom domain unlocks on Master Botter - you are currently on Pro Botter</div>`)}

${accordion(false, 'CRM connector', 'FluentCRM connected', 'lines', 'warning', `
            <div class="field-row single"><div class="field"><label>Provider</label><select><option>FluentCRM</option><option>Mailchimp</option><option>ActiveCampaign</option><option>None</option></select></div></div>
            <div class="field-row">
              <div class="field"><label>API endpoint</label><input type="text" value="https://crm.marlowemarketing.co/wp-json/fluent-crm/v2"></div>
              <div class="field"><label>API key</label><input type="password" value="················"></div>
            </div>
            <div class="divider"></div>
            <div style="display:flex; gap:10px;"><button class="btn btn-primary">Save connector</button><button class="btn btn-ghost">Test connection</button></div>`)}
      </div>`,
}));

/* --- Member profile --- */
PAGES.push(page({
  area: 'member', slug: 'profile', title: 'Profile',
  body: `      <div class="content-inner narrow">
        <a href="${f('settings')}" class="back-link">${ic('chevR', 14).replace('M9 6l6 6-6 6', 'M15 6l-6 6 6 6')} Back to Settings</a>

        <div class="card" style="padding:26px;">
          <div style="display:flex; align-items:center; gap:18px; margin-bottom:6px;">
            <div class="avatar-lg">JM</div>
            <div>
              <div class="panel-title display" style="font-size:17px;">Jamie Marlowe</div>
              <div class="panel-sub">Pro Botter · member since 3 March 2026</div>
            </div>
          </div>

          <div class="divider"></div>

          <div class="field-row">
            <div class="name-group">
              <div class="field"><label>First name</label><input type="text" value="Jamie"></div>
              <div class="field"><label>Last name</label><input type="text" value="Marlowe"></div>
            </div>
            <div class="field"><label>Email address</label><input type="text" value="jamie@marlowemarketing.co"></div>
          </div>
          <div class="field-row">
            <div class="field"><label>New password</label><input type="password" placeholder="••••••••"></div>
            <div class="field"><label>Confirm new password</label><input type="password" placeholder="••••••••"></div>
          </div>

          <div class="divider"></div>
          <button class="btn btn-primary">Save profile</button>
        </div>
      </div>`,
}));

/* ======================================================== BACK OFFICE PAGES */

/* --- BO Dashboard --- */
PAGES.push(page({
  area: 'office', slug: 'back-office-dashboard', title: 'Dashboard',
  extraCss: `
  .tier-row { display:flex; align-items:center; gap:12px; padding:9px 4px; }
  .tier-name { font-size:13px; font-weight:700; width:92px; flex-shrink:0; }
  .tier-bar-track { flex:1; height:10px; border-radius:var(--theme-radius-pill); background:var(--theme-border); overflow:hidden; }
  .tier-bar-fill { height:100%; border-radius:var(--theme-radius-pill); background:var(--theme-accent); }
  .tier-count { font-size:12.5px; font-weight:700; color:var(--theme-text-secondary); width:44px; text-align:right; flex-shrink:0; }
`,
  body: `      <div class="content-inner">
        <div class="stat-grid cols-4">
${stat('MRR', '$48,320', '+6.2% vs last month', 'card', 'accent', 'up')}
${stat('Churn rate', '2.1%', '+0.3pt vs last month', 'chart', 'danger', 'down')}
${stat('Active users', '1,284', 'across all tiers', 'users', 'success')}
${stat('Active bots', '3,912', 'in Public mode', 'bot', 'warning')}
        </div>

        <div style="display:grid; grid-template-columns:1.7fr 1fr; gap:14px; align-items:start;">
          <div class="card">
            <div class="panel-head"><div class="panel-title display">MRR over time</div>${rangeControl()}</div>
            ${areaChart([31, 33, 34, 37, 36, 40, 39, 43, 42, 45, 44, 47, 46, 48, 48], { fillId: 'mrr' })}
            ${axis(['Sep 25', 'Dec 25', 'Mar 26', 'Jun 26', 'Aug 26'])}
          </div>

          <div class="card">
            <div class="panel-title display" style="margin-bottom:12px;">Provider health</div>
            <div class="list-row"><span class="dot" style="background:var(--theme-success);"></span><div style="flex:1;"><div class="cell-main">Claude</div><div class="cell-sub">0.02% error rate</div></div><span class="badge b-green">Healthy</span></div>
            <div class="list-row"><span class="dot" style="background:var(--theme-success);"></span><div style="flex:1;"><div class="cell-main">GPT</div><div class="cell-sub">0.05% error rate</div></div><span class="badge b-green">Healthy</span></div>
            <div class="list-row"><span class="dot" style="background:var(--theme-warning);"></span><div style="flex:1;"><div class="cell-main">Gemini</div><div class="cell-sub">1.8% error rate</div></div><span class="badge b-amber">Degraded</span></div>
            <div class="list-row"><span class="dot" style="background:var(--theme-success);"></span><div style="flex:1;"><div class="cell-main">Grok</div><div class="cell-sub">0.11% error rate</div></div><span class="badge b-green">Healthy</span></div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; align-items:start;">
          <div class="card">
            <div class="panel-title display" style="margin-bottom:14px;">New signups by tier</div>
${[['Apprentice', 92, 340], ['Novice', 57, 210], ['Expert', 26, 96], ['Pro', 15, 54], ['Master', 6, 21], ['Empire', 2, 8]]
  .map(([n, pc, c]) => `            <div class="tier-row"><span class="tier-name">${n}</span><div class="tier-bar-track"><div class="tier-bar-fill" style="width:${pc}%;"></div></div><span class="tier-count">${c}</span></div>`)
  .join('\n')}
          </div>
          <div class="card">
            <div class="panel-head"><div class="panel-title display">Margin over time</div></div>
            ${areaChart([68, 70, 69, 72, 71, 74, 73, 76, 78], { w: 460, h: 150, tone: 'success', fillId: 'marg' })}
            ${axis(['Wholesale ~22%', 'Retail margin ~78%'])}
          </div>
        </div>
      </div>`,
}));

/* --- BO User Management --- */
PAGES.push(page({
  area: 'office', slug: 'back-office-user-management', title: 'User Management',
  body: `      <div class="content-inner">
        <div class="filter-card">
          <div class="search-box">${ic('search', 16)}<input type="text" placeholder="Search by name, email or account ID…"></div>
          <div class="filter-pill">Tier ${ic('chevD', 13)}</div>
          <div class="filter-pill">Status ${ic('chevD', 13)}</div>
          <div class="filter-pill">Signed up ${ic('chevD', 13)}</div>
          <div class="filter-pill push-right">Export CSV</div>
        </div>

        <div class="card">
${table(
  ['User', 'Tier', 'Status', 'Bots', { label: 'Credits', num: true }, { label: 'MRR', num: true }, { label: 'Actions', num: true }],
  [
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.75 0.13 330);">JM</div><div><div class="cell-main">Jamie Marlowe</div><div class="cell-sub">jamie@marlowemarketing.co</div></div></div></td>', '<td><span class="badge b-pink">Pro</span></td>', '<td><span class="badge b-green">Active</span></td>', '<td>6</td>', '<td class="num">24,650</td>', '<td class="num">$197</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Manage</button></td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.68 0.14 258);">PK</div><div><div class="cell-main">Priya Kaur</div><div class="cell-sub">priya@kaurdigital.com</div></div></div></td>', '<td><span class="badge b-blue">Master</span></td>', '<td><span class="badge b-green">Active</span></td>', '<td>18</td>', '<td class="num">86,120</td>', '<td class="num">$297</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Manage</button></td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.65 0.15 25);">DR</div><div><div class="cell-main">Devon Reyes</div><div class="cell-sub">devon@reyesmedia.io</div></div></div></td>', '<td><span class="badge b-grey">Novice</span></td>', '<td><span class="badge b-amber">Dormant</span></td>', '<td>2</td>', '<td class="num">340</td>', '<td class="num">$47</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Manage</button></td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.7 0.13 165);">ML</div><div><div class="cell-main">Marta Lindgren</div><div class="cell-sub">marta@lindgren.se</div></div></div></td>', '<td><span class="badge b-blue">Empire</span></td>', '<td><span class="badge b-green">Active</span></td>', '<td>42</td>', '<td class="num">204,880</td>', '<td class="num">$397</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Manage</button></td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.6 0.12 300);">SO</div><div><div class="cell-main">Sam Okafor</div><div class="cell-sub">sam@okafor.property</div></div></div></td>', '<td><span class="badge b-pink">Pro</span></td>', '<td><span class="badge b-red">Suspended</span></td>', '<td>9</td>', '<td class="num">1,020</td>', '<td class="num">$0</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Manage</button></td>'],
    ['<td><div class="with-avatar"><div class="avatar-sm" style="background:oklch(0.72 0.14 80);">JW</div><div><div class="cell-main">Jonas Wren</div><div class="cell-sub">jonas@wrenaudio.com</div></div></div></td>', '<td><span class="badge b-grey">Apprentice</span></td>', '<td><span class="badge b-green">Trial</span></td>', '<td>1</td>', '<td class="num">180</td>', '<td class="num">$0</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Manage</button></td>'],
  ]
)}
        </div>

        <div class="card">
          <div class="panel-head"><div><div class="panel-title display">Selected user - Jamie Marlowe</div><div class="panel-sub">Actions apply immediately and are written to the audit log</div></div></div>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn btn-ghost">Log in as user</button>
            <button class="btn btn-ghost">Grant credits</button>
            <button class="btn btn-ghost">Refund a charge</button>
            <button class="btn btn-ghost">Change tier</button>
            <button class="btn btn-danger">Suspend account</button>
          </div>
          <div class="divider"></div>
          <div class="panel-title display" style="font-size:15px; margin-bottom:4px;">Per-account feature overrides</div>
          <p class="section-note">These take precedence over the tier defaults set in the Feature Matrix.</p>
          <div class="toggle-row"><div class="toggle-text"><div class="t-title">Bot Market selling</div><div class="t-sub">Tier default: on for Pro Botter</div></div><div class="toggle on"><div class="knob"></div></div></div>
          <div class="toggle-row"><div class="toggle-text"><div class="t-title">Integrations</div><div class="t-sub">Tier default: on for Pro Botter</div></div><div class="toggle on"><div class="knob"></div></div></div>
          <div class="toggle-row"><div class="toggle-text"><div class="t-title">Custom domain</div><div class="t-sub">Tier default: off below Master Botter</div></div><div class="toggle off"><div class="knob"></div></div></div>
          <div class="toggle-row"><div class="toggle-text"><div class="t-title">Data export</div><div class="t-sub">Tier default: on for all tiers</div></div><div class="toggle on"><div class="knob"></div></div></div>
        </div>
      </div>`,
}));

/* --- BO Bot Management --- */
PAGES.push(page({
  area: 'office', slug: 'back-office-bot-management', title: 'Bot Management',
  body: `      <div class="content-inner">
        <div class="filter-card">
          <div class="search-box">${ic('search', 16)}<input type="text" placeholder="Search bots across all accounts…"></div>
          <div class="filter-pill">Owner ${ic('chevD', 13)}</div>
          <div class="filter-pill">Model ${ic('chevD', 13)}</div>
          <div class="filter-pill">Mode ${ic('chevD', 13)}</div>
          <div class="filter-pill">Status ${ic('chevD', 13)}</div>
        </div>

        <div class="stat-grid cols-4">
${stat('Total bots', '5,847', 'across 1,284 accounts', 'bot', 'accent')}
${stat('Public mode', '3,912', '67% of all bots', 'market', 'success')}
${stat('Paused by staff', '14', '3 pending review', 'lock', 'danger')}
${stat('Over usage cap', '6', 'capped this month', 'clock', 'warning')}
        </div>

        <div class="card">
${table(
  ['Bot', 'Owner', 'Model', 'Mode', 'Status', { label: 'Messages (30d)', num: true }, { label: 'Actions', num: true }],
  [
    ['<td class="cell-main">Client Onboarding Bot</td>', '<td>Jamie Marlowe</td>', '<td>Claude</td>', '<td><span class="badge b-blue">Public</span></td>', '<td><span class="badge b-green">Active</span></td>', '<td class="num">8,412</td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Cap</button><button class="btn btn-ghost btn-sm">Pause</button></div></td>'],
    ['<td class="cell-main">Property Valuation Assistant</td>', '<td>Sam Okafor</td>', '<td>Claude</td>', '<td><span class="badge b-blue">Public</span></td>', '<td><span class="badge b-red">Suspended</span></td>', '<td class="num">21,900</td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Cap</button><button class="btn btn-ghost btn-sm">Restore</button></div></td>'],
    ['<td class="cell-main">Course Companion FAQ</td>', '<td>Marta Lindgren</td>', '<td>Gemini</td>', '<td><span class="badge b-blue">Public</span></td>', '<td><span class="badge b-green">Active</span></td>', '<td class="num">14,206</td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Cap</button><button class="btn btn-ghost btn-sm">Pause</button></div></td>'],
    ['<td class="cell-main">Cold Email Qualifier</td>', '<td>Devon Reyes</td>', '<td>GPT</td>', '<td><span class="badge b-grey">Personal</span></td>', '<td><span class="badge b-grey">Paused</span></td>', '<td class="num">0</td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Cap</button><button class="btn btn-ghost btn-sm">Resume</button></div></td>'],
    ['<td class="cell-main">Legal Intake Assistant</td>', '<td>Priya Kaur</td>', '<td>Claude</td>', '<td><span class="badge b-blue">Public</span></td>', '<td><span class="badge b-amber">At cap</span></td>', '<td class="num">31,480</td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Cap</button><button class="btn btn-ghost btn-sm">Pause</button></div></td>'],
  ]
)}
        </div>
      </div>`,
}));

/* --- BO Feature Matrix --- */
PAGES.push(page({
  area: 'office', slug: 'back-office-feature-matrix', title: 'Feature Matrix',
  extraCss: `
  table.matrix { width:100%; border-collapse:collapse; font-size:13px; }
  table.matrix th { padding:0 10px 12px; font-size:11.5px; font-weight:800; letter-spacing:0.04em; text-transform:uppercase; color:var(--theme-text-muted); text-align:center; }
  table.matrix th:first-child { text-align:left; width:34%; }
  table.matrix td { padding:11px 10px; border-top:1px solid var(--theme-border); text-align:center; }
  table.matrix td:first-child { text-align:left; font-weight:700; }
  table.matrix tr:hover td { background:var(--theme-surface-hover); }
  .tier-head input { border:1px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:7px 8px; font-size:12.5px; font-family:inherit; font-weight:700; text-align:center; width:100%; color:var(--theme-text); }
  .tier-code { font-size:10.5px; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; color:var(--theme-text-subtle); margin-bottom:5px; }
  .yes { color:var(--theme-success); font-weight:800; }
  .no { color:var(--theme-text-subtle); font-weight:800; }
  .val { font-weight:700; font-size:12.5px; }
`,
  body: `      <div class="content-inner">
        <div class="notice n-amber">${ic('help', 15)} If the tier names are changed here, they should also be changed in the cart as well.</div>

        <div class="card">
          <div class="panel-head"><div><div class="panel-title display">Tier feature defaults</div><div class="panel-sub">Per-account overrides on User Management take precedence over these</div></div><button class="btn btn-primary">Save matrix</button></div>

          <div class="table-wrap">
            <table class="matrix">
              <thead>
                <tr>
                  <th>Feature</th>
${[['Apprentice', 'Apprentice Botter'], ['Novice', 'Novice Botter'], ['Expert', 'Expert Botter'], ['Pro', 'Pro Botter'], ['Master', 'Master Botter'], ['Empire', 'Empire Botter']]
  .map(([code, name]) => `                  <th class="tier-head"><div class="tier-code">${code}</div><input type="text" value="${name}"></th>`)
  .join('\n')}
                </tr>
              </thead>
              <tbody>
${[
  ['Monthly price', ['$0', '$47', '$97', '$197', '$297', '$397'], 'val'],
  ['Bot limit', ['1', '5', '15', 'Unlimited', 'Unlimited', 'Unlimited'], 'val'],
  ['Monthly credits', ['500', '20k', '60k', '150k', '300k', '500k'], 'val'],
  ['Integrations', [0, 1, 1, 1, 1, 1]],
  ['Per-bot paywall', [0, 1, 1, 1, 1, 1]],
  ['Sharing and embed', [0, 1, 1, 1, 1, 1]],
  ['Basic analytics', [1, 1, 1, 1, 1, 1]],
  ['Deep analytics', [0, 0, 1, 1, 1, 1]],
  ['Priority support', [0, 0, 1, 1, 1, 1]],
  ['Bot Market buying', [1, 1, 1, 1, 1, 1]],
  ['Bot Market selling', [0, 0, 0, 1, 1, 1]],
  ['Revenue share taken', ['-', '15%', '12%', '8%', '5%', '5%'], 'val'],
  ['Basic rebrand', [0, 0, 0, 1, 1, 1]],
  ['Custom domain', [0, 0, 0, 0, 1, 1]],
  ['A/B testing', [0, 0, 0, 0, 1, 1]],
  ['Early model access', [0, 0, 0, 0, 1, 1]],
  ['Team seats', ['-', '-', '-', '-', '-', '20'], 'val'],
  ['Client sub-accounts', [0, 0, 0, 0, 0, 1]],
  ['Data export', [1, 1, 1, 1, 1, 1]],
  ['Powered-by tag removable', [0, 0, 0, 1, 1, 1]],
]
  .map(([label, cells, kind]) => `                <tr><td>${label}</td>${cells
    .map((c) => (kind === 'val' ? `<td class="val">${c}</td>` : `<td class="${c ? 'yes' : 'no'}">${c ? '✓' : '-'}</td>`))
    .join('')}</tr>`)
  .join('\n')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,
}));

/* --- BO Model & Rates --- */
PAGES.push(page({
  area: 'office', slug: 'back-office-model-rates', title: 'Model &amp; Rates',
  body: `      <div class="content-inner">
${accordion(true, 'Model availability', 'Three-state control per provider', 'clock', 'accent', `
            <p class="section-note">"Disabled for new bots" keeps every existing bot on that model working, so a provider can be phased out without breaking anyone.</p>
${table(
  ['Model', 'Provider', 'State', { label: 'Bots using', num: true }, { label: '', num: true }],
  [
    ['<td class="cell-main">Claude Sonnet 5</td>', '<td>Anthropic</td>', '<td><span class="badge b-green">Available for new bots</span></td>', '<td class="num">3,104</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Change</button></td>'],
    ['<td class="cell-main">GPT-5.2</td>', '<td>OpenAI</td>', '<td><span class="badge b-green">Available for new bots</span></td>', '<td class="num">1,482</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Change</button></td>'],
    ['<td class="cell-main">Gemini 3.1 Pro</td>', '<td>Google</td>', '<td><span class="badge b-green">Available for new bots</span></td>', '<td class="num">908</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Change</button></td>'],
    ['<td class="cell-main">Grok 4</td>', '<td>xAI</td>', '<td><span class="badge b-green">Available for new bots</span></td>', '<td class="num">353</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Change</button></td>'],
    ['<td class="cell-main">Claude Sonnet 4.5</td>', '<td>Anthropic</td>', '<td><span class="badge b-amber">Disabled for new bots</span></td>', '<td class="num">122</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Change</button></td>'],
    ['<td class="cell-main">GPT-4o</td>', '<td>OpenAI</td>', '<td><span class="badge b-grey">Retired</span></td>', '<td class="num">0</td>', '<td class="num"><button class="btn btn-ghost btn-sm">Change</button></td>'],
  ]
)}`)}

${accordion(false, 'Wholesale costs', 'Updated manually, drives every retail rate below', 'card', 'success', `
            <p class="section-note">USD per million tokens, as published by each provider. Last checked 28 August 2026.</p>
${table(
  ['Model', { label: 'Input $/M', num: true }, { label: 'Output $/M', num: true }, { label: 'Typical message', num: true }],
  [
    ['<td class="cell-main">Claude Sonnet 5</td>', '<td class="num">2.00</td>', '<td class="num">10.00</td>', '<td class="num">$0.0072</td>'],
    ['<td class="cell-main">GPT-5.2</td>', '<td class="num">1.75</td>', '<td class="num">14.00</td>', '<td class="num">$0.0079</td>'],
    ['<td class="cell-main">Gemini 3.1 Pro</td>', '<td class="num">2.00</td>', '<td class="num">12.00</td>', '<td class="num">$0.0076</td>'],
    ['<td class="cell-main">Grok 4</td>', '<td class="num">1.50</td>', '<td class="num">9.00</td>', '<td class="num">$0.0064</td>'],
  ]
)}`)}

${accordion(false, 'Retail credit rates', 'Computed recommendations per tier', 'chart', 'warning', `
            <p class="section-note">Markup scales down toward the higher tiers, with Empire at the 3x floor. No tier is ever priced below wholesale.</p>
${table(
  ['Tier', { label: 'Markup', num: true }, { label: 'Credits per $1', num: true }, { label: 'Effective $/message', num: true }, { label: 'Margin', num: true }],
  [
    ['<td class="cell-main">Apprentice Botter</td>', '<td class="num">5.0x</td>', '<td class="num">340</td>', '<td class="num">$0.0294</td>', '<td class="num">80%</td>'],
    ['<td class="cell-main">Novice Botter</td>', '<td class="num">4.5x</td>', '<td class="num">378</td>', '<td class="num">$0.0265</td>', '<td class="num">78%</td>'],
    ['<td class="cell-main">Expert Botter</td>', '<td class="num">4.0x</td>', '<td class="num">425</td>', '<td class="num">$0.0235</td>', '<td class="num">75%</td>'],
    ['<td class="cell-main">Pro Botter</td>', '<td class="num">3.6x</td>', '<td class="num">472</td>', '<td class="num">$0.0212</td>', '<td class="num">72%</td>'],
    ['<td class="cell-main">Master Botter</td>', '<td class="num">3.3x</td>', '<td class="num">515</td>', '<td class="num">$0.0194</td>', '<td class="num">70%</td>'],
    ['<td class="cell-main">Empire Botter</td>', '<td class="num">3.0x</td>', '<td class="num">567</td>', '<td class="num">$0.0176</td>', '<td class="num">67%</td>'],
  ]
)}`)}

${accordion(false, 'Global settings', 'Thresholds, caps and fees', 'cog', 'info', `
            <div class="field-row">
              <div class="field"><label>Default auto top-up threshold</label><input type="text" value="5,000 credits"></div>
              <div class="field"><label>Default top-up amount</label><input type="text" value="20,000 credits"></div>
            </div>
            <div class="field-row">
              <div class="field"><label>BotFlip fee</label><input type="text" value="5%"><span class="hint">Taken as a Stripe application fee on every Bot Market sale</span></div>
              <div class="field"><label>Hard per-message input cap</label><input type="text" value="32,000 tokens"></div>
            </div>
            <div class="field-row">
              <div class="field"><label>Rate limit - free trial</label><input type="text" value="20 messages / hour"></div>
              <div class="field"><label>Rate limit - paid tiers</label><input type="text" value="600 messages / hour"></div>
            </div>
            <div class="divider"></div>
            <button class="btn btn-primary">Save global settings</button>`)}
      </div>`,
}));

/* --- BO CRM Integration --- */
PAGES.push(page({
  area: 'office', slug: 'back-office-crm-integration', title: 'CRM Integration',
  body: `      <div class="content-inner">
        <div class="card">
          <div class="panel-head"><div><div class="panel-title display">Connector</div><div class="panel-sub">Lifecycle events are emitted internally, then translated by the active connector</div></div></div>
          <div class="field-row">
            <div class="field"><label>Active provider</label><select><option>FluentCRM</option><option>Mailchimp</option><option>ActiveCampaign</option><option>None - events discarded</option></select></div>
            <div class="field"><label>API endpoint</label><input type="text" value="https://crm.botterverse.com/wp-json/fluent-crm/v2"></div>
          </div>
          <div class="field-row">
            <div class="field"><label>API key</label><input type="password" value="················"></div>
            <div class="field" style="justify-content:flex-end;"><button class="btn btn-ghost">Test connection</button></div>
          </div>
        </div>

        <div class="card">
          <div class="panel-head"><div><div class="panel-title display">Hook points</div><div class="panel-sub">A blank tag means that hook does not fire</div></div><button class="btn btn-primary">Save tags</button></div>
${table(
  ['Hook point', 'When it fires', 'Tag'],
  [
    ['<td class="cell-main">signup.trial</td>', '<td>A free Apprentice account is created</td>', '<td><input type="text" value="Trial" style="border:1px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:7px 12px; font-size:13px; font-family:inherit; width:100%;"></td>'],
    ['<td class="cell-main">tier.reached</td>', '<td>Any paid tier is reached, fires the tier name</td>', '<td><input type="text" value="{tier_name}" style="border:1px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:7px 12px; font-size:13px; font-family:inherit; width:100%;"></td>'],
    ['<td class="cell-main">tier.downgraded</td>', '<td>A subscriber moves to a cheaper tier</td>', '<td><input type="text" value="Downgraded" style="border:1px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:7px 12px; font-size:13px; font-family:inherit; width:100%;"></td>'],
    ['<td class="cell-main">subscription.cancelled</td>', '<td>A subscription is cancelled</td>', '<td><input type="text" value="Cancelled" style="border:1px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:7px 12px; font-size:13px; font-family:inherit; width:100%;"></td>'],
    ['<td class="cell-main">account.dormant</td>', '<td>No activity for 45 days</td>', '<td><input type="text" value="Dormant" style="border:1px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:7px 12px; font-size:13px; font-family:inherit; width:100%;"></td>'],
    ['<td class="cell-main">bot.first_built</td>', '<td>A member saves their first bot</td>', '<td><input type="text" value="Built First Bot" style="border:1px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:7px 12px; font-size:13px; font-family:inherit; width:100%;"></td>'],
    ['<td class="cell-main">bot.first_published</td>', '<td>A bot is switched to Public for the first time</td>', '<td><input type="text" value="Published First Bot" style="border:1px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:7px 12px; font-size:13px; font-family:inherit; width:100%;"></td>'],
    ['<td class="cell-main">sale.first</td>', '<td>A member makes their first sale of any kind</td>', '<td><input type="text" value="First Sale" style="border:1px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:7px 12px; font-size:13px; font-family:inherit; width:100%;"></td>'],
    ['<td class="cell-main">importer.used</td>', '<td>The GPT importer wizard completes</td>', '<td><input type="text" value="Migrated From GPT" style="border:1px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:7px 12px; font-size:13px; font-family:inherit; width:100%;"></td>'],
    ['<td class="cell-main">market.first_listing</td>', '<td>A bot is listed on Bot Market</td>', '<td><input type="text" value="Bot Market Seller" style="border:1px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:7px 12px; font-size:13px; font-family:inherit; width:100%;"></td>'],
    ['<td class="cell-main">market.first_purchase</td>', '<td>A member buys from Bot Market</td>', '<td><input type="text" value="Bot Market Buyer" style="border:1px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:7px 12px; font-size:13px; font-family:inherit; width:100%;"></td>'],
    ['<td class="cell-main">credits.auto_topped</td>', '<td>An automatic top-up is charged</td>', '<td><input type="text" value="Power User" style="border:1px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:7px 12px; font-size:13px; font-family:inherit; width:100%;"></td>'],
    ['<td class="cell-main">bot.paused_by_staff</td>', '<td>Staff pause a bot from Bot Management</td>', '<td><input type="text" value="" placeholder="Blank - does not fire" style="border:1px solid var(--theme-border-strong); background:var(--theme-surface-alt); border-radius:var(--theme-radius-control); padding:7px 12px; font-size:13px; font-family:inherit; width:100%;"></td>'],
  ]
)}
        </div>
      </div>`,
}));

/* --- BO Promo Codes --- */
PAGES.push(page({
  area: 'office', slug: 'back-office-promo-codes', title: 'Promo Codes',
  body: `      <div class="content-inner">
        <div class="filter-card">
          <div class="search-box">${ic('search', 16)}<input type="text" placeholder="Search codes…"></div>
          <div class="filter-pill">Tier ${ic('chevD', 13)}</div>
          <div class="filter-pill">Status ${ic('chevD', 13)}</div>
          <button class="btn btn-primary push-right">${ic('plus', 15)} New code</button>
        </div>

        <div class="notice n-blue">${ic('help', 15)} Codes grant bonus credits only. Subscription discounts are coupons in FluentCart: <a href="#">manage them in FluentCart</a>.</div>

        <div class="card">
${table(
  ['Code', 'Tier', 'Value', 'Expires', { label: 'Redeemed', num: true }, 'Status', { label: 'Actions', num: true }],
  [
    ['<td class="cell-main">LAUNCH50</td>', '<td>All tiers</td>', '<td>5,000 credits</td>', '<td>30 Sep 2026</td>', '<td class="num">412 / 1,000</td>', '<td><span class="badge b-green">Active</span></td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Edit</button><button class="btn btn-ghost btn-sm">Expire</button></div></td>'],
    ['<td class="cell-main">WARRIOR25</td>', '<td>Novice Botter</td>', '<td>2,500 credits</td>', '<td>15 Sep 2026</td>', '<td class="num">188 / 500</td>', '<td><span class="badge b-green">Active</span></td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Edit</button><button class="btn btn-ghost btn-sm">Expire</button></div></td>'],
    ['<td class="cell-main">JVZOO-BONUS</td>', '<td>All tiers</td>', '<td>20,000 credits</td>', '<td>1 Oct 2026</td>', '<td class="num">64 / 250</td>', '<td><span class="badge b-green">Active</span></td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Edit</button><button class="btn btn-ghost btn-sm">Expire</button></div></td>'],
    ['<td class="cell-main">EARLYBIRD</td>', '<td>Pro Botter</td>', '<td>10,000 credits</td>', '<td>31 Jul 2026</td>', '<td class="num">733 / 750</td>', '<td><span class="badge b-grey">Expired</span></td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Edit</button><button class="btn btn-ghost btn-sm">Clone</button></div></td>'],
    ['<td class="cell-main">WINBACK10</td>', '<td>All tiers</td>', '<td>10,000 credits</td>', '<td>No expiry</td>', '<td class="num">27 / ∞</td>', '<td><span class="badge b-amber">Paused</span></td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Edit</button><button class="btn btn-ghost btn-sm">Resume</button></div></td>'],
  ]
)}
        </div>
      </div>`,
}));

/* --- BO BotFlip Admin --- */
PAGES.push(page({
  area: 'office', slug: 'back-office-botflip-admin', title: 'BotFlip Admin',
  body: `      <div class="content-inner">
        <div class="stat-grid cols-4">
${stat('Live listings', '142', '9 added this week', 'market', 'accent')}
${stat('Sales this month', '318', '$11,420 gross', 'card', 'success', 'up')}
${stat('Fee income', '$571', 'at 5% of gross', 'credit', 'warning')}
${stat('Open disputes', '3', '1 over 7 days old', 'help', 'danger')}
        </div>

        <div class="card">
          <div class="panel-head"><div><div class="panel-title display">Listings awaiting review</div><div class="panel-sub">Flagged automatically or reported by members</div></div></div>
${table(
  ['Listing', 'Seller', 'Sale type', { label: 'Price', num: true }, 'Flag', { label: 'Actions', num: true }],
  [
    ['<td class="cell-main">Instant Cash Machine Bot</td>', '<td>Devon Reyes</td>', '<td><span class="badge b-amber">Multi-sell</span></td>', '<td class="num">$12</td>', '<td><span class="badge b-red">Misleading claims</span></td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Approve</button><button class="btn btn-danger btn-sm">Remove</button></div></td>'],
    ['<td class="cell-main">Legal Intake Assistant</td>', '<td>Priya Kaur</td>', '<td><span class="badge b-blue">Transfer</span></td>', '<td class="num">$99</td>', '<td><span class="badge b-amber">Duplicate of listing #1188</span></td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Approve</button><button class="btn btn-danger btn-sm">Remove</button></div></td>'],
    ['<td class="cell-main">Crypto Signals Advisor</td>', '<td>Sam Okafor</td>', '<td><span class="badge b-amber">Multi-sell</span></td>', '<td class="num">$45</td>', '<td><span class="badge b-red">Regulated advice</span></td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Approve</button><button class="btn btn-danger btn-sm">Remove</button></div></td>'],
  ]
)}
        </div>

        <div class="card">
          <div class="panel-head"><div><div class="panel-title display">Disputes and refunds</div><div class="panel-sub">A Transfer refund returns ownership to the original seller; a Multi-sell refund deletes the buyer's copy only</div></div></div>
${table(
  ['Reference', 'Listing', 'Buyer', 'Sale type', { label: 'Amount', num: true }, 'Status', { label: 'Actions', num: true }],
  [
    ['<td class="cell-main">FLP-2026-0412</td>', '<td>Real Estate Lead Bot</td>', '<td>Jonas Wren</td>', '<td><span class="badge b-blue">Transfer</span></td>', '<td class="num">$79</td>', '<td><span class="badge b-amber">Open, 9 days</span></td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Refund</button><button class="btn btn-ghost btn-sm">Reject</button></div></td>'],
    ['<td class="cell-main">FLP-2026-0408</td>', '<td>Podcast Show Notes Bot</td>', '<td>Marta Lindgren</td>', '<td><span class="badge b-amber">Multi-sell</span></td>', '<td class="num">$15</td>', '<td><span class="badge b-amber">Open, 2 days</span></td>', '<td class="num"><div class="row-actions"><button class="btn btn-ghost btn-sm">Refund</button><button class="btn btn-ghost btn-sm">Reject</button></div></td>'],
    ['<td class="cell-main">FLP-2026-0399</td>', '<td>Cold Email Qualifier</td>', '<td>Jamie Marlowe</td>', '<td><span class="badge b-amber">Multi-sell</span></td>', '<td class="num">$29</td>', '<td><span class="badge b-green">Refunded</span></td>', '<td class="num">-</td>'],
  ]
)}
        </div>
      </div>`,
}));

/* --- BO Audit Log --- */
PAGES.push(page({
  area: 'office', slug: 'back-office-audit-log', title: 'Audit Log',
  body: `      <div class="content-inner">
        <div class="filter-card">
          <div class="search-box">${ic('search', 16)}<input type="text" placeholder="Search by admin, action or target…"></div>
          <div class="filter-pill">Admin ${ic('chevD', 13)}</div>
          <div class="filter-pill">Action type ${ic('chevD', 13)}</div>
          <div class="filter-pill">Date range ${ic('chevD', 13)}</div>
          <div class="filter-pill push-right">Export CSV</div>
        </div>

        <div class="card">
${table(
  ['When', 'Admin', 'Action', 'Target', 'Detail', 'IP'],
  [
    ['<td>31 Aug 2026 09:42</td>', '<td class="cell-main">Priya Adeyemi</td>', '<td><span class="badge b-amber">Bot paused</span></td>', '<td>Property Valuation Assistant</td>', '<td>Reported for scraped content</td>', '<td>81.140.22.7</td>'],
    ['<td>31 Aug 2026 09:15</td>', '<td class="cell-main">Priya Adeyemi</td>', '<td><span class="badge b-blue">Login as user</span></td>', '<td>Sam Okafor</td>', '<td>Support ticket #4821</td>', '<td>81.140.22.7</td>'],
    ['<td>30 Aug 2026 17:08</td>', '<td class="cell-main">Ade Bello</td>', '<td><span class="badge b-green">Credits granted</span></td>', '<td>Marta Lindgren</td>', '<td>+10,000, goodwill after Gemini outage</td>', '<td>92.14.180.44</td>'],
    ['<td>30 Aug 2026 16:31</td>', '<td class="cell-main">Ade Bello</td>', '<td><span class="badge b-pink">Rate changed</span></td>', '<td>Pro Botter markup</td>', '<td>3.8x → 3.6x</td>', '<td>92.14.180.44</td>'],
    ['<td>30 Aug 2026 11:02</td>', '<td class="cell-main">Priya Adeyemi</td>', '<td><span class="badge b-red">Account suspended</span></td>', '<td>Sam Okafor</td>', '<td>Repeated chargebacks</td>', '<td>81.140.22.7</td>'],
    ['<td>29 Aug 2026 14:55</td>', '<td class="cell-main">Priya Adeyemi</td>', '<td><span class="badge b-blue">Feature override</span></td>', '<td>Devon Reyes</td>', '<td>Bot Market selling disabled</td>', '<td>81.140.22.7</td>'],
    ['<td>29 Aug 2026 10:20</td>', '<td class="cell-main">Ade Bello</td>', '<td><span class="badge b-amber">Model state changed</span></td>', '<td>Claude Sonnet 4.5</td>', '<td>Available → disabled for new bots</td>', '<td>92.14.180.44</td>'],
    ['<td>28 Aug 2026 15:44</td>', '<td class="cell-main">Priya Adeyemi</td>', '<td><span class="badge b-green">Promo code created</span></td>', '<td>JVZOO-BONUS</td>', '<td>20,000 credits, 250 uses</td>', '<td>81.140.22.7</td>'],
    ['<td>28 Aug 2026 09:07</td>', '<td class="cell-main">Ade Bello</td>', '<td><span class="badge b-grey">Refund issued</span></td>', '<td>FLP-2026-0399</td>', '<td>$29, Multi-sell copy removed</td>', '<td>92.14.180.44</td>'],
  ]
)}
        </div>
        <div class="results-row"><span class="results-count">Showing 9 of 12,480 entries</span><span class="results-count">Entries are retained for 7 years and cannot be edited</span></div>
      </div>`,
}));

/* --- BO Broadcast --- */
PAGES.push(page({
  area: 'office', slug: 'back-office-broadcast', title: 'Broadcast',
  body: `      <div class="content-inner narrow">
        <div class="card">
          <div class="panel-head"><div><div class="panel-title display">New announcement</div><div class="panel-sub">Sent in-app, by email or both</div></div></div>

          <div class="field-row single"><div class="field"><label>Subject</label><input type="text" value="Gemini 3.1 slowdowns resolved"></div></div>
          <div class="field-row single">
            <div class="field"><label>Message</label>
              <textarea rows="6">Gemini 3.1 Pro had elevated error rates between 09:00 and 14:00 BST yesterday. Google has confirmed the issue is resolved and our error rate is back to normal. Any bot that failed during the window has had its credits returned automatically - no action needed on your part.</textarea>
            </div>
          </div>

          <div class="field-row">
            <div class="field"><label>Audience</label><select><option>All members</option><option>Paid tiers only</option><option>Single tier</option><option>Members using a specific model</option></select></div>
            <div class="field"><label>Delivery</label><select><option>In-app and email</option><option>In-app only</option><option>Email only</option></select></div>
          </div>

          <div class="divider"></div>
          <div class="notice n-amber">${ic('megaphone', 15)} This will reach 1,284 members. Broadcasts cannot be recalled once sent.</div>
          <div class="divider"></div>

          <div style="display:flex; gap:10px;">
            <button class="btn btn-primary">Send broadcast</button>
            <button class="btn btn-ghost">Save draft</button>
            <button class="btn btn-ghost">Send test to me</button>
          </div>
        </div>

        <div class="card">
          <div class="panel-head"><div class="panel-title display">Recent broadcasts</div></div>
${table(
  ['Subject', 'Audience', 'Sent', { label: 'Opened', num: true }],
  [
    ['<td class="cell-main">Bot Market is now open to Pro Botter and above</td>', '<td>All members</td>', '<td>18 Aug 2026</td>', '<td class="num">64%</td>'],
    ['<td class="cell-main">Importer now handles GPT knowledge files</td>', '<td>All members</td>', '<td>2 Aug 2026</td>', '<td class="num">71%</td>'],
    ['<td class="cell-main">Scheduled maintenance, 3 Aug 02:00-04:00 BST</td>', '<td>All members</td>', '<td>29 Jul 2026</td>', '<td class="num">48%</td>'],
  ]
)}
        </div>
      </div>`,
}));

/* --- BO Profile --- */
PAGES.push(page({
  area: 'office', slug: 'back-office-profile', title: 'Profile',
  body: `      <div class="content-inner narrow">
        <a href="${f('back-office-dashboard')}" class="back-link">${ic('chevR', 14).replace('M9 6l6 6-6 6', 'M15 6l-6 6 6 6')} Back to Dashboard</a>

        <div class="card" style="padding:26px;">
          <div style="display:flex; align-items:center; gap:18px; margin-bottom:6px;">
            <div class="avatar-lg">PA</div>
            <div>
              <div class="panel-title display" style="font-size:17px;">Priya Adeyemi</div>
              <div class="panel-sub">Superadmin · last login 31 Aug 2026, 09:14</div>
            </div>
          </div>

          <div class="divider"></div>

          <div class="field-row">
            <div class="name-group">
              <div class="field"><label>First name</label><input type="text" value="Priya"></div>
              <div class="field"><label>Last name</label><input type="text" value="Adeyemi"></div>
            </div>
            <div class="field"><label>Email address</label><input type="text" value="priya@botterverse.com"></div>
          </div>
          <div class="field-row">
            <div class="field"><label>New password</label><input type="password" placeholder="••••••••"></div>
            <div class="field"><label>Confirm new password</label><input type="password" placeholder="••••••••"></div>
          </div>

          <div class="divider"></div>
          <button class="btn btn-primary">Save profile</button>
        </div>
      </div>`,
}));

/* ------------------------------------------------------------------ write */
const SLUGS = [
  'dashboard', 'my-bots', 'bot-builder', 'bot-analytics', 'importer',
  'bot-market', 'list-a-bot', 'billing-credits', 'team-clients', 'settings', 'profile',
  'back-office-dashboard', 'back-office-user-management', 'back-office-bot-management',
  'back-office-feature-matrix', 'back-office-model-rates', 'back-office-crm-integration',
  'back-office-promo-codes', 'back-office-botflip-admin', 'back-office-audit-log',
  'back-office-broadcast', 'back-office-profile',
];

PAGES.forEach((html, i) => writeFileSync(f(SLUGS[i]), html, 'utf8'));
console.log(`wrote ${PAGES.length} pages:`);
SLUGS.forEach((s) => console.log('  ' + f(s)));
