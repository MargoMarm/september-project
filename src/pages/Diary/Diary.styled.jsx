import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const DiaryWrapper = styled.div`
  position: relative;

  padding: 0 20px;
  ${mq.tablet} {
    padding: 0 32px;
  }
  ${mq.desktop} {
    padding: 0 96px;
  }
`;

export const DiaryPageContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${mq.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  z-index: 999;
  right: 20px;
  top: 4px;

  ${mq.tablet} {
    right: 32px;
    top: -10px;
  }

  ${mq.desktop} {
    right: 96px;
  }
`;

export const CalendarBtn = styled.button`
  height: 16px;
  padding: 0;
  margin-left: 40px;

  border: none;
  background-color: inherit;

  &:last-child {
    margin-left: 6px;
  }

  &:hover > svg {
    fill: ${colors.orange};
  }
`;

export const CalendarBtnIcon = styled.svg`
  width: 16px;
  height: 16px;

  transition: fill 0.3s;

  fill: ${colors.white};
`;

export const CustomDivForCards = styled.div`
  width: auto;

  ${mq.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${mq.desktop} {
    margin-top: 0;
  }
`;

export const CustomDivForTables = styled.div`
  width: auto;

  ${mq.tablet} {
    width: 704px;
  }

  ${mq.desktop} {
    width: 826px;
  }
`;
