import { useState } from 'react';
import {NavbarContainer, MenuBars,ButtonMenu,NavMenuItems,NavbarToggle,ContainerMenu} from './Navbar.styled'
import sprite from '../../assets/sprite.svg'


export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

return (
  <>
    <NavbarContainer>
      <MenuBars to='#'>
        <ButtonMenu type="button" onClick={showSidebar}>
          <svg width={24} height={24} fill='white'>
            <use href={sprite + `#fire`}></use>
          </svg>       </ButtonMenu>
      </MenuBars>
    </NavbarContainer>

    <ContainerMenu className={sidebar ? 'active' : 'null'}>
      <NavMenuItems onClick={showSidebar}>
        <NavbarToggle>
          <MenuBars to='#'>
            <ButtonMenu type="button" onClick={showSidebar}>
              Logout
              <svg width={24} height={24} fill='white'>
                <use href={sprite + `#fire`}></use>
              </svg>       </ButtonMenu>
          </MenuBars>
        </NavbarToggle>
      </NavMenuItems>
    </ContainerMenu>
  </>
);
}

export default Navbar;
