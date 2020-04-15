//mobile menu
const btnMenu = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.navigation-box');
btnMenu.addEventListener('click', function () {
   mobileMenu.classList.toggle('active')
});