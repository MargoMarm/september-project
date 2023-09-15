import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout';
// import SharedLayout from './components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../src/pages/Home/Home'));
import DailyStatsCards from './components/DailyStatsCards/DailyStatsCards';

const test = import.meta.env.VITE_API_TEST;

function App() {
  //   console.log(test);
  return (
    <>
      <ul
        style={{
          listStyle: 'none',
          padding: '10px',
          display: 'grid',
          gridTemplateColumns: "1fr 1fr",
          justifyContent: 'space-around',
          gap: '8px',
          backgroundColor: 'black',
          border: '1px solid red',
        }}
      >
        <li>
          <DailyStatsCards
            icon="running-man"
            label=" The rest of sports"
            keyValue="2200"
            fill="false"
            border="default"
          />
        </li>

        <li>
          <DailyStatsCards
            icon="running-man"
            label=" The rest of sports"
            keyValue="2200"
            fill="false"
            border="default"
          />
        </li>

        <li>
          <DailyStatsCards
            icon="running-man"
            label=" The rest of sports"
            keyValue="2200"
            fill="false"
            border="default"
          />
        </li>

        <li>
          <DailyStatsCards
            icon="running-man"
            label=" The rest of sports"
            keyValue="2200"
            fill="false"
            border="default"
          />
        </li>
      </ul>

      {/* <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes> */}
    </>
  );
}
export default App;
