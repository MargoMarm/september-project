import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import PropTypes from 'prop-types';

import sprite from '../../assets/sprite.svg';
import {
  TimerTitle,
  FlexContainer,
  PauseButton,
  Svg,
  BurntCaloryLabel,
  BurntCaloryInfo,
} from './Timer.styled';

export default function Timer({
  writeTime,
  isPlaying,
  calory,
  startExercise,
  stopExercise,

  round,
}) {
  return (
    <>
      <FlexContainer>
        <TimerTitle>Timer</TimerTitle>
        <CountdownCircleTimer
          size={124}
          duration={180}
          colors={round === 1 ? '#E6533C' : '#419B09'}
          strokeWidth={4}
          trailColor="#EFEDE81A"
          isPlaying={isPlaying}
          onComplete={() => {
            return { shouldRepeat: true, delay: 0 };
          }}
        >
          {writeTime}
        </CountdownCircleTimer>
      </FlexContainer>

      <FlexContainer>
        {isPlaying ? (
          <PauseButton type="button" onClick={stopExercise}>
            <Svg>
              <use href={sprite + '#pause'}></use>
            </Svg>
          </PauseButton>
        ) : (
          <PauseButton type="button" onClick={startExercise}>
            <Svg>
              <use href={sprite + '#play'}></use>
            </Svg>
          </PauseButton>
        )}
        <BurntCaloryLabel>
          Burned calories:
          <BurntCaloryInfo>{calory}</BurntCaloryInfo>
        </BurntCaloryLabel>
      </FlexContainer>
    </>
  );
}

Timer.propTypes = {
  calory: PropTypes.number.isRequired,
  writeTime: PropTypes.func.isRequired,
  startExercise: PropTypes.func.isRequired,
  stopExercise: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  round: PropTypes.number.isRequired,
};
