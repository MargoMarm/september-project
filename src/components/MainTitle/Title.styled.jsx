import styled from '@emotion/styled';
import { mq } from '../../utils';
import colors from '../../utils/colorVeriables';

const commonStyles = {
  color: colors.white,
  fontFamily: 'Roboto',
  fontWeight: 500,
  wordWrap: 'break-word',
};

export const Text = styled.div`
  width: 335px;
  font-size: 38px;
  line-height: 105.26%;
  letter-spacing: 0.38px;
  ${commonStyles}

  ${mq.mobile} {
    width: 375px;
    font-size: 24px;
    line-height: 166.67%;
  }

  ${mq.tablet} {
    width: 598px;
    font-size: 70px;
    line-height: 111.43%;
    letter-spacing: 0.7px;
  }

  ${mq.desktop} {
    width: 598px;
    font-size: 70px;
    line-height: 111.43%;
    letter-spacing: 0.7px;
  }
`;
