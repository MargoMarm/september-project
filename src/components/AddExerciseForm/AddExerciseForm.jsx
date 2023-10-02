import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

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
  Round,
} from './AddExerciseForm.styled';
import { AddButton } from '../AddProductForm/AddProductForm.styled';

import { changeStatusTimer } from '../../redux/exercises/slice';
import { capitalizeWord } from '../../utils/capitalizeWord';
import formatDate from '../../utils/formatDate';

export default function AddExerciseForm({ data, addExercise }) {
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

  const [burnedCalory, setBurnedCalory] = useState(0);
  const [exTime, setExTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [round, setRound] = useState(1);

  const dispatch = useDispatch();

  const countCalory = (calory, time, exTime) => {
    const burnedCalory = Math.floor((exTime * calory) / (time * 60));
    setBurnedCalory(burnedCalory);
  };

  const countRound = () => {
    if (exTime > 0 && exTime % 180 === 0) {
      setRound(prevSt => prevSt + 1);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(() => {
    return () => {
      setRound(1);
    };
  }, []);

  useEffect(() => {
    countCalory(calories, time, exTime);
  }, [calories, time, exTime]);

  useEffect(countRound, [exTime]);

  const startExercise = () => {
    const intervalId = setInterval(() => {
      setExTime(prevSt => prevSt + 1);
    }, 1000);
    setIntervalId(intervalId);
    setIsPlaying(true);
    dispatch(changeStatusTimer(true));
  };

  const stopExercise = () => {
    setIsPlaying(false);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const date = formatDate(new Date());

  const writeRemainengTime = ({ remainingTime }) => {
    const minutes =
      Math.floor(remainingTime / 60).toString().length > 1
        ? Math.floor(remainingTime / 60)
        : '0' + Math.floor(remainingTime / 60);
    const seconds =
      (remainingTime % 60).toString().length > 1
        ? remainingTime % 60
        : '0' + (remainingTime % 60);

    return (
      <>
        <Watch>
          {minutes}:{seconds}
          <Round>Round: {round}</Round>
        </Watch>
      </>
    );
  };

  return (
    <Container>
      <TimerContainer>
        <GifContainer>
          <Img src={gifUrl} alt="gif of exercise" />
        </GifContainer>
        <Timer
          startExercise={startExercise}
          stopExercise={stopExercise}
          countCalory={countCalory}
          calory={burnedCalory}
          writeTime={writeRemainengTime}
          isPlaying={isPlaying}
          round={round}
        />
      </TimerContainer>
      <InfoCardConteiner>
        <InfoCard>
          <CardTitle>Name</CardTitle>
          <CardInfo>{capitalizeWord(name)}</CardInfo>
        </InfoCard>
        <InfoCard>
          <CardTitle>Target</CardTitle>
          <CardInfo>{capitalizeWord(target)}</CardInfo>
        </InfoCard>
        <InfoCard>
          <CardTitle>Body Part</CardTitle>
          <CardInfo>{capitalizeWord(bodyPart)}</CardInfo>
        </InfoCard>
        <InfoCard>
          <CardTitle>Equipment</CardTitle>
          <CardInfo>{capitalizeWord(equipment)}</CardInfo>
        </InfoCard>
        <InfoCard>
          <CardTitle>Time</CardTitle>
          <CardInfo>{time} minutes</CardInfo>
        </InfoCard>
      </InfoCardConteiner>
      <ButtonWrapper>
        <AddButton
          disabled={burnedCalory > 10 ? false : true}
          type="button"
          onClick={() => {
            addExercise({
              id: _id,
              date,
              time: exTime,
              burnedCalories: burnedCalory,
            });
            dispatch(changeStatusTimer(false));
          }}
        >
          Add to diary
        </AddButton>
      </ButtonWrapper>
    </Container>
  );
}

AddExerciseForm.propTypes = {
  data: PropTypes.object.isRequired,
  addExercise: PropTypes.func,
};
