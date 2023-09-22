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
        const  state  = getState();
        if (state.filter.items.length > 1) {
          return false
        }
      }
    }
    
  );






