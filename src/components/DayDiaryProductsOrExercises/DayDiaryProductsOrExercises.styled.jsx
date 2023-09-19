import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { colors, mq } from '../../utils';

export const DayDiaryContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 335px;
  padding: 16px;
  align-items: flex-start;
  margin-bottom: ${props => props.marginBottom}px;

  font-size: 14px;
  line-heigth: 1.29;

  border-radius: 12px;
  border: 1px solid ${colors.textWhite02};
  background: rgba(239, 237, 232, 0.05);

  ${mq.tablet} {
    width: auto;
    height: 234px;
  }

  ${mq.desktop} {
    width: auto;
  }
`;

export const DayDiarySubDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DayDiarySubTitle = styled.p`
  margin: 0;

  color: ${colors.textWhite05};
`;

export const AddLink = styled(NavLink)`
  display: flex;
  align-items: center;

  color: ${colors.orange};

  transition: scale 250ms ease-in-out;

  &:hover {
    scale: 1.1;
  }
`;

export const DayNoContentText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${colors.textWhite05};
`;

export const ArrowRight = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;