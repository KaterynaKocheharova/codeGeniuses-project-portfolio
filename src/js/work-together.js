import { sendInfo } from './API';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form-section');
const modal = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.close-btn');

form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();
  const user = {
    email: event.currentTarget.elements.email.value,
    comment: event.currentTarget.elements.comment.value,
  };

  try {
    const data = await sendInfo(user);
    openModal();
    form.reset();
  } catch (error) {
    iziToast.show({
      titleColor: 'rgba(250, 250, 250, 0.6)',
      titleLineHeight: '1.2',
      message:
        'Sorry. There is a problem with your request or server. Try editing your message',
      messageColor: 'rgba(250, 250, 250, 0.6)',
      backgroundColor: 'rgb(237, 59, 68)',
    });
  }
}

function openModal() {
  modal.classList.remove('hidden');
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', closeModalOnBackdrop);
  window.addEventListener('keydown', closeModalOnEscape);
}

function closeModal() {
  modal.classList.add('hidden');
  closeBtn.removeEventListener('click', closeModal);
  modal.removeEventListener('click', closeModalOnBackdrop);
  document.removeEventListener('keydown', closeModalOnEscape);
}

function closeModalOnBackdrop(event) {
  if (event.target === modal) {
    closeModal();
  }
}

function closeModalOnEscape(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

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
