//////////////////////////////----------------------------Hamburger Navigation Show/hide----------------------------//////////////////////////////

$("#HamburgerToggle").on("click", function() {
    let myLinks = document.getElementsByClassName("myLinks");
    let Navi = document.getElementById("HamburgerToggle");

    if (Navi.click) {
        $(myLinks).toggleClass("active");
    }
});