function toggleService(el){

  document.querySelectorAll('.details').forEach(d=>{
    if(d !== el.nextElementSibling){
      d.style.display = "none";
    }
  });

  let box = el.nextElementSibling;

  box.style.display = box.style.display === "block" ? "none" : "block";
}
