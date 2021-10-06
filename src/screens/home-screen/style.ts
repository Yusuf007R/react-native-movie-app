import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.blue};
`;

export const StyledText = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.secTextColor};
  font-weight: 500;
`;

export const ContentContainer = styled.View`
  background-color: ${({theme}) => theme.background};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  align-items: center;
  padding: 30px 0px;
`;

export const HeaderBackground = styled.View`
  background-color: ${({theme}) => theme.blue};
  height: 100%;
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

export const SmallText = styled.Text`
  color: ${({theme}) => theme.textColor};
  font-size: 14px;
`;
