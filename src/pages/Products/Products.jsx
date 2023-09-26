import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer';
import Title from '../../components/Title/Title';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import { FlexWrapper, ProductPageContainer } from './Products.styled';
import Scrollbar from '../../components/Scrollbar';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productsFilter/selectors';
import { getAddProductIsLoading } from '../../redux/products/selectors';
import { useEffect } from 'react';
import { fetchProducts } from '../../redux/productsFilter/operations';
import EmptyProductList from '../../components/EmptyProductList/EmptyProductList';
import Loader from '../../components/Lodaer/Loader';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getAddProductIsLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ProductPageContainer>
      <FlexWrapper>
        <Title text="Products" />
        <ProductsFilter />
      </FlexWrapper>
      {isLoading ? (
        <Loader />
      ) : products.length !== 0 ? (
        <Scrollbar width={{ dt: '868' }}>
          <ProductsOrExercisesContainer>
            {products.map(product => {
              return (
                <ProductsOrExercisesItem
                  key={product.id}
                  page="product"
                  data={product}
                />
              );
            })}
          </ProductsOrExercisesContainer>
        </Scrollbar>
      ) : (
        <EmptyProductList />
      )}
    </ProductPageContainer>
  );
};

export default Products;
