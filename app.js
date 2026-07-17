/* BDE SHOT — app.js */
(function () {
  'use strict';

  /* ── Disable right-click & dev tools hints ── */
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('keydown', e => {
    if (e.key === 'F12' ||
       (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) ||
       (e.ctrlKey && e.key === 'U')) {
      e.preventDefault();
    }
  });

  /* ── Suppress all console output in production ── */
  const noop = () => {};
  ['log','info','warn','error','debug','dir','table','trace'].forEach(m => {
    try { console[m] = noop; } catch (_) {}
  });

  /* ─────────────────────────────────────────────
     MATRIX RAIN
  ───────────────────────────────────────────── */
  const matrixCanvas = document.getElementById('matrix-canvas');
  const mCtx = matrixCanvas.getContext('2d');

  const MATRIX_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコサシスセソタチツテトナニヌネノ';
  let matrixCols = [];

  function resizeMatrix() {
    matrixCanvas.width  = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    const cols = Math.floor(matrixCanvas.width / 16);
    matrixCols = Array.from({ length: cols }, () => Math.random() * -matrixCanvas.height);
  }

  function drawMatrix() {
    mCtx.fillStyle = 'rgba(0,0,0,.06)';
    mCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    mCtx.font = '13px "Share Tech Mono", monospace';

    matrixCols.forEach((y, i) => {
      const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
      const x = i * 16;
      const progress = y / matrixCanvas.height;

      if (progress < .1) {
        mCtx.fillStyle = '#FFD700';
      } else if (progress < .25) {
        mCtx.fillStyle = '#C9A227';
      } else {
        const alpha = Math.max(0, .6 - progress * .5);
        mCtx.fillStyle = `rgba(140, 110, 20, ${alpha})`;
      }

      mCtx.fillText(char, x, y);
      matrixCols[i] = y > matrixCanvas.height + Math.random() * 1000
        ? -50
        : y + 16 + Math.random() * 2;
    });
  }

  /* ─────────────────────────────────────────────
     GOLD PARTICLES
  ───────────────────────────────────────────── */
  const pCanvas = document.getElementById('particle-canvas');
  const pCtx = pCanvas.getContext('2d');
  let particles = [];

  class Particle {
    constructor() { this.reset(true); }

    reset(init = false) {
      this.x = Math.random() * pCanvas.width;
      this.y = init ? Math.random() * pCanvas.height : pCanvas.height + 10;
      this.size = Math.random() * 2 + .5;
      this.speedY = -(Math.random() * .6 + .2);
      this.speedX = (Math.random() - .5) * .3;
      this.opacity = Math.random() * .6 + .2;
      this.decay = Math.random() * .002 + .001;
      const hue = 40 + Math.random() * 15;
      this.color = `hsl(${hue}, 90%, 55%)`;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.opacity -= this.decay;
      if (this.opacity <= 0 || this.y < -10) this.reset();
    }

    draw() {
      pCtx.save();
      pCtx.globalAlpha = this.opacity;
      pCtx.fillStyle = this.color;
      pCtx.shadowColor = this.color;
      pCtx.shadowBlur = 6;
      pCtx.beginPath();
      pCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      pCtx.fill();
      pCtx.restore();
    }
  }

  function resizeParticles() {
    pCanvas.width  = window.innerWidth;
    pCanvas.height = window.innerHeight;
    particles = Array.from({ length: 80 }, () => new Particle());
  }

  function drawParticles() {
    pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
  }

  /* ─────────────────────────────────────────────
     ANIMATION LOOP
  ───────────────────────────────────────────── */
  function animate() {
    drawMatrix();
    drawParticles();
    requestAnimationFrame(animate);
  }

  function onResize() {
    resizeMatrix();
    resizeParticles();
  }

  resizeMatrix();
  resizeParticles();
  animate();
  window.addEventListener('resize', onResize, { passive: true });

  /* ─────────────────────────────────────────────
     NAVBAR
  ───────────────────────────────────────────── */
  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');

  /* Clone nav links into the mobile overlay */
  navLinks.querySelectorAll('li').forEach(li => {
    const clone = li.cloneNode(true);
    mobileOverlay.appendChild(clone);
  });

  function closeMenu() {
    mobileOverlay.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.querySelectorAll('span').forEach(s => {
      s.style.transform = '';
      s.style.opacity = '';
    });
  }

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    updateActiveLink();
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    const open = mobileOverlay.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    hamburger.querySelectorAll('span').forEach((s, i) => {
      if (open) {
        if (i === 0) s.style.transform = 'translateY(7px) rotate(45deg)';
        if (i === 1) s.style.opacity = '0';
        if (i === 2) s.style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        s.style.transform = '';
        s.style.opacity = '';
      }
    });
  });

  /* Fermer au clic sur un lien (overlay + navbar) */
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  mobileOverlay.addEventListener('click', e => {
    if (e.target.classList.contains('nav-link')) closeMenu();
  });

  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      const link = navbar.querySelector(`a[href="#${sec.id}"]`);
      if (!link) return;
      const top = sec.offsetTop;
      const bot = top + sec.offsetHeight;
      link.classList.toggle('active', scrollY >= top && scrollY < bot);
    });
  }

  /* ─────────────────────────────────────────────
     TYPEWRITER
  ───────────────────────────────────────────── */
  const PHRASES = [
    'LKS 🇲🇶​ c\'est le GOAT qui à conçu ce site 😝​🥵',
    'La cybersécurité, c\'est notre domaine fanmi.',
    'root@bde-shot:~# ./exploit.sh',
    'Pa konté zé an tchou poul 🐓🥚'
  ];

  const typeEl = document.getElementById('typewriter');
  let phraseIdx = 0, charIdx = 0, deleting = false, pauseTimer = null;

  function typeStep() {
    const phrase = PHRASES[phraseIdx];

    if (!deleting) {
      charIdx++;
      typeEl.textContent = phrase.slice(0, charIdx);
      if (charIdx === phrase.length) {
        deleting = true;
        pauseTimer = setTimeout(typeStep, 2400);
        return;
      }
      setTimeout(typeStep, 55 + Math.random() * 30);
    } else {
      charIdx--;
      typeEl.textContent = phrase.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % PHRASES.length;
        setTimeout(typeStep, 400);
        return;
      }
      setTimeout(typeStep, 28);
    }
  }
  setTimeout(typeStep, 1200);

  /* ─────────────────────────────────────────────
     SCROLL REVEAL
  ───────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = i * 80;
        setTimeout(() => {
          entry.target.classList.add('visible');
          /* animate value bars */
          const bar = entry.target.querySelector('.value-fill');
          if (bar) {
            const target = bar.style.width || '80%';
            bar.style.setProperty('--target-width', target);
            bar.style.width = target;
          }
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ─────────────────────────────────────────────
     COUNTER ANIMATION
  ───────────────────────────────────────────── */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      el.textContent = '0';
      const duration = 1600;
      const start = performance.now();

      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target + (target === 200 ? '+' : '');
      }
      requestAnimationFrame(step);
      counterObserver.unobserve(el);
    });
  }, { threshold: .5 });

  document.querySelectorAll('.stat-num[data-target]').forEach(el => counterObserver.observe(el));

  /* ─────────────────────────────────────────────
     TERMINAL ANIMATION
  ───────────────────────────────────────────── */
  const terminalBody = document.getElementById('terminal-body');
  const TERMINAL_LINES = [
    { cls: 'cmd',  text: '$ whoami' },
    { cls: 'out',  text: 'bde-shot' },
    { cls: 'cmd',  text: '$ cat mission.txt' },
    { cls: 'head', text: '[ BDE SHOT — Mission ]' },
    { cls: 'out',  text: '→ Enacadrer les étudiants en cybersécurité' },
    { cls: 'out',  text: '→ Organiser CTF, workshops & conférences' },
    { cls: 'out',  text: '→ Créer un réseau professionnel solide' },
    { cls: 'cmd',  text: '$ ls ./members/' },
    { cls: 'out',  text: 'prez/  vp-tech/  vp-com/  vp-events/' },
    { cls: 'cmd',  text: '$ echo "Bienvenue à tous les nouveaux étduants 🎯🔫"' },
    { cls: 'out',  text: 'Bienvenue à tous les nouveaux étduants 🎯🔫' },
    { cls: 'cmd',  text: '$ _' },
  ];

  const termObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      let i = 0;
      terminalBody.innerHTML = '';

      function addLine() {
        if (i >= TERMINAL_LINES.length) return;
        const { cls, text } = TERMINAL_LINES[i];
        const span = document.createElement('span');
        span.className = `t-line ${cls}`;
        span.textContent = text;
        span.style.opacity = '0';
        span.style.transform = 'translateY(4px)';
        span.style.transition = 'opacity .25s, transform .25s';
        terminalBody.appendChild(span);
        requestAnimationFrame(() => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
        });
        terminalBody.scrollTop = terminalBody.scrollHeight;
        i++;
        setTimeout(addLine, cls === 'cmd' ? 320 : 160);
      }
      addLine();
      termObs.unobserve(entry.target);
    });
  }, { threshold: .3 });

  if (terminalBody) termObs.observe(terminalBody);

  /* ─────────────────────────────────────────────
     CONTACT FORM
  ───────────────────────────────────────────── */
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name    = form.querySelector('#name').value.trim();
      const email   = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        showFeedback('error', '[ ERREUR ] Tous les champs obligatoires doivent être remplis.');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFeedback('error', '[ ERREUR ] Adresse email invalide.');
        return;
      }

      const submitBtn = form.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-text').textContent = 'Transmission en cours...';

      setTimeout(() => {
        showFeedback('success', '[ OK ] Signal reçu — nous reviendrons vers toi rapidement.');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-text').textContent = 'Envoyer le signal';
      }, 1200);
    });
  }

  function showFeedback(type, msg) {
    feedback.textContent = msg;
    feedback.className = `form-feedback ${type}`;
    setTimeout(() => { feedback.textContent = ''; feedback.className = 'form-feedback'; }, 5000);
  }

  /* ─────────────────────────────────────────────
     SMOOTH SCROLL FOR ANCHOR LINKS
  ───────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ─────────────────────────────────────────────
     CIRCUIT BOARD HOVER EFFECT ON VALUE CARDS
  ───────────────────────────────────────────── */
  document.querySelectorAll('.value-card, .team-card, .timeline-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
      const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
      card.style.setProperty('--mx', `${x}%`);
      card.style.setProperty('--my', `${y}%`);
      const dx = (e.clientX - rect.left - rect.width  / 2) / rect.width;
      const dy = (e.clientY - rect.top  - rect.height / 2) / rect.height;
      card.style.transform = `perspective(600px) rotateX(${-dy * 6}deg) rotateY(${dx * 6}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

})();
