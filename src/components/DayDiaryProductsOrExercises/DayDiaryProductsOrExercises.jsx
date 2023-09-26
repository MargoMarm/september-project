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
import TableForDiaryOnMobile from '../TableForDiaryOnMobile/TableForDiaryOnMobile';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExercise, deleteProduct } from '../../redux/diary/operations';
import { getIsLoadingDiary } from '../../redux/diary/selectors';

const DayDiaryProductsOrExercises = ({
  to,
  marginBottom,
  list,
  productTable,
  exerciseTable,
  date,
}) => {
  const dispatch = useDispatch();

  const handleDelete = ({ date, id, calories, time }) => {
    if (productTable) {
      dispatch(deleteProduct({ productId: id, date, calories, time }));
    }
    if (exerciseTable) {
      dispatch(deleteExercise({ exerciseId: id, date, calories, time }));
    }
  };

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
        <>
          <TableForDiary
            list={list}
            productTable={productTable}
            exerciseTable={exerciseTable}
            onDelete={handleDelete}
            date={date}
          />
          <TableForDiaryOnMobile
            list={list}
            productTable={productTable}
            exerciseTable={exerciseTable}
            onDelete={handleDelete}
            date={date}
          />
        </>
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
  date: PropTypes.string,
};

export default DayDiaryProductsOrExercises;
