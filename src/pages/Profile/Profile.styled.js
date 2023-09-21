import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const Container = styled.div`
  padding: 40px 20px 78px 20px;
  ${mq.tablet} {
    padding: 72px 32px 54px 32px;
  }
  ${mq.desktop} {
    padding: 72px 96px 44px 96px;
  }
`;

export const BlockWrapper = styled.div`
  margin-top: 40px;

  ${mq.tablet} {
    margin-top: 64px;
  }

  ${mq.desktop} {
    display: flex;
    flex-direction: row-reverse;
    gap: 0 49px;
    margin-top: 32px;
    justify-content: space-between;
  }
`;

export const FormWrap = styled.div`
  ${mq.desktop} {
    padding-right: 64px;
    border-right: 1px solid ${colors.textWhite02};
  }
`;
