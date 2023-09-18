import PropTypes from 'prop-types';
import { AuthBtn } from './AuthButton.styled';

export default function AuthButton({ title, ...props }) {
  return (
    <AuthBtn {...props} type="submit">
      {title}
    </AuthBtn>
  );
}

AuthButton.propTypes = {
  title: PropTypes.string.isRequired,
};
