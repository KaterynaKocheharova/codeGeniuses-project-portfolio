import { getReviews } from './API';

import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

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
      title: `@{error}`,
      titleColor: 'rgba(250, 250, 250, 0.6)',
      titleLineHeight: '1.2',
      message: 'Sorry. There is an error with the request',
      messageColor: 'rgba(250, 250, 250, 0.6)',
      backgroundColor: 'rgb(237, 59, 68)',
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
  const breakpoints = {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  };

  let params = {
    modules: [Navigation, Mousewheel, Keyboard],
    spaceBetween: 16,
    loop: false,
    direction: 'horizontal',
    mousewheel: true,
    keyboard: true,
    breakpoints,

    navigation: {
      nextEl: '.custom-swiper-btn-next',
      prevEl: '.custom-swiper-btn-prev',
    },
    on: {
      init: function () {
        this.navigation.prevEl.setAttribute(
          'data-swiper-button-disabled',
          'true'
        );
      },
      slideChange: function () {
        if (this.activeIndex === 0) {
          this.navigation.prevEl.setAttribute(
            'data-swiper-button-disabled',
            'true'
          );
        } else {
          this.navigation.prevEl.removeAttribute('data-swiper-button-disabled');
        }
        if (this.activeIndex === this.slides.length - 1) {
          this.navigation.nextEl.setAttribute(
            'data-swiper-button-disabled',
            'true'
          );
        } else {
          this.navigation.nextEl.removeAttribute('data-swiper-button-disabled');
        }
      },
    },
  };
  const reviewsSwiper = new Swiper('.reviews-swiper-container', params);
}
