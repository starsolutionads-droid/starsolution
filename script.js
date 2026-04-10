function showSection(id) {

  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
    sec.classList.add('hidden');
  });

  document.getElementById(id).classList.add('active');
}

function toggleService(element) {
  let details = element.nextElementSibling;

  if(details.style.display === "block"){
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
}
