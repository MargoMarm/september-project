import { LoaderContainer } from './LoaderForPages.styled';

import { Puff } from 'react-loader-spinner';

const LoaderForPages = () => {
  return (
    <LoaderContainer>
      <Puff
        height={'100'}
        width={'100'}
        radius={1}
        color="#E6533C"
        ariaLabel="puff-loading"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        wrapperClass=""
        visible={true}
      />
    </LoaderContainer>
  );
};

export default LoaderForPages;
