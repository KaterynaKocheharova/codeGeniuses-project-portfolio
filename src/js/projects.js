import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

let params = {
    modules: [Navigation, Mousewheel, Keyboard],

    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: false,
    centeredSlides: true,
    direction: 'horizontal',
    mousewheel: true,
    keyboard: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-unique-prev',
    },
}
const swiper = new Swiper('.swiper-container', params);