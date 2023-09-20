import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://power-pulse-rest-api.onrender.com';

const token = {
  set: token => {
    //axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDllNDExOTkxZmM4NjRkNGJlNTA1MiIsImlhdCI6MTY5NTE0ODA1MiwiZXhwIjoxNjk1MjMwODUyfQ.5nTGwaUatCW7r-tVbTRnWFeB4Nkq4DpfKM8Pwy856ns`;
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
      console.log('qwe');
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
    const persistedToken = state.user.token;
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
