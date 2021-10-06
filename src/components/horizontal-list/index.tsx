import React from 'react';
import {FlatList} from 'react-native';
import {tempData} from '../../dummy-data';
import HorizontalListItem from '../horizontal-list-item';
import {Container} from './style';

export default function HorizontalList() {
  return (
    <Container>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={tempData.results}
        horizontal
        renderItem={({item}) => <HorizontalListItem item={item} />}
      />
    </Container>
  );
}
