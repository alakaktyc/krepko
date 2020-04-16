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
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(goToSlide,3500);
function goToSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide active';
}

for (let i = 0; i < slides.length; ++i) {
    slides[i].addEventListener('mouseenter', function () {
        clearInterval(slideInterval);
    });
    slides[i].addEventListener('mouseleave', function () {
        slideInterval = setInterval(goToSlide,3500);
    });
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

const btnControlsSlider = document.querySelectorAll('.main-slider__control li');
for (let i = 0; i < btnControlsSlider.length; ++i){
    btnControlsSlider[i].addEventListener('click', function () {
        if (btnControlsSlider[i].classList.contains('main-slider__control-right')) {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(goToSlide,3500);
        }
        if (btnControlsSlider[i].classList.contains('main-slider__control-left')) {
            clearInterval(slideInterval);
            prevSlide();
            slideInterval = setInterval(goToSlide,3500);
        }
    });
}
