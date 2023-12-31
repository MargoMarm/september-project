import { createSlice } from '@reduxjs/toolkit';
import { addExercise, getExercises, getMoreExercises } from './operations';

export const exercisesSlice = createSlice({
  name: 'exercise',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
    getFilters: true,
    hasMore: false,
    searchParams: '',
    isTimerOn: false,
  },

  reducers: {
    changeStatusFilter: (state, action) => {
      state.getFilters = action.payload;
    },
    changeStatusTimer: (state, action) => {
      state.isTimerOn = action.payload;
    },
    addSearchExerciseParams: {
      reducer(state, action) {
        state.searchParams = action.payload;
      },
    },
  },
  extraReducers: builder => {
    builder.addCase(getExercises.fulfilled, (state, action) => {
      state.items = action.payload;
      state.getFilters = false;
      state.error = null;
      state.isLoading = false;
      state.hasMore = action.payload.length < 20 ? false : true;
    });
    builder.addCase(getExercises.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getExercises.pending, state => {
      state.isLoading = true;
      state.error = null;
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
      // state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getMoreExercises.fulfilled, (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.getFilters = false;
      state.error = null;
      state.isLoading = false;
      state.hasMore = action.payload.length < 20 ? false : true;
    });
    builder.addCase(getMoreExercises.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMoreExercises.pending, state => {
      state.isLoading = true;
      state.isLoading = true;
    });
  },
});
export const {
  changeStatusFilter,
  changeStatusTimer,
  addSearchExerciseParams,
} = exercisesSlice.actions;

export default exercisesSlice.reducer;
