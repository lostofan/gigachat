import React, { useContext } from 'react';
import style from './BurgerButton.module.scss';
import { BurgerContext } from '../../pages/Chat/ChatPage';

export const BurgerButton = () => {
  const { menuActive, setMenuActive } = useContext(BurgerContext);
  return (
    <div
      className={menuActive ? style.root : `${style.root} ${style.opened}`}
      onClick={() => setMenuActive(!menuActive)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
