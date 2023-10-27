import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/slices/messagesSlice';
import { v4 } from 'uuid';
import { selectUser } from '../redux/slices/usersSlice';

export const useImage = (ref, setLoader) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const onChange = (e) => {
    const input = e.target;
    const file = input.files[0];
    if (file.size > 1e7) {
      alert('Файл должен быть меньше 10 мб');
      input.value = '';
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadstart = () => {
      setLoader(true);
    };
    reader.onloadend = () => {
      setLoader(false);
    };
    reader.onload = () => {
      dispatch(
        addMessage({
          id: v4(),
          message: '',
          user: user.name,
          avatar: user.avatar,
          image: reader.result,
        }),
      );
      input.value = '';
    };
  };
  useEffect(() => {
    const input = ref.current;
    if (user.name) {
      input.addEventListener('change', onChange);
    }
  });
};
