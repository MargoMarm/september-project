import styled from '@emotion/styled';
import { mq } from '../../utils';
import colors from '../../utils/colorVeriables';

const commonStyles = {
  color: colors.textWhite03,
  fontFamily: 'Roboto',
  fontWeight: 400,
  wordWrap: 'break-word',
};

export const SubStyle = styled.p`
  ${commonStyles}

  ${mq.mobile} {
    font-size: 14px;
    line-height: 128.571%;
  }

  ${mq.tablet} {
    font-size: 16px;
    line-height: 150%;
  }
`;
