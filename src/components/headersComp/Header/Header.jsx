import PropTypes from 'prop-types';
import { HeaderContainer } from './Header.styled';
// import UserNav from '../UserNav/UserNav';
import Logo from '../Logo/Logo';

export const Header = ({ children }) => {
  return (
    <>
      <HeaderContainer>
        <Logo biglogo={true}/>
        {/* <UserNav /> */}
      </HeaderContainer>
      {children}
    </>
  );
};

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
