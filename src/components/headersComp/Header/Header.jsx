import { HeaderContainer } from './Header.styled';
import UserNav from '../UserNav/UserNav';
import Logo from '../Logo/Logo';
import { MobMenu } from '../../MobMenu/Sidebar';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <UserNav />
      <MobMenu />
    </HeaderContainer>
  );
};

export default Header;
