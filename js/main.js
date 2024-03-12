//////////////////////////////----------------------------Hide Navbar when scroll----------------------------//////////////////////////////

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