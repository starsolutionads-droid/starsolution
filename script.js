function toggle(el){
  let list = el.nextElementSibling;

  document.querySelectorAll('.service ul').forEach(u=>{
    if(u !== list){
      u.style.display = "none";
    }
  });

  list.style.display = list.style.display === "block" ? "none" : "block";
}

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
