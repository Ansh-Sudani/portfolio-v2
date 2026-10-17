// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const links = document.getElementById('navLinks');
if (menuBtn && links) {
  menuBtn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? 'Close' : 'Menu';
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = 'Menu';
  }));
}

// Copy email
const copyBtn = document.getElementById('copyEmail');
const copyLabel = document.getElementById('copyLabel');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const email = copyBtn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      copyLabel.textContent = 'COPIED';
    } catch {
      window.location.href = 'mailto:' + email;
    }
    setTimeout(() => (copyLabel.textContent = 'COPY'), 1800);
  });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
