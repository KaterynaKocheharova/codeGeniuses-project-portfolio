import { getReviews } from './API';

const reviewsList = document.querySelector('.reviews-list');

async function onCreateReview() {
  const reviews = await getReviews();
  const reviewsMarkup = reviewsTemplate(reviews);
  reviewsList.insertAdjacentHTML('afterbegin', reviewsMarkup);
}

onCreateReview();

function reviewsTemplate(arr) {
  return arr.map(reviewTemplate).join('');
}

function reviewTemplate({ _id, author, avatar_url, review }) {
  return `
      <li class="reviews-item" id="${_id}">
        <img
          class="reviews-image"
          src="${avatar_url}"
          alt="reviewer's avatar"
          width="48"
          height="48"
        />
        <h3 class="section-subtitle reviews-subtitle">${author}</h3>
        <p class="section-text reviews-text">
          Work with was extraordinary! He turned out to be a very competent and
          responsible specialist. The projects were completed on time and the
          result exceeded my expectations
        </p>
      </li>
  `;
}
