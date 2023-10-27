import { updateUsers } from '../slices/usersSlice';
import { updateMessages } from '../slices/messagesSlice';
import { socket } from '../../helpers/createSocket';

export const socketMiddleware = (store) => (next) => (action) => {
  if (action.type === 'users/addUser') {
    socket.emit('login', {
      id: action.payload.id,
      name: action.payload.name,
      avatar: action.payload.avatar,
    });
    socket.on('update online', (data) => {
      store.dispatch(updateUsers(data));
    });
    socket.on('update messages', (data) => {
      store.dispatch(updateMessages(data));
    });
  }
  if (action.type === 'messages/addMessage') {
    socket.emit('chat message', {
      id: action.payload.id,
      message: action.payload.message,
      user: action.payload.user,
      avatar: action.payload.avatar,
      image: action.payload.image,
      type: action.payload.type,
    });
  }

  return next(action);
};
