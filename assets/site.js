(function () {
  var toggle = document.getElementById('navToggle');
  var panel = document.getElementById('navPanel');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var open = panel.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.querySelector('.sr-only').textContent = open ? 'Close menu' : 'Open menu';
    });
  }

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  var interest = new URLSearchParams(window.location.search).get('interest');
  if (interest) {
    var sel = document.getElementById('interest');
    if (sel) Array.prototype.forEach.call(sel.options, function (o) {
      if (o.value.toLowerCase().indexOf(interest.toLowerCase()) !== -1 ||
          o.textContent.toLowerCase().indexOf(interest.toLowerCase()) !== -1) o.selected = true;
    });
  }

  document.querySelectorAll('form[action*="formspree.io"]').forEach(function (form) {
    var status = form.querySelector('[data-form-status]');
    if (!status || !window.fetch) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('[type="submit"]');
      var label = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
      status.textContent = '';
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (r.ok) {
            form.reset();
            status.textContent = 'Thank you. We will be in touch shortly.';
            status.style.color = '#1D1D1B';
          } else {
            status.textContent = 'Something went wrong. Please email info@gta-cyber.org instead.';
            status.style.color = '#A8481F';
          }
        })
        .catch(function () {
          status.textContent = 'Something went wrong. Please email info@gta-cyber.org instead.';
          status.style.color = '#A8481F';
        })
        .then(function () { if (btn) { btn.disabled = false; btn.textContent = label; } });
    });
  });

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduce && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-anim');
    document.querySelectorAll('.grid, .stats, .tiers, .timeline').forEach(function (el) {
      el.classList.add('reveal-stagger');
    });
    document.querySelectorAll('main section > .wrap').forEach(function (el) {
      if (!el.closest('.reveal-stagger')) el.classList.add('reveal');
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) { io.observe(el); });
  }

  var header = document.getElementById('siteHeader');
  var ticking = false;
  function frame() { ticking = false; if (header) header.classList.toggle('is-stuck', window.scrollY > 8); }
  function onScroll() { if (!ticking) { ticking = true; window.requestAnimationFrame(frame); } }
  if (header) { window.addEventListener('scroll', onScroll, { passive: true }); frame(); }
})();
