import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const Text = styled.p`
  ${mq.smallMobile} {
    margin-bottom: ${props => props.mb_m};

    font-size: 14px;
    font-weight: 400;
    line-height: 128.571%;

    color: ${colors.textWhite03};
  }

  ${mq.tablet} {
    width: 496px;
    margin-bottom: ${props => props.mb_t};

    font-size: 16px;
    line-height: 150%;
  }

  ${mq.desktop} {
    margin-bottom: ${props => props.mb_d};
  }
`;
