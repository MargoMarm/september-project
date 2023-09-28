import { useLocation } from 'react-router-dom';
import { HeaderContainer } from './Header.styled';
import UserNav from '../UserNav/UserNav';
import Logo from '../Logo/Logo';
import MobMenu from '../../MobMenu/MobMenu';

import { UseAuth } from '../../../hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = UseAuth();
	const { pathname } = useLocation();
	const isMatchingRoute = [
    '/',
    '/signin',
    '/signup',
    '/params',
    '/profile',
    '/diary',
    '/exercises',
    '/products',
	].some(route => pathname === route);
	
  const isBorderToRender = isLoggedIn && pathname !== '/params';

  if (!isMatchingRoute) {
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
