import styled from '@emotion/styled';

import { mq } from '../../utils';

export const Container = styled.div`
  margin: 0px auto;
  ${'' /* padding: 0px 20px; */}

  ${mq.mobile} {
    width: 375px;
  }

  ${mq.tablet} {
    width: 768px;
    padding: 0px 32px;
  }

  ${mq.desktop} {
    width: 1440px;
    padding: 0px 96px;
  }
`;
