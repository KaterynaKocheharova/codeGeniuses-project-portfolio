import Swiper from 'swiper';
import {
    Navigation, Mousewheel, Keyboard
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

let params = {
    modules: [Navigation, Mousewheel, Keyboard,
    ],

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
    on: {
        init: function () {
            this.navigation.prevEl.setAttribute('data-swiper-button-disabled', 'true');
        },
        slideChange: function () {
            if (this.activeIndex === 0) {
                this.navigation.prevEl.setAttribute('data-swiper-button-disabled', 'true');
            } else {
                this.navigation.prevEl.removeAttribute('data-swiper-button-disabled');
            }
            if (this.activeIndex === this.slides.length - 1) {
                this.navigation.nextEl.setAttribute('data-swiper-button-disabled', 'true');
            } else {
                this.navigation.nextEl.removeAttribute('data-swiper-button-disabled');
            }
        },
    },
}
const swiper = new Swiper('.swiper-container', params);