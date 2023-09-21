import PropTypes from 'prop-types';

import {
  BtnSubtitleText,
  BtnSubtitleLink,
  TextWrapper,
} from './BtnSubtitle.styled';

const BtnSubtitle = ({ text, linkText, to }) => {
  return (
    <TextWrapper>
      <BtnSubtitleText>{text}</BtnSubtitleText>
      <BtnSubtitleLink to={to}>{linkText}</BtnSubtitleLink>
    </TextWrapper>
  );
};

BtnSubtitle.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default BtnSubtitle;
