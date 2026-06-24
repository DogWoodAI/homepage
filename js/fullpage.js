/* ===================================================================
   DogWoodAI — Fullpage controller (homepage)
   Wheel/keys snap section-by-section; right dots track position.
   Desktop (>=993px) uses the scroll-snap container; mobile = native scroll.
   =================================================================== */
(function () {
  "use strict";
  function init() {
    var wrap = document.getElementById("fpWrap");
    var dotsBox = document.getElementById("fpDots");
    if (!wrap || !dotsBox) return;

    var panels = Array.prototype.slice.call(wrap.querySelectorAll(".panel"));
    if (!panels.length) return;
    var current = -1;
    var mq = window.matchMedia("(min-width:993px)");

    /* build dots */
    dotsBox.innerHTML = panels.map(function (p, i) {
      return '<span data-i="' + i + '" role="button" aria-label="section ' + (i + 1) + '"></span>';
    }).join("");
    var dots = Array.prototype.slice.call(dotsBox.children);
    dots.forEach(function (d) {
      d.addEventListener("click", function () {
        panels[+d.getAttribute("data-i")].scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    function revealIn(panel) {
      panel.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    }

    function setActive(i) {
      if (i === current || i < 0 || i >= panels.length) return;
      current = i;
      dots.forEach(function (d, k) { d.classList.toggle("active", k === i); });
      var header = document.querySelector(".site-header");
      if (header) header.classList.toggle("over-hero", mq.matches);
      revealIn(panels[i]);
      panels.forEach(function (p, k) {
        if (k !== i) { var v = p.querySelector("video[data-globe]"); if (v && !v.paused) v.pause(); }
      });
    }

    /* determine active panel by which one holds the viewport vertical center
       (works whether the window or the fp-wrap is the scroller) */
    function updateActive() {
      var mid = window.innerHeight / 2;
      for (var i = 0; i < panels.length; i++) {
        var r = panels[i].getBoundingClientRect();
        if (r.top <= mid && r.bottom > mid) { setActive(i); return; }
      }
    }

    function onScroll() { updateActive(); }
    wrap.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    function apply() {
      var on = mq.matches;
      document.documentElement.classList.toggle("fp", on);
      document.body.classList.toggle("fp", on);
      var header = document.querySelector(".site-header");
      if (on && header) {
        header.classList.add("over-hero");
      } else if (window.DW && window.DW._updateHero) {
        window.DW._updateHero();
      }
      updateActive();
    }
    apply();
    if (mq.addEventListener) mq.addEventListener("change", apply);
    else if (mq.addListener) mq.addListener(apply);

    /* keyboard navigation (desktop fullpage) */
    window.addEventListener("keydown", function (e) {
      if (!mq.matches) return;
      var tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if ((e.key === "ArrowDown" || e.key === "PageDown") && current < panels.length - 1) {
        e.preventDefault(); panels[current + 1].scrollIntoView({ behavior: "smooth" });
      } else if ((e.key === "ArrowUp" || e.key === "PageUp") && current > 0) {
        e.preventDefault(); panels[current - 1].scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "Home") { e.preventDefault(); panels[0].scrollIntoView({ behavior: "smooth" }); }
      else if (e.key === "End") { e.preventDefault(); panels[panels.length - 1].scrollIntoView({ behavior: "smooth" }); }
    });

    /* initial */
    setActive(0);
    updateActive();
    setTimeout(updateActive, 150);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
