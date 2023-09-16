import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';
import { Wrapper } from '../Home/Home.styled';
import Header from '../../components/headersComp/Header/Header';
import AuthForm from '../../components/AuthForm';

const SignUp = () => {
  return (
    <Wrapper>
      <Header />
        <Title text={'Sign Up'} margin={14} />
        <SubTitle
          text={
            'Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.'
          }
        />
        <AuthForm nameIsShown={true} btnTitle="Sign Up" />
    </Wrapper>
  );
};

export default SignUp;