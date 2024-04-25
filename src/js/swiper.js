import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// ============================== ABOUT ME

let parametrs = {
  modules: [Navigation, Mousewheel, Keyboard],
  slidesPerView: 2,
  lazy: true,
  loop: true,
  centeredSlides: false,
  direction: 'horizontal',
  mousewheel: true,
  keyboard: true,
  spaceBetween: 0,
  initialSlide: 1,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },

  navigation: {
    nextEl: '.about-me-swiper-btn-next',
  },
};

new Swiper('.about-me-swiper-container', parametrs);

// ============================ PROJECTS

let params = {
  modules: [Navigation, Keyboard],

  slidesPerView: 'auto',
  spaceBetween: 100,
  loop: false,
  centeredSlides: true,
  direction: 'horizontal',
  mousewheel: true,
  keyboard: true,

  navigation: {
    nextEl: '.custom-swiper-btn-next',
    prevEl: '.custom-swiper-btn-prev',
  },
};

new Swiper('.swiper-container', params);

// ====================== REVIEWS

export function initSwiper() {
  let params = {
    modules: [Navigation, Keyboard],
    spaceBetween: 16,
    loop: false,
    direction: 'horizontal',
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },

    navigation: {
      nextEl: '.custom-swiper-btn-next',
      prevEl: '.custom-swiper-btn-prev',
    },
  };
  new Swiper('.reviews-swiper-container', params);
}
