import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/usersSlice';
import { v4 } from 'uuid';

export const useCreateUser = (ref, user, setShowModal) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const button = ref.current;
    const onClick = () => {
      dispatch(addUser({ id: v4(), name: user.login, avatar: user.avatar }));
      setShowModal();
    };
    button.addEventListener('click', onClick);
    return () => {
      button.removeEventListener('click', onClick);
    };
  });
};
