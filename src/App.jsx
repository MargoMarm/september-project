import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout';
// import SharedLayout from './components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../src/pages/Home/Home'));
const SignIn = lazy(() => import('../src/pages/SignIn/SignIn'));
const SignUp = lazy(() => import('../src/pages/SignUp/SignUp'));
const Products = lazy(() => import('../src/pages/Products/Products'));

const Params = lazy(() => import('../src/pages/Params/Params'));

const Exercises = lazy(() => import('../src/pages/Exercises/Exercises'));

const Error = lazy(() => import('../src/pages/Error/Error'));
const Diary = lazy(() => import('../src/pages/Diary/Diary'));

const test = import.meta.env.VITE_API_TEST;

function App() {

  console.log(test);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/params" element={<Params />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/error" element={<Error />} />
      </Route>
    </Routes>
  );
}
export default App;
