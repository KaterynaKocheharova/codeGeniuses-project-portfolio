import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showMessage(message) {
  iziToast.show({
    titleLineHeight: '1.2',
    message: message,
    messageSize: '50px',
    messageColor: '#ed3b44',
    backgroundColor: 'black',
    position: 'topRight',
    closeOnClick: true,
  });
}
