import styled from '@emotion/styled';
import { mq } from '../../utils';

export const TitleThumb = styled.div`
  ${mq.tablet} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`;

export const ExercisesWrapper = styled.div`
  padding: 40px 20px 80px 20px;
  ${mq.tablet} {
    padding: 72px 32px 32px 32px;
  }
  ${mq.desktop} {
    padding: 72px 96px 92px 96px;
  }
`;
