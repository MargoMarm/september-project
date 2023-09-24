import styled from '@emotion/styled';
import { mq } from '../../utils/index';

export const ExercisesItemList = styled.ul`
  margin-top: 40px;

  padding-bottom: 52px;

  ${mq.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`;
