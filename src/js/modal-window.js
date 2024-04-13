const modalWindow = document.querySelector('.modal-window');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.close-btn');
const titleElement = document.querySelector('.modal-title');
const textElement = document.querySelector('.modal-paragraf');

class ModalWindow {
  open() {
    modalWindow.classList.remove('hidden');
    backdrop.classList.remove('hidden');
  }

  close() {
    modalWindow.classList.add('hidden');
    backdrop.classList.add('hidden');
  }

  render(title, text) {
    titleElement.innerHTML = title;
    textElement.innerHTML = text;
  }

  bindEvents() {
    closeBtn.addEventListener('click', () => {
      this.close();
    });

    window.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        this.close();
      }
    });
  }
}

export default new ModalWindow();
