import React from 'react';
import {Button} from 'react-native';
import useTheme from '../../hooks/use-theme';
import {Container, StyledText} from './style';

export default function HomeScreen() {
  const {themeToggler} = useTheme();
  return (
    <Container>
      <StyledText>HomeScreen</StyledText>
      <Button title="click me" onPress={themeToggler} />
    </Container>
  );
}
