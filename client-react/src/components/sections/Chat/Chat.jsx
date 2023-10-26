import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import style from './Chat.module.scss';
import { ChatControl } from '../../ChatControl/ChatControl';

import { LoginModal } from '../../LoginModal/LoginModal';
import { useSelector } from 'react-redux';
import { selectMessages } from '../../../redux/slices/messagesSlice';
import { Message } from '../../Message/Message';

export const Chat = () => {
  const [showModal, setShowModal] = useState(true);
  const messages = useSelector(selectMessages);
  const ref = useRef(null);
  useEffect(() => {
    const chatWindow = ref.current;
    chatWindow.scrollTo(0, chatWindow.scrollHeight);
  }, [messages]);
  return (
    <>
      {showModal ? createPortal(<LoginModal setShowModal={setShowModal} />, document.body) : false}

      <section className={style.wrapper}>
        <div className={style.root} ref={ref}>
          <ul className={style.messages}>
            {messages.map((elem) => {
              return (
                <Message
                  key={elem.id}
                  id={elem.id}
                  avatar={elem.avatar}
                  user={elem.user}
                  message={elem.message}
                />
              );
            })}
          </ul>
        </div>
        <ChatControl />
      </section>
    </>
  );
};
