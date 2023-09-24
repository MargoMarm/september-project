import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useState } from 'react';
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
  calories,
  writeTime,
  countCalory,
  remainingTime,
  time,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const toglePlaying = () => {
    setIsPlaying(prevstate => !prevstate);
  };

  return (
    <>
      <FlexContainer>
        <TimerTitle>Timer</TimerTitle>
        <CountdownCircleTimer
          size={124}
          duration={180}
          colors="#E6533C"
          strokeWidth={4}
          trailColor="#EFEDE81A"
          isPlaying={isPlaying}
        >
          {writeTime}
        </CountdownCircleTimer>
      </FlexContainer>

      <FlexContainer>
        <PauseButton type="button" onClick={toglePlaying}>
          <Svg>
            <use href={sprite + `${isPlaying ? '#pause' : '#play'}`}></use>
          </Svg>
        </PauseButton>

        <BurntCaloryLabel>
          Burned calories:
          <BurntCaloryInfo>
            {countCalory(remainingTime, calories, time)}
          </BurntCaloryInfo>
        </BurntCaloryLabel>
      </FlexContainer>
    </>
  );
}

Timer.propTypes = {
  calories: PropTypes.string.isRequired,
  writeTime: PropTypes.func.isRequired,
  countCalory: PropTypes.func.isRequired,
  remainingTime: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
};
