import { createSlice } from '@reduxjs/toolkit';
import { getVideoCountAndBurnedCaloriesStatistics } from './operations';
import formatNumber from '../../utils/formatNumberStatistics';

const contactsInitialValue = {
  isLoading: false,
  error: null,
  allExercises: 0,
  allUsers: 0,
  usersBurnedCalories: 0,
  usersTimeTraining: 0,
  usersTraining: 0,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFullfield = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload.error;
};

const getStatistics = createSlice({
  name: 'statistics',
  initialState: contactsInitialValue,
  extraReducers: builder => {
    builder.addCase(
      getVideoCountAndBurnedCaloriesStatistics.pending,
      handlePending,
    );
    builder.addCase(
      getVideoCountAndBurnedCaloriesStatistics.fulfilled,
      (state, { payload }) => {
        handleFullfield(state, payload);
        state.allExercises = payload.AllExercises;
        state.allUsers = payload.AllUsers;
        state.usersBurnedCalories = formatNumber(payload.usersBurnedCalories);
        state.usersTimeTraining = payload.usersTimeTraining;
        state.usersTraining = payload.usersTraining;
      },
    );
    builder.addCase(
      getVideoCountAndBurnedCaloriesStatistics.rejected,
      handleRejected,
    );
  },
});

export const statisticsReducer = getStatistics.reducer;
