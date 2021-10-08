import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../../services';
import {MoviesListItem} from '../../services/dto';

export const fetchTopRated = createAsyncThunk(
  'movies/fetchTopRated',
  async () => {
    const response = await api.getMoviesTopRated();
    if (response != null) {
      return response.results;
    }
  },
);

export const fetchUpComing = createAsyncThunk(
  'movies/fetchUpComing',
  async () => {
    const response = await api.getMoviesUpcoming();
    if (response != null) {
      return response.results;
    }
  },
);

export type movieSliceItems = 'upComing' | 'topRated';

type moviesSliceType = {
  [key in movieSliceItems]: MoviesListItem[];
};

export const initialState: moviesSliceType = {
  upComing: [],
  topRated: [],
};

const moviesSlice = createSlice({
  name: 'movies-slice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTopRated.fulfilled, (state, action) => {
      if (action.payload) {
        state.topRated = [...state.topRated, ...action.payload];
      }
    });
    builder.addCase(fetchUpComing.fulfilled, (state, action) => {
      if (action.payload) {
        state.upComing = [...state.upComing, ...action.payload];
      }
    });
  },
});
console.log(moviesSlice);

export default moviesSlice.reducer;
