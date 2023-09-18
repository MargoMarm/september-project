import styled from '@emotion/styled';
import { colors, button, mq } from '../../utils';

export const Section = styled.section`
  flex-shrink: 0;
  max-width: 439px;
  margin: 0 auto;
  ${mq.desktop} {
    margin: 0;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  margin: 0 auto 32px;
  border: 1px solid ${colors.orange};
  border-radius: 50%;

  ${mq.tablet} {
    width: 150px;
    height: 150px;
    margin-bottom: 34px;
  }
`;

export const UserSVG = styled.svg`
  width: 62px;
  height: 62px;
  fill: ${colors.grey};
  fill-opacity: 0.1;

  ${mq.tablet} {
    width: 102px;
    height: 102px;
  }
`;

export const ImgWrap = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;

  ${mq.tablet} {
    width: 150px;
    height: 150px;
  }
`;

export const Avatar = styled.img`
  width: 100%;
`;

export const AddUserBtn = styled.label`
  position: absolute;
  bottom: -12px;
  left: 50%;
  display: block;
  width: 24px;
  height: 24px;
  transform: translateX(-50%);

  & input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
  }

  & svg {
    width: 24px;
    height: 24px;
    fill: ${colors.orange};
    stroke: ${colors.white};
    transition: fill 0.3s;
  }

  &:hover svg,
  &:focus svg {
    fill: ${colors.orangeSecondary};
  }

  ${mq.tablet} {
    bottom: -16px;
    width: 32px;
    height: 32px;

    & svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export const H3 = styled.h3`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.1;
  color: ${colors.grey};
  text-align: center;

  ${mq.tablet} {
    margin-bottom: 32px;
  }
`;

export const CardsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 14px;
  margin-bottom: 40px;

  ${mq.tablet} {
    margin-bottom: 32px;
  }
`;

export const DailyStatsWrap = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  ${button};
  display: flex;
  gap: 0 8px;
  margin-top: 40px;
  margin-left: auto;
  transition: color 0.3s;

  & span {
    font-size: 14px;
    line-height: 1.3;
    color: ${colors.grey};
    transition: color 0.3s;
  }

  & svg {
    width: 20px;
    height: 20px;
    stroke: ${colors.orange};
    transition: stroke 0.3s;
  }

  &:hover span,
  &:hover svg,
  &:focus span,
  &:focus svg {
    color: ${colors.textWhite08};
    stroke: ${colors.orangeSecondary};
  }

  ${mq.tablet} {
    margin-top: 32px;
  }
`;
