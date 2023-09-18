import PropTypes from 'prop-types';
import ExercisesItem from '../ExercisesItem/ExercisesItem';
import { ExercisesItemList } from './ExercisesItemList.styled';
import { capitalizeWord } from '../../utils/capitalizeWord';

export const ExercisesList = ({ bodyParts }) => {
  return (
    <ExercisesItemList>
      {bodyParts
        .filter(data => data.filter === 'Body parts')
        .map(({ filter, name, imgURL }) => (
          <ExercisesItem
            key={name}
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
  ).isRequired,
};

export default ExercisesList;
