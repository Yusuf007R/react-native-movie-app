import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import calcListItemDimensions from '../../utils/calc-list-item-dimensions';

export const Container = styled.TouchableOpacity`
  width: ${calcListItemDimensions().width}px;
  height: 100%;
  margin-right: 20px;
  align-items: center;
`;

export const StyledFastImage = styled(FastImage)`
  width: 100%;
  height: 82%;
  border-radius: 22px;
`;

export const DetailsContainer = styled.View`
  width: 100%;
  flex: 1;
  margin-left: 6px;
  padding-top: 4px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.secTextColor};
`;
