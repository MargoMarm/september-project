import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SheradLayout.styled';
import Header from '../../components/headersComp/Header/Header';
import Loader from '../../components/Lodaer/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader needToCenter/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
