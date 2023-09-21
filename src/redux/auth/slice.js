import { createSlice } from '@reduxjs/toolkit';
import {
  authUser,
  fetchCurrentUser,
  logInUser,
  logOutUser,
  updateUserData,
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

    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.avatarURL = action.payload.avatarURL;
      state.token = action.payload.token;
      state.user.dailyTime = action.payload.dailyTime;
      state.user.dailyСalories = action.payload.dailyСalories;
      state.user.bodyParameters = { ...action.payload.bodyParameters };

      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      state.error = action.payload;
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

    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.avatarURL = action.payload.avatarURL;
      state.token = action.payload.token;
      state.user.dailyTime = action.payload.dailyTime;
      state.user.dailyСalories = action.payload.dailyСalories;
      state.user.bodyParameters = { ...action.payload.bodyParameters };
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(fetchCurrentUser.rejected, state => {
      state.isRefreshing = false;
    });
    builder.addCase(fetchCurrentUser.pending, state => {
      state.isRefreshing = true;
    });

    //Update user data
    builder.addCase(updateUserData.fulfilled, (state, { payload }) => {
      console.log('fulfield', payload.name);
      state.user.name = payload.name;
      state.user.avatarURL = payload.avatarURL;
      state.user.dailyTime = payload.dailyTime;
      state.user.dailyСalories = payload.dailyСalories;
      state.bodyParameters = { ...payload.bodyParameters };
      state.error = null;
    });
    builder.addCase(updateUserData.rejected, (state, action) => {
      console.log('rejected', action);
      //state.error = action.payload;
    });
  },
});
