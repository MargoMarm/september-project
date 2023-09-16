import { createSlice } from '@reduxjs/toolkit';
import { authUser, fetchCurrentUser, logIn, logOut } from './operation';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  error: null,
  token: null,
  isLogedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLogedIn = true;
      state.error = null;
    });
    builder.addCase(authUser.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLogedIn = true;
      state.error = null;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLogedIn = false;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isLogedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(fetchCurrentUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(fetchCurrentUser.rejected, state => {
      state.isRefreshing = false;
    });
  },
});
