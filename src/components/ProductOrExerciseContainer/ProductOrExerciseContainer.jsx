import PropTypes from 'prop-types';
import { Container } from './ProductOrExerciseContainer.styled';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';

export default function ProductsOrExercisesContainer({ list, ...props }) {
  return (
    <Container {...props}>
      {list.map((product, i) => {
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
    </Container>
  );
}

ProductsOrExercisesContainer.propTypes = {
  list: PropTypes.array,
};
