import DayDiary from '../../components/DayDiary/DayDiary';
import products from '../../data/products.json';

const Home = () => {
  return (
    <>
      <p>THIS IS OUR APP</p> <DayDiary products={products} />
    </>
  );
};

export default Home;
