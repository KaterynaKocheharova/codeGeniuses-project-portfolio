import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getReviews } from './API';

import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const reviewsList = document.querySelector('.reviews-swiper-wrapper');
const reviewsSwiperContainer = document.querySelector(
  '.reviews-swiper-container'
);

const swiperBtns = `
    <div class="btns-wrapper">
        <div class="custom-swiper-btn-prev">
            <svg class="swiper-btn-prev-icon" width="32" height="32">
                <use href="./img/sprite.svg#icon-slider-arrow-left"></use>
            </svg>
        </div>
        <div class="custom-swiper-btn-next">
            <svg class="swiper-btn-next-icon" width="32" height="32">
                <use href="./img/sprite.svg#icon-slider-arrow-right"></use>
            </svg>
        </div>
    </div>
</div>`;

onCreateReview();
async function onCreateReview() {
  try {
    const reviews = await getReviews();
    const reviewsMarkup = reviewsTemplate(reviews);
    reviewsList.insertAdjacentHTML('afterbegin', reviewsMarkup);
    reviewsSwiperContainer.insertAdjacentHTML('beforeend', swiperBtns);
    initSwiper();
  } catch (error) {
    iziToast.show({
      titleLineHeight: '1.2',
      message: 'Sorry. You cannot see reviews right now',
      messageSize: '50px',
      messageColor: '#ed3b44',
      backgroundColor: 'black',
      position: 'topRight',
      closeOnClick: true,
    });
    reviewsList.insertAdjacentHTML('afterbegin', 'No reviews found');
  }
}

function reviewsTemplate(arr) {
  return arr.map(reviewTemplate).join('');
}

function reviewTemplate({ _id, author, avatar_url, review }) {
  return `
      <li class="swiper-slide reviews-item" id="${_id}">
        <img
          class="reviews-image"
          src="${avatar_url}"
          alt="reviewer's avatar"
          width="48"
          height="48"
        />
        <h3 class="section-subtitle reviews-subtitle">${author}</h3>
        <p class="section-text reviews-text">
          ${review}
        </p>
      </li>
  `;
}

function initSwiper() {
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
