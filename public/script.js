const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('is-open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
document.querySelector('.share-button').addEventListener('click', async () => {
  const status = document.querySelector('.share-status');
  const url = 'https://thefatherlessfoundation.com/';
  try { await navigator.clipboard.writeText(url); status.textContent = 'Website link copied. Share it with someone who cares.'; }
  catch { status.textContent = `Share this link: ${url}`; }
});
