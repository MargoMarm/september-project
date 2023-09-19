import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const ExclamationText = styled.p`
  width: auto;
  display: flex;
  margin-top: ${props => props.margin.top.mobile}px;
  margin-bottom: ${props => props.margin.bottom.mobile}px;

  font-size: 14px;
  line-height: 1.29;

  color: ${colors.textWhite03};

  ${mq.tablet} {
    width: ${props => props.width.tablet}px;
    margin-top: ${props => props.margin.top.tablet}px;
    margin-bottom: ${props => props.margin.bottom.tablet}px;

    font-size: 16px;
    line-height: 1.5;
  }

  ${mq.desktop} {
    width: ${props => props.width.desktop}px;
    margin-top: ${props => props.margin.top.desktop}px;
    margin-bottom: ${props => props.margin.bottom.desktop}px;
  }
`;

export const ExclamationIcon = styled.svg`
  max-width: 24px;
  max-height: 24px;
  margin-right: 8px;
`;
