import { useEffect, useState } from 'react';
import { socket } from '../helpers/createSocket';

export const usePopup = () => {
  const [popup, setPopup] = useState([]);
  useEffect(() => {
    socket.on('connected', (data) => {
      setPopup([...popup, { name: data, type: 'connect' }]);
    });
  });
  useEffect(() => {
    socket.on('leave', (data) => {
      console.log(popup);
      setPopup([...popup, { name: data, type: 'disconnect' }]);
      console.log('disc');
    });
  });
  return { popup, setPopup };
};
