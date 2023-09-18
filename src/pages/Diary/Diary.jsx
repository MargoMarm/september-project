import DairyStatisticList from '../../components/DiaryStatisticsList/DiaryStatisticsList';
import Title from '../../components/Title/Title';
import DayDiaryProductsOrExercises from '../../components/DayDiaryProductsOrExercises/DayDiaryProductsOrExercises';

import { DiaryPageContainer } from './Diary.styled';

import DescriptionText from '../../components/DescriptionText/DescriptionText';
import { mg } from '../../utils';

const Diary = () => {
  return (
    <DiaryPageContainer>
      <Title text={'Diary'} margin={mg} />
      <DairyStatisticList />
      <DescriptionText
        text="Record all your meals in a calorie diary every day. This will help me be
        aware of my nutrition and make me responsible for my choices."
        width={{ tablet: 593, desktop: 390 }}
      />
      <DayDiaryProductsOrExercises products={[]} marginBottom={40} />
      <DayDiaryProductsOrExercises products={[]} isDayProducts />
    </DiaryPageContainer>
  );
};

export default Diary;
