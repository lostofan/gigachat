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
      setPopup([...popup, { name: data, type: 'disconnect' }]);
    });
  });
  return { popup, setPopup };
};
