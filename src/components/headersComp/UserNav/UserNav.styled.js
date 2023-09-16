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
  fill: ${colors.grey};
`;
export const SvgUser = styled.svg`
  ${svgUser}
`;
export const ButtonWrap = styled.div`
  display: flex;
  margin-left: 30px;
  gap: 16px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  ${button};
`;
export const Span = styled.span`
  color: ${colors.orange};
  font-size: 16px;
  line-height: 24px;

  ${mq.desktop} {
    gap: 8px;
  }
`;
