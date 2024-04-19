//////////////////////////////----------------------------Hide Hamburger and Navbar when scroll----------------------------//////////////////////////////
/* 
let prevScrollpos = window.scrollY;
window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-20rem";
    }
    prevScrollpos = currentScrollPos;
}; */
//////////////////////////////----------------------------Hamburger Navigation Show/hide----------------------------//////////////////////////////

$("#HamburgerToggle").on("click", function() {
    let myLinks = document.getElementsByClassName("myLinks");
    let Navi = document.getElementById("HamburgerToggle");

    if (Navi.click) {
        $(myLinks).toggleClass("active");
    }
});