import { useLocation } from 'react-router-dom';
import { HeaderContainer } from './Header.styled';
import UserNav from '../UserNav/UserNav';
import Logo from '../Logo/Logo';
import MobMenu from '../../MobMenu/MobMenu';

import { UseAuth } from '../../../hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = UseAuth();
  const { pathname } = useLocation();
  const isBorderToRender = isLoggedIn && pathname !== '/params';

  if (pathname === '/error') {
    return null;
  }

  return (
    <HeaderContainer isBorderToRender={isBorderToRender}>
      <Logo />
      {isLoggedIn && pathname !== '/params' && (
        <>
          <UserNav />
          <MobMenu />
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
