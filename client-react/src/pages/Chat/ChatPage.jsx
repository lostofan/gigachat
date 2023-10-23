import React from 'react';
import styles from './ChatPage.module.scss';
import { Users } from '../../components/sections/Users/Users';
import { Chat } from '../../components/sections/Chat/Chat';

export const ChatPage = () => {
  return (
    <div className={styles.root}>
      <Users />
      <Chat />
    </div>
  );
};
