import { ProgressBar, BarItem } from './ParamsBar.styled';
import PropTypes from 'prop-types';
import { colors as palette } from '../../utils';

const ParamsBar = ({ steps, setSteps }) => {
  const Btn = ({ steps, step, setSteps, children }) => {
    return (
      <button
        style={{
          margin: '0',
          padding: '30px 0px',
          border: 'none',
          backgroundColor: ' rgba(0, 0, 0, 0)',
          cursor: 'pointer',
        }}
        onClick={() => {
          if (steps > 1) {
            setSteps(step);
          }
        }}
      >
        {children}
      </button>
    );
  };

  return (
    <ProgressBar>
      <Btn step={1} setSteps={setSteps} steps={steps}>
        <BarItem
          style={{
            background: steps >= 1 && `${palette.orangeSecondary}`,
            boxShadow: steps >= 1 && '0px 1px 10px 0px rgba(230, 83, 60, 0.8)',
          }}
        ></BarItem>
      </Btn>

      <Btn step={2} setSteps={setSteps} steps={steps}>
        <BarItem
          style={{
            background: steps >= 2 && steps > 1 && `${palette.orangeSecondary}`,
            boxShadow:
              steps >= 2 &&
              steps > 1 &&
              '0px 1px 10px 0px rgba(230, 83, 60, 0.8)',
          }}
        ></BarItem>
      </Btn>
      <Btn>
        <BarItem
          style={{
            background: steps === 3 && `${palette.orangeSecondary}`,
            boxShadow: steps === 3 && '0px 1px 10px 0px rgba(230, 83, 60, 0.8)',
          }}
        ></BarItem>
      </Btn>
    </ProgressBar>
  );
};

ParamsBar.propTypes = {
  steps: PropTypes.number.isRequired,
  step: PropTypes.number,
  setSteps: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default ParamsBar;
