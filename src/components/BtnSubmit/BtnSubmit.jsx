import PropTypes from 'prop-types';
import { ButtonSubmit } from './BtnSubmit.styled';

export default function BtnSubmit({
  title,
  margin,
  fontSize,
  btnNext = () => null,
}) {
  return (
    <ButtonSubmit
      type="submit"
      margin={margin}
      fontSize={fontSize}
      onClick={btnNext}
    >
      {title}
    </ButtonSubmit>
  );
}

BtnSubmit.propTypes = {
  title: PropTypes.string.isRequired,
  margin: PropTypes.object,
  fontSize: PropTypes.string,
  btnNext: PropTypes.func,
};
