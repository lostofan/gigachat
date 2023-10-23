import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import style from './Chat.module.scss';
import { ChatControl } from '../../ChatControl/ChatControl';
import { io } from 'socket.io-client';
import { LoginModal } from '../../LoginModal/LoginModal';

export const Chat = () => {
  const socket = io('http://localhost:3001');
  const [showModal, setShowModal] = useState(true);
  const [messages, setMessages] = useState([]);
  socket.on('chat message', (data) => {
    setMessages(data.messages);
  });
  //ПОФИКСИТЬ КЛЮЧИ
  return (
    <>
      {showModal ? createPortal(<LoginModal setShowModal={setShowModal} />, document.body) : false}

      <section className={style.wrapper}>
        <div className={style.root}>
          <ul className={style.messages}>
            {messages.map((elem, idx) => {
              return (
                <li key={idx} className={style.message}>
                  <img className={style.avatar} src={elem.avatar} alt="avatar" />
                  <span className={style.username}>{elem.user}</span>
                  <p className={style.message}>{elem.message}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <ChatControl socket={socket} />
      </section>
    </>
  );
};
