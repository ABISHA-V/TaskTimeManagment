// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  // Add other user properties as needed
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      // Set other user properties as needed
    },
    clearUser: (state) => {
      state.firstName = '';
      state.lastName = '';
      // Clear other user properties as needed
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
