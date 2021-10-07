import React from 'react';
import {CastType} from '../../dummy-data';
import {Container, StyledImage, StyledText} from './style';

export default function CastItem({profile_path, original_name}: CastType) {
  return (
    <Container>
      <StyledImage
        source={{
          uri: `https://www.themoviedb.org/t/p/w500${profile_path}`,
        }}
      />
      <StyledText numberOfLines={2}>{original_name}</StyledText>
    </Container>
  );
}
