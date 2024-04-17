const headerBurger = document.querySelector('.header-burger');
const modalMenu = document.querySelector('.modal-menu');
const closeBtn = document.querySelector('.close-btn-menu');
const dropdownMenu = document.getElementById('menu');
const mobMenuLink = document.querySelectorAll('.modal-mob-menu-link');
const mobMenuBtn = document.querySelector('.mob-menu-button-order');
const dropdownBoxes = document.querySelectorAll('.dropdown-box');
const dropdownItem = document.querySelectorAll('.dropdown-item');
const dropdownBtn = document.querySelector('.dropdown-btn-menu');
const body = document.querySelector('body');

// ======================= OPEN MODAL

headerBurger.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();
  modalMenu.classList.add('is-open');
  body.classList.add('modal-is-open');
}

// ======================= CLOSE MODAL

closeBtn.addEventListener('click', closeModal);

mobMenuLink.forEach(elem => {
  elem.addEventListener('click', linksCloseModal);
});

mobMenuBtn.addEventListener('click', linksCloseModal);

function closeModal(e) {
  e.preventDefault();
  modalMenu.classList.remove('is-open');
  body.classList.remove('modal-is-open');
}

function linksCloseModal(e) {
  modalMenu.classList.remove('is-open');
  body.classList.remove('modal-is-open');
}

// ====================== DROPDOWN

dropdownBtn.addEventListener('click', e => {
  e.preventDefault();
  dropdownMenu.classList.toggle('show');
});

dropdownBtn.addEventListener('click', () => {
  dropdownBoxes.forEach(box => {
    box.classList.add('pointer-auto');
  });
});

dropdownItem.forEach(item =>
  item.addEventListener('click', () => {
    dropdownMenu.classList.remove('show', 'pointer-auto');
  })
);
