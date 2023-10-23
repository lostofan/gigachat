import { createMessage } from './helpers/createMessage.js';
import { createPopup } from './popup.js';
import { updateOnline } from './helpers/updateOnline.js';
import { socket } from './socketClient.js';

const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});
socket.on('update online', (data) => {
  updateOnline(data);
});
socket.on('chat message', (data) => {
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
