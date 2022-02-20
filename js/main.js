const swiper = new Swiper('.main-slider', {
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.main-slider__arrow',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }
    }
});

let burgerBtn = document.querySelector('.menu-burger');
let header = document.querySelector('.header');
let closeBtn = document.querySelector('.header__menu-close');

burgerBtn.addEventListener('click', () => {
    header.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    header.style.display = "none";
});