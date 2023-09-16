import PropTypes from 'prop-types';
import {
  Filter,
  Name,
  Image,
  WrapSpan,
  WrapList,
  WrapImg,
} from './ExercisesItem.styled';

export const ExercisesItem = ({ filter, name, imgURL }) => {
  return (
    <WrapList>
      <WrapImg>
        <Image src={imgURL} alt={name} />
      </WrapImg>

      <WrapSpan>
        <Filter>{filter}</Filter>
        <Name>{name}</Name>
      </WrapSpan>
    </WrapList>
  );
};

export default ExercisesItem;

ExercisesItem.propTypes = {
  filter: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
};
