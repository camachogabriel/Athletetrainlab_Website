// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = mobileMenu?.classList.contains('open') ? 'rotate(45deg) translate(5px,5px)' : '';
  spans[1].style.opacity = mobileMenu?.classList.contains('open') ? '0' : '1';
  spans[2].style.transform = mobileMenu?.classList.contains('open') ? 'rotate(-45deg) translate(5px,-5px)' : '';
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu?.classList.remove('open');
  });
});

// Set active nav link
const currentPath = window.location.pathname.replace(/\/$/, '') || '/index';
document.querySelectorAll('.navbar-links a, .mobile-menu a').forEach(link => {
  const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '') || '/index';
  if (linkPath === currentPath) link.classList.add('active');
});

// Contact form submit (Formspree)
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
      alert('Hubo un error. Por favor escríbenos directamente a athletetrainlab@gmail.com');
    }
  } catch {
    btn.textContent = original;
    btn.disabled = false;
  }
});

// Animate on scroll
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
