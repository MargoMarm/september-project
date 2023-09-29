import 'overlayscrollbars/overlayscrollbars.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from './redux/auth/operation';

import SharedLayout from './components/SharedLayout/SharedLayout';

import {
  PrivateRoute,
  PublicRoute,
  RestrictedRoute,
} from './components/Routes';
import { UseAuth } from './hooks/useAuth';

const Home = lazy(() => import('../src/pages/Home/Home'));
const SignIn = lazy(() => import('../src/pages/SignIn/SignIn'));
const SignUp = lazy(() => import('../src/pages/SignUp/SignUp'));
const Products = lazy(() => import('../src/pages/Products/Products'));

const Params = lazy(() => import('../src/pages/Params'));

const Exercises = lazy(() => import('../src/pages/Exercises/Exercises'));

const Error = lazy(() => import('../src/pages/Error/Error'));
const Diary = lazy(() => import('../src/pages/Diary/Diary'));
const Profile = lazy(() => import('./pages/Profile/Profile'));

// const test = import.meta.env.VITE_API_TEST;

function App() {
  const dispatch = useDispatch();

  const { isRefreshing, isLoggedIn, user } = UseAuth();
  const { pathname } = useLocation();

  const emptyUserParams = Object.keys(user.bodyParameters).length === 0;

  if (isLoggedIn && pathname !== '/') {
    localStorage.setItem('location', pathname);
  }

  const location = localStorage.getItem('location');

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // console.log(test);

  return (
    !isRefreshing && (
      <Routes>
        <Route path={'/'} element={<SharedLayout />}>
          <Route
            index
            element={<PublicRoute component={<Home />} redirectTo={location} />}
          />
          <Route
            path="/signin"
            element={
              <PublicRoute
                component={<SignIn />}
                redirectTo={emptyUserParams ? '/params' : '/diary'}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute component={<SignUp />} redirectTo={'/params'} />
            }
          />
          <Route
            path="/products"
            element={<PrivateRoute component={<Products />} redirectTo="/" />}
          />
          <Route
            path="/params"
            element={<RestrictedRoute component={<Params />} redirectTo="/" />}
          />
          <Route
            path="/exercises"
            element={<PrivateRoute component={<Exercises />} redirectTo="/" />}
          />
          <Route
            path="/diary"
            element={<PrivateRoute component={<Diary />} redirectTo="/" />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute component={<Profile />} redirectTo="/" />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    )
  );
}
export default App;
