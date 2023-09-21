import CustomNavLink from '../../components/CustomNavLink/CustomNavLink';
import MainTitle from '../../components/MainTitle/MainTitle';
import { LinkList, Wrapper, WrapperDesktop } from './Home.styled';

const Home = () => {
  return (
    <>
      <WrapperDesktop></WrapperDesktop>
      <Wrapper>
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
    </>
  );
};

export default Home;
