import { useDispatch } from 'react-redux';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';
import AuthForm from '../../components/AuthForm/AuthForm';
import BtnSubtitle from '../../components/BtnSubtitle/BtnSubtitle';
import { Wrapper, WrapperDesktop } from '../Home/Home.styled';
import ParamsBlockCard from '../../components/ParamsBlockСard';
import { logInUser } from '../../redux/auth/operation';
import { mg } from '../../utils';

const SignIn = () => {
  const dispatch = useDispatch();

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

        <ParamsBlockCard type={'grey'} page={'auth'} data={350} />

        <ParamsBlockCard
          type={'orange'}
          page={'auth'}
          data={500}
          measure={'cal'}
        />
      </Wrapper>
    </>
  );
};

export default SignIn;
