import PropTypes from 'prop-types';
import { Container } from './ProductOrExerciseContainer.styled';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';

import Scrollbar from '../Scrollbar/Scrollbar';

export default function ProductsOrExercisesContainer({ list, ...props }) {
  return (
    <Scrollbar width={{ dt: '868' }}>
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
    </Scrollbar>
  );
}

ProductsOrExercisesContainer.propTypes = {
  list: PropTypes.array,
};
