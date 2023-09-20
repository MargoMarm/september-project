import * as DiaryStatisticsListStyled from './DiaryStatisticsList.styled';
import DailyStatsCards from '../DailyStatsCards/DailyStatsCards';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const DairyStatisticList = () => {
  let shouldDailyNorm = useSelector(selectUser);

  return (
    <DiaryStatisticsListStyled.List>
      <DailyStatsCards
        icon="fork-and-knife"
        fill="true"
        label="Daily calorie intake"
        keyValue={shouldDailyNorm.dailyTime}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="barbell"
        fill="true"
        label="Daily norm of sports"
        keyValue={shouldDailyNorm.dailyСalories}
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
    </DiaryStatisticsListStyled.List>
  );
};

export default DairyStatisticList;
