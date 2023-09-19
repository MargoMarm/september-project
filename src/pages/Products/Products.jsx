import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';
import Title from '../../components/Title/Title';
import products from '../../data/products.json';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import { FlexWrapper, ProductPageContainer } from './Products.styled';

const Products = () => {
  return (
    <ProductPageContainer>
      <FlexWrapper>
        <Title text="Products" />
        <ProductsFilter />
      </FlexWrapper>
      <ProductsOrExercisesContainer>
        {products.map((product, i) => {
          if (i < 20) {
            return (
              <ProductsOrExercisesItem
                key={product._id.$oid}
                page="product"
                data={product}
              />
            );
          }
          return null;
        })}
      </ProductsOrExercisesContainer>
    </ProductPageContainer>
  );
};

export default Products;
