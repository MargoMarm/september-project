import PropTypes from 'prop-types';
import { Container, Text, Icon } from './DiscriptionText.styled';
import sprite from '../../assets/sprite.svg';

const DiscriptionText = ({ text }) => {
  return (
    <>
      <Container>
        <Icon>
          <use href={sprite + `#icon-exclamation-mark`}></use>
        </Icon>
        <Text>{text}</Text>;
      </Container>
    </>
  );
};

DiscriptionText.propTypes = {
  text: PropTypes.string,
};

export default DiscriptionText;
