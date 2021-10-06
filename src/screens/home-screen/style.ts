import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.background};
`;

export const StyledText = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.textColor};
`;
