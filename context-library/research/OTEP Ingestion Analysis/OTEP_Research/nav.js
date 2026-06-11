(function () {
  /* ─── Google Fonts: Inter ─── */
  var fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap';
  document.head.appendChild(fontLink);

  /* ─── Sidebar width ─── */
  var SW = 210;

  /* ─── Global style overrides ─── */
  var style = document.createElement('style');
  style.textContent = [
    'body {',
    '  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif !important;',
    '  padding-left: ' + SW + 'px !important;',
    '  padding-top: 0 !important;',
    '}',

    /* Sidebar shell */
    '.otep-sb {',
    '  position: fixed; top: 0; left: 0; bottom: 0; width: ' + SW + 'px;',
    '  background: #fff; border-right: 1px solid #e0dfd8;',
    '  z-index: 1000; overflow-y: auto; overflow-x: hidden;',
    '  display: flex; flex-direction: column;',
    '  -webkit-font-smoothing: antialiased;',
    '}',

    /* Logo */
    '.otep-sb-logo {',
    '  padding: 1.1rem 1rem 1rem;',
    '  border-bottom: 1px solid #f1efe8;',
    '  flex-shrink: 0;',
    '}',
    '.otep-sb-logo-mark {',
    '  font-size: 13px; font-weight: 600; color: #1a1a18; letter-spacing: .02em;',
    '  display: block; margin-bottom: 1px;',
    '}',
    '.otep-sb-logo-sub {',
    '  font-size: 10px; color: #888780; font-weight: 400; letter-spacing: .01em;',
    '}',

    /* Nav body */
    '.otep-sb-nav { flex: 1; padding: .5rem 0 1rem; }',

    /* Group */
    '.otep-sb-group { margin-bottom: 2px; }',

    '.otep-sb-group-header {',
    '  display: flex; align-items: center; justify-content: space-between;',
    '  padding: .45rem 1rem .35rem;',
    '  cursor: pointer; user-select: none;',
    '  font-size: 10px; font-weight: 600;',
    '  text-transform: uppercase; letter-spacing: .07em; color: #b4b2a9;',
    '  transition: color .15s;',
    '}',
    '.otep-sb-group-header:hover { color: #5f5e5a; }',
    '.otep-sb-chevron {',
    '  font-size: 9px; transition: transform .2s; display: inline-block;',
    '}',
    '.otep-sb-group.collapsed .otep-sb-chevron { transform: rotate(-90deg); }',

    /* Group links */
    '.otep-sb-links { overflow: hidden; transition: max-height .2s ease; }',
    '.otep-sb-group.collapsed .otep-sb-links { max-height: 0 !important; }',

    /* Individual link */
    '.otep-sb-link {',
    '  display: flex; align-items: center; gap: 8px;',
    '  padding: .38rem 1rem .38rem 1.1rem;',
    '  font-size: 12px; font-weight: 400; color: #5f5e5a;',
    '  text-decoration: none; border-radius: 0;',
    '  transition: background .12s, color .12s;',
    '  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;',
    '  position: relative;',
    '}',
    '.otep-sb-link:hover { background: #f8f7f3; color: #1a1a18; }',
    '.otep-sb-link.active {',
    '  background: #f1efe8; color: #1a1a18; font-weight: 500;',
    '}',
    '.otep-sb-link.active::before {',
    '  content: ""; position: absolute; left: 0; top: 4px; bottom: 4px;',
    '  width: 2.5px; background: #1a1a18; border-radius: 0 2px 2px 0;',
    '}',
    '.otep-sb-link-dot {',
    '  width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;',
    '}',

    /* Divider between groups */
    '.otep-sb-divider {',
    '  height: 1px; background: #f1efe8; margin: .4rem .75rem;',
    '}',

    /* Footer badge */
    '.otep-sb-footer {',
    '  padding: .75rem 1rem 1rem;',
    '  border-top: 1px solid #f1efe8;',
    '  flex-shrink: 0;',
    '}',
    '.otep-sb-badge {',
    '  display: inline-block; font-size: 10px; font-weight: 500;',
    '  padding: 3px 9px; border-radius: 20px;',
    '  background: #FAEEDA; color: #854F0B;',
    '  border: 1px solid #F0C27F;',
    '  width: 100%; text-align: center;',
    '}',
    '.otep-sb-badge.resolved {',
    '  background: #EAF3DE; color: #3B6D11; border-color: #84C98A;',
    '}',

    /* Mobile: sidebar becomes a top bar */
    '@media (max-width: 720px) {',
    '  body { padding-left: 0 !important; padding-top: 44px !important; }',
    '  .otep-sb {',
    '    width: 100% !important; height: 44px; bottom: auto;',
    '    flex-direction: row; align-items: center; overflow: hidden;',
    '    padding: 0 1rem; border-right: none; border-bottom: 1px solid #e0dfd8;',
    '  }',
    '  .otep-sb-logo { padding: 0; border: none; margin-right: 1rem; }',
    '  .otep-sb-nav, .otep-sb-footer, .otep-sb-divider, .otep-sb-group-header { display: none !important; }',
    '}',
  ].join('\n');
  document.head.appendChild(style);

  /* ─── Group + page definitions ─── */
  var groups = [
    {
      id: 'overview',
      label: 'Overview',
      color: '#888780',
      pages: [
        { file: '00_index.html',             label: 'Home',            dot: '#1a1a18' },
        { file: '01_summary_dashboard.html', label: 'Summary',         dot: '#378ADD' },
      ]
    },
    {
      id: 'bo',
      label: 'BO Decisions',
      color: '#854F0B',
      pages: [
        { file: '06_bo_prep.html',           label: 'BO Briefing',     dot: '#EF9F27' },
        { file: '09_ingestion_rules.html',   label: 'Ingestion Rules', dot: '#E24B4A' },
        { file: '08_ingestion_schema.html',  label: 'Data Schema',     dot: '#85B7EB' },
      ]
    },
    {
      id: 'analysis',
      label: 'Analysis',
      color: '#2B4EAE',
      pages: [
        { file: '02_agency_breakdown.html',          label: 'By Agency',    dot: '#5DCAA5' },
        { file: '07_dq_by_opportunity_type.html',    label: 'By Type',      dot: '#7F77DD' },
        { file: '13_funnel_cohort.html',             label: 'Funnel',       dot: '#378ADD' },
        { file: '14_engagement_insights.html',       label: 'Engagement',   dot: '#AFA9EC' },
        { file: '15_agency_scorecard.html',          label: 'Scorecard',    dot: '#1D9E75' },
        { file: '16_data_source_reconciliation.html', label: 'Data Sources', dot: '#E24B4A' },
        { file: '17_ringfencing_analysis.html',        label: 'Ringfencing',  dot: '#EF9F27' },
      ]
    },
    {
      id: 'pilot',
      label: 'Pilot',
      color: '#1D9E75',
      pages: [
        { file: '18_pilot_readiness.html', label: 'Pilot Readiness', dot: '#1D9E75' },
      ]
    },
    {
      id: 'engineering',
      label: 'Engineering',
      color: '#3B6D11',
      pages: [
        { file: '10_pipeline_run.html',      label: 'Pipeline Run',    dot: '#1D9E75' },
        { file: '11_rule_violations.html',   label: 'Violations',      dot: '#E24B4A' },
        { file: '12_remediation_queue.html', label: 'Remediation',     dot: '#EF9F27' },
      ]
    },
  ];

  /* ─── Detect current page ─── */
  var current = window.location.pathname.split('/').pop() || '00_index.html';
  if (current === '' || current === '/') current = '00_index.html';

  /* ─── Restore collapsed state from sessionStorage ─── */
  function getCollapsed(id) {
    try { return sessionStorage.getItem('otep-nav-collapsed-' + id) === '1'; } catch(e) { return false; }
  }
  function setCollapsed(id, val) {
    try { sessionStorage.setItem('otep-nav-collapsed-' + id, val ? '1' : '0'); } catch(e) {}
  }

  /* ─── Build sidebar HTML ─── */
  var groupsHtml = '';
  groups.forEach(function(g) {
    var isCollapsed = getCollapsed(g.id);

    var linksHtml = g.pages.map(function(p) {
      var isActive = current === p.file ? ' active' : '';
      return '<a href="' + p.file + '" class="otep-sb-link' + isActive + '">' +
        '<span class="otep-sb-link-dot" style="background:' + p.dot + ';"></span>' +
        p.label +
      '</a>';
    }).join('');

    // Compute max-height for transition (approximate: pages × 34px)
    var maxH = g.pages.length * 34 + 'px';

    groupsHtml +=
      '<div class="otep-sb-group' + (isCollapsed ? ' collapsed' : '') + '" id="grp-' + g.id + '">' +
        '<div class="otep-sb-group-header" onclick="(function(el){' +
          'var grp=el.closest(\'.otep-sb-group\');' +
          'var isNowCollapsed=grp.classList.toggle(\'collapsed\');' +
          'try{sessionStorage.setItem(\'otep-nav-collapsed-\'+grp.id.replace(\'grp-\',\'\'),isNowCollapsed?\'1\':\'0\');}catch(e){}' +
        '})(this)" style="color:' + (isCollapsed ? '#b4b2a9' : g.color) + ';">' +
          g.label +
          '<span class="otep-sb-chevron">▾</span>' +
        '</div>' +
        '<div class="otep-sb-links" style="max-height:' + (isCollapsed ? '0' : maxH) + ';">' +
          linksHtml +
        '</div>' +
      '</div>' +
      '<div class="otep-sb-divider"></div>';
  });

  var sbEl = document.createElement('nav');
  sbEl.className = 'otep-sb';
  sbEl.setAttribute('role', 'navigation');
  sbEl.setAttribute('aria-label', 'OTEP Analysis');
  sbEl.innerHTML =
    '<div class="otep-sb-logo">' +
      '<span class="otep-sb-logo-mark">OTEP</span>' +
      '<span class="otep-sb-logo-sub">OTG Ingestion Analysis</span>' +
    '</div>' +
    '<div class="otep-sb-nav">' + groupsHtml + '</div>' +
    '<div class="otep-sb-footer">' +
      '<div class="otep-sb-badge">5 decisions open</div>' +
    '</div>';

  document.body.insertBefore(sbEl, document.body.firstChild);

  /* ─── Fix max-height on expand (for smooth animation) ─── */
  sbEl.querySelectorAll('.otep-sb-group-header').forEach(function(header) {
    header.addEventListener('click', function() {
      var grp = header.closest('.otep-sb-group');
      var links = grp.querySelector('.otep-sb-links');
      if (!grp.classList.contains('collapsed')) {
        links.style.maxHeight = links.scrollHeight + 'px';
        // Update header color
        var gId = grp.id.replace('grp-', '');
        var g = groups.find(function(g2){ return g2.id === gId; });
        header.style.color = g ? g.color : '#b4b2a9';
      } else {
        links.style.maxHeight = '0';
        header.style.color = '#b4b2a9';
      }
    });
  });

})();
