import React from 'react';
import style from './Message.module.scss';
import { useSelector } from 'react-redux';
import { selectOwnMessages } from '../../redux/slices/messagesSlice';
export const Message = ({ id, avatar, user, message, image }) => {
  const myMessage = useSelector(selectOwnMessages);
  return (
    <li className={`${style.root} ${myMessage.includes(id) ? style.myMessage : ''}`}>
      <img className={style.avatar} src={avatar} alt="avatar" />
      <span className={style.username}>{`${user}:`}</span>
      {!image ? (
        <p className={style.message}>{message}</p>
      ) : (
        <img src={image} className={style.attachment} alt="" />
      )}
    </li>
  );
};
