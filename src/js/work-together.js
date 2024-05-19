import { sendInfo } from './API';
import { showMessage } from './izitoast';

// =========================== MODAL VARIABLES
const workTogetherForm = document.querySelector('.work-together-form');
const workTogetherModal = document.querySelector('.work-together-backdrop');
const workTogetherCloseBtn = document.querySelector('.work-together-close-btn');

// =========================== FORM VALIDATION VARIABLES
const emailInput = document.querySelector('input[name="email"]');
const commentInput = document.querySelector('input[name="comment"]');
const success = document.querySelector('.success-text');
const error = document.querySelector('.error-text');

// ============================ FORM POST REQUEST
async function onFormSubmit(event) {
  event.preventDefault();
  const user = {
    email: event.currentTarget.elements.email.value,
    comment: event.currentTarget.elements.comment.value,
  };
  if (!user.email || !user.comment) {
    showMessage('All fields must be filled in ');
    return;
  }
  try {
    const data = await sendInfo(user);
    openModal();
    workTogetherForm.reset();
    hideMessages();
  } catch (error) {
    showMessage(
      'Oops. Something went wrong! You might have filled inputs incorrectly or there is an internet issue. Try again later '
    );
    console.error(error);
  }
}

workTogetherForm.addEventListener('submit', onFormSubmit);

// ========================== OPEN MODAL
function openModal() {
  workTogetherModal.classList.remove('hidden');
  document.body.classList.add('modal-is-open');
  workTogetherCloseBtn.addEventListener('click', closeModal);
  workTogetherModal.addEventListener('click', closeModalOnBackdrop);
  window.addEventListener('keydown', closeModalOnEscape);
}

// ========================= CLOSE MODAL
function closeModal() {
  workTogetherModal.classList.add('hidden');
  workTogetherModal.removeEventListener('click', closeModalOnBackdrop);
  document.body.classList.remove('modal-is-open');
  document.removeEventListener('keydown', closeModalOnEscape);
  workTogetherCloseBtn.removeEventListener('click', closeModal);
}

// ======================== CLOSE MODAL ON BACKDROP
function closeModalOnBackdrop(event) {
  if (event.target === workTogetherModal) {
    closeModal();
  }
}

// ======================== CLOSE MODAL ON ESCAPE
function closeModalOnEscape(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

// ======================= FORM VALIDATION FUNCTIONS
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

function displayEmailValidationMassage() {
  if (emailInput.validity.valid) {
    showSuccess();
  } else {
    showError();
  }
}

commentInput.addEventListener('click', displayEmailValidationMassage);
emailInput.addEventListener('click', hideMessages);
emailInput.addEventListener('input', displayEmailValidationMassage);
