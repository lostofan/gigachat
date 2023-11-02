import React from 'react';
import style from './Popup.module.scss';

export const Popup = ({ name, type, setPopup, popup, idx }) => {
  return (
    <div className={`${style.root} ${style[type]}`}>
      <button
        className={style.closeBtn}
        onClick={() => setPopup(popup.filter((_, index) => index !== idx))}></button>
      <span className={style.message}>
        {name} {type === 'connect' ? 'подключился' : type === 'disconnect' ? 'отключился' : ''}
      </span>
    </div>
  );
};
