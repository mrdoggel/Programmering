var hjem = document.getElementById("hjem");
var bestilling = document.getElementById("bestilling");
var prosjekter = document.getElementById("prosjekter");
var kontakt = document.getElementById("kontakt");
var hjem_knapp = document.getElementById("hjem_knapp");
var bestilling_knapp = document.getElementById("bestilling_knapp");
var prosjekter_knapp = document.getElementById("prosjekter_knapp");
var kontakt_knapp = document.getElementById("kontakt_knapp");
var top = document.getElementById("totop");

top.addEventListener("click", toTop);
function toTop(){
    window.scrollTo(0,0);
}

hjem_knapp.addEventListener("click", setHjem);
function setHjem(){
    localStorage.setItem("side", "hjem")
    if (!hjem_knapp.classList.contains("active")) {
        hjem_knapp.classList.add("active");
    }
    hjem.style.display = "flex";
    bestilling.style.display = "none";
    prosjekter.style.display = "none";
    kontakt.style.display = "none";
    bestilling_knapp.classList.remove("active");
    prosjekter_knapp.classList.remove("active");
    kontakt_knapp.classList.remove("active");
}

bestilling_knapp.addEventListener("click", setBestilling);
function setBestilling(){
    localStorage.setItem("side", "bestilling")
    if (!bestilling_knapp.classList.contains("active")) {
        bestilling_knapp.classList.add("active");
    }
    bestilling.style.display = "flex";
    hjem.style.display = "none";
    prosjekter.style.display = "none";
    kontakt.style.display = "none";
    hjem_knapp.classList.remove("active");
    prosjekter_knapp.classList.remove("active");
    kontakt_knapp.classList.remove("active");
}

prosjekter_knapp.addEventListener("click", setProsjekter);
function setProsjekter(){
    localStorage.setItem("side", "prosjekter")
    if (!prosjekter_knapp.classList.contains("active")) {
        prosjekter_knapp.classList.add("active");
    }
    prosjekter.style.display = "flex";
    hjem.style.display = "none";
    bestilling.style.display = "none";
    kontakt.style.display = "none";
    hjem_knapp.classList.remove("active");
    bestilling_knapp.classList.remove("active");
    kontakt_knapp.classList.remove("active");
}

kontakt_knapp.addEventListener("click", setKontakt);
function setKontakt(){
    localStorage.setItem("side", "kontakt")
    if (!kontakt_knapp.classList.contains("active")) {
        kontakt_knapp.classList.add("active");
    }
    kontakt.style.display = "flex";
    hjem.style.display = "none";
    bestilling.style.display = "none";
    prosjekter.style.display = "none";
    hjem_knapp.classList.remove("active");
    bestilling_knapp.classList.remove("active");
    prosjekter_knapp.classList.remove("active");
}

if (window.innerWidth > 780) {  
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};
    // Get the navbar
    var navbar = document.getElementById("navbar");
    var navbar_filler = document.getElementById("navbar_filler");
    // Get the offset position of the navbar
    var sticky = navbar.getBoundingClientRect().height;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("sidebar");
            navbar.classList.add("animated");
            navbar.classList.add("bounceInDown");
            navbar_filler.style.display = "flex";
        } if (window.pageYOffset <= sticky) {
            navbar_filler.style.display = "none";
            navbar.classList.remove("sidebar")
            navbar.classList.remove("animated");
            navbar.classList.remove("bounceInDown");
        }
    }
} else {
    var navbar = document.getElementById("navbar");
    navbar.classList.add("sidebar");
    navbar.getElementsByClassName("navigation_mobile")[0].style.display = "flex";
    navbar.getElementsByClassName("navigation_mobile")[0].addEventListener("click", function(){
        if (navbar.getElementsByClassName("navigation")[0].classList.contains("show")) {
            navbar.getElementsByClassName("navigation")[0].classList.remove("show");
            navbar.getElementsByClassName("navigation")[0].style.display = "none";
            navbar.getElementsByClassName("navigation_mobile")[0].firstElementChild.style.backgroundImage = "url('icon/menu.png')";
        } else {
            navbar.getElementsByClassName("navigation")[0].classList.add("show");
            navbar.getElementsByClassName("navigation")[0].style.display = "flex";
            navbar.getElementsByClassName("navigation_mobile")[0].firstElementChild.style.backgroundImage = "url('icon/cancel.png')";
        }
    });
}