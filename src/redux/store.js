import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authSlice } from './auth/slice';
import filterSlice from './exerciseFilters/slice';
import exercisesSlice from './exercises/slice';
import { diaryReducer } from './diary/slice';
import productsSlice from './productsFilter/slice';
import { statisticsReducer } from './statistic/slice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authSlice.reducer),
  filter: filterSlice,
  exercises: exercisesSlice,
  diary: diaryReducer,
  products: productsSlice,
  statistics: statisticsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
