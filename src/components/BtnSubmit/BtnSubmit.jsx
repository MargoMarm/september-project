import PropTypes from 'prop-types';
import { ButtonSubmit } from './BtnSubmit.styled';

export default function BtnSubmit({ title, margin, fontSize }) {
  return (
    <ButtonSubmit type="submit" margin={margin} fontSize={fontSize}>
      {title}
    </ButtonSubmit>
  );
}

BtnSubmit.propTypes = {
  title: PropTypes.string.isRequired,
  margin: PropTypes.object,
  fontSize: PropTypes.string,
};
