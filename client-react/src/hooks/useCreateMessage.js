import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { v4 } from 'uuid';
import { addMessage } from '../redux/slices/messagesSlice';
import { selectUser } from '../redux/slices/usersSlice';
//{id: number, message:str, user: str, avatar: str, image: str, type: str}
export const useCreateMessage = (ref) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    const form = ref.current;
    const onSubmit = (e) => {
      if (user.name) {
        const message = e.target[1].value;
        e.preventDefault();
        dispatch(
          addMessage({
            id: v4(),
            message: message,
            user: user.name,
            avatar: user.avatar,
            image: '',
            type: 'text',
          }),
        );
        setInput('');
      }
    };
    form.addEventListener('submit', onSubmit);
  }, [user, ref, dispatch]);
  return { input, setInput };
};
