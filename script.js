const revealTargets = document.querySelectorAll('.section-reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
);

revealTargets.forEach((target) => observer.observe(target));

document.querySelectorAll('.carousel-shell').forEach((shell) => {
  const track = shell.querySelector('.player-track');
  const prev = shell.querySelector('.prev');
  const next = shell.querySelector('.next');
  const amount = () => Math.max(240, track.clientWidth * 0.62);

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -amount(), behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    track.scrollBy({ left: amount(), behavior: 'smooth' });
  });
});

document.querySelectorAll('details').forEach((details) => {
  details.addEventListener('toggle', () => {
    if (!details.open) return;
    document.querySelectorAll('details[open]').forEach((other) => {
      if (other !== details) other.open = false;
    });
  });
});
