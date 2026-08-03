// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mega Menu ──────────────────────────────────────────
const hasMega = document.querySelector('.has-mega');
const megaToggle = document.querySelector('.mega-toggle');
const megaPanel = document.querySelector('.mega-panel');

function openMega() {
  hasMega?.classList.add('open');
  megaToggle?.setAttribute('aria-expanded', 'true');
}
function closeMega() {
  hasMega?.classList.remove('open');
  megaToggle?.setAttribute('aria-expanded', 'false');
}

// Toggle on click (works on touch too)
megaToggle?.addEventListener('click', (e) => {
  e.stopPropagation();
  hasMega?.classList.contains('open') ? closeMega() : openMega();
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!hasMega?.contains(e.target)) closeMega();
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMega();
});

// ── Mobile Menu ────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleHamburger(open) {
  const spans = hamburger?.querySelectorAll('span');
  if (!spans) return;
  spans[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
  spans[1].style.opacity   = open ? '0' : '1';
  spans[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
}

hamburger?.addEventListener('click', () => {
  const isOpen = mobileMenu?.classList.toggle('open');
  toggleHamburger(isOpen);
});

// Mobile Servicios accordion
const mobileServicesToggle = document.querySelector('.mobile-services-toggle');
const mobileServicesList   = document.querySelector('.mobile-services-list');

mobileServicesToggle?.addEventListener('click', () => {
  const isOpen = mobileServicesList?.classList.toggle('open');
  mobileServicesToggle.classList.toggle('open', isOpen);
  mobileServicesToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Close mobile menu on link click (non-toggle links)
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu?.classList.remove('open');
    toggleHamburger(false);
  });
});

// ── Active nav link ────────────────────────────────────
const currentPath = window.location.pathname.replace(/\/$/, '') || '/index';
document.querySelectorAll('.navbar-links a, .mobile-menu a, .mega-card').forEach(link => {
  try {
    const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '') || '/index';
    if (linkPath === currentPath) link.classList.add('active');
  } catch {}
});

// ── Contact form (Formspree) ───────────────────────────
const form = document.querySelector('.contact-form');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      form.innerHTML = `<div style="text-align:center;padding:40px 0">
        <div style="font-size:3rem;margin-bottom:16px">✅</div>
        <h3 style="font-family:Montserrat,sans-serif;color:#0057B8;margin-bottom:8px">¡Mensaje enviado!</h3>
        <p>Te contactaremos pronto. ¡Gracias!</p>
      </div>`;
    } else {
      btn.textContent = original;
      btn.disabled = false;
      alert('Hubo un error. Por favor escríbenos a athletetrainlab@gmail.com');
    }
  } catch {
    btn.textContent = original;
    btn.disabled = false;
  }
});

// ── Animate on scroll ──────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .card, .step, .feature-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
