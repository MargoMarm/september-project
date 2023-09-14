import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { colors } from '../../utils';
import { color } from '@mui/system';

export const Text = styled.p`
  margin-top: 12px;
  color: ${color.textWhite06};
  font-size: 12px;
  line-height: 1.5;
`;

export const Link = styled(NavLink)`
  margin-left: 5px;
  color: ${colors.white};
  text-decoration-line: underline;
`;
