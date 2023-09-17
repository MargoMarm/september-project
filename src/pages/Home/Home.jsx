import CustomNavLink from '../../components/CustomNavLink/CustomNavLink';
import DayDiary from '../../components/DayDiary/DayDiary';
import MainTitle from '../../components/MainTitle/MainTitle';
import Header from '../../components/headersComp/Header/Header';
import { LinkList, Wrapper } from './Home.styled';

const nodes = [
  {
    _id: {
      $oid: '5d51694902b2373622ff5773',
    },
    weight: 100,
    calories: 340,
    category: 'dairy',
    title: 'Danbo cheese',
    groupBloodNotAllowed: {
      1: true,
      2: true,
      3: false,
      4: false,
    },
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5b7f',
    },
    weight: 100,
    calories: 112,
    category: 'fish',
    title: 'marlin',
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5e13',
    },
    weight: 100,
    calories: 17,
    category: 'vegetables and herbs',
    title: 'Salads Belaya Dacha Delicate root',
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5b6f',
    },
    weight: 100,
    calories: 160,
    category: 'fish',
    title: 'Cold smoked bream',
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5b8d',
    },
    weight: 100,
    calories: 281,
    category: 'fish',
    title: 'Pollock in batter',
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
];

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
        <DayDiary products={nodes} isDayProducts={'true'}/>
      </Wrapper>
    </>
  );
};

export default Home;
