import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import BtnSubmit from '../BtnSubmit';
import Timer from '../Timer';
import {
  Watch,
  ButtonWrapper,
  CardInfo,
  CardTitle,
  Container,
  GifContainer,
  Img,
  InfoCard,
  InfoCardConteiner,
  TimerContainer,
} from './AddExercizeForm.styled';
import { addToDiary } from '../../httpRequests/addToDiary';
import { getCurrentDate } from '../../utils/getCurrentDate';

export default function AddExerciseForm({
  exerciseId,
  calories,
  name,
  bodyPart,
  gifUrl,
  target,
  equipment,
  time = 180,
}) {
  const [remainingTime, setremainingTime] = useState(0);
  const [burnedCalory, setBurnedCalory] = useState(0);

  const writeRemainengTime = ({ remainingTime }) => {
    setremainingTime(remainingTime);

    const minutes =
      Math.floor(remainingTime / 60).toString().length > 1
        ? Math.floor(remainingTime / 60)
        : '0' + Math.floor(remainingTime / 60);
    const seconds =
      (remainingTime % 60).toString().length > 1
        ? remainingTime % 60
        : '0' + (remainingTime % 60);

    return (
      <Watch>
        {minutes}:{seconds}
      </Watch>
    );
  };

  const countCalory = (remainingTime, calory = 180, time = 180) => {
    const burnedCalory = Math.floor(((time - remainingTime) * calory) / time);
    setBurnedCalory(burnedCalory);

    return burnedCalory;
  };

  const handleSubmit = () => {
    const date = getCurrentDate();
    const workTime = time - remainingTime;
    const data = {
      exerciseId,
      date,
      time: workTime,
      calory: burnedCalory,
    };

    addToDiary(data).then(data => {
      if (!data) {
        return;
      }
      console.log(data);
    });
  };

  return (
    <Container>
      <TimerContainer>
        <GifContainer>
          <Img src={gifUrl} alt="gif of exercise" />
        </GifContainer>
        <Timer
          remainingTime={remainingTime}
          colories={calories}
          countCalory={countCalory}
          writeTime={writeRemainengTime}
        />
      </TimerContainer>
      <InfoCardConteiner>
        <InfoCard>
          <CardTitle>Name</CardTitle>
          <CardInfo>{name}</CardInfo>
        </InfoCard>
        <InfoCard>
          <CardTitle>Target</CardTitle>
          <CardInfo>{target}</CardInfo>
        </InfoCard>
        <InfoCard>
          <CardTitle>Body Part</CardTitle>
          <CardInfo>{bodyPart}</CardInfo>
        </InfoCard>
        <InfoCard>
          <CardTitle>Equipment</CardTitle>
          <CardInfo>{equipment}</CardInfo>
        </InfoCard>
        <InfoCard>
          <CardTitle>Time</CardTitle>
          <CardInfo>{time} minutes</CardInfo>
        </InfoCard>
      </InfoCardConteiner>
      <ButtonWrapper>
        <BtnSubmit
          title="Add to diary"
          fontTablet="16px"
          onClick={handleSubmit}
        />
      </ButtonWrapper>
    </Container>
  );
}

AddExerciseForm.propTypes = {
  calories: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bodyPart: PropTypes.string.isRequired,
  gifUrl: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  equipment: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  exerciseId: PropTypes.string.isRequired,
};
