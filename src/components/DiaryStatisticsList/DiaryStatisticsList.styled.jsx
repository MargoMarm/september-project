import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const List = styled.ul`
  display: grid;
  width: 335px;
  gap: 13px;

  grid-template-columns: repeat(2, 1fr);

  ${mq.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    width: 593px;
  }
  ${mq.desktop} {
    grid-template-columns: repeat(2, 1fr);
    width: 390px;
  }
`;
