const revealItems = document.querySelectorAll(".section, .hero-copy, .hero-panel");
const langButtons = document.querySelectorAll("[data-set-lang]");
const pageBody = document.body;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-set-lang");
    pageBody.setAttribute("data-lang", lang);

    langButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
  });
});
