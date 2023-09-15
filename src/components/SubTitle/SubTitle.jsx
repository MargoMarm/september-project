import React from 'react';
import { SubStyle } from './SubTitle.styled';

const SubTitle = ({ text }) => {
  return (
    <SubStyle>
      {text}
    </SubStyle>
  );
};

export default SubTitle;
