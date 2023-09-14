import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { colors, mq } from '../../utils';

export const Link = styled(NavLink)`
  box-sizing: border-box;
  padding: ${props => (props.isInHeader ? '10px 27px' : '12px 40px')};
  display: inline;
  gap: 10px;
  border-radius: 12px;

  background-color: ${props => (props.isOrange ? colors.orange : 'none')};
  border: ${props =>
    props.isOrange ? 'none' : '1px solid rgba(239, 237, 232, 0.30)'};
  color: ${colors.white};

  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  ${mq.tablet} {
    padding: ${props => (props.isInHeader ? '10px 27px' : '16px 60px')};

    font-size: 20px;
    line-height: 1.2;
  }
`;
