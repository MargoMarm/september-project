import React from 'react';
import { StyledTitle } from './Title.styled';

const TitleLess = ({ text }) => {
  return (
    <StyledTitle>
      <h2>{text}</h2>
    </StyledTitle>
  );
};

export default TitleLess;
