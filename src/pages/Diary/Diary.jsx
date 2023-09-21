import DairyStatisticList from '../../components/DiaryStatisticsList/DiaryStatisticsList';
import Title from '../../components/Title/Title';
import DayDiaryProductsOrExercises from '../../components/DayDiaryProductsOrExercises/DayDiaryProductsOrExercises';
import DescriptionText from '../../components/DescriptionText/DescriptionText';

import {
  DiaryWrapper,
  CustomDivForCards,
  CustomDivForTables,
  DiaryPageContainer,
} from './Diary.styled';

import { mgForDiary } from '../../utils/descriptionTextMargin';
import { mgForTitle } from '../../utils/titleMarginForDairyPage';
import { useEffect, useState } from 'react';

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
];

const listExercises = [
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0001.gif',
    name: '3/4 sit-up',
    target: 'abs',
    burnedCalories: 220,
    time: 3,
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0002.gif',
    name: '45° side bend',
    target: 'abs',
    burnedCalories: 323,
    time: 3,
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0003.gif',
    name: 'air bike',
    target: 'abs',
    burnedCalories: 312,
    time: 3,
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0006.gif',
    name: 'alternate heel touchers',
    target: 'abs',
    burnedCalories: 116,
    time: 3,
  },
  {
    bodyPart: 'back',
    equipment: 'cable',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0007.gif',
    name: 'alternate lateral pulldown',
    target: 'lats',
    burnedCalories: 70,
    time: 3,
  },
  {
    bodyPart: 'chest',
    equipment: 'leverage machine',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0009.gif',
    name: 'assisted chest dip (kneeling)',
    target: 'pectorals',
    burnedCalories: 329,
    time: 3,
  },
  {
    bodyPart: 'waist',
    equipment: 'assisted',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0010.gif',
    name: 'assisted hanging knee raise with throw down',
    target: 'abs',
    burnedCalories: 216,
    time: 3,
  },
];

const Diary = () => {
  return (
    <DiaryWrapper>
      <Title text={'Diary'} />
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
            list={listProducts}
            productTable
            to={'/products'}
          />

          <DayDiaryProductsOrExercises
            list={listExercises}
            exerciseTable
            to={'/exercises'}
          />
        </CustomDivForTables>{' '}
      </DiaryPageContainer>
    </DiaryWrapper>
  );
};

export default Diary;
