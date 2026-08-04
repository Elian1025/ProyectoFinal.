// Configuración inicial y utilidades
const STORAGE_KEY = 'portfolio-theme-config';

const defaultConfig = {
  background: '#060816',
  buttonColor: '#00e5ff',
  textColor: '#f5f7ff',
  theme: 'dark',
  backgroundPreset: 'minimalista',
  animatedRGB: false
};

// ----- Small helper utilities -----
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const create = (tag, props = {}) => Object.assign(document.createElement(tag), props);
const on = (el, ev, fn, opts) => (el && el.addEventListener(ev, fn, opts));
const debounce = (fn, wait = 100) => {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn.apply(this, args), wait); };
};

// Load/save config with safe parsing
let config = loadConfig();
function loadConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultConfig, ...JSON.parse(saved) } : { ...defaultConfig };
  } catch (error) {
    console.warn('No se pudo cargar la configuración guardada:', error);
    return { ...defaultConfig };
  }
}

function saveConfig() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(config)); } catch (e) { console.warn(e); }
}

function applyTheme() {
  document.documentElement.style.setProperty('--bg', config.background);
  document.documentElement.style.setProperty('--text', config.textColor);
  document.documentElement.style.setProperty('--accent', config.buttonColor);
  document.documentElement.style.setProperty('--accent-2', config.buttonColor === '#00e5ff' ? '#8b5cf6' : '#22d3ee');
  document.body.classList.toggle('light', config.theme === 'light');
  // animated RGB
  document.body.classList.toggle('rgb-animated', !!config.animatedRGB);
  // apply background preset class
  applyBackgroundPreset(config.backgroundPreset);
}

function applyBackgroundPreset(preset) {
  const allowed = ['espacio','galaxia','circuitos','tecnologia','cyberpunk','aurora','minimalista'];
  // normalize
  const key = (preset || 'minimalista').toString().toLowerCase();
  // remove existing bg- classes
  allowed.forEach((p) => document.body.classList.remove('bg-' + p));
  if (allowed.includes(key)) document.body.classList.add('bg-' + key);
}

function initThemeControls() {
  const panel = $('#theme-panel');
  const toggle = $('#theme-toggle');
  const bgInput = $('#background-color');
  const buttonInput = $('#button-color');
  const textInput = $('#text-color');
  const themeSelect = $('#theme-select');
  const saveBtn = $('#save-theme');
  if (!panel || !toggle) return;

  // Toggle panel open
  on(toggle, 'click', () => panel.classList.toggle('open'));

  // Initialize inputs with current config
  if (bgInput) bgInput.value = config.background;
  if (buttonInput) buttonInput.value = config.buttonColor;
  if (textInput) textInput.value = config.textColor;
  if (themeSelect) themeSelect.value = config.theme;

  // Debounced live updates from inputs
  const updateFromInputs = debounce(() => {
    if (bgInput) config.background = bgInput.value;
    if (buttonInput) config.buttonColor = buttonInput.value;
    if (textInput) config.textColor = textInput.value;
    if (themeSelect) config.theme = themeSelect.value;
    applyTheme();
  }, 60);

  [bgInput, buttonInput, textInput, themeSelect].forEach((el) => { if (el) on(el, 'input', updateFromInputs); });

  if (saveBtn) on(saveBtn, 'click', () => { saveConfig(); panel.classList.remove('open'); alert('Configuración guardada correctamente.'); });
}

function initPresetPanel() {
  if (document.getElementById('preset-panel')) return;
  const panel = document.createElement('div');
  panel.id = 'preset-panel';
  panel.className = 'preset-panel';

  panel.innerHTML = `
    <button id="preset-toggle" class="preset-toggle" aria-label="Abrir configuración">⚙</button>
    <div class="preset-body">
      <h3>Temas</h3>
      <div class="preset-themes">
        <button data-theme="azul" class="preset-theme">Azul Gamer</button>
        <button data-theme="morado" class="preset-theme">Morado Neon</button>
        <button data-theme="verde" class="preset-theme">Verde Matrix</button>
        <button data-theme="rojo" class="preset-theme">Rojo Cyber</button>
        <button data-theme="negro" class="preset-theme">Negro Elegante</button>
        <button data-theme="rgb" class="preset-theme">RGB Animado</button>
      </div>
      <h3>Fondos</h3>
      <div class="preset-bgs">
        <button data-bg="espacio" class="preset-bg">Espacio</button>
        <button data-bg="galaxia" class="preset-bg">Galaxia</button>
        <button data-bg="circuitos" class="preset-bg">Circuitos</button>
        <button data-bg="tecnologia" class="preset-bg">Tecnología</button>
        <button data-bg="cyberpunk" class="preset-bg">Cyberpunk</button>
        <button data-bg="aurora" class="preset-bg">Aurora</button>
        <button data-bg="minimalista" class="preset-bg">Minimalista</button>
      </div>
      <div style="display:flex; gap:.5rem; margin-top:.6rem;">
        <button id="preset-save" class="btn">Guardar</button>
        <button id="preset-reset" class="btn secondary">Restablecer</button>
      </div>
    </div>
  `;

  document.body.appendChild(panel);
  const toggle = panel.querySelector('#preset-toggle');
  const body = panel.querySelector('.preset-body');
  if (toggle && body) on(toggle, 'click', () => { body.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(body.classList.contains('open'))); });

  // Delegate clicks inside panel to keep fewer listeners
  on(panel, 'click', (ev) => {
    const t = ev.target.closest('button[data-theme]');
    if (t) { applyPresetTheme(t.getAttribute('data-theme')); return; }
    const b = ev.target.closest('button[data-bg]');
    if (b) { config.backgroundPreset = b.getAttribute('data-bg'); applyBackgroundPreset(config.backgroundPreset); return; }
    if (ev.target.id === 'preset-save') { saveConfig(); alert('Preferencias guardadas.'); return; }
    if (ev.target.id === 'preset-reset') { config = { ...defaultConfig }; applyTheme(); saveConfig(); alert('Configuración restablecida.'); return; }
  });
}

function applyPresetTheme(name) {
  switch (name) {
    case 'azul':
      config.background = '#071029';
      config.buttonColor = '#00b0ff';
      config.textColor = '#e6f7ff';
      config.theme = 'dark';
      config.animatedRGB = false;
      break;
    case 'morado':
      config.background = '#120022';
      config.buttonColor = '#8b5cf6';
      config.textColor = '#f5e8ff';
      config.theme = 'dark';
      config.animatedRGB = false;
      break;
    case 'verde':
      config.background = '#021307';
      config.buttonColor = '#00ff66';
      config.textColor = '#eafff0';
      config.theme = 'dark';
      config.animatedRGB = false;
      break;
    case 'rojo':
      config.background = '#190909';
      config.buttonColor = '#ff3b3b';
      config.textColor = '#ffecec';
      config.theme = 'dark';
      config.animatedRGB = false;
      break;
    case 'negro':
      config.background = '#000000';
      config.buttonColor = '#6666ff';
      config.textColor = '#e6e6e6';
      config.theme = 'dark';
      config.animatedRGB = false;
      break;
    case 'rgb':
      config.background = '#07060b';
      config.buttonColor = '#00e5ff';
      config.textColor = '#fff3f3';
      config.theme = 'dark';
      config.animatedRGB = true;
      break;
    default:
      break;
  }
  applyTheme();
}

function initWelcome() {
  const welcomeScreen = document.querySelector('.welcome-screen');
  const startBtn = document.querySelector('.start-btn');

  if (!welcomeScreen || !startBtn) return;

  startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.classList.add('welcome-done');
    welcomeScreen.classList.add('is-exiting');
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
    }, 750);
  });
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  $$('.reveal').forEach((item) => observer.observe(item));
}

function initUnits() {
  $$('.unit-toggle').forEach((button) => {
    on(button, 'click', () => {
      const target = button.getAttribute('data-target');
      const detail = document.getElementById(target);
      if (!detail) return;
      detail.classList.toggle('active');
      button.textContent = detail.classList.contains('active') ? 'Ocultar detalle' : 'Ver más';
    });
  });
}

function initInfoToggle() {
  const button = document.getElementById('info-toggle');
  const grid = document.getElementById('info-grid');
  if (!button || !grid) return;

  button.addEventListener('click', () => {
    grid.classList.toggle('active');
    button.textContent = grid.classList.contains('active') ? 'OCULTAR INFORMACIÓN' : 'MÁS INFORMACIÓN';
  });
}

function initLearningToggle() {
  const button = document.getElementById('unit-toggle-main');
  const grid = document.getElementById('unit-grid');
  if (!button || !grid) return;

  button.addEventListener('click', () => {
    grid.classList.toggle('active');
    button.textContent = grid.classList.contains('active') ? 'OCULTAR APRENDIZAJE' : 'APRENDIZAJE';
  });
}

function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const particles = [];
  // Particle count scales with viewport for better performance on small devices
  const particleCount = Math.min(110, Math.max(20, Math.round(window.innerWidth / 12)));

  const resize = () => {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  };

  const createParticles = () => {
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        color: Math.random() > 0.5 ? 'rgba(0,229,255,0.75)' : 'rgba(139,92,246,0.65)'
      });
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // Draw connective lines
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = 'rgba(0,229,255,' + (0.12 * (1 - dist / 120)).toFixed(2) + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
      if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

      // Glow effect
      ctx.beginPath();
      ctx.shadowBlur = 14;
      ctx.shadowColor = p.color;
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });
    requestAnimationFrame(draw);
  };

  window.addEventListener('resize', debounce(() => { resize(); createParticles(); }, 120));

  resize();
  createParticles();
  draw();
}

function initCustomCursor() {
  // Create cursor element (only one)
  if (document.getElementById('custom-cursor')) return;
  const cursor = create('div', { id: 'custom-cursor', role: 'presentation', 'aria-hidden': 'true' });
  document.body.appendChild(cursor);

  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2, posX = mouseX, posY = mouseY;
  const update = () => { posX += (mouseX - posX) * 0.18; posY += (mouseY - posY) * 0.18; cursor.style.left = posX + 'px'; cursor.style.top = posY + 'px'; requestAnimationFrame(update); };

  on(document, 'pointermove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });

  // Event delegation for hover states (avoids attaching many listeners)
  on(document, 'pointerover', (e) => {
    const interactive = e.target.closest('a, button, .btn, .start-btn, .unit-card, [role="button"]');
    if (interactive) cursor.classList.add('hover');
  });
  on(document, 'pointerout', (e) => {
    const interactive = e.target.closest('a, button, .btn, .start-btn, .unit-card, [role="button"]');
    if (interactive) cursor.classList.remove('hover');
  });

  update();
}

function initSmoothScroll() {
  // Delegate smooth scrolling for in-page anchors
  on(document, 'click', (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;
    event.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function initPageTransitions() {
  // Entrada suave
  document.body.classList.add('page-enter');
  setTimeout(() => document.body.classList.remove('page-enter'), 650);

  // Interceptar enlaces de navegación interna para animar salida (delegado)
  on(document, 'click', (ev) => {
    const link = ev.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;
    if (href.startsWith('#')) return;
    if (href.startsWith('mailto:') || link.target === '_blank') return;
    try { const url = new URL(href, location.href); if (url.origin !== location.origin) return; } catch (e) { return; }
    ev.preventDefault();
    const dest = link.href;
    document.body.classList.add('page-exit');
    setTimeout(() => (window.location.href = dest), 360);
  });
}

function init() {
  applyTheme();
  initThemeControls();
  initWelcome();
  initReveal();
  initUnits();
  initInfoToggle();
  initLearningToggle();
  initParticles();
  initSmoothScroll();
  initPageTransitions();
  initCustomCursor();
  initCyberOverlay();
  initPresetPanel();
}

function initCyberOverlay() {
  if (document.querySelector('.cyber-overlay')) return;
  const overlay = document.createElement('div');
  overlay.className = 'cyber-overlay';
  document.body.appendChild(overlay);

  // small glow bar at bottom of page shell
  const shell = document.querySelector('.page-shell');
  if (shell && !shell.querySelector('.glow-bar')) {
    const bar = document.createElement('div');
    bar.className = 'glow-bar';
    shell.appendChild(bar);
  }
}

document.addEventListener('DOMContentLoaded', init);

/* -------------------------
   Renderizado dinámico desde data/
   ------------------------- */
function renderIndex() {
  try {
    if (typeof perfil !== 'undefined') {
      const title = document.getElementById('site-title');
      if (title) title.textContent = perfil.universidad || perfil.nombre || title.textContent;
    }
  } catch (e) { /* ignore if data not loaded */ }
}

function renderInformacion() {
  const grid = document.getElementById('profile-grid');
  if (!grid) return;
  grid.innerHTML = '';
  if (typeof perfil !== 'undefined') {
    const fields = [
      {k:'descripcion', t:'Presentación'},
      {k:'objetivos', t:'Objetivos'},
      {k:'perfil', t:'Perfil Profesional'},
      {k:'educacion', t:'Educación'},
      {k:'universidad', t:'Universidad'},
      {k:'carrera', t:'Carrera'},
      {k:'hobbies', t:'Hobbies'},
      {k:'residencia', t:'Residencia'},
      {k:'contacto', t:'Contacto'}
    ];

    // Map perfil fields to cards (use available perfil properties)
    const cardData = [
      {title:'Presentación', body: perfil.descripcion || ''},
      {title:'Objetivos', body: perfil.objetivos || ''},
      {title:'Perfil Profesional', body: perfil.perfil || ''},
      {title:'Educación', body: perfil.educacion || ''},
      {title:'Universidad', body: perfil.universidad || ''},
      {title:'Carrera', body: perfil.carrera || ''},
      {title:'Hobbies', body: perfil.hobbies || ''},
      {title:'Residencia', body: perfil.residencia || ''},
      {title:'Contacto', body: `Correo: ${perfil.correo || ''} <br> Tel: ${perfil.telefono || ''}` }
    ];

    cardData.forEach((c) => {
      const art = document.createElement('article');
      art.className = 'info-card fade-in';
      art.innerHTML = `<h3>${c.title}</h3><p style="color:var(--muted);">${c.body}</p>`;
      grid.appendChild(art);
    });

    // Gallery
    const gal = document.getElementById('personal-gallery');
    if (gal && Array.isArray(galeriaPersonal)) {
      gal.innerHTML = `<div class="section-heading"><h3>Galería</h3></div>`;
      const wrap = document.createElement('div');
      wrap.className = 'gallery';
      gal.appendChild(wrap);
      galeriaPersonal.forEach((name) => {
        const fig = document.createElement('figure');
        fig.className = 'hero-card';
          const img = document.createElement('img');
          img.src = `assets/img/galeria/${name}`;
          img.alt = name || 'Galería';
          img.loading = 'lazy';
          img.decoding = 'async';
          img.style = 'width:100%; height:120px; object-fit:cover; border-radius:12px; cursor:pointer;';
          img.addEventListener('click', () => openLightbox(img.src));
        const caption = document.createElement('figcaption');
        caption.style.color = 'var(--muted)';
        caption.textContent = name;
        fig.appendChild(img);
        fig.appendChild(caption);
        wrap.appendChild(fig);
      });
    }
  }
}

function renderAprendizaje() {
  const grid = document.getElementById('units-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const units = [];
  if (typeof unidad1 !== 'undefined') units.push(unidad1);
  if (typeof unidad2 !== 'undefined') units.push(unidad2);
  if (typeof unidad3 !== 'undefined') units.push(unidad3);

  units.forEach((u, idx) => {
    const art = document.createElement('article');
    art.className = 'unit-card large glow-card slide-up';
    const cardMedia = create('div', { className: 'card-media' });
    const thumb = create('img');
    thumb.src = `assets/img/unidad${idx+1}/${u.galeria && u.galeria[0] ? u.galeria[0] : 'placeholder.jpg'}`;
    thumb.alt = u.titulo || `Unidad ${idx+1}`;
    thumb.loading = 'lazy';
    cardMedia.appendChild(thumb);
    const cardBody = create('div', { className: 'card-body' });
    cardBody.innerHTML = `<h3>${u.titulo}</h3><p class="muted">${u.descripcion || ''}</p>`;
    const actions = create('div', { className: 'actions' });
    const link = create('a', { className: 'btn', href: `unidad${idx+1}.html` });
    link.textContent = 'Entrar';
    actions.appendChild(link);
    cardBody.appendChild(actions);
    art.appendChild(cardMedia);
    art.appendChild(cardBody);
    grid.appendChild(art);
  });
}

function renderUnitPage(unitData) {
  if (!unitData) return;
  // Header / section title
  const heading = document.querySelector('.section-heading');
  if (heading) {
    const h = heading.querySelector('h2');
    if (h) h.textContent = unitData.titulo || h.textContent;
    // breadcrumb
    let bc = heading.querySelector('.breadcrumb');
    if (!bc) {
      bc = document.createElement('nav');
      bc.className = 'breadcrumb';
      bc.setAttribute('aria-label', 'Breadcrumb');
      heading.appendChild(bc);
    }
    bc.innerHTML = `<a href="index.html#inicio">Inicio</a> <span aria-hidden="true">›</span> <a href="aprendizaje.html">Aprendizaje</a> <span aria-hidden="true">›</span> <span>${unitData.titulo}</span>`;
  }

  const topicsArea = document.getElementById('topics-area');
  if (!topicsArea) return;
  topicsArea.innerHTML = '';

  // Layout: sidebar + main
  const layout = create('div', { className: 'unit-layout' });
  layout.style.display = 'grid';
  layout.style.gridTemplateColumns = '280px 1fr';
  layout.style.gap = '1rem';

  // Sidebar
  const sidebar = create('aside', { className: 'unit-sidebar hero-card reveal', id: 'unit-sidebar' });
  sidebar.style.padding = '0.8rem';
  const list = create('ul', { className: 'topic-list' });
  list.style.listStyle = 'none';
  list.style.display = 'grid';
  list.style.gap = '0.4rem';

  // Build topic items
  (unitData.temas || []).forEach((t, idx) => {
    const li = create('li');
    const btn = create('button', { className: 'topic-item', type: 'button' });
    btn.dataset.id = t.id;
    btn.textContent = t.titulo;
    btn.style.width = '100%';
    btn.style.textAlign = 'left';
    btn.style.padding = '0.6rem 0.8rem';
    btn.style.borderRadius = '10px';
    btn.style.border = '1px solid transparent';
    btn.style.background = 'transparent';
    on(btn, 'click', () => selectTopic(t.id));
    li.appendChild(btn);
    list.appendChild(li);
  });

  sidebar.appendChild(list);

  // Main content
  const main = create('div', { className: 'unit-main hero-card reveal' });
  main.style.padding = '1rem';

  // Title area
  const titleEl = create('h3', {});
  titleEl.className = 'fade-in';
  main.appendChild(titleEl);

  // Description
  const descEl = create('p');
  descEl.className = 'muted';
  main.appendChild(descEl);

  // Media (image)
  const mediaWrap = create('div', { className: 'media-wrap' });
  mediaWrap.style.margin = '0.8rem 0';
  const mediaImg = create('img');
  mediaImg.style = 'width:100%; max-height:320px; object-fit:cover; border-radius:12px;';
  mediaImg.loading = 'lazy';
  mediaWrap.appendChild(mediaImg);
  main.appendChild(mediaWrap);

  // Tabs
  const tabsBar = create('div', { className: 'tabs-bar' });
  tabsBar.style.display = 'flex';
  tabsBar.style.gap = '0.4rem';
  tabsBar.style.flexWrap = 'wrap';
  tabsBar.style.marginTop = '0.6rem';
  const tabContent = create('div', { className: 'tab-content' });
  tabContent.style.marginTop = '0.8rem';
  main.appendChild(tabsBar);
  main.appendChild(tabContent);

  // Accordions and cards area
  const accordionArea = create('div', { className: 'accordion-area' });
  accordionArea.style.marginTop = '0.8rem';
  main.appendChild(accordionArea);

  const cardsArea = create('div', { className: 'cards-area' });
  cardsArea.style.display = 'grid';
  cardsArea.style.gridTemplateColumns = 'repeat(auto-fit, minmax(180px,1fr))';
  cardsArea.style.gap = '0.6rem';
  cardsArea.style.marginTop = '0.8rem';
  main.appendChild(cardsArea);

  // Gallery preview
  const galleryWrap = create('div', { className: 'gallery-wrap' });
  galleryWrap.style.marginTop = '0.8rem';
  main.appendChild(galleryWrap);

  layout.appendChild(sidebar);
  layout.appendChild(main);
  topicsArea.appendChild(layout);

  // Utilities
  const topicIndex = (unitData.temas || []).reduce((acc, t) => { acc[String(t.id)] = t; return acc; }, {});
  let currentTopicId = null;

  // Render a topic into the main area
  function renderTopic(t) {
    titleEl.textContent = t.titulo || '';
    descEl.textContent = t.descripcion || '';
    mediaImg.src = t.img ? `assets/img/unidad1/${t.img}` : '';
    mediaImg.alt = t.titulo || 'Imagen del tema';

    // Tabs
    tabsBar.innerHTML = '';
    tabContent.innerHTML = '';
    const tabKeys = Object.keys(t.tabs || {});
    tabKeys.forEach((key, i) => {
      const tb = create('button', { className: 'tab-btn', type: 'button' });
      tb.textContent = key;
      tb.style.padding = '0.45rem 0.7rem';
      tb.style.borderRadius = '8px';
      tb.style.border = '1px solid transparent';
      if (i === 0) tb.classList.add('active');
      on(tb, 'click', () => {
        tabsBar.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
        tb.classList.add('active');
        renderTabContent(key, t.tabs[key]);
      });
      tabsBar.appendChild(tb);
    });
    // Render first tab
    if (tabKeys.length) renderTabContent(tabKeys[0], t.tabs[tabKeys[0]]);

    // Accordions
    accordionArea.innerHTML = '';
    (t.acordiones || []).forEach((accItem, idx) => {
      const acc = create('details');
      const sum = create('summary');
      sum.textContent = accItem.title || `Detalle ${idx+1}`;
      const body = create('div');
      body.innerHTML = accItem.content || '';
      acc.appendChild(sum);
      acc.appendChild(body);
      accordionArea.appendChild(acc);
    });

    // Cards
    cardsArea.innerHTML = '';
    (t.tarjetas || []).forEach((card) => {
      const c = create('article', { className: 'info-card fade-in' });
      c.innerHTML = `<h4>${card.title || ''}</h4><p class="muted">${card.body || ''}</p>`;
      cardsArea.appendChild(c);
    });

    // Gallery
    galleryWrap.innerHTML = '';
    const gal = create('div');
    gal.style.display = 'grid';
    gal.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px,1fr))';
    gal.style.gap = '0.5rem';
    ((t.galeria && t.galeria.length) ? t.galeria : []).forEach((imgName) => {
      const im = create('img');
      im.src = `assets/img/unidad1/${imgName}`;
      im.alt = imgName || 'imagen';
      im.loading = 'lazy';
      im.style = 'width:100%; height:90px; object-fit:cover; border-radius:8px; cursor:pointer;';
      on(im, 'click', () => openLightbox(im.src));
      gal.appendChild(im);
    });
    galleryWrap.appendChild(gal);

    // small reveal animation
    main.classList.add('visible');
  }

  function renderTabContent(key, content) {
    tabContent.innerHTML = '';
    const wrap = create('div');
    wrap.className = 'tab-panel fade-in';
    if (Array.isArray(content)) {
      // list content
      const ul = create('ul');
      content.forEach(i => { const li = create('li'); li.innerHTML = i || ''; ul.appendChild(li); });
      wrap.appendChild(ul);
    } else {
      wrap.innerHTML = content || '';
    }
    tabContent.appendChild(wrap);
  }

  // Select topic by id
  function selectTopic(id) {
    const t = topicIndex[String(id)];
    if (!t) return;
    currentTopicId = String(id);
    // highlight in sidebar
    $$('.topic-item', list).forEach(btn => btn.classList.toggle('active', btn.dataset.id === String(id)));
    // update breadcrumb last item
    const bc = document.querySelector('.breadcrumb');
    if (bc) {
      const last = bc.querySelector('span:last-child');
      if (last) last.textContent = `${unitData.titulo} › ${t.titulo}`;
    }
    renderTopic(t);
    // set hash without reloading
    try { history.replaceState(null, '', `#topic-${t.id}`); } catch (e) {}
  }

  // Search/filter topics
  const search = document.getElementById('topic-search');
  if (search) {
    on(search, 'input', debounce(() => {
      const q = (search.value || '').toLowerCase().trim();
      const items = $$('.topic-item', list);
      let firstVisible = null;
      items.forEach((btn) => {
        const txt = (btn.textContent || '').toLowerCase();
        const visible = txt.includes(q);
        btn.parentElement.style.display = visible ? '' : 'none';
        if (visible && !firstVisible) firstVisible = btn;
      });
      if (firstVisible) selectTopic(firstVisible.dataset.id);
    }, 120));
  }

  // Initialize selection: hash -> match or first topic
  const hash = (location.hash || '').replace('#topic-', '');
  if (hash && topicIndex[String(hash)]) selectTopic(hash);
  else if (unitData.temas && unitData.temas.length) selectTopic(unitData.temas[0].id);

  // Responsive: collapse sidebar under 900px
  const adapt = () => {
    if (window.innerWidth < 900) { layout.style.gridTemplateColumns = '1fr'; sidebar.style.order = -1; }
    else { layout.style.gridTemplateColumns = '280px 1fr'; sidebar.style.order = 0; }
  };
  on(window, 'resize', debounce(adapt, 160));
  adapt();
}

/* Lightbox simple */
function createLightbox() {
  if (document.getElementById('lightbox')) return;
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.style = 'position:fixed; inset:0; display:none; align-items:center; justify-content:center; background:rgba(0,0,0,0.85); z-index:99999;';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  const img = document.createElement('img');
  img.style = 'max-width:90%; max-height:90%; border-radius:8px; box-shadow:0 20px 60px rgba(0,0,0,0.8);';
  lb.appendChild(img);
  const close = () => { lb.style.display = 'none'; document.removeEventListener('keydown', keyHandler); };
  lb.addEventListener('click', close);
  const keyHandler = (ev) => { if (ev.key === 'Escape') close(); };
  document.addEventListener('keydown', keyHandler);
  document.body.appendChild(lb);
}

function openLightbox(src) {
  createLightbox();
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const img = lb.querySelector('img');
  img.src = src;
  lb.style.display = 'flex';
}

/* Ejecutar renderizados según la página */
function runDynamicRenderers() {
  try { renderIndex(); } catch (e) {}
  try { renderInformacion(); } catch (e) {}
  try { renderAprendizaje(); } catch (e) {}
  // unit pages
  try {
    if (typeof unidad1 !== 'undefined' && location.pathname.endsWith('unidad1.html')) renderUnitPage(unidad1);
    if (typeof unidad2 !== 'undefined' && location.pathname.endsWith('unidad2.html')) renderUnitPage(unidad2);
    if (typeof unidad3 !== 'undefined' && location.pathname.endsWith('unidad3.html')) renderUnitPage(unidad3);
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => setTimeout(runDynamicRenderers, 80));
