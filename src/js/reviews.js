import { getReviews } from './API';
import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const reviewsList = document.querySelector('.reviews-list');

onCreateReview();
async function onCreateReview() {
  const reviews = await getReviews();
  const reviewsMarkup = reviewsTemplate(reviews);
  reviewsList.insertAdjacentHTML('afterbegin', reviewsMarkup);
  initSwiper();
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
    modules: [Navigation, Mousewheel, Keyboard],
    slidesPerView: 'auto',
    spaceBetween: 100,
    loop: false,
    centeredSlides: true,
    direction: 'horizontal',
    mousewheel: true,
    keyboard: true,

    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
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

  // const buttonsMarkup = `<div class="buttons-wrapper">
  //         <div class="custom-swiper-button-prev">
  //           <svg class="swiper-button-prev__icon" width="32" height="32">
  //             <use href="./img/sprite.svg#icon-slider-arrow-left"></use>
  //           </svg>
  //         </div>
  //         <div class="custom-swiper-button-next">
  //           <svg class="swiper-button-next__icon" width="32" height="32">
  //             <use href="./img/sprite.svg#icon-slider-arrow-right"></use>
  //           </svg>
  //         </div>
  //       </div>`;

  const reviewsSwiper = new Swiper('.swiper-container', params);
  // reviewsList.insertAdjacentHTML('afterend', buttonsMarkup);
}
