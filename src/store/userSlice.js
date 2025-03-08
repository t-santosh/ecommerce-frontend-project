import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isAuthenticated: false,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = {
        ...action.payload,
      }; // Store user data
      state.isAuthenticated = true; // User is authenticated
      state.token = action.payload.token;
    },
    logoutUser: (state) => {
      state.user = null; // Remove user data
      state.isAuthenticated = false; // User is logged out
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
