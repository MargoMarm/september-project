import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SheradLayout.styled';
import Header from '../../components/headersComp/Header/Header';
import Loader from '../../components/Lodaer/Loader';
import { useSelector } from 'react-redux';
import { isLoadingSignInOrSignUp } from '../../redux/auth/selectors';
import LoaderForPages from '../LoaderForPages/LoaderForPages';

const SharedLayout = () => {
  const isLoading = useSelector(isLoadingSignInOrSignUp);

  return (
    <>
      {isLoading && <LoaderForPages />}
      <Container>
        <Header />
        <Suspense fallback={<Loader needToCenter />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
