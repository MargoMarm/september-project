import { BlockVideoCard, BlockOrangeCard } from './ParamsBlocks.styled';
import PropTypes from 'prop-types';

const ParamsBlockCard = ({
  type,
  mt_m,
  mr_m,
  mb_m,
  ml_m,
  mt_t,
  mr_t,
  mb_t,
  ml_t,
  mt_d,
  mr_d,
  mb_d,
  ml_d,
}) => {
  if (type === 'video') {
    return (
      <BlockVideoCard
        mt_m={mt_m}
        mr_m={mr_m}
        mb_m={mb_m}
        ml_m={ml_m}
        mt_t={mt_t}
        mr_t={mr_t}
        mb_t={mb_t}
        ml_t={ml_t}
        mt_d={mt_d}
        mr_d={mr_d}
        mb_d={mb_d}
        ml_d={ml_d}
      ></BlockVideoCard>
    );
  }

  if (type === 'users') {
    return (
      <BlockOrangeCard
        mt_m={mt_m}
        mr_m={mr_m}
        mb_m={mb_m}
        ml_m={ml_m}
        mt_t={mt_t}
        mr_t={mr_t}
        mb_t={mb_t}
        ml_t={ml_t}
        mt_d={mt_d}
        mr_d={mr_d}
        mb_d={mb_d}
        ml_d={ml_d}
      ></BlockOrangeCard>
    );
  }
};

ParamsBlockCard.propTypes = {
  type: PropTypes.string,
  mt_m: PropTypes.string,
  mr_m: PropTypes.string,
  mb_m: PropTypes.string,
  ml_m: PropTypes.string,
  mt_t: PropTypes.string,
  mr_t: PropTypes.string,
  mb_t: PropTypes.string,
  ml_t: PropTypes.string,
  mt_d: PropTypes.string,
  mr_d: PropTypes.string,
  mb_d: PropTypes.string,
  ml_d: PropTypes.string,
};

export default ParamsBlockCard;
