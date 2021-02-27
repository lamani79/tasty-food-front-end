let body = document.querySelector('body');
let over_lay = document.querySelector('.over_lay');
// mobile nav bar show:
let nav_but = document.getElementById('nav_button');
let nav_bar = document.getElementById('main_nav');
let nav_but_conter = 0;

nav_but.addEventListener('click', show_mobile_nav);

function show_mobile_nav() {
    if (nav_but_conter === 0) {
        nav_bar.style.width = '50%';
        nav_but.style.right = 'calc(50% - 30px)';
        over_lay.style.visibility = 'visible';
        over_lay.style.opacity = 0.7;


        nav_but_conter = 1;
    } else {
        nav_but_conter = 0;
        reset_nav_width();
    }

};


// fix bug of resizing the window when mobile
// nav is open 
// this function hase a relation with show_mobile_nav()
let media = matchMedia("(min-width: 730px)");
media.addEventListener('change', reset_nav_width);
function reset_nav_width() {
    console.log(media.matches)
    if (media.matches == true) {
        nav_bar.style.width = '100%';
        console.log("if ok");
        over_lay.style.visibility = 'hidden';
        over_lay.style.opacity = 0;

    }
    else {
        nav_bar.style.width = '0%';
        nav_but.style.right = '10px';
        over_lay.style.visibility = 'hidden';
        over_lay.style.opacity = 0;
        console.log("else ok");

    }

}

// adding a shadow to nav bar when scrolling 
window.addEventListener('scroll', add_shadow_scroll);

function add_shadow_scroll() {
    scroll_position = window.scrollY;
    if (scroll_position === 0) {
        nav_bar.classList.remove('nav_bar_shadow')

    } else {
        nav_bar.classList.add('nav_bar_shadow');


    }
    console.log(scroll_position);
};

