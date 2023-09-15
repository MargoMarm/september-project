import PropTypes from 'prop-types';
import { KeyWrap, CardWrap,Svg } from './DailyStatsCards.styled';

const DailyStatsCards = ({
  icon,
  keyValue,
  label,
  border = 'default',
  fill = false,
}) => {
  return (
    <CardWrap>
      <KeyWrap>
        <Svg>
          <use href={`/src/assets/sprite.svg#${icon}`}></use>
        </Svg>

        <span>{keyValue}</span>
      </KeyWrap>

      <p>{label}</p>
    </CardWrap>
  );
};

DailyStatsCards.propTypes = {
  icon: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  border: PropTypes.string,
  fill: PropTypes.bool,
};

export default DailyStatsCards;
