import PropTypes from 'prop-types';
import ExercisesItem from './ExercisesItem';
import { ExercisesItemList } from './ExercisesItem.styled';

export const ExercisesList = ({ fillter }) => {
  return (
    <ExercisesItemList>
      {fillter.map(({ filter, imgURL, name }) => (
        <ExercisesItem key={name} imgURL={imgURL} name={name} filter={filter} />
      ))}
    </ExercisesItemList>
  );
};

ExercisesList.propTypes = {
  fillter: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ExercisesList;
