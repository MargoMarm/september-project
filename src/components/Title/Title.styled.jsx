import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const StyledTitle = styled.h2`
  color: ${colors.white};

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.38px;
  margin-bottom: ${props => props.margin}px;

  ${mq.tablet} {
    margin-bottom: ${props => props.margin + 2}px;
    margin-top: 105px;
    font-size: 32px;

    line-height: 1.11;
    letter-spacing: 0.7px;
  }

  ${mq.desktop} {
	margin-top: 116px;
  }
`;
