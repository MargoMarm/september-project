import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const GreyCard = styled.div`
  position: absolute;
  top: ${props => (props.step === '2' ? 534 : 474)}px;
  left: ${props => (props.step === '2' ? 154 : 101)}px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 146px;
  height: 66px;

  background: #303030;

  border-radius: 12px;

  ${mq.tablet} {
    top: ${props => (props.page === 'auth' ? 526 : 630)}px;

    left: ${props => (props.page === 'auth' ? 331 : 298)}px;

    width: 206px;
    height: 96px;
  }

  ${mq.desktop} {
    top: ${props => (props.page === 'auth' ? 184 : 300)}px;

    left: ${props => (props.page === 'auth' ? 770 : 674)}px;
  }
`;

export const GreySvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-right: 8px;

  background: ${colors.orangeSecondary};

  border-radius: 50%;

  ${mq.tablet} {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
`;

export const GreySvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: ${colors.white};

  ${mq.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const GreyTextWrapper = styled.div``;

export const GreyDynamicText = styled.p`
  margin-bottom: 4px;

  font-size: 16px;
  font-weight: 700;
  line-height: 112.5%;

  color: ${colors.white};

  ${mq.tablet} {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 100%;
  }
`;

export const GreyStaticText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 133.3%;

  color: rgba(239, 237, 232, 0.65);

  ${mq.tablet} {
    font-size: 16px;

    line-height: 150%;
  }
`;

export const OrangeCard = styled.div`
  position: absolute;
  top: ${props => (props.page === 'auth' ? 570 : 625)}px;
  right: ${props => (props.page === 'auth' ? 20 : 0)}px;

  width: 119px;
  height: 76px;
  padding: 14px 18px;

  border-radius: 12px;
  background: ${colors.orangeSecondary};

  ${mq.tablet} {
    top: 782px;

    top: ${props => (props.page === 'auth' ? 672 : 782)}px;
    right: ${props => (props.page === 'auth' ? 32 : 0)}px;
    width: 180px;
    height: 110px;
  }
  ${mq.desktop} {
    top: ${props => (props.page === 'auth' ? 318 : 434)}px;
  }
`;

export const OrangeSvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  margin-bottom: 4px;

  background-color: #efa082;

  border-radius: 50%;

  ${mq.tablet} {
    margin-bottom: 8px;

    width: 24px;
    height: 24px;
  }
`;

export const OrangeSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: ${colors.white};

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
  margin-right: 8px;

  font-size: 24px;

  font-weight: 700;
  line-height: 100%;
  letter-spacing: -1px;
  text-transform: uppercase;

  color: ${colors.white};

  ${mq.tablet} {
    margin-right: 11px;

    font-size: 48px;
    line-height: 104.167%;
  }
`;

export const OrangeStaticText = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 133.33%;

  color: rgba(239, 237, 232, 0.65);

  ${mq.tablet} {
    font-size: 16px;
    line-height: 150%;
  }
`;
