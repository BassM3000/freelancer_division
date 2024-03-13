//////////////////////////////----------------------------Hide Hamburger and Navbar when scroll----------------------------//////////////////////////////

let prevScrollpos = window.scrollY;
window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-400px";
    }
    prevScrollpos = currentScrollPos;
}
//////////////////////////////----------------------------Hamburger Navigation Show/hide----------------------------//////////////////////////////

let hamburger = document.getElementById('Navi');
let menu = document.getElementById('myLinks');
menu.style.display = "none";
hamburger.addEventListener('click', function () {

    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});