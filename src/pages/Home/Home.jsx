import CustomNavLink from '../../components/CustomNavLink/CustomNavLink';
import MainTitle from '../../components/MainTitle/MainTitle';
import Header from '../../components/headersComp/Header/Header';
import { LinkList, Wrapper } from './Home.styled';

import DiscriptionText from '../../components/DiscriptionText/DiscriptionText';

const Home = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <MainTitle />
        <LinkList>
          <li>
            <CustomNavLink isorange={'true'} text={'Sign up'} to={'/signup'} />
          </li>
          <li>
            <CustomNavLink text={'Sign in'} to={'/signin'} />
          </li>
        </LinkList>
      </Wrapper>

      <DiscriptionText
        text={
          'We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.'
        }
      />
    </>
  );
};

export default Home;
