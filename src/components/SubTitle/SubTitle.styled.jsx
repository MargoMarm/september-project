import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const SubStyle = styled.p`
  color: ${colors.textWhite03};

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  ${mq.mobile} {
    font-size: 14px;
    line-height: 1.28;
  }

  ${mq.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }
`;
