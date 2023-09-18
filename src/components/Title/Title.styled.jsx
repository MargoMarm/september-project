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
  margin-bottom: ${props => props.margin.bt.mob}px;
  margin-top: ${props => props.margin.top.mob}px;

  ${mq.tablet} {
    margin-bottom: ${props => props.margin.bt.tab}px;
    margin-top: ${props => props.margin.top.tab}px;
    font-size: 32px;

    line-height: 1.11;
    letter-spacing: 0.7px;
  }

  ${mq.desktop} {
    margin-top: ${props => props.margin.top.desk}px;
  }
`;
