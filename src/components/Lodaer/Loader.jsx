import { Puff } from 'react-loader-spinner';

const Loader = ({ size, needToCenter }) => {
  return (
    <Puff
      height={size}
      width={size}
      radius={1}
      color="#E6533C"
      ariaLabel="puff-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: needToCenter ? '100vh' : null,
        margin: '20px auto 0 auto',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
