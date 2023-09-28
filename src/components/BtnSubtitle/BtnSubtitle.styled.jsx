import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../utils/colorVeriables';
import mq from '../../utils/mediaQuery';

export const BtnSubtitleText = styled.span`
  color: ${colors.textWhite06};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
`;

export const BtnSubtitleLink = styled(Link)`
  color: ${colors.white};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-left: 5px;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:focus {
    color: ${colors.orange};
  }
`;

export const TextWrapper = styled.div`
  display: inline-block;
  margin-top: 12px;

  ${mq.tablet} {
    padding-left: 9px;
  }
`;
