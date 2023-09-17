import PropTypes from 'prop-types';
import sprite from '../../assets/sprite.svg';
import {
  GreyCard,
  GreySvgWrapper,
  GreySvg,
  GreyTextWrapper,
  GreyDynamicText,
  GreyStaticText,
  OrangeCard,
  OrangeSvgWrapper,
  OrangeSvg,
  OrangeTextWrapper,
  OrangeDynamicText,
  OrangeStaticText,
} from './ParamsBlocks.styled';

const ParamsBlockCard = ({
  data,
  measure,
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
  console.log(sprite);

  if (type === 'grey') {
    return (
      <GreyCard
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
      >
        <GreySvgWrapper>
          <GreySvg>
            <use href={sprite + `#triangle`}></use>
          </GreySvg>
        </GreySvgWrapper>
        <GreyTextWrapper>
          <GreyDynamicText>{data}+</GreyDynamicText>
          <GreyStaticText>Video tutorial</GreyStaticText>
        </GreyTextWrapper>
      </GreyCard>
    );
  }

  if (type === 'orange') {
    return (
      <OrangeCard
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
      >
        <OrangeSvgWrapper>
          <OrangeSvg>
            <use href={sprite + `#running-man`}></use>
          </OrangeSvg>
        </OrangeSvgWrapper>
        <OrangeTextWrapper>
          <OrangeDynamicText>{data}</OrangeDynamicText>
          <OrangeStaticText>{measure}</OrangeStaticText>
        </OrangeTextWrapper>
      </OrangeCard>
    );
  }
};

ParamsBlockCard.propTypes = {
  data: PropTypes.number,
  type: PropTypes.string,
  measure: PropTypes.string,
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
