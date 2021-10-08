import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

type containerType = {
  numOfColumns: number;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  align-items: center;
`;

export const ItemContainer = styled.View<containerType>`
  width: ${({numOfColumns}) => width / numOfColumns}px;
  aspect-ratio: 0.7;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeaderContainer = styled.View`
  width: ${width}px;
  padding: 25px 12px;
`;

export const StyledText = styled.Text`
  font-size: 26px;
  color: ${({theme}) => theme.secTextColor};
  font-weight: 600;
`;
