import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.blue};
`;

export const ContentContainer = styled.View`
  background-color: ${({theme}) => theme.background};
  height: ${Dimensions.get('window').height}px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  align-items: center;
  padding: 30px 0px;
`;

export const HeaderBackground = styled.View`
  background-color: ${({theme}) => theme.blue};
  height: 100%;
`;
