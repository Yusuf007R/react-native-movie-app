import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.blue};
`;

export const StyledText = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.textColor};
`;

export const ContentContainer = styled.View`
  height: 1500px;
  background-color: ${({theme}) => theme.background};
  border-radius: 25px;
`;

export const HeaderBackground = styled.View`
  background-color: ${({theme}) => theme.blue};
  height: 100%;
`;
