import CustomNavLink from '../../components/CustomNavLink/CustomNavLink';
import MainTitle from '../../components/MainTitle/MainTitle';
import Header from '../../components/headersComp/Header/Header';
import Diary from '../Diary/Diary';
import { LinkList, Wrapper } from './Home.styled';

const Home = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Diary />
        {/* <MainTitle />
        <LinkList>
          <li>
            <CustomNavLink isorange={'true'} text={'Sign up'} to={'/signup'} />
          </li>
          <li>
            <CustomNavLink text={'Sign in'} to={'/signin'} />
          </li>
        </LinkList> */}
      </Wrapper>
    </>
  );
};

export default Home;
