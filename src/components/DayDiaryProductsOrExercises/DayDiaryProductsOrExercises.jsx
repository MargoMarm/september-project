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
import ProductsTable from '../ProductsTable/ProductsTable';

const DayDiaryProductsOrExercises = ({
  to,
  isDayProducts,
  marginBottom,
  list,
}) => {
  return (
    <DayDiaryContainer marginBottom={marginBottom}>
      <DayDiarySubDiv>
        <DayDiarySubTitle>
          {isDayProducts ? 'Products' : 'Exercises'}
        </DayDiarySubTitle>
        <AddLink to={to}>
          Add {isDayProducts ? 'product' : 'exercise'}
          <ArrowRight>
            <use href={sprite + `#arrow-right`}></use>
          </ArrowRight>
        </AddLink>
      </DayDiarySubDiv>
      {list.length !== 0 ? (
        <ProductsTable list={list} />
      ) : (
        <DayNoContentText>
          Not found {isDayProducts ? 'products' : 'exercises'}
        </DayNoContentText>
      )}
    </DayDiaryContainer>
  );
};

DayDiaryProductsOrExercises.propTypes = {
  to: PropTypes.string,
  isDayProducts: PropTypes.bool,
  marginBottom: PropTypes.number,
  list: PropTypes.array,
};

export default DayDiaryProductsOrExercises;
