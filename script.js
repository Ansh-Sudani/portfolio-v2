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

// Copy email: tap the row, the address briefly reads "Copied!"
const copyBtn = document.getElementById('copyEmail');
const emailText = document.getElementById('emailText');
if (copyBtn && emailText) {
  let t;
  copyBtn.addEventListener('click', async () => {
    const email = copyBtn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      emailText.textContent = 'Copied!';
      copyBtn.classList.add('copied');
      clearTimeout(t);
      t = setTimeout(() => { emailText.textContent = email; copyBtn.classList.remove('copied'); }, 1000);
    } catch {
      window.location.href = 'mailto:' + email;
    }
  });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Theme toggle (remembers choice)
(function(){
  const root=document.documentElement;
  const btn=document.getElementById('themeBtn');
  if(!btn) return;
  const isDark=()=> root.dataset.theme ? root.dataset.theme==='dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  btn.addEventListener('click',()=>{
    const next=isDark()?'light':'dark';
    root.dataset.theme=next;
    try{localStorage.setItem('theme',next);}catch(e){}
  });
})();
