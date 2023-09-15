import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { colors, mq } from '../../utils';

export const DayDiaryContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 335px;
  padding: 0 20px;
  justify-content: space-between;
  align-items: flex-start;

  font-size: 14px;
  line-heigth: 1.29;

  border-radius: 12px;
  border: 1px solid ${colors.textWhite02};
  background: rgba(239, 237, 232, 0.05);
`;

export const DayDiarySubTitle = styled.h4``;

export const AddLink = styled(NavLink)``;

export const DayNoContentText = styled.p``;
