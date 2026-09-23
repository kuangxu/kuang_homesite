const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");

function closeMenu() {
  header?.classList.remove("is-menu-open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Open navigation");
}

menuButton?.addEventListener("click", () => {
  const open = header.classList.toggle("is-menu-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});

document.querySelectorAll(".site-nav a").forEach((link) => link.addEventListener("click", closeMenu));

const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 36);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealTargets = document.querySelectorAll(
  ".page-main h1, .page-main h2, .page-main .highlight-card, .page-main .featured-work-card",
);
revealTargets.forEach((element) => element.setAttribute("data-reveal", ""));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.05 });
  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}
