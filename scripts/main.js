$('.main-wrapper').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    prevArrow: document.querySelectorAll('.main-slider-btn-left'),
    nextArrow: document.querySelectorAll('.main-slider-btn-right'),    
});

let menuBurger = document.querySelector('.menu-burger');
let menuBurgerInner = document.querySelector('.menu-burger-inner');
menuBurger.addEventListener('click', () => {
    menuBurgerInner.classList.toggle('mobile-show');
})