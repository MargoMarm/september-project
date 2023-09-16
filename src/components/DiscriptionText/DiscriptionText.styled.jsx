import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const Container = styled.div`
  display: flex;
  gap: 8px;
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

  ${mq.tablet} {
    font-size: 16px;

    line-height: 1.5;
  }
`;
