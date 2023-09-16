import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SheradLayout.styled';
// import Header from '../../components/headersComp/Header/Header';

const SharedLayout = () => {
  return (
    <Container>
      {/* <Header/> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
