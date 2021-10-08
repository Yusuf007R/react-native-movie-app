import React, {useEffect} from 'react';
import {ImageHeaderScrollView} from 'react-native-image-header-scroll-view';
import {shallowEqual} from 'react-redux';
import HomeHeader from '../../components/home-header';
import HorizontalList from '../../components/horizontal-list';
import {fetchTopRated, fetchUpComing} from '../../redux/slices/movies-slice';
import {useStoreDispatch, useStoreSelector} from '../../redux/store';
import {Container, ContentContainer, HeaderBackground} from './style';

//The library used in for the parallax image header, has a typescript error, thats why I'm using @ts-ignore

export default function HomeScreen() {
  const dispatch = useStoreDispatch();
  const {topRated, upComing} = useStoreSelector(
    state => ({
      topRated: state.moviesSlice.topRated,
      upComing: state.moviesSlice.upComing,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(fetchTopRated());
    dispatch(fetchUpComing());
  }, [dispatch]);

  return (
    <ImageHeaderScrollView
      maxHeight={220}
      minHeight={0}
      maxOverlayOpacity={0}
      // @ts-ignore
      renderForeground={HomeHeader}
      //@ts-ignore
      renderHeader={() => <HeaderBackground />}>
      {/*@ts-ignore */}
      <Container>
        <ContentContainer>
          <HorizontalList data={topRated} type="topRated" text="Top Rated" />
          <HorizontalList data={upComing} type="upComing" text="Up Coming" />
        </ContentContainer>
      </Container>
    </ImageHeaderScrollView>
  );
}
