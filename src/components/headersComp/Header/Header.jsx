import { HeaderContainer } from './Header.styled';
import UserNav from '../UserNav/UserNav';
import Logo from '../Logo/Logo';
import MobMenu from '../../MobMenu/MobMenu';

import { UseAuth } from '../../../hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = UseAuth();

  return (
    <HeaderContainer>
      <Logo />
      {isLoggedIn && (
        <>
          <UserNav />
          <MobMenu />
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
