import React from 'react';
import {ActivityIndicator, useWindowDimensions} from 'react-native';
import {ImageHeaderScrollView} from 'react-native-image-header-scroll-view';
import {useTheme} from 'styled-components';
import Button from '../../components/button';
import Cast from '../../components/cast';
import DetailsHeaderBackground from '../../components/details-header-background';
import ExtraDetails from '../../components/extra-details';
import StarRating from '../../components/star-rating';
import {useGetMovieDetailsQuery} from '../../redux/querys/movie-datails-api';
import {
  CenterContainer,
  Container,
  ContentContainer,
  Description,
  RowContainer,
  Title,
} from './style';

export default function DetailScreen() {
  const {data, isLoading, isError} = useGetMovieDetailsQuery(335983);
  const {width} = useWindowDimensions();
  const theme = useTheme();

  if (isError) {
    return (
      <Container>
        <CenterContainer>
          <Title>There has been an error.</Title>
        </CenterContainer>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <CenterContainer>
          <ActivityIndicator size="large" color={theme.blue} />
        </CenterContainer>
      </Container>
    );
  }

  const aspectRatio = (() =>
    data && data.image ? data.image.height / data.image.width : 1)();

  return (
    <ImageHeaderScrollView
      maxHeight={width * aspectRatio || 1}
      minHeight={0}
      maxOverlayOpacity={0.7}
      key={data?.details?.id || 1}
      //@ts-ignore
      renderHeader={() => (
        <DetailsHeaderBackground
          uri={`https://www.themoviedb.org/t/p/w500${data?.image?.file_path}`}
        />
      )}>
      {/*@ts-ignore */}
      <Container>
        <ContentContainer>
          <Title numberOfLines={2}>{data?.details.title}</Title>
          <RowContainer>
            <Button text="Watch Now" />
            <StarRating score={data?.details?.vote_average} />
          </RowContainer>
          <Description numberOfLines={8}>{data?.details.overview}</Description>
          <Cast data={data?.cast} />
          <ExtraDetails data={data?.details} />
        </ContentContainer>
      </Container>
    </ImageHeaderScrollView>
  );
}
