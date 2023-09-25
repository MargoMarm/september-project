import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  `filter/getProducts`,
  async (searchParams, thunkAPI) => {
    try {
      const res = await axios.get(`api/products?${searchParams}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);



export const getCategories = createAsyncThunk(
  `categories/getCategories`,
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("api/categories"); 
    
      return res.data[0].categories;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } 
  },
  {
    condition: (_, { getState, extra }) => {
      const  state  = getState();
      if (state.products.categories.length > 1) {
        return false
      }
    }
  }
);
