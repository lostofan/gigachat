import { createSlice } from '@reduxjs/toolkit';
//user = {id: number, name: string, avatar: string}
const initialState = {
  user: {},
  userList: [],
};
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.user.id = action.payload.id;
      state.user.name = action.payload.name;
      state.user.avatar = action.payload.avatar;
    },
    updateUsers(state, action) {
      state.userList = action.payload;
    },
  },
});

export const selectUsers = (state) => state.users.userList;
export const selectUser = (state) => state.users.user;
export const { addUser, updateUsers } = usersSlice.actions;
export default usersSlice.reducer;
