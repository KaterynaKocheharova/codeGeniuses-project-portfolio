import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordions = Array.from(
  document.querySelectorAll('.accordion-container')
);

new Accordion(accordions, {
  duration: 600,
  showMultiple: false,
  openOnInit: [0],
});

import SwiperAbout from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';

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
      //   slidesOffsetBefore: 200,
      //   loopAdditionalSlides: 6,
      //   slidesOffsetAfter: 100,
      //   slidesOffsetBefore: 100,
      //   centerInsufficientSlides: true,
      //   centeredSlides: true,
      //   centeredSlidesBounds: true,
    },
  },

  navigation: {
    nextEl: '.about-me-swiper-btn-next',
  },

  //   remove: {
  //     init: function () {
  //       document
  //         .querySelector('.swiper-button-next')
  //         .classList.remove('swiper-button-lock');
  //     },
  //   },
};

const aboutMeSwiper = new SwiperAbout('.about-me-swiper-container', parametrs);

aboutMeSwiper.on('slideChange', function () {
  console.log('Real index of currently active slide:', aboutMeSwiper.realIndex);
});
