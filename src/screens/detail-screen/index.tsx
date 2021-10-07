import React from 'react';
import {ImageHeaderScrollView} from 'react-native-image-header-scroll-view';
import Button from '../../components/button';
import Cast from '../../components/cast';
import DetailsHeaderBackground from '../../components/details-header-background';
import ExtraDetails from '../../components/extra-details';
import StarRating from '../../components/star-rating';
import {creditsTempData, detailTempData} from '../../dummy-data';
import {
  Container,
  ContentContainer,
  Description,
  RowContainer,
  Title,
} from './style';

export default function DetailScreen() {
  return (
    <ImageHeaderScrollView
      maxHeight={600}
      minHeight={0}
      maxOverlayOpacity={0}
      //@ts-ignore
      renderHeader={() => (
        <DetailsHeaderBackground
          uri={`https://www.themoviedb.org/t/p/w500${'/vulF0iqX5z7AW1pdZ572zwsMRMB.jpg'}`}
        />
      )}>
      {/*@ts-ignore */}
      <Container>
        <ContentContainer>
          <Title numberOfLines={2}>{detailTempData.title}</Title>
          <RowContainer>
            <Button text="Watch Now" />
            <StarRating score={detailTempData.vote_average} />
          </RowContainer>
          <Description numberOfLines={8}>{detailTempData.overview}</Description>
          <Cast data={creditsTempData} />
          <ExtraDetails data={detailTempData} />
        </ContentContainer>
      </Container>
    </ImageHeaderScrollView>
  );
}
