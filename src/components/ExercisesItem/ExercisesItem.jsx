import PropTypes from 'prop-types';
import {
  Item,
  WrapCard,
  Image,
  WrapSpan,
  Name,
  Filter,
} from './ExercisesItem.styled';

export const ExercisesItem = ({ filter, name, imgURL }) => {
  return (
    <Item>
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
};
