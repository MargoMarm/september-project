import PropTypes from 'prop-types';
import { BtnNav } from './ParamsBtn.styled';

const ParamsBtn = ({ setSteps, type, step }) => {
  if (type === 'next') {
    return (
      <BtnNav
        type="button"
        onClick={() => {
          setSteps(step);
        }}
      >
        Next
      </BtnNav>
    );
  }

  if (type === 'back') {
    return (
      <BtnNav
        type="button"
        onClick={() => {
          setSteps(step);
        }}
      >
        Back
      </BtnNav>
    );
  }
};

ParamsBtn.propTypes = {
  setSteps: PropTypes.func.isRequired,
  type: PropTypes.string,
  step: PropTypes.number.isRequired,
};

export default ParamsBtn;
