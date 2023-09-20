import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchFilters = createAsyncThunk(
    'filters/getFilters',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(`api/filter`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }, 
    {
      condition: (_, { getState, extra }) => {
        const { filter } = getState()
      
        if (filter.items.lenght < 1) {
          // Already fetched or in progress, don't need to re-fetch
          return false
        }
      }
    }
    
  );






