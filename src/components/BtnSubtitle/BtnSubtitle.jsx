import React from 'react';
import { BtnSubtitleText, BtnSubtitleLink } from './BtnSubtitle.styled';

const BtnSubtitle = ({ text, linkText, to }) => {
  return (
    <>
      <BtnSubtitleText>{text}</BtnSubtitleText>
      <BtnSubtitleLink to={to}>{linkText}</BtnSubtitleLink>
    </>
  );
};

export default BtnSubtitle;
