var select = new SlimSelect({
    select: '#select-innerHTML',
    valuesUseText: false, // Use text instead of innerHTML for selected values - default false
    data: [
        {innerHTML: '<a href="#" class="languages__link languages__link--ru"><span>Russian</span></a>', text: '', value: 'Russian'},
        {innerHTML: '<a href="#" class="languages__link languages__link--en"><span>English</span></a>', text: '', value: 'English'},
        {innerHTML: '<a href="#" class="languages__link languages__link--il"><span>עִבְרִית</span></a>', text: '', value: 'עִבְרִית'},
        {innerHTML: '<a href="#" class="languages__link languages__link--ar"><span>العربية</span></a>', text: '', value: 'العربية'}
    ]
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