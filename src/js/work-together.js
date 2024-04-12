import { apiPost, apiGet } from './api';
import { openModal, closeModal } from './modal-window';

const form = document.querySelector('.form-section');

form.addEventListener('submit', handleSubmitForm);

async function handleSubmitForm(event) {
  event.preventDefault();

  const { email, number } = event.target.elements;
  console.log(email.value);
  console.log(number.value);

  try {
    const response = await apiPost(email.value, number.value);
    console.log(response);
    if (response) {
      openModal();
      form.reset();
    }
  } catch (error) {
    console.error('Error submitting request:', error);
    form.reset();
  }
}
