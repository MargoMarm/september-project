import { createSlice } from '@reduxjs/toolkit';
import { fetchFilters } from './operations';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
    filter: 'Body parts',
    currentTitle: 'Exersises',
  },

  reducers: {
    setStatusFilter: (state, action) => {
      state.filter = action.payload;
    },
    setCurrentTitle: (state, action) => {
      state.currentTitle = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.items = action.payload;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(fetchFilters.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchFilters.pending, state => {
      state.isLoading = true;
    });
  },
});
export const { setStatusFilter, setCurrentTitle } = filterSlice.actions;
export default filterSlice.reducer;
