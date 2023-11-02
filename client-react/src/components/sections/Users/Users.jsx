import React, { useContext } from 'react';
import style from './Users.module.scss';
import { User } from '../../User/User';
import { BurgerContext } from '../../../pages/Chat/ChatPage';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../../redux/slices/usersSlice';

export const Users = () => {
  const users = useSelector(selectUsers);
  const { menuActive } = useContext(BurgerContext);
  return (
    <section className={menuActive ? style.root : style.hidden}>
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
