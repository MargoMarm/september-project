import { createSlice } from '@reduxjs/toolkit';
import { getDiaryList, addProduct, deleteProduct } from './operations';

const contactsInitialValue = {
  isLoading: false,
  error: null,
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
  state.isLoading = true;
  state.error = payload.error;
};

const products = createSlice({
  name: 'products',
  initialState: contactsInitialValue,
  extraReducers: {
    [getDiaryList.pending]: handlePending,
    [getDiaryList.fulfilled](state, payload) {
      handleFullfield(state);
      state.products = payload.products;
      state.exercises = payload.exercises;
    },
    [getDiaryList.rejected]: handleRejected,
    [addProduct.pending]: handlePending,
    [addProduct.fulfilled]: handleFullfield,
    [addProduct.rejected]: handleRejected,
    [deleteProduct.pending]: handlePending,
    [deleteProduct.fulfilled]: handleFullfield,
    [deleteProduct.rejected]: handleRejected,
  },
});

export const productsReducer = products.reducer;
