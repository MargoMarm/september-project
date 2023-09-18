import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import CustomNavLink from '../CustomNavLink/CustomNavLink';
import {
  MenuBars,
  ButtonMenu,
  NavMenuItems,
  NavbarToggle,
  ContainerMenu,
  ContainerLink,
  Span,
  Svg,
  SvgUser,
} from './MobMenu.styled';

import sprite from '../../assets/sprite.svg';

export const MobMenu = () => {
  const [openModal, setOpenModal] = useState(false);

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

        <ButtonMenu type="button" onClick={() => setOpenModal(true)}>
          <Svg>
            <use href={sprite + `#menu`}></use>
          </Svg>
        </ButtonMenu>
      </MenuBars>
      {openModal && (
        <Modal openModal={setOpenModal}>
          <ContainerMenu className={openModal === true ? 'active' : ''}>
            <NavMenuItems>
              <ContainerLink>
                <CustomNavLink text="Diary" />
                <CustomNavLink text="Products" />
                <CustomNavLink text="Exercises" />
              </ContainerLink>

              <NavbarToggle>
                <ButtonMenu type="button" onClick={() => setOpenModal(false)}>
                  <Span> Logout</Span>
                  <Svg>
                    <use href={sprite + `#logout`}></use>
                  </Svg>
                </ButtonMenu>
              </NavbarToggle>
            </NavMenuItems>
          </ContainerMenu>
        </Modal>
      )}
    </>
  );
};

export default MobMenu;
