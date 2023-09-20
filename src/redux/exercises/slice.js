import { createSlice } from '@reduxjs/toolkit';
import { addExercise, deleteExercise } from './operations';

const contactsInitialValue = { isLoading: false, error: null };

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFullfield = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, payload) => {
  state.isLoading = true;
  state.error = payload.error;
};

const exercises = createSlice({
  name: 'exercises',
  initialState: contactsInitialValue,
  extraReducers: builder => {
    builder.addCase(addExercise.pending, handlePending);
    builder.addCase(addExercise.fulfilled, handleFullfield);
    builder.addCase(addExercise.rejected, handleRejected);
    builder.addCase(deleteExercise.pending, handlePending);
    builder.addCase(deleteExercise.fulfilled, handleFullfield);
    builder.addCase(deleteExercise.rejected, handleRejected);
  },
});

export const exercisesReducer = exercises.reducer;
