import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, getCategories, fetchMoreProducts } from './operations';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    categories: [],
    error: null,
    isLoading: false,
    searchParams: '',
    hasMore: false,
  },
  reducers: {
    addSearchParams: {
      reducer(state, action) {
        state.searchParams = action.payload;
      },
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.error = null;
      state.isLoading = false;
      state.hasMore = action.payload.length < 20 ? false : true;
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
    builder.addCase(fetchMoreProducts.fulfilled, (state, action) => {
      state.products = [...state.products, ...action.payload];
      state.error = null;
      state.isLoading = false;
      state.hasMore = action.payload.length < 20 ? false : true;
    });
    builder.addCase(fetchMoreProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMoreProducts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export default productsSlice.reducer;

export const { addSearchParams } = productsSlice.actions;
