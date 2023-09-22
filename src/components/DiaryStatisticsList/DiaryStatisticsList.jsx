import { List } from './DiaryStatisticsList.styled';
import DailyStatsCards from '../DailyStatsCards/DailyStatsCards';
import { useSelector } from 'react-redux';
import {
  selectDailyTime,
  selectDailyСalories,
} from '../../redux/auth/selectors';
import {
  burnedCalories,
  consumedCalories,
  doneExercisesTime,
} from '../../redux/diary/selectors';

const DairyStatisticList = () => {
  const dayliTime = useSelector(selectDailyTime);
  const dailyСalories = useSelector(selectDailyСalories);
  const burnCalories = useSelector(burnedCalories);
  const consumCalories = useSelector(consumedCalories);
  const doneExercisTime = useSelector(doneExercisesTime);

  function secondsToMinutesAndSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return { minutes, seconds: remainingSeconds };
  }

  const totalSeconds = doneExercisTime; // Наприклад, 300 секунд
  const result = secondsToMinutesAndSeconds(totalSeconds);

  let resultTime = dayliTime - result.minutes;
  let theRestOfTheСalories = dailyСalories - burnCalories;

  return (
    <List>
      <DailyStatsCards
        icon="fork-and-knife"
        fill="true"
        label="Daily calorie intake"
        keyValue={dailyСalories}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="barbell"
        fill="true"
        label="Daily norm of sports"
        keyValue={dayliTime}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="apple"
        label="Сalories consumed"
        keyValue={consumCalories}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="fire"
        label="Сalories burned"
        keyValue={burnCalories}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="bubble"
        label="The rest of the calories"
        keyValue={theRestOfTheСalories}
        border={theRestOfTheСalories < 0 ? 'red' : 'default'}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="runningMan"
        label="The rest of sports"
        keyValue={resultTime}
        border={resultTime > dayliTime ? 'green' : 'default'}
      ></DailyStatsCards>
    </List>
  );
};
export default DairyStatisticList;
