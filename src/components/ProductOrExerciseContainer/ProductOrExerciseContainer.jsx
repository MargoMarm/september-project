import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getSearchParams } from '../../redux/productsFilter/selectors';
import { Container } from './ProductOrExerciseContainer.styled';

export default function ProductsOrExercisesContainer({ children, ...props }) {
  const containerRef = useRef();
  const searchParams = useSelector(getSearchParams);

  useEffect(() => {
    console.log('scroll', containerRef.current.firstChild);
    containerRef.current.firstChild?.scrollIntoView();
  }, [searchParams]);

  return (
    <Container ref={containerRef} {...props}>
      {children}
    </Container>
  );
}
