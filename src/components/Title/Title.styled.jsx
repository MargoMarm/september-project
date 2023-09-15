import styled from '@emotion/styled';
import { mq } from '../../utils';
import colors from '../../utils/colorVeriables';

const commonStyles = {
  color: colors.white,
  fontFamily: 'Roboto',
  fontWeight: 500,
  wordWrap: 'break-word',
};

export const StyledTitle = styled.h2`
  h2 {
    ${commonStyles}

    ${mq.mobile} {
      font-size: 24px;
      line-height: 116.667%;
    }

    ${mq.tablet} {
      font-size: 32px;
      line-height: 137.5%;
    }
  }
`;
