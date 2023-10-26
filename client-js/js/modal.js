import { getAvatar } from '../../client-react/src/helpers/getAvatar.js';
import { socket } from './socketClient.js';

export let login;
export let avatar;
async function createModal() {
  const body = document.body;

  const modal = document.createElement('div');
  modal.className = 'modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal__content';

  const modalHeading = document.createElement('span');
  modalHeading.className = 'modal__heading';
  modalHeading.innerHTML = 'Выберите никнейм';

  const modalControl = document.createElement('div');
  modalControl.className = 'modal__control';

  const modalAvatar = document.createElement('img');
  modalAvatar.className = 'modal__avatar';

  const modalNickname = document.createElement('span');
  modalNickname.className = 'modal__nickname';

  const modalDice = document.createElement('img');
  modalDice.className = 'modal__dice';
  modalDice.src = '../img/dice.svg';
  modalDice.title = 'Сгенерировать имя';

  const modalButton = document.createElement('button');
  modalButton.className = 'modal__button';
  modalButton.innerHTML = 'Принять';
  modalButton.onclick = closeModal;

  modalContent.appendChild(modalHeading);
  modalControl.appendChild(modalAvatar);
  modalControl.appendChild(modalNickname);
  modalControl.appendChild(modalDice);
  modalContent.appendChild(modalControl);
  modalContent.appendChild(modalButton);

  modal.appendChild(modalContent);
  body.appendChild(modal);
}
function closeModal() {
  login = document.querySelector('.modal__nickname').innerHTML;
  avatar = getAvatar(login);
  socket.emit('login', { name: login, avatar: avatar });
  document.querySelector('.modal').remove();
}
createModal();
