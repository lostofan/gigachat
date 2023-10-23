import React from 'react';
import style from './User.module.scss';

export const User = () => {
  return (
    <li className={style.root}>
      <img
        className={style.avatar}
        src="https://api.multiavatar.com/Любимый Ковбой.png?apikey=xC6uEZzUY4r1nJ"
        alt="avatar"></img>
      <span className={style.name}>Любимый Ковбой</span>
    </li>
  );
};
