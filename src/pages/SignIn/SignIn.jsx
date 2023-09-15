import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';
import { Wrapper } from '../Home/Home.styled';

const SignIn = () => {
  return (
    <Wrapper>
      <Title text={'Sign In'} margin={14} />
      <SubTitle
        text={
          'Welcome! Please enter your credentials to login to the platform:'
        }
      />
    </Wrapper>
  );
};

export default SignIn;
