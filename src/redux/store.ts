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
import moviesSlice from './slices/movies-slice';
import themeSlice from './slices/theme-slice';

const rootReducer = combineReducers({
  themeSlice: themeSlice,
  moviesSlice: moviesSlice,
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
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useStoreDispatch = () => useDispatch<AppDispatch>();
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
