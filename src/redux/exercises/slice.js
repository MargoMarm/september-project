import { createSlice } from '@reduxjs/toolkit';
import { getExercises } from './operations';



export const exercisesSlice = createSlice({
  name: 'filters',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
    getFilters: true
  },
  
  reducers: {
    setStatusFilter: (state, action) => {
        state.getFilters = action.payload
      },
  },
  extraReducers: builder => {
    builder.addCase(getExercises.fulfilled, (state, action) => {
      state.items = action.payload;
      state.getFilters = false;
      state.error = null;
    });
    builder.addCase(getExercises.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(getExercises.pending, state => {
      state.isLoading = true;
    });
  },
});
export const { setStatusFilter } = exercisesSlice.actions;

export default exercisesSlice.reducer;
