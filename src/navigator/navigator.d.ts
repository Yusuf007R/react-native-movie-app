import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {movieSliceItems} from '../redux/slices/movies-slice';

export type RootStackTypes = {
  HomeScreen: undefined;
  DetailsScreen: {
    id: number;
  };
  VerticalListScreen: {
    type: movieSliceItems;
    text: string;
  };
};

export type DetailsScreenPropType = NativeStackScreenProps<
  RootStackTypes,
  'DetailsScreen'
>;

export type VerticalListScreenPropType = NativeStackScreenProps<
  RootStackTypes,
  'VerticalListScreen'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackTypes {}
  }
}
