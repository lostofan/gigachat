import React, { createContext, useState } from 'react';
import styles from './ChatPage.module.scss';
import { Users } from '../../components/sections/Users/Users';
import { Chat } from '../../components/sections/Chat/Chat';
export const BurgerContext = createContext(null);

export const ChatPage = () => {
  const [menuActive, setMenuActive] = useState(true);

  return (
    <BurgerContext.Provider value={{ menuActive, setMenuActive }}>
      <div className={styles.root}>
        <Users />
        <Chat />
      </div>
    </BurgerContext.Provider>
  );
};
