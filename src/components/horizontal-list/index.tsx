import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
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
  type: string;
  data: MoviesListItem[];
};

export default function HorizontalList({type, data}: PropsType) {
  return (
    <SectionContainer>
      <SectionHeaderContainer>
        <StyledText>{type}</StyledText>
        <TouchableOpacity>
          <SmallText>See All</SmallText>
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
