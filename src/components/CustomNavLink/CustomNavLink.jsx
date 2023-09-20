import { Link } from './CustomNavLink.styled';

import PropTypes from 'prop-types';

const CustomNavLink = ({ to, isrange, isinheader, text }) => {
  return (
    <Link isrange={isrange} isinheader={isinheader} to={to}>
      {text}
    </Link>
  );
};

CustomNavLink.propTypes = {
  to: PropTypes.string,
  isrange: PropTypes.string,
  isinheader: PropTypes.string,
  text: PropTypes.string,
};

export default CustomNavLink;
