import PropTypes from 'prop-types';
import { useState } from 'react';

import BtnSubmit from '../BtnSubmit';
import Timer from '../Timer';
import {
  Watch,
  ButtonWrapper,
  CardInfo,
  CardTitle,
  GifContainer,
  Img,
  InfoCard,
  InfoCardConteiner,
  TimerContainer,
  Container,
} from './AddExercizeForm.styled';
import { addToDiary } from '../../httpRequests/addToDiary';
import { getCurrentDate } from '../../utils/getCurrentDate';

export default function AddExerciseForm({ data, closeModal }) {
  const {
    _id,
    burnedCalories: calories,
    name,
    bodyPart,
    gifUrl,
    target,
    equipment,
    time,
  } = data;

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

  const countCalory = (remainingTime, calory, time) => {
    const burnedCalory = Math.floor(
      ((time * 60 - remainingTime) * calory) / (time * 60),
    );
    setBurnedCalory(burnedCalory);

    return burnedCalory;
  };

  const handleSubmit = () => {
    const date = getCurrentDate();
    const workTime = time * 60 - remainingTime;
    const data = {
      exerciseId: _id,
      date,
      time: workTime,
      calory: burnedCalory,
    };

    if (!data.time || !data.calory) {
      return;
    }

    addToDiary(data).then(data => {
      if (!data) {
        return;
      }
      closeModal();
    });
  };

  return (
    <Container>
      <TimerContainer>
        <GifContainer>
          <Img src={gifUrl} alt="gif of exercise" />
        </GifContainer>
        <Timer
          time={time}
          remainingTime={remainingTime}
          calories={calories}
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
  data: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};
