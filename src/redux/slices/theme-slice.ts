import {createSlice, Draft} from '@reduxjs/toolkit';

type themeVariant = 'dark' | 'light';

type themeSliceType = {
  theme: themeVariant;
};

export const initialState: themeSliceType = {
  theme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme-slice',
  initialState,
  reducers: {
    toggleTheme: (state: Draft<themeSliceType>) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;
