import PropTypes from 'prop-types';
import ExercisesItem from '../ExercisesItem/ExercisesItem';
import { ExercisesItemList } from './ExercisesItemList.styled';
import { capitalizeWord } from '../../utils/capitalizeWord';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectItems,
  selectFilter,
} from '../../redux/exerciseFilters/selectors';
import { getExercises } from '../../redux/exercises/operations';

import { setCurrentTitle } from '../../redux/exerciseFilters/slice';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { nanoid } from '@reduxjs/toolkit';
import { addSearchExerciseParams } from '../../redux/exercises/slice';

const ExercisesList = () => {
  const dispatch = useDispatch();

  const handleGetExercises = (params, name) => {
    dispatch(getExercises(params));
    dispatch(addSearchExerciseParams(params));
    dispatch(setCurrentTitle(name));
  };

  let category = useSelector(selectFilter);
  let filters = useSelector(selectItems);

  const array = filters.filter(item => item.filter === category);

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

  const chunkedFilters = [];

  if (isTablet) {
    for (let i = 0; i < array.length; i += 9) {
      chunkedFilters.push(array.slice(i, i + 9));
    }
  } else {
    for (let i = 0; i < array.length; i += 10) {
      chunkedFilters.push(array.slice(i, i + 10));
    }
  }

  return (
    <Swiper
      key={category}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="pagination"
    >
      {chunkedFilters.map(arr => (
        <SwiperSlide key={nanoid()}>
          <ExercisesItemList>
            {arr.map(({ filter, name, imgURL, _id }) => (
              <ExercisesItem
                handleGetExercises={handleGetExercises}
                key={_id}
                imgURL={imgURL}
                name={capitalizeWord(name)}
                filter={filter}
              />
            ))}
          </ExercisesItemList>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

ExercisesList.propTypes = {
  bodyParts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default ExercisesList;
