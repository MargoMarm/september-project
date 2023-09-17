import CustomNavLink from '../../components/CustomNavLink/CustomNavLink';
import MainTitle from '../../components/MainTitle/MainTitle';
import ProductsItem from '../../components/ProductsItem/ProductsItem';
import Header from '../../components/headersComp/Header/Header';
import { LinkList, Wrapper } from './Home.styled';

const product = {
  _id: {
    $oid: '5d51694902b2373622ff5773',
  },
  weight: 100,
  calories: 340,
  category: 'dairy',
  title: 'Salads Belaya Dacha Delicate root',
  groupBloodNotAllowed: {
    1: true,
    2: true,
    3: false,
    4: false,
  },
};

const exercise = {
  bodyPart: 'waist',
  equipment: 'body weight',
  gifUrl:
    'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0001.gif',
  name: '3/4 sit-upqweewqewqqweqwewqewqewqe',
  target: 'abs',
  burnedCalories: 220,
  time: 3,
};

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
      <ProductsItem product={product} />
    </>
  );
};

export default Home;
