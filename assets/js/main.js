// Mobile nav toggle
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();

// Reveal-on-scroll
(function () {
  const els = document.querySelectorAll(".reveal");
  if (!els.length || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
})();

// Gallery filter
(function () {
  const buttons = document.querySelectorAll("[data-filter]");
  const items = document.querySelectorAll(".gallery-item, .ba");
  if (!buttons.length) return;
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      items.forEach((item) => {
        const show = f === "all" || item.dataset.category === f;
        item.style.display = show ? "" : "none";
      });
    });
  });
})();

// Header solidifies on scroll
(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

// Count-up stats when they scroll into view
(function () {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const run = (el) => {
    const target = parseFloat(el.dataset.count);
    if (reduce || !Number.isFinite(target)) { el.textContent = el.dataset.count; return; }
    const dur = 1200, t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toString();
      if (p < 1) requestAnimationFrame(tick); else el.textContent = el.dataset.count;
    };
    requestAnimationFrame(tick);
  };
  if (!("IntersectionObserver" in window)) { nums.forEach((n) => (n.textContent = n.dataset.count)); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.5 });
  nums.forEach((n) => io.observe(n));
})();

// Before/after finish sliders
(function () {
  document.querySelectorAll(".ba-range").forEach((range) => {
    const ba = range.closest(".ba");
    if (!ba) return;
    const sync = () => ba.style.setProperty("--pos", range.value + "%");
    range.addEventListener("input", sync);
    sync();
  });
})();

// Brand logo fallback — if logo.png isn't present, use the SVG placeholder
(function () {
  const fallback = "assets/img/logo-placeholder.svg";
  const swap = (img) => {
    if (img.src.endsWith(fallback)) return;
    img.src = fallback;
  };
  document.querySelectorAll(".brand-logo").forEach((img) => {
    if (img.complete && img.naturalWidth === 0) swap(img);
    else img.addEventListener("error", () => swap(img), { once: true });
  });
})();
