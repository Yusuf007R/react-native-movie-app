import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${Dimensions.get('window').height}px;
  background-color: ${({theme}) => theme.background};
  align-items: center;
`;

export const ContentContainer = styled.View`
  width: 92%;
  padding: 30px 0px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: ${({theme}) => theme.secTextColor};
  font-weight: 600;
  margin-bottom: 20px;
`;

export const RowContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.Text`
  margin: 20px 0px;
  color: ${({theme}) => theme.textColor};
  font-size: 14px;
`;
