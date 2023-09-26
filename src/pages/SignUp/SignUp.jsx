import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';
import AuthForm from '../../components/AuthForm';
import { useDispatch } from 'react-redux';
import { authUser } from '../../redux/auth/operation';
import BtnSubtitle from '../../components/BtnSubtitle/BtnSubtitle';
import { Wrapper, WrapperDesktop } from '../Home/Home.styled';
import ParamsBlockCard from '../../components/ParamsBlockСard/ParamsBlockCard';
import { mg } from '../../utils';

const SignUp = () => {
  const dispatch = useDispatch();
  const handleSubmit = (user, { resetForm }) => {
    console.log(user);
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

export default SignUp;
