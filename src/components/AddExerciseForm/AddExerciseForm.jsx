import AuthButton from '../AuthButton';
import sprite from '../../assets/sprite.svg';
import {
  BurntCaloryInfo,
  BurntCaloryLabel,
  ButtonWrapper,
  CardInfo,
  CardTitle,
  Container,
  FlexContainer,
  GifContainer,
  InfoCard,
  InfoCardConteiner,
  PauseButton,
  Svg,
  Timer,
  TimerContainer,
  TimerTitle,
  TimerVisualLine,
} from './AddExercizeForm.styled';

export default function AddExerciseForm() {
  return (
    <Container>
      <TimerContainer>
        <GifContainer />
        <FlexContainer>
          <TimerTitle>Timer</TimerTitle>
          <TimerVisualLine>
            <Timer>02:10</Timer>
          </TimerVisualLine>
        </FlexContainer>

        <FlexContainer>
          <PauseButton type="submit">
            <Svg>
              <use href={sprite + `#icon-pause-square`}></use>
            </Svg>
          </PauseButton>

          <BurntCaloryLabel>
            Burned calories:
            <BurntCaloryInfo>150</BurntCaloryInfo>
          </BurntCaloryLabel>
        </FlexContainer>
      </TimerContainer>

      <InfoCardConteiner>
        <InfoCard>
          <CardTitle>Name</CardTitle>
          <CardInfo>Air bake</CardInfo>
        </InfoCard>
        <InfoCard>
          <CardTitle>Name</CardTitle>
          <CardInfo>Air bake</CardInfo>
        </InfoCard>
        <InfoCard>
          <CardTitle>Name</CardTitle>
          <CardInfo>Air bake</CardInfo>
        </InfoCard>
        <InfoCard>
          <CardTitle>Name</CardTitle>
          <CardInfo>Air bake</CardInfo>
        </InfoCard>
        <InfoCard>
          <CardTitle>Name</CardTitle>
          <CardInfo>Air bake</CardInfo>
        </InfoCard>
      </InfoCardConteiner>
      <ButtonWrapper>
        <AuthButton title="Add to diary" fontTablet="16px" />
      </ButtonWrapper>
    </Container>
  );
}
