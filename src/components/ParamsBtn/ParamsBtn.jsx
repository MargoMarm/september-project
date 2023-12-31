import PropTypes from 'prop-types';
import { BtnNav, Svg } from './ParamsBtn.styled';
import Notiflix from 'notiflix';

const ParamsBtn = ({ setSteps, type, step, values }) => {
  if (type === 'next') {
    return (
      <BtnNav
        type="button"
        onClick={() => {
          if (
            step === 2 &&
            values.height !== '' &&
            values.currentWeight !== '' &&
            values.desiredWeight !== ''
          ) {
            setSteps(step);
            return;
          }

          if (
            step === 3 &&
            values.blood !== '' &&
            values.sex !== '' &&
            values.levelActivity !== ''
          ) {
            setSteps(step);
            return;
          }

          Notiflix.Notify.warning('pls fill all fields');
        }}
      >
        Next
        <Svg viewBox="0 0 20 20" style={{ marginLeft: '4px' }}>
          <path d="M11.3333 14.1666L15.5 9.99998M15.5 9.99998L11.3333 5.83331M15.5 9.99998H5.5" />
        </Svg>
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
        <Svg viewBox="0 0 20 20" style={{ marginRight: '4px' }}>
          <path d="M8.66667 14.1666L4.5 9.99998M4.5 9.99998L8.66667 5.83331M4.5 9.99998H14.5" />
        </Svg>
        Back
      </BtnNav>
    );
  }
};

ParamsBtn.propTypes = {
  setSteps: PropTypes.func.isRequired,
  type: PropTypes.string,
  step: PropTypes.number.isRequired,
  validate: PropTypes.func,
  values: PropTypes.object,
};

export default ParamsBtn;
