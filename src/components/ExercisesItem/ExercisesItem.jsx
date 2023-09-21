import PropTypes from 'prop-types';
import {
  Item,
  WrapCard,
  Image,
  WrapSpan,
  Name,
  Filter,
} from './ExercisesItem.styled';
import { useEffect, useState } from 'react';

export const ExercisesItem = ({ filter, name, imgURL, handleGetExercises }) => {
  const [query, setQuery] = useState(filter);

  useEffect(() => {
    switch (filter) {
      case 'Body parts':
        return setQuery('bodyPart');
      case 'Muscles':
        return setQuery('target');
      case 'Equipment':
        return setQuery('equipment');
      default:
        return;
    }
  }, [filter]);

  const requestString = `${query}=${name.toLowerCase()}`;

  return (
    <Item onClick={() => handleGetExercises(requestString, name)}>
      <WrapCard>
        <Image src={imgURL} alt={name} />
        <WrapSpan>
          <Name>{name}</Name>
          <Filter>{filter}</Filter>
        </WrapSpan>
      </WrapCard>
    </Item>
  );
};

export default ExercisesItem;

ExercisesItem.propTypes = {
  filter: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  handleGetExercises: PropTypes.func.isRequired,
};
