import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { mq, colors, button } from '../../utils';

export const Section = styled.section`
  outline: 1px solid green;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border: 1px solid ${colors.orange};
  border-radius: 50%;
  margin: 0 auto 32px;
`;

export const UserSVG = styled.svg`
  width: 62px;
  height: 62px;
  fill: ${colors.grey};
  fill-opacity: 0.1;
`;

export const ImgWrap = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
`

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
    opacity: 0;
    visibility: hidden;
    position: absolute;
    width: 0;
    height: 0;
  }

  & svg {
    width: 24px;
    height: 24px;
    fill: ${colors.orange};
    stroke: ${colors.white};
  }
`;

export const H3 = styled.h3`
  color: ${colors.grey};
  font-size: 18px;
  line-height: 1.1;
  font-weight: 400;
  text-align: center;
  margin-bottom: 40px;
`;

export const CardWrap =  styled.div`
  display: flex;
  justify-content: center;
  gap: 0 14px;
`;

export const Button = styled.button`
  ${button};
  display: flex;
  margin-left: auto;
  gap: 0 8px;
  & span {
    color: ${colors.grey};
    font-size: 14px;
    line-height: 1.3; 
  }
  & svg {
    stroke: ${colors.orange};
    width: 20px;
    height: 20px;
  }
`;
