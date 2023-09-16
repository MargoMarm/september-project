import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';
import { Wrapper } from '../Home/Home.styled';
import Header from '../../components/headersComp/Header/Header';
import AuthForm from '../../components/AuthForm/AuthForm';

const SignIn = () => {
  return (
    <Wrapper>
      <Header />
      <Title text={'Sign In'} margin={14} />
      <SubTitle
        text={
          'Welcome! Please enter your credentials to login to the platform:'
        }
      />
      <AuthForm btnTitle="SignIn" nameIsShown={false} />
    </Wrapper>
  );
};

export default SignIn;
