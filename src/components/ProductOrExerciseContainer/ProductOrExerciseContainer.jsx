import { Container } from './ProductOrExerciseContainer.styled';

export default function ProductsOrExercisesContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
