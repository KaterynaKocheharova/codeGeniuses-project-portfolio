import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import SwiperAbout from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';

// =============== ACCORDION

// ============== SWIPER

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

new SwiperAbout('.about-me-swiper-container', parametrs);
