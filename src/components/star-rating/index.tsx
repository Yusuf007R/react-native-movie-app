import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'styled-components';
import {IconContainer} from './style';

type propsType = {
  score: number;
};

export default function StarRating({score}: propsType) {
  const theme = useTheme();
  const starCount = Math.round(score / 2);
  return (
    <IconContainer>
      {[...Array(5)].map((_, index) => {
        return (
          <Icon
            key={index}
            name="star"
            size={20}
            color={index < starCount ? theme.yellow : theme.darkYellow}
          />
        );
      })}
    </IconContainer>
  );
}
