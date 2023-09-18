import DairyStatisticList from '../../components/DiaryStatisticsList/DiaryStatisticsList';
import Title from '../../components/Title/Title';
import DayDiaryProductsOrExercises from '../../components/DayDiaryProductsOrExercises/DayDiaryProductsOrExercises';

import {
  DiaryPageContainer,
  ExclamationSvg,
  ExclamationText,
} from './Diary.styled';

import sprite from '../../assets/sprite.svg';
import DescriptionText from '../../components/DiscriptionText/DescriptionText';

const Diary = () => {
  return (
    <DiaryPageContainer>
      <Title text={'Diary'} margin={40} />
      <DairyStatisticList />
      <DescriptionText
        text="Record all your meals in a calorie diary every day. This will help me be
        aware of my nutrition and make me responsible for my choices."
      />
      <DayDiaryProductsOrExercises products={[]} marginBottom={40} />
      <DayDiaryProductsOrExercises products={[]} isDayProducts />
    </DiaryPageContainer>
  );
};

export default Diary;
