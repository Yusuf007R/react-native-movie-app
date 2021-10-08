import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from 'styled-components';
import useTheme from '../../hooks/use-theme';
import {useStoreSelector} from '../../redux/store';
import {StyledTouchable} from './style';

export default function ThemeToggler() {
  const themeToggler = useTheme();
  const themeValue = useStoreSelector(state => state.themeSlice.theme);
  const theme = useContext(ThemeContext);

  return (
    <StyledTouchable onPress={themeToggler}>
      <Icon
        size={35}
        color={theme.iconColor}
        name={themeValue === 'dark' ? 'sunny' : 'moon'}
      />
    </StyledTouchable>
  );
}
