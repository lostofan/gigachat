import { firstNames, secondNames } from './glossary.js';
import { getAvatar } from './getAvatar.js';

export const rollUser = () => {
  let login = getRndName();
  let avatar = getAvatar(login);
  return { login, avatar };
};

function getRndName() {
  let firstNameIndex = Math.floor(Math.random() * firstNames.length);
  let secondNameIndex = Math.floor(Math.random() * secondNames.length);
  return `${firstNames[firstNameIndex]} ${secondNames[secondNameIndex]}`;
}
