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

  nav?.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("nav--open"));
  });
});
