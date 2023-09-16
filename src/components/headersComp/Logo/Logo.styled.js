import styled from '@emotion/styled';
import { mq, button } from '../../../utils';

export const Button = styled.button`
  ${button}
`;

export const WrapLogo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

export const Svg = styled.svg`
  width: 126px;
  height: 13px;
  ${mq.tablet} {
    width: 152px;
    height: 17px;
  }
`;
