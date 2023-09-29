import PropTypes from 'prop-types';
import {
  Item,
  WrapCard,
  Image,
  WrapSpan,
  Name,
  Filter,
  LoaderWraper,
} from './ExercisesItem.styled';
import { useEffect, useState } from 'react';
import { Puff } from 'react-loader-spinner';

export const ExercisesItem = ({ filter, name, imgURL, handleGetExercises }) => {
  const [query, setQuery] = useState(filter);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleImageLoad = () => {
    console.log(`object`);
    setIsLoading(false);
  };

  return (
    <Item onClick={() => handleGetExercises(requestString, name)}>
      {isLoading && (
        <LoaderWraper>
          <Puff
            height={'50'}
            width={'50'}
            radius={1}
            color="#E6533C"
            ariaLabel="puff-loading"
            wrapperClass=""
            visible={true}
          />
        </LoaderWraper>
      )}
      <WrapCard>
        <Image src={imgURL} alt={name} onLoad={handleImageLoad} />

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
