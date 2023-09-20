import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '../../utils';
import { Input } from '../UserForm/UserForm.styled';

export const GlobalStyles = css`
  .react-datepicker__wrapper {
    position: relative;
  }
  .react-datepicker-popper {
    z-index: 1;
  }
  .react-datepicker {
    padding: 14px;
    border-radius: 8px;
    background-color: ${colors.orangeSecondary};
    display: inline-block;
    position: relative;
  }

  .react-datepicker__aria-live {
    position: absolute;
    clip-path: circle(0);
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    width: 1px;
    white-space: nowrap;
  }

  .react-datepicker__navigation {
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 12px;
    padding: 0;
    border: none;
    z-index: 1;
    height: 32px;
    width: 32px;
    text-indent: -999em;
    overflow: hidden;
  }
  .react-datepicker__navigation--previous {
    left: 0;
  }
  .react-datepicker__navigation--next {
    right: 0;
  }
  .react-datepicker__navigation-icon {
    position: relative;
  }
  .react-datepicker__navigation-icon::before {
    content: '';
    position: absolute;
    top: 0;
    display: block;
    width: 9px;
    height: 9px;
    border-color: ${colors.grey};
    border-style: solid;
    border-width: 3px 3px 0 0;
  }

  .react-datepicker__navigation:hover
    .react-datepicker__navigation-icon::before,
  .react-datepicker__navigation:active
    .react-datepicker__navigation-icon::before {
    border-color: ${colors.textWhite04};
  }

  .react-datepicker__navigation-icon--next::before {
    transform: rotate(45deg);
    left: -7px;
  }

  .react-datepicker__navigation-icon--previous::before {
    transform: rotate(225deg);
    right: -7px;
  }

  .react-datepicker__current-month {
    padding-bottom: 14px;
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    color: ${colors.grey};
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-top: 1px solid ${colors.textWhite02};
    color: ${colors.textWhite05};
    font-size: 14px;
  }

  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${colors.grey};
  }

  .react-datepicker__day {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 14px;
    transition:
      color 0.3s,
      background-color 0.3s;
  }

  .react-datepicker__day--disabled {
    color: ${colors.textWhite02};
  }

  .react-datepicker__day:hover,
  .react-datepicker__day:active {
    background: ${colors.textWhite04};
    color: ${colors.orange};
  }

  .react-datepicker__day--outside-month {
    color: ${colors.textWhite02};
  }

  .react-datepicker__day--selected {
    background: ${colors.orange}!important;
    color: inherit !important;
  }

  .react-datepicker__header__dropdown {
    width: 13px;
    position: absolute;
    top: 16px;
    right: 40px;
  }

  .react-datepicker__month-read-view--selected-month
    .react-datepicker__year-read-view--selected-year {
    display: none;
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow {
    margin-left: 1px;
    border-color: ${colors.grey};
    border-style: solid;
    border-width: 3px 3px 0 0;
    content: '';
    display: block;
    height: 9px;
    width: 9px;
  }

  .react-datepicker__year-read-view:hover
    .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view:hover
    .react-datepicker__month-read-view--down-arrow {
    border-top-color: ${colors.textWhite04};
    border-right-color: ${colors.textWhite04};
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow {
    transform: rotate(135deg);
    right: -16px;
    top: 0;
  }

  .react-datepicker__year-dropdown,
  .react-datepicker__month-dropdown,
  .react-datepicker__month-year-dropdown {
    position: absolute;
    width: 70px;
    right: -18px;
    top: 20px;
    z-index: 1;
    text-align: center;
    background-color: ${colors.orangeSecondary};
    border-radius: 8px;
    border: 1px solid ${colors.textWhite06};
  }

  .react-datepicker__year-dropdown--scrollable,
  .react-datepicker__month-dropdown--scrollable {
    height: 150px;
    overflow-y: scroll;
    scrollbar-color: ${colors.white} ${colors.textWhite06};
    scrollbar-width: thin;
    ::-webkit-scrollbar {
      width: 8px;
      background-color: ${colors.textWhite06};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.white};
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #a5a59a;
    }
  }

  .react-datepicker__year-option,
  .react-datepicker__month-option,
  .react-datepicker__month-year-option {
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    line-height: 20px;
    color: ${colors.white};
  }

  .react-datepicker__year-option:hover,
  .react-datepicker__month-option:hover,
  .react-datepicker__year-option:active,
  .react-datepicker__month-option:active {
    background-color: ${colors.textWhite04};
  }
`;

export const Label = styled.label`
  position: relative;
  &:hover svg {
    stroke: ${colors.orange};
  }
`;

export const Ipt = styled(Input)`
  padding-right: 34px;
  ${props => props.withoutВorder && 'border: none;'}

  &:focus + svg {
    stroke: ${colors.orange};
  }
`;

export const Icon = styled.svg`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  stroke: ${colors.grey};
  transition: stroke 0.3s;
`;
