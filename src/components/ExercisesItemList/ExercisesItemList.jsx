import PropTypes from 'prop-types';
import ExercisesItem from '../ExercisesItem/ExercisesItem';
import { ExercisesItemList } from './ExercisesItemList.styled';
import { capitalizeWord } from '../../utils/capitalizeWord';
import { useSelector } from 'react-redux';
import { selectItems, selectFilter } from '../../redux/exerciseFilters/selectors'

export const ExercisesList = ({ bodyParts }) => {

  let category = useSelector(selectFilter);
  let filters = useSelector(selectItems);
  return (
    <ExercisesItemList>
      {filters.filter(item => item.filter === category)
        .map(({ filter, name, imgURL, _id }) => (
          <ExercisesItem
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
  ).isRequired,
};

export default ExercisesList;
