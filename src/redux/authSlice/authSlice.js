import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).filter(
      (item) => item.email === localStorage.getItem('activeEmail'),
    )[0]: null,
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
