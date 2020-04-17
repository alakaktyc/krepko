//mobile menu
const btnMenu = document.querySelector('.menu-btn');
btnMenu.addEventListener('click', function () {
    const mobileMenu = document.querySelector('.navigation-box');
    mobileMenu.classList.toggle('active')
});

//custom select phones
const btnDropPhones = document.querySelector('.phone-case__label');
btnDropPhones.addEventListener('click', function (event) {
    const phoneCaseSub = document.querySelector('.phone-case__sub');
    if (!event.target.classList.contains('phone-case__drop')) {
        phoneCaseSub.classList.remove('active')
    } else {
        phoneCaseSub.classList.toggle('active')
    }
});

//main slider
let slideIndex = 1;
let slideInterval = setInterval(showSlides, 3500);
const slides = document.querySelectorAll('.slide');
const blockControlSlides = document.querySelector('.main-slider__control');

function getListControls() {
    let listControls = [];
    for (let i = 1; i <= slides.length; i++) {
        let li = document.createElement('li');
        li.className = 'circle';
        listControls.push(li);
    }
    return listControls;
}

blockControlSlides.append(...getListControls());

const btnControlsSlider = document.querySelectorAll('.main-slider__control li');
for (let i = 0; i < btnControlsSlider.length; ++i) {
    btnControlsSlider[i].addEventListener('click', function () {
        clearInterval(slideInterval);
        currentSlide(slideIndex = i + 1);
        slideInterval = setInterval(showSlides, 3500);
    });
}

function showSlides(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].className = 'slide';
    }
    for (let i = 0; i < btnControlsSlider.length; i++) {
        btnControlsSlider[i].className = btnControlsSlider[i].className = 'circle';
    }
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].className = 'slide active';
    btnControlsSlider[slideIndex - 1].className = 'circle show';
    slideIndex++
}

for (let i = 0; i < slides.length; ++i) {
    slides[i].addEventListener('mouseenter', function () {
        clearInterval(slideInterval);
    });
    slides[i].addEventListener('mouseleave', function () {
        slideInterval = setInterval(showSlides, 3500);
    });
}


const getUseZone = document.querySelector('.main-slider');
let touchstartX = 0;
let touchendX = 0;
getUseZone.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

getUseZone.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
}, false);

function handleGesture() {
    if (touchendX <= touchstartX) {
        clearInterval(slideInterval);
        showSlides(slideIndex + 1);
        slideInterval = setInterval(showSlides, 3500);
    }
    if (touchendX >= touchstartX) {
        if (slideIndex === 2) {
            clearInterval(slideInterval);
            currentSlide(slides.length);
            slideInterval = setInterval(showSlides, 3500);
        } else  {
            clearInterval(slideInterval);
            currentSlide(slideIndex - 2);
            slideInterval = setInterval(showSlides, 3500);
        }
    }
}

showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}