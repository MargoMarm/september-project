import PropTypes from 'prop-types';
import { Button } from './ButtonIconForInput.styled';

export default function ButtonIconForInput({ children, onClick, right, type, }) {
  return (
    <Button onClick={onClick}  right={right} type={type} > 
      {children}
    </Button>
  );
}

ButtonIconForInput.propTypes = {
  // onClick: PropTypes.func.isRequired,
  right: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.object.isRequired,
};
