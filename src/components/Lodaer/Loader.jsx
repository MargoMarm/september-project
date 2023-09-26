import { Puff } from 'react-loader-spinner';
const Loader = ({ size }) => {
  return (
    <Puff
      height={size}
      width={size}
      radius={1}
      color="#EF8964"
      ariaLabel="puff-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
