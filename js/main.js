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