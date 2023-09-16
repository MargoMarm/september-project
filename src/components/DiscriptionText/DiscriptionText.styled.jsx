import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const Text = styled.p`
  color: ${colors.textWhite03};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  ${mq.mobile} {
    width: 303px;
  }

  ${mq.tablet} {
    width: 561px;
    font-size: 16px;

    line-height: 1.5;
  }

  ${mq.desktop} {
    width: 358px;
  }
`;
