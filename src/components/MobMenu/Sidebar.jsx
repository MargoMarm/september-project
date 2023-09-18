import { useState } from 'react';
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
  Svg,
  SvgUser,
} from './Sidebar.styled';
import sprite from '../../assets/sprite.svg';

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <MenuBars to="#">
        <ButtonMenu type="button">
          <Svg>
            <use href={sprite + `#settings`}></use>
          </Svg>
        </ButtonMenu>
        <ButtonMenu type="button">
          <SvgUser>
            <use href={sprite + `#ecllipse`}></use>
          </SvgUser>
        </ButtonMenu>
        <ButtonMenu type="button" onClick={showSidebar}>
          <Svg>
            <use href={sprite + `#menu`}></use>
          </Svg>
        </ButtonMenu>
      </MenuBars>

      <ContainerMenu className={sidebar === true ? 'active' : ''}>
        <NavMenuItems onClick={showSidebar}>
          <ButtonMenuExit type="button" onClick={showSidebar}>
            <Svg>
              <use href={sprite + `#close`}></use>
            </Svg>
          </ButtonMenuExit>
          <ContainerLink>
            <CustomNavLink to={'/dairy'} text="Diary" />
            <CustomNavLink to={'/products'} text="Products" />
            <CustomNavLink to={'/exercises'} text="Exercises" />
          </ContainerLink>

          <NavbarToggle>
            <MenuBars to="#">
              <ButtonMenu type="button" onClick={showSidebar}>
                <Span> Logout</Span>
                <Svg>
                  <use href={sprite + `#logout`}></use>
                </Svg>
              </ButtonMenu>
            </MenuBars>
          </NavbarToggle>
        </NavMenuItems>
      </ContainerMenu>
    </>
  );
};

export default Navbar;
