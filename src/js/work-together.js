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

  const data = await sendInfo(user);
  console.log(data);
  if (data) {
    openModal();
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
