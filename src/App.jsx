import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout';
// import SharedLayout from './components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../src/pages/Home/Home'));

const test = import.meta.env.VITE_API_TEST;

function App() {
  //   console.log(test);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
