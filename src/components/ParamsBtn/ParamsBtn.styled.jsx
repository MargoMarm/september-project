import styled from '@emotion/styled';

import { mq, colors } from '../../utils';

export const BtnNav = styled.button`
  ${mq.smallMobile} {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 128%;

    color: ${colors.white};
    background: transparent;

    border: none;
    outline: none;

    transition:
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: ${colors.orange};
      transform: scale(1.1);
    }

    &:focus {
      color: ${colors.orange};
      transform: scale(1.1);
    }
    ${mq.tablet} {
      font-size: 16px;
      line-height: 150%;
    }
  }
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${colors.orange};
`;
