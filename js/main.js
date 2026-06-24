document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (header?.classList.contains("site-header--transparent")) {
    const onScroll = () => {
      if (window.scrollY > 60) {
        header.classList.remove("site-header--transparent");
        header.classList.add("site-header--solid");
      } else {
        header.classList.add("site-header--transparent");
        header.classList.remove("site-header--solid");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("nav--open");
    toggle.setAttribute("aria-expanded", open);
  });

  nav?.querySelectorAll(".nav-link, .nav-cta").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("nav--open"));
  });

  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }
});
