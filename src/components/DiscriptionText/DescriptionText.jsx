import PropTypes from 'prop-types';
import { Container, Text, Icon } from './DescriptionText.styled';
import sprite from '../../assets/sprite2.svg';

const DescriptionText = ({ text }) => {
  return (
      <Container>
        <Icon>
          <use href={sprite + `#icon-exclamation-mark`}></use>
        </Icon>
        <Text>{text}</Text>
      </Container>
  );
};

DescriptionText.propTypes = {
  text: PropTypes.string,
};

export default DescriptionText;
