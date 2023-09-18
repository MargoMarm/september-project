import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

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
  }
`;

export const FormWrap = styled.div`
  ${mq.desktop} {
    padding-right: 64px;
    border-right: 1px solid ${colors.textWhite02};
  }
`;
