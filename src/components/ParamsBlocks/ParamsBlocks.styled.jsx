import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const BlockVideoCard = styled.div`
  ${mq.smallMobile} {
    width: 146px;
    height: 66px;

    margin-top: ${props => props.mt_m};
    margin-right: ${props => props.mr_m};
    margin-bottom: ${props => props.mb_m};
    margin-left: ${props => props.ml_m};
    background: #303030;

    border-radius: 12px;
  }

  ${mq.tablet} {
    margin-top: ${props => props.mt_t};
    margin-right: ${props => props.mr_t};
    margin-bottom: ${props => props.mb_t};
    margin-left: ${props => props.ml_t};

    width: 206px;
    height: 96px;
  }

  ${mq.desktop} {
    margin-top: ${props => props.mt_d};
    margin-right: ${props => props.mr_d};
    margin-bottom: ${props => props.mb_d};
    margin-left: ${props => props.ml_d};
  }
`;

export const BlockOrangeCard = styled.div`
  ${mq.smallMobile} {
    width: 119px;
    height: 76px;

    margin-top: ${props => props.mt_m};
    margin-right: ${props => props.mr_m};
    margin-bottom: ${props => props.mb_m};
    margin-left: ${props => props.ml_m};

    border-radius: 12px;
    background: ${colors.orangeSecondary};
  }
  ${mq.tablet} {
    width: 180px;
    height: 110px;

    margin-top: ${props => props.mt_t};
    margin-right: ${props => props.mr_t};
    margin-bottom: ${props => props.mb_t};
    margin-left: ${props => props.ml_t};
  }

  ${mq.desktop} {
    margin-top: ${props => props.mt_d};
    margin-right: ${props => props.mr_d};
    margin-bottom: ${props => props.mb_d};
    margin-left: ${props => props.ml_d};
  }
`;
