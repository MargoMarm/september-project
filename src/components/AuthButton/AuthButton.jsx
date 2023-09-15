import PropTypes from 'prop-types';
import { AuthBtn } from './AuthButton.styled';

export default function AuthButton({ title }) {
  return <AuthBtn>{title}</AuthBtn>;
}

AuthButton.propTypes = {
  title: PropTypes.string.isRequired,
};
