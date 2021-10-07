import styled from 'styled-components/native';

type textProps = {
  isDesc?: boolean;
};

export const Container = styled.View`
  margin-top: 20px;
  width: 100%;
`;

export const KeyText = styled.Text<textProps>`
  font-size: 14px;
  width: 80px;
  font-weight: 600;
  color: ${({theme}) => theme.secTextColor};
`;

export const ValueText = styled.Text<textProps>`
  font-size: 14px;
  color: ${({theme}) => theme.textColor};
`;

export const RowContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;
