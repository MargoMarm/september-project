import CustomNavLink from '../../components/CustomNavLink/CustomNavLink';
import DescriptionText from '../../components/DescriptionText/DescriptionText';
import MainTitle from '../../components/MainTitle/MainTitle';
import Header from '../../components/headersComp/Header/Header';
import { LinkList, Wrapper } from './Home.styled';

const Home = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <DescriptionText text="Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices." />
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
