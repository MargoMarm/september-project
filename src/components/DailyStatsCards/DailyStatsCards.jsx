import PropTypes from 'prop-types';
import sprite from '../../assets/sprite.svg';
import {
  KeyWrap,
  CardWrap,
  Svg,
  KeyValue,
  Label,
} from './DailyStatsCards.styled';

const DailyStatsCards = ({
  icon,
  keyValue,
  label,
  border = 'default',
  fill = 'false',
}) => {
  return (
    <CardWrap fill={fill} border={border}>
      <KeyWrap>
        <Svg>
          <use href={`${sprite}#${icon}`}></use>
          <use href={sprite + `#${icon}`}></use>
        </Svg>

        <Label>{label}</Label>
      </KeyWrap>

      <KeyValue>{keyValue}</KeyValue>
    </CardWrap>
  );
};

DailyStatsCards.propTypes = {
  icon: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  border: PropTypes.oneOf(['green', 'red', "default"]),
  fill: PropTypes.oneOf(['true', 'false']),
};

export default DailyStatsCards;
