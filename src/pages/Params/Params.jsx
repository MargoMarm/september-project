import { useEffect, useState } from 'react';

import Logo from '../../components/headersComp/Logo/Logo';
import ParamsForm from '../../components/ParamsForm/ParamsForm';
import ParamsBar from '../../components/ParamsBar/ParamsBar';
import { colors } from '../../utils';
import { ParamsPageWrapper, LogoWrapper } from './Params.styled';

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
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <ParamsForm
        setSwiperRef={setSwiperRef}
        setSteps={setSteps}
        palette={colors}
      />

      <ParamsBar steps={steps} palette={colors} />
    </ParamsPageWrapper>
  );
};

export default Params;
