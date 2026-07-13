(() => {
  const DEFAULT_LANG = 'en';
  const DEFAULT_THEME = 'dark'; // dark is primary

  // Elements mapping for both pages
  const langSelect = document.getElementById('lang-select') || document.getElementById('lang-select-2');
  const themeToggle = document.getElementById('theme-toggle') || document.getElementById('theme-toggle-2');
  const themeToggleAlt = document.getElementById('theme-toggle-2') || document.getElementById('theme-toggle');

  // Language strings
  const STRINGS = {
    en: {
      siteTitle: 'Modeling E-Commerce Dashboard',
      siteSubtitle: 'Power BI · DAX Formulas · Financial Sample',
      heroTitle: 'Modeling E-Commerce Dashboard',
      heroDesc: 'Power BI · DAX Formulas · Create star schema from Financial Sample',
      openStar: 'Open Star Schema',
      learnMore: 'Learn more',
      footer: 'Local demo — no backend · Accessible · Responsive',
      card1Title: 'Overview',
      card1Desc: 'Quick snapshot of sample data',
      card2Title: 'Sales Trend',
      card2Desc: 'Units sold distribution',
      card3Title: 'Products',
      card3Desc: 'Sample product list',
      card4Title: 'KPIs',
      card4Desc: 'Mini metrics',
      starTitle: 'Star Schema from Financial Sample',
      factTitle: 'Fact Table: fSales',
      factDesc: 'Central fact table with measures and keys',
      dim1Title: 'dProducts',
      dim2Title: 'dDetails',
      dim3Title: 'dDiscounts',
      dim4Title: 'dProductDetails',
      backIndex: 'Back to Financial Sample',
      exportSample: 'Export sample (demo)'
    },
    pt: {
      siteTitle: 'Modelando Painel de E-Commerce',
      siteSubtitle: 'Power BI · Fórmulas DAX · Amostra Financeira',
      heroTitle: 'Modelando Painel de E-Commerce',
      heroDesc: 'Power BI · Fórmulas DAX · Criar esquema estrela a partir da Amostra Financeira',
      openStar: 'Abrir Esquema Estrela',
      learnMore: 'Saiba mais',
      footer: 'Demonstração local — sem backend · Acessível · Responsivo',
      card1Title: 'Visão Geral',
      card1Desc: 'Visão rápida dos dados de amostra',
      card2Title: 'Tendência de Vendas',
      card2Desc: 'Distribuição de unidades vendidas',
      card3Title: 'Produtos',
      card3Desc: 'Lista de produtos de exemplo',
      card4Title: 'KPIs',
      card4Desc: 'Mini métricas',
      starTitle: 'Esquema Estrela da Amostra Financeira',
      factTitle: 'Tabela Fato: fSales',
      factDesc: 'Tabela fato central com medidas e chaves',
      dim1Title: 'dProducts',
      dim2Title: 'dDetails',
      dim3Title: 'dDiscounts',
      dim4Title: 'dProductDetails',
      backIndex: 'Voltar à Amostra Financeira',
      exportSample: 'Exportar amostra (demo)'
    },
    es: {
      siteTitle: 'Modelando Panel de E-Commerce',
      siteSubtitle: 'Power BI · Fórmulas DAX · Muestra Financiera',
      heroTitle: 'Modelando Panel de E-Commerce',
      heroDesc: 'Power BI · Fórmulas DAX · Crear esquema estrella desde la Muestra Financiera',
      openStar: 'Abrir Esquema Estrella',
      learnMore: 'Más información',
      footer: 'Demostración local — sin backend · Accesible · Responsive',
      card1Title: 'Resumen',
      card1Desc: 'Instantánea rápida de los datos de muestra',
      card2Title: 'Tendencia de Ventas',
      card2Desc: 'Distribución de unidades vendidas',
      card3Title: 'Productos',
      card3Desc: 'Lista de productos de ejemplo',
      card4Title: 'KPIs',
      card4Desc: 'Mini métricas',
      starTitle: 'Esquema Estrella de la Muestra Financiera',
      factTitle: 'Tabla Hechos: fSales',
      factDesc: 'Tabla de hechos central con medidas y claves',
      dim1Title: 'dProducts',
      dim2Title: 'dDetails',
      dim3Title: 'dDiscounts',
      dim4Title: 'dProductDetails',
      backIndex: 'Volver a Muestra Financiera',
      exportSample: 'Exportar muestra (demo)'
    }
  };

  // Utilities
  function setTheme(theme) {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      document.querySelectorAll('.icon-btn').forEach(b => b.setAttribute('aria-pressed', 'true'));
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      document.querySelectorAll('.icon-btn').forEach(b => b.setAttribute('aria-pressed', 'false'));
    }
  }

  function getSavedTheme() {
    return localStorage.getItem('theme') || DEFAULT_THEME;
  }

  function setLanguage(lang) {
    const strings = STRINGS[lang] || STRINGS[DEFAULT_LANG];
    // Header
    const title = document.getElementById('site-title') || document.getElementById('site-title-2');
    const subtitle = document.getElementById('site-subtitle') || document.getElementById('site-subtitle-2');
    if (title) title.textContent = strings.siteTitle;
    if (subtitle) subtitle.textContent = strings.siteSubtitle;

    // Hero
    const heroTitle = document.getElementById('hero-title') || document.getElementById('hero-title-2');
    const heroDesc = document.getElementById('hero-desc') || document.getElementById('hero-desc-2');
    if (heroTitle) heroTitle.textContent = strings.heroTitle;
    if (heroDesc) heroDesc.textContent = strings.heroDesc;

    // Buttons
    const openStar = document.getElementById('open-star');
    const learnMore = document.getElementById('learn-more');
    const backIndex = document.getElementById('back-index');
    const exportSample = document.getElementById('export-sample');
    if (openStar) openStar.textContent = strings.openStar;
    if (learnMore) learnMore.textContent = strings.learnMore;
    if (backIndex) backIndex.textContent = strings.backIndex;
    if (exportSample) exportSample.textContent = strings.exportSample;

    // Cards
    const card1 = document.getElementById('card1-title');
    const card1desc = document.getElementById('card1-desc');
    const card2 = document.getElementById('card2-title');
    const card2desc = document.getElementById('card2-desc');
    const card3 = document.getElementById('card3-title');
    const card3desc = document.getElementById('card3-desc');
    const card4 = document.getElementById('card4-title');
    const card4desc = document.getElementById('card4-desc');

    if (card1) card1.textContent = strings.card1Title;
    if (card1desc) card1desc.textContent = strings.card1Desc;
    if (card2) card2.textContent = strings.card2Title;
    if (card2desc) card2desc.textContent = strings.card2Desc;
    if (card3) card3.textContent = strings.card3Title;
    if (card3desc) card3desc.textContent = strings.card3Desc;
    if (card4) card4.textContent = strings.card4Title;
    if (card4desc) card4desc.textContent = strings.card4Desc;

    // Footer
    const footer = document.getElementById('footer-text') || document.getElementById('footer-text-2');
    if (footer) footer.textContent = strings.footer;

    // Star schema texts
    const starTitle = document.getElementById('hero-title-2');
    if (starTitle) starTitle.textContent = strings.starTitle;
    const factTitle = document.getElementById('fact-title');
    const factDesc = document.getElementById('fact-desc');
    if (factTitle) factTitle.textContent = strings.factTitle;
    if (factDesc) factDesc.textContent = strings.factDesc;

    const dim1 = document.getElementById('dim1-title');
    const dim2 = document.getElementById('dim2-title');
    const dim3 = document.getElementById('dim3-title');
    const dim4 = document.getElementById('dim4-title');
    if (dim1) dim1.textContent = strings.dim1Title;
    if (dim2) dim2.textContent = strings.dim2Title;
    if (dim3) dim3.textContent = strings.dim3Title;
    if (dim4) dim4.textContent = strings.dim4Title;

    // Persist
    localStorage.setItem('lang', lang);
    // Update selects
    const selects = document.querySelectorAll('select[id^="lang-select"]');
    selects.forEach(s => { s.value = lang; });
  }

  function getSavedLang() {
    return localStorage.getItem('lang') || DEFAULT_LANG;
  }

  // Populate sample content (static demo)
  function populateSample() {
    const stat = document.getElementById('stat-products');
    if (stat) stat.textContent = 'Products: 6 · SK_IDs: 700';

    const list = document.getElementById('list-sample');
    if (list) {
      list.innerHTML = '';
      ['Carretera','Montana','Urbana','BMX','Gravel','E-Bike'].forEach(p => {
        const li = document.createElement('li');
        li.textContent = p;
        list.appendChild(li);
      });
    }

    // Star schema fields
    const factFields = document.getElementById('fact-fields');
    if (factFields) {
      factFields.innerHTML = '';
      ['SK_ID (PK)', 'ID_Product (FK)', 'Units Sold', 'Revenue', 'DateKey', 'Measures (Total Sales)'].forEach(f => {
        const li = document.createElement('li'); li.textContent = f; factFields.appendChild(li);
      });
    }
    const dim1 = document.getElementById('dim1-fields');
    if (dim1) {
      dim1.innerHTML = '';
      ['Index (PK)', 'ProductName', 'Category', 'Brand'].forEach(f => {
        const li = document.createElement('li'); li.textContent = f; dim1.appendChild(li);
      });
    }
    const dim2 = document.getElementById('dim2-fields');
    if (dim2) {
      dim2.innerHTML = '';
      ['Id_Product (PK)', 'Color', 'Size', 'Weight'].forEach(f => {
        const li = document.createElement('li'); li.textContent = f; dim2.appendChild(li);
      });
    }
    const dim3 = document.getElementById('dim3-fields');
    if (dim3) {
      dim3.innerHTML = '';
      ['Id_Product (PK)', 'DiscountType', 'Pct'].forEach(f => {
        const li = document.createElement('li'); li.textContent = f; dim3.appendChild(li);
      });
    }
    const dim4 = document.getElementById('dim4-fields');
    if (dim4) {
      dim4.innerHTML = '';
      ['Index (PK)', 'DetailKey', 'Description'].forEach(f => {
        const li = document.createElement('li'); li.textContent = f; dim4.appendChild(li);
      });
    }
  }

  // Navigation highlighting
  function initNavHighlight() {
    const path = location.pathname.split('/').pop();
    const page = path === 'star_schema.html' ? 'star' : 'index';
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.page === page);
    });
    document.querySelectorAll('.menu-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        // Visual focus for selection
        e.currentTarget.focus();
      });
    });
  }

  // Event listeners
  function attachEvents() {
    // Theme toggles (both pages)
    document.querySelectorAll('.icon-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const current = document.documentElement.classList.contains('light') ? 'light' : 'dark';
        setTheme(current === 'light' ? 'dark' : 'light');
      });
    });

    // Language selects
    document.querySelectorAll('select[id^="lang-select"]').forEach(sel => {
      sel.addEventListener('change', (e) => {
        setLanguage(e.target.value);
      });
    });

    // Buttons with demo actions
    const exportBtn = document.getElementById('export-sample');
    if (exportBtn) exportBtn.addEventListener('click', () => {
      alert('Demo export: no backend. Use Power BI to export real data.');
    });

    const learnMore = document.getElementById('learn-more');
    if (learnMore) learnMore.addEventListener('click', () => {
      alert('This demo shows layout, theme and language toggles. Implement DAX in Power BI.');
    });

    // Keyboard accessibility: allow Enter on nav links
    document.querySelectorAll('.nav-btn, .menu-btn, .primary-btn, .secondary-btn').forEach(el => {
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') e.click();
      });
    });
  }

  // Init
  function init() {
    // Apply saved theme & language
    setTheme(getSavedTheme());
    setLanguage(getSavedLang());
    populateSample();
    initNavHighlight();
    attachEvents();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
