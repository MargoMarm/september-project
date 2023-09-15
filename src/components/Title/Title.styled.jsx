import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const StyledTitle = styled.h2`
  color: ${colors.white};

  font-family: Roboto;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: 0.38px;

  ${mq.mobile} {
    width: 335px;
  }

  ${mq.tablet} {
    width: 598px;

    font-size: 70px;

    line-height: 1.11;
    letter-spacing: 0.7px;
  }
`;
