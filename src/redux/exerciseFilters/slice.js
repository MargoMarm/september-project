import { createSlice } from '@reduxjs/toolkit';
import { fetchFilters } from './operations';



export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLogedIn = true;
      state.error = null;
    });
    builder.addCase(fetchFilters.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(fetchFilters.pending, state => {
      state.isLoading = true;
    });
  },
});

export default filterSlice.reducer;