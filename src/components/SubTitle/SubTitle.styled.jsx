import styled from '@emotion/styled';
import { mq } from '../../utils';
import colors from '../../utils/colorVeriables';

const commonStyles = {
  color: colors.black,
  fontFamily: 'Roboto',
  fontWeight: 500,
  wordWrap: 'break-word',
};

export const SubStyle = styled.h2`
  ${commonStyles}

  ${mq.mobile} {
    font-size: 24px;
    line-height: 28px;
  }

  ${mq.tablet} {
    font-size: 32px;
    line-height: 44px;
  }

  ${mq.desktop} {
    font-size: 32px;
    line-height: 44px;
  }

  color: rgba(239, 237, 232, 0.3);
  font-size: 16px;
`;
