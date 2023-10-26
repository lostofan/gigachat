import { firstNames, secondNames } from './glossary.js';
import { getAvatar, rollAvatar } from './getAvatar.js';

function getRndName() {
  let firstNameIndex = Math.floor(Math.random() * firstNames.length);
  let secondNameIndex = Math.floor(Math.random() * secondNames.length);
  return `${firstNames[firstNameIndex]} ${secondNames[secondNameIndex]}`;
}
const rollUser = () => {
  let login = getRndName();
  document.querySelector('.modal__nickname').innerHTML = login;
  rollAvatar(getAvatar(login));
};
const dice = document.querySelector('.modal__dice');
dice.addEventListener('click', rollUser);
rollUser();
