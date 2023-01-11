'use strict';

// Форма заказа

const orderButtons = document.querySelectorAll('.order__btn');

orderButtons[0].classList.add('active');

orderButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    orderButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');
  })
})

// Слайдер секции Popular

const popularSlider = new Swiper('.popular-slider', {
  spaceBetween: 16,
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.popular-slider__next-btn',
    prevEl: '.popular-slider__prev-btn'
  },
  breakpoints: {
    425: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4,
    },
    960: {
      slidesPerView: 5,
    }
  }
});

// Слайдер секции Search

const searchSlider = new Swiper('.search-slider', {
  spaceBetween: 34,
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.search-slider__next-btn',
    prevEl: '.search-slider__prev-btn'
  },
  breakpoints: {
    425: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4,
    },
    960: {
      slidesPerView: 6,
    }
  }
});

// Модальное окно

const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const menuCloseBtn = document.querySelector('.menu__close-btn');

menuBtn.addEventListener('click', () => {
  menu.classList.add('menu_active');
  document.body.style.overflow = 'hidden';
});

menu.addEventListener('click', e => {
  console.log(e.target)
  if (e.target === menu || e.target.classList.contains('menu__close-btn')) {
    menu.classList.remove('menu_active');
    document.body.style.overflow = '';
  }
})