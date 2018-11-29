function tombolBurger() {
    var burgerdiv = document.querySelector(".burger");
    var burgercontainer = document.querySelector(".burger-container")
    var sidenav = document.querySelector(".sidenav");
    var maincontainer = document.querySelector(".main");
    var overlaycontainer = document.querySelector(".overlay");

    burgerdiv.classList.toggle("active");
    burgercontainer.classList.toggle("burger-active");
    sidenav.classList.toggle("sidenav-active");
    maincontainer.classList.toggle("main-active");
    overlaycontainer.classList.toggle("overlay-active");
}