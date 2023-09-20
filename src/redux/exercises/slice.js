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
  extraReducers: {
    [addExercise.pending]: handlePending,
    [addExercise.fulfilled]: handleFullfield,
    [addExercise.rejected]: handleRejected,
    [deleteExercise.pending]: handlePending,
    [deleteExercise.fulfilled]: handleFullfield,
    [deleteExercise.rejected]: handleRejected,
  },
});

export const exercisesReducer = exercises.reducer;
