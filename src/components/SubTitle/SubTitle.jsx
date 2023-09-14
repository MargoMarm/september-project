import React from 'react';
import { SubStyle } from './SubTitle.styled';

const SubTitle = ({ children }) => {
  return (
    <SubStyle>
      <div>{children}</div>
    </SubStyle>
  );
};

export default SubTitle;
