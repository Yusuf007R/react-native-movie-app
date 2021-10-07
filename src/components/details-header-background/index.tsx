import React from 'react';
import {StyledImage} from './style';
import {HeaderBackground} from './style';

type propsType = {
  uri: string;
};

export default function DetailsHeaderBackground({uri}: propsType) {
  return (
    <HeaderBackground>
      <StyledImage source={{uri}} />
    </HeaderBackground>
  );
}
