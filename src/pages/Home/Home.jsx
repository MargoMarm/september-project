import AuthForm from '../../components/AuthForm/AuthForm';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'grey' }}>
      <AuthForm btnTitle="signUp" nameIsShown={true} />
    </div>
  );
};

export default Home;
