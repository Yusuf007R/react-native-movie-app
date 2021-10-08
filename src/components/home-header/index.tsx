import React from 'react';
import HeaderInput from '../header-input';
import ThemeToggler from '../theme-toggler';
import {Container, StyledText} from './style';

export default function HomeHeader() {
  return (
    <Container>
      <ThemeToggler />
      <StyledText>Hello, What do you want to watch?</StyledText>
      <HeaderInput />
    </Container>
  );
}
