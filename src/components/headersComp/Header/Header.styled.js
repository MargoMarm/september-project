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
  border-bottom: ${props =>
    props.isBorderToRender ? `1px solid ${colors.textWhite03}` : 'none'};
  ${mq.tablet} {
    background-color: ${colors.black};
    padding: 0 32px;
    height: 84px;
  }

  ${mq.desktop} {
    background-color: transparent;
    padding-left: 96px;
  }
`;
