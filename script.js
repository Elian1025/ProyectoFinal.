// Configuración inicial y tema guardado
const STORAGE_KEY = 'portfolio-theme-config';

const defaultConfig = {
  background: '#060816',
  buttonColor: '#00e5ff',
  textColor: '#f5f7ff',
  theme: 'dark',
  backgroundPreset: 'minimalista',
  animatedRGB: false
};

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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
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
  const panel = document.getElementById('theme-panel');
  const toggle = document.getElementById('theme-toggle');
  const bgInput = document.getElementById('background-color');
  const buttonInput = document.getElementById('button-color');
  const textInput = document.getElementById('text-color');
  const themeSelect = document.getElementById('theme-select');
  const saveBtn = document.getElementById('save-theme');

  if (!panel || !toggle) return;

  toggle.addEventListener('click', () => panel.classList.toggle('open'));

  bgInput.value = config.background;
  buttonInput.value = config.buttonColor;
  textInput.value = config.textColor;
  themeSelect.value = config.theme;

  [bgInput, buttonInput, textInput, themeSelect].forEach((element) => {
    element.addEventListener('input', () => {
      config.background = bgInput.value;
      config.buttonColor = buttonInput.value;
      config.textColor = textInput.value;
      config.theme = themeSelect.value;
      applyTheme();
    });
  });

  saveBtn.addEventListener('click', () => {
    saveConfig();
    panel.classList.remove('open');
    alert('Configuración guardada correctamente.');
  });
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
  toggle.addEventListener('click', () => body.classList.toggle('open'));

  // theme presets
  panel.querySelectorAll('.preset-theme').forEach((btn) => {
    btn.addEventListener('click', () => {
      const t = btn.getAttribute('data-theme');
      applyPresetTheme(t);
    });
  });

  // backgrounds
  panel.querySelectorAll('.preset-bg').forEach((btn) => {
    btn.addEventListener('click', () => {
      const bg = btn.getAttribute('data-bg');
      config.backgroundPreset = bg;
      applyBackgroundPreset(bg);
    });
  });

  panel.querySelector('#preset-save').addEventListener('click', () => {
    saveConfig();
    alert('Preferencias guardadas.');
  });

  panel.querySelector('#preset-reset').addEventListener('click', () => {
    config = { ...defaultConfig };
    applyTheme();
    saveConfig();
    alert('Configuración restablecida.');
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
      config.textColor = '#ffffff';
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

  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
}

function initUnits() {
  document.querySelectorAll('.unit-toggle').forEach((button) => {
    button.addEventListener('click', () => {
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
  const particleCount = 70;

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

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  resize();
  createParticles();
  draw();
}

function initCustomCursor() {
  // Create cursor element
  if (document.getElementById('custom-cursor')) return;
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  document.body.appendChild(cursor);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let posX = mouseX;
  let posY = mouseY;

  const update = () => {
    posX += (mouseX - posX) * 0.18;
    posY += (mouseY - posY) * 0.18;
    cursor.style.left = posX + 'px';
    cursor.style.top = posY + 'px';
    requestAnimationFrame(update);
  };

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Hover interactions
  document.querySelectorAll('a, button, .btn, .start-btn, .unit-card').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  update();
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initPageTransitions() {
  // Entrada suave
  document.body.classList.add('page-enter');
  setTimeout(() => document.body.classList.remove('page-enter'), 650);

  // Interceptar enlaces de navegación interna para animar salida
  document.querySelectorAll('a').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (href.startsWith('#')) return;
    if (href.startsWith('mailto:') || link.target === '_blank') return;
    try {
      const url = new URL(href, location.href);
      if (url.origin !== location.origin) return;
    } catch (e) {
      return;
    }

    link.addEventListener('click', (ev) => {
      ev.preventDefault();
      const dest = link.href;
      document.body.classList.add('page-exit');
      setTimeout(() => (window.location.href = dest), 360);
    });
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
        img.alt = name;
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
    art.innerHTML = `
      <div class="card-media"><img src="assets/img/unidad${idx+1}/${u.galeria && u.galeria[0] ? u.galeria[0] : 'placeholder.jpg'}" alt="${u.titulo}" /></div>
      <div class="card-body">
        <h3>${u.titulo}</h3>
        <p class="muted">${u.descripcion || ''}</p>
        <div class="actions"><a class="btn" href="unidad${idx+1}.html">Entrar</a></div>
      </div>`;
    grid.appendChild(art);
  });
}

function renderUnitPage(unitData) {
  if (!unitData) return;
  const title = document.getElementById(unitData.titulo ? unitData.titulo.toLowerCase().replace(/\s/g,'') + '-title' : null);
  // Instead, set section heading if present
  const h = document.querySelector('.section-heading h2');
  if (h) h.textContent = unitData.titulo || h.textContent;
  const desc = document.querySelector('.hero-card p');
  if (desc && unitData.descripcion) desc.textContent = unitData.descripcion;
  // Render gallery preview
  const topicsArea = document.getElementById('topics-area');
  if (!topicsArea) return;
  topicsArea.innerHTML = '';
  // show gallery thumbnails if available
  if (Array.isArray(unitData.galeria) && unitData.galeria.length) {
    const gwrap = document.createElement('div');
    gwrap.style.display = 'grid';
    gwrap.style.gridTemplateColumns = 'repeat(auto-fit, minmax(140px,1fr))';
    gwrap.style.gap = '0.6rem';
    unitData.galeria.forEach((imgName) => {
      const img = document.createElement('img');
      img.src = `assets/img/unidad${unitData.titulo.match(/\d+/) ? unitData.titulo.match(/\d+/)[0] : '1'}/${imgName}`;
      img.style = 'width:100%; height:100px; object-fit:cover; border-radius:10px; cursor:pointer;';
      img.addEventListener('click', () => openLightbox(img.src));
      gwrap.appendChild(img);
    });
    topicsArea.appendChild(gwrap);
  }
}

/* Lightbox simple */
function createLightbox() {
  if (document.getElementById('lightbox')) return;
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.style = 'position:fixed; inset:0; display:none; align-items:center; justify-content:center; background:rgba(0,0,0,0.85); z-index:99999;';
  const img = document.createElement('img');
  img.style = 'max-width:90%; max-height:90%; border-radius:8px; box-shadow:0 20px 60px rgba(0,0,0,0.8);';
  lb.appendChild(img);
  lb.addEventListener('click', () => { lb.style.display = 'none'; });
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
