import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer';
import Title from '../../components/Title/Title';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import { FlexWrapper, ProductPageContainer } from './Products.styled';
import productsList from '../../data/products.json';
import Scrollbar from '../../components/Scrollbar';

const Products = () => {
  return (
    <ProductPageContainer>
      <FlexWrapper>
        <Title text="Products" />
        <ProductsFilter />
      </FlexWrapper>
      <Scrollbar width={{ dt: '868' }}>
        <ProductsOrExercisesContainer list={productsList} />
      </Scrollbar>
    </ProductPageContainer>
  );
};

export default Products;
