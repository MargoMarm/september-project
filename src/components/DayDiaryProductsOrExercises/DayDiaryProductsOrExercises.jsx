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

const DayDiaryProductsOrExercises = ({ products, to, isDayProducts }) => {
  return (
    <DayDiaryContainer>
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
      {products.length !== 0 ? (
        <ProductsTable products={products} />
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
  products: PropTypes.array,
};

export default DayDiaryProductsOrExercises;
