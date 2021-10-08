import {
  createAsyncThunk,
  createSlice,
  Draft,
  PayloadAction,
  current,
} from '@reduxjs/toolkit';
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

export const fetchSearchQuery = createAsyncThunk(
  'movies/fetchSearchQuery',
  async (query: string, thunkAPI) => {
    thunkAPI.dispatch(clearSearch());
    const response = await api.getMovieSearchQuery(query);
    if (response != null) {
      return response.results;
    }
  },
);

export type movieSliceItems = 'upComing' | 'topRated' | 'search' | 'favorite';

type moviesSliceType = {
  [key in movieSliceItems]: MoviesListItem[];
};

export const initialState: moviesSliceType = {
  upComing: [],
  topRated: [],
  search: [],
  favorite: [],
};

const moviesSlice = createSlice({
  name: 'movies-slice',
  initialState,
  reducers: {
    clearSearch: (state: Draft<moviesSliceType>) => {
      state.search = [];
    },
    addFavorite: (
      state: Draft<moviesSliceType>,
      action: PayloadAction<{id: number; type: movieSliceItems}>,
    ) => {
      const movieSliceCopy = current(state);
      const movie = movieSliceCopy[action.payload.type].find(
        element => element.id === action.payload.id,
      );
      if (movie) {
        state.favorite = [...state.favorite, ...[movie]];
      }
    },
    removeFavorite: (
      state: Draft<moviesSliceType>,
      action: PayloadAction<number>,
    ) => {
      state.favorite = state.favorite.filter(
        element => element.id !== action.payload,
      );
    },
  },
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
    builder.addCase(fetchSearchQuery.fulfilled, (state, action) => {
      if (action.payload) {
        state.search = action.payload;
      }
    });
  },
});

export const {clearSearch, addFavorite, removeFavorite} = moviesSlice.actions;

export default moviesSlice.reducer;
