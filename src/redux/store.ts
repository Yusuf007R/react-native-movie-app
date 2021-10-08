import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {movieDetailsApi} from './querys/movie-datails-api';
import moviesSlice from './slices/movies-slice';
import themeSlice from './slices/theme-slice';

const moviePersistConfig = {
  key: 'movie',
  storage: AsyncStorage,
  whitelist: ['favorite'],
};

const persistMovieSlice = persistReducer(moviePersistConfig, moviesSlice);

const rootReducer = combineReducers({
  themeSlice: themeSlice,
  moviesSlice: persistMovieSlice,
  [movieDetailsApi.reducerPath]: movieDetailsApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['themeSlice'],
};

const reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(movieDetailsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useStoreDispatch = () => useDispatch<AppDispatch>();
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
