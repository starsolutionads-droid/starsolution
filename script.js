function toggle(btn){
  let content = btn.nextElementSibling;

  if(content.style.display === "block"){
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
