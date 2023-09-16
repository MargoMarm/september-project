import React from 'react';
import { BtnSubtitleText, BtnSubtitleLink , TextWrapper} from './BtnSubtitle.styled';

const BtnSubtitle = ({ text, linkText, to }) => {
  return (
    <TextWrapper>
      <BtnSubtitleText>{text}</BtnSubtitleText>
      <BtnSubtitleLink to={to}>{linkText}</BtnSubtitleLink>
    </TextWrapper>
  );
};

export default BtnSubtitle;
