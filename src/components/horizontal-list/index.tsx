import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {movieSliceItems} from '../../redux/slices/movies-slice';
import {MoviesListItem} from '../../services/dto';
import HorizontalListItem from '../horizontal-list-item';
import {
  FlatListContainer,
  SectionContainer,
  SectionHeaderContainer,
  SmallText,
  StyledText,
} from './style';

type PropsType = {
  type: movieSliceItems;
  data: MoviesListItem[];
  text: string;
};

export default function HorizontalList({type, data, text}: PropsType) {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('VerticalListScreen', {type, text});
  };
  return (
    <SectionContainer>
      <SectionHeaderContainer>
        <StyledText>{text}</StyledText>
        <TouchableOpacity onPress={handleClick}>
          <SmallText>Expand</SmallText>
        </TouchableOpacity>
      </SectionHeaderContainer>
      <FlatListContainer>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          horizontal
          keyExtractor={(element, index) => `${element.id}-${index}`}
          renderItem={({item}) => <HorizontalListItem item={item} />}
        />
      </FlatListContainer>
    </SectionContainer>
  );
}
