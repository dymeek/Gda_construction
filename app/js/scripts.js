// Search panel
const searchIcon = document.getElementById('search');
const searchDiv = document.querySelector('.nav_search');
const searchClose = document.getElementById('search_close');

//Nav menu
const aboutPlus = document.querySelector('#about-plus');
const aboutMinus = document.querySelector('#about-minus');
const solutionPlus = document.querySelector('#solution-plus');
const solutionMinus = document.querySelector('#solution-minus');
const aboutMenu = document.querySelector('.about_menu');
const solutionBtn = document.querySelector('.solution-btn');
const aboutBtn = document.querySelector('.about-btn');



//slider
const mobileLeftArrowBtn = document.getElementById('mobile-left-arrow');
const leftArrowBtn = document.getElementById('left-arrow');
const mobileRightArrowBtn = document.getElementById('mobile-right-arrow');
const rightArrowBtn = document.getElementById('right-arrow');
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
    searchDiv.style.display = "flex";
    searchIcon.style.display = "none";
    searchClose.style.display = "block";
    console.log('klik');
}

const closeSearchMenu = () => {
    searchDiv.style.display = "none";
    searchIcon.style.display = "block";
    searchClose.style.display = "none";
}

// Menu - rozwijane nawigacja
let isAboutMenuOpen = false;
let isSolutionMenuOpen = false;

const openAboutMenu = () => {
    aboutPlus.style.display = 'none';
    aboutMinus.style.display = 'block';
    aboutMenu.style.display = "flex";
    isAboutMenuOpen = true;
}

const closeAboutMenu = () => {
    aboutPlus.style.display = 'block';
    aboutMinus.style.display = 'none';
    aboutMenu.style.display = "none";
    isAboutMenuOpen = false;
}
const openSolutionMenu = () => {
    solutionPlus.style.display = "none";
    solutionMinus.style.display = 'block';
    isSolutionMenuOpen = true;
}

const closeSolutionMenu = () => {
    solutionPlus.style.display = "block";
    solutionMinus.style.display = 'none';
    isSolutionMenuOpen = false;
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
        sliderOneText.style.display = "flex";
        sliderTwoText.style.display = "none";
        sliderThreeText.style.display = "none";
    } else if (counter === 1) {
        sliderOneText.style.display = "none";
        sliderTwoText.style.display = "flex";
        sliderThreeText.style.display = "none";
    } else {
        sliderOneText.style.display = "none";
        sliderTwoText.style.display = "none";
        sliderThreeText.style.display = "flex";
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
mobileLeftArrowBtn.addEventListener('click', prevSlide);
mobileRightArrowBtn.addEventListener('click', nextSlide);
aboutPlus.addEventListener('click', openAboutMenu);
aboutMinus.addEventListener('click', closeAboutMenu);
solutionPlus.addEventListener('click', openSolutionMenu);
solutionMinus.addEventListener('click', closeSolutionMenu);
hamburgerBtn.addEventListener('click', openNavBar);
mobileMenuClose.addEventListener('click', closeNavBar);

solutionBtn.addEventListener('click', () => {
    if (isSolutionMenuOpen === false) {
        openSolutionMenu();
    } else {
        closeSolutionMenu();
    }
})

aboutBtn.addEventListener('click', () => {
    if (isAboutMenuOpen === false) {
        openAboutMenu();
    } else {
        closeAboutMenu();
    }
})