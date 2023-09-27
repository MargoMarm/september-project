import styled from '@emotion/styled';
import { mq } from '../../utils';

export const ScrollContainer = styled.div`
  width: ${({ width }) => width?.mob + 'px' || '100%'};
  height: 100vh;
  ${mq.tablet} {
    width: ${({ width }) => width?.nab + 'px' || '100%'};
  }
  ${mq.desktop} {
    width: ${({ width }) => width?.dt + 'px' || '100%'};
  }
`;
