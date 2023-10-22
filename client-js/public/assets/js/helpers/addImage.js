import { socket } from '../chat.js';

const toBase64 = () => {
  const input = document.querySelector('.attach__input');

  input.addEventListener('change', function () {
    const file = input.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result;
      socket.emit('get image', base64String);
    };
    this.value = '';
  });
};

toBase64();
