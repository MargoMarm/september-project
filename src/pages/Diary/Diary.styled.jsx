import styled from '@emotion/styled';
import { mq } from '../../utils';

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
