import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk, getUserThunk } from './authThunks.js';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        localStorage.setItem('token', payload.token);
      })
      .addCase(loginThunk.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })
      .addCase(registerThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        localStorage.setItem('token', payload.token);
      })
      .addCase(registerThunk.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })
      .addCase(getUserThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
      })
      .addCase(getUserThunk.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
