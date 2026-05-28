
document.addEventListener('click', (event) => {
  const item = event.target.closest('.gallery-item, .hero-image[data-full]');
  const lightbox = document.getElementById('lightbox');
  if (item && lightbox) {
    const img = lightbox.querySelector('.lightbox-image');
    const caption = lightbox.querySelector('.lightbox-caption');
    img.src = item.dataset.full;
    img.alt = item.dataset.title || '';
    caption.textContent = item.dataset.title || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }
  if (event.target.closest('[data-close="true"]') || event.target.closest('.lightbox-close')) {
    if (lightbox) {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
    }
  }
});
document.addEventListener('keydown', (event) => {
  const lightbox = document.getElementById('lightbox');
  if (event.key === 'Escape' && lightbox) {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }
});
