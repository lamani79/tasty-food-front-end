// box-shadow: 0 -5px 16px black;

let top_nav = document.querySelector("#nav_bar");
// shadow on nav bar when scroll
window.addEventListener('scroll', add_shadow_to_nav);
// these function is to add box-shadow to the nav hen scroling

function add_shadow_to_nav(event) {

    let scroll_position = window.scrollY;
    if (scroll_position > 0) {
        top_nav.style.boxShadow = "0 -5px 16px black";
    } else {
        top_nav.style.boxShadow = "";

    };

};
//###########################################
let nav_button = document.getElementById("nav_button");
let nav_bar_container = document.querySelector("#nav_bar .container");
let nav_conter = 0;
let nav_bar = document.getElementById('nav_bar');
nav_button.addEventListener('click', show_mobile_nav);

function show_mobile_nav() {
    if (nav_conter == 0) {
        nav_bar.style.height = 'auto'
        nav_bar_container.style.visibility = 'visible';
        nav_bar_container.style.opacity = '1';

        nav_conter = 1
    } else {
        nav_bar.style.height = '50px'
        nav_bar_container.style.visibility = 'hidden';
        nav_bar_container.style.opacity = '0';
        nav_conter = 0
    }
};