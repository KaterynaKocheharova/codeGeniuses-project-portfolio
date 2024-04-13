const modalWindow = document.querySelector('.modal-window');
const backdrop = document.querySelector('.backdrop');

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
  backdrop.classList.add('hidden');
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

function openModal() {
  modalWindow.classList.remove('hidden');
  backdrop.classList.remove('hidden');
}

function closeModal() {
  modalWindow.classList.add('hidden');
  backdrop.classList.add('hidden');
}

export { openModal, closeModal };
