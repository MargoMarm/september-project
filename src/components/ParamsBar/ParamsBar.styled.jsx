import styled from '@emotion/styled';
import { mq } from '../../utils';

export const ProgressBar = styled.div`
  ${mq.smallMobile} {
    display: flex;
    justify-content: space-around;
    width: 178px;
    height: 4px;
  }
  ${mq.tablet} {
    width: 268px;
  }
`;

export const BarItem = styled.div`
  ${mq.smallMobile} {
    width: 50px;
    height: 4px;
    border-radius: 2px;

    background: #303030;
  }
  ${mq.tablet} {
    width: 80px;
  }
`;
