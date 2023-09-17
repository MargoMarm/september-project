import { StyledTitle } from './Title.styled';
import PropTypes from 'prop-types';

const Title = ({ text, margin }) => {
  return <StyledTitle margin={margin}>{text}</StyledTitle>;
};

Title.propTypes = {
  text: PropTypes.string,
  margin: PropTypes.number,
};

export default Title;
