(function () {
  /* ─── Google Fonts: Inter ─── */
  var fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap';
  document.head.appendChild(fontLink);

  /* ─── Global style overrides ─── */
  var style = document.createElement('style');
  style.textContent = [
    'body { font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif !important; padding-top: 54px !important; }',

    /* Nav shell */
    '.otep-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 1000;',
    '  height: 54px; background: #18181a; border-bottom: 1px solid #2e2e32;',
    '  display: flex; align-items: center; }',

    '.otep-nav-inner { max-width: 980px; width: 100%; margin: 0 auto;',
    '  padding: 0 1.5rem; display: flex; align-items: center; gap: 0; }',

    /* Logo */
    '.otep-logo { display: flex; align-items: baseline; gap: 8px; text-decoration: none;',
    '  margin-right: 2rem; flex-shrink: 0; }',
    '.otep-logo-mark { font-size: 13px; font-weight: 600; color: #fff; letter-spacing: .02em; }',
    '.otep-logo-sep { color: #3e3e44; font-size: 13px; }',
    '.otep-logo-sub { font-size: 12px; font-weight: 400; color: #6b6b72; white-space: nowrap; }',

    /* Nav links */
    '.otep-nav-links { display: flex; align-items: center; gap: 2px; flex: 1; overflow: hidden; }',
    '.otep-nav-link { font-size: 12px; font-weight: 400; color: #9191a0; text-decoration: none;',
    '  padding: 5px 10px; border-radius: 6px; white-space: nowrap; transition: color .15s, background .15s; }',
    '.otep-nav-link:hover { color: #e8e8ef; background: #25252a; }',
    '.otep-nav-link.active { color: #fff; font-weight: 500; background: #25252a; }',

    /* Divider */
    '.otep-nav-divider { width: 1px; height: 18px; background: #2e2e32; margin: 0 8px; flex-shrink: 0; }',

    /* Status badge */
    '.otep-nav-badge { font-size: 10px; font-weight: 500; padding: 3px 9px;',
    '  border-radius: 20px; background: #3a2a12; color: #e89a3c;',
    '  border: 1px solid #5a3e1a; flex-shrink: 0; white-space: nowrap; margin-left: auto; }',

    /* Mobile: hide sub-label and compress */
    '@media (max-width: 680px) {',
    '  .otep-logo-sub { display: none; }',
    '  .otep-nav-link { padding: 5px 7px; font-size: 11px; }',
    '  .otep-nav-badge { display: none; }',
    '}',
  ].join(' ');
  document.head.appendChild(style);

  /* ─── Nav link definitions ─── */
  var pages = [
    { file: '00_index.html',                  label: 'Home' },
    { file: '01_summary_dashboard.html',       label: 'Summary' },
    { file: '02_agency_breakdown.html',        label: 'By Agency' },
    { file: '07_dq_by_opportunity_type.html',  label: 'By Type' },
    { file: '06_bo_prep.html',                 label: 'BO Briefing' },
    { file: '09_ingestion_rules.html',         label: 'Rules' },
    { file: '08_ingestion_schema.html',        label: 'Schema' },
  ];

  /* Detect current page */
  var current = window.location.pathname.split('/').pop() || '00_index.html';
  if (current === '' || current === '/') current = '00_index.html';

  /* ─── Build nav HTML ─── */
  var linksHtml = pages.map(function (p) {
    var isActive = (current === p.file) ? ' active' : '';
    return '<a href="' + p.file + '" class="otep-nav-link' + isActive + '">' + p.label + '</a>';
  }).join('');

  var navEl = document.createElement('nav');
  navEl.className = 'otep-nav';
  navEl.setAttribute('role', 'navigation');
  navEl.setAttribute('aria-label', 'OTEP Analysis');
  navEl.innerHTML =
    '<div class="otep-nav-inner">' +
      '<a href="00_index.html" class="otep-logo">' +
        '<span class="otep-logo-mark">OTEP</span>' +
        '<span class="otep-logo-sep">·</span>' +
        '<span class="otep-logo-sub">OTG Ingestion Analysis</span>' +
      '</a>' +
      '<div class="otep-nav-links">' + linksHtml + '</div>' +
      '<div class="otep-nav-badge">4 decisions open</div>' +
    '</div>';

  document.body.insertBefore(navEl, document.body.firstChild);
})();
