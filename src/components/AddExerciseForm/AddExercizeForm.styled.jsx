import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const Container = styled.div`
  position: relative;
  width: 335px;
  height: 100%;
  padding: 48px 16px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${colors.textWhite02};
  border-radius: 12px;
  background-color: ${colors.modalBackground};
  ${mq.tablet} {
    width: 694px;
    height: 550px;
    padding: 48px 32px;
    display: flex;
    gap: 15px;
  }
`;

export const GifContainer = styled.div`
  width: 270px;
  height: 226px;
  border: 1px solid ${colors.textWhite02};
  border-radius: 12px;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;
  ${mq.tablet} {
    margin-bottom: 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimerTitle = styled.div`
  margin-bottom: 4px;
  font-size: 10px;
  line-height: 140%;
  color: ${colors.textWhite04};
`;

export const TimerVisualLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  border: 4px solid ${colors.orange};
`;

export const Timer = styled.div`
  font-size: 16px;
  line-height: 150%;
  color: ${colors.white};
`;

export const PauseButton = styled.button`
  margin-bottom: 8px;
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;
`;

export const Svg = styled.svg`
  width: 32px;
  height: 32px;
  fill: ${colors.orange};
`;

export const BurntCaloryLabel = styled.div`
  font-size: 14px;
  line-height: 128 %;
  color: ${colors.textWhite03};
`;

export const BurntCaloryInfo = styled.span`
  color: ${colors.orange};
`;

export const InfoCardConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  ${mq.tablet} {
    height: 226px;
  }
`;

export const InfoCard = styled.div`
  flex-basis: calc((100% - 8px) / 2);

  height: 62px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid ${colors.textWhite02};
  background-color: ${colors.textWhite005};
  ${mq.tablet} {
    height: 68px;
  }
`;

export const CardTitle = styled.div`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 133%;
  color: ${colors.textWhite04};
`;

export const CardInfo = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 128.571%;
  color: ${colors.white};
  ${mq.tablet} {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const ButtonWrapper = styled.div`
  ${mq.tablet} {
    position: absolute;
    bottom: 48px;
    right: 32px;
  }
`;
