(function () {
  'use strict';

  var root = document.documentElement;
  var header = document.querySelector('.site-header');
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var cvMenu = document.querySelector('.cv-menu');
  var cvToggle = document.getElementById('cvToggle');
  var themeToggle = document.getElementById('themeToggle');
  var langToggle = document.getElementById('langToggle');

  function save(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }

  // Theme toggle (dark is default)
  themeToggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.classList.add('theme-anim');
    root.setAttribute('data-theme', next);
    save('theme', next);
    setTimeout(function () { root.classList.remove('theme-anim'); }, 500);
  });

  // Language toggle (EN <-> AR)
  langToggle.addEventListener('click', function () {
    var next = window.I18N.current() === 'ar' ? 'en' : 'ar';
    window.I18N.apply(next);
    save('lang', next);
    // keep URL clean / shareable
    var url = new URL(location.href);
    if (next === 'ar') url.searchParams.set('lang', 'ar'); else url.searchParams.delete('lang');
    history.replaceState(null, '', url);
  });

  // Header background on scroll
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  function setMenu(open) {
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  toggle.addEventListener('click', function () {
    setMenu(!nav.classList.contains('open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });

  // CV dropdown
  function setCv(open) {
    cvMenu.classList.toggle('open', open);
    cvToggle.setAttribute('aria-expanded', String(open));
  }
  cvToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    setCv(!cvMenu.classList.contains('open'));
  });
  document.addEventListener('click', function (e) {
    if (!cvMenu.contains(e.target)) setCv(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setCv(false); setMenu(false); }
  });

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    var startReveal = function () {
      reveals.forEach(function (el) {
        var siblings = Array.prototype.filter.call(el.parentElement.children, function (c) {
          return c.classList.contains('reveal');
        });
        var idx = siblings.indexOf(el);
        el.style.transitionDelay = Math.min(idx, 6) * 80 + 'ms';
        io.observe(el);
      });
    };
    // If the intro is playing, start the page animations as it lifts away
    if (root.classList.contains('intro-active')) {
      document.addEventListener('introdone', startReveal, { once: true });
    } else {
      startReveal();
    }
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Active nav link
  var links = nav.querySelectorAll('a[href^="#"]:not(.btn)');
  if ('IntersectionObserver' in window) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) {
            l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) {
      var s = document.querySelector(a.getAttribute('href'));
      if (s) navIo.observe(s);
    });
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
