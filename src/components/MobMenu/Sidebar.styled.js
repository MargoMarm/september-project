import styled from '@emotion/styled';
import { mq } from '../../utils';

export const MenuBars = styled.div`
  margin-right: 2rem;
`;

const CommondStyledBtn = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  margin: 0,
  padding: 0,
  border: 'none',
};

export const ButtonMenu = styled.button`
  ${CommondStyledBtn}
  background-color: rgba(0, 0, 0, 0);
  ${mq.tablet} {
    display: none;
  }
`;

export const ButtonMenuExit = styled.button`
  ${CommondStyledBtn}
  flex-direction: row-reverse;
  background-color: rgba(0, 0, 0, 0);
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  font-size: 14px;
  color: white;
`;

export const NavMenuItems = styled.div`
  display: flex;
  width: 100%;
  background-color: #e6533c;
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
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;

  &.active {
    left: 0;
    transition: 350ms;
  }
`;

export const ContainerLink = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
