/* ============================================================
   COMPONENTS.JS — Navbar, Footer, FAQ, Filter, Form
   ============================================================ */

// ===== BRAND LOGO HTML (uses real SVG logo) =====
function brandLogoHTML(isFooter) {
  const size = isFooter ? '110' : '100';
  return `<img src="${window.__rootPath || ''}assets/logo.svg" alt="Shivraj Ventures" height="${size}" style="display:block;height:${isFooter ? '48px' : '52px'};width:auto;" loading="lazy">`;
}

// ===== NAVBAR =====
function renderNavbar(activePage) {
  const inPages = window.location.pathname.includes('/pages/');
  const root    = inPages ? '../' : '';
  window.__rootPath = root;

  const links = [
    { key:'home',      href: root + 'index.html',           label:'Home' },
    { key:'about',     href: root + 'pages/about.html',     label:'About' },
    { key:'services',  href: root + 'pages/services.html',  label:'Services' },
    { key:'portfolio', href: root + 'pages/portfolio.html', label:'Portfolio' },
    { key:'tools',     href: root + 'pages/tools.html',     label:'Tools' },
    { key:'contact',   href: root + 'pages/contact.html',   label:'Contact' },
  ];

  if (inPages) {
    links[0].href = '../index.html';
    links[1].href = 'about.html';
    links[2].href = 'services.html';
    links[4].href = 'portfolio.html';
    links[5].href = 'tools.html';
    links[6].href = 'contact.html';
  }

  const desktopLinks = links.map(l =>
    `<a href="${l.href}" class="${l.key === activePage ? 'active' : ''}">${l.label}</a>`
  ).join('');

  const mobileLinks = links.map(l =>
    `<a href="${l.href}" class="${l.key === activePage ? 'active' : ''}">${l.label}</a>`
  ).join('');

  const contactHref = inPages ? 'contact.html' : 'pages/contact.html';
  const logoHref    = inPages ? '../index.html' : 'index.html';

  const html = `
<nav class="navbar" id="mainNav">
  <div class="navbar__inner">
    <a href="${logoHref}" class="brand-logo">${brandLogoHTML(false)}</a>
    <div class="navbar__links">${desktopLinks}</div>
    <div class="navbar__actions">
      <a href="https://wa.me/918808913837" target="_blank" rel="noopener" class="btn btn-outline btn-sm">💬 WhatsApp</a>
      <a href="${contactHref}" class="btn btn-primary btn-sm">Get a Quote</a>
    </div>
    <button class="navbar__toggle" id="navToggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="navbar__mobile" id="mobileNav">
  ${mobileLinks}
  <hr>
  <a href="https://wa.me/918808913837" target="_blank" rel="noopener" class="btn btn-outline">💬 WhatsApp</a>
  <a href="${contactHref}" class="btn btn-primary">Get a Quote</a>
</div>`;

  const ph = document.getElementById('navbar-placeholder');
  if (ph) ph.outerHTML = html;

  // Scroll effect
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // Mobile toggle
  const toggle = document.getElementById('navToggle');
  const mob    = document.getElementById('mobileNav');
  if (toggle && mob) {
    toggle.addEventListener('click', () => mob.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !mob.contains(e.target)) mob.classList.remove('open');
    });
  }
}

// ===== FOOTER =====
function renderFooter() {
  const inPages = window.location.pathname.includes('/pages/');
  const p       = inPages ? '' : 'pages/';
  const root    = inPages ? '../' : '';
  const logoHref= inPages ? '../index.html' : 'index.html';

  // SVG social icons
  const igSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`;
  const liSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
  const waSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`;

  const html = `
<footer class="footer">
  <div class="container">
    <div class="footer__cta-row">
      <div>
        <h3>Let's build your next website.</h3>
        <p>Tell me what you're working on. I'll reply with recommendations and next steps.</p>
      </div>
      <div class="footer__cta-btns">
        <a href="https://wa.me/918808913837" target="_blank" rel="noopener" class="btn btn-primary">💬 WhatsApp Me ↗</a>
        <a href="${p}contact.html" class="btn btn-ghost">Get a Quote ↗</a>
      </div>
    </div>

    <div class="footer__grid">
      <div class="footer__brand">
        <div class="footer__brand-logo">
          <a href="${logoHref}" class="brand-logo">${brandLogoHTML(true)}</a>
        </div>
        <p>Affordable WordPress websites and social media management for businesses in Lucknow. Professional work, fixed prices, guaranteed satisfaction.</p>
        <div class="social-links">
          <a href="https://www.instagram.com/shivam.digital.lko" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">${igSVG}</a>
          <a href="https://www.linkedin.com/in/shivambharti3837/" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">${liSVG}</a>
          <a href="https://wa.me/918808913837" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">${waSVG}</a>
        </div>
      </div>

      <div class="footer__col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="${p}about.html">About</a></li>
          <li><a href="${p}services.html">Services</a></li>
          <li><a href="${p}portfolio.html">Portfolio</a></li>
          <li><a href="${p}tools.html">Tools & Resources</a></li>
          <li><a href="${p}contact.html">Contact</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h4>Legal</h4>
        <ul>
          <li><a href="${p}disclaimer.html">Disclaimer</a></li>
          <li><a href="${p}faq.html">FAQs</a></li>
          <li><a href="${p}terms.html">Terms & Conditions</a></li>
          <li><a href="${p}privacy.html">Privacy Policy</a></li>
          <li><a href="${p}refund.html">Refund Policy</a></li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      <p>© 2025 Shivraj Ventures. All rights reserved. · Lucknow, Uttar Pradesh</p>
      <div class="footer__bottom-links">
        <a href="${p}disclaimer.html">Disclaimer</a>
        <a href="${p}faq.html">FAQs</a>
        <a href="${p}terms.html">Terms</a>
        <a href="${p}privacy.html">Privacy</a>
        <a href="${p}refund.html">Refund</a>
      </div>
      <a href="${logoHref}" style="font-size:.8rem;color:var(--muted)">shivrajventures.com</a>
    </div>
  </div>
</footer>`;

  const ph = document.getElementById('footer-placeholder');
  if (ph) ph.outerHTML = html;
}

// ===== FAQ ACCORDION =====
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (q) q.addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });
}

// ===== PORTFOLIO FILTER =====
function initPortfolioFilter() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.port-card');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(c => {
        c.style.display = (f === 'all' || c.dataset.category === f) ? '' : 'none';
      });
    });
  });
}

// ===== FORMSPREE CONTACT FORM =====
function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const error   = document.getElementById('formError');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    if (error)   error.style.display   = 'none';
    if (success) success.style.display = 'none';

    try {
      const res = await fetch(form.action, {
        method:  'POST',
        body:     new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.reset();
        if (success) success.style.display = 'block';
        setTimeout(() => { if (success) success.style.display = 'none'; }, 6000);
      } else {
        if (error) error.style.display = 'block';
      }
    } catch {
      if (error) error.style.display = 'block';
    } finally {
      btn.textContent = 'Send Message';
      btn.disabled = false;
    }
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
  initPortfolioFilter();
  initContactForm();
});
