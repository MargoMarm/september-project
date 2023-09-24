import { createSlice } from '@reduxjs/toolkit';
import { addExercise, getExercises } from './operations';

export const exercisesSlice = createSlice({
  name: 'exercise',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
    getFilters: true,
  },

  reducers: {
    changeStatusFilter: (state, action) => {
      state.getFilters = action.payload;
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

    builder.addCase(addExercise.fulfilled, state => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addExercise.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addExercise.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
  },
});
export const { changeStatusFilter } = exercisesSlice.actions;

export default exercisesSlice.reducer;
