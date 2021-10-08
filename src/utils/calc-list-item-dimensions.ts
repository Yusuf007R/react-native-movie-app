import {Dimensions} from 'react-native';

export default () => {
  const {width: wWidth} = Dimensions.get('window');
  const width = wWidth / 2.5;
  const height = width * 1.77;
  return {width, height};
};
