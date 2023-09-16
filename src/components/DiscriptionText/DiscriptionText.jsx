import PropTypes from 'prop-types';
import { Text } from './DiscriptionText.styled';

const DiscriptionText = ({ text }) => {
  return <Text>{text}</Text>;
};

DiscriptionText.propTypes = {
  text: PropTypes.string,
};

export default DiscriptionText;
