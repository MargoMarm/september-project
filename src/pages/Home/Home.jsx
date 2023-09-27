import { useEffect } from 'react';
import CustomNavLink from '../../components/CustomNavLink/CustomNavLink';
import MainTitle from '../../components/MainTitle/MainTitle';
import ParamsBlockCard from '../../components/ParamsBlockСard/ParamsBlockCard';
import { LinkList, Wrapper, WrapperDesktop } from './Home.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoCountAndBurnedCaloriesStatistics } from '../../redux/statistic/operations';
import {
  getAllExercises,
  getUsersBurnedCalories,
} from '../../redux/statistic/selectors';
import formatNumber from '../../utils/formatNumberStatistics';

const Home = () => {
  const dispatch = useDispatch();

  const videoExercisesCount = useSelector(getAllExercises);
  const allBurnedCalories = useSelector(getUsersBurnedCalories);

  useEffect(() => {
    dispatch(getVideoCountAndBurnedCaloriesStatistics());
  }, [dispatch]);

  return (
    <>
      <WrapperDesktop></WrapperDesktop>
      <Wrapper>
        <MainTitle />
        <LinkList>
          <li>
            <CustomNavLink isorange={'true'} text={'Sign up'} to={'/signup'} />
          </li>
          <li>
            <CustomNavLink text={'Sign in'} to={'/signin'} />
          </li>
        </LinkList>

        <ParamsBlockCard
          type={'grey'}
          page={'auth'}
          data={videoExercisesCount}
        />

        <ParamsBlockCard
          type={'orange'}
          page={'auth'}
          data={allBurnedCalories}
          measure={'cal'}
        />
      </Wrapper>
    </>
  );
};

export default Home;
