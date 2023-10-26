import { createMessage } from './helpers/createMessage.js';
import { createPopup } from './popup.js';
import { updateOnline } from './helpers/updateOnline.js';
import { socket } from './socketClient.js';
import { avatar, login } from './modal.js';

const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', { user: login, message: input.value, avatar: avatar });
    input.value = '';
  }
});
socket.on('update online', (data) => {
  updateOnline(data);
});
socket.on('update messages', (data) => {
  createMessage(data);
});
socket.on('leave', (data) => {
  const message = data + ' вышел из чата';
  createPopup(message, 'disconnect');
});
socket.on('connected', (data) => {
  const message = data + ' подключился';
  createPopup(message, 'connect');
});
