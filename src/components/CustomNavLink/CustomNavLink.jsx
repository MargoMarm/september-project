import { Link } from './CustomNavLink.styled';

import PropTypes from 'prop-types';

const CustomNavLink = ({ to, isorange, isinheader, text }) => {
  return (
    <Link isorange={isorange} isinheader={isinheader} to={to}>
      {text}
    </Link>
  );
};

CustomNavLink.propTypes = {
  to: PropTypes.string,
  isorange: PropTypes.bool,
  isinheader: PropTypes.bool,
  text: PropTypes.string,
};

export default CustomNavLink;
