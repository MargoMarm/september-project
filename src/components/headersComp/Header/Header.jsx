import { HeaderContainer } from './Header.styled';
import UserNav from '../UserNav/UserNav';
import Logo from '../Logo/Logo';
import { Navbar } from '../../MobMenu/Sidebar';

export const Header = () => {
  return (
      <HeaderContainer>
        <Logo />
        <UserNav />
        <Navbar />
      </HeaderContainer>
  );
};



export default Header;
