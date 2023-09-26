import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const Container = styled.div`
  position: relative;
  z-index: 100;
  width: 335px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  border: transparent;

  background-color: ${colors.modalBackground};
  ${mq.tablet} {
    width: 694px;
    display: flex;
    gap: 15px;
  }
`;

export const GifContainer = styled.div`
  width: 270px;
  height: 226px;
  overflow: hidden;
  border: 1px solid ${colors.textWhite02};
  border-radius: 12px;
`;

export const Img = styled.img`
  width: 270px;
  height: 226px;
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

  min-height: 62px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid ${colors.textWhite02};
  background-color: ${colors.textWhite005};
  ${mq.tablet} {
    min-height: 68px;
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

export const Watch = styled.span`
  font-size: 16px;
  line-height: 150%;
  color: ${colors.white};
`;



