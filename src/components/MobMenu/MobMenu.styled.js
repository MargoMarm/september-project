import styled from '@emotion/styled';
import { mq, colors, button, svgUser } from '../../utils';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  ${mq.desktop} {
    display: none;
  }
`;

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

export const AvatarWrapper = styled.div`
  width: 37px;
  height: 37px;
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
  ${mq.tablet} {
    width: 46px;
    height: 46px;
  }
  ${mq.desktop} {
    display: none;
  }
`;

export const Svg = styled.svg`
  stroke: ${colors.grey};
  width: 24px;
  height: 24px;

  ${mq.tablet} {
    height: 32px;
    width: 32px;
  }
`;
export const SvgUser = styled.svg`
  @media (max-width: 376px) {
    width: 37px;
    height: 37px;
  }
  ${svgUser}
`;

export const ButtonMenuExit = styled.button`
  ${button}
  margin-left: auto;
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
    font-size: 18px;
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
  position: relative;

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: -100%;
  transition: 850ms;
  z-index: 999;

  ${mq.tablet} {
    width: 350px;
  }

  &.active {
    right: 0;
    transition: 350ms;
  }
`;

export const ContainerLink = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;
