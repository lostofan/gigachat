import React from 'react';
import { Link } from 'react-router-dom';
import style from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.root}>
        <h1 className={style.heading}>Добро пожаловать в GIGACHAT!</h1>
        <button className={style.button}>
          <Link to="/chat" className={style.link}>
            ВОЙТИ В ЧАТ
          </Link>
        </button>
      </div>
    </div>
  );
};
