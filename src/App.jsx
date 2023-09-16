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
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          width: '390px',
          backgroundColor: 'black',
        }}
      >
        <li>
          <DailyStatsCards
            label="Daily calorie intake"
            fill="true"
            keyValue="2200"
            icon="fire"
          />
        </li>
        <li>
          <DailyStatsCards
            label="Daily norm of sports"
            fill="true"
            keyValue="110 min"
            icon="dumbbell"
          />
        </li>
        <li>
          <DailyStatsCards
            label="Сalories consumed"
            keyValue="2300"
            icon="apple"
          />
        </li>
        <li>
          <DailyStatsCards label="Сalories burned" keyValue="855" icon="fire" />
        </li>
        <li>
          <DailyStatsCards
            label="The rest of the calories"
            keyValue="i`m running"
            border="green"
            icon="fire"
          />
        </li>
        <li>
          <DailyStatsCards
            label="The rest of sports"
            keyValue="i`m running"
            border="red"
            icon="fire"
          />
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
