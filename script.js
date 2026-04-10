console.log("Website Loaded");

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Toggle services
function toggleService(element) {

  document.querySelectorAll('.service-details').forEach(item => {
    if(item !== element.nextElementSibling){
      item.style.display = "none";
    }
  });

  let details = element.nextElementSibling;

  if (details.style.display === "block") {
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
}
