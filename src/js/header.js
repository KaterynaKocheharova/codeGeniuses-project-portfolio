const socialLink = document.querySelector('.social-link');
const modalMenu = document.querySelector('.modal-menu');

const closeBtn = document.querySelector('.close-btn');
const dropdownBtn = document.querySelector('.dropdown-btn-menu');
const dropdownMenu = document.getElementById('menu');
const mobMenuText = document.querySelectorAll('.mob-menu-text');
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
const mobMenuBtn = document.querySelector('.mob-menu-button-order');

socialLink.addEventListener('click', e => {
  e.preventDefault();
  modalMenu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  modalMenu.classList.remove('is-open');
});

dropdownBtn.addEventListener('click', e => {
  e.preventDefault();
  dropdownMenu.classList.toggle('show');
});

mobMenuText.forEach(elem => {
  elem.addEventListener('click', () => {
    modalMenu.classList.remove('is-open');
  });
});

mobMenuBtn.addEventListener('click', () => {
  modalMenu.classList.remove('is-open');
});
