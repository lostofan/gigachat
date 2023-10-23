import { firstNames, secondNames } from './glossary.js';

function getRndName() {
  let firstNameIndex = Math.floor(Math.random() * firstNames.length);
  let secondNameIndex = Math.floor(Math.random() * secondNames.length);
  return `${firstNames[firstNameIndex]} ${secondNames[secondNameIndex]}`;
}
const rollName = () => {
  let login = getRndName();
  document.querySelector('.modal__nickname').innerHTML = login;
  rollAvatar(getAvatar(login));
};
export const getAvatar = (login) => {
  let src = `https://api.multiavatar.com/${login}.png?apikey=xC6uEZzUY4r1nJ`;
  return src;
};
const rollAvatar = (src) => {
  document.querySelector('.modal__avatar').src = src;
};
const dice = document.querySelector('.modal__dice');
dice.addEventListener('click', rollName);
rollName();
