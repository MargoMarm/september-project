import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../utils/colorVeriables';
import mq from '../../utils/mediaQuery';

export const BtnSubtitleText = styled.span`
  color: ${colors.textWhite06}; 
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  ${mq.tablet} {
    color: ${colors.textWhite06}; 
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const BtnSubtitleLink = styled(Link)`
  color: ${colors.white}; 
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
  margin-left: 5px;

  ${mq.tablet} {
    color: ${colors.white}; 
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-decoration-line: underline;
  }
`;
