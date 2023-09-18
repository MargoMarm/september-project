import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';
import Title from '../../components/Title/Title';
import products from '../../data/products.json';

const Products = () => {
  return (
    <>
      <Title text="Products"></Title>
      <ProductsOrExercisesContainer marginTop="40px">
        {products.map((product, i) => {
          if (i < 20) {
            return (
              <ProductsOrExercisesItem
                key={product._id}
                page="product"
                data={product}
              />
            );
          }
          return null;
        })}
      </ProductsOrExercisesContainer>
    </>
  );
};

export default Products;
