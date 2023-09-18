import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  width: auto;

  ${mq.tablet} {
    width: ${props => props.width.tablet}px;
  }

  ${mq.desktop} {
    width: ${props => props.width.desktop}px;
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Text = styled.p`
  color: ${colors.textWhite03};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  line-height: 1.3;
  margin: 0;
  width: 303px;

  ${mq.tablet} {
    font-size: 16px;
    line-height: 1.5;
    width: 407px;
  }
`;
