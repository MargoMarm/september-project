import styled from '@emotion/styled';
import { mq, colors, button, svgUser } from '../../utils';

export const MenuBars = styled.div`
  display: flex;
  margin-right: 20px;
  gap: 14px;

  ${mq.tablet} {
    margin-right: 32px;
    gap: 16px;
  }
`;

export const ButtonMenu = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  ${button}

  ${mq.desktop} {
    display: none;
  }
`;
export const Svg = styled.svg`
  fill: ${colors.grey};
  width: 24px;
  height: 24px;
`;
export const SvgUser = styled.svg`
  @media (max-width: 376px) {
    width: 37px;
    height: 37px;
  }
  ${svgUser}
`;

export const ButtonMenuExit = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  ${button}
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  color: ${colors.white};
  font-family: Roboto;
  font-size: 14px;

  ${mq.tablet} {
    color: ${colors.white};
    font-size: 16px;
    line-height: 24px;
  }
`;

export const NavMenuItems = styled.div`
  display: flex;
  width: 100%;
  background-color: ${colors.orange};
  padding: 20px 20px 0px 20px;
  flex-direction: column;
  justify-content: space-between;
`;
export const NavbarToggle = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ContainerMenu = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: -100%;
  transition: 850ms;
  z-index: 1;

  ${mq.tablet} {
    width: 250px;
  }

  &.active {
    right: 0;
    transition: 350ms;
  }
`;

export const ContainerLink = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
