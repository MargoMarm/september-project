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

const listProducts = [
  {
    _id: {
      $oid: '5d51694902b2373622ff5773',
    },
    weight: 100,
    calories: 340,
    category: 'dairy',
    title: 'Danbo cheese',
    groupBloodNotAllowed: {
      1: true,
      2: true,
      3: false,
      4: false,
    },
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5b7f',
    },
    weight: 100,
    calories: 112,
    category: 'fish',
    title: 'marlin',
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5e13',
    },
    weight: 100,
    calories: 17,
    category: 'vegetables and herbs',
    title: 'Salads Belaya Dacha Delicate root',
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5b6f',
    },
    weight: 100,
    calories: 160,
    category: 'fish',
    title: 'Cold smoked bream',
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5b8d',
    },
    weight: 100,
    calories: 281,
    category: 'fish',
    title: 'Pollock in batter',
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
];

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
            marginBottom={40}
            isDayProducts
            list={listProducts}
          />
          <DayDiaryProductsOrExercises />
        </CustomDivForTables>{' '}
      </DiaryPageContainer>
    </>
  );
};

export default Diary;
