// Simple animation on scroll
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (top < screen - 100) {
      sec.classList.add("show");
    }
  });
});
