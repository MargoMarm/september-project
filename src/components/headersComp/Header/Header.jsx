import { useLocation } from 'react-router-dom';
import { HeaderContainer } from './Header.styled';
import UserNav from '../UserNav/UserNav';
import Logo from '../Logo/Logo';
import MobMenu from '../../MobMenu/MobMenu';

import { UseAuth } from '../../../hooks/useAuth';

export const Header = () => {
  const { isLoggedIn, isRefreshing } = UseAuth();

  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <Logo />
      {isLoggedIn && pathname !== '/params' && isRefreshing && (
        <>
          <UserNav />
          <MobMenu />
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
