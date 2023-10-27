import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import style from './Chat.module.scss';
import { ChatControl } from '../../ChatControl/ChatControl';
import { LoginModal } from '../../LoginModal/LoginModal';
import { Message } from '../../Message/Message';
import { Popups } from '../../Popups/Popups';
import { useMessages } from '../../../hooks/useMessages';

export const Chat = () => {
  const [showModal, setShowModal] = useState(true);
  const messages = useMessages();
  const ref = useRef(null);
  useEffect(() => {
    const chatWindow = ref.current;
    chatWindow.scrollTo(0, chatWindow.scrollHeight + 200);
  }, [messages]);

  return (
    <>
      {showModal ? createPortal(<LoginModal setShowModal={setShowModal} />, document.body) : false}
      {createPortal(<Popups />, document.body)}
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
                  image={elem?.image}
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
