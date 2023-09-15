import MainTitle from '../../components/MainTitle/MainTitle';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';

const Home = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        This is my very first React application with the usage of Redux and some
        other libraries. It's a simple app when you can save your contacts in
        one place, delete them, or edit them. It has the functionality of
        registration, login, and logout of users.
      </p>
      <MainTitle />
      <Title text={'hello'} />
      <SubTitle text={ ' It is a simple app when you can save your contacts in one place, delete them, or edit them.'} />
    </>
  );
};

export default Home;
