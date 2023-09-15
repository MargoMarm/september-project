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
            <use href={sprite + `#fire`}></use>
          </Svg>
        </ButtonMenu>
        <ButtonMenu type="button">
          <Svg>
            <use href={sprite + `#fork-and-knife`}></use>
          </Svg>
        </ButtonMenu>
        <ButtonMenu type="button" onClick={showSidebar}>
          <Svg>
            <use href={sprite + `#apple`}></use>
          </Svg>
        </ButtonMenu>
      </MenuBars>

      <ContainerMenu className={sidebar === true ? 'active' : ''}>
        <NavMenuItems onClick={showSidebar}>
          <ButtonMenuExit type="button" onClick={showSidebar}>
            <Svg>
              <use href={sprite + `#apple`}></use>
            </Svg>
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
                <Svg>
                  <use href={sprite + `#apple`}></use>
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
