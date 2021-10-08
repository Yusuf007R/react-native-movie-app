import React from 'react';
import {Container, DetailsContainer, StyledFastImage, Title} from './style';
import StarRating from '../star-rating';
import {MoviesListItem} from '../../services/dto';
import {useNavigation} from '@react-navigation/core';
import {movieSliceItems} from '../../redux/slices/movies-slice';

type propsType = {
  item: MoviesListItem;
  type: movieSliceItems;
};

export default function VerticalListItem({item, type}: propsType) {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('DetailsScreen', {id: item.id || 2, type});
  };
  return (
    <Container onPress={handleClick}>
      <StyledFastImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${
            item.poster_path || item.backdrop_path
          }`,
        }}
      />
      <DetailsContainer>
        <Title numberOfLines={1}>{item.title}</Title>
        <StarRating score={item.vote_average} />
      </DetailsContainer>
    </Container>
  );
}
