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

// Click action (for demo)
document.querySelectorAll('.sub').forEach(item => {
  item.addEventListener('click', function(e){
    e.preventDefault();
    alert("You selected: " + this.innerText);
  });
});
