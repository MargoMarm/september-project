import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const ExclamationText = styled.p`
  width: auto;
  display: flex;

  font-size: 14px;
  line-height: 1.29;

  color: ${colors.textWhite03};

  ${mq.tablet} {
    width: ${props => props.width.tablet}px;

    font-size: 16px;
    line-height: 1.5;
  }

  ${mq.desktop} {
    width: ${props => props.width.desktop}px;
  }
`;

export const ExclamationIcon = styled.svg`
  max-width: 24px;
  max-height: 24px;
  margin-right: 8px;
`;
