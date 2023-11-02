import { useEffect, useState } from 'react';
import { socket } from '../helpers/createSocket';

export const usePopup = () => {
  const [popup, setPopup] = useState([]);
  useEffect(() => {
    setPopup([...popup, { name: 'Сервер загружается...(20-40 сек)', type: 'server' }]);
  }, []);
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
