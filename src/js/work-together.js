import { sendInfo } from './API';
import { showMessage } from './izitoast';

// ============================ VARIABLES
const workTogetherForm = document.querySelector('.work-together-form');
const workTogetherModal = document.querySelector('.work-together-backdrop');
const workTogetherCloseBtn = document.querySelector('.work-together-close-btn');

// ============================ FORM POST REQUEST
async function onFormSubmit(event) {
  event.preventDefault();
  const user = {
    email: event.currentTarget.elements.email.value,
    comment: event.currentTarget.elements.comment.value,
  };
  try {
    const data = await sendInfo(user);
    openModal();
    workTogetherForm.reset();
  } catch (error) {
    showMessage(
      'You might have filled in the inputs incorrectly. Or try again later.'
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

// =========================== FORM VALIDATION
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
