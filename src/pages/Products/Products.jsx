import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer';
import Title from '../../components/Title/Title';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import { FlexWrapper, ProductPageContainer } from './Products.styled';
import Scrollbar from '../../components/Scrollbar';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productsFilter/selectors';
import { useEffect } from 'react';
import { fetchProducts } from '../../redux/productsFilter/operations';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ProductPageContainer>
      <FlexWrapper>
        <Title text="Products" />
        <ProductsFilter />
      </FlexWrapper>
      <Scrollbar width={{ dt: '868' }}>
        <ProductsOrExercisesContainer>
          {products.map((product, i) => {
            if (i < 20) {
              return (
                <ProductsOrExercisesItem
                  key={product.id}
                  page="product"
                  data={product}
                />
              );
            }
            return null;
          })}
        </ProductsOrExercisesContainer>
      </Scrollbar>
    </ProductPageContainer>
  );
};

export default Products;
