import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ImageHeaderScrollView} from 'react-native-image-header-scroll-view';
import HomeHeader from '../../components/home-header';
import HorizontalList from '../../components/horizontal-list';
import {
  Container,
  ContentContainer,
  HeaderBackground,
  SectionContainer,
  SectionHeaderContainer,
  SmallText,
  StyledText,
} from './style';

//The library used in for the parallax image header, has a typescript error, thats why I'm using @ts-ignore

export default function HomeScreen() {
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
          <SectionContainer>
            <SectionHeaderContainer>
              <StyledText>Recommended for you</StyledText>
              <TouchableOpacity>
                <SmallText>See All</SmallText>
              </TouchableOpacity>
            </SectionHeaderContainer>
            <HorizontalList />
          </SectionContainer>
          <SectionContainer>
            <SectionHeaderContainer>
              <StyledText>Top Rated</StyledText>
              <TouchableOpacity>
                <SmallText>See All</SmallText>
              </TouchableOpacity>
            </SectionHeaderContainer>
            <HorizontalList />
          </SectionContainer>
        </ContentContainer>
      </Container>
    </ImageHeaderScrollView>
  );
}
