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
  const items = document.querySelectorAll(".gallery-item");
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
