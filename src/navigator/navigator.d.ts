import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackTypes = {
  HomeScreen: undefined;
  DetailsScreen: {
    id: number;
  };
};

export type DetailsScreenPropType = NativeStackScreenProps<
  RootStackTypes,
  'DetailsScreen'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackTypes {}
  }
}
