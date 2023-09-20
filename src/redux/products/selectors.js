export const getDiaryProducts = state => state.products.products;

export const getDiaryExercises = state => state.products.exercises;

export const getIsLoadingProducts = state => state.products.isLoading;

export const getError = state => state.products.error;

export const getErrorProductsAndExercisesError = state =>
  state.products.productsAndExercisesError;
