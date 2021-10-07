import styled from 'styled-components/native';

export const StyledTouchable = styled.View`
  width: 120px;
  height: 40px;
  background-color: ${({theme}) => theme.secBackground};
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`;

export const StyledText = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.secTextColor};
`;
