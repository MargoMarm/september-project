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

export const ExercisesList = () => {
  const dispatch = useDispatch();

  const handleGetExercises = (params, name) => {
    dispatch(getExercises(params));

    dispatch(setCurrentTitle(name));
  };

  let category = useSelector(selectFilter);
  let filters = useSelector(selectItems);

  return (
    <ExercisesItemList>
      {filters
        .filter(item => item.filter === category)
        .map(({ filter, name, imgURL, _id }) => (
          <ExercisesItem
            handleGetExercises={handleGetExercises}
            key={_id}
            imgURL={imgURL}
            name={capitalizeWord(name)}
            filter={filter}
          />
        ))}
    </ExercisesItemList>
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
