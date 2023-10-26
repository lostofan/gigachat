import { createSlice } from '@reduxjs/toolkit';

//messsages={id: number, message:str, user: str, avatar: str, image: str, type: str}
const initialState = {
  ownMessages: [],
  messagesList: [],
};
const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage(state, action) {
      state.ownMessages.push(action.payload.id);
    },
    updateMessages(state, action) {
      state.messagesList = action.payload;
    },
  },
});

export const selectMessages = (state) => state.messages.messagesList;
export const selectOwnMessages = (state) => state.messages.ownMessages;
export const { addMessage, updateMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
