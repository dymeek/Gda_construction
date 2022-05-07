// Search panel
const searchIcon = document.querySelector('.search');
const searchDiv = document.querySelector('.nav_search');
const searchClose = document.querySelector('.search_close');

//Nav menu
const aboutPlus = document.querySelector('#about-plus');
const aboutMinus = document.querySelector('#about-minus');
const solutionPlus = document.querySelector('#solution-plus');
const solutionMinus = document.querySelector('#solution-minus');
const aboutMenu = document.querySelector('.about_menu');


//slider
const leftArrowBtn = document.querySelector('.left_arrow_btn');
const rightArrowBtn = document.querySelector('.right_arrow_btn');
const slider = document.querySelector('.slider_container');
const sliderOneText = document.querySelector('.slider_one');
const sliderTwoText = document.querySelector('.slider_two');
const sliderThreeText = document.querySelector('.slider_three');

//hamburger
const hamburgerBtn = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav_hamburger');
const mobileMenuClose = document.querySelector('.mobile_menu_close');
const mobileLogo = document.querySelector('.logo_mobile');
const logoMail = document.querySelector('.logo_mail');
const navNMobile = document.querySelector('.nav_mobile');


// search panel functions
const showSearchMenu = () => {
    searchDiv.style.display = "block";
    searchIcon.style.display = "none";
    searchClose.style.zIndex = "1";
    console.log('klok');
}

const closeSearchMenu = () => {
    searchDiv.style.display = "none";
    searchIcon.style.display = "block";
    searchClose.style.zIndex = "-1";
}

// Menu - rozwijane nawigacja
const openAboutMenu = () => {
    aboutPlus.style.color = "#51758c";
    aboutPlus.style.zIndex = "-1";
    aboutMinus.style.zIndex = '1';
    aboutMenu.style.display = "flex";
}

const closeAboutMenu = () => {
    aboutPlus.style.color = "#fff";
    aboutPlus.style.zIndex = "1";
    aboutMinus.style.zIndex = '-1';
    aboutMenu.style.display = "none";
}
const openSolutionMenu = () => {
    solutionPlus.style.color = "#51758c";
    solutionPlus.style.zIndex = "-1";
    solutionMinus.style.zIndex = '1';
}

const closeSolutionMenu = () => {
    solutionPlus.style.color = "#fff";
    solutionPlus.style.zIndex = "1";
    solutionMinus.style.zIndex = '-1';
}

//Hamburger
const openNavBar = () => {
    navBar.style.right = '0';
    mobileMenuClose.style.zIndex = '1';
    mobileLogo.style.display = "none";
    logoMail.classList.add('nav_mail');
    navNMobile.style.display = 'none';
}

const closeNavBar = () => {
    navBar.style.right = '-80%';
    mobileMenuClose.style.zIndex = '-1';
    mobileLogo.style.display = "block";
    logoMail.classList.remove('nav_mail');
    navNMobile.style.display = 'block';
}

/* Slider */

const sliderImages = ['../images_content/slider1.png', '../images_content/slider2.png', '../images_content/slider3.png'];

let counter = 0;
const nextSlide = () => {
    counter++;
    if (counter === 3) {
        counter = 0;
    }
    slider.style.backgroundImage = `url(${sliderImages[counter]})`
    sliderTextChange();
}

const prevSlide = () => {
    counter--;
    if (counter === -1) {
        counter = 2;
    }
    slider.style.backgroundImage = `url(${sliderImages[counter]})`
    sliderTextChange();
}
const sliderTextChange = () => {
    if (counter === 0) {
        sliderOneText.style.display = "block";
        sliderTwoText.style.display = "none";
        sliderThreeText.style.display = "none";
    } else if (counter === 1) {
        sliderOneText.style.display = "none";
        sliderTwoText.style.display = "block";
        sliderThreeText.style.display = "none";
    } else {
        sliderOneText.style.display = "none";
        sliderTwoText.style.display = "none";
        sliderThreeText.style.display = "block";
    }
}


const navMenu = document.querySelector('.nav_about');
const navAboutSubmenu = document.querySelector('.nav_about_submenu');
navMenu.addEventListener('mouseover', () => {
    navMenu.classList.add('menu');
    navAboutSubmenu.style.zIndex = '1';
});

navMenu.addEventListener('mouseout', () => {
    navMenu.classList.remove('menu');
    navAboutSubmenu.style.zIndex = '-1';
})

searchIcon.addEventListener('click', showSearchMenu);
searchClose.addEventListener('click', closeSearchMenu);
leftArrowBtn.addEventListener('click', prevSlide);
rightArrowBtn.addEventListener('click', nextSlide);
aboutPlus.addEventListener('click', openAboutMenu);
aboutMinus.addEventListener('click', closeAboutMenu);
solutionPlus.addEventListener('click', openSolutionMenu);
solutionMinus.addEventListener('click', closeSolutionMenu);
hamburgerBtn.addEventListener('click', openNavBar);
mobileMenuClose.addEventListener('click', closeNavBar);