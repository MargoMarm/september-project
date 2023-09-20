import PropTypes from 'prop-types';
import ExercisesItem from '../ExercisesItem/ExercisesItem';
import { ExercisesItemList } from './ExercisesItemList.styled';
import { capitalizeWord } from '../../utils/capitalizeWord';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems, selectFilter } from '../../redux/exerciseFilters/selectors'
import { getExercises } from '../../redux/exercises/operations';


export const ExercisesList = ({ bodyParts }) => {
  const dispatch = useDispatch()

   const handleGetExercises = (params) => {
    console.log("PARAMS", params);
    dispatch(getExercises(params))
    dispatch(getExercises(params))
  }

  let category = useSelector(selectFilter);
  let filters = useSelector(selectItems);
  return (
    <ExercisesItemList>
      {filters.filter(item => item.filter === category)
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
