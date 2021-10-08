import React from 'react';
import {StyledTouchable, StyledText} from './style';

type propsType = {
  text: string;
  isVariant: boolean;
  onPress: () => void;
};

export default function Button({text, isVariant, onPress}: propsType) {
  return (
    <StyledTouchable onPress={onPress} isVariant={isVariant}>
      <StyledText isVariant={isVariant}>{text}</StyledText>
    </StyledTouchable>
  );
}
