import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout';
// import SharedLayout from './components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../src/pages/Home/Home'));
const Error = lazy(() => import('../src/pages/Error/Error'));

const test = import.meta.env.VITE_API_TEST;

function App() {
  //   console.log(test);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="error" element={<Error />} />
      </Route>
    </Routes>
  );
}
export default App;
