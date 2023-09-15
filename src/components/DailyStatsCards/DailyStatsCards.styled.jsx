import styled from '@emotion/styled';
import { colors} from '../../utils';

export const CardWrap = styled.div`
  box-sizing: border-box;
  border: 1px solid;

  border-color: ${props => {
    if (props.border === 'green') {
      return colors.green;
    }
    if (props.border === 'red') {
      return colors.red;
    }
    return colors.textWhite03;
  }};

  background-color: ${props => {
    return props.fill === 'true' ? colors.orange : colors.textWhite005;
  }};

  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  height: 96px;
  padding: 10px;
`;

export const KeyWrap = styled.div`
  display: flex;
  gap: 3px;
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;

  fill: ${colors.orangeSecondary};
`;

export const Label = styled.span`
  color: ${props => {
    return props.fill === 'true' ? colors.textWhite08 : colors.textWhite05;
  }};

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: ${16 / 12};
`;

export const KeyValue = styled.p`
  color: ${props => {
    return props.fill === 'true' ? colors.textWhite06 : colors.textWhite05;
  }};
  margin: 0;

  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: ${18 / 20};
`;
