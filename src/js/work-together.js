import { sendInfo } from './API';
import { openModal } from './modal-window';
const form = document.querySelector('.form-section');
form.addEventListener('submit', handleSubmitForm);
async function handleSubmitForm(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.hemail;
  const comment = event.currentTarget.elements.comment;

  try {
    const response = await sendInfo({
      email: email.value,
      comment: comment.value,
    });
    console.log(response);
    if (response) {
      openModal();
      form.reset();
    }
  } catch (error) {
    console.error('Error submitting request:', error);
  }
  form.reset();
}
