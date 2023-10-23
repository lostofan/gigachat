import React from 'react';
import style from './Users.module.scss';
import { User } from '../../User/User';

export const Users = () => {
  return (
    <section className={style.root}>
      <nav className={style.nav}>
        <span className={style.article}>Пользователи онлайн:</span>
      </nav>
      <ul id="user" className={style.list}>
        <User />
      </ul>
    </section>
  );
};
