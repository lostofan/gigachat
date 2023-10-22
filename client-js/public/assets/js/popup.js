export const createPopup = (message, type) => {
  const container = document.querySelector('.popups');
  const popup = document.createElement('div');
  popup.className = 'popup';
  const closeBtn = document.createElement('button');
  closeBtn.className = 'popup__close';
  closeBtn.addEventListener('click', closePopup);
  const text = document.createElement('span');
  if (type === 'connect') {
    text.className = 'popup__message popup__message_connect';
  } else {
    text.className = 'popup__message popup__message_disconnect';
  }
  text.innerHTML = message;
  popup.appendChild(closeBtn);
  popup.appendChild(text);
  container.appendChild(popup);
};
function closePopup() {
  this.parentNode.remove();
}
