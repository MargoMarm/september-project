import styled from '@emotion/styled';
import { Field } from 'formik';
// import { steps } from './ParamsForm';

import { colors, mq } from '../../utils';

export const Page = styled.div`
  ${mq.smallMobile} {
    padding: 20px;

    background-color: ${colors.black};
    background:
      linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%) black;
    background-repeat: no-repeat;
    background-position: 100% 100%;
  }

  ${mq.tablet} {
    padding: 32px;
  }

  ${mq.desktop} {
    padding: 32px 32px 32px 96px;
  }
`;

export const Logo = styled.div`
  ${mq.smallMobile} {
    width: 100px;
    height: 17px;
    margin-bottom: 90px;

    color: ${colors.white};
  }

  ${mq.tablet} {
    margin-bottom: 140px;
  }

  ${mq.desktop} {
    margin-bottom: 151px;
  }
`;

export const Title = styled.h1`
  ${mq.smallMobile} {
    margin-bottom: 14px;

    font-size: 24px;
    font-weight: 700;
    line-height: 116.667%; /* 116.667% */

    color: ${colors.white};
  }

  ${mq.tablet} {
    margin-bottom: 16px;

    font-size: 32px;
    line-height: 137.5%; /* 137.5% */
  }
`;

export const InputGroup = styled.div`
  ${mq.smallMobile} {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    margin: -7px;
    margin-bottom: 30px;
  }

  ${mq.tablet} {
    justify-content: flex-start;
    width: 527px;
    margin-bottom: 32px;
  }
`;

export const FormikField = styled(Field)`
  ${mq.smallMobile} {
    width: 155px;
    padding: 14px 0 14px 14px;
    margin: 7px;

    font-size: 14px;
    line-height: 128.571%; /* 128.571% */

    border: 1px solid rgba(239, 237, 232, 0.3);
    border-radius: 12px;
    outline: none;

    background-color: transparent;
    color: ${colors.textWhite06};

    transition: border-color 250ms linear;

    &::placeholder {
      color: ${colors.textWhite06};
    }

    &:focus-within {
      border-color: ${colors.orange};
    }
  }

  ${mq.tablet} {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const BtnNav = styled.button`
  ${mq.smallMobile} {
    ${'' /* padding: 0; */}
    padding-top: 0;
    padding-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 128%; /* 128.571% */

    color: ${colors.white};
    background: transparent;

    border: none;
    outline: none;
  }

  ${mq.tablet} {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const FormRadioBtnGroupWrapper = styled.div`
  ${mq.smallMobile} {
    display: flex;
    margin-bottom: 28px;
  }

  ${mq.tablet} {
    margin-bottom: 32px;
  }
`;

export const BtnsAndBlock = styled.div`
  ${mq.smallMobile} {
    display: flex;
    align-items: flex-start;
    margin-bottom: 25px;
  }
  ${mq.tablet} {
    margin-bottom: 56px;
  }
`;

export const BtnSubmit = styled.button`
  ${mq.smallMobile} {
    margin-right: 16px;
    padding: 12px 40px;

    font-size: 16px;
    font-weight: 500;
    line-height: 112.5%; /* 112.5% */

    color: ${colors.white};
    background: ${colors.orange};

    border: none;
    border-radius: 12px;
  }

  ${mq.tablet} {
    padding: 16px 75px;

    font-size: 20px;
    line-height: 120%; /* 120% */
  }
`;

export const ProgressBar = styled.div`
  ${mq.smallMobile} {
    display: flex;
    justify-content: space-around;
    width: 178px;
    height: 4px;
  }
  ${mq.tablet} {
    width: 268px;
  }
`;

export const BarItem = styled.div`
  ${mq.smallMobile} {
    width: 50px;
    height: 4px;
    border-radius: 2px;

    background: #303030;
  }
  ${mq.tablet} {
    width: 80px;
  }
`;
