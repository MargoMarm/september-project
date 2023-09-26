import styled from '@emotion/styled';

import { mq } from '../../utils';

export const Container = styled.div`
  margin: 0px auto;

  ${mq.mobile} {
    width: 375px;
  }

  ${mq.tablet} {
    width: 768px;
  }

  ${mq.desktop} {
    width: 1440px;
  }
`;
