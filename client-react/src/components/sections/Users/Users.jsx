import React from 'react';
import style from './Users.module.scss';
import { User } from '../../User/User';
import { useUsers } from '../../../hooks/useUsers';

export const Users = () => {
  const users = useUsers();
  return (
    <section className={style.root}>
      <nav className={style.nav}>
        <span className={style.article}>Пользователи онлайн:</span>
      </nav>
      <ul className={style.list}>
        {users.map((user) => {
          return <User key={user.id} name={user.name} avatar={user.avatar} />;
        })}
      </ul>
    </section>
  );
};
