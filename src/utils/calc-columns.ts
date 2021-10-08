import {Dimensions} from 'react-native';

export default () => {
  const {width} = Dimensions.get('window');
  switch (true) {
    case width < 400:
      return 2;
    case width < 600:
      return 3;
    case width < 900:
      return 4;
    default:
      return 2;
  }
};
