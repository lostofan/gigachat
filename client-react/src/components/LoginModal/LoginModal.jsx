import React, { useState } from 'react';
import style from './LoginModal.module.scss';
import dice from '../../assets/img/dice.svg';
import { rollUser } from '../../helpers/getLogin';
import { useCreateUser } from '../../hooks/useCreateUser';

export const LoginModal = ({ setShowModal }) => {
  const [user, setUser] = useState(rollUser());
  const { createUser } = useCreateUser(user, setShowModal);

  return (
    <div className={style.root}>
      <div className={style.content}>
        <span className={style.heading}>Выберите никнейм</span>
        <div className={style.control}>
          <img src={user.avatar} alt="" className={style.avatar} />
          <span className={style.nickname}>{user.login}</span>
          <img
            src={dice}
            alt="dice"
            className={style.dice}
            title="Сгенерировать имя"
            onClick={() => setUser(rollUser())}
          />
        </div>
        <button className={style.button} onClick={createUser}>
          Принять
        </button>
      </div>
    </div>
  );
};
