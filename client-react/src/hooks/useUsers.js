import { useSelector } from 'react-redux';
import { selectUsers } from '../redux/slices/usersSlice';

const useUsers = () => {
  const users = useSelector(selectUsers);
  return users;
};
export default useUsers;
