import styled from '@emotion/styled';

import { colors, mq } from '../../utils';

export const Container = styled.div`
  display: flex;

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

export const Content = styled.div`
  padding: 32px;
  background-color: ${colors.orange};

  ${mq.mobile} {
    width: 240px;
  }

  ${mq.tablet} {
    width: 420px;
  }

  ${mq.desktop} {
    width: 670px;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-family: Roboto;
  font-size: 66px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.66px;

  ${mq.mobile} {
  }

  ${mq.tablet} {
  }

  ${mq.desktop} {
  }
`;

export const Text = styled.p`
  color: ${colors.white};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  ${mq.mobile} {
  }

  ${mq.tablet} {
  }

  ${mq.desktop} {
  }
`;
