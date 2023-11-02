import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/usersSlice';
import { v4 } from 'uuid';

export const useCreateUser = (user, setShowModal) => {
  const dispatch = useDispatch();
  const createUser = () => {
    dispatch(addUser({ id: v4(), name: user.login, avatar: user.avatar }));
    setShowModal();
  };
  return { createUser };
};
