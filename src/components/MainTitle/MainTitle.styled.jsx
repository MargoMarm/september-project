import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

const commonStyles = {
  color: colors.white,
  fontFamily: 'Roboto',
  fontWeight: 500,
  wordWrap: 'break-word',
};

export const Text = styled.h1`
  letter-spacing: 0.38px;
  ${commonStyles}

  & > span {
    position: relative;
    display: inline-block;

    & > svg {
      position: absolute;
      z-index: -1;
      width: 98px;
      height: 35px;
      left: -13px;
      top: 1px;

      ${mq.tablet} {
        width: 185px;
        height: 67px;
        left: -20px;
        top: 10px;
      }
    }
  }

  ${mq.mobile} {
    width: 335px;
    margin-top: 66px;
    margin-bottom: 40px;
    line-height: 105.26%;
  }

  ${mq.tablet} {
    width: 598px;
    font-size: 70px;
    line-height: 111.43%;
    letter-spacing: 0.7px;

    margin-top: 116px;
    margin-bottom: 64px;
  }
`;
