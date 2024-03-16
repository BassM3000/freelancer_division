//////////////////////////////----------------------------Hide Hamburger and Navbar when scroll----------------------------//////////////////////////////

let prevScrollpos = window.scrollY;
window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-1000px";
    }
    prevScrollpos = currentScrollPos;
}
//////////////////////////////----------------------------Hamburger Navigation Show/hide----------------------------//////////////////////////////

$("#Navi").on("click", function() {
    let myLinks = document.getElementsByClassName("myLinks");
    let Navi = document.getElementById("Navi");

    if (Navi.click) {
        $(myLinks).toggleClass("active");
    }
});