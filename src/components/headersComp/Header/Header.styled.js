import styled from '@emotion/styled';
import { mq, colors } from '../../../utils';

export const HeaderContainer = styled.div`
  background-color: ${colors.black};
  height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mq.tablet} {
    background-color: ${colors.black};

    height: 84px;
    border-bottom: 1px solid ${colors.textWhite03};
  }

  ${mq.desktop} {
    background-color: transparent;
	 border: none;
  }
`;
