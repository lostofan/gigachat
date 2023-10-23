import { getImage } from './getImage.js';
import { login } from '../modal.js';
const messages = document.getElementById('messages');
const chatWindow = document.getElementById('chatWindow');

export const createMessage = async (data) => {
  messages.innerHTML = '';
  data.messages.map(async (elem) => {
    let item = document.createElement('li');
    let avatar = document.createElement('img');
    let username = document.createElement('span');
    avatar.className = 'chat__avatar avatar';
    avatar.src = elem.avatar;
    if (login === elem.user) {
      item.classList.add('chat__message_my');
    }
    item.classList.add('chat__message');
    username.classList.add('chat__username');
    username.innerHTML = elem.user + ': ';
    item.appendChild(avatar);
    item.appendChild(username);
    messages.appendChild(item);
    let message;
    switch (elem.type) {
      case 'text':
        message = document.createElement('p');
        message.innerHTML = elem.message;
        break;
      case 'image':
        message = await getImage(elem.image);
        break;
    }
    item.appendChild(message);
    chatWindow.scrollTo(0, chatWindow.scrollHeight);
  });
};
