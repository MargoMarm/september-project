import React from 'react';
import { StyledTitle } from './Title.styled';

const Title = ({ text }) => {
  return (
    <StyledTitle>
      <h2>{text}</h2>
    </StyledTitle>
  );
};

export default Title;
