function toggle(el){

  let ul = el.nextElementSibling;

  document.querySelectorAll('.service ul').forEach(list=>{
    if(list !== ul){
      list.style.display = "none";
    }
  });

  ul.style.display = ul.style.display === "block" ? "none" : "block";
}
