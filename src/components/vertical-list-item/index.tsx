import React from 'react';
import {Container, DetailsContainer, StyledFastImage, Title} from './style';
import StarRating from '../star-rating';
import {MoviesListItem} from '../../services/dto';
import {useNavigation} from '@react-navigation/core';

type propsType = {
  item: MoviesListItem;
};

export default function VerticalListItem({item}: propsType) {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('DetailsScreen', {id: item.id || 2});
  };
  return (
    <Container onPress={handleClick}>
      <StyledFastImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
        }}
      />
      <DetailsContainer>
        <Title numberOfLines={1}>{item.title}</Title>
        <StarRating score={item.vote_average} />
      </DetailsContainer>
    </Container>
  );
}
