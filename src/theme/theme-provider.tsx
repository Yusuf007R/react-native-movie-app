import React from 'react';
import {ThemeProvider} from 'styled-components';
import {useStoreSelector} from '../redux/store';
import {darkTheme, lightTheme} from './theme';

type propsType = {
  children: React.ReactNode;
};

export default function ThemeModeProvider({children}: propsType) {
  const theme = useStoreSelector(state => state.themeSlice.theme);
  console.log(theme);
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}
