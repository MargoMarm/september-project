import { ProgressBar, BarItem } from './ParamsBar.styled';
import PropTypes from 'prop-types';
import { colors as palette } from '../../utils';

const ParamsBar = ({ steps }) => {
  return (
    <ProgressBar>
      <BarItem
        style={{
          background: steps >= 1 && `${palette.orangeSecondary}`,
          boxShadow: steps >= 1 && '0px 1px 10px 0px rgba(230, 83, 60, 0.8)',
        }}
      ></BarItem>
      <BarItem
        style={{
          background: steps >= 2 && steps > 1 && `${palette.orangeSecondary}`,
          boxShadow:
            steps >= 2 &&
            steps > 1 &&
            '0px 1px 10px 0px rgba(230, 83, 60, 0.8)',
        }}
      ></BarItem>
      <BarItem
        style={{
          background: steps === 3 && `${palette.orangeSecondary}`,
          boxShadow: steps === 3 && '0px 1px 10px 0px rgba(230, 83, 60, 0.8)',
        }}
      ></BarItem>
    </ProgressBar>
  );
};

ParamsBar.propTypes = {
  steps: PropTypes.number.isRequired,
};

export default ParamsBar;
