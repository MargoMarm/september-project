import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';
import AuthForm from '../../components/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from '../../redux/auth/operation';
import BtnSubtitle from '../../components/BtnSubtitle/BtnSubtitle';
import { Wrapper, WrapperDesktop } from '../Home/Home.styled';
import ParamsBlockCard from '../../components/ParamsBlockСard/ParamsBlockCard';
import { mg } from '../../utils';
import {
  getAllExercises,
  getUsersBurnedCalories,
} from '../../redux/statistic/selectors';
import { useEffect } from 'react';
import { getVideoCountAndBurnedCaloriesStatistics } from '../../redux/statistic/operations';

const SignUp = () => {
  const dispatch = useDispatch();

  const videoExercisesCount = useSelector(getAllExercises);
  const allBurnedCalories = useSelector(getUsersBurnedCalories);

  useEffect(() => {
    dispatch(getVideoCountAndBurnedCaloriesStatistics());
  }, [dispatch]);

  const handleSubmit = (user, { resetForm }) => {
    dispatch(authUser(user));
    resetForm();
  };

  return (
    <>
      <WrapperDesktop></WrapperDesktop>
      <Wrapper>
        <Title text={'Sign Up'} margin={mg} />
        <SubTitle
          text={
            'Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.'
          }
        />
        <AuthForm
          nameIsShown={true}
          btnTitle="Sign Up"
          onSubmit={handleSubmit}
        />

        <BtnSubtitle
          text={'Already have account?'}
          to={'/signin'}
          linkText={'Sign In'}
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

export default SignUp;
