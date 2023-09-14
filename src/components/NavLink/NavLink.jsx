import { Link } from './NavLink.styled';

import PropTypes from 'prop-types';

const NavLink = ({ to, signUp, children }) => {
  return (
    <>
      <Link signUp={signUp} to={to}>
        {children}
      </Link>
    </>
  );
};

NavLink.propTypes = {
  to: PropTypes.string,
  signUp: PropTypes.string,
  children: PropTypes.string,
};

export default NavLink;
