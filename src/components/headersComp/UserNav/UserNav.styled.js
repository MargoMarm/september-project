import styled from '@emotion/styled';
import { mq, colors, button, svgUser } from '../../../utils';

export const WrapUserNav = styled.div`
  ${mq.smallMobile} {
    display: none;
  }
  ${mq.desktop} {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;
  }
`;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: currentColor;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    scale: 1.2;
  }
`;
export const SvgUser = styled.svg`
  ${svgUser}
`;
export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  gap: 16px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${colors.orange};
  ${button};
`;
export const Span = styled.span`
  font-size: 16px;
  line-height: 24px;

  ${mq.desktop} {
    gap: 8px;
  }
`;

export const UserAvatar = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid ${colors.orange};
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 100%;
    height: auto;
  }
`;
