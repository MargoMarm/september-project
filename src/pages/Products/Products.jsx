import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer';
import Title from '../../components/Title/Title';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import { FlexWrapper, ProductPageContainer } from './Products.styled';
import productsList from '../../data/products.json';
import Scrollbar from '../../components/Scrollbar';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';
import Modal from '../../components/Modal/Modal';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import { useState } from 'react';

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

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
      </Scrollbar>
    </ProductPageContainer>
  );
};

export default Products;
