import styled from '@emotion/styled';

import { mq } from '../../utils';

export const Container = styled.div`
  margin: 0px auto;
<<<<<<< HEAD
  ${'' /* padding: 0px 20px; */}
=======
  /* padding: 0px 20px; */
>>>>>>> b94d9e5c88781d81600eab0619228ebb91807f8d

  ${mq.mobile} {
    width: 375px;
  }

  ${mq.tablet} {
    width: 768px;
    ${'' /* padding: 0px 32px; */}
  }

  ${mq.desktop} {
    width: 1440px;
    ${'' /* padding: 0px 96px; */}
  }
`;
