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

const verseToggle = document.querySelector('.verse-toggle');
const verseText = document.querySelector('#verse-text');
const verseSource = document.querySelector('.verse-source');
if (verseToggle && verseText && verseSource) {
  const hebrew = verseText.textContent;
  const hebrewSource = verseSource.href;
  const translation = '“Defend the weak and the fatherless; uphold the cause of the poor and the oppressed.”';
  let verseAnimation;
  verseToggle.addEventListener('click', () => {
    const translated = verseToggle.getAttribute('aria-pressed') !== 'true';
    verseAnimation?.cancel();
    verseToggle.setAttribute('aria-pressed', String(translated));
    verseToggle.textContent = translated ? 'Hide translation' : 'Show translation';
    verseText.textContent = translated ? translation : hebrew;
    verseText.lang = translated ? 'en' : 'he';
    verseText.dir = translated ? 'ltr' : 'rtl';
    verseSource.textContent = translated ? 'Psalm 82:3 (NIV)' : 'Psalm 82:3 (Hebrew)';
    verseSource.href = translated
      ? 'https://www.biblegateway.com/passage/?search=Psalm%2082%3A3&version=NIV'
      : hebrewSource;
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      verseAnimation = verseText.animate(
        [{ opacity: 0, transform: 'translateY(4px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 220, easing: 'ease-out' }
      );
    }
  });
}
