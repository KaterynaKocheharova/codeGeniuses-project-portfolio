import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

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
