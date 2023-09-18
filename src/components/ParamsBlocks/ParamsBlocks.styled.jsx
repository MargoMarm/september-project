import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const GreyCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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

export const GreySvgWrapper = styled.div`
  ${mq.smallMobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-right: 8px;

    background: ${colors.orangeSecondary};

    border-radius: 50%;
  }

  ${mq.tablet} {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
`;

export const GreySvg = styled.svg`
  ${mq.smallMobile} {
    width: 12px;
    height: 12px;
    fill: ${colors.white};
  }

  ${mq.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const GreyTextWrapper = styled.div``;

export const GreyDynamicText = styled.p`
  ${mq.smallMobile} {
    margin-bottom: 4px;

    font-size: 16px;
    font-weight: 700;
    line-height: 112.5%;

    color: ${colors.white};
  }

  ${mq.tablet} {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 100%;
  }
`;

export const GreyStaticText = styled.p`
  ${mq.smallMobile} {
    font-size: 12px;
    font-weight: 400;
    line-height: 133.3%;

    color: rgba(239, 237, 232, 0.65);
  }

  ${mq.tablet} {
    font-size: 16px;

    line-height: 150%;
  }
`;

export const OrangeCard = styled.div`
  ${mq.smallMobile} {
    padding: 14px 18px;
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

export const OrangeSvgWrapper = styled.div`
  ${mq.smallMobile} {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;
    margin-bottom: 4px;

    background-color: #efa082;

    border-radius: 50%;
  }

  ${mq.tablet} {
    margin-bottom: 8px;

    width: 24px;
    height: 24px;
  }
`;

export const OrangeSvg = styled.svg`
  ${mq.smallMobile} {
    width: 12px;
    height: 12px;
    fill: ${colors.white};
  }

  ${mq.tablet} {
    width: 16px;
    height: 16px;
  }
`;

export const OrangeTextWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const OrangeDynamicText = styled.p`
  ${mq.smallMobile} {
    margin-right: 8px;

    font-size: 24px;

    font-weight: 700;
    line-height: 100%;
    letter-spacing: -1px;
    text-transform: uppercase;

    color: ${colors.white};
  }

  ${mq.tablet} {
    margin-right: 11px;

    font-size: 48px;
    line-height: 104.167%;
  }
`;

export const OrangeStaticText = styled.p`
  ${mq.mobile} {
    font-size: 12px;
    font-weight: 700;
    line-height: 133.33%;

    color: rgba(239, 237, 232, 0.65);
  }

  ${mq.tablet} {
    font-size: 16px;
    line-height: 150%;
  }
`;
