import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { colors, mq } from '../../utils';

export const Link = styled(NavLink)`
  box-sizing: border-box;
  padding: ${props =>
    props.isinheader === 'true' ? '10px 27px' : '12px 40px'};
  display: inline-block;
  gap: 10px;
  border-radius: 12px;

  background-color: ${props =>
    props.isorange === 'true' ? colors.orange : 'inherit'};
  border: ${props =>
    props.isorange === 'true' ? 'none' : '1px solid rgba(239, 237, 232, 0.30)'};
  color: ${colors.white};

  font-size: 16px;
  font-weight: ${props => (props.isinheader === 'true' ? '400' : '500')};
  line-height: 1.13;

  &:hover {
    background-color: ${props =>
      props.isorange === 'true' ? colors.orangeSecondary : 'inherit'};
    border: ${props =>
      props.isorange === 'true' ? 'none' : '1px solid #E6533C'};
  }

  ${mq.tablet} {
    padding: ${props =>
      props.isinheader === 'true' ? '10px 27px' : '16px 60px'};

    font-size: ${props => (props.isinheader === 'true' ? '16px' : '20px')};
    line-height: 1.2;
  }
`;
