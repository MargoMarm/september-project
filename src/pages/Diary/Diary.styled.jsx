import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const DiaryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExclamationText = styled.p`
  display: flex;
  margin: 20px 0 40px 0;

  font-size: 14px;
  line-height: 1.29;

  color: ${colors.textWhite03};

  ${mq.tablet} {
    width: 593px;

    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ExclamationSvg = styled.svg`
  max-width: 24px;
  max-height: 24px;
  margin-right: 8px;
`;
