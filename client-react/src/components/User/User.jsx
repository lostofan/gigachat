import React from 'react';
import style from './User.module.scss';

export const User = ({ name, avatar }) => {
  return (
    <li className={style.root}>
      <img className={style.avatar} src={avatar} alt="avatar"></img>
      <span className={style.name}>{name}</span>
    </li>
  );
};
