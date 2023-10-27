import { useSelector } from 'react-redux';
import { selectUsers } from '../redux/slices/usersSlice';

export const useUsers = () => {
  const users = useSelector(selectUsers);
  return users;
};
