import styled from '@emotion/styled';
import { colors, mq } from '../../utils';
import { css } from '@emotion/react';

export const DiaryWrapper = styled.div`
  position: relative;

  padding: 40px 20px 80px 20px;
  ${mq.tablet} {
    padding: 72px 32px 64px 32px;
  }
  ${mq.desktop} {
    padding: 72px 96px 68px 96px;
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
  right: 96px;
  top: 0;
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

  &:disabled {
    cursor: default;
  }

  &:disabled > svg {
    fill: ${colors.textWhite02};
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
