import PropTypes from 'prop-types';
import { HeaderContainer } from './Header.styled';
import UserNav from '../UserNav/UserNav';
import Logo from '../Logo/Logo';
import { Navbar } from '../../MobMenu/Sidebar';

export const Header = ({ children }) => {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <UserNav />
        <Navbar />
      </HeaderContainer>
      {children}
    </>
  );
};

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
