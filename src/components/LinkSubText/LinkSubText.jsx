import { Text, Link } from './LinkSubText.styled';

import PropTypes from 'prop-types';

const LinkSubText = ({ to, linkText, text }) => {
  return (
    <Text>
      {text}
      <Link to={to}>{linkText}</Link>
    </Text>
  );
};

LinkSubText.propTypes = {
  to: PropTypes.string,
  linkText: PropTypes.string,
  text: PropTypes.string,
};

export default LinkSubText;
