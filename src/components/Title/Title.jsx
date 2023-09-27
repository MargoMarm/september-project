import { StyledTitle } from './Title.styled';
import PropTypes from 'prop-types';
import 'animate.css';

const Title = ({ text, margin }) => {
  return <StyledTitle margin={margin}>{text}</StyledTitle>;
};

Title.propTypes = {
  text: PropTypes.string,
  margin: PropTypes.object,
};

export default Title;
