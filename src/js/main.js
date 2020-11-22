new SlimSelect({
    select: '#single'
})

var buttonChangeTheme = document.querySelector(".change-theme");
var bodyBlock = document.querySelector("body");

buttonChangeTheme.addEventListener("click", function() {
    buttonChangeTheme.classList.toggle("change-theme--light")
    buttonChangeTheme.classList.toggle("change-theme--dark")
    bodyBlock.classList.toggle("page-light")
    bodyBlock.classList.toggle("page-dark")
})

var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");

hamburger.addEventListener("click", function() {
    this.classList.toggle("hamburger--open");
    this.classList.toggle("hamburger--close");
    menu.classList.toggle("menu--close");
})