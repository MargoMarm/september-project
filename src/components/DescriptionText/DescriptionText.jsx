import PropTypes from 'prop-types';
import { ExclamationIcon, ExclamationText } from './DescriptionText.styled';
import sprite from '../../assets/sprite.svg';

const DescriptionText = ({ text, width }) => {
  return (
    <ExclamationText width={width}>
      <ExclamationIcon>
        <use href={sprite + `#icon-exclamation-mark`}></use>
      </ExclamationIcon>
      {text}
    </ExclamationText>
  );
};

DescriptionText.propTypes = {
  text: PropTypes.string,
  width: PropTypes.object,
};

export default DescriptionText;
