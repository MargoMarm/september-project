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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;

  padding: 20px;
  background-color: ${colors.orange};

  ${mq.mobile} {
    width: 240px;
  }

  ${mq.tablet} {
    width: 420px;
    padding: 32px;
  }

  ${mq.desktop} {
    width: 670px;
    padding: 96px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 14px;

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
    margin-bottom: 28px;
  }

  ${mq.desktop} {
  }
`;

export const Text = styled.p`
  margin-bottom: 28px;

  color: ${colors.white};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  ${mq.mobile} {
    width: 200px;
  }

  ${mq.tablet} {
    width: 356px;
  }

  ${mq.desktop} {
    width: 447px;
  }
`;
