import React from 'react';
import style from './Popups.module.scss';
import { Popup } from '../Popup/Popup';
import { usePopup } from '../../hooks/usePopup';

export const Popups = () => {
  const { popup, setPopup } = usePopup();
  return (
    <div className={style.root}>
      {popup.map((elem, idx) => (
        <Popup
          key={idx}
          name={elem.name}
          type={elem.type}
          setPopup={setPopup}
          popup={popup}
          idx={idx}
        />
      ))}
    </div>
  );
};
