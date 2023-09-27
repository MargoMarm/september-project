import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer';
import Title from '../../components/Title/Title';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import { FlexWrapper, ProductPageContainer } from './Products.styled';
import Scrollbar from '../../components/Scrollbar';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';
import { useDispatch, useSelector } from 'react-redux';

import { getAddProductIsLoading } from '../../redux/products/selectors';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../redux/productsFilter/operations';
import EmptyProductList from '../../components/EmptyProductList/EmptyProductList';
import Loader from '../../components/Lodaer/Loader';
import { fetchMoreProducts } from '../../redux/productsFilter/operations';
import {
  getIsLoading,
  getSearchParams,
  getProducts,
  getHasMore,
} from '../../redux/productsFilter/selectors';
import InfiniteScroll from 'react-infinite-scroller';

const Products = () => {
  const [page, setPage] = useState(1);

  const hasMore = useSelector(getHasMore);

  const isLoadingMoreProducts = useSelector(getIsLoading);

  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  const searchParams = useSelector(getSearchParams);

  useEffect(() => {
    setPage(1);
  }, [searchParams]);

  return (
    <ProductPageContainer>
      <FlexWrapper>
        <Title text="Products" />
        <ProductsFilter />
      </FlexWrapper>
      {products.length !== 0 ? (
        <Scrollbar width={{ dt: '868' }}>
          <InfiniteScroll
            pageStart={1}
            loadMore={() => {
              if (page === 1) {
                setPage(prevPage => prevPage + 1);
                return;
              }

              const paginationParams = new URLSearchParams({
                page,
                limit: 20,
              }).toString();
              dispatch(
                fetchMoreProducts(`${searchParams}&${paginationParams}`),
              );
              setPage(prevPage => prevPage + 1);
            }}
            hasMore={hasMore && !isLoadingMoreProducts}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
            useWindow={false}
          >
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
          </InfiniteScroll>
        </Scrollbar>
      ) : (
        <EmptyProductList />
      )}
    </ProductPageContainer>
  );
};

export default Products;
