import { getReviews } from './API';
import modalWindow from './modal-window';
const form = document.querySelector('.form-section');
const emailInput = document.querySelector('input[name="email"]');
const commentInput = document.querySelector('input[name="comment"]');
const success = document.querySelector('.success-text');
const error = document.querySelector('.error-text');
function showSuccess() {
  success.classList.remove('visually-hidden');
  error.classList.add('visually-hidden');
}
function showError() {
  success.classList.add('visually-hidden');
  error.classList.remove('visually-hidden');
}
function hideMessages() {
  success.classList.add('visually-hidden');
  error.classList.add('visually-hidden');
}
commentInput.addEventListener('click', () => {
  if (emailInput.validity.valid) {
    showSuccess();
  } else {
    showError();
  }
});
function clearInputClassesAndText() {
  emailInput.classList.remove('success');
  emailInput.classList.remove('error');
  hideMessages();
}
emailInput.addEventListener('click', () => {
  hideMessages();
});
emailInput.addEventListener('input', function () {
  if (this.validity.valid) {
    this.classList.remove('error');
    this.classList.add('success');
  } else {
    this.classList.remove('success');
    this.classList.add('error');
  }
});
form.addEventListener('submit', async event => {
  event.preventDefault();
  const { email, comment } = event.target.elements;
  try {
    const response = await getReviews(email.value, comment.value);
    console.log(response);
    if (response) {
      modalWindow.render(response.title, response.message);
      modalWindow.open();
      clearInputClassesAndText();
      form.reset();
    }
  } catch (error) {
    console.error('Error submitting request:', error);
    clearInputClassesAndText();
    form.reset();
  }
});
modalWindow.bindEvents();
