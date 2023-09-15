import { useState } from 'react';
import { Header } from '../headersComp/Header/Header';
import CustomNavLink from '../CustomNavLink/CustomNavLink';
import {
  MenuBars,
  ButtonMenu,
  ButtonMenuExit,
  NavMenuItems,
  NavbarToggle,
  ContainerMenu,
  ContainerLink,
  Span,
} from './Sidebar.styled';
import sprite from '../../assets/sprite.svg';


export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Header>
        <MenuBars to="#">
          <ButtonMenu type="button" onClick={showSidebar}>
            <svg width={24} height={24} fill="white">
              <use href={sprite + `#dumbbell`}></use>
            </svg>{' '}
          </ButtonMenu>
        </MenuBars>
      </Header>

      <ContainerMenu className={sidebar === true ? 'active' : ''}>
        <NavMenuItems onClick={showSidebar}>
          <ButtonMenuExit type="button" onClick={showSidebar}>
            Exit
            <svg width={24} height={24} fill="white">
              <use href={sprite + `#fire`}></use>
            </svg>{' '}
          </ButtonMenuExit>
          <ContainerLink>
            <CustomNavLink text="Diary" />
            <CustomNavLink text="Products" />
            <CustomNavLink text="Exercises" />
          </ContainerLink>

          <NavbarToggle>
            <MenuBars to="#">
              <ButtonMenu type="button" onClick={showSidebar}>
                <Span> Logout</Span>
                <svg width={24} height={24} fill="white">
                  <use href={sprite + `#fire`}></use>
                </svg>{' '}
              </ButtonMenu>
            </MenuBars>
          </NavbarToggle>
        </NavMenuItems>
      </ContainerMenu>
    </>
  );
};

export default Navbar;
