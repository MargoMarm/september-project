import styled from '@emotion/styled';
import { mq } from '../../utils';
import colors from '../../utils/colorVeriables';

const commonStyles = {
  color: colors.white,
  fontFamily: 'Roboto',
  fontWeight: 400,
  wordWrap: 'break-word',
};

export const SubStyle = styled.p`
  ${commonStyles}

  ${mq.mobile} {
    font-size: 14px;
    line-height: 128%;
  }

  ${mq.tablet} {
    font-size: 16px;
    line-height: 150%;
  }
`;
