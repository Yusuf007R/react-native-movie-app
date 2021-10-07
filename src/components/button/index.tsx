import React from 'react';
import {StyledTouchable, StyledText} from './style';

type propsType = {
  text: string;
};

export default function Button({text}: propsType) {
  return (
    <StyledTouchable>
      <StyledText>{text}</StyledText>
    </StyledTouchable>
  );
}
