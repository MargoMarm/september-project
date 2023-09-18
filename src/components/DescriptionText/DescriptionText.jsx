import PropTypes from 'prop-types';
import { Container, Text, Icon } from './DescriptionText.styled';
import sprite from '../../assets/sprite.svg';

const DescriptionText = ({ text, width }) => {
  return (
    <Container width={width}>
      <Icon>
        <use href={sprite + `#icon-exclamation-mark`}></use>
      </Icon>
      <Text>{text}</Text>;
    </Container>
  );
};

DescriptionText.propTypes = {
  text: PropTypes.string,
  width: PropTypes.object,
};

export default DescriptionText;
