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
import { mgForTitle } from '../../utils/titleMarginForDairyPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiaryList } from '../../redux/products/operations';
import {
  getDiaryExercises,
  getDiaryProducts,
} from '../../redux/products/selectors';

const Diary = () => {
  const productsList = useSelector(getDiaryProducts);
  const exercisesList = useSelector(getDiaryExercises);

  const dispatch = useDispatch();

  // заглушка для дати, яка буде вибрана на календарі
  const date = '20-09-2023';

  useEffect(() => {
    dispatch(getDiaryList({ date }));
  }, [dispatch]);

  return (
    <>
      <Title text={'Diary'} margin={mgForTitle} />
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
            list={productsList}
            productTable
            date={date}
            to={'/products'}
          />

          <DayDiaryProductsOrExercises
            list={exercisesList}
            exerciseTable
            date={date}
            to={'/exercises'}
          />
        </CustomDivForTables>{' '}
      </DiaryPageContainer>
    </>
  );
};

export default Diary;
