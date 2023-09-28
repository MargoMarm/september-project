import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const ScrollContainer = styled.div`
  overflow: auto;
  height: calc(100vh - 48px);
  scrollbar-width: 0px;

  width: ${({ width }) => width?.mob + 'px' || '100%'};

  ${mq.tablet} {
    width: ${({ width }) => width?.tab + 'px' || '100%'};
    scrollbar-color: ${colors.orange} ${colors.textWhite01};
    scrollbar-width: thin;
    ::-webkit-scrollbar {
      width: 8px;
      background-color: ${colors.textWhite01};
      border-radius: 12px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.orange};
      border-radius: 12px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: ${colors.orange};
    }
  }
  ${mq.desktop} {
    width: ${({ width }) => width?.dt + 'px' || '100%'};
    height: calc(100vh - 230px);
  }
`;
