import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const StyledTitle = styled.h2`
  animation: backInLeft 1s ease-in-out  alternate;
  color: ${colors.white};

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.38px;
  margin-bottom: ${props => props.margin?.bt?.mob || '0'}px;
  margin-top: ${props => props.margin?.top?.mob || '0'}px;

  ${mq.tablet} {
    margin-bottom: ${props => props.margin?.bt?.tab || '0'}px;
    margin-top: ${props => props.margin?.top?.tab || '0'}px;
    font-size: 32px;

    line-height: 1.11;
    letter-spacing: 0.7px;
  }

  ${mq.desktop} {
    margin-top: ${props => props.margin?.top?.desk || '0'}px;
  }
`;
