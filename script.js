// Highlight the current section's nav link (the boxed outline in the design)
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) =>
          l.classList.toggle("active", l.dataset.section === entry.target.id)
        );
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => observer.observe(s));

// Mobile menu
const navbar = document.querySelector(".navbar");
document.querySelector(".nav-toggle").addEventListener("click", () => {
  navbar.classList.toggle("open");
});
links.forEach((l) =>
  l.addEventListener("click", () => navbar.classList.remove("open"))
);
