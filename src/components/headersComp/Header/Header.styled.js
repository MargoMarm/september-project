import styled from '@emotion/styled';
import { mq, colors } from '../../../utils';

export const HeaderContainer = styled.div`
  position: relative;
  background-color: ${colors.black};
  height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  ${mq.tablet} {
    background-color: ${colors.black};
    padding: 0 32x;

    height: 84px;
    border-bottom: 1px solid ${colors.textWhite03};
  }

  ${mq.desktop} {
    background-color: transparent;
    border: none;
    padding-left: 96px;
  }
`;
