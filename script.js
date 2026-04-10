function openService(type) {
  const modal = document.getElementById("serviceModal");
  modal.style.display = "block";

  if(type==="whatsapp"){
    document.getElementById("serviceTitle").innerText="WhatsApp Marketing";
    document.getElementById("serviceDesc").innerText="Promote your business using bulk WhatsApp messages.";
  }

  if(type==="seo"){
    document.getElementById("serviceTitle").innerText="SEO Optimization";
    document.getElementById("serviceDesc").innerText="Rank your website on Google and get organic traffic.";
  }

  if(type==="ads"){
    document.getElementById("serviceTitle").innerText="Google Ads";
    document.getElementById("serviceDesc").innerText="Run paid ads and generate instant leads.";
  }
}

function closeModal(){
  document.getElementById("serviceModal").style.display="none";
}

function buyNow(){
  alert("Contact us on WhatsApp to complete purchase!");
}
