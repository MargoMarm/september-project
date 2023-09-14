import { Text, Link } from './LinkSubText.styled';

import PropTypes from 'prop-types';

const LinkSubText = ({ to, linkText, children }) => {
  return (
    <Text>
      {children}
      <Link to={to}>{linkText}</Link>
    </Text>
  );
};

LinkSubText.propTypes = {
  to: PropTypes.string,
  linkText: PropTypes.string,
  children: PropTypes.string,
};

export default LinkSubText;
