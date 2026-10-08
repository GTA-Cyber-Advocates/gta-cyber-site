(function () {
  var toggle = document.getElementById('navToggle');
  var panel = document.getElementById('navPanel');
  if (toggle && panel) {
    var setOpen = function (open) {
      panel.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.querySelector('.sr-only').textContent = open ? 'Close menu' : 'Open menu';
    };
    toggle.addEventListener('click', function () {
      setOpen(!panel.classList.contains('open'));
    });
    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('open')) { setOpen(false); toggle.focus(); }
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

  var spyLinks = [].slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  if (spyLinks.length && 'IntersectionObserver' in window) {
    var byId = {};
    var targets = [];
    spyLinks.forEach(function (a) {
      var el = document.getElementById(a.getAttribute('href').slice(1));
      if (el) { byId[el.id] = a; targets.push(el); }
    });
    var visible = {};
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
      var current = null;
      targets.forEach(function (el) { if (visible[el.id] && !current) current = el.id; });
      spyLinks.forEach(function (a) { a.removeAttribute('aria-current'); });
      if (current && byId[current]) byId[current].setAttribute('aria-current', 'true');
    }, { rootMargin: '-45% 0px -50% 0px' });
    targets.forEach(function (el) { spy.observe(el); });
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduce && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-anim');
    document.querySelectorAll('.grid, .stats, .tiers, .timeline').forEach(function (el) {
      el.classList.add('reveal-stagger');
    });
    document.querySelectorAll('main section > .wrap').forEach(function (el) {
      if (el.closest('.reveal-stagger, .hero, .launch, .phero')) return;
      el.classList.add('reveal');
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
