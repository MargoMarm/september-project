import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';
import Title from '../../components/Title/Title';
import products from '../../data/products.json';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import { FlexWrapper, ProductPageContainer } from './Products.styled';
import { useState } from 'react';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import Modal from '../../components/Modal/Modal';

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

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
              <>
                <ProductsOrExercisesItem
                  key={product._id.$oid}
                  page="product"
                  data={product}
                  openModal={toggleModal}
                />

                {isModalOpen && (
                  <Modal openModal={toggleModal}>
                    <AddProductForm closeModal={toggleModal} data={product} />
                  </Modal>
                )}
              </>
            );
          }
          return null;
        })}
      </ProductsOrExercisesContainer>
    </ProductPageContainer>
  );
};

export default Products;
