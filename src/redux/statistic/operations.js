import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://power-pulse-rest-api.onrender.com';

export const getVideoCountAndBurnedCaloriesStatistics = createAsyncThunk(
  'getVideoCountAndBurnedCaloriesStatistics',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/statistics');
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      if (state.statistics.allExercises > 1) {
        return false;
      }
    },
  },
);
