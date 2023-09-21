import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  `filter/getProducts`,
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`api/products`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchFilteredProducts = createAsyncThunk(
  `filter/getFilteredProducts`,
  async (searchParams, thunkAPI) => {
    try {
      const res = await axios.get(`api/products&${searchParams}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
