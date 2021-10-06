import React from 'react';

import {Container, StyledIcon, StyledInput} from './style';

export default function HeaderInput() {
  return (
    <Container>
      <StyledIcon name="search" color="white" size={18} />
      <StyledInput placeholder="Search" placeholderTextColor="white" />
    </Container>
  );
}
