import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';
import AuthForm from '../../components/AuthForm/AuthForm';
import BtnSubtitle from '../../components/BtnSubtitle/BtnSubtitle';
import { Wrapper, WrapperDesktop } from '../Home/Home.styled';
import ParamsBlockCard from '../../components/ParamsBlockСard';
import { logInUser } from '../../redux/auth/operation';
import { mg } from '../../utils';
import {
  getAllExercises,
  getUsersBurnedCalories,
} from '../../redux/statistic/selectors';
import { useEffect } from 'react';
import { getVideoCountAndBurnedCaloriesStatistics } from '../../redux/statistic/operations';

const SignIn = () => {
  const dispatch = useDispatch();

  const videoExercisesCount = useSelector(getAllExercises);
  const allBurnedCalories = useSelector(getUsersBurnedCalories);

  useEffect(() => {
    dispatch(getVideoCountAndBurnedCaloriesStatistics());
  }, [dispatch]);

  const logIn = (user, { resetForm }) => {
    dispatch(logInUser(user));
    resetForm();
  };

  return (
    <>
      <WrapperDesktop></WrapperDesktop>
      <Wrapper>
        <Title text={'Sign In'} margin={mg} />
        <SubTitle
          text={
            'Welcome! Please enter your credentials to login to the platform:'
          }
        />
        <AuthForm btnTitle="Sign In" nameIsShown={false} onSubmit={logIn} />
        <BtnSubtitle
          text={'Don’t have an account?'}
          to={'/signup'}
          linkText={'Sign Up'}
        />

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

export default SignIn;
