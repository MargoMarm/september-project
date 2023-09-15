import styled from '@emotion/styled';
import { mq } from '../../../utils';

export const HeaderContainer = styled.div`
  background-color: #000000;
  height: 84px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 0 10px;
  ${mq.mobile} {
    /* justify-content: center; */
  }
`;
