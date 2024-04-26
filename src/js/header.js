// ===================== MOBILE MENU VARIABLES
const headerBurger = document.querySelector('.header-burger');
const modalMenu = document.querySelector('.modal-menu');
const closeMenuBtn = document.querySelector('.close-btn-menu');
const mobMenuLink = document.querySelectorAll('.modal-mob-menu-link');
const mobMenuOrderBtn = document.querySelector('.mob-menu-button-order');

// ====================== DROPDOWN VARIABLES
const dropdownMenu = document.getElementById('menu');
const dropdownBoxes = document.querySelectorAll('.dropdown-box');
const dropdownItem = document.querySelectorAll('.dropdown-item');
const dropdownBtn = document.querySelector('.dropdown-btn-menu');

// ======================= OPEN MODAL
function openModal(e) {
  e.preventDefault();
  modalMenu.classList.add('is-open');
  document.body.classList.add('modal-is-open');
}

headerBurger.addEventListener('click', openModal);

// ======================= CLOSE MODAL
function closeModal() {
  modalMenu.classList.remove('is-open');
  document.body.classList.remove('modal-is-open');
}

closeMenuBtn.addEventListener('click', closeModal);
mobMenuLink.forEach(elem => {
  elem.addEventListener('click', closeModal);
});
mobMenuOrderBtn.addEventListener('click', closeModal);

// ====================== DROPDOWN
function onDropdownBtnClick() {
  dropdownMenu.classList.toggle('show');
  dropdownBoxes.forEach(box => {
    box.classList.add('pointer-auto');
  });
  dropdownItem.forEach(item =>
    item.addEventListener('click', onDropdownItemClick)
  );
}

function onDropdownItemClick() {
  dropdownMenu.classList.remove('show', 'pointer-auto');
}

dropdownBtn.addEventListener('click', onDropdownBtnClick);
