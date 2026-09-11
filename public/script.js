const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
const shareButton = document.querySelector('.share-button');
shareButton.addEventListener('click', async () => {
  const status = document.querySelector('.share-status');
  const url = 'https://thefatherlessfoundation.com/';
  shareButton.disabled = true;
  try {
    await navigator.clipboard.writeText(url);
    status.textContent = 'Link copied.';
  } catch {
    status.replaceChildren('Copy this address: ');
    const link = document.createElement('a');
    link.href = url;
    link.textContent = url;
    status.append(link);
  } finally {
    shareButton.disabled = false;
  }
});
