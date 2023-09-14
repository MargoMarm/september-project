import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { colors, mq } from '../../utils';

export const Link = styled(NavLink)`
  box-sizing: border-box;
  width: 136px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;

  background-color: ${props => (props.isOrange ? colors.orange : 'none')};
  border: ${props => props.isOrange ? 'none' : '1px solid rgba(239, 237, 232, 0.30)'};
  color: ${colors.white};

  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  ${mq.tablet} {
    width: 190px;
    height: 56px;

    font-size: 20px;
    line-height: 1.2;
  }
`;
