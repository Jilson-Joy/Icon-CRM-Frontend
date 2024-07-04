import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { userId: 1, username: 'user1', password: 'password1', user_email: 'user1@example.com', designation: 'Manager', mobile: '1234567890' },
    { userId: 2, username: 'user2', password: 'password2', user_email: 'user2@example.com', designation: 'Team Lead', mobile: '1234567890' },
    // Add more user objects as needed
  ],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    addUser(state, action) {
      state.users.push(action.payload);
    },
    removeUser(state, action) {
      state.users = state.users.filter(user => user.userId !== action.payload);
    },
  },
});

export const { setUsers, addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
