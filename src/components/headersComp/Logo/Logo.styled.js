import styled from '@emotion/styled';
import { mq } from '../../../utils';

export const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

export const WrapLogo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

export const Svg = styled.svg`
  width: 36px;
  height: 13px;

  ${mq.tablet} {
    width: 126px;
    height: 13px;
  }
`;
