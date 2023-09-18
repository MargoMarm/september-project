import { useState, useEffect } from 'react';
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
  Overlay,
} from './MobMenu.styled';
import sprite from '../../assets/sprite.svg';

const MobMenu = () => {
  const [mobMenu, setMobMenu] = useState(false);

  const toggleMobMenu = () => setMobMenu(!mobMenu);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleMobMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleMobMenu]);

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
        <ButtonMenu type="button" onClick={toggleMobMenu}>
          <Svg>
            <use href={sprite + `#menu`}></use>
          </Svg>
        </ButtonMenu>
		  </MenuBars>
		  
      {mobMenu && <Overlay onClick={toggleMobMenu}></Overlay>}
      <ContainerMenu className={mobMenu === true ? 'active' : ''}>
        <NavMenuItems>
          <ButtonMenuExit type="button" onClick={toggleMobMenu}>
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
              <ButtonMenu type="button" onClick={toggleMobMenu}>
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

export default MobMenu;
