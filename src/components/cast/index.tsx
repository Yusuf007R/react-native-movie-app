import React from 'react';
import {CastType} from '../../dummy-data';
import CastItem from '../cast-item';
import {Container} from './style';

type propsType = {
  data: CastType[];
};

export default function Cast({data}: propsType) {
  return (
    <Container>
      {data.map(element => (
        <CastItem {...element} key={element.id} />
      ))}
    </Container>
  );
}
