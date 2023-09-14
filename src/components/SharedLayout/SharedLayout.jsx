import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SheradLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
