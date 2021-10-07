import styled from 'styled-components/native';

export const FlatListContainer = styled.View`
  width: 100%;
  height: 250px;
`;

export const SectionContainer = styled.View`
  width: 100%;
  height: 295px;
  justify-content: space-between;
  margin-top: 15px;
  padding-left: 20px;
`;

export const SectionHeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;

export const StyledText = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.secTextColor};
  font-weight: 500;
`;

export const SmallText = styled.Text`
  color: ${({theme}) => theme.textColor};
  font-size: 14px;
`;
