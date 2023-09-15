import React from 'react';
import { SubStyle } from './SubTitle.styled';

const SubTitle = ({ text }) => {
  return (
    <SubStyle>
      <div>{text}</div>
    </SubStyle>
  );
};

export default SubTitle;
