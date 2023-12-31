import { avatar, login } from '../modal.js';
import { socket } from '../socketClient.js';

const toBase64 = () => {
  const input = document.querySelector('.attach__input');

  input.addEventListener('change', function () {
    const file = input.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result;
      socket.emit('chat message', {
        user: login,
        avatar: avatar,
        message: '',
        image: base64String,
      });
    };
    this.value = '';
  });
};

toBase64();
