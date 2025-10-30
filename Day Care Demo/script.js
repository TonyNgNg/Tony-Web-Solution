// Mobile nav toggle + improved outside click handling + auto-scroll for toy gallery
(function(){
  // NAV toggle
  const btn = document.getElementById('menu-btn');
  const nav = document.querySelector('nav');
  if (btn && nav) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      document.body.classList.toggle('nav-open');
    });

    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        document.body.classList.remove('nav-open');
      }
    });

    // close when nav link clicked
    nav.querySelectorAll('ul li a').forEach(a => a.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
    }));
  }

  // Gentle auto-scroll for toy gallery (optional)
  const gallery = document.querySelector('.toy-gallery');
  if (gallery) {
    let step = 1;            // px per tick
    let tick = 14;           // ms per tick
    let timer = null;
    let paused = false;

    function start() {
      stop();
      timer = setInterval(() => {
        if (paused) return;
        if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 1) {
          gallery.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          gallery.scrollBy({ left: step });
        }
      }, tick);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    gallery.addEventListener('mouseenter', () => paused = true);
    gallery.addEventListener('mouseleave', () => paused = false);
    gallery.addEventListener('touchstart', () => paused = true, {passive:true});
    gallery.addEventListener('touchend', () => paused = false, {passive:true});

    // start after layout stabilizes
    setTimeout(start, 600);
  }
})();
