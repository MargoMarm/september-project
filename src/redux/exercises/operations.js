import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getExercises = createAsyncThunk(
  'exercises/getExercises',
  async (params, thunkAPI) => {
    try {
      const response = await axios.get(`api/exercises?${params}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
