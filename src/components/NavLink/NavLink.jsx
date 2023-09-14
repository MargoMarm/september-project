import { Link } from './NavLink.styled';

import PropTypes from 'prop-types';

const NavLink = ({ to, isOrange, text }) => {
  return (
    <Link isOrange={isOrange} to={to}>
      {text}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string,
  isOrange: PropTypes.bool,
  text: PropTypes.string,
};

export default NavLink;
