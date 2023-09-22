import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer';
import Title from '../../components/Title/Title';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import { FlexWrapper, ProductPageContainer } from './Products.styled';
import productsList from '../../data/products.json';
import Scrollbar from '../../components/Scrollbar';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';
// import Modal from '../../components/Modal/Modal';
// import AddProductForm from '../../components/AddProductForm/AddProductForm';
// import { useState } from 'react';

const Products = () => {
  return (
    <ProductPageContainer>
      <FlexWrapper>
        <Title text="Products" />
        <ProductsFilter />
      </FlexWrapper>
      <Scrollbar width={{ dt: '868' }}>
        <ProductsOrExercisesContainer>
          {productsList.map((product, i) => {
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
      </Scrollbar>
    </ProductPageContainer>
  );
};

export default Products;
