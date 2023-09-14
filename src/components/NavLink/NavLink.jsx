import { Link } from './NavLink.styled';

import PropTypes from 'prop-types';

const CustomNavLink = ({ to, isOrange, isInHeader, text }) => {
  return (
    <Link isOrange={isOrange} isInHeader={isInHeader} to={to}>
      {text}
    </Link>
  );
};

CustomNavLink.propTypes = {
  to: PropTypes.string,
  isOrange: PropTypes.bool,
  isInHeader: PropTypes.bool,
  text: PropTypes.string,
};

export default CustomNavLink;
