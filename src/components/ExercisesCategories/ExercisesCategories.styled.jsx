import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import { mq, colors } from '../../utils';

export const CategoriesList = styled.ul`
  display: flex;
  gap: 28px;

  margin-top: 20px;

  ${mq.tablet} {
    gap: 32px;
  }
`;
export const CategoriesListItem = styled.li``;

export const CategoriesLink = styled.button`
  position: relative;
  padding: 0;

  color: ${colors.textWhite03};
  font-family: Roboto;
  font-size: 14px;

  line-height: 1.28;

  background-color: transparent;
  outline: none;
  border: none;

  &.active::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;

    bottom: -4px;
    left: 0;
    background-color: #ef8964;
    border-radius: 2px;
  }

  ${mq.tablet} {
    font-size: 16px;

    line-height: 1.5;
  }
`;
