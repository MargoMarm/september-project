import styled from '@emotion/styled';
import { colors, mq } from '../../utils/index';

export const Item = styled.li`
  min-height: 216px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }

  ${mq.tablet} {
    flex-basis: calc((100% - 32px) / 3);
    margin-bottom: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${mq.desktop} {
    flex-basis: calc((100% - 64px) / 5);
  }
`;

export const WrapCard = styled.a`
  display: block;

  cursor: pointer;
  position: relative;
  border-radius: 12px;
  background-color: ${colors.background05};
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  z-index: -1;
`;

export const WrapSpan = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 137px;
  text-align: center;

  ${mq.mobile} {
    top: 50%;
    left: 50%;
  }

  ${mq.tablet} {
    top: 50%;
    left: 50%;
  }
`;

export const Name = styled.span`
  color: ${colors.white};
  font-size: 20px;
  line-height: 1.2;

  ${mq.tablet} {
    font-size: 24px;
    line-height: 1.33;
  }
`;

export const Filter = styled.span`
  color: ${colors.textWhite04};
  font-size: 12px;
  line-height: 1.5;
`;

export const LoaderWraper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 100%;

  z-index: 300;

  &:last-child {
    margin-bottom: 0px;
  }
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);

  ${mq.tablet} {
    width: 224px;
    flex-basis: calc((100% - 32px) / 3);
    margin-bottom: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${mq.desktop} {
    width: 237px;

    flex-basis: calc((100% - 64px) / 5);
  }
`;
