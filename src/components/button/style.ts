import styled from 'styled-components/native';

type isVariantType = {
  isVariant: boolean;
};

export const StyledTouchable = styled.TouchableOpacity<isVariantType>`
  width: 120px;
  height: 40px;
  background-color: ${({theme, isVariant}) =>
    isVariant ? theme.yellow : theme.secBackground};
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`;

export const StyledText = styled.Text<isVariantType>`
  font-size: 14px;
  color: ${({theme, isVariant}) => (isVariant ? 'black' : theme.secTextColor)};
`;
