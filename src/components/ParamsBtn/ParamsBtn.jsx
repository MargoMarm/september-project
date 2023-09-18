import PropTypes from 'prop-types';
import { Div, BtnNav, Svg } from './ParamsBtn.styled';

const ParamsBtn = ({ setSteps, type, step }) => {
  if (type === 'next') {
    return (
      <Div>
        <BtnNav
          type="button"
          onClick={() => {
            setSteps(step);
          }}
        >
          Next
        </BtnNav>
        <Svg viewBox="0 0 20 20">
          <path
            d="M11.3333 14.1666L15.5 9.99998M15.5 9.99998L11.3333 5.83331M15.5 9.99998H5.5"
            
          />
        </Svg>
      </Div>
    );
  }

  if (type === 'back') {
    return (
      <Div>
        <Svg viewBox="0 0 20 20">
          <path
            d="M8.66667 14.1666L4.5 9.99998M4.5 9.99998L8.66667 5.83331M4.5 9.99998H14.5"
          
          />
        </Svg>
        <BtnNav
          type="button"
          onClick={() => {
            setSteps(step);
          }}
        >
          Back
        </BtnNav>
      </Div>
    );
  }
};

ParamsBtn.propTypes = {
  setSteps: PropTypes.func.isRequired,
  type: PropTypes.string,
  step: PropTypes.number.isRequired,
};

export default ParamsBtn;
