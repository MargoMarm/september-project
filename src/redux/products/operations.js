import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://power-pulse-rest-api.onrender.com';

export const getDiaryList = createAsyncThunk(
  'getDiaryList',
  async (date, { rejectWithValue }) => {
    try {
      console.log(date);
      const { data } = await axios.get('/api/diary', date);
      return data;
    } catch (error) {
      console.log(error);
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);

export const addProduct = createAsyncThunk(
  'addProduct',
  async (productDetails, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        '/api/diary/add-product',
        productDetails,
      );
      console.log(data);
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);

export const deleteProduct = createAsyncThunk(
  'deleteProduct',
  async (productDetails, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        '/api/diary/delete-product',
        productDetails,
      );
      console.log(data);
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);
