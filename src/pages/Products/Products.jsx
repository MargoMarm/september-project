import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { FlexWrapper, ProductPageContainer } from './Products.styled';
import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer';
import Title from '../../components/Title/Title';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import ScrollBar from '../../components/Scrollbar';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';
import EmptyProductList from '../../components/EmptyProductList/EmptyProductList';
import Loader from '../../components/Lodaer/Loader';

import { fetchMoreProducts } from '../../redux/productsFilter/operations';
import {
  getIsLoading,
  getSearchParams,
  getProducts,
  getHasMore,
} from '../../redux/productsFilter/selectors';

const Products = () => {
  const [page, setPage] = useState(1);

  const hasMore = useSelector(getHasMore);
  const isLoadingMoreProducts = useSelector(getIsLoading);
  const products = useSelector(getProducts);

  const dispatch = useDispatch();

  const searchParams = useSelector(getSearchParams);

  useEffect(() => {
    setPage(1);
  }, [searchParams]);

  const onLoadMore = () => {
    if (page === 1) {
      setPage(prevPage => prevPage + 1);
      return;
    }

    const paginationParams = new URLSearchParams({
      page,
      limit: 20,
    }).toString();
    dispatch(fetchMoreProducts(`${searchParams}&${paginationParams}`));
    setPage(prevPage => prevPage + 1);
  };

  return (
    <ProductPageContainer>
      <FlexWrapper>
        <Title text="Products" />
        <ProductsFilter />
      </FlexWrapper>
      {products.length !== 0 ? (
        <ScrollBar width={{ dt: '878' }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={hasMore && !isLoadingMoreProducts}
            loader={<Loader key={'qwe789'} size={'60'} />}
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
        </ScrollBar>
      ) : (
        <EmptyProductList />
      )}
    </ProductPageContainer>
  );
};

export default Products;
