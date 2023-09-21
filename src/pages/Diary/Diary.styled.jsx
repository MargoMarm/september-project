import styled from '@emotion/styled';
import { mq } from '../../utils';

export const DiaryWrapper = styled.div`
  padding: 40px 20px 80px 20px;
  ${mq.tablet} {
    padding: 72px 32px 64px 32px;
  }
  ${mq.desktop} {
    padding: 72px 96px 68px 96px;
  }
`;

export const DiaryPageContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${mq.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CustomDivForCards = styled.div`
  width: auto;

  ${mq.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${mq.desktop} {
    margin-top: 0;
  }
`;

export const CustomDivForTables = styled.div`
  width: auto;

  ${mq.tablet} {
    width: 704px;
  }

  ${mq.desktop} {
    width: 826px;
  }
`;
