import { createSlice } from '@reduxjs/toolkit';
import { getDiaryList, addProduct, deleteProduct } from './operations';

const contactsInitialValue = {
  isLoading: false,
  error: null,
  productsAndExercisesError: null,
  products: [],
  exercises: [],
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

const products = createSlice({
  name: 'products',
  initialState: contactsInitialValue,
  extraReducers: builder => {
    builder.addCase(getDiaryList.pending, handlePending);
    builder.addCase(getDiaryList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = payload.products;
      state.exercises = payload.exercises;
    });
    builder.addCase(getDiaryList.rejected, (state, { payload }) => {
      state.productsAndExercisesError = payload.error;
      state.isLoading = false;
    });

    builder.addCase(addProduct.pending, handlePending);
    builder.addCase(addProduct.fulfilled, handleFullfield);
    builder.addCase(addProduct.rejected, handleRejected);

    builder.addCase(deleteProduct.pending, handlePending);
    builder.addCase(deleteProduct.fulfilled, handleFullfield);
    builder.addCase(deleteProduct.rejected, handleRejected);
  },
});

export const productsReducer = products.reducer;
