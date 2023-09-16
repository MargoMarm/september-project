import { Text } from './ParamsText.styled';

import PropTypes from 'prop-types';

const ParamsText = ({ mb_m, mb_t, mb_d, children }) => {
  return (
    <Text mb_m={mb_m} mb_t={mb_t} mb_d={mb_d}>
      {children}
    </Text>
  );
};

ParamsText.propTypes = {
  mb_m: PropTypes.string,
  mb_t: PropTypes.string,
  mb_d: PropTypes.string,
};

export default ParamsText;
