import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';
import Header from '../../components/headersComp/Header/Header';
import AuthForm from '../../components/AuthForm/AuthForm';
import BtnSubtitle from '../../components/BtnSubtitle/BtnSubtitle';
import { Wrapper } from '../Home/Home.styled';

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
      <AuthForm btnTitle="Sign In" nameIsShown={false} />
      <BtnSubtitle
        text={'Don’t have an account?'}
        to={'/signup'}
        linkText={'Sign Up'}
      />
    </Wrapper>
  );
};

export default SignIn;
