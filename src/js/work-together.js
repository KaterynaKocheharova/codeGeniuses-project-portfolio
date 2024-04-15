import { sendInfo } from './API';

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
      title: `@{error}`,
      titleColor: 'rgba(250, 250, 250, 0.6)',
      titleLineHeight: '1.2',
      message:
        'Sorry. There is a problem with your request. Edit your message please',
      messageColor: 'rgba(250, 250, 250, 0.6)',
      backgroundColor: 'rgb(237, 59, 68)',
    });
  }
}

function openModal() {
  modal.classList.remove('hidden');
}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.add('hidden');
}

// const inputFields = document.querySelector('.input-fields');

// inputFields.forEach(inputField => {
//   inputField.addEventListener('input', limitInput);
// });

// function limitInput(event) {
//   const maxLength = 20; // Set your desired maximum length
//   const input = event.target;

//   if (input.value.length > maxLength) {
//     input.value = input.value.substring(0, maxLength) + '...';
//   }
// }

// opening and closing modal
