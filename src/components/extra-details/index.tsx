import React from 'react';
import {MovieDetailType} from '../../services/dto';
import {Container, KeyText, RowContainer, ValueText} from './style';

type propsType = {
  data?: MovieDetailType;
};

export default function ExtraDetails({data}: propsType) {
  return (
    <Container>
      <RowContainer>
        <KeyText>Studio</KeyText>
        <ValueText>{data?.production_companies[0]?.name || ''}</ValueText>
      </RowContainer>
      <RowContainer>
        <KeyText>Genre</KeyText>
        <ValueText isDesc>
          {data?.genres
            .slice(0, 3)
            .map(element => element?.name)
            .join(', ')}
        </ValueText>
      </RowContainer>
      <RowContainer>
        <KeyText>Release</KeyText>
        <ValueText isDesc>
          {new Date(data?.release_date || '').getFullYear()}
        </ValueText>
      </RowContainer>
    </Container>
  );
}
