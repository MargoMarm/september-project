import { createSlice } from '@reduxjs/toolkit';
import { authUser, fetchCurrentUser, logInUser, logOutUser } from './operation';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
  },
  error: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(authUser.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(authUser.pending, state => {
      state.isRefreshing = true;
    });

    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.avatarURL = action.payload.avatarURL;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(logInUser.pending, state => {
      state.isRefreshing = true;
    });

    builder.addCase(logOutUser.fulfilled, state => {
      state.user.name = null;
      state.user.email = null;
      state.user.avatarURL = null;
      state.token = null;
      state.isLoggedIn= false;
    });
    builder.addCase(logOutUser.rejected, (state, action) => {
      state.error = action.payload;
      state.user.name = null;
      state.user.email = null;
      state.user.avatarURL = null;
      state.token = null;
      state.isLoggedIn= false;
    });
    builder.addCase(logOutUser.pending, state => {
      state.isRefreshing = true;
    });

    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.avatarURL = action.payload.avatarURL;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(fetchCurrentUser.rejected, state => {
      state.isRefreshing = false;
    });
    builder.addCase(fetchCurrentUser.pending, state => {
      state.isRefreshing = true;
    });
  },
});
