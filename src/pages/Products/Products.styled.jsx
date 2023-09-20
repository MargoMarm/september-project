import styled from '@emotion/styled';
import { mq } from '../../utils';

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
  ${mq.tablet} {
    gap: 32px;
    margin-top: 72px;
  }
  ${mq.desktop} {
    margin-top: 40px;
    gap: 28px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  ${mq.tablet} {
    gap: 32px;
  }
  ${mq.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
