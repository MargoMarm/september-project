import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://power-pulse-rest-api.onrender.com';

const token = {
  set: token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const authUser = createAsyncThunk(
  'addUserStatus',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/users/register', user);
      console.log(data);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);

export const logInUser = createAsyncThunk(
  'logInStatus',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/users/login', user);
      console.log(data);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(
        'Oops... Something went wrong! Enter correct"email" and "password" or sign up, please',
      );
      return rejectWithValue(
        'Oops... Something went wrong! Enter correct"email" and "password", please',
      );
    }
  },
);

export const logOutUser = createAsyncThunk(
  'logOutStatus',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/api/users/logout');
      token.unSet();
    } catch (error) {
      toast.error('Oops, something went wrong((( Try again, please!');
      return rejectWithValue(
        'Oops, something went wrong((( Try again, please!',
      );
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  'refreshUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/api/users/current');

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateUserData = createAsyncThunk(
  'auth/updateUser',
  async (userData, { rejectWithValue }) => {
    try {
      const result = await axios.patch('/api/users/update', userData);
      return result.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);
