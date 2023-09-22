import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchFilteredProducts } from './operations';

const initialstate = {
  products: [],
  error: null,
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialstate,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchFilteredProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(fetchFilteredProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFilteredProducts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});
export default productsSlice.reducer;