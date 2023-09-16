import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';
import Header from '../../components/headersComp/Header/Header';
import AuthForm from '../../components/AuthForm';
import { Wrapper } from '../Home/Home.styled';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../redux/auth/operation';

const SignIn = () => {
  const dispatch = useDispatch();

  const logIn = (user, { resetForm }) => {
    dispatch(logInUser(user));
    resetForm();
  };

  return (
    <Wrapper>
      <Header />
      <Title text={'Sign In'} margin={14} />
      <SubTitle
        text={
          'Welcome! Please enter your credentials to login to the platform:'
        }
      />
      <AuthForm btnTitle="Sign In" nameIsShown={false} onSubmit={logIn} />
    </Wrapper>
  );
};

export default SignIn;
