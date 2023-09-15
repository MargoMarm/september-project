import CustomNavLink from "../../components/CustomNavLink/CustomNavLink";
import MainTitle from "../../components/MainTitle/MainTitle";
import { LinkList, Wrapper } from "./Home.styled";


const Home = () => {
  return (
    <>
      <Wrapper>
        <MainTitle />
        <LinkList>
          <li>
            <CustomNavLink isorange={'true'} text={'Sign up'} />
          </li>
          <li>
            <CustomNavLink text={'Sign in'} />
          </li>
        </LinkList>
      </Wrapper>
    </>
  );
};

export default Home;
