import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const HeaderBackground = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.background};
`;

export const StyledImage = styled(FastImage)`
  width: 100%;
  height: 100%;
  position: absolute;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;
