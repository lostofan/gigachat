import { useSelector } from 'react-redux';
import { selectMessages } from '../redux/slices/messagesSlice';

export const useMessages = () => {
  const messages = useSelector(selectMessages);
  return messages;
};
