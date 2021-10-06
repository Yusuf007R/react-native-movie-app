import React from 'react';
import {ImageHeaderScrollView} from 'react-native-image-header-scroll-view';
import HomeHeader from '../../components/home-header';
import {
  Container,
  ContentContainer,
  HeaderBackground,
  StyledText,
} from './style';

export default function HomeScreen() {
  return (
    <ImageHeaderScrollView
      maxHeight={200}
      minHeight={0}
      maxOverlayOpacity={0}
      //@ts-ignore
      renderForeground={HomeHeader}
      //@ts-ignore
      renderHeader={() => <HeaderBackground />}>
      {/*@ts-ignore */}
      <Container>
        <ContentContainer>
          <StyledText>Scroll Me!</StyledText>
        </ContentContainer>
      </Container>
    </ImageHeaderScrollView>
  );
}
