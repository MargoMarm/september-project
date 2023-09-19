import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


export const fetchFilters = createAsyncThunk(
    'filters/getFilters',
    async (filter, thunkAPI) => {
        console.log("OPERATIONS-LOG", filter, thunkAPI);
      try {
        const response = await axios.get(`api/filter?filter=${filter}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );






