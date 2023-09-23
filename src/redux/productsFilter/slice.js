import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, getCategories } from './operations';



export const productsSlice = createSlice({
  name: 'products',
  initialState : {
    products: [],
    categories: ["some", "SOME"],
    error: null,
    isLoading: false,
  },
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
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(getCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});
export default productsSlice.reducer;