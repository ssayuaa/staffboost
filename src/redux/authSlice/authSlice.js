import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: JSON.parse(localStorage.getItem('auth')),
  },
  reducers: {
    setAuth(state, { payload }) {
      state.auth = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, setIsRemember } = authSlice.actions;

export default authSlice.reducer;
