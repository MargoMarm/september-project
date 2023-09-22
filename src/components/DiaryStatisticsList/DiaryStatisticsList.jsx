import { List } from './DiaryStatisticsList.styled';
import DailyStatsCards from '../DailyStatsCards/DailyStatsCards';

const DairyStatisticList = () => {
  return (
    <List>
      <DailyStatsCards
        icon="fork-and-knife"
        fill="true"
        label="Daily calorie intake"
        keyValue={'2200'}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="barbell"
        fill="true"
        label="Daily norm of sports"
        keyValue={'110 min'}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="apple"
        label="Сalories consumed"
        keyValue={'0'}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="fire"
        label="Сalories burned"
        keyValue={'0'}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="bubble"
        label="The rest of the calories"
        keyValue={'2200'}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="runningMan"
        label="The rest of sports"
        keyValue={'110 min'}
      ></DailyStatsCards>
    </List>
  );
};

export default DairyStatisticList;
