import { useEffect, useState } from 'react';
import ParamsForm from '../../components/ParamsForm';
import ParamsBar from '../../components/ParamsBar';
import { ParamsPageWrapper, ParamsPageWrapperDesktop } from './Params.styled';

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
    <main>
      <ParamsPageWrapperDesktop steps={steps}></ParamsPageWrapperDesktop>
      <ParamsPageWrapper steps={steps}>
        <ParamsForm setSwiperRef={setSwiperRef} setSteps={setSteps} />

        <ParamsBar steps={steps} setSteps={setSteps} />
      </ParamsPageWrapper>
    </main>
  );
};

export default Params;
