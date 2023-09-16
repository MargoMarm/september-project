import styled from '@emotion/styled';
import { mq, colors } from '../../../utils';

export const HeaderContainer = styled.div`
  background-color: ${colors.black};
  height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mq.tablet} {
    height: 84px;
    border-bottom: 1px solid ${colors.textWhite03};
  }
`;
