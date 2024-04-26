import { initSwiper } from './swiper';
import { getReviews } from './API';
import { showMessage } from './izitoast';

// ===================== VARIABLES
const reviewsList = document.querySelector('.reviews-swiper-wrapper');

// ===================== GETTING REVIEWS FROM BACKEND
onCreateReview();
async function onCreateReview() {
  try {
    const reviews = await getReviews();
    const reviewsMarkup = reviewsTemplate(reviews);
    reviewsList.insertAdjacentHTML('afterbegin', reviewsMarkup);
    initSwiper();
  } catch (error) {
    showMessage(`Sorry. No reviews found now. The error: ${error}`);
    reviewsList.insertAdjacentHTML('afterbegin', 'No reviews found');
  }
}

// ==================== RENDERING REVIEWS
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
