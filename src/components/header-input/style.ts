import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 25px;
  height: 42px;
  width: 80%;
  padding-left: 40px;
  color: white;
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  left: ${width * 0.115}px;
  z-index: 5;
`;
