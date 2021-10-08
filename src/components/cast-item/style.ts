import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80px;
  height: 112px;
  align-items: center;
`;

export const StyledImage = styled(FastImage)`
  width: 75px;
  height: 75px;
  border-radius: 35px;
`;

export const StyledText = styled.Text`
  margin-top: 5px;
  text-align: center;
  color: ${({theme}) => theme.textColor};
  font-size: 12px;
`;
