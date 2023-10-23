import React from 'react';
import style from './LoginModal.module.scss';
import dice from '../../assets/img/dice.svg';

export const LoginModal = ({ setShowModal }) => {
  return (
    <div className={style.root}>
      <div className={style.content}>
        <span className="heading">Выберите никнейм</span>
        <div className={style.control}>
          <img src="#" alt="" className="avatar" />
          <span className="nickname">Дикий стрелок</span>
          <img src={dice} alt="dice" className={style.dice} title="Сгенерировать имя" />
        </div>
        <button className={style.button} onClick={() => setShowModal()}>
          Принять
        </button>
      </div>
    </div>
  );
};
