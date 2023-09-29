import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {
  authUser,
  fetchCurrentUser,
  logInUser,
  logOutUser,
  updateUserData,
  updateBodyParts,
} from './operation';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
    dailyTime: null,
    dailyСalories: null,
    bodyParameters: {},
  },

  error: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const replaceUserState = (state, payload) => {
  state.user.name = payload.name;
  state.user.email = payload.email;
  state.user.avatarURL = payload.avatarURL;
  state.user.dailyTime = payload.dailyTime;
  state.user.dailyСalories = payload.dailyСalories;
  state.user.bodyParameters = { ...payload.bodyParameters };
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authUser.pending, state => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(authUser.rejected, (state, { payload }) => {
      state.error = payload;
      Notify.failure(payload);
      state.isLoading = false;
    });

    builder.addCase(updateBodyParts.fulfilled, (state, { payload }) => {
      replaceUserState(state, payload);
    });

    builder.addCase(logInUser.fulfilled, (state, { payload }) => {
      replaceUserState(state, payload);
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      Notify.failure(
        'Oops... Something went wrong! Enter correct email or password',
      );
    });
    builder.addCase(logInUser.pending, state => {
      state.error = null;
      state.isLoading = true;
    });

    builder.addCase(logOutUser.fulfilled, state => {
      state.user.name = null;
      state.user.email = null;
      state.user.avatarURL = null;
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(logOutUser.rejected, (state, action) => {
      state.error = action.payload;
      state.user.name = null;
      state.user.email = null;
      state.user.avatarURL = null;

      state.token = null;
      state.isLoggedIn = false;
    });

    builder.addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
      replaceUserState(state, payload);
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isRefreshing = false;
      Loading.remove();
    });
    builder.addCase(fetchCurrentUser.rejected, state => {
      state.isRefreshing = false;
      Loading.remove();
    });
    builder.addCase(fetchCurrentUser.pending, state => {
      state.isRefreshing = true;
      Loading.standard({
        svgColor: '#E6533C',
        backgroundColor: '#040404',
      });
    });

    //Update user data
    builder.addCase(updateUserData.pending, state => {
      Loading.standard({ svgColor: '#E6533C' });
    });
    builder.addCase(updateUserData.fulfilled, (state, { payload }) => {
      replaceUserState(state, payload);
      state.error = null;
      Loading.remove();
      Notify.success('Your details have been successfully updated');
    });
    builder.addCase(updateUserData.rejected, (state, action) => {
      state.error = action.payload;
      Loading.remove();
    });
  },
});
