import DairyStatisticList from '../../components/DiaryStatisticsList/DiaryStatisticsList';
import Title from '../../components/Title/Title';
import DayDiaryProductsOrExercises from '../../components/DayDiaryProductsOrExercises/DayDiaryProductsOrExercises';
import DescriptionText from '../../components/DescriptionText/DescriptionText';
import Calendar from '../../components/Calendar/Calendar';

import {
  DiaryWrapper,
  CustomDivForCards,
  CustomDivForTables,
  DiaryPageContainer,
  CalendarContainer,
  CalendarBtn,
  CalendarBtnIcon,
} from './Diary.styled';

import { mgForDiary } from '../../utils/descriptionTextMargin';
import { mgForTitle } from '../../utils/titleMarginForDairyPage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDiaryList } from '../../redux/diary/operations';
import {
  getDiaryExercises,
  getDiaryProducts,
} from '../../redux/diary/selectors';

import sprite from '../../assets/sprite.svg';
import CustomInputForCalendar from '../../components/CustomInputForCalendar/CustomInputForCalendar';

const Diary = () => {
  const [date, setDate] = useState(new Date());
  const [parsedDate, setParsedDate] = useState('');

  const productsList = useSelector(getDiaryProducts);
  const exercisesList = useSelector(getDiaryExercises);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getDiaryList(parsedDate || handleChangeAndParsedDate(parsedDate, date)),
    );
  }, [dispatch, date, parsedDate]);

  const handleChangeAndParsedDate = (_, newDate) => {
    const [dateSplit] = newDate.toLocaleString().split(', ');
    const date = dateSplit.replaceAll('.', '-');
    setParsedDate(date);
    setDate(newDate);
    return date;
  };

  const changeDay = (operator, initialDateStr) => {
    const currentDate = new Date(initialDateStr);
    if (operator === 'nextDay') {
      currentDate.setDate(currentDate.getDate() + 1);
    }
    if (operator === 'previousDay') {
      currentDate.setDate(currentDate.getDate() - 1);
    }
    handleChangeAndParsedDate(currentDate, currentDate);
  };

  return (
    <DiaryWrapper>
      <Title text={'Diary'} margin={mgForTitle} />
      <CalendarContainer>
        <Calendar
          value={date}
          onChange={handleChangeAndParsedDate}
          name="name"
          dateFormat={'dd/MM/yyyy'}
          customInput={<CustomInputForCalendar />}
          withoutВorder
        />
        <CalendarBtn onClick={() => changeDay('previousDay', date)}>
          <CalendarBtnIcon>
            <use href={sprite + `#chevron-left`}></use>
          </CalendarBtnIcon>
        </CalendarBtn>
        <CalendarBtn onClick={() => changeDay('nextDay', date)}>
          <CalendarBtnIcon>
            <use href={sprite + `#chevron-right`}></use>
          </CalendarBtnIcon>
        </CalendarBtn>
      </CalendarContainer>
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
            date={parsedDate}
            to={'/products'}
          />

          <DayDiaryProductsOrExercises
            list={exercisesList}
            exerciseTable
            date={parsedDate}
            to={'/exercises'}
          />
        </CustomDivForTables>{' '}
      </DiaryPageContainer>
    </DiaryWrapper>
  );
};

export default Diary;
