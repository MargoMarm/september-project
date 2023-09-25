import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '../../utils';
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
  Link,
  Overlay,
} from './MobMenu.styled';
import { UserAvatar } from '../headersComp/UserNav/UserNav.styled';
import { selectUser } from '../../redux/auth/selectors';

import sprite from '../../assets/sprite.svg';

const MobMenu = () => {
  const [mobMenu, setMobMenu] = useState(false);

  const toggleMobMenu = () => setMobMenu(!mobMenu);

  const dispatch = useDispatch();

  const { avatarURL } = useSelector(selectUser);

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
        <Link to={'/profile'}>
          <Svg>
            <use href={sprite + `#settings`}></use>
          </Svg>
        </Link>
        <ButtonMenu type="button">
          {avatarURL ? (
            <UserAvatar>
              <img src={avatarURL} alt="user's avatar" />
            </UserAvatar>
          ) : (
            <Svg>
              <use href={sprite + `#user`}></use>
            </Svg>
          )}
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
            <li onClick={toggleMobMenu}>
              <CustomNavLink to={'/diary'} text="Diary" />
            </li>
            <li onClick={toggleMobMenu}>
              <CustomNavLink to={'/products'} text="Products" />
            </li>
            <li onClick={toggleMobMenu}>
              <CustomNavLink to={'/exercises'} text="Exercises" />
            </li>
          </ContainerLink>

          <NavbarToggle>
            <MenuBars to="#">
              <ButtonMenu
                type="button"
                onClick={() => {
                  toggleMobMenu();
                  handleLogout(dispatch);
                }}
              >
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
