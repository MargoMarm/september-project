import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';
import Title from '../../components/Title/Title';
import products from '../../data/products.json';

const Products = () => {
  return (
    <>
      <Title
        margin={{
          top: {
            desk: 72,
            tab: 72,
            mob: 40,
          },
          bt: {
            tab: 32,
            mob: 40,
          },
        }}
        text="Products"
      ></Title>
      <ProductsOrExercisesContainer marginTop="40px">
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
    </>
  );
};

export default Products;
