import styled from '@emotion/styled';

import { colors, mq } from '../../utils';

export const Item = styled.li`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: 141px;
  padding: 16px;
  align-items: flex-start;

  font-size: 14px;
  line-heigth: 1.29;

  border-radius: 12px;
  border: 1px solid ${colors.textWhite02};
  background: ${colors.textWhite005};

  ${mq.mobile} {
    width: 335px;
  }

  ${mq.tablet} {
    width: 335px;
    align-items: center;
  }

  ${mq.desktop} {
    width: 405px;
  }
`;

export const SubDiv = styled.div`
  display: inline-flex;
  align-items: flex-start;
`;

export const TextDiet = styled.p`
  display: inline-flex;
  width: 41px;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-right: 94px;

  font-size: 12px;
  font-weight: 700;

  background-color: ${colors.textWhite005};
  border-radius: 4px;
  color: #fff;

  ${mq.tablet} {
    margin-right: 90px;
  }

  ${mq.desktop} {
    margin-right: 160px;
  }
`;

export const TextRecommended = styled.p`
  display: flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${colors.white};

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background: #419b09;
    margin-right: 8px;
  }
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;

  line-height: 1.29;

  color: inherit;
  background-color: transparent;
  cursor: pointer;

  color: ${colors.orange};

  ${mq.tablet} {
    font-size: 16px;
  }
`;

export const ArrowRight = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;

  ${mq.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const NameProduct = styled.p`
  display: inline-flex;
  margin-top: 35px;
  align-items: center;

  font-size: 20px;
  line-height: 1.2;

  color: ${colors.white};

  ${mq.tablet} {
    font-size: 24px;
    line-height: 1.33;
    margin-top: 27px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  margin-right: 16px;

  background-color: #efa082;
`;

export const RunningMan = styled.svg`
  width: 16px;
  height: 16x;
`;

export const SubTypeDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  ${mq.tablet} {
    margin-top: 12px;
  }
`;

export const SubType = styled.p`
  font-size: 12px;
  line-height: 1.5;
  margin-right: 4px;

  color: ${colors.textWhite04};
`;

export const SubTypeValue = styled.p`
  margin-right: 16px;

  color: ${colors.white};
`;
