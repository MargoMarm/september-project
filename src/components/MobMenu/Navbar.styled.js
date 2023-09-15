import styled from '@emotion/styled';

export const NavbarContainer = styled.div`
  background-color: #000000;
  height: 84px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const MenuBars = styled.div`
  margin-right: 2rem;
`;
export const ButtonMenu = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;
export const NavMenuItems = styled.ul`
  width: 100%;
  background-color: #e6533c;
`;
export const NavbarToggle = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ContainerMenu = styled.div`
  background-color: #060b26;
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



//? test ================

// const Link = styled.nav`
//   color: ${props => (props.active ? 'background-color: #060b26'
//   "width: 250px"
//   "height: 100vh"
//   "display: flex"
//   "justify-content: center"
//   "position: fixed"
//  " top: 0"
//   "left: -100%"
//   "transition: 850ms" : " left: 0",
//   "transition: 350ms")}
// `


