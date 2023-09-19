import PropTypes from 'prop-types';

import {
  DayDiaryContainer,
  DayDiarySubTitle,
  AddLink,
  DayNoContentText,
  ArrowRight,
  DayDiarySubDiv,
} from './DayDiaryProductsOrExercises.styled';
import sprite from '../../assets/sprite.svg';
import TableForDiary from '../TableForDiary/TableForDiary';

const DayDiaryProductsOrExercises = ({
  to,
  marginBottom,
  list,
  productTable,
  exerciseTable,
}) => {
  return (
    <DayDiaryContainer marginBottom={marginBottom}>
      <DayDiarySubDiv>
        <DayDiarySubTitle>
          {productTable ? 'Products' : 'Exercises'}
        </DayDiarySubTitle>
        <AddLink to={to}>
          Add {productTable ? 'product' : 'exercise'}
          <ArrowRight>
            <use href={sprite + `#arrow-right`}></use>
          </ArrowRight>
        </AddLink>
      </DayDiarySubDiv>
      {list.length !== 0 ? (
        <TableForDiary
          list={list}
          productTable={productTable}
          exerciseTable={exerciseTable}
        />
      ) : (
        <DayNoContentText>
          Not found {productTable ? 'products' : 'exercises'}
        </DayNoContentText>
      )}
    </DayDiaryContainer>
  );
};

DayDiaryProductsOrExercises.propTypes = {
  to: PropTypes.string,
  marginBottom: PropTypes.number,
  list: PropTypes.array,
  productTable: PropTypes.bool,
  exerciseTable: PropTypes.bool,
};

export default DayDiaryProductsOrExercises;
