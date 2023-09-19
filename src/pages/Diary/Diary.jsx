import DairyStatisticList from '../../components/DiaryStatisticsList/DiaryStatisticsList';
import Title from '../../components/Title/Title';
import DayDiaryProductsOrExercises from '../../components/DayDiaryProductsOrExercises/DayDiaryProductsOrExercises';
import DescriptionText from '../../components/DescriptionText/DescriptionText';

import {
  CustomDivForCards,
  CustomDivForTables,
  DiaryPageContainer,
} from './Diary.styled';

import { mgForDiary } from '../../utils/descriptionTextMargin';

const Diary = () => {
  return (
    <>
      {' '}
      <Title
        text={'Diary'}
        margin={{
          top: {
            desk: 72,
            tab: 72,
            mob: 40,
          },
          bt: {
            tab: 32,
            mob: 40,
          },
        }}
      />
      <DiaryPageContainer>
        <CustomDivForCards>
          <DairyStatisticList />
          <DescriptionText
            text="Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices."
            width={{ tablet: 593, desktop: 390 }}
            margin={mgForDiary}
          />
        </CustomDivForCards>
        <CustomDivForTables>
          <DayDiaryProductsOrExercises
            products={[]}
            marginBottom={40}
            isDayProducts
          />
          <DayDiaryProductsOrExercises products={[]} />
        </CustomDivForTables>{' '}
      </DiaryPageContainer>
    </>
  );
};

export default Diary;
