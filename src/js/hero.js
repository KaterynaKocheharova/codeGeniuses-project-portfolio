const heroTitle = document.querySelector('.hero-title');

// ========================= SMOOTH APPEARING ON SCROLL

document.addEventListener('DOMContentLoaded', animateOnScroll, {
  passive: true,
});

window.addEventListener('scroll', animateOnScroll);

function animateOnScroll() {
  const rect = heroTitle.getBoundingClientRect();
  const viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );

  if (rect.top >= 0 && rect.bottom <= viewHeight) {
    heroTitle.classList.add('show');
  } else {
    heroTitle.classList.remove('show');
  }
}
