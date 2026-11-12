/* =========================================================
   Intro: name appears word by word, then the signature is
   "signed" stroke by stroke, then the page is revealed.
   Plays once per browser session. Click / key / Skip = finish.
   ========================================================= */
(function () {
  'use strict';

  var root = document.documentElement;
  var intro = document.getElementById('intro');
  if (!intro) return;

  var announced = false;
  function announce() {            // tells main.js the page is being revealed
    if (announced) return;
    announced = true;
    document.dispatchEvent(new Event('introdone'));
  }
  function removeNow() {
    announce();
    root.classList.remove('intro-active', 'intro-exit');
    if (intro.parentNode) intro.parentNode.removeChild(intro);
  }

  if (!root.classList.contains('intro-active')) { removeNow(); return; }

  try { sessionStorage.setItem('introSeen', '1'); } catch (e) {}

  var words   = intro.querySelectorAll('.intro-name span');
  var strokes = Array.prototype.slice.call(intro.querySelectorAll('.pen-path'));
  var pen     = intro.querySelector('.intro-pen');
  var svg     = intro.querySelector('.intro-sig');

  /* ---- Timeline (ms) — tweak these to change the pace ---- */
  var WORD_START = 400;            // first word ("Muhammad")
  var WORD_GAP   = 650;            // between words
  var SIGN_DELAY = 900;            // after the last word, before the pen starts
  var PEN_SPEED  = 1.15;           // svg units per ms (lower = slower signing)
  var PAUSE_MULT = 1.6;            // multiplies the pen-lift pauses in the HTML
  var HOLD       = 1000;           // admire the finished signature
  var EXIT_MS    = 900;            // fade/slide away

  var SIGN_START = WORD_START + WORD_GAP * (words.length - 1) + SIGN_DELAY;
  var finished = false, timers = [], raf = 0;
  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }

  // 1) Words
  Array.prototype.forEach.call(words, function (w, i) {
    later(function () { w.classList.add('in'); }, WORD_START + i * WORD_GAP);
  });

  // 2) Signature plan. Every stroke is fully hidden until its turn
  //    (prevents the round pen-cap "dots" showing early).
  var plan = [], t = 0;
  strokes.forEach(function (p) {
    var len = p.getTotalLength();
    p.style.strokeDasharray = len + ' ' + (len + 1);
    p.style.strokeDashoffset = len;
    p.style.visibility = 'hidden';
    t += (parseInt(p.getAttribute('data-pause') || '0', 10)) * PAUSE_MULT;
    var dur = Math.max(160, len / PEN_SPEED);
    plan.push({ el: p, len: len, start: t, dur: dur });
    t += dur;
  });
  var SIGN_TOTAL = t;

  function ease(x) { return x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; }

  function sign(t0) {
    function frame(now) {
      var el = now - t0, active = null;
      for (var i = 0; i < plan.length; i++) {
        var s = plan[i], k = (el - s.start) / s.dur;
        if (k <= 0) continue;
        if (!s.shown) { s.el.style.visibility = 'visible'; s.shown = true; }
        if (k >= 1) { if (!s.done) { s.el.style.strokeDashoffset = 0; s.done = true; } continue; }
        var dist = s.len * ease(k);
        s.el.style.strokeDashoffset = s.len - dist;
        active = s.el.getPointAtLength(dist);
      }
      if (active) {
        pen.setAttribute('cx', active.x);
        pen.setAttribute('cy', active.y);
        pen.classList.add('on');
      } else {
        pen.classList.remove('on');
      }
      if (el < SIGN_TOTAL) raf = requestAnimationFrame(frame);
      else signed();
    }
    raf = requestAnimationFrame(frame);
  }

  function signed() {
    pen.classList.remove('on');
    svg.classList.add('signed');        // settle into the exact, full logo
    later(exit, HOLD);
  }

  // 3) Reveal page
  function exit() {
    if (finished) return;
    finished = true;
    timers.forEach(clearTimeout);
    cancelAnimationFrame(raf);
    root.classList.add('intro-exit');
    setTimeout(announce, 250);
    setTimeout(removeNow, EXIT_MS);
  }

  later(function () { sign(performance.now()); }, SIGN_START);

  // Skip: button, click anywhere, or any key
  function skip() {
    if (finished) return;
    Array.prototype.forEach.call(words, function (w) { w.classList.add('in'); });
    svg.classList.add('signed');
    exit();
  }
  intro.addEventListener('click', skip);
  document.addEventListener('keydown', function onKey() {
    document.removeEventListener('keydown', onKey);
    skip();
  });

  // Safety net: never trap the visitor behind the intro
  setTimeout(function () { if (!finished) exit(); }, SIGN_START + SIGN_TOTAL + HOLD + 4000);
})();
