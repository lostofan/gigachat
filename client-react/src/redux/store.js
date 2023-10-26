import { configureStore } from '@reduxjs/toolkit';
import { socketMiddleware } from './middleware/socketMiddleware';
import usersSlice from './slices/usersSlice';
import messagesSlice from './slices/messagesSlice';

const store = configureStore({
  reducer: {
    users: usersSlice,
    messages: messagesSlice,
  },
  middleware: [socketMiddleware],
});
export default store;
