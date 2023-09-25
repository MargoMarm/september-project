import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const Text = styled.h1`
  letter-spacing: 0.38px;
  font-weight: 500;
  color: ${colors.white};

  ${mq.smallMobile} {
    margin-top: 66px;
    margin-bottom: 40px;
    line-height: 105.26%;
    font-size: 38px;
  }

  ${mq.tablet} {
    width: 598px;
    font-size: 70px;
    line-height: 111.43%;
    letter-spacing: 0.7px;

    margin-top: 116px;
    margin-bottom: 64px;
  }

  & > span {
    position: relative;
    display: inline-block;

    & > svg {
      position: absolute;
      z-index: -1;
      width: 98px;
      height: 35px;
      left: -7px;
      top: 3px;

      ${mq.tablet} {
        width: 185px;
        height: 67px;
        left: -20px;
        top: 10px;
      }
    }
  }
`;
