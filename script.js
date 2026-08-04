// Configuración inicial y tema guardado
const STORAGE_KEY = 'portfolio-theme-config';

const defaultConfig = {
  background: '#060816',
  buttonColor: '#00e5ff',
  textColor: '#f5f7ff',
  theme: 'dark'
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
