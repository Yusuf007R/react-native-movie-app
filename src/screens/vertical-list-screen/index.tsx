import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import VerticalListItem from '../../components/vertical-list-item';
import {VerticalListScreenPropType} from '../../navigator/navigator';
import {fetchTopRated} from '../../redux/slices/movies-slice';
import {useStoreDispatch, useStoreSelector} from '../../redux/store';
import calcColumns from '../../utils/calc-columns';
import {Container, HeaderContainer, ItemContainer, StyledText} from './style';

export default function VerticalListScreen({
  route: {
    params: {type, text},
  },
}: VerticalListScreenPropType) {
  const data = useStoreSelector(state => state.moviesSlice[type]);
  const dispatch = useStoreDispatch();
  useEffect(() => {
    dispatch(fetchTopRated());
  }, [dispatch]);
  const [columns] = useState(calcColumns());
  return (
    <Container>
      <FlatList
        ListHeaderComponent={() => (
          <HeaderContainer>
            <StyledText>{text}</StyledText>
          </HeaderContainer>
        )}
        showsHorizontalScrollIndicator={false}
        data={data}
        numColumns={columns}
        keyExtractor={(element, index) => `${element.id}-${index}`}
        renderItem={({item}) => (
          <ItemContainer numOfColumns={columns}>
            <VerticalListItem item={item} />
          </ItemContainer>
        )}
      />
    </Container>
  );
}
