import { SubStyle } from './SubTitle.styled';
import PropTypes from 'prop-types';

const SubTitle = ({ text }) => {
  console.log(text);
  return <SubStyle>{text}</SubStyle>;
};

SubTitle.propTypes = {
  text: PropTypes.string,
};

export default SubTitle;
