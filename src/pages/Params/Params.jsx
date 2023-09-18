import { useEffect, useState } from 'react';
import Header from '../../components/headersComp/Header/Header';
import ParamsForm from '../../components/ParamsForm';
import ParamsBar from '../../components/ParamsBar';
import { ParamsPageWrapper } from './Params.styled';

const Params = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [steps, setSteps] = useState(1);

  useEffect(() => {
    if (!swiperRef) {
      return;
    }

    swiperRef.slideTo(steps - 1, 0);
  }, [steps, swiperRef]);

  return (
    <ParamsPageWrapper steps={steps}>
      <Header />

      <ParamsForm setSwiperRef={setSwiperRef} setSteps={setSteps} />

      <ParamsBar steps={steps} />
    </ParamsPageWrapper>
  );
};

export default Params;
