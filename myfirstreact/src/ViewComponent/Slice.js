// src/slice.js
import { createSlice } from '@reduxjs/toolkit';

export const loggedSlice = createSlice({
  name: 'logged',
  initialState: {
    loggedIn: false,
    user: null, // Add user state
  },
  reducers: {
    login: (state, action) => {
      console.log("in login action");
      return {
        ...state,
        loggedIn: true,
        user: action.payload, // Store user info
      };
    },
    logout: (state) => {
      console.log("in logout action");
      return {
        loggedIn: false,
        user: null, // Clear user info on logout
      };
    },
  },
});

export const { login, logout } = loggedSlice.actions;
export default loggedSlice.reducer;
