import React from 'react';
import HeaderInput from '../header-input';
import {Container, StyledText} from './style';

export default function HomeHeader() {
  return (
    <Container>
      <StyledText>Hello, What do you want to watch?</StyledText>
      <HeaderInput />
    </Container>
  );
}
