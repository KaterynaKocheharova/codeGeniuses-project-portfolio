import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getReviews } from './API';

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const reviewsList = document.querySelector('.reviews-swiper-wrapper');

onCreateReview();
async function onCreateReview() {
  try {
    const reviews = await getReviews();
    const reviewsMarkup = reviewsTemplate(reviews);
    reviewsList.insertAdjacentHTML('afterbegin', reviewsMarkup);
    initSwiper();
  } catch (error) {
    iziToast.show({
      titleLineHeight: '1.2',
      message: `Sorry. You cannot see reviews right now because of this error:${error}`,
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
          loading="lazy"
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
