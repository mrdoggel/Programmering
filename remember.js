document.addEventListener("DOMContentLoaded", function(event) { 
    switch(localStorage.getItem("side")) {
    case "hjem":
      setHjem();
      break;
    case "bestilling":
      setBestilling();
      break;
    case "prosjekter":
      setProsjekter();
      break;
    case "kontakt":
      setKontakt();
      break;
  }
   var scrollpos = localStorage.getItem("scrollpos");
   if (scrollpos) window.scrollTo(0, scrollpos);
 });

window.onbeforeunload = function(e) {
    localStorage.setItem("scrollpos", window.scrollY);
};