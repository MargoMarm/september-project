// import React from 'react';
import { StyledTitle } from './Title.styled';

import PropTypes from 'prop-types';

const Title = ({ text }) => {
  console.log(text);
  return <StyledTitle>{text}</StyledTitle>;
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
