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
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
      if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
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
}

document.addEventListener('DOMContentLoaded', init);
