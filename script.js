console.log("Website Loaded");

// Scroll animation
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (top < screen - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});
